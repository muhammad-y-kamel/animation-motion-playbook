"""After final mux: python audio/verify_mux.py /path/to/final.mp4. No listening claim."""
from pathlib import Path
import sys,subprocess,json,hashlib
import numpy as np
from scipy.io import wavfile
from scipy.signal import correlate,correlation_lags
P=Path(__file__).resolve().parent;v=Path(sys.argv[1]).resolve();out=P/'decoded-final.wav'
subprocess.run(['ffmpeg','-v','error','-y','-i',str(v),'-vn','-acodec','pcm_s16le','-ar','48000','-ac','2',str(out)],check=True)
sr,a=wavfile.read(P/'EP030-mix.wav');sr2,b=wavfile.read(out)
a=a.astype(float)/32768;b=b.astype(float)/32768;checks=[]
for t in json.loads((P/'cue-sheet.json').read_text())['critical_times']:
 i=int((t-.06)*sr);j=int((t+.3)*sr);x=a[i:j].mean(1);y=b[i:j].mean(1);c=correlate(y,x,method='fft');lags=correlation_lags(len(y),len(x));allowed=abs(lags)<=480;k=np.flatnonzero(allowed)[np.argmax(c[allowed])];lag=int(lags[k]);checks.append({'time':t,'lag_samples':lag,'lag_ms':lag/sr*1000,'window_rms':float(np.sqrt(np.mean(y*y)))})
q={'video':str(v),'video_sha256':hashlib.sha256(v.read_bytes()).hexdigest(),'decoded_samples':len(b),'decoded_duration':len(b)/sr2,'sample_rate':sr2,'channels':b.shape[1],'peak':float(abs(b).max()),'clipped_samples':int(np.sum(abs(b)>=32767/32768)),'cue_crosscorrelations':checks,'no_listening_claim':True,'visual_alignment_verified_here':False}
assert sr2==48000 and b.shape[1]==2
assert abs(len(b)-len(a))<=1024
assert q['clipped_samples']==0
assert all(abs(x['lag_samples'])<=1 for x in checks)
(P/'final-mux-QA.json').write_text(json.dumps(q,indent=2));print(json.dumps(q,indent=2))
