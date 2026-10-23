# ANIM-0002 — Camera transform clipped hand and exposed black bottom — blocking composition defect

- Project / episode: MOKI & PEB / EP027
- Category: composition
- Status: validated with stated limits; best among recorded attempts, not universal optimum.
- Cause confidence: high, supported by reviewer account and final source; exact prior source revisions are not retained here, rejected encodes are.
- Reporter: EP027 production and independent review (attribution in copied reports).

- **Symptom:** enlarging/repositioning stage exposed a black bottom strip and cropped Moki's resting left hand. Preserved early `qa/composition.png` demonstrates both.
- **Root cause:** transformed room background did not cover the original canvas; hand extents were not rechecked after camera scaling.
- **Attempts/outcomes:** stage scale1.17 improved framing but introduced these defects. Added full-canvas background before transform and changed resting left-hand local x from-145 to-110.
- **Best validated fix:** clear/fill in canvas coordinates before any camera transform; keep resting hands inside projected safe frame.
- **Prevention rule:** camera edits require a fresh canvas-edge and projected-extents pass.
- **Regression check:** numerical projected hand circles across4200states have zero edge failures; assigned final thumbnail sheets and selected full-resolution frames show no black border/clipped resting hand. This is not a proof that every rendered path was bounded.

## Evidence and validation scope
All `qa/…` references above are relative to [EP027 evidence](../evidence/EP027/). See [original lessons](../evidence/EP027/LESSONS-PLAYBOOK.md), [review notes](../evidence/EP027/qa/independent/review-notes.md), [final encoded review](../evidence/EP027/qa/independent/final-review.json), [numerical review](../evidence/EP027/qa/independent/numerical-review.json), and [final source](../evidence/EP027/episode.js). The manifest fingerprints individual files. Rejected candidates contain multiple defects; do not attribute every difference to this entry.

Encoded final: `d1f93db5c2b175d275fb8f598bb14d3b08898d994580330f9c0231c27ba3c772`. All 4,200 thumbnail frames covered at 90×160; 13 unique selected full-resolution frames across reviewers. No direct listening or continuous playback. These copied reports are prior reviewers’ observations, not a new visual re-review by the playbook compiler.
