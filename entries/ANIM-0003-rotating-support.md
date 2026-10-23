# ANIM-0003 — Rotating hourglass penetrated tabletop — blocking support defect

- Project / episode: MOKI & PEB / EP027
- Category: geometry
- Status: validated with stated limits; best among recorded attempts, not universal optimum.
- Cause confidence: high, supported by reviewer account and final source; exact prior source revisions are not retained here, rejected encodes are.
- Reporter: EP027 production and independent review (attribution in copied reports).

- **Symptom:** at51.8s the lower cap passed below tabletop while being raised.
- **Root cause:** interpolated center height ignored rotated cap extents.
- **Attempts/outcomes:** straight center interpolation between upright/horizontal poses failed. Added conservative rotated envelope clamp: `g.y <= 1448 - abs(cos(a))*110 - abs(sin(a))*65`.
- **Best validated fix:** support height derives from rotated geometry, including a small stroke allowance.
- **Prevention rule:** rotating supported props need orientation-dependent support; center interpolation alone is insufficient.
- **Regression check:** source and encoded51.8s visually clear the table. Independent conservative cap/stroke envelope over4200states max1450.83, within the stated2px tabletop tolerance.

## Evidence and validation scope
All `qa/…` references above are relative to [EP027 evidence](../evidence/EP027/). See [original lessons](../evidence/EP027/LESSONS-PLAYBOOK.md), [review notes](../evidence/EP027/qa/independent/review-notes.md), [final encoded review](../evidence/EP027/qa/independent/final-review.json), [numerical review](../evidence/EP027/qa/independent/numerical-review.json), and [final source](../evidence/EP027/episode.js). The manifest fingerprints individual files. Rejected candidates contain multiple defects; do not attribute every difference to this entry.

Encoded final: `d1f93db5c2b175d275fb8f598bb14d3b08898d994580330f9c0231c27ba3c772`. All 4,200 thumbnail frames covered at 90×160; 13 unique selected full-resolution frames across reviewers. No direct listening or continuous playback. These copied reports are prior reviewers’ observations, not a new visual re-review by the playbook compiler.
