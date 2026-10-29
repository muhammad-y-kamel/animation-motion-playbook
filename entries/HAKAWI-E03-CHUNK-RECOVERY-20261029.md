# Hakawi E03: interruption recovery and technical closure — 2026-10-29 22:23 UTC

## Scope, not a release approval
Frozen source v15 has 154 pinned dependencies. Full technical assembly and exhaustive extraction are closed. **Only final block D had a closed actual visual review at the sourcev3 checkpoint (22:21 UTC); A/B/C were then active. No full-film visual acceptance, subjective listening, portrait acceptance, or publication claim.** Earlier finite passes remain limited to their own scopes.

This additive entry supersedes only the earlier WIP statement that technical recovery and durable closeout remained pending. Historical trial reports and failures are retained unchanged. The original 22:03 lessons JSON is preserved verbatim; its then-open durability item is closed by the separately timestamped Space v3 receipt, not silently edited.

## Failures, repairs, and proved results
1. Two environment interruptions left non-fragmented full MP4 partials without a `moov` atom. Submitted-frame progress is not decodable coverage; no safe prefix salvage was established. Retain these failed originals. Use independently finalized, bounded ≤3,000-frame ALAC chunks with identity-bound COMPLETE receipts and exact global frame/audio intervals. Resume only validated completed chunks; preserve partial or renamed-but-unreceipted attempts rather than silently overwriting them.
2. Runtime review found orphan-encoder and retry crash windows. Child assembly must inherit both kernel lock FDs and the assembly slot FD. Reuse requires matching source/config/renderer/file hashes and the receipt chain, not just a filename. Independent `RUNTIME_REVIEW_V2.json` SHA256 is `f8efb0c45c03be5cbc8fe0717aa8485f077d6d94e821f9776b47c18c1aa5cb6d`.
3. Concatenation closure proves all 27,922 decoded frame pixels equal ordered chunk frames and exact PTS/DTS. Canonical 24-bit PCM has 20,522,376 samples; all real final 441 samples remain. Each lossless chunk PCM is exact. AAC presented sample coverage is exact, with five zero-lag correlation windows ≥0.999854; AAC is lossy, so do not call its samples byte-identical to PCM or infer listening from correlation.
4. A flat 288-term ffmpeg select expression failed before frame 0 with a parser/allocation error. A balanced equivalent expression tree retained selected IDs. Check emitted native PTS against each planned global frame×1000, not only output count. Final extraction covers all 27,922 frames in 582 sheets plus 288 native images. COVERAGE and actual selected-PTS proof are identity-bound in the original recovery lessons receipt.
5. The 127 MiB QA reserve exhausted after 11,616 frames / 242 sheets at unchanged image quality. The safe stop retained evidence. Root approved 416 MiB production +544 MiB aggregate QA =960 MiB unchanged, plus150 MiB disk floor; the complete retry used a384 MiB attempt cap. Budget full review and failed attempts explicitly; never lower review quality or delete unique proof to fit a guessed reserve.
6. Contact-sheet display can appear sliced/shifted while a crop from the SAME JPEG and matching native decode are coherent. Root also reproduced the discrepancy using320×180 RGB/Pillow; small MAE comparisons and correct cropped tiles do not identify a root cause. This remains **display-path uncertainty, not a proven renderer defect or an odd-height fix**. Inspect exact tiles/native pixels before source changes, and preserve both observations.

## Durable preservation closure, separate from visual closure
Source identity `libfile_ead7361918c48191b115f1517cbce4d1` is now **v3**,7,547,467 bytes, SHA256 `10cade1500b9e1432fae045eacc520ec9a8c9aca57328cf8d8bbd0858a8da93e`. All previous snapshot entries remain; v15 delta and durable chain append without replacing donor/history.

Full MP4: `libfile_90afedb597e0819184f4148ab364c4bd` v0,76,052,021 bytes,SHA256 `16b59f664b83d8af447bdf796f077a31abdb8fc49d44073d7633900652e90f21`. COMPLETE receipt SHA256 `9ef9d4d864dcbcbf394f76afa396e1662b8ca72abffc6270dce7c10da50a42b1`.

Restoration requires the same source identity v3 +unchanged donor `libfile_ea9c331d1d4c81919d6a2344548332e3` v7 +old nine media v0 +25 new media v0 (23 ZIP parts and2 direct originals). New media total645,276,875 bytes. Complete761,192-byte mapping is embedded at `V15_CLOSEOUT/DURABLE_MEDIA_CHAIN.json`, SHA256 `726047a4891124bb8c04ff845de04bf149bcb6d85fffa670397c0788c4d64d01`. The compact evidence index records every returned identity/version/size/hash while pointing to that complete map.

Each upload succeeded with local xattrs/identity and unchanged local SHA verified; no independent remote byte redownload is claimed. Only this run's redundant ZIP containers were removed after fresh checks of retained originals. Original MP4, failed partials and unique proof remain. One ≤32 MiB ZIP at a time, or direct original upload without copying, kept the150 MiB floor +64 MiB reserve. Never retry an uncertain upload before reconciling its receipt and Library state.

D actual visual review SHA256 `5d30ded297683e9a708cac7f155e7a0f33763d52d584a67778f0d320a85edf0f` is included in sourcev3. A/B/C reports are not in sourcev3. At22:23 UTC the lead subsequently confirmed A and C closed: A SHA256 `0a06470f8a5af029ef7586fea08d0fe6b76d582b352646ba5c17872e24130899`; C SHA256 `d15f2dbd2e9b90a05e943592025656027364f790f9eb37109c89f8db6fe83633`. These later reports are not claimed inside this commit or sourcev3. B and final lead aggregation remain pending; native portraits remain gated on accepted long.

## Regression checks
- Interrupt and resume without counting unfinished files as success; preserve rename-before-receipt crash attempts.
- Check inherited locks across parent termination, all global frame times, exact chunk PCM, and real tail samples.
- Validate actual selection PTS and exhaustive coverage separately from successful process exit.
- Preserve failed extraction evidence in the aggregate budget; investigate native pixels before blaming source geometry.
- Keep technical closure, visual acceptance, durability and external release as separate explicit gates.
