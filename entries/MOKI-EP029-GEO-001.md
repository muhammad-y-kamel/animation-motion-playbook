# MOKI-EP029-GEO-001 — Phase-local anchors reset hands and wool
- Project / episode: MOKI & PEB / EP029
- Category: animation
- Status: validated_with_limits
- Discovered by: reviewer; observation date2026-10-23. See attributed source below.

## Observation, cause and chronological trial evidence
- Discovered by independent reviewer via 60 fps semantic scan and epsilon-boundary probes. Original source had hand snaps at14 (57px),43 (44/47px),56.5 (36/65px), plus wool61px at43 and wool radius/spin reset28.
- Cause: independent phases replaced previous hand/base/prop state before finishing transfer. Body crouch and hand-rest calculation order differed across43.
- Actual attempt 1: producer ramped left hand14, released hands41.8–43, kept knitting base through57; scan source ce3ceac7 showed large resets improved, but epsilon tests still exposed right-hand10.63px at14 and bothhands20px at43. These smaller snaps were missed by25px/frame velocity threshold.
- Best proposed fix: connect both hands through transfer, derive rest from final body pose, and test tiny epsilon around all boundaries separately from ordinary motion speed. Final rerun pending.
- Evidence: geometry-v3.json records first rerun; geo-*.png source snapshots. Rejected producer versions preserved independently.

## Full append-only provenance and later trials
See [preserved geometry production log](../evidence/EP029/geometry-lessons.md), including later source-stage reruns. This compiler preserves source review claims as scoped evidence, not a new independent visual inspection. Historical source b4416b9e95c5470a915b6fee5902eb8f532a50e605fe4096e18de0b600a3c4ad and rejected encode f320d24e10e1b7c3873b634a7f60b2aec10d10be73abdb270c79229582cf6618 must not be labeled final approved video.

## Best tested repair and prevention
Probe tiny epsilon around14,28,43,55,56.5 and compare both hand and prop endpoints; ordinary per-frame velocity alone misses smaller discontinuities.
Actual attempted changes and their test outcomes are preserved in the source excerpt/log; no hypothetical alternative is called a tested fix.

## Regression commands and evidence scope
`node qa/geometry.cjs`; `node qa/ownership.cjs`; audio-specific `python audio/verify_audio.py`, `node qa/media-audio-source.cjs`, `python qa/media-audio-verify.py`, `python qa/media-audio-knitting.py`. Run relevant tests against exact final source/video. Encoded thumbnail/fullres visual review is separate. No human listening, whole-film playback or publication claim.

## Related records / deduplication
ANIM-0012; MOKI-EP029-002. Producer001/002 preserve early discovery provenance; GEO entries hold specific mechanisms, not additional counts of the same observations.

## Final replacement validation — supersedes pending status without erasing history
Status: validated_with_limits. Final MP4 SHA256 aec63c64e7b593a8c6713f46cfec8baf966ae01cc741cfb7ef446636f6a47673; source SHA256 fae49506c09a7af2a48a124f58e8db38738a3abd1dad6e42d22132baf84fc51e. Separate reviewer covered frames0–2399 and producer2400–4559: all4560thumbnail states covered through final reinspection or exact sheet-byte identity, plus22 selected fullresolution times through reinspection/identity. See encoded-review-first-final.json and producer-review-final.json with identity ledgers. GEO005/006 corrected in early encoded frames; GEO007 support corrected in encoded50s. Numerical geometry, ownership, source rebuild and full AV decode passed. Audio master rebuild and AAC cue correlations pass without clipping. No listening, continuousAV, browserparity or everyframe-fullresolution claim. Earlier pending/rejected statements remain historical evidence, not current status.
