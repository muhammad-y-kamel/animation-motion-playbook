# Mandatory short checklist — before building AND at every stage

Record episode, source hash, applicable entry IDs, reviewer and pass/fail evidence in a stage log. An unchecked gate is not passed.

## 1 Story / shot plan
- [ ] Read relevant index entries and project contract; resolve contradictory instructions.
- [ ] Each plot-critical action has a legible pose/contact/prop source: ANIM-0007, 0008, 0011.
- [ ] Mark sound/contact events on shared timing sheet: ANIM-0009.
## 2 Layout / drawing / rig
- [ ] Derived support dimensions, stack spacing, curved contacts: 0001, 0003, 0010.
- [ ] Projected full silhouette and hand bounds after camera change; background covers canvas: 0002, 0013.
- [ ] Layering reveals grip/causal action; helpers cannot silently replace caller paths: 0005, 0011.
## 3 Motion / interaction
- [ ] Explicit hand ownership and grip state throughout carry: 0004.
- [ ] Rotated supports and contents checked at endpoints AND intermediate angles: 0003, 0006.
- [ ] Contacts and transitions sampled; random-access frames independent of preceding frames: 0012.
## 4 Audio
- [ ] Sample actual visual event and encoded cue alignment, not cue names alone: 0009.
- [ ] Numerical clipping/lag checks logged separately from listening; do not claim listening if absent.
## 5 Render / review / repair loop
- [ ] Preserve failed version and exact timestamp/frame BEFORE repair; immediately create/update error entry.
- [ ] Rebuild; re-run targeted test, neighboring transitions and affected entry regressions.
- [ ] Inspect final encoded output, not only source previews; declare thumbnail/full-resolution/playback scope.
- [ ] Every source/encode change invalidates affected review; exact identity required to carry review forward: 0013.
## 6 Package / archive / delivery
- [ ] Source/audio rebuild and archive integrity verified; final hashes bound to evidence.
- [ ] Index, trials, best-known repair and prevention updated for EVERY new error.
- [ ] Separate archive validation from upload/schedule verification. No claims of publication from render QA.

- [ ] Before claiming canonical byte identity, compare materialized and ZIP-extracted `git hash-object` with the repository blob SHA; avoid serialization that appends a newline. EP030-008.
- [ ] Audio correlation windows include timeline-start/end cases; clamp to decoded stream bounds and reject empty windows before calculating lag. EP030-AUDIO-002 is a test-harness defect, not a media decode defect.

## Recurrence gate — actual support and swept clearance (EP030)
- [ ] Register every applicable support mode: floor, moving deck, ramp, ladder, bridge, carried and airborne. An unknown mode is not automatically grounded.
- [ ] Derive each painted contact from the actual support footprint, rendered scale/rotation/outline. Test absolute planted support gaps as well as penetration. Independent x/y tracks and world-floor-only bounds are insufficient.
- [ ] Disable planted walking anchors during flight. Check the swept shoe/hand envelope against props, machinery and architecture, including docking posts.
- [ ] Verify semantic grips against real drawn geometry and nearby solids; matching declared points can still grip empty air or intersect a deck.
- [ ] Use sub-frame/boundary samples and disclose tolerance/coverage. Sampled helper tests do not prove arbitrary continuous mesh clearance.
- [ ] After source changes, invalidate affected encoded/audio reviews; preserve partial rejected encodes.

Reusable helper: [contact-utils.cjs](helpers/contact-utils.cjs); [recurrence history and scope](evidence/EP030/qa/CONTACT-REGRESSION-RECURRENCE.md). See MOKI-EP030-REVIEW-001/002 and earlier ANIM-0001/0014, EP029-GEO-007.


