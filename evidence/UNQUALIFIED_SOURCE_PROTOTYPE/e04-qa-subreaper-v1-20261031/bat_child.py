"""Synthetic BAT child only; explicit future grant required, no media."""
import os,time
if __name__=='__main__':
 delay=float(os.environ.get('BAT_CHILD_SECONDS','0.2'))
 if not 0<=delay<=10:raise RuntimeError('Synthetic child delay bound')
 time.sleep(delay);os.write(1,b'bounded-synthetic-bytes\n')
