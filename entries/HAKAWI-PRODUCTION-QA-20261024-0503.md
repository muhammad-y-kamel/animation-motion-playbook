# HAKAWI-PRODUCTION-QA-20261024-0503 — sampled repairs, not release clearance

Snapshot: 24 October 2026, approximately05:03UTC. This adds verified results after [earlier production trials](HAKAWI-PRODUCTION-20261024.md). Full long masters, native portrait derivatives, final listening and upload are not cleared by this entry. Source originals, failed assets, rejected encodes and exact review hashes are retained. No credentials or private transfer URLs are recorded.

## HAKAWI-CROP-013 — adjacent sprite alpha islands and anatomical source order
Cause: rectangular crops on a tightly packed sheet can include neighboring painted objects even when those objects do not touch. A whole-sheet preview or RGBA flag is insufficient.
- E03 forearm crops produced triangular floating sleeve fragments. Runtime source-coordinate polygon clipping plus a tighter upper-sleeve crop removed them in phase0/0.5/1 inspected stills. Corrected forearm alpha masks each had one component>10px at alpha>64; moving extremes remained unreviewed.
- E02 receipt included a cheese-carton fragment; Maryam crop included another woman's arm. Tightened receipt bounds and split Maryam crop at y550.
- E04 intact-pose crop included adjacent sprite islands (1061px/311px examples). Tightened boundary and introduced a lower notch; original source images retained. Mostafa effective crops each had one component>25px, not proof of arbitrary pose correctness.
- E02 sleeve/skin order was anatomically reversed because the upper-arm asset contained sleeve only while the forearm repeated sleeve. A new genuine shoulder-to-elbow upper arm and bare forearm, corrected draw order, preserved rounded cap overlap and transverse width0.74 repaired inspected poses.
Prevention: audit each effective alpha-clipped crop, identify meaningful connected components visually, and do not automatically delete every secondary island. Verify source axes, rounded caps, sleeve→skin→hand order, near/far proportions and mirror transforms across idle/reach/contact/retract and mid-arc. No ellipse patch may conceal a third limb or bad anatomy. Re-encode after crop/anchor/axis/scale changes.

## HAKAWI-IK-014 — endpoint-only QA missed an inner-reach branch inversion
E02 receipt endpoint looked acceptable, but encoded v6 showed elbow sideways and above the head at absolute196.66–198.56s, with hand/paper hanging below. Target trajectory passed near an inner-reach singularity.
- Failed v6 SHA256: `4e962d005fd7f4bd717be029eb5521e7d8c212505b880e6327eaf2dd146895ad`.
- Repair: narrow target x range100→180 rather than100→300, use y520→180, fixed bend−1, reachable-hand clamp returning the actual target coordinates.
- Encoded v8 SHA256: `6d6334a0da83a0523e4a422e9e9315407e17eb65293ed942a479cf1a12c4e004`. Independent eight-frame sampling at local0.1,1,2,3,4.44,5.5,6.5,7.4s found the prior overhead/branch flip absent.
Status: targeted_sampled_retest_pass, not continuous or whole-master approval.
E03 separately caught lowered-hand targets beyond actual reach (~11 source px for Awad); moved fixture targets inside reach and made rig code throw outside true reach. Its201-sample fixture path had no elbow above neck and maximum consecutive elbow motion<0.8 source px. This certifies that fixture only.
Prevention: test the whole target path, branch continuity, minimum/maximum reach, painted hand contact and dense intermediate states. Numerical endpoint equality cannot pass motion.

## HAKAWI-ACTING-015 — detached insert and static bust were not meaningful acting
E01 opening v1 SHA256 `35f4fcf4abf674b0431c39cd86ea25114cbae22286334a2f7d3ce18b8a1f8616` failed: cuff/forearm floated inside the frame at1.5–3s, and a6.8-second dialogue passage used a static head with slight image tilt.
Repair: full connected Yaser reaches padlock; shorten question closeup to~3.2s and add source-motivated wall and empty-chair-space gestures with correct eyeline.
Encoded v4 SHA256 `7d41a8511d7d397d5392759d0ece2f5abe97e4a8f3487690da313edb44bc04bd` received21-frame sampled retest across32.32s: those two failures resolved in the inspected samples. A disproportionate sleeve/extra lobe remained at3s and later source improvement still required encoded retest.
Technical scope: decode passed; zero-lag audio correlation0.9999644, SNR41.36dB and no clipping are numerical evidence, not listening or full-film clearance.
Prevention: connect inserts visibly to a body/frame edge, vary action according to actual spoken intent, and do not disguise a still scene with head tilt, camera motion or whole-actor wobble.

