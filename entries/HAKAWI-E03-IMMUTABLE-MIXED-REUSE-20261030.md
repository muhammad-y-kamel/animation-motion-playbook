# HAKAWI E03 — Immutable phase budgets, explicit mixed-source reuse and actual-output acceptance
- Project: Hakawi E03 native portrait Part 1; observed/fixed 2026-10-30.
- Status: Part 1 accepted by final technical/visual gate; root separately verified Scheduled delivery. Scheduled is not already public. Other parts are not cleared by this entry.
- Read-before-write main: 143d1d4cb1a3658133acc8544379eabf038faac0. Additive lesson; prior failures and files remain intact.
- Final AAC SHA256: `6e16fcade7c3d247f2af29b67bf4905777b9d3adfdf697d5a5fc4c49c9e1058e`.
- 1080×1920, 60 fps; frames [0,7126), 118.7666667 seconds; canonical audio samples [0,5237610).

## Visible symptom, discovery origin and cause
The full actual-output v12 review found a paper pre-handoff HOLD in S10 (notably global frames 4344 and 4415). A bounded critical-window pass had not covered the earlier held-paper pose sufficiently. The visible grip did not clearly establish opposing contact before transfer. This is a coverage failure plus a physical readability defect, not proof that every earlier bounded test was false.

- `discovered_by: reviewer` for the S10 defect: independent actual encoded review, `qa/native-fullpart1-batch-13/REVIEW.json`; the user's general review request is not attributed as a specific defect report.
- Runtime reservation/identity design issue: `discovered_by: agent`, inspection of v2 whole-plan execution and authorization-bound reuse.
- Orphan local resource failure: `discovered_by: agent`, preserved `qa/native-v13-witness-0414-a/INCOMPLETE.json`.
- This compiler checked the cited receipts/hashes; it does not claim a new independent every-frame visual inspection or listening session.

## Chronological trials and outcomes
| Attempt | Change / test | Outcome and limitation |
|---|---|---|
| Native v2 | Whole PLAN execution; aggregate full-AUTH reservation | Could not safely serve a small reusable first-1500 pilot under a distinct later resource approval. Rewriting AUTH after a pilot would break exact chunk identity. v2 preserved. |
| Native v3 | Same frozen full-part source/config/runtime/AUTH; predeclared prefix phases with separate hash-bound GO decisions; closed-boundary pause | First [0,1500) chunk reused in the same full part, not a separately rendered pilot. 32 pure tests: 8 recovery, 15 phase, 9 budget. These are mock control-flow tests, not encoded evidence. |
| Full actual v12 Part 1 QA | All 7126 presentations reviewed, versus selected action windows alone | Earlier pre-handoff HOLD found; old final and all chunks retained. A full-output regression can supersede an earlier finite PASS. |
| Native v13 semantic repair | Opt-in paper grip / opposing thumb before transfer; production changes in block-a.cjs and bag-grip-rig.cjs; intended semantic interval [4344,4733) | Source scope/numeric regression plus 17 native anchors passed. No claim that still anchors prove continuous motion or the full film. |
| Witness subbatch failure | First local 6 MiB JPEG guard tripped after ninth complete JPEG | Read-only recovery verified existing outputs/source identities; no blind rerender, no false original technical close. Combined evidence remained below root's 12 MiB total ceiling. Original INCOMPLETE retained. |
| Native v4 mixed derivation | Explicit old v12 identities plus two newly encoded v13 chunks, immutable new contract and two phase decisions | Reused three old chunks; rendered only [3000,4500) and [4500,6000). All 3000 newly encoded frames actually reviewed before separate assembly GO. Final accepted. |

## Best validated runtime design: reuse without relabelling
### Same-source pilot and full continuation
Freeze the complete chunk plan, configuration, source pins, runtime files and AUTH exactly once. AUTH predeclares cumulative phase ceilings; a separate GO binds AUTH/config/phase/full-plan hashes. A later GO also binds the prior phase receipt. Do not modify AUTH to enlarge a budget after media is made; do not render a different pilot job and pretend it is reusable.

