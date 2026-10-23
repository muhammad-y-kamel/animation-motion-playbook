# EP026 audio QA

- Deterministic rebuild: PASS, all three WAV hashes unchanged.
- Duration:58.000s; stereo48,000Hz;2,784,000samples/channel.
- Stem-sum error:≤1PCM16LSB.
- Clipping/nonfinite samples:0.
- Oversampled4×peak:0.725657, below full scale.
- EBU R128 integrated:-21.8LUFS; LRA8.2LU; true peak-2.8dBFS.
- All canonical timed cues present and within bounds.
-44.0–46.5s quiet hold:exactly0nonzero samples.
- Last sample:[0,0].
- Direct listening and continuous AV playback:not performed.
- Encoded final MP4 soundtrack identity:PASS. Whole-track correlation0.999528; all17 cue windows have zero-sample best lag; decoded4×truepeak0.729913; no clipped samples.

Evidence:`audio-QA.json`, `reconstruction-QA.json`, `loudness.log`, `cue-sheet.json`, reproducible source scripts. Visual contact timing must be independently checked against actual animation frames; cue presence alone is not that check.

## Actual source cue alignment

15 of15 source-sampled cue checks pass on animation SHA256 `dbf090d51013f7d8b24f3c5bdc4e7db2894693ed08e1e2a9b61f7ca33ba52006`. Tests sample actual `scene()` values around each event frame, covering flip direction and settling, both-character touchdown, boarding, four apple landings, wind stop, bites, ring contact and the CTA boundary. These numerical geometry checks are not rendered-contour review or listening. See `cue-contact-audit.json`.

Actual MP4 SHA256: `33af749ed7b5bc858321db4221495e496d50812d2982bb1face870a9a4a04526`. Evidence `final-mux-identity.json`. AAC tail padding256samples, within one frame. Encoded quiet interval remains exactly silent.
