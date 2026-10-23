# PROPHETS-COVERS-20261024 — Regenerated short-cover defects and repair trials

- Project: قصص الأنبياء, E01–E04, 40 short covers.
- Date: 24 October 2026 Cairo; 23 October UTC.
- Scope: Newly regenerated still images from the original authored cover specifications. They are not recovered historical bytes or an exact replay of historical image-generation prompts.
- Status: Five defect mechanisms, repaired with bounded still-image review. Recurrences are grouped below rather than counted as invented independent mechanisms.
- Discovery: Production agents identified these issues without a specific user defect report. The coordinating cover agent additionally inspected the 40-image contact sheet. This audit independently viewed the four full-resolution before/after images for E01 P06 and E02 P07 and verified all 40 final JPEG hashes, sizes and final-manifest selection.
- Evidence directory: [generation records, exact prompts, source briefs and hashes](../evidence/prophets-covers-20261024/).
- Related record: [earlier production audit](PROPHETS-20261024-AUDIT.md). These are later cover-generation failures, not defects retroactively attributed to the original films.

## COVER-001 — Style reference transferred the wrong scene

Affected: E01 P03 and P04. Category: visual concept / reference conditioning. Discovered by: agent.

The initial reference-image attempts produced a generic tree and landscape rather than P03's abstract dense-ink/quiet-paper contrast and P04's abstract ink strokes. Readable Arabic did not make those images correct. The evidence establishes scene drift; it does not prove a particular internal model mechanism.

Actual trials:
1. Initial referenced-image generations were reviewed and rejected. Candidates remain under `E01_P03_candidate-scene-rejected.png` and `E01_P04_candidate-scene-rejected.png`.
2. Fresh isolated prompts restricted the scene to abstract ink and paper, excluded landscape objects, and retained the specified words and numbers.
3. The production agent visually checked both final compositions against their per-part briefs and accepted them.

Best supported fix: Explicitly separate style/layout reference from the current image's required subject. Do not let the reference's objects become defaults.

Regression: Verify the required abstraction, absence of unrelated landscape subjects, exact header/title/badge, no prohibited depiction, and final file hash. Use the original per-part concept as the acceptance criterion, not merely similarity to adjacent covers.

Evidence: [E01 error review](../evidence/prophets-covers-20261024/E01-ERROR-REVIEW.md), [final prompts](../evidence/prophets-covers-20261024/E01-prompts.json), [final identities](../evidence/prophets-covers-20261024/E01-generation.json).

## COVER-002 — Missing Arabic hamza survived a targeted edit

Affected: E01 P06. Category: typography. Discovered by: agent.

The initial header read `صبر ايوب` instead of `صبر أيوب`. The precise generator-level cause is unknown. A failed attempt must not disappear from the record simply because a later version passed.

Actual trials:
1. Original candidate lacked the hamza and was retained as `E01_P06_candidate-hamza.png`.
2. A targeted image-generation edit requested only the missing hamza. The production review reports that it failed to restore the hamza and also changed the artwork slightly. This edit was rejected, not treated as successful because the tool completed.
3. Fresh per-part generation explicitly required a visible hamza on أ. The final header, title `ماء وعافية`, and badge `06/10` passed visual inspection.
4. This audit independently viewed the retained initial candidate and final PNG: the missing versus present hamza is visible. The intermediate failed edit is preserved as E01_P06_candidate-hamza-edit-failed.png, with its actual prompt in E01-rejected-attempt-prompts.json. This audit did not independently view that intermediate image.

Best supported fix: Fresh generation with exact glyph emphasis after the targeted edit failed. It changes the artwork, so it is not a pixel-preserving repair.

Regression: Character-level review of hamza, dots, joins, word order and badge at full resolution and mobile readability. A correct prompt or successful tool response is not proof of correct rendered Arabic.

Final PNG SHA256: `6fe05621007ffabd1744dc12ed1a0ef85922185536ea1405d124c3f9662fb964`.

Evidence: [E01 error review](../evidence/prophets-covers-20261024/E01-ERROR-REVIEW.md), [artifact hashes](../evidence/prophets-covers-20261024/artifact-hashes.json).

## COVER-003 — Shared conditional prompts leaked other parts' objects

Affected: E01 P07–P10; recurrence in E04 P04–P06. Category: prompt construction / narrative accuracy. Discovered by: agents.

Established authoring error: Shared conditional scene guidance mentioned objects belonging to several different parts. Those objects then appeared in images whose own briefs did not call for them. This is a cover-generation defect, not an error in the source narrative or evidence of those events occurring together.

E01 trials:
1. A shared prompt included multiple scene types. P07 gained grain/metal heaps, P08 gained locusts, and P09/P10 conflated unrelated events. Four candidates were rejected and retained as `*_candidate-mixed-scenes.png`.
2. Regenerate each image using only its own positive concept and narrowly relevant exclusions.
3. P07: spring and rocks only. P08: two schematic threshing areas, grain and gold/silver, no insects. P09: one modest tied plant bundle, without asserting an exact count. P10: golden locusts on plain earth, without grain/metal heaps or cloth.
4. All four final images were checked for required subjects, absence of foreign narrative objects, exact Arabic and part badges, and no human/prophet depiction.

E04 recurrence and trials:
1. The shared phrase “For empty shackles, no human limbs or figures,” intended for P07, introduced shackles into P04, P05 and P06.
2. Save the rejected candidates under `rejected/` and withhold them from publishing.
3. Apply precise image edits removing all shackles, chains and restraints while preserving words, numbers and other composition elements.
4. Production review found the objects removed and Arabic retained in all three corrected images. No pixel-identical preservation claim is made.

