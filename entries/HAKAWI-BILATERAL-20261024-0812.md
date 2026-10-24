# HAKAWI bilateral anatomy and escaped contact defects — 2026-10-24 08:12 UTC

Status: OPEN / repairs in progress. This dated snapshot supersedes earlier release claims only for the identified media. A documentation commit is not a repaired-media pass.

## 026 — passive limb left uncalibrated
Observed: Sabah's active arm was resized, but the original complete passive-arm sprite remained scale 1.0 behind the torso. Inward attachment hid the hand and exposed a waist sleeve bulge. Independent review confirmed it in the actually released E01 P01 at 9 seconds.
Cause: active-only QA and using torso occlusion to conceal an uncalibrated opposite limb.
Attempt/result: local passive-arm calibration produces a visible natural hanging hand in static trials; actual scene/motion/encoded retest is pending. Hiding oversized or broken anatomy behind a torso is not a repair.
Evidence: local hakawi-production-20261024/E01-master/bilateral-arm-review/P01-sabah-9.png; STAGE-LOG.md bilateral section; independent-qa/E01.

## 027 — whole proximal chain reaches backward
Observed: Yaser had right-hand dorsal/nail artwork mounted on his anatomical left arm. The more important user clarification was that the WHOLE arm, from its shoulder, appeared to reach behind his back rather than forward.
Cause: wrong/far-side backward-rolled shoulder selection and inconsistent torso-relative shoulder/elbow plane; digit chirality alone was not the root cause.
Failed attempts: isolated hand edit improves chirality but DOES NOT fix shoulder→upper arm→elbow reach; root-mask trials exposed gray cap or triangular background hole. First new-reference extraction retained the old arm and halo and was rejected.
Current bounded result: intact shared-assets/yaser-forward-fullbody-reference.png passed parent and independent STATIC forward-chain review (near shoulder across front chest, elbow ahead of ribs). Clean extraction/rig/motion/final encoded pass remains pending. Accepted proportions remain locked; no size reset is implied.
Evidence: E01-master/bilateral-arm-review/P01-yaser-2.5.png; STAGE-LOG.md Whole-chain forward reach section.
Recurrence: E03 native review at 27s exposed the same actual long backward/balloon upper-arm defect in S04, with S30 using the same pose. Local prior final release 45861f66 was revoked. Long chunks 00/01/09 and native P01/P07 are being repaired; source qa/pose-family-v3.json records 11,325 actual pose samples at 0.1s and 30 full-resolution qa/pose-v3-{long,native}-*.png pose/arc frames. S04/S30 target changes from [360,400] to [300,530]; no runtime flips. Remaining supported-folder pose has maximum Sameh rear extent 62px. These source checks await independent static and dense encoded retests; no full pass. Actual long evidence: qa/long27-encoded.png.

## 028 — writing pen contact escaped earlier long QA
Observed: native P02 review exposed an open writing palm with a floating diagonal pen; independent review confirmed it in previously released E01 long at 55.8s and 67.9s.
Cause: declared hand/pen proximity and sparse global QA substituted for visible finger grip and coupled contact.
Repair scope: all three writing helpers now use real coupled pen grip, seven intervals in five picture checkpoints; 21 static proofs passed. Writing-only v3 full 506.96s encode SHA256 600ad07df07dc0cd813033c9d1a109def89d52ad23d6d35f4131138b8f5154dd passed decode. It is REVIEW ONLY, not released: the bilateral gate supersedes this bounded result.
Pending: inspect new actual encoded grip trajectories and both complete limbs after whole-chain rig integration. Preserve immutable old media and exact final PCM.

## 029 — portrait-specific body/support/caption failures
E04 native review found cropped seated thigh/body, floating oven/tray support and caption-freeze mismatch. Initial native findings did not alone establish a long defect. Subsequent direct inspection of ACTUAL released E04 LONG at 43.64s (SHA prefix 0470469d; E04-master/qa/LONG-released-43.64.png) independently confirmed the SAME backward belt/upper-arm/forearm reversal as native P02. Root then revoked the long release. Repair is in progress, with no repaired-media pass. Source-layout repair must be followed by encoded native review including cut edges and semantic action/audio alignment.
E02 lessons independently include inward resting arms despite zero IK flags, aggressive shoulder clipping holes, open/unsupported grips, floating signing pen, seated-scale/neck mismatch, rectangular foreground occlusion erasing legs, repeated ledger placement, and next-part caption leakage. Evidence: E02-master/PLAYBOOK-DELTA-E02.md. v39 known prior fixes are scoped passes; external upload is held for full bilateral pose-family review.
E04 evidence: E04-master/PLAYBOOK-LESSONS.md and current native QA. Do not propagate this channel's aesthetics to unrelated projects.

## Mandatory preventive gate
1. Enumerate every actually used actor, wardrobe, body facing, anatomical side and pose family. Inspect BOTH full limbs and intact full body at neutral, reach, grip/use, release and return.
2. Check shoulder front/back attachment, proximal roll, elbow bend plane, thumb/palm/dorsal/cuff orientation and torso-relative forward action. A correct hand cannot rescue a backward shoulder.
3. Preserve accepted proportions; derive a coherent whole-chain reference before separating sprites. Verify passive hand visibility where naturally exposed, torso coverage and intentional occlusion without hiding defects.
4. Inspect full-resolution source AND decoded final ROI plus the whole motion arc and neighboring transitions. Zero Jacobians/inversions, reachable endpoints, 0.1s pose samples or a 1fps atlas are bounded tests, never proof of complete visual motion quality.
5. Real grip must visibly enclose/support the prop and stay coupled throughout use. Inspect all helper instances, not only the first example.
6. A defect found in a derivative triggers targeted inspection of its parent master and reused pose families. Revoke only affected approval identities; do not infer unrelated files bad.
7. Keep source scripts immutable, exact canonical PCM/cut mappings and no additional TTS without current authorization. Phonetic/listening limits and unresolved audio tests remain explicit.

