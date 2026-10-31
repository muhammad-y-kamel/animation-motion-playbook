"""Fake process/FD only. No kernel child, lease, registry, socket, signal or native call."""
from pathlib import Path
import importlib.util,sys,unittest,struct,socket
from unittest.mock import Mock,patch
H=Path(__file__).resolve().parent
def load(name):
 sp=importlib.util.spec_from_file_location('test_life_'+name,H/(name+'.py'));m=importlib.util.module_from_spec(sp);sys.modules[sp.name]=m;sp.loader.exec_module(m);return m
own=load('ownership');ipc=load('ipc');adapter=load('controller_adapter');sup=load('supervisor')
class Cleanup(unittest.TestCase):
 def test_all_faults_do_not_skip_child_reap_or_lease(self):
  owned=own.Ownership();a=owned.own('controller',Mock(pid=1));b=owned.own('video',Mock(pid=2));calls=[];n={'observe':0,'terminal':0}
  def observe(x):
   n['observe']+=1;calls.append(('observe',x.role))
   if n['observe']>5:x.observed_reaped=True
  def terminal():
   n['terminal']+=1
   if n['terminal']==1:raise OSError('fsync')
   self.assertTrue(all(x.observed_reaped for x in owned.children))
  io=Mock();io.observe=observe;io.stop=Mock(side_effect=OSError('signal'));io.monitor=Mock(side_effect=OSError('monitor'));io.persist=Mock(side_effect=OSError('journal'));io.sleep=Mock(side_effect=OSError('sleep'));io.terminal=terminal;io.release_lease=lambda:calls.append(('release',None));owned.close(io)
  self.assertEqual(calls[-1],('release',None));self.assertTrue(io.stop.called);self.assertTrue(io.monitor.called);self.assertLessEqual(len(owned.errors),8)
 def test_new_adopted_child_discovered_at_terminal_reenters_cleanup(self):
  owned=own.Ownership();a=owned.own('controller',None);a.observed_reaped=True;n=[0];seen=[]
  def terminal():
   if n[0]==0:n[0]+=1;owned.own('adopted',None);raise RuntimeError('new adopted child')
  io=Mock();io.observe=lambda x:(seen.append(x.role),setattr(x,'observed_reaped',True));io.stop=lambda x:None;io.monitor=lambda:None;io.persist=lambda:None;io.sleep=lambda x:None;io.terminal=terminal;io.release_lease=Mock();owned.close(io);self.assertIn('adopted',seen);io.release_lease.assert_called_once()
class IPC(unittest.TestCase):
 def test_cap_and_no_media_packet(self):
  with self.assertRaises(RuntimeError):ipc.encode({'payload':'x'*4097})
  sock=Mock();sock.sendmsg.return_value=1
  with self.assertRaises(RuntimeError):ipc.send(sock,{'op':'ACK'})
 def test_credentials_and_bounded_frame(self):
  s=Mock();s.recvmsg.return_value=(b'{"op":"ACK"}',[(socket.SOL_SOCKET,socket.SCM_CREDENTIALS,struct.pack('3i',7,8,9))],0,None);msg,fds,cred=ipc.receive(s);self.assertEqual(cred,(7,8,9));self.assertEqual(fds,[])
 def test_eof_truncation_and_missing_credentials_fail(self):
  for data,anc,flags in [(b'',[],0),(b'{}',[],0),(b'{}',[(socket.SOL_SOCKET,socket.SCM_CREDENTIALS,struct.pack('3i',1,2,3))],socket.MSG_TRUNC)]:
   s=Mock();s.recvmsg.return_value=(data,anc,flags,None)
   with self.assertRaises((RuntimeError,EOFError)):ipc.receive(s)