Best supported fix: Build each prompt from one record's positive object list. Shared safety guidance should not introduce another part's named object, even conditionally. For a local unwanted object, a targeted removal worked in E04; full isolated regeneration worked in E01.

Regression: Review every image against its exact part, including an explicit allowed-object list and forbidden cross-part elements. Search the generated prompt itself for foreign object vocabulary before generation. After an edit, recheck text, badge, required objects and all depiction constraints. Keep rejected candidates outside the final upload manifest.

Evidence: [E01 error review](../evidence/prophets-covers-20261024/E01-ERROR-REVIEW.md), [E04 review](../evidence/prophets-covers-20261024/E04-QA.md), [E04 actual attempts](../evidence/prophets-covers-20261024/E04-generation.json).

## COVER-004 — Specified chest omitted from otherwise valid cover

Affected: E02 P03. Category: subject omission. Discovered by: agent.

The first image omitted the required schematic chest although its text was correct. The original brief did contain the subject, so this was not a missing source requirement. The exact internal generation cause is unknown.

Actual trials:
1. Review rejected the initial image as “missing specified chest”; PNG/JPEG candidates were preserved.
2. Regenerate with the plain closed wooden chest explicitly required as the primary foreground subject in the bottom half; exclude substitution by cloth or foliage. Avoid religious symbols, carved figures or an archaeological claim.
3. The final image passed production review for the visible chest, exact words, correct number and no humans.

Best supported fix: Promote the essential object to a concrete, visually testable placement requirement rather than leaving it buried in broad style instructions.

Regression: A per-part required-subject assertion must pass independently of typography, palette and general aesthetics.

Final PNG SHA256: `7ee95115ae68bb05cdafb16029676cb62ba797c32d12af3472b969fc0f0c04f7`.

Evidence: [E02 attempt log](../evidence/prophets-covers-20261024/E02-generation.json).

## COVER-005 — Small translucent artifact damaged Arabic dots

Affected: E02 P07. Category: typography / rendering artifact. Discovered by: agent.

A faint gray geometric shard overlapped a dot under ي in `الحديد`; the header's dots also had a malformed line. The generator-level cause is not established.

Actual trials:
1. Candidate was withheld and preserved as `E02_P07_candidate.png` and `.jpg`.
2. Targeted image edit explicitly removed the stray translucent shard, restored two solid dark-green diamond dots, cleaned the header dots and requested preservation of all words, badge and artwork.
3. Production review passed the corrected image. This audit independently viewed before and after: the gray artifact is absent and the dots are clean in the final. The edit is not asserted to preserve all other pixels exactly.

Best supported fix: A narrowly specified edit worked for this local artifact. This differs from the failed hamza edit in COVER-002; do not assume one repair method always succeeds.

Regression: Inspect small letter dots and negative spaces, not just whole-word readability; recheck full title/header after cleanup.

Final PNG SHA256: `14d0503298fc0143cd4e625efaf131684f67eed33366ff0081eaf9b6653dec58`.

Evidence: [E02 actual original/corrective prompts](../evidence/prophets-covers-20261024/E02-generation.json).

## Final regression checks and limits

- All 40 final JPEGs matched their recorded SHA256, were below 2,000,000 bytes, and used final filenames rather than candidate filenames. [Machine-readable check](../evidence/prophets-covers-20261024/manifest-regression-check.json).
- Dimensions in the manifest are 940 or 941 × 1672, not 1080 × 1920. The exact manifest governs; the E01 prose's blanket 940 width is an imprecise summary, not evidence of a resize defect.
- JPEG conversion used quality 94 and 4:4:4 according to production records, without intended crop or resize. JPEG is lossy; do not claim byte identity to PNG.
- E03 had no detected defect in the supplied review. Do not manufacture an error merely to populate an entry.
- P01's normalized prompt reconstruction is explicitly identified in E01-prompts.json; it is not an exact historical tool prompt.
- Generation records and source briefs are archived here; full-resolution artifact identities are listed in artifact-hashes.json. Rejected originals remain in the recovered production workspace. This entry does not claim that every image binary has been copied into GitHub.
- This is still-cover QA, not video-motion, continuous-playback, listening, historical-source, or YouTube-publication verification. The cover worker subsequently reported Library archival succeeded for 44/44 items, with delivery/QA ZIPs updated to version 1. This audit does not independently verify that external Library state. Chat attachment delivery is separate: the parent reported a definitive size-limit failure for the 48 MB ZIP. Four story ZIPs of approximately 11–12.5 MB were then CRC-verified and saved to Library. The parent verified the native attachment call was accepted at 2026-10-23 22:40:44 UTC, message Sentinel_e785e500c53481919c24e556daa31325, with four file IDs. Accepted transmission is not proof that the user downloaded them. See library-split-result.json. Prevention: check channel attachment limits before bundling; preserve the all-in-one archive and send verified smaller packages rather than repeating a definitively oversized send. This is a delivery incident, not a sixth drawing defect.

## Preflight additions for every authorized cover batch

1. Compile one image prompt from one part's subject/text/number record.
2. Restrict reference images to the intended style/layout role; explicitly prohibit transferring their subjects.
3. Remove conditional mentions of other parts' scene objects from shared prompts.
4. Check required subjects and forbidden narrative leakage separately from spelling and visual polish.
5. Inspect Arabic glyphs, including hamza and dots, at full resolution.
6. Preserve each rejected candidate and failed edit. Reinspect all affected criteria after correction.
7. Manifest only accepted files, bind them to hashes and exact dimensions, and verify storage/publication independently.
