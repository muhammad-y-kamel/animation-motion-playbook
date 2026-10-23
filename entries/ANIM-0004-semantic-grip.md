# ANIM-0004 — Open palm during high cube carrying — blocking grip/readability defect

- Project / episode: MOKI & PEB / EP027
- Category: animation
- Status: validated with stated limits; best among recorded attempts, not universal optimum.
- Cause confidence: high, supported by reviewer account and final source; exact prior source revisions are not retained here, rejected encodes are.
- Reporter: EP027 production and independent review (attribution in copied reports).

- **Symptom:** Moki's high carried cube triggered a raised open-hand pose instead of a grip around18s/51.8s.
- **Root cause:** reusable rig inferred reaching from hand height when no explicit grip flag was set.
- **Attempts/outcomes:** default rig pose did not express ownership; explicitly set `gripRight=true` throughout Moki's carried-cube interval.
- **Best validated fix:** semantic action state overrides generic reach heuristics.
- **Prevention rule:** every carried prop must declare which hand grips it and keep that flag through the whole carry.
- **Regression check:** fresh source51.8s and final encoded51.8s show closed grip; authored carried-cube contact equations remain exact.

## Evidence and validation scope
All `qa/…` references above are relative to [EP027 evidence](../evidence/EP027/). See [original lessons](../evidence/EP027/LESSONS-PLAYBOOK.md), [review notes](../evidence/EP027/qa/independent/review-notes.md), [final encoded review](../evidence/EP027/qa/independent/final-review.json), [numerical review](../evidence/EP027/qa/independent/numerical-review.json), and [final source](../evidence/EP027/episode.js). The manifest fingerprints individual files. Rejected candidates contain multiple defects; do not attribute every difference to this entry.

Encoded final: `d1f93db5c2b175d275fb8f598bb14d3b08898d994580330f9c0231c27ba3c772`. All 4,200 thumbnail frames covered at 90×160; 13 unique selected full-resolution frames across reviewers. No direct listening or continuous playback. These copied reports are prior reviewers’ observations, not a new visual re-review by the playbook compiler.
