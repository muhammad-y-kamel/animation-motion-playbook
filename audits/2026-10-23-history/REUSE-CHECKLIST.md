# Cross-project regression checks from historical evidence

These are proposed prevention/tests derived from recorded incidents, not new measurements or proof that an old final video is defect-free. Read the matching case's attempts and rejection history before reusing a repair. Old user preferences may be project-specific; do not automatically overwrite a newer approved script/voice/style.

| Stage | Required check | Historical evidence families |
|---|---|---|
| Brief / source | Preserve approved narration, story facts and version; distinguish prompt requirements from actual defects. Record missing sources, don't invent fixes. | MOKI history / What If; Ezzay old/30 |
| Script / voice trial | Audit a complete representative take, not only one difficult word. Keep original script and phonetic input separate. Test Arabic dialect/brand names, numbers, endings. Retain rejected attempts and exact user feedback. | EZZAY-OLD-01/02; AnswerAct voice experiments |
| Voice production | One accepted voice/recipe per continuous take unless deliberately designed otherwise. Do not patch sentences from incompatible takes or change pitch/speed to meet an arbitrary duration. ASR and waveform metrics do not certify pronunciation/emotion. | AnswerAct discontinuity; Canva-05; Ezzay old/30 |
| Rig / geometry | Check world-space contacts every relevant state, including interpolation and exported Blender results; fixed keyframes alone are insufficient. Hold persistent props and consequences until an explicit action removes them. | MOKI-H cases; EP026/27 existing ANIM entries |
| Layout / diagrams | Test swept object bounds against text safe regions, leader endpoints, scientific arrows, tubing, labels and depth/near clipping. Measure actual glyph bounds including diacritics, not nominal font size. | AnswerAct A01 onward; EZZAY-OLD-03; GetMotion; SHOW-03 |
| Typography / 3D | Inspect duplicate/intersecting contours, extrusion seams and occluding sidewalls; validate visual reading order in RTL/LTR mixed captions. Inspect oblique angles and final output size. | SHOW-04/06; CANVA-03; GetMotion Arabic glyphs |
| UI interaction | Target and cursor share final camera/zoom transform. At the press timestamp cursor tip must lie in intended target; effect follows press. Dragged object has a single owner. Timer/playhead uses the same timeline. | CANVA-01/04/06 |
| Transition / continuity | Separate outgoing and incoming text timing; no stale toolbar/card/old scene survives by accident. Reset only intended transforms at handoff. Review just before/at/after boundaries and subframes. | CANVA-02; SHOW-02; AnswerAct scene remnants; What If cut continuity |
| Rhythm / audio mux | Define hit timestamps from the actual soundtrack and map motion/eyes/hammer to them; check processing latency after WAV render and final mux. Count hits, compare event times, then watch/listen; beat-stills alone miss between-beat defects. | AnswerAct hammer V3–V6; SHOW-05 |
| Review | Separate source preview, encoded sampled frames, every-frame thumbnails, full-resolution inspection, numeric audio checks, ASR, direct listening, continuous playback and user acceptance. Each claim names exact coverage. A later user rejection overrides earlier general 'passed' claims. | All imported histories |
| Export / package | Verify duration/frame count/decoding, final narration equality, final segment continuity and complete source archive. Check peak disk use. Rebuild from the delivered archive, not an untracked working directory. | What If rebuild; Canva-07; Ezzay WAV truncation; GetMotion handoff |
| Retention / publication | Save durable artifacts with IDs/checksums before workspace replacement or cleanup. A saved filename or old sandbox URL does not prove retrievability. Verify exact uploaded bytes and schedule separately from animation QA. Do not resurrect deleted private content. | GetMotion loss/rebuild; EP002 recovery; Ezzay unavailable links |

## Minimum error record
Project/asset + exact version/hash (or unknown), symptom and observed time/frame, user quote/source locator, documented cause vs hypothesis, each attempted repair and rejected outcome, test method and actual coverage, remaining uncertainty, next test. Deduplicate the reusable mechanism but keep separate project occurrences and regressions.

## Approval versus verification
An explicit user acceptance records taste/approval for that take. It does not retroactively prove a technical hypothesis. An assistant's 'fixed' report is an attributed claim until its test/artifact is retrieved. A prevention recommendation is not a repair already performed.