Stop only between encoder-closed chunks, or before assembly. Keep both global kernel locks and the per-output slot inherited through the encoder. Recover a closed orphan only after exact source/config/AUTH/runtime identity and media validation. Retain an unclosed interrupted encode for diagnosis; never delete it to force a blind rerender. Ambiguous duplicate ranges block.

### Cross-config repair is a different, explicit derivation
Ordinary v3 reuse correctly refuses a changed config hash. v4 does not weaken that guard or relabel old media. New immutable derivation/AUTH pins original source/config/AUTH/runtime, every old COMPLETE and its files, old assembly/video/decoded baseline, all old actual-review reports, and the scoped new-source gate.

Actual Part 1 plan:
- Carry v12 [0,1500), [1500,3000), [6000,7126): 4126 frames, exact final decoded identity.
- New v13 [3000,4500), [4500,6000): 3000 frames.
- Old receipts and paths remain old. New reference receipts name both historical identities and the new derivation; final assembly truthfully lists old and new chunk receipts.
- A new output root must not contain historical chunks; authorization failure must not overwrite old STATUS.

### Semantic change versus codec propagation
The intended source edit is 389 frames [4344,4733). Lossy inter-frame prediction can alter decoded pixels outside that interval inside newly encoded chunks. Root explicitly revised the proposed contract before production, rather than silently waiving a failed equality condition:
1. Source behavior outside the 389-frame semantic interval must pass the scoped source regression gate.
2. Exact old decoded equality is required for all 4126 *carried* frames.
3. Measure old/new decoded differences throughout the two replacement chunks.
4. Actually review every one of the 3000 newly encoded presentations, including joins; do not inspect only the 389 edited frames.
5. Final assembly must have exact pixel parity to the approved ordered chunks.

Measured differences: 165 frames in [3000,4500), including 9 outside the semantic interval; 250 in [4500,6000), including 17 outside. Total 415 differing decoded frames, 26 outside the 389-frame semantic interval. These codec differences are not permission for semantic source changes outside the approved scope.

## Separate pre-assembly actual-QA gate
The immutable v4 AUTH declares:
- Repair: through four plan chunks, no assembly, no future QA required yet.
- Assembly: through five chunks, actual-new-3000 review gate mandatory.

The assembly GO supplies a separate hash-bound actual QA receipt without rewriting AUTH. Runtime checks exact new AUTH/config identities, coverage [3000,6000), 3000 presentations, semantic repair PASS, joins at 3000/4500/6000, nonempty pinned actual reports, and exact replacement COMPLETE/ALAC hashes from the prior repair receipt. The gate, evidence and media are rechecked throughout assembly. A 389-only review, old-source report, missing join or different media is rejected.

Final v4 pure tests: **68** = 8 recovery + 15 phase + 10 budget + 23 mixed + 12 actual-review gate. Mocks do not certify images/audio. Read-only audits of five real old chunk identities additionally passed.

## Resource lesson: archive space is not free
The reviewed v4 budget was 96 MiB new output + 80 MiB QA + **32 MiB separate archive temporary reserve** + 150 MiB floor = **358 MiB / 375,390,208 bytes** before an empty run, with strict greater-than free-space checks. Archive reserve is enforced in the runtime reservation, chunk/state receipts and assembly output headroom, not merely mentioned in prose. Output cap covers retained new chunks, assembly and metadata; existing historical bytes already occupy disk. Recheck fresh free space and concurrent workers before every GO. No silent budget growth, deletion of old evidence or quality reduction.

For unchanged v3, an explicitly documented 112 MiB reserve can enforce 80 MiB QA + 32 MiB archive together; do not describe the entire 112 MiB as available resident visual QA.

## Orphan JPEG recovery boundary
The first v13 witness subbatch exceeded its local 6 MiB guard after writing the ninth complete requested JPEG. Stage disposal completed. Source/runtime identities and existing images were checked read-only; the second subbatch supplied matching dependency evidence. The combined original 17-image evidence fit the already approved 12 MiB global ceiling.

