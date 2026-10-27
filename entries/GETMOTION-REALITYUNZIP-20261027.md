# GETMOTION-REALITYUNZIP-20261027 — Technical integrity is not semantic acceptance

- Project: GetMotion; episode: GMX03_AR (RealityUnzip), first of a 40-output rebuild.
- Status: **OPEN — v1/v2 rejected; independent v3 review NOT PASSED. No final-media acceptance.**
- Severity: blocking creative/continuity defects; rendering infrastructure and review limitations tracked separately.
- Observed: 2026-10-27. This entry is a bounded snapshot, not an audit of every historical GetMotion conversation.
- Discovery: user for rejection of the old 24 outputs; independent reviewer for fresh semantic defects; agent for renderer/XML/portability trials. Component attribution follows below.

## Visible symptom and source evidence

User message `Sentinel_319945147b0c8191ae1f4a9d35977778` rejected all 24 recovered videos as unrelated to the requested content and instructed a fresh rebuild from the ZIP, one video delivered at a time. Subsequent messages `Sentinel_785ef416c09081918473b0567bc979d7` and `Sentinel_909a82396d9c8191b1cca0e60b44171c` requested irreversible deletion. The exact 24 Library outputs were moved to trash; permanent erasure was **not** available or established. Original ZIP, audio, prompts and assets remain intact; old local renders are rejected evidence, not approved inputs.

The recovered files passed full technical decode. Limited sampled contact-sheet inspection did not establish their adherence to the complete prompts, continuous motion or sound. The user's rejection supersedes any implication of artistic acceptance from those checks. The original conversation `6ad8c338-55c4-83ea-8f0f-b2165a26c23c` remains subject to a safe-read limit; this case uses the recovered ZIP and current reports, not a claimed complete reading of that history.

Authoritative input: `hi.zip`, Library `libfile_8438452da7c481918c98ef3ee774c755`, SHA256 `81f558d99c0ce014dd16b502a2b7b846909efeaf7757b3fcc7c60a5c4b51ba23`. Prompt `01_PROMPTS/GMX03_RealityUnzip.txt` requires an actual continuous zipper-connected spatial event, not a generic icon explainer. Original Arabic narration is locked, SHA256 `cb5a1248105cc34f5687dc099fd570b798c746072214ca13aa033b18e3ea114c`.

See [artifact provenance](../evidence/getmotion-rebuild-20261027/artifact-hashes.json), [v1 report](../evidence/getmotion-rebuild-20261027/independent-v1.md), [v3 report](../evidence/getmotion-rebuild-20261027/independent-v3.md), and [renderer evidence](../evidence/getmotion-rebuild-20261027/renderer-evidence.md). Copied reports are attributed evidence, **not new independent pixel inspection by this compiler**.

## Root cause and chronological trials

