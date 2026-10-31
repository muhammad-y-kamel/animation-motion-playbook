"""Executable SOURCE prototype for separately granted synthetic BAT only.
Not integrated into production. No actions on import; no current execution grant.
"""
from pathlib import Path
import argparse,fcntl,hashlib,importlib.util,json,os,resource,select,signal,socket,stat,subprocess,sys,threading,time
H=Path(__file__).resolve().parent;M=1024**2
SUPERVISOR_LIMITS={'RLIMIT_AS':[256*M,2048*M],'RLIMIT_DATA':[128*M,512*M],'RLIMIT_CPU':[30,240],'RLIMIT_STACK':[8*M,8*M],'RLIMIT_FSIZE':[M,24*M],'RLIMIT_CORE':[0,0]}
CONTROLLER_LIMITS={'RLIMIT_AS':[768*M,1024*M],'RLIMIT_DATA':[256*M,256*M],'RLIMIT_CPU':[210,240],'RLIMIT_STACK':[8*M,8*M],'RLIMIT_FSIZE':[24*M,24*M],'RLIMIT_CORE':[0,0]}
DECODER_LIMITS={'RLIMIT_AS':[1024*M,1024*M],'RLIMIT_DATA':[256*M,256*M],'RLIMIT_CPU':[90,90],'RLIMIT_STACK':[M,8*M],'RLIMIT_FSIZE':[24*M,24*M],'RLIMIT_CORE':[0,0]}
# ownership dataclasses require ordinary module registration for isolated imports.
def load(name):
 sp=importlib.util.spec_from_file_location('subreaper_'+name,H/(name+'.py'));m=importlib.util.module_from_spec(sp);sys.modules[sp.name]=m;sp.loader.exec_module(m);return m
ownmod=load('ownership');ipc=load('ipc');STOP=[]
def need(ok,msg):
 if not ok:raise RuntimeError(msg)
def safe_path(value):
 p=Path(value);need(p.is_absolute()and'..'not in p.parts,'Absolute lexical path')
 for x in(p,*p.parents):need(not x.is_symlink(),'No symlink path')
 return p

def sha(p):
 h=hashlib.sha256()
 with open(p,'rb')as f:
  for b in iter(lambda:f.read(65536),b''):h.update(b)
 return h.hexdigest()
def read(p):
 need(Path(p).stat().st_size<=1024**2,'Metadata1MiB cap');return json.loads(Path(p).read_text())
def proc(pid):
 text=Path('/proc/'+str(pid)+'/stat').read_text();v=text[text.rfind(')')+2:].split();return {'pid':pid,'startTick':v[19],'parentPid':int(v[1]),'bootId':Path('/proc/sys/kernel/random/boot_id').read_text().strip(),'pidNamespace':os.readlink('/proc/'+str(pid)+'/ns/pid')}
def identity(pid):return {k:v for k,v in proc(pid).items()if k!='parentPid'}
def limits(values):
 for name,pair in values.items():
  need(name in ('RLIMIT_AS','RLIMIT_DATA','RLIMIT_CPU','RLIMIT_STACK','RLIMIT_FSIZE','RLIMIT_CORE'),'Fixed limits');resource.setrlimit(getattr(resource,name),tuple(pair))
def validate_inheritance(supervisor,roles):
 for role,spec in roles.items():
  for name,pair in spec['limits'].items():
   need(name in supervisor and len(pair)==2 and 0<=pair[0]<=pair[1],'Explicit child resource bounds')
   need(pair[1]<=supervisor[name][1],'Child hard limit exceeds inherited outer ceiling')

def durable_new(path,value):
 data=(json.dumps(value,sort_keys=True)+'\n').encode();need(len(data)<=32768,'Record32KiB cap')
 fd=os.open(path,os.O_WRONLY|os.O_CREAT|os.O_EXCL|os.O_NOFOLLOW,0o600)
 try:
  need(os.write(fd,data)==len(data),'Short durable record write');os.fsync(fd)
 finally:os.close(fd)
 directory=os.open(Path(path).parent,os.O_RDONLY|os.O_DIRECTORY)
 try:os.fsync(directory)
 finally:os.close(directory)
