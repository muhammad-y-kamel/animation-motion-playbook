# MOKI-EP029-GEO-002 — Floor contact includes rendered ellipse extent and outline
- Project / episode: MOKI & PEB / EP029
- Category: geometry
- Status: validated_with_limits
- Discovered by: reviewer; observation date2026-10-23. See attributed source below.

## Observation, cause and chronological trial evidence
- Fabric at y1440 length90 ended1530, versus floor1522; wool y1467 radius94*0.64 plus2px outline ended1529.16.
- Cause: anchoring centers/length without derived lower ellipse or outline extent.
- Producer changed fabric length80 (bottom includingoutline1522) and wool center1459.84 (94*.64+2 gives1522). Semantic scan ce3ceac7 passes floor constraints throughout story. Later source edits require rerun.
- Best validated repair: derive center/length from floor and actual ellipse/outline, test rotated ellipse extent as well. Broad semantic bounds are conservative; not proof of every pixel.

## Full append-only provenance and later trials
See [preserved geometry production log](../evidence/EP029/geometry-lessons.md), including later source-stage reruns. This compiler preserves source review claims as scoped evidence, not a new independent visual inspection. Historical source b4416b9e95c5470a915b6fee5902eb8f532a50e605fe4096e18de0b600a3c4ad and rejected encode f320d24e10e1b7c3873b634a7f60b2aec10d10be73abdb270c79229582cf6618 must not be labeled final approved video.

## Best tested repair and prevention
Use floor minus actual rendered extent including outline; test lower/upper contact error, not merely center coordinates.
Actual attempted changes and their test outcomes are preserved in the source excerpt/log; no hypothetical alternative is called a tested fix.

## Regression commands and evidence scope
`node qa/geometry.cjs`; `node qa/ownership.cjs`; audio-specific `python audio/verify_audio.py`, `node qa/media-audio-source.cjs`, `python qa/media-audio-verify.py`, `python qa/media-audio-knitting.py`. Run relevant tests against exact final source/video. Encoded thumbnail/fullres visual review is separate. No human listening, whole-film playback or publication claim.

## Related records / deduplication
ANIM-0010; MOKI-EP029-001; MOKI-EP029-GEO-007. Producer001/002 preserve early discovery provenance; GEO entries hold specific mechanisms, not additional counts of the same observations.

## Final replacement validation — supersedes pending status without erasing history
Status: validated_with_limits. Final MP4 SHA256 aec63c64e7b593a8c6713f46cfec8baf966ae01cc741cfb7ef446636f6a47673; source SHA256 fae49506c09a7af2a48a124f58e8db38738a3abd1dad6e42d22132baf84fc51e. Separate reviewer covered frames0–2399 and producer2400–4559: all4560thumbnail states covered through final reinspection or exact sheet-byte identity, plus22 selected fullresolution times through reinspection/identity. See encoded-review-first-final.json and producer-review-final.json with identity ledgers. GEO005/006 corrected in early encoded frames; GEO007 support corrected in encoded50s. Numerical geometry, ownership, source rebuild and full AV decode passed. Audio master rebuild and AAC cue correlations pass without clipping. No listening, continuousAV, browserparity or everyframe-fullresolution claim. Earlier pending/rejected statements remain historical evidence, not current status.
