## Final validation — EP028
Status: **validated_with_limits**. Final MP4 SHA256 f2759a19d64db0047ede4474ecf3d1df15353403c2ed0742b3a131f48d5f8580. Source caed722b201953fcd7cf459be49a86efe89e2609536e2ab22e70ae1b21ef7566. All3840encoded thumbnails covered; changed sheets freshly reinspected, unchanged sheets carried only by byte-identical hashes. Nine selected encoded fullres views; fullAVdecode and numeric source/contact/AAC checks passed. Independent source/encoded reports distinguish exact scope. No direct listening, continuous real-timeAV or browserparity claim. First rejected encode and source/evidence preserved.

Best validated repair is the recorded final trial, not a universal optimum. Regression evidence, scripts and all attempted repairs: [EP028 QA report](https://github.com/muhammad-y-kamel/moki-peb-animation/blob/0a6f53782b31252c2fbcc880681364b949a4047f/episodes/EP028/QA-REPORT.md), [lessons](https://github.com/muhammad-y-kamel/moki-peb-animation/blob/0a6f53782b31252c2fbcc880681364b949a4047f/episodes/EP028/LESSONS-PLAYBOOK.md). Exact archive main commit0a6f53782b31252c2fbcc880681364b949a4047f verified remote head and27treeentries. Source ZIP extraction rebuilt exact source,3WAVs and9native pixel hashes. Publication/schedule verification is separate and belongs to coordinator.

---
## Historical production checkpoints (preserved)
# ANIM-0014 — Seat and sole support constants crossed between rigs

Project: MOKI & PEB / EP028. Status: repair_attempted; independent source re-review and final encoded QA pending. Category: geometry. Record updated during production, not a retrospective universal claim.

# EP028 live findings
## ANIM-0014 — Seat/support coordinate mismatch (observed source preview v1)
Symptom: Moki rises rather than lowers to sit; first left hand clips edge. Cause: EP027 standing floor/body constants copied into EP028 chair coordinates, plus x205 entry position. Evidence: qa/rejected/story.js, art.js and layout-v1.jpg (source preview, not encoded).
Trial 1: derive floor1522, standing Moki y1410, body-bottom at y+12*.94, sitting center1430 so bottom1441.28 matches cushion top1442 within0.72px; first aborted sit1420 leaves10.72px clearance. Chair foot plane1522, foot sole plane1522; keep fixed torso geometry and proportions. Shift entry minimum x245. Pending visual/numerical regression.
## ANIM-0015 — Authored hand/prop boundary discontinuities (observed code audit)
Symptom: hard conditional action ownership starts/ends at full reach; spare cushion position jumps at27/44.5. Cause: isolated action intervals lack approach/release interpolation. Evidence: rejected/story.js. Repair pending; require all 3480 story transitions sampled for limb/prop displacement and neighboring views.
## SCRIPT-028 — Canonical synopsis versus timed scenes
Preserved exact source. Summary attaches horn to belt and ends with a second seat honk; detailed scenes3–5 attach horn under extra cushion and end with Moki kindly squeezing it, then duet. Detailed timings and reiterated final-gag section prevail. Bridging action at24.5–27 explicitly removes trap-bearing extra pad from right chair and replaces with spare from visible side stand; this explains silent press and held pad without materializing a prop.

ANIM-0015 trial results: smooth ownership envelopes removed hard action starts. Full3480frame state pass caught remaining spare C181px reset at44.5/45.5 and cup hand release72px/frame at3.95. Extended spare support interval to45.5; widened cup hand release from0.1s to0.8s. Re-test max pad7.14px/frame, max hand25.12px/frame, no threshold jumps. A naive relative foot oscillator still jumped40.32px at interval ends; replaced with exact absolute-time planted stance/swing anchored to sampled torso path. Re-test max foot11.15px/frame (intended surprise jump), no40px discontinuities. One source syntax typo from inserted extra bracket was caught before render; corrected bracket and executed source successfully. Preserved original rejected source and initial montage; no encoded rejected candidate existed at these stages.

## ANIM-0016 — Ownership and facial occlusion in shared-prop action
Independent source reviewer observed horn/left hand covering Peb eyes53–58s; spare C moving25–27 with no hand; B bouncing in place instead of swapping. Evidence: qa/independent original source snapshot and54.5.png; qa/rejected/story-before-independent.js/art-before-independent.js. Cause: action positioning chosen without eye-mask overlay, implicit rather than explicit second-hand ownership, and inconsistent cushion history after generous transfer. Trial: shared horn lowered1370→1430 with anchors; Peb left carries C; first generosity exchanges A/B, leaving coherent endpoints for actual reverse exchange at16. Moki moves to center for first exchange, longer hand approach keeps max hand28.19px/frame. Numerical source test3480states passes thresholds. Independent re-review pending.
Additional source-review symptom: initial horn foreground disappearing at0.8 without occlusion. Cause draw order bypassed hidden-under-pad state. Trial: horn ends at pad center1458 and padA redraw masks horn naturally while sliding in, preserving hand foreground. Independent boundary review pending.

ANIM-0014 recurrence: independent reviewer measured small Peb soles~11.85px above floor because Moki foot center reused for small rig. Derive each standing center FLOOR−23*scale including outline, seated Peb center1503.5−23*scale from rung top. Jump offset preserved. Independent regression pending.


## Scope and next gate
Source-only evidence at this checkpoint; do not infer encoded review, audio listening or publication. Raw canonical source is preserved in Moki repo; source snapshot and preview evidence will be archived with EP028 final. Each iteration retains earlier attempts. Re-run full frame state and affected visual boundaries; only then advance to encode. Relevant predecessor entries ANIM-0001/0002/0004/0012/0013 remain applicable.
