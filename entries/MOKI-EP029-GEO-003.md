# MOKI-EP029-GEO-003 — Ownership precedes prop movement and tools follow current hands
- Project / episode: MOKI & PEB / EP029
- Category: animation
- Status: validated_with_limits
- Discovered by: reviewer; observation date2026-10-23. See attributed source below.

## Observation, cause and chronological trial evidence
- Fullres geo-28.4.png: ball already lifting while both reaching hands remain distant. Source started lift28 and completed grip28.6.
- Fullres geo-55.5.png: needles remained at pre-toss hand anchors while hands lifted; fabric remained static while shared scarf dissolved into place.
- Cause: visual movement and ownership were authored separately; needle geometry used stale intermediate hand variables.
- Proposed repair: finish reach before lift; keep needles attached to actual finalhand or visibly stow before toss; move scarf as owned fabric before release, not crossfade-only assembly. Final source/visual rerun pending.

## Full append-only provenance and later trials
See [preserved geometry production log](../evidence/EP029/geometry-lessons.md), including later source-stage reruns. This compiler preserves source review claims as scoped evidence, not a new independent visual inspection. Historical source b4416b9e95c5470a915b6fee5902eb8f532a50e605fe4096e18de0b600a3c4ad and rejected encode f320d24e10e1b7c3873b634a7f60b2aec10d10be73abdb270c79229582cf6618 must not be labeled final approved video.

## Best tested repair and prevention
Delay lift until both grips established; derive tools from final transformed hands or stow before hand departure; verify neighboring transfer states.
Actual attempted changes and their test outcomes are preserved in the source excerpt/log; no hypothetical alternative is called a tested fix.

## Regression commands and evidence scope
`node qa/geometry.cjs`; `node qa/ownership.cjs`; audio-specific `python audio/verify_audio.py`, `node qa/media-audio-source.cjs`, `python qa/media-audio-verify.py`, `python qa/media-audio-knitting.py`. Run relevant tests against exact final source/video. Encoded thumbnail/fullres visual review is separate. No human listening, whole-film playback or publication claim.

## Related records / deduplication
ANIM-0004; ANIM-0016; MOKI-EP029-001. Producer001/002 preserve early discovery provenance; GEO entries hold specific mechanisms, not additional counts of the same observations.

## Final replacement validation — supersedes pending status without erasing history
Status: validated_with_limits. Final MP4 SHA256 aec63c64e7b593a8c6713f46cfec8baf966ae01cc741cfb7ef446636f6a47673; source SHA256 fae49506c09a7af2a48a124f58e8db38738a3abd1dad6e42d22132baf84fc51e. Separate reviewer covered frames0–2399 and producer2400–4559: all4560thumbnail states covered through final reinspection or exact sheet-byte identity, plus22 selected fullresolution times through reinspection/identity. See encoded-review-first-final.json and producer-review-final.json with identity ledgers. GEO005/006 corrected in early encoded frames; GEO007 support corrected in encoded50s. Numerical geometry, ownership, source rebuild and full AV decode passed. Audio master rebuild and AAC cue correlations pass without clipping. No listening, continuousAV, browserparity or everyframe-fullresolution claim. Earlier pending/rejected statements remain historical evidence, not current status.