class Adapter(unittest.TestCase):
 def context(self):
  argv=['/exact/python','/exact/bat_child.py'];return argv,{'brokerFd':44,'leaseFd':45,'leaseIdentity':[1,2],'generation':'a'*64,'pythonPath':'/exact/python','bootstrapPath':'/exact/bootstrap.py','decoderSpecs':{'video':{'argv':argv,'commandSha256':adapter.command_sha(argv)}},'owned':[],'ipcErrors':[]}
 def test_real_popen_object_and_original_wait_preserved(self):
  argv,c=self.context();child=Mock(pid=9,returncode=None);child.poll.return_value=None
  def wait(*a,**kw):child.returncode=0;return 0
  child.wait=Mock(side_effect=wait);original=Mock(return_value=child)
  with patch.object(adapter.os,'dup',return_value=55),patch.object(adapter.socket,'socket',return_value=Mock()),patch.object(adapter.threading,'get_native_id',return_value=1),patch.object(adapter.os,'getpid',return_value=1),patch.object(adapter.ipc,'send')as send:
   wrapper=adapter.wrap_popen(original,c,lambda pid:{'pid':pid});actual=wrapper(argv,pass_fds=(45,),close_fds=True);self.assertIs(actual,child);self.assertEqual(c['owned'],[child]);self.assertEqual(actual.wait(timeout=2),0);self.assertEqual(send.call_args.args[1]['op'],'REAPED');self.assertIn(44,original.call_args.kwargs['pass_fds'])
 def test_ipc_registration_error_still_returns_owned_popen(self):
  argv,c=self.context();child=Mock(pid=9,returncode=None)
  with patch.object(adapter.os,'dup',return_value=55),patch.object(adapter.socket,'socket',return_value=Mock()),patch.object(adapter.threading,'get_native_id',return_value=1),patch.object(adapter.os,'getpid',return_value=1),patch.object(adapter.ipc,'send',side_effect=OSError('EOF')):
   actual=adapter.wrap_popen(Mock(return_value=child),c,lambda pid:{'pid':pid})(argv);self.assertIs(actual,child);self.assertEqual(c['owned'],[child]);self.assertTrue(c['ipcErrors'])
 def test_unknown_command_no_spawn(self):
  argv,c=self.context();original=Mock()
  with patch.object(adapter.os,'dup',return_value=55),patch.object(adapter.socket,'socket',return_value=Mock()),patch.object(adapter.threading,'get_native_id',return_value=1),patch.object(adapter.os,'getpid',return_value=1),self.assertRaises(RuntimeError):adapter.wrap_popen(original,c,lambda pid:{})(['/unknown'])
  original.assert_not_called()
class Caps(unittest.TestCase):
 def test_inherited_hard_ceiling_checked_before_spawn(self):
  with self.assertRaisesRegex(RuntimeError,'inherited'):sup.validate_inheritance({'RLIMIT_CPU':[30,60]},{'controller':{'limits':{'RLIMIT_CPU':[210,240]}}})
  sup.validate_inheritance({'RLIMIT_CPU':[30,240]},{'controller':{'limits':{'RLIMIT_CPU':[210,240]}}})
 def test_no_native_calls_in_module_import_path(self):
  import ast
  for name in ['bootstrap.py','supervisor.py']:
   tree=ast.parse((H/name).read_text());self.assertFalse(any(isinstance(n,ast.Import)and any(a.name=='ctypes'for a in n.names)for n in tree.body))

class SupervisorReports(unittest.TestCase):
 def runner(self):
  r=sup.Runner.__new__(sup.Runner);r.generation='a'*64;r.owned=own.Ownership();r.controller=r.owned.own('controller',Mock(pid=10));r.controller.pid=10;r.controller.observed_reaped=True;r.controller.returncode=0;r.persist=Mock();r.cancel=False;r.c={'roles':{}};item=r.owned.own('video',None);item.pid=11;item.pidfd=33;item.registered=True;item.identity={'pid':11,'startTick':'100','bootId':'boot','pidNamespace':'ns'};return r,item
 def report(self,item,code=0):return {'op':'REAPED','generation':'a'*64,'role':'video','pid':11,'identity':item.identity,'returncode':code}
 def test_duplicate_same_reap_idempotent_conflict_rejected(self):
  r,item=self.runner()
  with patch.object(sup.os,'getuid',return_value=1),patch.object(sup.os,'getgid',return_value=2):
   r.handle(self.report(item),[],(10,1,2));r.handle(self.report(item),[],(10,1,2));self.assertEqual(r.persist.call_count,1)
   with self.assertRaisesRegex(RuntimeError,'Conflicting'):r.handle(self.report(item,7),[],(10,1,2))
  self.assertEqual(item.returncode,0)
 def test_wrong_start_identity_rejected_even_same_pid(self):
  r,item=self.runner();msg=self.report(item);msg['identity']={**item.identity,'startTick':'999'}
  with patch.object(sup.os,'getuid',return_value=1),patch.object(sup.os,'getgid',return_value=2),self.assertRaisesRegex(RuntimeError,'registered child identity'):r.handle(msg,[],(10,1,2))
  self.assertFalse(item.observed_reaped)
 def test_lost_normal_reap_report_echild_not_promoted(self):
  r,item=self.runner()
  with patch.object(sup.os,'waitpid',side_effect=ChildProcessError):r.observe(item)
  self.assertFalse(item.observed_reaped);self.assertIsNone(item.returncode)
 def test_controller_exit_zero_does_not_promote_active_child(self):
  r,item=self.runner();r.rescue_adopted=Mock()
  with self.assertRaisesRegex(RuntimeError,'All exact children'):r.terminal()

if __name__=='__main__':unittest.main(verbosity=2)