def subreaper():
 import ctypes
 libc=ctypes.CDLL(None,use_errno=True);need(libc.prctl(36,1,0,0,0)==0,'PR_SET_CHILD_SUBREAPER failed');got=ctypes.c_int();need(libc.prctl(37,ctypes.byref(got),0,0,0)==0 and got.value==1,'Subreaper readback')
def pidfd_pid(fd):
 rows=Path('/proc/self/fdinfo/'+str(fd)).read_text().splitlines();return int(next(x.split()[1]for x in rows if x.startswith('Pid:')))

class Runner:
 def __init__(self,c,attempt,lease):
  self.c=c;self.attempt=attempt;self.lease=lease;self.owned=ownmod.Ownership();self.controller=None;self.parent=identity(os.getpid());self.generation=c['generation'];self.journal_seq=0;self.started=time.monotonic();self.last_check=self.started;self.done=False;self.cancel=False;self.deadlines={};self.release_sockets=[]
 def persist(self):
  self.journal_seq+=1;need(self.journal_seq<=512,'Journal512 record cap')
  durable_new(self.attempt/f'journal-{self.journal_seq:04d}.json',{'generation':self.generation,'supervisor':self.parent,'children':[{'role':x.role,'pid':x.pid,'registered':x.registered,'released':x.released,'observedReaped':x.observed_reaped,'returncode':x.returncode,'parentReport':x.parent_report}for x in self.owned.children],'errors':self.owned.errors})
 def monitor(self):
  now=time.monotonic();need(now-self.last_check<=1,'Observed supervisor cadence1s');self.last_check=now;need(now-self.started<=self.c['supervisorWallSeconds'],'Supervisor wall budget');need(not STOP,'Supervisor softCPU/signal stop')
  usage=[]
  for pid in [os.getpid(),*[x.pid for x in self.owned.children if x.pid and not x.observed_reaped]]:
   try:rows=Path('/proc/'+str(pid)+'/status').read_text().splitlines();rss=int(next(x.split()[1]for x in rows if x.startswith('VmRSS:')))*1024
   except (FileNotFoundError,StopIteration):continue
   usage.append(rss)
   if pid==os.getpid():need(rss<=128*1024**2,'SupervisorRSS128MiB')
   else:
    role=next(x.role for x in self.owned.children if x.pid==pid);need(rss<=(384 if role=='controller'else 256)*1024**2,'Per-role RSS cap')
  need(sum(usage)<=2*1024**3,'Aggregate newRSS2GiB')
  available=int(next(x.split()[1]for x in Path('/proc/meminfo').read_text().splitlines()if x.startswith('MemAvailable:')))*1024;need(available>=4*1024**3,'Running4GiB floor')
 def observe(self,item):
  if item.observed_reaped:return
  if item.process is not None:
   code=item.process.poll()
   if code is not None:item.returncode=code;item.observed_reaped=True
  elif self.controller and self.controller.observed_reaped:
   # Only this still-live original subreaper can reap its now-adopted child.
   try:pid,status=os.waitpid(item.pid,os.WNOHANG)
   except ChildProcessError:return # no invented exit/reap from ECHILD
   if pid==item.pid:item.returncode=os.waitstatus_to_exitcode(status);item.observed_reaped=True
 def stop(self,item):
  if item.observed_reaped:return
  self.deadlines.setdefault(id(item),time.monotonic()+5)
  sig=signal.SIGTERM if time.monotonic()<self.deadlines[id(item)]else signal.SIGKILL
  if item.pidfd is not None:
   try:signal.pidfd_send_signal(item.pidfd,sig)
   except ProcessLookupError:pass
  elif item.process is not None:
   # Still-original exact Popen owned before pidfd setup failure.
   item.process.send_signal(sig)
 def rescue_adopted(self):
  if not(self.controller and self.controller.observed_reaped):return
  # This scan is only in the continuously-live original parent; never on resume.
  ids=Path('/proc/self/task/'+str(threading.get_native_id())+'/children').read_text().split()
  known={x.pid for x in self.owned.children}
  for value in ids:
   pid=int(value)
   if pid in known:continue
   info=proc(pid);need(info['parentPid']==os.getpid(),'Only current actual adopted direct child')
   item=self.owned.own('adopted-unregistered',None);item.pid=pid
   item.pidfd=os.pidfd_open(pid,0);need(pidfd_pid(item.pidfd)==pid and proc(pid)==info,'Adopted child identity race');self.cancel=True
 def handle(self,msg,fds,credentials):
  sender,uid,gid=credentials;need(uid==os.getuid()and gid==os.getgid(),'Kernel sender credential mismatch');need(msg.get('generation')==self.generation,'Exact generation')
  if msg['op']=='ACK':
   need(len(fds)==2,'ACK self-pidfd/private-release pair');pidfd,reply=fds;role=msg['role'];need(role in self.c['roles'],'Fixed role')
   spec=self.c['roles'][role];actual=identity(sender);expected_parent=self.parent if role=='controller'else identity(self.controller.pid)
   need(msg['identity']==actual and msg['parent']==expected_parent and proc(sender)['parentPid']==expected_parent['pid'],'Exact child/parent identity')
   need(pidfd_pid(pidfd)==sender and msg['targetSha256']==spec['targetSha256']and msg['commandSha256']==spec['commandSha256']and msg['limits']==spec['limits']and msg['leaseIdentity']==self.c['leaseIdentity']and msg['pdeathsig']==signal.SIGKILL and msg['execStarted']is False,'ACK target/limits/lease/guard binding')
   if role=='controller':item=self.controller;need(item.pid==sender and not item.registered,'Owned controller PID/no duplicate ACK')
   else:
    need(not self.cancel and self.controller and not self.controller.observed_reaped,'No new decoder after controller loss')
    prior=[x for x in self.owned.children if x.role!='controller'];need(all(x.observed_reaped and x.returncode==0 for x in prior),'One sequential successful decoder')
    sequence=[r for r in ('video','audio')if r in self.c['roles']];need(len(prior)<len(sequence)and role==sequence[len(prior)],'Exact video then audio, no duplicate role')
    item=self.owned.own(role,None);item.pid=sender
   if item.pidfd is None:item.pidfd=pidfd
   else:os.close(pidfd)
   fds.remove(pidfd)
   item.identity=actual;item.registered=True;self.persist() # fallible: item already owned
   private=socket.socket(fileno=reply);fds.remove(reply);self.release_sockets.append(private)
   self.monitor();need(not self.cancel,'No release after cancel');private.sendall(b'G');private.close();self.release_sockets.remove(private);item.released=True
  elif msg['op'] in ('SPAWNED','REAPED'):
   need(not fds and self.controller and sender==self.controller.pid,'Controller-only lifetime report')
   matches=[x for x in self.owned.children if x.pid==msg['pid']and x.role==msg['role']]
   if msg['op']=='REAPED':
    need(len(matches)==1 and type(msg['returncode'])is int,'Known exact child report');item=matches[0]
    need(item.identity is not None and msg.get('identity')==item.identity,'Full registered child identity in reap report')
    if item.observed_reaped:
     need(item.returncode==msg['returncode'],'Conflicting duplicate reap report');return
    item.parent_report=True;item.returncode=msg['returncode'];item.observed_reaped=True;self.persist()
   # SPAWNED is intent telemetry, never a reap/release grant.
  else:raise RuntimeError('Unknown control message')
 def terminal(self):
  self.rescue_adopted();need(all(x.observed_reaped for x in self.owned.children),'All exact children observed reaped');need(not Path('/proc/self/task/'+str(threading.get_native_id())+'/children').read_text().strip(),'No remaining direct adopted children')
  durable_new(self.attempt/'TERMINAL.json',{'status':'SYNTHETIC_LIFECYCLE_OWNERSHIP_CLOSED_NOT_MEDIA_ACCEPTANCE','allOwnedChildrenObservedReaped':True,'startedSha256':sha(self.attempt/'STARTED.json'),'generation':self.generation,'errors':self.owned.errors})
 def release_lease(self):os.close(self.lease);self.lease=None
 def sleep(self,seconds):
  try:self.rescue_adopted()
  except BaseException as ex:self.owned.note(ex)
  time.sleep(seconds)

 def run(self):
  broker,childsock=socket.socketpair(socket.AF_UNIX,socket.SOCK_SEQPACKET);broker.setsockopt(socket.SOL_SOCKET,socket.SO_PASSCRED,1);broker.setblocking(False)
  spec=dict(self.c['roles']['controller'],role='controller',parent=self.parent,generation=self.generation,brokerFd=childsock.fileno(),leaseFd=self.lease,leaseIdentity=self.c['leaseIdentity'])
  context={'brokerFd':childsock.fileno(),'leaseFd':self.lease,'leaseIdentity':self.c['leaseIdentity'],'generation':self.generation,'pythonPath':self.c['pythonPath'],'bootstrapPath':str(H/'bootstrap.py'),'decoderSpecs':{k:v for k,v in self.c['roles'].items()if k!='controller'}}
  spec['environment']={**spec['environment'],'LIFECYCLE_CONTEXT':json.dumps(context,separators=(',',':'))}
  argv=[self.c['pythonPath'],'-I','-B',str(H/'bootstrap.py'),'--spec-json',json.dumps(spec,separators=(',',':'))]
  try:
   durable_new(self.attempt/'STARTED.json',{'status':'BAT_SYNTHETIC_STARTED_NOT_CLOSED','supervisor':self.parent,'generation':self.generation,'controllerCommandSha256':spec['commandSha256']})
   process=subprocess.Popen(argv,stdin=subprocess.DEVNULL,stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL,pass_fds=(childsock.fileno(),self.lease),close_fds=True,env=spec['environment'],preexec_fn=lambda:limits(spec['limits']))
   self.controller=self.owned.own('controller',process) # immediate, before pidfd/proc/journal
   self.controller.pidfd=os.pidfd_open(process.pid,0);childsock.close();self.persist()
   while True:
    self.monitor();self.observe(self.controller)
    if self.controller.observed_reaped:
     self.cancel=True;self.rescue_adopted();break
    ready,_,_=select.select([broker],[],[],.1)
    if ready:
     msg,fds,cred=ipc.receive(broker)
     try:self.handle(msg,fds,cred)
     except BaseException:
      for fd in fds:
       if all(x.pidfd!=fd for x in self.owned.children):
        try:os.close(fd)
        except OSError:pass
      raise
  except BaseException as ex:self.cancel=True;self.owned.note(ex)
  finally:
   # Drain any already-written reap reports before stopping/adoption. No new ACK
   # release is permitted once cancel is true; otherwise controller loss could
   # race an in-flight bootstrap.
   self.cancel=True
   while True:
    try:msg,fds,cred=ipc.receive(broker);self.handle(msg,fds,cred)
    except BlockingIOError:break
    except BaseException as ex:self.owned.note(ex);break
   self.owned.close(self)
   for sock in self.release_sockets:
    try:sock.close()
    except OSError:pass
   broker.close();childsock.close()
   for child in self.owned.children:
    if child.pidfd is not None:os.close(child.pidfd)
  return {'ownershipClosed':True,'controllerReturncode':self.controller.returncode if self.controller else None,'errors':list(self.owned.errors)}

