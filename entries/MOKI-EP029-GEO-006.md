# MOKI-EP029-GEO-006 — Stale thread anchor survives complete scarf removal
- Project / episode: MOKI & PEB / EP029
- Category: continuity
- Status: validated_with_limits
- Discovered by: reviewer; observation date2026-10-23. See attributed source below.

## Observation, cause and chronological trial evidence
- Discovered encoded fullres frame2490 (41.5s), MP4 f320d24e10e1b7c3873b634a7f60b2aec10d10be73abdb270c79229582cf6618. After the last ring vanished40.35, yarn still connected Moki's bare chest to fallen wool through43.
- Cause: ring/tail rendering disappeared but independent threadStart retained the old chest anchor. This contradicts complete unravel/reveal.
- Proposed repair: detach old chest endpoint at last-stitch pop and collapse/retract remaining strand into wool during40.15–41.5. Verify41.5 chest fully bare and continuity around40/40.35.
- Status observed, producer notified; encoded repair pending.

## Full append-only provenance and later trials
See [preserved geometry production log](../evidence/EP029/geometry-lessons.md), including later source-stage reruns. This compiler preserves source review claims as scoped evidence, not a new independent visual inspection. Historical source b4416b9e95c5470a915b6fee5902eb8f532a50e605fe4096e18de0b600a3c4ad and rejected encode f320d24e10e1b7c3873b634a7f60b2aec10d10be73abdb270c79229582cf6618 must not be labeled final approved video.

## Best tested repair and prevention
Complete unravel must detach or collapse residual connector; assert no chest-owned endpoint after final-ring reveal.
Actual attempted changes and their test outcomes are preserved in the source excerpt/log; no hypothetical alternative is called a tested fix.

## Regression commands and evidence scope
`node qa/geometry.cjs`; `node qa/ownership.cjs`; audio-specific `python audio/verify_audio.py`, `node qa/media-audio-source.cjs`, `python qa/media-audio-verify.py`, `python qa/media-audio-knitting.py`. Run relevant tests against exact final source/video. Encoded thumbnail/fullres visual review is separate. No human listening, whole-film playback or publication claim.

## Related records / deduplication
ANIM-0008; MOKI-EP029-GEO-003. Producer001/002 preserve early discovery provenance; GEO entries hold specific mechanisms, not additional counts of the same observations.

## Final replacement validation — supersedes pending status without erasing history
Status: validated_with_limits. Final MP4 SHA256 aec63c64e7b593a8c6713f46cfec8baf966ae01cc741cfb7ef446636f6a47673; source SHA256 fae49506c09a7af2a48a124f58e8db38738a3abd1dad6e42d22132baf84fc51e. Separate reviewer covered frames0–2399 and producer2400–4559: all4560thumbnail states covered through final reinspection or exact sheet-byte identity, plus22 selected fullresolution times through reinspection/identity. See encoded-review-first-final.json and producer-review-final.json with identity ledgers. GEO005/006 corrected in early encoded frames; GEO007 support corrected in encoded50s. Numerical geometry, ownership, source rebuild and full AV decode passed. Audio master rebuild and AAC cue correlations pass without clipping. No listening, continuousAV, browserparity or everyframe-fullresolution claim. Earlier pending/rejected statements remain historical evidence, not current status.