| Component / origin | Symptom and cause | Attempt and test | Actual result |
|---|---|---|---|
| Semantic acceptance / user | Successful decoding and selected stills cannot prove source-specific choreography. | Recover and decode old 24; user reviews deliverables. | All 24 rejected. No blanket technical-pass-to-final inference permitted. |
| Hook / reviewer | v1 slider begins outside the viewport; aperture finishes too early; a 2D scale substitutes for camera movement through the gap. | v1/v2 source and native four-sample stills, including frames 0/15/30/60 at 60 fps. | Rejected before full export. |
| Hook repair / reviewer | v3 makes slider visible and adds projected opening. | Source and native stills 0/15/30/45/60/90. | Visible slider/gap improvement evidenced. Camera still does not cross the seam plane; deleting mechanics is not a crossing. NOT PASSED. |
| Ownership / reviewer | Detached slider, incompatible seam front and repeated scene replacement. | Mask incoming scene over outgoing; inspect v3 transitions. | Better reveal, but 21 independent icon scenes still lack causal object handoffs. A mask is not proof of shared object identity. |
| Geometry / reviewer | Teeth become separate markers at mismatched positions; line/circle changes and stage angles reset. | v3 source/still review. | Teeth positions ignore hero scale, then disappear. Circular boundary is replaced rather than continuously transformed. OPEN. |
| Finale / reviewer | Full logo revealed behind unrelated approximate trace; pull-tab does not become CTA. | v3 frame 3120 and source. | Offset trace and detached arrow tip persist. Exact asset contour and shared tab ownership still required. |
| Composition / reviewer | Seam/slider crosses protected text; cover-up rectangles and unmotivated object paths remain. | v3 frames 180/190/1045 plus source. | OPEN. Positive Arabic shaping in selected labels does not waive overlaps or missing actions. |
| Browser runtime / agent | Chromium fails before capture: socket operation not permitted. Supported escalation did not execute due to a read-only sandbox setup failure. | Ordinary launch and one supported escalation. | No browser frame captured. No security-flag workaround or denied-path inspection attempted. Infrastructure block, not scene pass. |
| Direct SVG fallback / agent | Browser unavailable; need deterministic capture without claiming HTML/browser equivalence. | Same SVG generator exposed through HTML seek; native Sharp/librsvg fixtures, four distinct shutter samples. | Synthetic 12-frame 320×180 and 1080×1920 fixtures encoded/decoded at 60 fps; mask and one Arabic phrase sampled. Bounded engine evidence only; browser parity and final-scene review remain unverified. |
| SVG XML / agent | Invalid generated XML prevents native rendering. | Repair generator XML; subsequent source stills produced. | Subsequent rendering is evidence of a local repair, not proof every time-dependent SVG is valid. Full-range regression still required. |
| Dash portability / reviewer + agent | librsvg does not apply the intended pathLength-normalized dash progress; zero-progress outline appears complete. | Replace normalized dash assumptions with explicit lengths; inspect v3. | p0 outline improved. v3 helper still lacks S support and approximates A arcs; general path progress NOT validated. |

## Best validated fix

**Not established for the film.** The useful bounded changes are visible first-frame slider, improved p0 outline, incoming-content masking and removal of gratuitous periodic knob/door motion. They do not resolve the central source mismatch. Preserve failed trials rather than rewriting them as successful fixes.

The next implementation should derive slider, teeth, reveal mask and transitions from one persistent centerline/carrier with explicit phase ownership. Each spoken clause needs an actual transformation and inherited end state. A storyboard assertion is not implementation evidence.

## Prevention and regression gates

Before building: read the complete prompt and frozen recording contract; write an executable shot table for every clause with object identity, start/end geometry, cause/result and inherited state. Do not substitute titles/icons for the specified technique.

Before full encode:
- Inspect the hook at 0/.1/.25/.5/.75/1 seconds; demonstrate actual plane crossing and visibility clipping, not only a projected zoom.
- Test slider at the common join of closed/open edges; derive tooth tangents from the same path.
- Compare transition entry/exit coordinates and 0/25/50/75/100% phases; inspect neighboring output frames and all shutter samples.
- Preserve teeth-to-marker identity in position, scale and rotation. Verify line→diagonal→circle continuity without resets.
- Trace the exact supplied logo geometry; keep the same pull-tab parented through CTA formation.
- Check protected Arabic glyph regions, ownership masks and full path progress including curves/arcs.
- Test arbitrary seek order and freeze exact source/assets for capture.

After encode: full decode, exact dimensions/frame count/FPS, source and output hashes, full audio identity/placement/ending, dense encoded transition inspection and native-resolution typography. 60 fps with four distinct samples and 180° shutter is a technical requirement, not semantic approval.

**Actual listening and continuous normal/half-speed AV playback remain unavailable/unperformed in the recorded trials.** Numeric audio checks, ASR, stills and contact sheets cannot close those gates. Any export lacking required review remains a review candidate; do not claim finished or fully watched/listened.

## Related mechanisms

See [ANIM-0013](ANIM-0013-margin-review-invalidation.md) for invalidating earlier review after changes and [ANIM-0008](ANIM-0008-prop-origin.md) for object continuity. These are analogous prevention lessons, not proof that the same production fix applies.

## Update history

- 2026-10-27: Added user rejection, fresh v1/v2 failure history, independent v3 NOT PASSED findings, bounded native-renderer tests and unresolved AV gates. No production source edited and no new paid generation performed by this documentation update.

