# HAKAWI E04 — bounded pipeline failures, terminal-status race and proven pilot
- Date: 2026-10-30.
- Status: validated with limits: one 240-frame pilot; not whole-film acceptance.
- Discovery: agent resource/terminal/output checks, independent source audit, and root scoped visual adjudication.
- This compiler inspected source and exact receipts. Attributed visual findings below are not a new independent viewing or listening session.
- Preserve all failed trials, the false-success receipt and additive HOLD. No history or prior evidence is superseded silently.

## 1. Exit-loop race falsely promoted a failed pipeline
Actual motion-preflight-v4 returned supervisor exit 0 and TECHNICALLY_CLOSED while its renderer had exited 1 after an unhandled write EPIPE. FFmpeg had reported “Cannot allocate memory” during rawvideo demux but itself exited 0. Both children were reaped; reaped is not successful.

Mechanism: the loop condition polled children and stopped when both were terminal and stderr was drained. This could bypass the in-loop nonzero-return-code check. Merely finding a nonempty MP4 was insufficient.

The repaired supervisor:
1. Unconditionally waits for exactly the owned renderer and encoder after all pipes drain, and requires both return codes zero.
2. Repeats the terminal-success invariant during finalization.
3. Requires exactly one renderer completion receipt matching window ID/bounds, dimensions, 60 fps, 240 delivered frames, 720 source shutter samples, 1,990,656,000 RGBA bytes and canonical audio bounds.
4. Keeps raw per-channel stderr separate from chunk-prefixed human logs, so split JSON chunks reconstruct correctly.
5. Rejects nonempty encoder stderr at the configured error log level even when FFmpeg exits zero.
6. Leaves external encoded frame/PTS/PCM/visual validation mandatory. The renderer ledger hash is format-validated, not independently recomputed by that supervisor.

Pure tests covered missing/duplicate/wrong completion receipts, seven-byte chunk reassembly, terminal-validator failures, encoder error output with zero exit and finalizer status override. These are unit/mock tests, not proof of every OS scheduling interleaving. Later actual phase-v5 allocation failure correctly produced supervisor exit 1/HOLD and reaped children; phase-v8 completed successfully. The renderer's lifecycle EPIPE listener itself was NOT fixed: uncaught EPIPE remains a nonzero failure now correctly rejected by the parent.

## 2. Thread flags and resource budgets are stage-specific
Preserved actual trials:
- Phase v1: renderer observed 17 threads exceeded 16. Motion command omitted --v8-pool-size=1 present in the successful still command. Adding only this flag produced later observed renderer count 14; no cap or image-quality relaxation.
- Phase v2: encoder observed 11 threads exceeded a six-thread watchdog. The first rawvideo input lacked its own -threads 1; the second audio input already had it.
- Phase v3: adding -threads 1 immediately before the first -i pipe:0 still observed nine encoder threads. Per-input decoder threads, x264 output threads and filter threads are different settings; a six-thread decoder proof did not establish a six-thread encoder pipeline.
- A separately authorized encoder watchdog of 12 retained x264 threads 2, audio output/input threads 1 and filter threads 1. Owned PID/start-tick/boot-checked comm-only snapshots bounded the recorded thread roles; no global process scan.
- Phase v4: AS 533,209,088 bytes approached the 512 MiB hard limit. The exact AS versus DATA cause was not proved.
- Phase v5: with AS 1 GiB, x264 failed a 7,332,416-byte allocation; sampled AS 945,733,632 and RSS 156,114,944 did not establish DATA as the cause. VmData was not yet captured.
- Phase v7: a separately authorized DATA-only increase 256→384 MiB reached measured DATA 371,601,408, AS 1,054,416,896 and RSS 268,447,744. The RSS256 MiB watchdog was concretely exceeded by 12,288 bytes; failure and partial were retained.
- Broad phase-v6 metadata had been superseded before execution. Later root approval created a distinct phase-v8 authority rather than reusing the superseded GO.

### Successful phase-v8 envelope and measurements
Encoder: hard AS2 GiB / DATA512 MiB, sampled RSS watchdog512 MiB, threads12, CPU120 s, stack1 MiB.
Renderer: AS2 GiB / DATA384 MiB, sampled RSS384 MiB, threads16, CPU240 s, stack8 MiB, V8 heap128 MiB and --v8-pool-size=1.
Combined child RSS watchdog896 MiB; 360 s pipeline watchdog. These are exact task limits, not recommended universal defaults.

Measured encoder peaks: AS1,068,634,112; DATA385,835,008; RSS284,975,104 bytes; threads11.
Measured renderer peaks: AS1,678,819,328; DATA304,164,864; RSS231,264,256 bytes; threads14.
Both exited zero and were reaped. Separate sampled peaks must not be presented as a simultaneous measured total. RSS/watchdog sampling is not a kernel-hard aggregate or global host/cgroup guarantee. Changing several limits together does not isolate the cause of an earlier allocation failure. No retrospective CPU/wall forecast was invented from the old pilot journal, which lacked those measurements.

## 3. Decoder completeness, diagnostics and inherited limits
QA attempt1 exited HOLD on incomplete decoded/PTS coverage despite decoder exit zero. Sampled AS536,350,720 left only 520,192 bytes below512 MiB—less than one RGB24 frame. Allocation pressure was plausible, not proved: that failed version did not preserve detailed stderr/count diagnostics. Three completed native witnesses remained partial evidence, never full QA.

