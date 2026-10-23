# MOKI-EP029-AUDIO-002 — Script-only audio cue timing differs from actual geometry
- Project / episode: MOKI & PEB / EP029
- Category: audio
- Status: validated_with_limits
- Discovered by: reviewer; observation date2026-10-23. See attributed source below.

## Observation, cause and chronological trial evidence
Audio reviewer compared source geometry to script-based timings: ball reached chair peg at24.4, not initial sound24.3; wool placement reached its pose19.5, earlier rustle19.25 was premature. Needle opacity diminished after54.7 while two needle clicks remained54.8/54.9. Source v2 and QA preserved under rejected-v2, which recreates exact old WAV hashes. Producer chose removing last two clicks rather than prolonging floating needles during scarf lift; resulting ticks46.5–54.7 (83 hits), motion through55 is follow-through. Ball catch shifted24.4 and placement rustle19.5. No animation source edit. Tests: deterministic master reconstruction, numerical audio metrics, actual-source needle segment intersection and opacity at every audible tick, event endpoint/contact samples; final mux correlation pending complete final. No listening claim.

Final regression: MP4 f320d24e10e1b7c3873b634a7f60b2aec10d10be73abdb270c79229582cf6618 decodes completely; decoded AAC peak0.496826, no clipped samples.83 knitting and2 placement/catch windows and10 critical windows all zero-sample lag versus master; source audit confirms83 needle intersections at full opacity. Decoder padding512 samples is standard AAC padding; stream/container remain76s.

## Full append-only provenance and later trials
See [preserved audio production log](../evidence/EP029/audio-lessons.md), including later source-stage reruns. This compiler preserves source review claims as scoped evidence, not a new independent visual inspection. Historical source b4416b9e95c5470a915b6fee5902eb8f532a50e605fe4096e18de0b600a3c4ad and rejected encode f320d24e10e1b7c3873b634a7f60b2aec10d10be73abdb270c79229582cf6618 must not be labeled final approved video.

## Best tested repair and prevention
Compare actual contact geometry and opacity at every audible hit; validate newly encoded AAC alignment after changes.
Actual attempted changes and their test outcomes are preserved in the source excerpt/log; no hypothetical alternative is called a tested fix.

## Regression commands and evidence scope
`node qa/geometry.cjs`; `node qa/ownership.cjs`; audio-specific `python audio/verify_audio.py`, `node qa/media-audio-source.cjs`, `python qa/media-audio-verify.py`, `python qa/media-audio-knitting.py`. Run relevant tests against exact final source/video. Encoded thumbnail/fullres visual review is separate. No human listening, whole-film playback or publication claim.

## Related records / deduplication
ANIM-0009; MOKI-EP029-GEO-003. Producer001/002 preserve early discovery provenance; GEO entries hold specific mechanisms, not additional counts of the same observations.

## Replacement final media/audio regression
New MP4 aec63c64e7b593a8c6713f46cfec8baf966ae01cc741cfb7ef446636f6a47673 and source fae49506c09a7af2a48a124f58e8db38738a3abd1dad6e42d22132baf84fc51e: complete AV decode passed;4560frames,76s,1080x1920/60fps,48k stereo. No decoded clipping;peak0.496826.10 critical windows plus83 knit hits and2placement/catch windows all zero-sample lag. Actual-source83 needle intersections/opacity pass. These are audio/numerical results only; visual review gate belongs to separate reviewer and is not asserted here.

## Final replacement validation — supersedes pending status without erasing history
Status: validated_with_limits. Final MP4 SHA256 aec63c64e7b593a8c6713f46cfec8baf966ae01cc741cfb7ef446636f6a47673; source SHA256 fae49506c09a7af2a48a124f58e8db38738a3abd1dad6e42d22132baf84fc51e. Separate reviewer covered frames0–2399 and producer2400–4559: all4560thumbnail states covered through final reinspection or exact sheet-byte identity, plus22 selected fullresolution times through reinspection/identity. See encoded-review-first-final.json and producer-review-final.json with identity ledgers. GEO005/006 corrected in early encoded frames; GEO007 support corrected in encoded50s. Numerical geometry, ownership, source rebuild and full AV decode passed. Audio master rebuild and AAC cue correlations pass without clipping. No listening, continuousAV, browserparity or everyframe-fullresolution claim. Earlier pending/rejected statements remain historical evidence, not current status.
