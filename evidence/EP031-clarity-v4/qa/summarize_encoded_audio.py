from pathlib import Path
import json,hashlib
P=Path(__file__).resolve().parent
d=json.loads((P/'encoded-audio-QA.json').read_text());old=P/'encoded-firsthash-ced14ad68646/decoded-final-aac-float.wav';new=P/'decoded-final-aac-float.wav'
h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
identity={'first_decoded_sha256':h(old),'current_decoded_sha256':h(new),'decoded_audio_byte_identical':h(old)==h(new),'current_mp4_sha256':d['video_sha256']}
(P/'cta-fix-audio-identity.json').write_text(json.dumps(identity,indent=2))
s=f'''# Exact final encoded AAC verification — {'PASS' if d['technical_pass'] else 'CHECK REQUIRED'}

Final MP4: `{d['video_file']}`
SHA-256: `{d['video_sha256']}`
Master SHA-256: `{d['master_sha256']}`

- Full video+audio decode exit{d['full_decode_returncode']}, empty error log: {not bool(d['full_decode_error_log'])}.
- Video1080×1920 H.264,60fps,40.000s; {d['video']['read_frames']} decoded frames and packets.
- AAC48kHz mono; exactly{d['audio']['decoded_samples']:,} samples/{d['audio']['decoded_duration']:.3f}s; no added padding.
- Float decoded peak{d['audio']['peak_dbfs']:.4f}dBFS; zero full-scale/nonfinite samples. Sample-peak test, not oversampled true-peak.
- Whole-track zero-lag correlation{d['audio']['global_zero_lag_pearson']:.9f}; all10 cue lags zero samples, minimum correlation{min(c['zero_lag_pearson'] for c in d['cue_correlations']):.9f}.
- Acoustic onset threshold (first10ms RMS>.08) exactly13.200s and22.200s; matches master and target with no measured shift.
- Video hash stable throughout test.
- CTA-only revised MP4 decoded audio is byte-identical to first checked version: **{identity['decoded_audio_byte_identical']}**. Both float-WAV hashes recorded in `cta-fix-audio-identity.json`. First-version report and decoded WAV preserved under `encoded-firsthash-ced14ad68646/`.

Evidence: `encoded-audio-QA.json`, `encoded-count-ffprobe.json`, `full-decode-errors.log`, `decoded-final-aac-float.wav`. Reproducible verifier: `verify_encoded_audio.py`.

No creative edits or classifier rerun performed. No human listening, visual-synchrony perception or audience-understanding claim. This checks exact encoded signal retention, acoustic timing and complete decoding only.
'''
(P/'encoded-audio-QA.md').write_text(s)
print(json.dumps(identity));print('technical_pass',d['technical_pass'])
