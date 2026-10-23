# Independent geometry review — EP029
Review starts by reading PREFLIGHT.md, INDEX.md, NATIVE-EXPANDED-AUDIT.md and historical REUSE-CHECKLIST.md, plus exact USER-SCRIPT-EP029.md. Source review is distinct from final encoded review. IDs below are episode-unique, not shared ANIM IDs.

## MOKI-EP029-GEO-001 — Phase-local anchors reset hands and wool
- Discovered by independent reviewer via 60 fps semantic scan and epsilon-boundary probes. Original source had hand snaps at14 (57px),43 (44/47px),56.5 (36/65px), plus wool61px at43 and wool radius/spin reset28.
- Cause: independent phases replaced previous hand/base/prop state before finishing transfer. Body crouch and hand-rest calculation order differed across43.
- Actual attempt 1: producer ramped left hand14, released hands41.8–43, kept knitting base through57; scan source ce3ceac7 showed large resets improved, but epsilon tests still exposed right-hand10.63px at14 and bothhands20px at43. These smaller snaps were missed by25px/frame velocity threshold.
- Best proposed fix: connect both hands through transfer, derive rest from final body pose, and test tiny epsilon around all boundaries separately from ordinary motion speed. Final rerun pending.
- Evidence: geometry-v3.json records first rerun; geo-*.png source snapshots. Rejected producer versions preserved independently.

## MOKI-EP029-GEO-002 — Floor contact must include rendered extent and outline
- Fabric at y1440 length90 ended1530, versus floor1522; wool y1467 radius94*0.64 plus2px outline ended1529.16.
- Cause: anchoring centers/length without derived lower ellipse or outline extent.
- Producer changed fabric length80 (bottom includingoutline1522) and wool center1459.84 (94*.64+2 gives1522). Semantic scan ce3ceac7 passes floor constraints throughout story. Later source edits require rerun.
- Best validated repair: derive center/length from floor and actual ellipse/outline, test rotated ellipse extent as well. Broad semantic bounds are conservative; not proof of every pixel.

## MOKI-EP029-GEO-003 — Prop motion before grip and detached knitting tools
- Fullres geo-28.4.png: ball already lifting while both reaching hands remain distant. Source started lift28 and completed grip28.6.
- Fullres geo-55.5.png: needles remained at pre-toss hand anchors while hands lifted; fabric remained static while shared scarf dissolved into place.
- Cause: visual movement and ownership were authored separately; needle geometry used stale intermediate hand variables.
- Proposed repair: finish reach before lift; keep needles attached to actual finalhand or visibly stow before toss; move scarf as owned fabric before release, not crossfade-only assembly. Final source/visual rerun pending.

## MOKI-EP029-GEO-004 — Shared scarf obscured Peb's mouth
- Fullres geo-64.5.png showed shared scarf center1400 covering mouth near1410; eyes clear but worried/smile mouth acting hidden.
- Cause: shared endpoint used adult-style neck height rather than small rig face-derived bounds.
- Proposed repair: lower Peb endpoint to1430, shorten hanging end if necessary to preserve floor clearance; recheck jump64.1–64.6 and expressive ending. Final rerun pending.

## Check scope / honesty
`geometry.cjs` visits4560 semantic times; story-specific geometry applies4200times. CTA is checked by rendered random-order samples. Contacts list records authored anchors and can become stale after overrides; it is not independent proof of physical hand/prop grip. Conservative body/endpoint bounds do not simulate all limb spline curvature or pixel occlusion. Pixel determinism covers19 times in reverse order, not allframes. Actual fullres inspections are the explicitly listed geo snapshots, not continuous playback/listening or encoded QA.

## Final source-stage rerun (not final encoded review)
Source SHA256 `b4416b9e95c5470a915b6fee5902eb8f532a50e605fe4096e18de0b600a3c4ad` passes the strengthened geometry.cjs checks: no tested floor penetration, conservative projected bounds x100.14..916.57 and y775.02..1281.76, maximum ordinary hand step20.29px/frame, wool5.36px/frame, explicit phase-boundary hand/wool deltas <0.00005px, 19-time random-order pixel determinism pass. Declared contact error ≤0.101px is only an anchor identity check.

- GEO-001: producer repaired right-hand14 transfer and crouch/rest ordering43; epsilon gate now passes, keeping prior failure evidence. Status validated_with_limits.
- GEO-002: final semantic floor checks pass. Status validated_with_limits.
- GEO-003: lift delayed until28.6 after reach; needles vanish/stow54.7–55 before toss; fabric becomes geometrically morphed shared ribbon carried by Peb's hands55–56 then release56–57. Viewed geo-final-28.6 and55.5 full resolution, and all14 geo-final images as overview. Status validated_with_limits; stylized elastic reaches/morph, not cloth simulation.
- GEO-004: shared endpoint lowered1432, tail1436..1500. Full-resolution64.5 shows Peb's mouth exposed beneath eyes; no longer hidden by scarf. Status validated_with_limits.

Direct final-stage full-resolution inspection:28.6,55.5,64.5 seconds. Final14-image overview:28.4,28.6,29,41.5,43,54.99,55,55.25,55.5,55.75,56,64.5,65.5,69. This is source-render review only. Numeric geometry and selected samples are ready for encoded-review gate; they do not replace full encoded thumbnail coverage, audio/mux review or producer judgment.

