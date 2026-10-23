# ANIM-0001 — Floating stack gaps and base penetration — blocking contact defect

- Project / episode: MOKI & PEB / EP027
- Category: geometry
- Status: validated with stated limits; best among recorded attempts, not universal optimum.
- Cause confidence: high, supported by reviewer account and final source; exact prior source revisions are not retained here, rejected encodes are.
- Reporter: EP027 production and independent review (attribution in copied reports).

- **Symptom:** 50px cubes placed with55px pitch left5px air gaps. Base center1431 gave bottom1456,6px below tabletop1450.
- **Root cause:** center/pitch constants did not derive from rendered block dimensions and tabletop plane.
- **Attempts/outcomes:** first encoded candidate retained as `qa/rejected/stack-gap-candidate.mp4`; cosmetic rendering did not resolve geometry. Changed base center to1425 and pitch to50.
- **Best validated fix:** base center = tabletop minus cube half-size; stack pitch = cube size. Final sampled towers show contiguous blocks and supported base.
- **Prevention rule:** derive placements from shape dimensions, not independent magic numbers.
- **Regression check:** confirm base center+25=1450 and neighboring centers differ50; inspect final8s/51.8s and sequential building thumbnails.

## Evidence and validation scope
All `qa/…` references above are relative to [EP027 evidence](../evidence/EP027/). See [original lessons](../evidence/EP027/LESSONS-PLAYBOOK.md), [review notes](../evidence/EP027/qa/independent/review-notes.md), [final encoded review](../evidence/EP027/qa/independent/final-review.json), [numerical review](../evidence/EP027/qa/independent/numerical-review.json), and [final source](../evidence/EP027/episode.js). The manifest fingerprints individual files. Rejected candidates contain multiple defects; do not attribute every difference to this entry.

Encoded final: `d1f93db5c2b175d275fb8f598bb14d3b08898d994580330f9c0231c27ba3c772`. All 4,200 thumbnail frames covered at 90×160; 13 unique selected full-resolution frames across reviewers. No direct listening or continuous playback. These copied reports are prior reviewers’ observations, not a new visual re-review by the playbook compiler.
