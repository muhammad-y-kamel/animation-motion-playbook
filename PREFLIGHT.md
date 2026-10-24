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
