"""Injected-I/O cleanup core. Imported safely; no process/syscall on import."""
from dataclasses import dataclass,field
@dataclass
class Owned:
 role:str
 process:object|None=None
 pidfd:int|None=None
 pid:int|None=None
 registered:bool=False
 released:bool=False
 observed_reaped:bool=False
 returncode:int|None=None
 parent_report:bool=False
 identity:dict|None=None
@dataclass
class Ownership:
 children:list=field(default_factory=list)
 errors:list=field(default_factory=list)
 def own(self,role,process):
  item=Owned(role,process,pid=getattr(process,'pid',None));self.children.append(item);return item
 def note(self,error):
  if len(self.errors)<8:self.errors.append(repr(error)[:512])
 def cleanup_round(self,io):
  """Any telemetry/write/signal failure is isolated; every child still polled."""
  for item in self.children:
   if item.observed_reaped:continue
   for fn in (io.observe,io.stop,io.observe):
    try:fn(item)
    except BaseException as ex:self.note(ex)
  for fn in (io.monitor,io.persist):
   try:fn()
   except BaseException as ex:self.note(ex)
  return all(x.observed_reaped for x in self.children)
 def cleanup_until_reaped(self,io):
  while not self.cleanup_round(io):
   try:io.sleep(.1)
   except BaseException as ex:self.note(ex)
 def close(self,io):
  self.cleanup_until_reaped(io)
  # Do not escape on terminal fsync failure while claiming lease released.
  while True:
   try:io.terminal();break
   except BaseException as ex:
    self.note(ex)
    self.cleanup_until_reaped(io)
    try:io.sleep(.1)
    except BaseException as retry:self.note(retry)
  io.release_lease()
