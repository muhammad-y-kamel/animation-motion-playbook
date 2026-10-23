# ANIM-0005 — Hourglass outline vanished during particle/clump rendering — blocking render regression

- Project / episode: MOKI & PEB / EP027
- Category: rendering
- Status: validated with stated limits; best among recorded attempts, not universal optimum.
- Cause confidence: high, supported by reviewer account and final source; exact prior source revisions are not retained here, rejected encodes are.
- Reporter: EP027 production and independent review (attribution in copied reports).

- **Symptom:** glass outline disappeared during flow or jam; a particle inherited the outline stroke instead.
- **Root cause:** Canvas `ellipse()` calls replace the current path. `save()/restore()` do not preserve the current path; stroking after particles therefore stroked the wrong shape.
- **Attempts/outcomes:** adding visible clump improved jam readability but exposed/largened the pre-existing flow-particle path issue. Outline candidate retained at `qa/rejected/outline-candidate.mp4`. Rebuilt complete glass silhouette immediately before its stroke.
- **Best validated fix:** rebuild intended path at its draw operation, or use an explicit reusable Path2D in future implementations.
- **Prevention rule:** never assume canvas state restore restores current paths. Helpers that begin paths invalidate caller path assumptions.
- **Regression check:** inspect flowing8s and jammed52.5s source frames; final encoded8s/56.5s retain glass boundary and grain clump.

## Evidence and validation scope
All `qa/…` references above are relative to [EP027 evidence](../evidence/EP027/). See [original lessons](../evidence/EP027/LESSONS-PLAYBOOK.md), [review notes](../evidence/EP027/qa/independent/review-notes.md), [final encoded review](../evidence/EP027/qa/independent/final-review.json), [numerical review](../evidence/EP027/qa/independent/numerical-review.json), and [final source](../evidence/EP027/episode.js). The manifest fingerprints individual files. Rejected candidates contain multiple defects; do not attribute every difference to this entry.

Encoded final: `d1f93db5c2b175d275fb8f598bb14d3b08898d994580330f9c0231c27ba3c772`. All 4,200 thumbnail frames covered at 90×160; 13 unique selected full-resolution frames across reviewers. No direct listening or continuous playback. These copied reports are prior reviewers’ observations, not a new visual re-review by the playbook compiler.