## Mandatory creative and semantic gates (user rejection EP031)
- [ ] Read [future Moki standard](projects/moki-peb-creative-standard.md) before every authorized short/long. Goal→distinct attempts→changed consequences→earned payoff; no global-speed shortcut or fixed duration target.
- [ ] A blind reviewer must infer the central causal chain from visuals without first reading the intended plot. Preserve ambiguities and exact viewed scope; test encoded motion separately.
- [ ] Acting must identify the action: motivated closeups, readable anticipation/contact/reaction, no tinywide-only mechanisms, magical beams or unexplained transitions.
- [ ] Every plot-critical sound must be semantically recognizable; use original/appropriately licensed recorded effects when generic synthesis fails. Preserve provenance. Cue labels and waveform peaks do not prove meaning.
- [ ] Test the ACTUAL final mix after musicducking. If masking persists, reduce/remove score during cues. Report humanlistening versus classifier evidence separately, including weak/ambiguous scores.
- [ ] User rejection invalidates earlier creative acceptance even if technical tests passed. Preserve rejected source/media and explain failed/working trials, never relabel oldpass as final.
- [ ] Test full actor/hand/shoe/prop envelopes, collapse debris, camera cuts, actualsupports and endcard coverage. A matching declared anchor can still hide an eye or intersect geometry.
- [ ] Source/encode changes require exacthash-bound rechecks; codec lookahead may change frames before an editedcut. Compare decodedpixels and inspect differences.
- [ ] SourceZIP must rebuild source/audio/pixels from local relativeassets; exclude caches, credentials, modelweights and irrelevant hugearchives.
Evidence: [EP031 clarity repairs](entries/MOKI-EP031-CLARITY-V4.md), [cross-episode pacing audit](evidence/creative-pacing-20261023/MOKI-PEB-CREATIVE-PACING-AUDIT.md). Evidence is bounded; no measured audience/retention claim.

## Cover generation regression gate
- [ ] Each prompt contains only its own part's positive subject list; shared conditional language must not mention other parts' scene objects.
- [ ] Style/layout references do not transfer their subjects. Check required subjects and narrative exclusions independently of typography.
- [ ] Inspect Arabic hamza, dots and joins at full resolution; a successful edit call is not a successful visual repair.
- [ ] Preserve failed edits and rejected candidates; recheck the entire affected cover and manifest only final accepted hashes.
Evidence: [Prophets cover trials](entries/PROPHETS-COVERS-20261024.md). No full-video or publication claim follows from a still-cover pass.


