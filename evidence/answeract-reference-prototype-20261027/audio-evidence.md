# Reference audio evidence (internal only)

Reference: public Facebook reel supplied by user, locally saved `../reference.mp4`.

## What was actually done
- Extracted mixed stereo audio already present as `../reference-audio.wav`.
- Measured decoded samples with FFmpeg + NumPy.
- Local automatic Arabic speech transcription using faster-whisper small, CPU int8, no audio sent to an outside service. Model package downloaded publicly without API credentials.
- No direct human-equivalent listening tool available. No claim of having heard the soundtrack. ASR, waveform and subtitle OCR are separate evidence types.

## Measured mix
- Decoded audio duration: 47.083958s; 48kHz, stereo.
- Integrated loudness: -14.19 LUFS; true peak -1.02 dBTP; loudness range 1.70 LU.
- RMS level: -16.69 dBFS; very similar levels across the mix; this supports a tightly leveled short-form mix, NOT a specific compressor setting.
- Silence detector at -30dBFS/120ms found short low-level intervals 1.881–2.122, 6.594–6.773, 38.248–38.421, 46.939–47.084. These are mixed-signal threshold crossings, NOT guaranteed spoken pauses.
- Stereo correlation 0.999950; difference-channel RMS -62.73dBFS versus mid -16.69dBFS. Essentially dual mono. Channel subtraction cannot recover a useful music-only stem.

## Music and effects limits
The WAV is the COMPLETE MIX, not isolated voice/music. Instrument identity, track identity, BPM, emotional music character, and individual sound-effect labels remain unverified without direct listening or reliable source separation. Do not invent a bass beat, whoosh, click, riser or musical key from edit style/OCR. A lack of quiet intervals does not prove there is background music.

## Original AnswerAct adaptation guidance (design proposal, not observed reference facts)
Keep the brisk spoken demonstration structure but write new AnswerAct-specific claims and dialogue, not a line-for-line transcription. Use original/licensed music if any; do not reuse extracted reference music without rights. Preserve intelligibility with low-level backing and brief restrained transition cues. Do not equate the reference's -14.19 LUFS with a mandatory platform specification.

## Files
- `local-asr-small.json/.txt`: machine transcription with timestamps/confidence, when complete.
- `waveform-metrics.json`: sample metrics and 100ms energy bins.
- `silences.log`, `volume.log`, `loudness.log`: raw measurement evidence.
- `../on-screen-subtitles-ocr-internal.tsv`: separate visual analyst's OCR, not speech proof.

## Transcript / rhythm result
Both local ASR passes completed. Raw files preserved; `working-transcript-internal.txt/.json` normalize obvious errors only with explicit evidence per line. Square brackets remain tentative, not actually heard. ASR token count 113 across 46.9s ≈145 space-delimited words/minute (Arabic clitics make cross-language WPM comparisons unreliable).

The time structure inferred from ASR is: 0–4.82s identity surprise hook; 4.82–11.16s customer-question/demo result; 11.16–14.18s tool+three-step promise; 14.18–19.44s step1 (5.26s); 19.44–25.48s step2 (6.04s); 25.48–37.20s step3+response rules (11.72s); 37.20–42.98s everyday workflow/human review; 42.98–46.90s save/comment CTA. These are spoken clause times, not confirmed beat-synced music cues.

The reference voice says a result appears in three seconds. This is the reference’s claim, not evidence of AnswerAct latency. Do not transfer unverified product claims into the adaptation.
