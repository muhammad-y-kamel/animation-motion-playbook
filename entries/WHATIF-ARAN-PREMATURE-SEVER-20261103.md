# Aran: sever only after tool contact

## Observed defect
V006 opening-cut dense decoded inspection found the cuff notch at absolute frame91 (1.5167s), before the hand reached the teeth near frame121. At frame90 the hand had lifted while the knot stayed at the cuff. The detached piece then jumped to the hand. Earlier sparse static witnesses had missed this causal error.

## Cause
The notch/cloth ownership switched at an independent progress threshold (q > .42), while the hand continued its separate interpolation toward the mouth. Passing target geometry and isolated still tests did not establish continuous object custody.

## Additive correction
V007 changes only the opening action within visuals/aran.js. The cuff and cloth share a continuous attachment path during lift from0.4–1.6s. Teeth contact holds1.6–2.2s. Sever happens at2.2s. The hand retains the patch while it withdraws2.2–3.2s and the sleeve returns. Script, audio and timeline are unchanged. Other accepted repairs remain unchanged.

## Tests and actual evidence
- 36,001 source-only samples tested attachment-centre equality until sever, teeth target during contact and continuous cloth position. Maximum step at10kHz:0.0128191 local units.
- 1,680 mocked source scenarios passed; these are not pixel acceptance.
- Targeted native review:40 landscape overview witnesses plus6 opened native frames,40 portrait overview plus7 opened native frames.
- V007 opening proof:216 consecutive decoded frames per format,432 total, inspected on complete-frame sheets. Landscape additionally opened5 source and5 decoded native images. Portrait opened source/decoded96,132,144,192 and decoded131/133.
- New notch begins at132 after contact. Patch custody remains with the hand through withdrawal. Landscape job boundary143/144 is visually continuous.
- Landscape19 source/decoded phase pairs were numerically compared. RGB mean absolute difference was2.110–2.130 out of255, consistent with encoded colour/compression differences; inspected pairs preserve the same composition.
- Four proof jobs have successful OWNED receipts with reaped workers and no lane block. RESULT alone is not sufficient acceptance.

## Scope and remaining gates
This verifies the repaired causal sequence using dense sequential still evidence for0–3.6s in both formats. It is not normal-speed playback, audio review, full-film acceptance or permission to skip remaining action gates. The patch is partially occluded by the face during contact but readable before and after. The17.22s shot transition requires its separate proof.

An initial concern about whole-frame squeezing on aggregate contact sheets was withdrawn after individual tile enlargement. Do not report a codec defect based only on a crowded overview display. Preserve direct source/decoded image comparisons.

## Evidence locations
Use SOURCE_FREEZE_V007.json, SOURCE_DELTA_V007.patch, OPENING_GEOMETRY_V007.json and MOTION_ACCEPTANCE_V007_OPENING.json in the Aran repair evidence bundle. The latter records hashes for both reviewers' reports and every owned-process completion receipt. Source and decoded phase images are in the opening-cut proof bundle.

## Classification and prevention
Occurrence of ANIM-0004 semantic custody and ANIM-0008 prop origin. Discovered by actual landscape and independent portrait reviewers. Severity: blocking causal-action defect. Status: validated_with_limits for the opening window only. Bind ownership, attachment and sever to one physical event clock; inspect every encoded frame around contact and all chunk boundaries before closure.

[Hash-bound opening acceptance evidence](../evidence/aran-v007-opening-20261103/acceptance.json).

Stage log: WhatIf / Aran | opening motion proof | source freeze identity in linked evidence | ANIM-0004, ANIM-0008, PREFLIGHT | premature sever | 432 decoded thumbnails plus selected native comparisons | landscape and independent portrait reviews | scoped pass, no playback/audio/full-film pass | 12 remaining action windows.
