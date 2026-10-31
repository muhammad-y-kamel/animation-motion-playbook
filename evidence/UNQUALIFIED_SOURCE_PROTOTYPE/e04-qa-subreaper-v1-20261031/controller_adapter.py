"""Source-only Popen wrapper: actual Popen/wait ownership stays with controller."""
from pathlib import Path
import hashlib,importlib.util,json,os,socket,threading
sp=importlib.util.spec_from_file_location('lifecycle_ipc',Path(__file__).with_name('ipc.py'));ipc=importlib.util.module_from_spec(sp);sp.loader.exec_module(ipc)
def command_sha(argv):return hashlib.sha256(json.dumps(argv,separators=(',',':')).encode()).hexdigest()
def wrap_popen(original_popen,context,identity_reader):
 broker=socket.socket(fileno=os.dup(context['brokerFd']));broker.settimeout(.1)
 def popen(argv,**kwargs):
  if threading.get_native_id()!=os.getpid():raise RuntimeError('Popen must use retained main creating thread')
  choices=[(role,s)for role,s in context['decoderSpecs'].items()if s['argv']==list(argv)]
  if len(choices)!=1:raise RuntimeError('Only exact pinned decoder command')
  role,base=choices[0];spec=dict(base,parent=identity_reader(os.getpid()),generation=context['generation'],brokerFd=context['brokerFd'],leaseFd=context['leaseFd'],leaseIdentity=context['leaseIdentity'],role=role)
  if command_sha(argv)!=spec['commandSha256']:raise RuntimeError('Exact command digest')
  passed=tuple(dict.fromkeys((*kwargs.get('pass_fds',()),context['brokerFd'],context['leaseFd'])))
  options=dict(kwargs,pass_fds=passed)
  child=original_popen([context['pythonPath'],'-I','-B',context['bootstrapPath'],'--spec-json',json.dumps(spec,separators=(',',':'))],**options)
  # Store the true Popen immediately; no identity read or IPC precedes ownership.
  context['owned'].append(child)
  child_identity=None
  try:child_identity=identity_reader(child.pid)
  except BaseException as ex:
   if len(context['ipcErrors'])<8:context['ipcErrors'].append(repr(ex)[:512])
  original_poll,original_wait=child.poll,child.wait;reported=[False]
  def report():
   if child.returncode is not None and not reported[0]:
    try:ipc.send(broker,{'op':'REAPED','role':role,'pid':child.pid,'identity':child_identity,'returncode':child.returncode,'generation':context['generation']});reported[0]=True
    except BaseException as ex:
     if len(context['ipcErrors'])<8:context['ipcErrors'].append(repr(ex)[:512])
  def poll():
   value=original_poll();report();return value
  def wait(*args,**kw):
   value=original_wait(*args,**kw);report();return value
  child.poll=poll;child.wait=wait
  try:ipc.send(broker,{'op':'SPAWNED','role':role,'pid':child.pid,'identity':child_identity,'commandSha256':spec['commandSha256'],'generation':context['generation']})
  except BaseException as ex:
   # Return ownership to unchanged caller even if diagnostic registration fails.
   # The outer EOF/controller-stop path independently contains already-owned work.
   if len(context['ipcErrors'])<8:context['ipcErrors'].append(repr(ex)[:512])
  return child
 return popen
