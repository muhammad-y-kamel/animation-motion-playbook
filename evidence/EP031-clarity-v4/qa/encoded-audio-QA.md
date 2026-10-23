# Exact final encoded AAC verification — PASS

Final MP4: `EP031-The-Held-Sneeze-v4.mp4`
SHA-256: `b2b4cdd7f1799047150c847be70053da6bf4f8b03eeb4c3991ee713c5fd8a419`
Master SHA-256: `16b32b5d3ad7bb700a7bbfb20acf2f6a106507add305e1de230a357607bb5fcf`

- Full video+audio decode exit0, empty error log: True.
- Video1080×1920 H.264,60fps,40.000s; 2400 decoded frames and packets.
- AAC48kHz mono; exactly1,920,000 samples/40.000s; no added padding.
- Float decoded peak-1.8151dBFS; zero full-scale/nonfinite samples. Sample-peak test, not oversampled true-peak.
- Whole-track zero-lag correlation0.999955265; all10 cue lags zero samples, minimum correlation0.999787782.
- Acoustic onset threshold (first10ms RMS>.08) exactly13.200s and22.200s; matches master and target with no measured shift.
- Video hash stable throughout test.
- CTA-only revised MP4 decoded audio is byte-identical to first checked version: **True**. Both float-WAV hashes recorded in `cta-fix-audio-identity.json`. First-version report and decoded WAV preserved under `encoded-firsthash-ced14ad68646/`.

Evidence: `encoded-audio-QA.json`, `encoded-count-ffprobe.json`, `full-decode-errors.log`, `decoded-final-aac-float.wav`. Reproducible verifier: `verify_encoded_audio.py`.

No creative edits or classifier rerun performed. No human listening, visual-synchrony perception or audience-understanding claim. This checks exact encoded signal retention, acoustic timing and complete decoding only.
