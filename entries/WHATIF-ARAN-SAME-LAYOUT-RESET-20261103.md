# WHATIF-ARAN-SAME-LAYOUT-RESET-20261103

Status: validated with limits, opening transition only. Related: ANIM-0004 and WHATIF-ARAN-PREMATURE-SEVER-20261103.

## Defect and failed trial
V007 fixed premature cloth severing in the opening action but left a same-layout reset at absolute frames 1033 to 1034 (17.2167 to 17.2333 seconds, 60 fps). The hand jumped from the upper face-side position to the lower cuff while the square patch became a loop symbol, the face disappeared and a boat appeared. Both landscape and portrait dense decoded review held this transition. Calling it an editorial cut was insufficient because the panel, rocks and camera remained continuous. Preserve V007 HOLD reports unchanged.

## Root cause and V008 repair
The thread_boat dispatcher used a different default hand position and prop representation from the outgoing cut_thread settled state. V008 introduces a pure absolute-time threadBoatPose beginning at the exact outgoing hand position (71,-23). The same held square patch follows the hand as it lowers to (18,25) over 0.65 seconds. The face fades over 0.5 seconds and the boat enters over 0.65 seconds. Script, audio, caption and timeline files remain unchanged.

## Tests and actual evidence
A source geometry test covers 6,501 samples and exact boundary custody. Native retest covers 37 witnesses per format; landscape opened 6 native images and portrait 7, separate from overview coverage. Dense proofs cover every decoded frame 1013 through 1076 in both formats: 128 thumbnails total. Each reviewer additionally inspected source and decoded native pairs at 1033,1034,1056,1074, totaling 8 source and 8 decoded images. Both scoped dense-still reviews pass: no boundary jump, held patch follows lowering, staged face/boat fade settles readably. Technical receipts require clean owned-process cleanup, not provisional RESULT alone. Existing 1 GiB RSS, 90-second and 64 MiB per-job caps were not expanded.

## Source-only regression scope
Of 50 source files, only visuals/aran.js changed between V007 and V008. The exact patch is confined to thread_boat pose/custody/opacity, balanced face save/restore and version metadata. A state-aware canvas mock trace matched 1,638 sampled unchanged-action draws; only 42 thread_boat draws differed. All 432 opening-cut frame draws (216 per format) matched. This supports narrow reuse of prior V007 opening pixel evidence together with source equivalence. It is NOT newly rendered V008 pixel identity, nor proof of all arbitrary times. Other earlier static reviews retain only their original scope; pending motion windows remain pending.

## Limits and prevention
No normal-speed playback, audio or full-film acceptance follows from dense still review. Eleven other critical motion windows remain pending. Final encode changes require exact identity and affected review again. Preserve prop geometry and ownership across scene dispatch; compare neighboring actual encoded frames before declaring a cut intentional. Add incoming transition, settled phase and atlas regressions after shared helper changes.

Evidence: [hash-bound transition acceptance](../evidence/aran-v008-transition-20261103/acceptance.json). Local source regression test and freeze hashes are bound in that record. No external upload or scheduling claim.
