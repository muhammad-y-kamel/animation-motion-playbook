"""Run only on complete final MP4. Full decode, expected media contract, master correlation."""
from pathlib import Path
import subprocess,json,hashlib,sys
P=Path(__file__).resolve().parent;R=P.parent;v=Path(sys.argv[1]) if len(sys.argv)>1 else R/'EP029-The-Unraveling-Scarf.mp4'
assert v.is_file(),'Final MP4 must exist and producer must confirm completed export before QA'
h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
probe=json.loads(subprocess.check_output(['ffprobe','-v','error','-count_frames','-show_streams','-show_format','-of','json',str(v)]));vs=next(s for s in probe['streams'] if s['codec_type']=='video');au=next(s for s in probe['streams'] if s['codec_type']=='audio')
checks={'frame_count_4560':int(vs['nb_read_frames'])==4560,'native_1080x1920':(vs['width'],vs['height'])==(1080,1920),'rate_60fps':vs['avg_frame_rate']=='60/1','video_duration_76':abs(float(vs['duration'])-76)<1e-6,'container_duration_76':abs(float(probe['format']['duration'])-76)<.025,'stereo_48k':au['channels']==2 and int(au['sample_rate'])==48000,'audio_duration_76':abs(float(au['duration'])-76)<.025}
p=subprocess.run(['ffmpeg','-v','error','-xerror','-i',str(v),'-map','0:v:0','-map','0:a:0','-f','null','-'],capture_output=True,text=True);(P/'media-audio-full-decode.log').write_text(p.stdout+p.stderr);checks['complete_av_decode']=p.returncode==0 and not p.stderr.strip()
subprocess.run([sys.executable,str(R/'audio/verify_mux.py'),str(v)],check=True)
q={'video_sha256':h(v),'source_sha256':h(R/'episode.js'),'master_audio_sha256':h(R/'audio/EP029-mix.wav'),'checks':checks,'probe':probe,'audio_correlation_report':'../audio/final-mux-QA.json','listening_performed':False,'continuous_AV_playback_performed':False,'all_frame_visual_review':'Owned by separate reviewer, not this test','passed':all(checks.values())};(P/'media-audio-QA.json').write_text(json.dumps(q,indent=2));print(json.dumps({'checks':checks,'video_sha256':q['video_sha256']},indent=2));assert q['passed']
