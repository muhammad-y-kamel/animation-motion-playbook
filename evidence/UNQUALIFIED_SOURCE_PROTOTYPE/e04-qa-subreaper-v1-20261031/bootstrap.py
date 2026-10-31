"""Prospective same-PID FD-exec guard. No actions on import. BAT qualification required."""
import argparse,hashlib,json,os,resource,signal,socket,stat,sys,threading
from pathlib import Path
# Isolated -I requires explicit pinned sibling import by absolute source location.
import importlib.util
sp=importlib.util.spec_from_file_location('prototype_ipc',Path(__file__).with_name('ipc.py'));ipc=importlib.util.module_from_spec(sp);sp.loader.exec_module(ipc)
def need(ok,msg):
 if not ok:raise RuntimeError(msg)
def tick(pid):
 s=Path('/proc/'+str(pid)+'/stat').read_text();return s[s.rfind(')')+2:].split()[19]
def identity(pid):return {'pid':pid,'startTick':tick(pid),'bootId':Path('/proc/sys/kernel/random/boot_id').read_text().strip(),'pidNamespace':os.readlink('/proc/'+str(pid)+'/ns/pid')}
def parent_ok(expected):need(os.getppid()==expected['pid']and identity(os.getppid())==expected,'Exact creating-parent identity lost')
def set_pdeath(expected):
 import ctypes
 parent_ok(expected);libc=ctypes.CDLL(None,use_errno=True);need(libc.prctl(1,signal.SIGKILL,0,0,0)==0,'PDEATHSIG set failed');got=ctypes.c_int();need(libc.prctl(2,ctypes.byref(got),0,0,0)==0 and got.value==signal.SIGKILL,'PDEATHSIG readback');parent_ok(expected)
def verified_target(path,digest):
 p=Path(path);need(p.is_absolute()and'..'not in p.parts,'Absolute target')
 for a in(p,*p.parents):need(not a.is_symlink(),'Target ancestor symlink')
 fd=os.open(p,os.O_RDONLY|os.O_NOFOLLOW);st=os.fstat(fd)
 try:
  need(stat.S_ISREG(st.st_mode)and not st.st_mode&(stat.S_ISUID|stat.S_ISGID),'Nonprivileged regular executable')
  need('security.capability'not in os.listxattr(fd),'File capabilities forbidden')
  h=hashlib.sha256()
  while True:
   block=os.read(fd,65536)
   if not block:break
   h.update(block)
  after=os.fstat(fd);need((st.st_dev,st.st_ino,st.st_size,st.st_mtime_ns,st.st_ctime_ns)==(after.st_dev,after.st_ino,after.st_size,after.st_mtime_ns,after.st_ctime_ns)and h.hexdigest()==digest,'Target FD bytes/identity drift')
  need(os.execve in os.supports_fd,'Audited FD exec support required');return fd
 except BaseException:os.close(fd);raise

def main():
 ap=argparse.ArgumentParser();ap.add_argument('--spec-json',required=True);x=ap.parse_args();need(len(x.spec_json)<=16384,'Bootstrap spec cap');s=json.loads(x.spec_json)
 need(threading.get_native_id()==os.getpid(),'Creating main thread only');set_pdeath(s['parent'])
 observed={}
 for key,expected in s['limits'].items():
  need(key in ('RLIMIT_AS','RLIMIT_DATA','RLIMIT_CPU','RLIMIT_STACK','RLIMIT_FSIZE','RLIMIT_CORE'),'Fixed resource limit keys');observed[key]=list(resource.getrlimit(getattr(resource,key)));need(observed[key]==expected,'Actual resource limit mismatch')
 lease=os.fstat(s['leaseFd']);need(stat.S_ISREG(lease.st_mode)and[lease.st_dev,lease.st_ino]==s['leaseIdentity'],'Exact regular lease FD')
 target=verified_target(s['argv'][0],s['targetSha256']);pidfd=os.pidfd_open(os.getpid(),0)
 broker=socket.socket(fileno=s['brokerFd']);broker.settimeout(.1);private,remote=socket.socketpair(socket.AF_UNIX,socket.SOCK_SEQPACKET);private.settimeout(s['ackDeadlineSeconds'])
 ack={'op':'ACK','role':s['role'],'generation':s['generation'],'identity':identity(os.getpid()),'parent':s['parent'],'targetSha256':s['targetSha256'],'commandSha256':s['commandSha256'],'limits':observed,'leaseIdentity':s['leaseIdentity'],'pdeathsig':signal.SIGKILL,'execStarted':False}
 ipc.send(broker,ack,(pidfd,remote.fileno()));remote.close();os.close(pidfd)
 need(private.recv(2)==b'G','Exact supervisor release required');private.close();parent_ok(s['parent'])
 # Held verified FD closes pathname replacement race. In-place writer exclusion
 # remains an explicit admission prerequisite. No credential changes here.
 if s['role']!='controller':broker.close()
 else:os.set_inheritable(broker.fileno(),True)
 os.set_inheritable(s['leaseFd'],True);os.set_inheritable(target,True)
 os.execve(target,s['argv'],s['environment'])
if __name__=='__main__':main()