## HAKAWI-PROP-016 — floating props, duplicate tools and unclear transfer state
- E04 mixing asset had a baked paddle plus a separate moving primitive, and the open hand did not grip the handle. An utensil-free bowl removed the duplicate; a convincing closed-grip replacement still needed integration/retest at this snapshot.
- Tag was overlaid on an apron without fingers occluding it. Reordering helped stills, but encoded v6 showed an essentially fixed-pose actor sliding left-right-left; rejected SHA256 `8739fceb4fe44db0609382078df84616f325881f56caef0335ef8c047c66ca5f`.
- Replaced with connected frame-edge hand inserts and explicit reach/contact/lift/drop/release/withdraw states. Encoded v10 SHA256 `68f78bcbfa0ca0d6cef48a38a0971bb4cbfaddbb248b6c643452f0d3c98a6423` improved blocking, but nine sampled frames still showed an inconsistent empty-hand/tray-label transition and a duplicated12 label. Later state/offset fix was not in that encode; final-state re-encode pending.
- E03 upright unforeshortened documents read as hovering. Table-plane perspective and support repaired the inspected still. Open fingers did not pinch a ring; dedicated hand/ring asset fixed sampled contact. Floating packing bag/paper-like cloth was replaced by visible support, shirt silhouette and correct occlusion. Dedicated pen-hand source tip drives ink stroke. These are pre-audio fixtures, not final motion.
Prevention: physical grip and ownership before/during/after transfer; no baked duplicate moving prop; use action-specific hands, real support plane and result reveal. Hand/contact points must match actual painted geometry.

## HAKAWI-QA-017 — reviewer invented an action absent from source
Independent E02 review initially asked for lifting crates because the scene concerned labor. Exact source said counting vegetable crates. Reviewer corrected the requirement to visible counting/rim contact, not lifting. The observed lack of contact remained valid.
Prevention: read the exact spoken span before prescribing a repair. Improve visual causality without rewriting approved action, plot or dialogue. Reviewers also log their mistakes.

## HAKAWI-MIX-018 — technically valid narration was quiet for mobile playback
Measured E01 candidate input loudness was−26.23LUFS, true peak−1.17dBTP and LRA8.10. This is a loudness/mix issue, not a reason for new TTS or separate Short speech.
A separate post-master target around−16 to−18LUFS was being tested with peak protection and preserved dynamics. One comparison candidate retained510.4s/22,508,640samples, four checked correlation lags0, zero clipped samples;7.34% of speech-active10ms blocks had>0.5dB gain reduction. Numerical candidate SHA256 `2b26364277b43213ca361d1d4740cff8fa758cd4d695e0c02118998ea96b6edd`. This does not establish final acceptance or natural perceived emotion; listening and final-master choice remained pending.
Keep original dry narration separate. Mix once at full-story master level; derive ordered Short PCM cuts from the FINAL mixed master and verify they reconstruct it before AAC. Do not remix each Short independently or compare mixed-waveform SNR to dry speech as if added foley automatically meant corruption. Verify loudness/true peak, masking, joins, latency and meaningful pauses without speech retiming.

## HAKAWI-TOOL-019 — tool rejection is not a universal content prohibition
E03 fully clothed fictional child pose request was rejected by the image tool with category sexual. E04 segmented adult rig request was blocked under violence/self-harm. These record tool outcomes, not a claim that ordinary clothed child/adult art is generally forbidden.
No retry/tool switch to bypass the denied requests. Parent-approved E03 object-only/off-screen child staging uses bed, schoolbag, clothes, stars and mother's eyeline without changing narration. E04 uses an allowed intact clothed character reference/action staging rather than the blocked segmented request. Do not relabel rejection as successful asset generation, erase the blocker or invent a policy rationale.

## Scope, preserved work and next gates
- E01 full510.4-second landscape candidate encoding began around04:55UTC. At this snapshot there was no full-master final QA, upload or publication clearance.
- E03 full audio remained held pending user response on provider-history retention; all51 source anchors had UNKNOWN timing. Its assets/fixtures and normalized-phase tests are not an assembled film.
- WIP editable-source backups: E01 Library `libfile_5dbbd8e974708191a63e62f8ec6ba548`; E03 `libfile_ea9c331d1d4c81919d6a2344548332e3`. These are work-in-progress recoverability checkpoints, not final deliverables or release evidence.
- Reapply complete PDF-pixel reconciliation and frozen source hash before paid TTS; only confirmed defects justify minimal repair. A repaired audio duration invalidates downstream cuts/captions/sync.
- Complete/review long first. Portrait requires native drawing/layout redesign of the SAME scene/action/time/audio, not crop or camera reframe. Keep one canonical audio master; do not generate Short narration or remixes.
- Verify effective crop isolation, reach trajectory, hand semantics, support, occlusion, independent acting, final encoded state and mobile safe regions. Bind all results to the exact reviewed hash and acknowledge sampled—not continuous—scope.
