# ANIM-0006 — Sand hung from upper cap after flip — blocking visual physics defect

- Project / episode: MOKI & PEB / EP027
- Category: animation
- Status: validated with stated limits; best among recorded attempts, not universal optimum.
- Cause confidence: high, supported by reviewer account and final source; exact prior source revisions are not retained here, rejected encodes are.
- Reporter: EP027 production and independent review (attribution in copied reports).

- **Symptom:** after180degree rotation, upper sand appeared suspended from cap and lower sand floated from neck instead of resting at bottom.
- **Root cause:** swapping local fill fractions did not preserve gravity-relative fill anchors under rotation.
- **Attempts/outcomes:** local fill fraction swap failed; `qa/rejected/sand-gravity-candidate.mp4` preserves defect. Rotated drawing back to world-gravity coordinates inside the already-rotated glass clip. Upper fill anchors at neck; lower fill anchors at base; horizontal phase uses a world-lower settled slab with no stream.
- **Best validated fix:** separate container orientation from gravity-oriented contents.
- **Prevention rule:** for rotating containers, inspect both orientation and substance behavior at0°,90°,180° and transition angles.
- **Regression check:** fresh8s and39s confirm upright gravity and horizontal settling; final encoded8s confirms corrected anchors. Illustrative fill is not a mass-conserving grain simulation; do not claim physical simulation validation.

## Evidence and validation scope
All `qa/…` references above are relative to [EP027 evidence](../evidence/EP027/). See [original lessons](../evidence/EP027/LESSONS-PLAYBOOK.md), [review notes](../evidence/EP027/qa/independent/review-notes.md), [final encoded review](../evidence/EP027/qa/independent/final-review.json), [numerical review](../evidence/EP027/qa/independent/numerical-review.json), and [final source](../evidence/EP027/episode.js). The manifest fingerprints individual files. Rejected candidates contain multiple defects; do not attribute every difference to this entry.

Encoded final: `d1f93db5c2b175d275fb8f598bb14d3b08898d994580330f9c0231c27ba3c772`. All 4,200 thumbnail frames covered at 90×160; 13 unique selected full-resolution frames across reviewers. No direct listening or continuous playback. These copied reports are prior reviewers’ observations, not a new visual re-review by the playbook compiler.
