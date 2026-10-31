"""Synthetic BAT entry point only. No media. Never run in current HOLD."""
from pathlib import Path
import importlib.util,json,os,subprocess,sys
H=Path(__file__).resolve().parent
def load(name):
 sp=importlib.util.spec_from_file_location('bat_'+name,H/(name+'.py'));m=importlib.util.module_from_spec(sp);sp.loader.exec_module(m);return m
def main():
 c=json.loads(os.environ['LIFECYCLE_CONTEXT']);c['owned']=[];c['ipcErrors']=[];adapter=load('controller_adapter');bootstrap=load('bootstrap');spawn=adapter.wrap_popen(subprocess.Popen,c,bootstrap.identity)
 for role in ('video','audio'):
  if role not in c['decoderSpecs']:continue
  spec=c['decoderSpecs'][role]
  # Role caps are the planned exact same ones checked back by bootstrap.
  import resource
  def child_limits():
   for name,pair in spec['limits'].items():resource.setrlimit(getattr(resource,name),tuple(pair))
  p=spawn(spec['argv'],stdin=subprocess.DEVNULL,stdout=subprocess.PIPE,stderr=subprocess.PIPE,close_fds=True,pass_fds=(c['leaseFd'],),preexec_fn=child_limits,env=spec['environment'])
  if os.environ.get('BAT_CONTROLLER_EXIT_WITH_LIVE_CHILD')=='1':os._exit(71)
  data,errors=p.communicate(timeout=10)
  if p.returncode!=0 or c['ipcErrors']:raise RuntimeError('Synthetic BAT child/error HOLD')
 print('SYNTHETIC_BAT_NORMAL_POPEN_WAIT_RETURNED_NOT_MEDIA_ACCEPTANCE')
if __name__=='__main__':main()