This is a separate recovery-for-review receipt, not retroactive success of the failed subbatch. Preserve INCOMPLETE, the guard failure, exact original hashes and the limitation that original first-sub-batch technical closure remains false. Do not rerender merely to manufacture a clean receipt, and do not use a local failure as implied authority to enlarge a global cap.

## Regression/preflight checklist
- Review full delivered scope, not only event peaks: held/pre-contact/transfer/release/settle phases and passive limbs can fail earlier or later.
- Before transfer, verify an opt-in legible opposing grip without changing other helper callers; test native size and all relevant temporal samples.
- Carry acceptance only through exact encoded identity or explicit derivation with complete changed-output review.
- Separate source numerical checks, native stills, actual encoded every-frame coverage, final concat pixel parity, audio numerical alignment, durable storage and platform scheduling.
- Preserve rejected outputs, historical reports, original source hashes and all failed attempts.
- Never call scheduled content already public; publication/scheduling needs its own verified external receipt.

## Proof boundaries and accepted outcome
Part 1 final gate records all 7126 visual/technical acceptance via 3000 newly reviewed frames plus 4126 exact carried reviewed frames; actual final native samples at 3000, 4344, 4500, 4732, 4733, 6000 and 7125; no remaining known HOLD. Final is 22,867,955 bytes and matches the SHA above.

Lossless ALAC chunk PCM is exact canonical audio. AAC checks establish bounded alignment (zero-lag windows), **not byte-identical lossy PCM, ASR accuracy, subjective listening, or continuous real-time playback**. Root subsequently reported verified Scheduled delivery; the 04:48 acceptance gate itself still states durable upload pending, so that artifact alone is not a scheduling receipt. No broader episode/other-part acceptance is inferred.

## Compact evidence manifest
Paths below are relative to preserved E03 project root `hakawi_repair/e03-rebuild-20261029`; media is deliberately not uploaded to this repository.
- `native-planning-2302/PART1_V13_FINAL_ACCEPTED_GATE_0448.json`: SHA256 `f90d0bb63cf05eb6ffca402b0c328938eb3a2b17ba82d7bcece5c63257bc8304`.
- `native-planning-2302/V13_ALL_NEW3000_ACTUAL_GATE.json`: `c2a4ab25f0369eeed1a2e29aedb98f288abe7a027d1423a7093a5a1613908e90`.
- `native-planning-2302/V13_SOURCE_SCOPE_GATE_0422.json`: `ae6c58ee28b13d1933356089f9073d354c6d0dcfe361b3caab1b6948f72f849d`.
- `native-planning-2302/V13_ORPHAN9_RECOVERY_0418.json`: `cd18040b5cab815b53d8af052bca2ddb4d2fc04bfacd22d8ba074b2b42647f11`.
- Frozen v4 `runtime/native-v4-mixed-plan/run.py`: `2a3baba34cb47fa26b02b215a421504f41150759ff9dd6ad6cc52d5260103293`; `mixed.py`: `131f5db8ff474ee431e46d807db9833ebede82204dbdec8f198a879214cd0a3b`.
- Per-replacement `OLD_NEW_PIXEL_COMPARISON.json`, original failed `INCOMPLETE.json`, full old 23-report aggregate and normalized derivative, phase receipts and test reports remain preserved locally with the production package.

## Update history
2026-10-30: added verified Part 1 lessons and explicit limitations. Corrected earlier progress-message test overcounts: v3 is 32, not 33; final v4 is 68. Historical files and history unchanged.

Related: [native chunk regressions](PLAYBOOK_NATIVE_CHUNK_REGRESSIONS.md), [E03 interruption recovery](HAKAWI-E03-CHUNK-RECOVERY-20261029.md), [E02 final recurrence](HAKAWI-E02-PORTRAIT-FINAL-20261029.md).