## Publication status snapshot (owner report; separate from media QA)
- E01 old long _LJTSS1qsl8 and P01 Qm7I_no7CT0: Private/unscheduled; local releases revoked pending replacements.
- E03 ETO20ODWaKg: STILL externally scheduled for November 25 at this snapshot, despite local release revocation. Private/unschedule action was denied pending explicit owner approval; root requested it. Do NOT claim private or cleared. Current repair is not a replacement upload.
- E02: external upload held pending bilateral pose-family QA.
- E04 long AfhSY_b7nJk: local release REVOKED after actual-long 43.64s defect confirmation; STILL externally scheduled December 6 pending specific owner permission to make private/unschedule. Root asked for old E03+E04 to be made private without deletion and replaced at the same times. Native derivatives also held.
- None of the four current long videos is root-cleared for publication: E01 revoked/private, E02 internal hold/not uploaded, E03/E04 locally revoked but external schedules still active pending authorization.
No new publication, paid generation, permission change, deletion or history rewrite is performed by this documentation update.

## Bounded test update — 2026-10-24 08:40 UTC (supersedes earlier pending/classification statements only as specified)

Historical failures and failed attempts above remain evidence; this update is not a blanket all-fixed claim.

### E03: extra near-arm pose confirmed; earlier passive-pose hypothesis withdrawn
Independent audit confirmed the baked behind-back sleeve starts from the SAME near shoulder as the animated arm, rather than being genuine opposite-side passive occlusion. The earlier "remaining supported-folder source pose" classification is withdrawn. The repair now removes the obsolete near arm with a clean torso and draws an explicit proportionate opposite far hanging arm; the earlier proposed three-chunk-only repair was insufficient for all reused Sameh scenes.
The old upper-arm crop also contained a collar/torso fragment. A calibrated clean upper arm from the intact reference and an opaque textured shoulder bridge replace it. Rejected v3/v4 image edits and v4–v9 joint trials are retained. v10 independent static review cleared known HIGH defects, with texture-junction LOW limitation. S17 now uses actual male thumb-over-paper pinch instead of unsupported paper.
Actual v3 checkpoint 00/09 proof prefixes 9d3ba8f4 / 915b20e0 and 153 actually used poses are pending central/dense encoded QA before remaining full integration. These prefixes identify bounded proofs, not a complete replacement-film approval. Evidence: E03-019 in STAGE-LOG.md; current render-v3-manifest prefix 7a7b7736.
Separate QA false positive: native P02 "severed wrist" was an atlas tile-boundary illusion. Actual full-resolution 19/20-second frames showed the cuff continuous through the right frame edge; allegation withdrawn, no repair required. Review tile boundaries at full resolution before declaring missing anatomy.

### E02: crop-induced rectangular joint gap, not a bone-length failure
Enumeration of all 123 actually used poses exposed Karim's rounded source ends cut off: upper crop y473 versus needed496, forearm x775 versus760. This created a rectangular V-shaped gap despite acceptable bone geometry.
Crop-only v40 retains the same bones and accepted lengths. All 36 affected static cases and a 180-decoded-frame 30fps proof covering both facings passed. All 14 affected full-film chunks are still rendering/review pending; no final release follows from the bounded proof. Evidence: E02 owner report and E02-master pose/crop QA.

### E01: forward-chain proof passed, full-film integration still pending
The full forward-shoulder redraw, not the earlier hand-only edit, passed independent actual-master and native encoded proof review: 151 decoded frames in EACH format. Proof SHA prefixes: master fa7c936d, native febcb6f5. Both passive hands improved in source.
Supplemental mesh audit classified nine negative/inverted triangles as fully/nearly transparent: all alpha <=1/255 and zero above5. No visible-surface inversion was found in that classification; do not rewrite otherwise valid mesh solely to eliminate invisible-triangle counts. Evidence: mesh-inversion-alpha-classification.json and STAGE-LOG.md 08:39 entry.
The 56 full-film state integration and key-pinching review remain pending. A new generated key variant was rejected for haze; an existing genuine-grip macro is used instead. No full E01 replacement release yet.

### E04: replacement long has bounded independent HIGH clearance
Replacement long SHA256 02cedaadc262e818ce770d609269b0b67e9d98ec735cb3269abe92b98851975f independently cleared known HIGH defects across all six actual targets, 72 critical decoded frames, 60 changed-range 1fps frames, plus a second independent 46-decoded-frame review.
Repair moves the wrist target [190,430]→[100,500] and related family to [160,550], physically down/forward; no resizing or blur used to disguise the arm. Fourteen unchanged chunk hashes were reused and canonical PCM preserved. This is exact replacement-long QA scope, not proof of perfect continuous playback or all portrait derivatives.
The same Library identity is being replaced/uploaded. Native P01/P02 proof is running; all ten native parts have NOT passed.

### External state and authority remain separate
At this snapshot E03 and E04 OLD uploads remain externally scheduled pending the requested specific owner permission to make them Private without deletion and replace at the same dates. No owner answer was received at the reporting cutoff. E04 new-long QA does not itself mean its external old upload was replaced or unscheduled.
No new user preview-approval gate is imposed on authorized repair production. Internal exact-output QA remains mandatory. Source text and PCM are preserved; no extra TTS, deletion, security/access changes or forced history rewrite is authorized by this documentation update.