The next reviewed QA source added bounded additive failure diagnostics (actual ordinals/counts, partial-frame byte count/hash, stderr head/tail, ownership/peaks) and post-reap closure records. JPEGs are encoded in memory, measured against the aggregate QA cap and free floor BEFORE writing; controls have reserved space. A diagnostic failure must still run cleanup.

Successful QA2 used sequential, never concurrent, video and audio decoders:
- Each decoder AS1 GiB / DATA256 MiB, RSS watchdog256 MiB, threads6, stack1 MiB, CPU90 s; 180 s decoder watchdog.
- Clean Python controller launcher: soft AS768 MiB, hard AS1 GiB, DATA256 MiB, stack8 MiB, CPU240 s, core0.
- A child cannot raise its AS above inherited hard AS768 MiB. Explicit controller soft768/hard1024 permits the reviewed child1024 setting. Do not claim the controller hard cap remains768.
- Exact sibling imports support Python -I; no -O, because safety assertions must execute. Explicit runtime inventories include Pillow/native libraries and a pinned label font.
- Both sequential decoders inherit the validated new application lease. Owned cleanup closes stdout/stderr, TERM, bounded wait, KILL/reap if necessary. Deferred cancellation signals cannot asynchronously unwind cleanup.
- Original E03 session52300 and original leases remain OPEN/unmodified; separate scoped scheduling authority never implies their closure.

QA2 sampled video peaks: AS693,350,400; DATA229,584,896; RSS209,514,496 bytes; threads6.
Audio peaks: AS606,015,488; DATA58,990,592; RSS41,136,128 bytes; threads6.
Both decoders exited zero and were reaped.

## 4. Exact identity and the accepted visual/audio scope
Canonical E04 is 27,778 frames / 57 shots / 20,416,536 audio samples at44,100 Hz; 735 samples per frame except final441. Do not carry E03 constants into E04.

Accepted pilot is global frames [2544,2784), native1920×1080 at60 fps with three shutters −1/180,0,+1/180. Encoded output is 1,693,545 bytes, SHA256:
8dd14412632aa8568e14ac2e7f629035b03827b65c301226bc7f03aecc82df5d

Sequential full decode verified all240 ordinals and true container PTS from zero at1/60 cadence, without manufacturing cadence with setpts/fps/select. Audio -copyts/ashowinfo verified zero origin, continuous sample coverage and176,400 samples. Decoded24-bit mono PCM529,200 bytes exactly matched canonical samples[1,869,840,2,046,240), SHA256:
15ede3f35dc82c6f01f35dd54d2240afe173bb98da0153940abe68462c6244b3
Raw PCM identity alone would not establish A/V timing; both checks were required.

Lead actually reviewed five contact sheets containing240 thumbnails plus eight selected native frames. Root viewed all five sheets, native local60/120/164/165/239 and carried earlier native0/14/15 by exact JPEG byte identity. Root accepted connected arm/bandage/grip, intended cuts14→15 and164→165, and readable Arabic in that scope. This does NOT mean full-native anatomy inspection of every frame, real-time playback, subjective listening, all other windows, whole-film/portrait acceptance or publication.

## Evidence identities
All paths below are relative to hakawi_repair/e04-rebuild-20261029:
- Frozen source-v11 identity: 41e81cff34635cb246365c62e46607074de8eca97433f699c52bc92e4346f3f2.
- motion-preflight-v4/FAILURE_REVIEW.json preserves the additive HOLD; original false receipt SHA8e60fa5bde5b3d4fa14ff285832c2fc835a31d18f54086283afba8e174852dd2 remains unchanged.
- motion-preflight-v8/controls/pilot-wrist-2544-2784/OWNED_PROCESSES.json: 1e1fce628a1d60a37c208e6fbec5045a6b5040b55672745b68cb69fcd30fb357.
- qa-attempt2-storage/qa/pilot-wrist-qa-attempt2/TECHNICAL_CLOSED.json: 28b17582d909f059eb5a69f76590dd6ebcab17b8616ec3bb837b6394133440c7.
- AUDIO_TECHNICAL.json in that same directory: 3464f700e5754fc0068c05b274bc1d104da0017af42da62b034bc16a4d8e743a.
- qa-preflight-v2/ROOT_SCOPED_PILOT_ACCEPTANCE.json: 4bacac3a23b0b3e682d46f09a41d9f5db0292c1ab7517e1203262e58b5b56400.
- Failed motion phases1–5/7 and QA1 reports retain their original scope and receipts.

## Recurrence prevention
Before any next window: freeze exact source/inputs/runtime/commands and authority; reserve disk including controls and cleanup evidence; inspect actual process limits and inherited hard ceilings; bind source/output/QA hashes; unconditionally verify both terminal codes, renderer completion and encoder error logs; then decode complete video/PCM/PTS and actually review the declared visual scope. Stop on HOLD, source/cap drift or incomplete proof. Never automatically expand a cap, silently recycle evidence or infer a new production exception from an old recovery.

Related: [E03 terminal/pipe history](HAKAWI-E03-LONG-TIMESTAMPS-PIPE-BLOCK-20261030.md), [E04 donor-mask lesson](HAKAWI-E04-TAG-MASK-20261030.md).