def registry_clear(root,generation=None):
 for attempt in Path(root).iterdir():
  if not attempt.is_dir():continue
  start=attempt/'STARTED.json';terminal=attempt/'TERMINAL.json'
  if start.exists():
   if generation is not None:need(read(start).get('generation')!=generation,'No supervisor generation reuse')
   need(terminal.exists(),'Unresolved previous START blocks every new attempt')
   t=read(terminal);need(t.get('allOwnedChildrenObservedReaped')is True and t.get('startedSha256')==sha(start),'Exact previous terminal/reap binding')

def main():
 ap=argparse.ArgumentParser();ap.add_argument('--config',required=True);ap.add_argument('--go',required=True);x=ap.parse_args();c=read(x.config);g=read(x.go)
 need(g.get('status')=='ROOT_APPROVED_ISOLATED_BAT_SYNTHETIC_LIFECYCLE_ONLY'and g.get('configSha256')==sha(x.config)and g.get('sourceFreezeSha256')==sha(H/'FREEZE.json'),'Separate exact synthetic BAT authority only')
 need(len(c['generation'])==64 and all(x in '0123456789abcdef'for x in c['generation']),'Fresh256bit generation format')
 need(set(c['roles'])<={'controller','video','audio'}and 'controller'in c['roles'],'Only synthetic fixed roles')
 for role,spec in c['roles'].items():
  need(spec['argv']==[c['pythonPath'],'-I','-B',str(H/('bat_controller.py'if role=='controller'else'bat_child.py'))],'Synthetic fixture targets only, no media')
  need(spec['limits']==(CONTROLLER_LIMITS if role=='controller'else DECODER_LIMITS),'Exact role resource profile')
  need(0<spec['ackDeadlineSeconds']<=30,'Bounded ACK deadline')
 need(g.get('noMediaCommands')is True and g.get('executableWritersExcluded')is True and g.get('newBatIsolationExplicit')is True,'Explicit synthetic isolated BAT boundary')
 for ref in read(H/'FREEZE.json')['files']:
  relative=Path(ref['path']);need(not relative.is_absolute()and len(relative.parts)==1,'Portable source member only');need(sha(H/relative)==ref['sha256'],'Source drift')
 need(c.get('runtimePins')and any(r['path']==c['pythonPath']for r in c['runtimePins']),'Separate actual BAT Python/loader closure required')
 for ref in c['runtimePins']:need(sha(safe_path(ref['path']))==ref['sha256'],'Actual BAT runtime drift')
 need(sys.flags.isolated and sys.flags.dont_write_bytecode and not sys.flags.no_site and threading.get_native_id()==os.getpid(),'Retained single owner thread/I-B')
 # No current environment config/GO exists. All limits are separately admitted.
 need(c['supervisorLimits']==g['supervisorLimits']==SUPERVISOR_LIMITS,'Exact outer cap grant');validate_inheritance(c['supervisorLimits'],c['roles']);limits(c['supervisorLimits']);subreaper()
 attempt=safe_path(c['attemptDirectory']);registry=safe_path(c['registryRoot']);need(attempt.is_absolute()and attempt.parent==registry and registry.is_dir()and not attempt.exists(),'Exclusive registry attempt');registry_clear(registry,c['generation'])
 lease=os.open(safe_path(c['leasePath']),os.O_RDWR|os.O_NOFOLLOW);st=os.fstat(lease);need(stat.S_ISREG(st.st_mode)and[st.st_dev,st.st_ino]==c['leaseIdentity'],'Regular exact lease');fcntl.flock(lease,fcntl.LOCK_EX|fcntl.LOCK_NB);registry_clear(registry,c['generation'])
 available=int(next(x.split()[1]for x in Path('/proc/meminfo').read_text().splitlines()if x.startswith('MemAvailable:')))*1024;need(available>=6*1024**3,'Prestart6GiB floor');attempt.mkdir()
 for sig in (signal.SIGTERM,signal.SIGINT,signal.SIGHUP,signal.SIGXCPU):signal.signal(sig,lambda sig,frame:STOP.append(sig)if len(STOP)<8 else None)
 result=Runner(c,attempt,lease).run();print(json.dumps(result))
 if result['errors']or result['controllerReturncode']!=0:raise SystemExit(1)
if __name__=='__main__':main()
