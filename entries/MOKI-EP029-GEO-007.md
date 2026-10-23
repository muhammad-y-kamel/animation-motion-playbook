# MOKI-EP029-GEO-007 — Shrinking floor-supported mass levitates
- Project / episode: MOKI & PEB / EP029
- Category: geometry
- Status: validated_with_limits
- Discovered by: agent; observation date2026-10-23. See attributed source below.

## Observation, cause and chronological trial evidence
- Discovered by producer during full-resolution encoded50s review, not by independent geometry reviewer. Earlier geometry test checked floor penetration only and falsely allowed positive support gaps.
- Root cause: ground mass center remained1459.84 while radius shrank94→0, raising its lower edge off the floor. Negative penetration is not support.
- Proposed/producer repair: derive y=1522−2−radius*.64 for every knitting mass state43–55; radius-independent floor anchor accounts for2pxoutline. Test absolute support error, not one-sided overlap.
- `geometry.cjs` now tests every ground wool frame43–55 with radius>0.5 for |floor−renderedbottom|≤0.2px. Producer is preserving relevant encode and repairing; final rerun pending. Discovery attribution remains producer.

## Full append-only provenance and later trials
See [preserved geometry production log](../evidence/EP029/geometry-lessons.md), including later source-stage reruns. This compiler preserves source review claims as scoped evidence, not a new independent visual inspection. Historical source b4416b9e95c5470a915b6fee5902eb8f532a50e605fe4096e18de0b600a3c4ad and rejected encode f320d24e10e1b7c3873b634a7f60b2aec10d10be73abdb270c79229582cf6618 must not be labeled final approved video.

## Best tested repair and prevention
Recompute center from changing radius: y=1522-2-r*.64. Test absolute support residual throughout shrink, not one-sided penetration.
Actual attempted changes and their test outcomes are preserved in the source excerpt/log; no hypothetical alternative is called a tested fix.

## Regression commands and evidence scope
`node qa/geometry.cjs`; `node qa/ownership.cjs`; audio-specific `python audio/verify_audio.py`, `node qa/media-audio-source.cjs`, `python qa/media-audio-verify.py`, `python qa/media-audio-knitting.py`. Run relevant tests against exact final source/video. Encoded thumbnail/fullres visual review is separate. No human listening, whole-film playback or publication claim.

## Related records / deduplication
ANIM-0001; ANIM-0010; MOKI-EP029-GEO-002. Producer001/002 preserve early discovery provenance; GEO entries hold specific mechanisms, not additional counts of the same observations.

## Later numerical source retest
Current qa/geometry.json binds source fae49506c09a7af2a48a124f58e8db38738a3abd1dad6e42d22132baf84fc51e and reports no violations across4560states/4200story states, including new absolute shrinking-pile support check. This establishes source numerical regression only; replacement encoded visual review remains pending.

## Final replacement validation — supersedes pending status without erasing history
Status: validated_with_limits. Final MP4 SHA256 aec63c64e7b593a8c6713f46cfec8baf966ae01cc741cfb7ef446636f6a47673; source SHA256 fae49506c09a7af2a48a124f58e8db38738a3abd1dad6e42d22132baf84fc51e. Separate reviewer covered frames0–2399 and producer2400–4559: all4560thumbnail states covered through final reinspection or exact sheet-byte identity, plus22 selected fullresolution times through reinspection/identity. See encoded-review-first-final.json and producer-review-final.json with identity ledgers. GEO005/006 corrected in early encoded frames; GEO007 support corrected in encoded50s. Numerical geometry, ownership, source rebuild and full AV decode passed. Audio master rebuild and AAC cue correlations pass without clipping. No listening, continuousAV, browserparity or everyframe-fullresolution claim. Earlier pending/rejected statements remain historical evidence, not current status.