## MOKI-EP029-GEO-005 — Early gathered wool had no hand support (encoded review discovery)
- Discovered during encoded full-resolution inspection of frame0,30,480,840, MP4 SHA256 f320d24e10e1b7c3873b634a7f60b2aec10d10be73abdb270c79229582cf6618. Sheets01–10 had been inspected at90×160 each but did not make this fine ownership gap clear.
- At0–9s, wool center(690,1440) grows on Peb's belly while right hand remains(758.45,1433.316) and left holds a separate loose-thread endpoint. It therefore appears unsupported/stuck to torso until right-hand reach9–11.
- Root cause: gathering animation applied only late9–11, while prop visibility/growth began0; declared-contact tests could only check requested anchors and did not assert a required owner for all visible carried props. Source gate overreached if interpreted as complete visual approval; this new finding reopens ownership gate.
- Proposed actual repair to producer: derive supporting right hand from wool radius continuously from start, keeping small ball partially visible; retain continuous phase14 hand transfer. Await producer source patch and encoded rerun. Keep this rejected MP4 and keyframes.

## MOKI-EP029-GEO-006 — Stale yarn anchor survived scarf removal
- Discovered encoded fullres frame2490 (41.5s), MP4 f320d24e10e1b7c3873b634a7f60b2aec10d10be73abdb270c79229582cf6618. After the last ring vanished40.35, yarn still connected Moki's bare chest to fallen wool through43.
- Cause: ring/tail rendering disappeared but independent threadStart retained the old chest anchor. This contradicts complete unravel/reveal.
- Proposed repair: detach old chest endpoint at last-stitch pop and collapse/retract remaining strand into wool during40.15–41.5. Verify41.5 chest fully bare and continuity around40/40.35.
- Status observed, producer notified; encoded repair pending.

## First encoded review record
`encoded-review-first-v1.json`: all2400 thumbnails in sheets01–10 reviewed at original sheet size (90×160perframe). All11 extracted1080×1920critical frames viewed at original detail:0,.5,8,14,19.5,23.5,24.4,28.6,31,40,41.5s. Two findings above reject candidate; previous source-stage numerical pass remains a scoped historical result, not final approval. No listening or continuousAVplayback claim.

### GEO-005/006 actual repair and source retest
Producer revision source SHA256503a9459ba1a9d30964b80a8b041455865e66d9088a851e720f1ae4d67150918:
- Right hand follows visible wool from0–14 using(.65radius,.4radius) support offset, with exact matching phase14 transfer endpoint. `ownership.cjs` now passes all840 early samples (conservative gap maximum0).
- Old chest-thread anchor collapses toward pile40.15–41.5, so complete bare-chest reveal no longer retains thread. All90 reveal samples41.5–42.983 pass stale-anchor check.
- Independent source fullres inspected0,8,14,40.3,41.5 (`fix-v2-*`): both changes legible and corrected. Tiny initial ball may be hidden within supporting hand until it grows; thread pull remains visible and plot-critical wool grows visibly afterward.
- Full geometry regression rerun passed including all explicit boundaries and19 random-order pixel samples. Status repair_validated_in_source; final encoded retest pending. First rejected encoded version and reviewed images preserved by producer under rejected/encoded-v1.

## MOKI-EP029-GEO-007 — Shrinking floor wool levitated during knitting
- Discovered by producer during full-resolution encoded50s review, not by independent geometry reviewer. Earlier geometry test checked floor penetration only and falsely allowed positive support gaps.
- Root cause: ground mass center remained1459.84 while radius shrank94→0, raising its lower edge off the floor. Negative penetration is not support.
- Proposed/producer repair: derive y=1522−2−radius*.64 for every knitting mass state43–55; radius-independent floor anchor accounts for2pxoutline. Test absolute support error, not one-sided overlap.
- `geometry.cjs` now tests every ground wool frame43–55 with radius>0.5 for |floor−renderedbottom|≤0.2px. Producer is preserving relevant encode and repairing; final rerun pending. Discovery attribution remains producer.

## Final encoded revalidation
MP4 SHA256 `aec63c64e7b593a8c6713f46cfec8baf966ae01cc741cfb7ef446636f6a47673`:
- Reinspected all1200thumbnails in changed sheets01–05 at original detail. Sheets06–10 are byte-identical SHA256 to previously inspected v1sheets (1200additional reviewed thumbnails carried forward strictly by identity). Sheet05 changed from codec propagation despite story edit ending14.5, so it was explicitly reinspected rather than assumed unaffected.
- Newly inspected final fullres0,.5,8,14,41.5s. Final fullres19.5,23.5,24.4,28.6,31,40s are byte-identical to previous inspected frames, with old/new hashes recorded. Total11 fullres critical times covered by final identity.
- GEO-005/006 corrected in encoded output: right hand supports growing wool, bare chest clear after final unravel. No new blockers found in assigned coverage.
- GEO-007 absolute-ground-contact numerical regression passed source fae49506c09a7af2a48a124f58e8db38738a3abd1dad6e42d22132baf84fc51e; producer owns late encoded50s visual check, not claimed here.
- `encoded-review-first-final.json` binds exact inspected paths, hashes, review methods and limitations. No listening, continuousplayback or fullresolution-everyframe claim.
