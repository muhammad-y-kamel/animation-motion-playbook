from pathlib import Path
import numpy as np,json,hashlib,subprocess,sys
from scipy.io import wavfile
P=Path(__file__).resolve().parent
files=['music.wav','foley.wav','EP029-mix.wav'];before={f:hashlib.sha256((P/f).read_bytes()).hexdigest() for f in files}
subprocess.run([sys.executable,str(P/'build_audio.py')],check=True)
after={f:hashlib.sha256((P/f).read_bytes()).hexdigest() for f in files}
a={};summary={}
for f in files:
 sr,x=wavfile.read(P/f);a[f]=x.astype(np.int32);v=x.astype(float)/32768
 summary[f]={'sample_rate':sr,'channels':x.shape[1],'samples_per_channel':len(x),'duration':len(x)/sr,'peak':float(abs(v).max()),'rms':float(np.sqrt(np.mean(v*v))),'dc':float(v.mean()),'clipped_samples':int(np.sum(abs(x.astype(np.int32))>=32767)),'max_adjacent_sample_delta':float(np.max(abs(np.diff(v,axis=0)))),'sha256':after[f]}
res=a['EP029-mix.wav']-a['music.wav']-a['foley.wav'];cues=json.loads((P/'cue-sheet.json').read_text());checks=[]
for t in cues['critical_times']:
 i=round(t*sr);x=a['EP029-mix.wav'][i:i+round(.06*sr)];checks.append({'script_event':t,'peak_first60ms':float(abs(x).max()/32768),'rms_first60ms':float(np.sqrt(np.mean(x.astype(float)**2))/32768)})
assert before==after,'Nondeterministic audio rebuild'
assert all(v['samples_per_channel']==76*48000 and v['channels']==2 and v['clipped_samples']==0 for v in summary.values())
assert abs(res).max()<=1
assert abs(a['EP029-mix.wav'][-48:]).max()<=1
assert all(x['peak_first60ms']>.005 for x in checks)
p=subprocess.run(['ffmpeg','-hide_banner','-i',str(P/'EP029-mix.wav'),'-af','loudnorm=I=-18:TP=-1:LRA=11:print_format=json','-f','null','-'],capture_output=True,text=True,check=True)
s=p.stderr;measured=json.loads(s[s.rfind('{'):s.rfind('}')+1]);(P/'loudness-measurement.log').write_text(s)
out={'episode':'EP029','results':summary,'rebuild_byte_identical':before==after,'max_pcm_reconstruction_error_lsb':int(abs(res).max()),'critical_event_audio_energy':checks,'listening_performed':False,'continuous_playback_performed':False,'source_visual_alignment':'Script-derived events. Producer must compare actual rendered event geometry; not established by these measurements.','measured_ffmpeg_loudness':{k:v for k,v in measured.items() if k.startswith('input_')},'normalization_applied':False}
(P/'audio-QA.json').write_text(json.dumps(out,indent=2));print(json.dumps(out,indent=2))