## Prophets creative rejection follow-up
- [ ] Treat static-looking motion, pronunciation and rejected casting as OPEN until actual repaired media is reviewed; a prompt update/validator/planning dry run is not a media fix.
- [ ] Resolve ordinary-human permission separately from sacred-figure restrictions; apply latest narrowly scoped abstract-light exception only to this project, never as a universal religious ruling.
- [ ] Inspect meaningful subject-state change in encoded playback and camera-locked views; still contact sheets and pixel activity alone cannot pass narrative motion.
- [ ] Resolve authorized output scope before applying full-film/ten-Short defaults; narrative/action clarity outranks musical-bar cut preference without retiming speech.
Evidence: [Prophets audit follow-up](entries/PROPHETS-20261024-AUDIT.md#follow-up--user-creative-rejection-and-prompt-contract-repair-2026-10-24).

## Hakawi writing and oral-flow gate
- [ ] For Hakawi, check natural spoken Cairo syntax, meaningful choices and strongly earned emotion without a default word quota. Do not replace emotion with cold restraint or dramatic intensity with automatic catastrophe.
- [ ] Keep rejected writing/voice feedback OPEN until actual replacement scripts and authorized audio are reviewed; prompt lint and repository publication do not prove emotion or pronunciation.
Evidence: [HAKAWI-WRITING-20261024](entries/HAKAWI-WRITING-20261024.md).


## Hakawi audition and articulated-image proof gates
- [ ] Reconcile current approved role-to-voice cast; one-voice historical instructions cannot override a later accepted multi-voice sample. Preserve text and authorized pronunciation differences.
- [ ] Profile labels, ASR and successful decode do not prove emotional fit; audition acceptance applies to its exact excerpt, not all future audio.
- [ ] Check generated scene state, sleeve/prop semantics and visible joint seams against source. Preserve failed edits.
- [ ] Test actual target-resolution render under sustained resource load; a low-resolution pass or partial MP4 is insufficient. Record real FPS/sample count and separate bounded proof from full delivery.
Evidence: [Hakawi production trials](entries/HAKAWI-PRODUCTION-20261024.md).


## Canonical long-first workflow and source freeze
- [ ] Record production order separately from publication order: full narration master → complete reviewed long video → Shorts derived from its exact audiovisual timeline; Shorts may publish first without being independently produced.
- [ ] Reconcile the whole rendered PDF before paid full-story TTS; freeze source-copy SHA and require exact plan/input match. Never apply broad lam-alef/numeral replacements without context.
- [ ] Reuse good audio. Repair only confirmed defects, not ASR-only omissions; any duration change invalidates downstream cuts/alignment and relevant QA. No independent Short TTS.
Evidence: [Hakawi workflow/source/ASR lessons](entries/HAKAWI-PRODUCTION-20261024.md#hakawi-workflow-008--shorts-first-publishing-mistaken-for-production-order).

## Native portrait design gate — all channels
- [ ] Mobile adaptation is native drawing/layout redesign of the same scene, not camera-only reframe/crop. Keep essential actors, hands, props, causal mechanisms and text readable without squeezing or blurred filler.
- [ ] Shared audio/action/source time is preserved; test portrait-specific support/contact/layering/safe areas. Derivative Short order follows completed-long QA; independent Shorts are not forced into that model.
Evidence: [mobile layout correction](entries/HAKAWI-PRODUCTION-20261024.md#hakawi-layout-011--camera-reframing-confused-with-mobile-scene-design).

## Hakawi multi-scene rig and final-mix regressions
- [ ] Inspect effective alpha-clipped crops for adjacent sprite islands; confirm anatomical source ordering, proportions and cap overlap at mirrored/mid-arc poses.
- [ ] Test complete IK target trajectory and inner/outer reach; endpoint-only stills cannot clear branch inversions.
- [ ] Verify physical grip/support/ownership and actual independent reach, not actor sliding or baked duplicate props; match the exact source action before demanding a repair.
- [ ] Final mobile loudness/masking is a full-master post-process, not new TTS. Preserve dry stem; derive all Short PCM from the same final mix, with no independent remix.
- [ ] Record tool rejections precisely; no bypass or invented universal policy claim. Alternative staging preserves source and requires permitted scope.
Evidence: [05:03 bounded QA batch](entries/HAKAWI-PRODUCTION-QA-20261024-0503.md). No full release passed by these samples.

## Systemic physical-action clock and continuity gate
- [ ] Separate finite physical reach/contact/use/release timing from the longer narration/semantic shot; do not speed speech or stretch one gesture across the whole beat.
- [ ] Inspect actual encoded mid-action and contact plus normal-speed playback where available; static camera/head motion cannot substitute for motivated acting. Endpoint-only or decode-only passes are insufficient.
- [ ] Reconstruct prop owner/location/support from a pure absolute-time event ledger; test shuffled seek/segment starts, transitions, duplicates, doorway geography and eyelines.
- [ ] Recheck the same mechanism across all episodes and bind closure to new encoded evidence. A source patch is only repair_in_progress.
Evidence: [HAKAWI-PACING-020](entries/HAKAWI-PACING-20261024-0514.md); full E01 v1 was technically valid but rejected. Final mix and publication remain separate gates.

## User-caught anatomical proportion gate
- [ ] Compare actual composite to intact full-body references: arm length/thickness, shoulder/elbow/wrist/hand, head/torso ratios and perspective—not just connected joints.
- [ ] Review both actors at rest/reach/raised/contact/withdraw and transitions, including the entire user-visible excerpt; preserve before/after images and rejected encode.
- [ ] A numeric IK pass or source fix does not clear visual anatomy. Require corrected encoded independent QA and promised user style feedback before claiming acceptance.
Evidence: [HAKAWI-ANATOMY-021](entries/HAKAWI-ANATOMY-20261024-0529.md); E01 first45s user rejection remains OPEN.

## Contextual pronunciation and corrected-master gate
- [ ] Full-source linguistic audit before paid TTS; canonical text/captions immutable, explicit contextual phonetic layer and source↔TTS stable-ID maps. Protected religious text byte-equal; subject gender is not speaker identity.
- [ ] ASR spelling and IPA decoder output cannot certify vowels/stress/shadda. Validate positive controls; fixed model-window size is not phone duration. State hearing limits and stop when the bounded paid pass is complete.
- [ ] User task-specific preview waiver removes waiting, not HIGH-defect internal QA or general permission requirements.
- [ ] Same-person wardrobe preserves bones; zero mesh inversions is not alpha/silhouette coverage. Verify actual encoded joint regions and scope.
- [ ] Bound asset cache/lookahead, monitor whole RSS/drain, fail missing assets and compare full/range pixels. Partial encode or selected-frame equivalence is not full film pass.
- [ ] Check cover cultural objects, anatomical handedness, transferred-prop state and Arabic after each edit; final cover mapping follows final master cuts. Protect critical props from phone UI rails.
Evidence: [corrected batch and bounded proofs](entries/HAKAWI-CORRECTED-PASS-20261024-0644.md).


## Bilateral whole-chain gate — 2026-10-24
Read the current bilateral failure record before drawing, rigging, motion and final review. Inspect BOTH complete limbs in full-body context for every used actor/wardrobe/facing/pose family at neutral → reach → grip/use → release → return. Check anatomical side, shoulder front/back and roll, elbow bend plane, thumb/palm/dorsal/cuff orientation, body-facing and occlusion. A hand-only edit cannot correct a backward shoulder-to-arm chain. Preserve accepted proportions and use coherent intact whole-chain references before segmentation; never conceal an oversized/broken passive arm behind the torso. Require full-resolution source and decoded final ROI plus actual motion-arc/transition review. Numeric IK/Jacobians and sparse atlases cannot certify complete visual correctness. Validate visible coupled finger/prop grip for every writing/contact helper. Native defects require targeted parent-master/reused-pose audit, not blanket rejection of unrelated media. Preserve source and canonical PCM; no extra TTS is implied. Keep static, motion, encoded and external publication statuses separate; a newly found HIGH defect invalidates the affected prior release until exact-identity retest.

Evidence: [bilateral escaped defects](entries/HAKAWI-BILATERAL-20261024-0812.md).


## Release-escape regression gate — 2026-10-24
- Before native export, validate EVERY part's exact canonical char/word/time intersection, once-only reconstruction/rejoin and ALL actual render-wrapper frame times. A correct caption array is insufficient if dispatch still uses global groups. Split attached punctuation at punctuation-only boundaries without splitting spoken words; inspect actual encoded cut edges.
- Native layout must replay the same finite source action phase (reach/use/release), not hold the source's settled end pose for the whole beat. Inspect both limbs and complete viewport-edge trajectories after restaging.
- Freeze ALL render entrypoints/shared code/assets/timing before acquiring an encode lease; hash before/after every checkpoint and reject source mutations. A concurrency lease is not version isolation.
- Preserve exact canonical sample counts through container timing. When AAC MP4 timescale rounding occurs, remux from immutable source slices with sufficient precision (tested case44100), verify decoded duration/sample coverage and unchanged video packets; no regenerated speech or independent remix. Distinguish rawPCM and WAV-file hashes.
- Native-only failures require direct parent-master comparison before revocation: fix only evidenced affected formats/ranges. Inspect actual full-resolution frames before treating an atlas tile-edge artifact as severed anatomy.
- Bind final review to exact media hashes; report known-HIGH sample scope, remaining native tests, Library state and externally verified scheduling separately. Do not infer full listening/continuous playback or external replacement from technical or source tests.


## Custom-helper, semantic dispatch and event-chronology recurrence gate
- Enumerate ALL actual rendered sprite instances across the full timeline: direct action overlays, custom helpers, background/secondary actors and base-source detachable parts, not only main-rig IK targets. Inspect both complete limbs and action extremes at full resolution; preserve authored proportions.
- Audit native semantic cue dispatch, recorded action phases/call counts and settled durations at initial/mid/end. Handler existence/anatomy clearance cannot prove meaningful action. Document legitimate equivalent native composition; camera motion alone is not an event and proven unaffected equivalents need no rerender.
- Validate absolute prop-event ownership before/during/after narration anchors in both formats. Correct contact at one instant cannot clear premature placement, duplicate ownership or vanished props.
- Writing QA checks pen tip AND emitted ink inside transformed paper polygon with inset margin through contact phase. Pose/grip approval alone does not clear registration.
- Revoke only evidenced affected identities; preserve unaffected ranges and previous attempts. Separate scoped source/encoded proof, final-media clearance, Library durability and actual external schedule. Never describe an externally scheduled revoked upload as already Private.


## Final recurrence closure addendum
For every semantic cue, compare absolute narration time, scene-local time and action-local offset; do not cut away before physical contact/completion merely because a narration cue arrived. Audit actual custom sprite instances as well as named rigs. Use explicit absent/held/moving/placed prop states across cuts, allowing only authored supported transitions. Classify native alternatives by meaningful event equivalence, not identical cameras or shot counts. Bind clearance to exact replacement hashes and report Library transfer/external scheduling separately; unanswered permission is not approval.


## Future narrative clarity and payoff gate — 2026-10-24
- [ ] Read [storytelling development](projects/storytelling-development-20261024.md) with the active channel contract. Establish source/script lock and viewer relevance.
- [ ] Map supported opening/body questions to evidence and payoffs; keep varied pressure/release and a distinct useful visual language. Never invent facts, events or speech to fill the map.
- [ ] Review causal action and question comprehension in actual output, keeping text, audio, motion and audience evidence separate.
- [ ] Preserve locked scripts, exact same-master derived audio, native portrait redraw and bilateral whole-chain gates. This checklist does not authorize production, paid generation or publication.


## Software-demonstration motion gate
- [ ] Preserve intrinsic product aspect ratio in independently composed native formats; transform cursor and UI together and clamp camera coverage.
- [ ] Require one pointer owner, tool-specific routes, visible data-selection/link states and click-before-result chronology at actual narration anchors; sample encoded boundaries.
- [ ] Keep CTA/question outside captions and time their entrances to actual narration. Source-correct captions do not alone prove final layout.
- [ ] Label illustrative UI as simulation, not current live capture. Weak ASR number/spelling differences are not confirmed speech errors; stronger bounded recognition may resolve them without new paid TTS, but never certifies vowels/listening.
Evidence: [CANVA-MOTION-20261024](entries/CANVA-MOTION-20261024.md), with exact final hashes and sampled review scope.

## Resumed anatomical/contact and derivative gates — 2026-10-28
- [ ] Register wrist rather than fingertip and anatomical cuff rather than inside-shoe ankle. Separate true lift, floor projection, sole support and neutral terminal stance; test real callers, both arms and custom helpers.
- [ ] Freeze sender return origin at release; explicit actor/shared/table ownership. Sweep actual alpha envelopes through every contact frame, not sparse checkpoints. Any cup restage must propagate to earlier/later use.
- [ ] Keep table props independent of actor transforms; page/nib/ink share tabletop map. Physical action timing follows actual source narration anchors and finite action phases.
- [ ] Verify suspected contact-sheet defects against exact native pixels before renderer changes. Numeric/dispatch passes never replace native anatomy/motion inspection.
- [ ] For Hakawi derived Shorts, replace fixed ten parts with around120seconds/slightly shorter semantic segments; balance remainder without pointless tiny parts. Preserve long-first/shared-master audio/native portrait. Reconcile scheduling count before mutations; published originals unchanged.
Evidence: [resumed repairs and status distinctions](entries/HAKAWI-RESUME-20261028.md). Full master/portrait/contact completion remains open at this snapshot.

## Component-to-master closure gate — 2026-10-28 21:22
- [ ] Inspect actual encoded facial transitions: removing source alpha is insufficient if shutter sub-samples blend discrete poses. Lock authored pose index to central frame where needed; export all child cuts.
- [ ] Compare visible fingertip/palm/support geometry to intended contact, retaining raw reach residuals; neither zero clamps nor a mislabeled palm target is visual truth.
- [ ] Persist world furniture/props until motivated removal. Verify layer occlusion and same-camera module boundaries in fresh stages.
- [ ] Capture fresh-process runtime export/alias identities, filesystem-read JSON/assets/fonts and hashes. Classify changed eager imports versus executed paths, rerender affected ranges, and carry acceptance only by exact identity or explicitly bounded delta.
- [ ] Freeze sources before chunk render. Validate each closed chunk identity/count; reconcile original sessions/logs before retrying uncertain work. Namespaced ps absence is not termination evidence.
- [ ] Preserve rejected attempts/partial files; never patch immutable snapshot. Archive restoration and component pass do not clear whole-master visual/audio/native portrait gates.
Evidence: [scoped closure ledger](entries/HAKAWI-SCOPED-CLOSURE-20261028-2122.md).

## Final-output branch and sentinel regressions
- [ ] Exercise exact short dispatch branches, not only shared helper or neighboring-scene proofs; native planted support must also preserve anatomical hip/knee/shin/ankle chain.
- [ ] Audit natural-rest/mode sentinels across actual shutter sub-samples. Interpolate from measured time-dependent rest; a threshold-induced separated ghost is not ordinary motion blur.
- [ ] Check reciprocal gaze against explicit narration and existing editorial cuts; retain all world-foot/prop support and distinguish edited reorientation from continuous turn.
- [ ] Adopt only hash-bound reviewed replacements and inspect adjacent seams. Preserve old rejected slots and reviewer corrections without changing frozen base.
Evidence: [two final-output repair records](entries/HAKAWI-FINAL-REGRESSIONS-20261028.md).

## Native portrait physical staging and editorial gates
- [ ] Draw native architecture/depth, not landscape crop: a swinging door must reveal a real aperture, and knock targets must match actor-facing contact plane.
- [ ] Preserve canonical action phases and meaningful camera cuts. Same plate plus mirrored body/cast reset is not a cut; do not invent finger morphs or continuous turns hidden by editorial coverage.
- [ ] Inspect free hands for false ownership; stage apart rather than deforming limbs. Show actual bench/tread/sill support, not numeric coordinate equality behind actor occlusion.
- [ ] Native close inserts keep connected donor ends beyond frame edges and active contacts visible. Correct transparent source padding by visible support, not image-box bounds.
- [ ] Transform safe/action rectangles by actual camera matrix. Preserve raw residuals, metric semantics, failed attempts and bounded prefix-comparison scope; resource exit137 is not proof of media corruption.
- [ ] Bind finite acceptance to exact source/encode identities. Frozen93-file integrity and18 finite passes do not clear full portrait render/audio/sync/release. Validate native pixels before changing accepted source over tiny-preview suspicions.
Evidence: [native portrait trial/closure record](entries/HAKAWI-NATIVE-PORTRAIT-20261029.md).
