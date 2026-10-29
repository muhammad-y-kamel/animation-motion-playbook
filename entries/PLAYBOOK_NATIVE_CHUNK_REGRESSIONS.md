# Native portrait chunk regressions — 2026-10-29

## Independent stage memory
Do not initialize the incoming native portrait Stage while retaining the outgoing Stage. A prior dual-stage proof exhausted memory (exit137). The production runner clears both stage references, forces GC under `node --expose-gc`, yields once, then initializes the next scene. A synthetic WeakRef two-scene test verifies the previous Stage is collectible. Each production chunk uses a fresh process; actual pilot maximum RSS was441MiB. This is a lifecycle correction, not reduced resolution or motion samples.

## Exact stream-copy concat cadence
Source:133 variable-length native60fps slots, each encoded at timescale60000. First assembly had identical decoded pictures, but final cadence verifier detected accumulated17microseconds (one timestamp tick) in part1. Per-clip duration conversion to concat-demuxer microseconds accumulates rounding.

Proven repair: each ffconcat duration is `round((endFrame-partFirst)*1e6/60) - round((firstFrame-partFirst)*1e6/60)` microseconds. This uses cumulative endpoints rather than independently rounded durations. Video remains stream-copied; exact canonical PCM cuts remain unchanged. All15,855 final presentation timestamps are exact multiples1000 at1/60000; every decoded frame matches its selected source chunk and PCM slices match exactly. Keep the failed assembly reports, do not waive the cadence assertion or re-encode pictures to hide the issue.

Evidence: `CONCAT_MICROSECOND_ROUNDING_REPAIR.json`, `assemble-composed-v2.py`, final-v2 `ALL_PARTS_PIXEL_TIMELINE_IDENTITY.json` and per-part `ASSEMBLY.json`.

## Actual output hand tangent
Finite source gates did not prevent an accidental empty-hand tangent in final native portrait denial staging. Actual global19195 review identified unintended handholding. Isolated frozen0313 shifts Yaser40px only within the existing318.16–346.88 shot; outside branches stay unchanged. Source contour scan5,169 temporal samples measured at least27px separation. More importantly, all1,790 actual replacement frames and outer joins independently passed. Only15 exact slots were adopted; original0240 source/chunks remain preserved. No full rerender or source mutation was necessary.

## Locks and provenance
Kernel locks must survive parent loss: inherit the per-chunk lock descriptor through Node to FFmpeg. Namespace-local `ps` cannot establish termination. Atomic reservations refuse uncertain incomplete output; reconcile lock ownership, session state, advancing logs and final container validity before retrying. Hash source, data JSON, font, canvas addon/runtime binaries and actual runtime assets; don't claim an entry-file hash covers runtime aliases.
