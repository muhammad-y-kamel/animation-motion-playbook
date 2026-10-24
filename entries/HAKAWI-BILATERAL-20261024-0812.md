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
