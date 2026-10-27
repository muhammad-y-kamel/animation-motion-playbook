# AnswerAct response ad — production errors and repairs

## AA-20261027-01: Intro element collision
Observed actual source preview t3: chart and incoming inquiry bubbles overlapped ad caption and each other. Cause: independent entrance timings occupied same vertical region. Preserved rejected-intro-overlap.png. Repair: chart retires3.1–3.75s before incoming messages3.5+; ad shrinks above messages; explicit separate yslots. Selected source proof4.8 viewed; encoded final retest pending.

## AA-20261027-02: Competitor label overlaps retained message
Independent reviewer source5e3118... found15.2–19.2s competitor label colliding with retained original bubble. Repair removes original inquiry state as alternate-store response enters. Actual17s source proof viewed. Final encoded retest pending.

## AA-20261027-03: Footer/CTA clip
Independent reviewer found assignment connected badge and final complaint badge exceeded actual screen clip. Cause: later shell contraction not propagated to absolute content coordinates. Repair: connected badge1460, explicit complaint-source→owner-notification layout bounded≤1455 through contracted clip1475. Source57.5/75 proofs reviewed/retest underway. Final encoded retest pending.

## AA-20261027-04: Narrative mismatch comments/complaints
Reviewer found no actual comment response and complaint was only label. Repair: explicit public-comment question→reply before inbox message, customer complaint→directional route→owner alert, separately timed order alert. Source maps aligned actual narration, encoded review pending. Do not equate labels with fulfilled action.

## AA-20261027-05: Limiter auto-level unexpectedly removes headroom
Numerical final-mix check measured0.0dBFS peak after alimiter limit0.84. Cause: FFmpeg limiter automatic output normalization enabled by default. Rejected mix preserved qa/rejected-limiter-autolevel.wav. Repaired level=false; actual WAV peak-1.5dBFS. This is numeric evidence, not listening or pronunciation clearance. Dry narration unchanged, no additional paid TTS.

## Evidence limits
Source proof and independently sampled frames are not continuous playback/listening. ASR unavailable locally; no vowels/shadda certification. Final encoded/hash-bound review remains separate from Library delivery. No posting authorized or attempted.