- Producer follow-up at 00:26 UTC: v1 XML duplicate font-family was repaired in a separate snapshot; v2 had outgoing-scene ghosting through transparent incoming content. v4 source now attempts real plane crossing, aligned marker endpoints, opaque incoming clearing, exact logo-contour reveal and persistent artifact boundary. **All v4 semantic tests are pending; no full video exists yet.** These are attempted changes, not validated fixes.

## Follow-up — v5/v6 trials and first v7 encoded review candidate (2026-10-27, 01:12 UTC)

This follow-up supersedes the old “no full video yet” checkpoint only for **GMX03_AR v7**. It does not close the original creative rejection or approve the batch. Upload/delivery is not established by these local reports.

### Preserved intermediate failures
- v5 review found incoming hero scale applied to outgoing geometry: a 1.3→1.0 change shrinks the departing film before its wipe. The center-to-outline fan mask left remnants that disappeared at completion. The producer stopped the full render around frame 1141; it was not a completed export.
- v6 attempted separate outgoing scale and paired radial inner/outer masks, nonnegative inner radius and full coverage before removal. Native beat inspection remained bounded; repeated icon/wipe construction and holds remained creatively weak. v1–v6 are not approved deliverables.
- v7 was a same-video architectural rebuild using persistent projected world stations, paired split sheets, near-plane clipping, a join-driven slider and supplied logo contour. These descriptions do not themselves establish full semantic compliance.

### Actual v7 artifact and technical evidence
- File: `GMX03_AR_RealityUnzip_REVIEW.mp4`; SHA256 `3cbc75544a217061f9e21eb2c021c147b2dbe4b0a44c23961b41db470d006af1`; 26,440,622 bytes.
- Frozen scene SHA256: `2b6919322e9bd5e38b96837b50b9bccb8ad80393fe523038ffcc9ae9ce48ec0a`.
- 1080×1920, H.264, 60 fps, 3212 frames, 53.533333 seconds. Full decode passed. Render report records four distinct subframe times for every output frame.
- Original source narration identity/hash and decoded source PCM were preserved; source PCM SHA256 `c1b953e5b46c52c285cd54a28984c439453485ab980ced9cfa31e009f60eb4d2`. This is source/timeline integrity, not bit-identical AAC or proof of pronunciation/listening quality.
- Producer reports editable package SHA256 `aaf6ef1ae335cdefc4ad9ba08088ec59297d0b1211e6302bc79dd554ab9eb176`; this entry does not independently certify archive reproduction or upload.

### Independent encoded review: 16 native frames, not 3212
The reviewer inspected frames 0, 15, 30, 60, 176, 475, 2610, 2700, 2847, 3012, 3013, 3014, 3024, 3048, 3072 and 3211. The specific final-world reset and heading/seam overlap repairs survived these encoded samples. The opening slider, split edges, perspective reveal, settled price/delivery copy, logo/CTA and lower-left code were recognizable. Earlier mechanical rechecks addressed floor overdraw and join/sheet ownership within their stated sample scope.

**Remaining findings, discovered by reviewer:**
1. Frames 176 and 475 blend old/new headings and scene states, visibly doubling Arabic text. The producer attributes this to shutter accumulation across discontinuous cue changes; causality is an attributed hypothesis until a dedicated test. Repair should use continuous geometry/typography ownership across all four subframe times, then retest native encoded boundary frames.
2. Fast shapes show discrete four-sample ghosting (opening frame 15 and finale slider). Required sample count does not guarantee attractive blur. Assess the shutter trajectory and actual playback; do not silently reduce mandated samples.
3. Around 43.5–45 seconds the large blank price sheet hides smaller objects. This is weak composition, not a decode error. Improve semantic content/ownership and reserved layout, then retest the whole affected interval.
4. Literal teeth-to-useful-object identity and complete source-specific causal choreography remain unproven.

**Decision: review candidate with bounded technical/visual evidence. Not global semantic PASS, not fully approved final.** No normal-speed or half-speed AV playback, actual listening or every-frame native visual certification occurred. Do not claim all 40 outputs complete. The remaining 39 were not started in this checkpoint.

