from pathlib import Path
import subprocess,json,hashlib,numpy as np
from scipy.io.wavfile import read,write
from scipy.signal import correlate,correlation_lags
P=Path(__file__).resolve().parent;video=P.parent/'EP031-The-Held-Sneeze-v4.mp4';master=P.parent.parent/'audio/final-candidate-v1/EP031-v4-final-mix.wav'
hash_file=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
vhash_before=hash_file(video)
probe=json.loads(subprocess.check_output(['ffprobe','-v','error','-count_frames','-count_packets','-show_streams','-show_format','-of','json',str(video)]))
(P/'encoded-count-ffprobe.json').write_text(json.dumps(probe,indent=2))
dec=subprocess.run(['ffmpeg','-hide_banner','-v','error','-xerror','-i',str(video),'-map','0:v:0','-map','0:a:0','-f','null','-'],capture_output=True,text=True)
(P/'full-decode-errors.log').write_text(dec.stderr)
raw=subprocess.check_output(['ffmpeg','-v','error','-xerror','-i',str(video),'-map','0:a:0','-ac','1','-ar','48000','-f','f32le','-'])
y=np.frombuffer(raw,dtype='<f4').astype(np.float64);sr,x=read(master);x=x.astype(np.float64)/32768
write(P/'decoded-final-aac-float.wav',sr,y.astype(np.float32))
N=min(len(x),len(y));diff=y[:N]-x[:N]
base=json.loads((master.parent/'reports/build-manifest.json').read_text());rows=[]
for c in base['windows']:
 a=round(c['start']*sr);b=round(c['end']*sr);xx=x[a:b];yy=y[a:b]
 cross=correlate(yy,xx,mode='full',method='fft');lags=correlation_lags(len(yy),len(xx));mask=np.abs(lags)<=round(.1*sr);lag=int(lags[mask][np.argmax(cross[mask])])
 corr=float(np.corrcoef(xx,yy)[0,1]);rows.append(dict(purpose=c['purpose'],start=c['start'],end=c['end'],zero_lag_pearson=corr,best_lag_samples=lag,best_lag_seconds=lag/sr,rmse=float(np.sqrt(np.mean((yy-xx)**2))),decoded_peak_dbfs=float(20*np.log10(max(1e-12,max(abs(yy)))))))
def onset(z,t):
 start=round((t-.2)*sr);stop=round((t+.2)*sr);block=round(.01*sr)
 blocks=[(k/sr,float(np.sqrt(np.mean(z[k:k+block]**2)))) for k in range(start,stop,block)]
 return next((k for k,rms in blocks if rms>.08),None),blocks
bursts=[]
for t in [13.2,22.2]:
 mx,mb=onset(x,t);my,yb=onset(y,t);bursts.append(dict(target_seconds=t,master_threshold_onset=mx,decoded_threshold_onset=my,decoded_vs_master_delta_seconds=None if mx is None or my is None else my-mx,decoded_vs_target_delta_seconds=None if my is None else my-t,method='First10ms block RMS>.08 in target+-0.2s; acoustic threshold, not human perception',decoded_blocks=yb))
vs=next(s for s in probe['streams'] if s['codec_type']=='video');aus=next(s for s in probe['streams'] if s['codec_type']=='audio')
report=dict(video_file=str(video.name),video_sha256=vhash_before,unchanged_while_tested=vhash_before==hash_file(video),master_sha256=hash_file(master),full_decode_returncode=dec.returncode,full_decode_error_log=dec.stderr,video=dict(codec=vs['codec_name'],width=vs['width'],height=vs['height'],fps=vs['avg_frame_rate'],duration=vs['duration'],read_frames=vs.get('nb_read_frames'),read_packets=vs.get('nb_read_packets')),audio=dict(codec=aus['codec_name'],rate=aus['sample_rate'],channels=aus['channels'],declared_duration=aus['duration'],read_frames=aus.get('nb_read_frames'),read_packets=aus.get('nb_read_packets'),decoded_samples=len(y),decoded_duration=len(y)/sr,master_samples=len(x),padding_samples=len(y)-len(x),nonfinite=int(np.sum(~np.isfinite(y))),peak_dbfs=float(20*np.log10(max(abs(y)))),samples_at_or_above_full_scale=int(np.count_nonzero(abs(y)>=1)),global_zero_lag_pearson=float(np.corrcoef(x[:N],y[:N])[0,1]),global_rmse=float(np.sqrt(np.mean(diff**2)))),cue_correlations=rows,sneeze_onsets=bursts,human_listened=False,semantic_claim=False,limitations='Lossy AAC correlation and acoustic-onset tests establish signal retention/alignment, not audience understanding. Existing finalmix model evidence remains separate.')
report['technical_pass']=bool(dec.returncode==0 and report['unchanged_while_tested'] and report['audio']['nonfinite']==0 and report['audio']['samples_at_or_above_full_scale']==0 and int(vs.get('nb_read_frames',0))==2400 and all(c['zero_lag_pearson']>.97 and abs(c['best_lag_samples'])<=2 for c in rows) and all(c['decoded_vs_master_delta_seconds']==0 for c in bursts))
(P/'encoded-audio-QA.json').write_text(json.dumps(report,indent=2));print(json.dumps(report,indent=2))
