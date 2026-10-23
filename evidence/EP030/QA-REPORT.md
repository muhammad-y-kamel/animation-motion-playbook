# EP030 — The Pulley Elevator: QA report

## Identity and delivery format
- Native landscape: 1920×1080, 60 fps.
- Story: 175 seconds. Separate standard CTA: 6 seconds. Total: 181 seconds / 10,860 frames.
- Canonical script: `USER-SCRIPT-EP030.txt`, preserved unchanged from repository blob `188ba566cba2406cc22f99e64a32868bad86473a`.
- Source candidate SHA256: `6b89bb72f71710ba082f2dc5886351b24c728611c2312e7c91325122c08685ce`.
- Final MP4 hash and encoded-review evidence: pending at this checkpoint; the final identity appendix will supersede this pending line without erasing the production sequence.

## Story reconciliation
See `PHYSICS-PLAN.md`. Impossible simultaneous boarding and a ground-level counterweight were replaced by explicit manual hauling, braking and a pre-elevated iron weight. The two main platform heights sum to 1,260 at every checked state. The equal-height transfer occurs at 116.5 seconds. Canonical detailed scene order and the ladder punchline are retained; the ladder’s visible telescoping action is matched by sliding Foley, not invented hinge clicks.

## Source gates actually run
- `qa/physics.cjs`: 10,500 story states plus epsilon boundary probes; rope invariant, travel bounds, scale ratio, transfer and continuity checks.
- `qa/support-ownership.cjs`: actual bucket-bail and ladder-rung/rail anchors. Bucket grip is within a declared 4 px hand-contact allowance (measured maximum 3 px); rung residual is zero in the tested model.
- `qa/loading-regression.cjs`: 7,020 dock-foot states, 420 owned-carry states and 240 over-crate jump states.
- `qa/swept-contact.cjs`: 42,132 times, four temporal samples per 60 fps interval plus boundary probes. Actual stroked foot outlines, ramp/deck support, carried-box ownership, airborne shoes, hauling fists, ratchet obstruction and balcony/post exclusions. Actual outline residual 0.148 px is within the explicit 2 px tolerance; it is not exact pixel tangency.
- `qa/determinism.cjs`: shuffled native pixel hashes. Rebuild from the packaged source is a separate final gate.

## Repairs and rejected work
All producer and independent reviewer findings are recorded in `LESSONS-PLAYBOOK.md`, the review reports and the private animation playbook. Rejected source snapshots, screenshots, audio timing generations and two interrupted encodes are preserved. The partial encodes are not approved films; some interrupted MP4 fragments may be incomplete by design and are retained as failure evidence.

The recurring support failure is analyzed in `qa/CONTACT-REGRESSION-RECURRENCE.md`. Earlier tests bounded the world floor but omitted raised decks, ramps, obstacles and painted extents. The new reusable helper is sampled regression, not a continuous analytic collision proof or a guarantee for all future scenes.

## Encoded and audio gates
Pending at this checkpoint: complete MP4 decode, exact frame/duration/stream checks, FastStart, blank-frame scan, all 10,860 encoded thumbnail states, selected full-resolution images, AAC alignment, ZIP CRC and source/audio reconstruction. The final appendix will bind results to the delivered hashes.

## Honest limits
No claim of continuous real-time audiovisual screening, human audio listening, browser playback parity, or full-resolution manual inspection of every frame. Thumbnail coverage, selected full-resolution inspection, numerical tests and successful decode are different kinds of evidence.

## Release boundary
Production does not upload or schedule YouTube. Exact approved slot: **2026-12-17 22:00 UTC / 2026-12-18 00:00 Africa/Cairo**, English channel **@moki-n-peb**. The coordinator must separately verify the saved schedule after archive verification. No immediate publication or duplicate upload is authorized by this report.

## Final encoded identity and gate results
The earlier pending checkpoint is superseded here. MP4 SHA256: `891b322c698b801de5610f937bcbb64ae9ced282610c998b2543f2056aa84228`. Complete decode is clean; 10,860 frames, 181.000 seconds, 1920×1080 at 60/1 fps, stereo 48 kHz AAC, FastStart, and no blank frames. Independent reviewer inspected sheets 01–23 / 5,520 thumbnail states; producer inspected sheets 24–46 / 5,340 states. Together all encoded frames have thumbnail coverage. There are 33 selected full-resolution encoded inspections, with exact scopes and image hashes in the two review JSON files. No new defect was found in these scoped inspections. AAC numerical verification found zero-sample lag in all 45 tested cue windows and no clipping. See audio verification evidence. Source ZIP reconstruction and private archive verification are the remaining delivery gates.

### Packaged-source reconstruction passed
Extracted source ZIP SHA256 `1a078500ffe2402c7c6932573d32d2ec41d0497576cff9d916fcf6dc1139fbfa` into an isolated temporary directory. Rebuilt episode.js byte-for-byte, rebuilt all three WAV files byte-for-byte, and matched fourteen native pixel hashes. ZIP CRC passed. See qa/source-rebuild.json.

### Canonical byte-identity correction and final source ZIP
Archive Git-blob preflight found and removed one extra trailing newline in the local script copy (MOKI-EP030-008); original bytes remain in rejected/canonical-newline. The corrected file exactly matches canonical Git blob 188ba566cba2406cc22f99e64a32868bad86473a. Final source ZIP SHA256 is `09555f70953dc95f5e1e3a858f7c8991b7ee61dd2396d148e171ed4860d01814`, superseding the preceding source ZIP identity. Reconstruction again passed exact JS, all three audio WAVs and fourteen native pixel hashes. Film/source-animation identities remain unchanged. Historical reconstruction reports inside the source bundle are checkpoints; the top-level qa/source-rebuild.json is the final ZIP-specific receipt.
