# Pre-tail integration candidate

Status: staging/source work, NOT final visual clearance. Canonical duration and original audio/script unchanged. All inherited source files preserved.

## Implemented
- `master.cjs`: contiguous module dispatch 0–314.88 s; isolated Stage per module to prevent same-key/different-asset collisions. Missing tail fails closed.
- `opening-with-pot.cjs`: dry basil same original atlas and same fixed [750,530] base as ending, present-day only; no plant inserted into earlier dawn flashback.
- `confrontation-threshold.cjs`: door opens, Yaser steps aside facing Sabah, Sabah approaches doorway supporting pot. Captions moved away from foot lane. First attempt rejected for backward facing and overlap; repaired staging retested in native stills. Whole-body gait/contact still rejected.
- `key-visit-corrected.cjs`: notebook placed on measured shallow tabletop plane, pen/nib and ink share page coordinate system; resumes progressive writing at125.6–131.3 instead of already settled pen. Two-line return includes pen lift128.2–128.55. Source-defined exact quote unchanged. Old writer arm remains unaccepted.

## Tested
- All13 pre-tail modules initialized and rendered start/mid/end at1920×1080 without missing assets/runtime exceptions.
- Global CFR dispatch test:18,893 unique frame assignments through314.88, no gaps/overlaps;11,525 tail frames remain. Tests are timeline/runtime only.
- Native contact stills inspected:114.9,116.15,117.83,120.82,124.4,126.8,128.35,129.9,131.5,143.2,144.5,145.5,148.14,163.16,184.88,311.93,312.7,313.5,314.85 plus opening/dream samples.
- Old threshold-staging.mp4 is an engineering encode only and invalidated against latest changed source. Do not use for release or claim frozen final QA.

## Unresolved high defects by owner
1. Shared rig: clean Sabah hands appear oversized/clawlike and free arm stiff in dream/payment; original user rejection applies. Source `rig/clean-sabah.cjs` / projected adapter, examples dream-46.980.png and key-visit-114.900.png.
2. Shared rig: Yaser/Farouk/Rania stair arms and legs remain bowed/stiff/oversized; sampled148.14. Original numerical reviews are not clearance.
3. Shared rig: seated Yaser forearm width/elbow silhouette distorts during count and writing. `rig/seated-yaser.cjs` and custom `kvWriter` connected-arm config. Native examples bridge-184.880.png, key-visit-126.800.png.
4. Shared rig/contact: door-opening Yaser arm bends unnaturally and finger-to-handle grip remains provisional. Native312.7.
5. Scene boundary: full turn/eyeline motion at311.92 and face/body orientation must be retested after repaired rig, not accepted from corrected facing flags alone.
6. Semantic review: all remaining cuts and held dialogue need full continuous review, not only sampled stills. No all-frame, AV-listening, portrait or release claim.

## Reproduction
Run `node --expose-gc sample-module.cjs <module-id> <absolute-time>...` from any cwd. Run `node test-timeline.cjs` for dispatch. For final encode use isolated per-module stages and existing global master-frame-plan; freeze dependency hashes first. Do not assemble pre-tail candidate as full episode.

## Resume18:40 update
- Full master dispatch now0–506.96; 30,418 CFR frame assignments pass with zero holes/overlaps. Tail source comes from resume-tail; this supersedes earlier missing-tail note only, NOT any visual gate.
- Tail internal cuts unioned in tail-timeline-wrapper.cjs. stage.animationTime forwarded deterministically.
- overview-montage.jpg and tail-boundaries-montage.jpg are labeled mixed-iteration source diagnostics; native originals indexed in MONTAGE_INDEX.json. Not frozen final render.
- Dream cash defect traced to actor-local table prop callback, not hand adapter: new dream-table-fixed.cjs draws world/table-owned money at[1412,399.4] before foreground actors. Matching family wrapper switches table-owned layer at46.3; release reach/contact still under review.
- Separate-process test-repaired-adapter.cjs injects repaired Sabah/path exports without mutating originals. Requires explicit prepare for legacy modules. New rig NOT default master yet.
- Dream adapter50.8 improved with centered path; next51.5 failed guard GAIT_STANCE_FLEXION_OUTSIDE_LEVEL_WALK side0 flexion52.69. Reported to rig owner, not bypassed.
- Payment114.9/116.15/117.83 near-hand requested reach clamps; native116.15 looks in contact but source distances still unaccepted. Yaser free hand huge and overlaps Sabah far hand.
- Tail boundary sample defects sent to owner: floating notebook363.679, vector truck363.681, box/chair373.519, Farouk sleeve/elbow443.359. Some may have newer source fixes; montage intentionally not latest/frozen acceptance.

##18:46 boundary retest
Threshold walking now312.4–314.2 (door partly opening), modest carry hip hinge314.2–314.88 max.08 radians. Initial helper caused left-leg silhouette snap at314.2; fixed by preserving identical old leg deformation/feet/bob via optional drawLegs callback. Native314.199/314.201 visually matched legs after correction,314.85 retains supported pot. Still no full gait/deep-squat acceptance; tail owner coordinating combined313.9–318.3 clip.
Dream/family wrappers now forward gait phase, weight and absolute time; dream also lean. Gait helper reported latest perspective fix passes actual50.8/51.5/53.15 without guard bypass, continuous test pending.
Tail owner reports newer source fixed notebook support and truck style; earlier montage remains historical mixed iteration evidence, not latest approval.
- Memory11.08 native sleeve wiping inspected. Covered clenched hand is intentional cloth contact, not a missing-hand defect; this custom wipe arm is separate from injected clean Sabah adapter.
-18:49 deed-table-fixed.cjs corrects floating/over-tilted paper with shallow tabletop depth factor.38; pen and ink share same map399+(y-399)*.38. Native58.5/67.9 inspected: page now rests within tabletop plane. Text unchanged. Storage71.039/71.041 visually preserves paper position across ownership transition. Seated forearms still unrepaired.
