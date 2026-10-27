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

## AA-20261027-06: Repair crossfade creates transient text stack
Independent retest b92401af... found67.44–68.04 chat, instruction and notification text superimposed. Repaired with900px horizontally separated incoming/outgoing panes; no shared-space text fade. Also raised activation button to1320, preserving status1460. Final source a52d29c...bd62b87 independently sampled; no unresolvedHIGH in inspected source scope. Encoded retest remains independent.

## AA-20261027-V2-01: State fades stacked readable text again
V2initial source1595e911... at39.95/48.65/53.5/57.63/60.52 produced overlapping headings/fields. Root and independent reviewer inspected actual generated images. Repair: outgoing readable text completes its short fade before incoming state appears; moving assistant has a noncrossing heading reveal. Do not treat same-space opacity crossfade as a clean transition. Sample retest07f8ec... fixed the inspected stack points; final encoded retest remains required.

## AA-20261027-V2-02: Feed cards crossed heading
Knowledge entries traveling upward crossed y675 headline at46.6–47.4. Repair: entry shrinks into a memory bead, heading retires before feed. Retest sampled46.6/47.2 clear. This avoids using a readable card as a passing wipe.

## AA-20261027-V2-03: Assigned agent hidden by page layer
Correct coordinate motion was implemented, but opaque page tile painted afterward concealed docked orb. Actual50.6s evidence revealed this, despite code indicating movement. Repair: draw assigned orb above page background and put check beside, not over face. Retest bf883e... confirmed visible orb. Layer/order evidence matters, not coordinate assertions alone.

## AA-20261027-V2-04: Generic result omitted narrated actions
InitialV2 lacked an explicit public comment, customer order intent, and timely complaint; a completed order simply appeared. Repair: exact timeline anchors drive comment/reply, DM, short order request/detail prompt, complaint response, then distinct exception/order rows in owner inbox. Sara identity and shoe850 remain matched. Very short beats retain a reading-time limitation; final motion must be inspected, not declared successful from labels alone.

## AA-20261027-V2-05: Enlarged scene reduced side safe margins
Encoded low-resolution proof showed platform endpoints nearly touching left/right edges after camera scaling. Repair: narrower endpoint geometry and inward xanchors. Connection paths rerouted through left margin instead of crossing heading/selected rows. Disclaimer enlarged from22to30px. These changes are source-level after lowproof; final native export must be retested.

## AA-20261027-V2-06: Clean frames were still unreadably brief
Independent ACTUAL encoded proof inspection showed the first three reply phrases were strongly visible for only about 0.2–0.3 seconds. No overlap was needed for the scene to fail comprehension. Repair: completed concise exchanges accumulate in four separate lanes. Encoded retest measured price/delivery/order/complaint reply holds of approximately 3.47/2.79/2.08/1.39 seconds. Scope: the repaired excerpt, not a universal full-film approval. Lesson: inspect temporal readability in encoded sequences, not only clean contact-sheet frames.

## AA-20261027-V2-07: Cursor instances were separate instead of one continuous pointer
Source inspection found overlapping loop visibility windows could produce two cursor objects and a jump between selection targets. Repair: one cursor follows successive checkbox coordinates with a movement phase before each click; assignment cursor also moves before pressing. A 50ms full-timeline source scan found at most one cursor path. This numeric bound does not replace actual path/target image review.
