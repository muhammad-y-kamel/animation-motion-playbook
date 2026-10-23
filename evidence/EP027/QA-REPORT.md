# EP027 — The Hourglass Race: final production review

## Result and verified deliverable
PASS within the review scope stated below. Final film is70seconds (64second story plus6second CTA),1080×1920,60fps,4200frames. SHA256 `d1f93db5c2b175d275fb8f598bb14d3b08898d994580330f9c0231c27ba3c772`;6,667,935bytes. Scheduling and publication are separate downstream gates, not established by this report.

## Visual review coverage
- Production reviewer inspected encoded thumbnail sheets01–09: all2160frames,0–2159.
- Independent reviewer inspected encoded thumbnail sheets10–18: all2040valid frames,2160–4199. Sheet18 has120unused black cells, which are not video frames.
- Combined coverage: all4200encoded frames at90×160thumbnail resolution, arranged20×12 per sheet.
- Production reviewer inspected eight selected encoded full-resolution frames at0.2,8,10.5,20.5,22.5,29.5,33.3,35.7seconds.
- Independent reviewer inspected six selected encoded full-resolution frames at8,51.8,56.5,58.5,61.8,65seconds.
- Therefore13unique selected encoded full-resolution frames, not14. Additional source-preview and repair inspections are documented separately and not counted as encoded-frame review.
- Stable character silhouettes, clear main story beats, readable endcard and no blocking clipping defect found in reviewed evidence. Final repair samples show supported rotating hourglass, closed high cube grip, intact glass outlines, gravity-aligned sand, visible jam and final tap/collapse/delayed-sand sequence.

## Repairs and retained evidence
Rejected encoded candidates retained under `qa/rejected/`: stack-gap candidate, outline candidate and sand-gravity candidate. Repairs eliminated stack air gaps, glass/table penetration while raising, inappropriate open high pickup hand, Canvas-current-path loss of glass outline, inverted sand fill anchors and invisible pickup origins. Supply bins now explain cube emergence. The final source is distinct from all rejected encodes.

## Technical and reproducibility checks
- Full final audio/video FFmpeg decode completed with zero-byte error log.
- FFprobe verifies70seconds,1080×1920,60fps,4200frames.
- FastStart verified: `moov` precedes `mdat`.
- Final decoded AAC is48kHz stereo, peak0.642791748, zero clipped samples. AAC decoded length includes normal encoder padding; video duration remains70seconds.
- Deterministic source concatenation reproduces `episode.js` exactly: SHA256 `107f80b7ac49b6e113948d10399232875b1577907a89a6e2ec7818d9729e8eed`.
- Original deterministic Python synthesis reconstructs music.wav,foley.wav andEP027-mix.wav byte-identically. Cue sheet and audio numerical report included.
- Independent numerical pass evaluates4200states,1127authored contact samples with zero positional error, projected hand bounds, conservative glass-cap support envelope and38reverse-order random-access seek frames with identical hashes. These constraints are not a proof of every rendered-path intersection.

## Adaptations and honest limits
The canonical EP027 story supplies hourglass cheating, flip duel, horizontal-time freeze, tied towers, jammed grains, tap collapse and delayed sand. Fixed wide camera and analytical animation replace the script's proposed zooms. Original established Moki/Peb rig geometry, proportions and colors are reused; EP026 umbrella narrative is not reused. Peb uses a visible stool; supply bins clarify cube pickups. Arms use stylized elastic reaches. Block collapse is authored cartoon motion, not a rigid-body physical simulation. Sand is a clipped illustrative fill, not a grain-volume simulation.

Original music and Foley are synthesized code, with no downloaded recordings or voices. No claim of direct human audio listening, continuous real-time audiovisual screening, actual browser media playback, or full-resolution manual inspection of every frame. The standalone editable HTML is packaged with source, fonts and soundtrack; actual browser playback parity remains unverified. Review scope, source reconstruction, numerical audio checks and full decode are distinct evidence.

Source ZIP and QA ZIP are CRC-tested after packaging. Evidence hashes and reviewer attribution are recorded in `qa/producer-review.json` and `qa/independent/final-review.json`.
