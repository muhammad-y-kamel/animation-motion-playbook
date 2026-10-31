"""Bounded AF_UNIX SOCK_SEQPACKET control messages, never media data."""
import array,json,socket,struct,os
CAP=4096
LIMIT_FDS=2
def encode(value):
 data=json.dumps(value,sort_keys=True,separators=(',',':')).encode()
 if len(data)>CAP:raise RuntimeError('Control packet4096 cap')
 return data
def send(sock,value,fds=()):
 if len(fds)>LIMIT_FDS:raise RuntimeError('Control FD cap')
 ancillary=[] if not fds else[(socket.SOL_SOCKET,socket.SCM_RIGHTS,array.array('i',fds))]
 data=encode(value)
 if sock.sendmsg([data],ancillary)!=len(data):raise RuntimeError('Short control packet')
def receive(sock):
 data,anc,flags,_=sock.recvmsg(CAP,socket.CMSG_SPACE(3*4)+socket.CMSG_SPACE(LIMIT_FDS*4))
 fds=[];credentials=None
 try:
  for level,kind,payload in anc:
   if level!=socket.SOL_SOCKET:raise RuntimeError('Unknown ancillary level')
   if kind==socket.SCM_RIGHTS:
    vals=array.array('i');vals.frombytes(payload[:len(payload)//vals.itemsize*vals.itemsize]);fds.extend(vals)
   elif kind==socket.SCM_CREDENTIALS:
    if credentials is not None:raise RuntimeError('Duplicate credentials')
    credentials=struct.unpack('3i',payload)
   else:raise RuntimeError('Unknown ancillary type')
  if not data:raise EOFError('Control EOF')
  if flags&(socket.MSG_TRUNC|socket.MSG_CTRUNC)or len(fds)>LIMIT_FDS:raise RuntimeError('Truncated/oversized control packet')
  if credentials is None:raise RuntimeError('Kernel sender credentials required')
  obj=json.loads(data);return obj,fds,credentials
 except BaseException:
  for fd in fds:
   try:os.close(fd)
   except OSError:pass
  raise
