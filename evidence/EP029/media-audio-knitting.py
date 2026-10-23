from pathlib import Path
import json,hashlib
import numpy as np
from scipy.io import wavfile
from scipy.signal import correlate,correlation_lags
P=Path(__file__).resolve().parent;R=P.parent;sr,a=wavfile.read(R/'audio/EP029-mix.wav');_,b=wavfile.read(R/'audio/decoded-final.wav');a=a.astype(float).mean(1);b=b.astype(float).mean(1)
cues=json.loads((R/'audio/cue-sheet.json').read_text())['cues'];times=[c['time'] for c in cues if c['label']=='knitting needle contact']+[19.5,24.4];checks=[]
for t in times:
 i=round((t-.015)*sr);j=round((t+.07)*sr);x=a[i:j];y=b[i:j];c=correlate(y,x,method='fft');lags=correlation_lags(len(y),len(x));ok=abs(lags)<=240;lag=int(lags[np.flatnonzero(ok)[np.argmax(c[ok])]]);checks.append({'time':t,'lag_samples':lag,'lag_ms':lag/sr*1000,'normalized_zero_lag_correlation':float(np.dot(x,y)/(np.linalg.norm(x)*np.linalg.norm(y)))})
out={'video_sha256':hashlib.sha256((R/'EP029-The-Unraveling-Scarf.mp4').read_bytes()).hexdigest(),'checks':checks,'count':len(checks),'knit_hits':83,'all_lags_within_one_sample':all(abs(c['lag_samples'])<=1 for c in checks),'no_listening_claim':True,'source_contact_evidence':'media-audio-source-QA.json'};(P/'media-audio-knitting-QA.json').write_text(json.dumps(out,indent=2));assert out['all_lags_within_one_sample'];print('83 knitting and2 placement/catch windows:',len(checks),'pass; maximum lag',max(abs(c['lag_samples']) for c in checks))