Supporting snapshots: [technical QA](../evidence/getmotion-rebuild-20261027/v7-technical-qa.json), [independent encoded review](../evidence/getmotion-rebuild-20261027/v7-independent-encoded-review.md), [pre-export scope](../evidence/getmotion-rebuild-20261027/v7-pre-export-review.md), [v5](../evidence/getmotion-rebuild-20261027/independent-v5.md), [v6](../evidence/getmotion-rebuild-20261027/independent-v6.md). Source reports are copied as attributed evidence, not re-performed AV review by the documentation compiler.

### Delivery status update — 01:12 UTC, reported by coordinator
The first **review candidate**, not a globally approved final, was delivered as Library MP4 `libfile_51e01b6d0ba08191a3cae45c7ba7f98f` and editable-source item `libfile_5b8cf30d45f081919da5af0d81e1c347`. This updates the earlier local-only delivery checkpoint, not artistic acceptance. Producer contact-sheet coverage included 62 extracted samples; independent native inspection remains the 16 frames listed above. The coordinator plans to address known cue-boundary text blending in the next English version; that is planned work, not a verified repair.

## Follow-up — corrected AR v8 delivered (2026-10-27, 02:12 UTC)

**Current outcome: corrected delivery with bounded sampled clearance; continuous AV review still unperformed.** Earlier v1–v7 failed/review-candidate histories remain evidence, not overwritten approvals.

### Failed v8 checkpoints and repairs
- Initial v8 source `e4e2b939fddd77bf9b9ceb2717bc61c65adbfd99e7c26b197948664ffa66f598` failed independent review: small bottom slider, no actual camera/material-plane crossing, metadata-only useful-object inheritance, quantized slider separated from join (78.7145px), missing carried finale tab, unused exponential-pull helper, dense inner knot and no causal per-bar ledger.
- Rebuilt shared left/right sampled geometry drives seam, aperture, tooth attachments and useful film boundary. The original 98 tooth IDs persist; exponential pull and damped settlement operate on actual controls. The actual tab—not removed world-face buffers—continues into the finale. Text is composited once sharply after four geometry samples to avoid old/new heading blending. The price object became a centered itemized ledger instead of a blank occluding sheet.
- The next per-bar review still failed the specific cause/result condition: the moving boundary only affected empty lower floor while the relevant object was already visible. A written 27-row ledger alone did not prove causality. Delivery also lacked a shared circular clock boundary.
- The d9c93b revision closed over/revealed the meaningful object regions and reused the SAME seam for delivery's circular boundary. Independent 21-witness review cleared these targeted semantic conditions, without global AV certification.
- Final precision revision `0bd135cfbbd8786c7513337deaad18db5f3cfac638462b6783dc28ff9321d33a` inserts the exact analytic front into both rendered polylines while keeping original tooth parameters. Independent evaluation of all 12,848 shutter states found zero rendered join-to-slider distance, unchanged original tooth coordinates, stable 98 IDs and zero bad states. Thirteen precision witnesses were viewed at overview scale, with three opened natively. This establishes that diagnostic and sampled clearance, not every-frame visual inspection.
- A suspected wrong heading in a reduced multi-image presentation was not reproduced in actual native files. It was a reviewer-display interpretation error, not an established renderer defect; do not “fix” production code from that false alarm.

### Pixel-preserving runtime optimization
The driver removes fully transparent single-face groups, unwraps opacity-one groups and rasterizes the same four geometry times concurrently before averaging in original order. Six native frames (0,15,372,1335,2670,3090) matched baseline raw-sample, overlay, final RGB hashes and PNG bytes exactly. A 12-frame native encode/decode fixture passed. This optimization did not reduce resolution, FPS or temporal sample count. **No complete 3212-frame dual-render equality proof or browser-parity claim.**

