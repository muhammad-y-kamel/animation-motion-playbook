# E03 native portrait layout repairs — verified bounded findings

Verified against saved review receipts on 2026-10-30. Original versions remain preserved. Scope is layout/finite proof, not acceptance of the final full episode.

## 1. A source crop may still amputate a character in an independently composed portrait
- Evidence: v5 f3850 isolated shins floating mid-room.
- Cause: lower-leg donor crop was drawn as a free sprite without a crop-boundary camera context or continuous legs beyond frame.
- Fix: honest connected fullbody actor, grounded at1490 in native1080x1920 room.
- Verified: root actual v6 f3850 PASS, repeated source unchanged throughv8.
- Rule: inspect every donor crop's anatomical continuation, not merely final-stage dimensions.

## 2. Fixing caption clearance can introduce a floor-plane regression
- v5 S29 feet hidden bycaption. v6 reduced fullbody scale and raised feet, but retained a close-wall sofa crop; character floated in front of sofa.
- v7 uses full room background with an actual floor plane; same actor remains abovecaption.
- Verified: root actualv7 f17093/f17470 PASS.
- Rule: actor scale, foot anchor and background camera context form one constraint; recheck all three after reframing.

## 3. Paper flattening alone does not create believable tabletop support
- v5/v6 folder/documents appeared vertical because the table was only30px of fascia, despite document scaleY. Seated paper additionally hid bothhands.
- v7 increased table depth, moved sheet wholly inside surface, raised handlayer and added attachedpen; source handedness retained.
- v7 regression still read upright due vertical grain and nearlyparallel silhouette.
- v8 rotated top material90degrees, increased rear inset75 vsfront25, added distinct10px frontedge, moved/narrowed legs into footgaps.
- Verified: rootactual12v7 +10v8, all affected B supportfootprints/legclearance/heldfolder/traybag continuity PASS for those actualframes.
- Rule: visible support requires compatible plane geometry, grain orientation, overlap order, contact shadow/edge and handlayer—not only a numeric y-coordinate.

## 4. Equal world scale does not guarantee equal adult scale across donor rigs
- v5 Sameh S21/22 visibly undersized besideHeba; adult faces/body proportions required actual image comparison.
- Fixed Sameh scale in native B; root verified11520/12408 actualrendered output.
- Rule: compare shoulders, head size and ground-plane placement across original asset rigs; validate pixels, not just scaleconstants.

## 5. Accurate full-frame coverage is different from keyframe count
- 153 detail witnesses: complete layoutcoverage, NOT finite motion/subjectiveaudio acceptance.
- Finite runtime350presented frames map to311 exactdecoded-pixel MD5 representatives. Every representative actuallyviewed; duplicate frame→representative→sheet explicitly documented.
- Two ambiguous atlasdetails escalated to encoded1080x1920 frames; caption distortion was a viewer/sheetdisplayartifact, not corrupted source.
- Four real media orphan recovery cases passed using copied metadata/read-only hardlinkedmedia; original media/receipts unchanged. Mock controlflow tests alone were not claimed as actualmedia validation.
- Critical action7299presentations and final wholevideo gates remain separate.

## Evidence pointers
- `qa/independent-review/native-v5-a-recovery-2355/REVIEW.json`
- `qa/independent-review/native-v5-b-recovery-2350/{REVIEW,V6_SOURCE_RECEIPT}.json`
- `qa/independent-review/native-v5-cd-recovery-2350/{REVIEW,V6_SOURCE_REPAIR_RECEIPT}.json`
- `qa/independent-review/ROOT_NATIVE_V6_2359.json`, `ROOT_NATIVE_V7_0003.json`, `ROOT_NATIVE_V8_0006.json`
- `native-planning-2302/FINITE_V8_GATE_0018.json`
- `runtime/native-finite-v8-0006/ACTUAL_MEDIA_RECOVERY.json`

## Durable recovery references
- Native source and layout proof chain: Space source `libfile_ead7361918c48191b115f1517cbce4d1`, version 9 and later; five native proof archives referenced by its `NATIVE_V8_CHECKPOINT_0008/DURABLE_MEDIA_CHAIN.json`.
- Closed finite proof: `libfile_115577e622008191903db6a3ec30fab2`, version 0, SHA256 `b7a990610fc43bd9febae8265a7b9bf2e916c1df784ec34d7910b9f727c8bb48`; 244 paths preserved. Its manifest and receipt are appended to source version 10.
- Full critical-action and full-production gates remain pending at this lesson's publication. No subjective listening or ASR acceptance is claimed.