### Exact delivered artifact and review
- MP4 SHA256 `e1bae40170d58f4e0b48e3714c8f3361535b12f3da2ff2f35a8b2434044d728c`, 11,790,081 bytes; 1080×1920, 60fps, 3212 frames, 53.533333s. Full decode and four distinct shutter times per frame passed. Original MP3 and decoded-source PCM hashes remain unchanged; final AAC is lossy, not byte-identical source audio.
- Independent encoded review inspected 62 selected samples, opened two of those natively, and independently extracted nine additional native frames (360,372,384,960,972,984,3012,3013,3014). No new sampled blocker or recurrence of known broken handoff/duplicate tab was found. This is **not** 3212-frame visual certification or continuous normal/half-speed AV playback/listening.
- Numerical all-frame scan reported no blank frames; the final approximately 0.92s settled CTA hold is intentional. Numerical scan is not artistic acceptance.
- Same Library MP4 item `libfile_51e01b6d0ba08191a3cae45c7ba7f98f`, version 1, file `file_00000000814881f48f2d2a6a5888c726`; editable item `libfile_5b8cf30d45f081919da5af0d81e1c347`, version 2, file `file_00000000c3b481f48cec7cfe21ac350a`. Package SHA256 `72f6466c009bdb24fa60a0065b0ae960cb9f7e7a7656b6708052bdcadaad771d`. Delivery at 02:12 UTC is coordinator-reported; only this first Arabic output is covered.
- Packaged-source testing: 28 exact SVG-layer equality tests at 14 selected times and three native-frame smoke renders from the separate package. Not a complete independent rerender.

Best validated repair is now the shared rendered-geometry/ownership approach **within these tested scopes**. Reapply tests per language and source revision rather than inheriting an unconditional pass. English is next; the remaining queue is not complete.

Supporting reports: [failed checkpoint](../evidence/getmotion-rebuild-20261027/v8-checkpoint-fail.md), [bar gate](../evidence/getmotion-rebuild-20261027/v8-bar-gate.md), [targeted semantic clearance](../evidence/getmotion-rebuild-20261027/v8-targeted-clearance.md), [exact-join clearance](../evidence/getmotion-rebuild-20261027/v8-preexport-clearance.md), [encoded review](../evidence/getmotion-rebuild-20261027/v8-encoded-review.md), [technical QA](../evidence/getmotion-rebuild-20261027/v8-technical-qa.json), [optimization proof](../evidence/getmotion-rebuild-20261027/v8-optimization-proof.json).

## REOPENED — user rejects AR v8 narration-to-visual meaning (2026-10-27, 02:16 UTC)

**CURRENT STATUS: USER REJECTED / OPEN SEMANTIC FAILURE.** This supersedes any implication of acceptance from the preceding corrected-delivery checkpoint. Technical checks and narrowly cleared mechanical defects remain factual historical evidence; they did not establish meaningful correspondence to the narration.

- Discovery origin: **user**, exact message `Sentinel_d8e0d37e3ae88191851acadae8ac9e14`.
- Exact feedback: «حركات السوستة عشوائية مالهاش علاقة باللي بيتقال واللي بيحصل جوا الفيديو كمان مالوش اي علاقة ياللي بيتقال».
- Meaning: the zipper motion appears arbitrary relative to the spoken words, and the events inside the video also do not relate to what is being said.
- Affected delivered AR v8 MP4: SHA256 `e1bae40170d58f4e0b48e3714c8f3361535b12f3da2ff2f35a8b2434044d728c`.
- Coordinator instructed the producer to stop the English render. This entry records that instruction, not an independently verified process termination.

### QA failure and cause classification
Mechanical continuity, zero join error, stable tooth IDs, useful-object reveal, technical decode and beat timing cannot certify narration-semantic relevance. The prior sampled clearance did not prevent this substantive user rejection. A scene can contain a coherent physical action yet demonstrate the wrong meaning. The exact implementation causes must be investigated clause by clause; no hypothetical repair is recorded as successful.

### Required repair and regression gate
For every exact spoken clause, record: actual audio start/end, current visible action, the mismatch, the concrete actor/object, the intended action and result, and why that result demonstrates the clause. The zipper must cause or expose that relevant event, not operate as an unrelated beat-driven wipe. Verify the meaning and synchronization together against the frozen recording, including the complete interval and neighboring transitions. A ledger naming the topic or a mechanically valid reveal alone is insufficient. Preserve immutable rejected evidence and record each new trial separately.

No new source, render, semantic acceptance or user approval is established by this documentation update. AR v8 is not an accepted deliverable; subsequent English/batch work must not inherit its earlier clearance.
