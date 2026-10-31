# ANIM-0022 — Cleanup must preserve failure and the first rejecting checkpoint
- Projects / category: WhatIf, E04 and archive adapters / exact-owned cleanup, reactive monitoring and diagnostics.
- Status: `validated_with_limits` for the named source regressions and bounded new executions; no old-process closure or scheduler-cause claim.
- `discovered_by: reviewer` for the pre-execution cleanup and snapshot-overwrite defects; actual cadence failures were detected by agent runtime guards.

## Rejected mechanisms and additive trials
WhatIf R016 runtime v1 was rejected before media: an unmonitored one-second cleanup sleep could violate the declared cadence, cleanup-monitor errors could leave a success status, and a TERM error could prevent KILL escalation. V2 used monitored 50 ms slices, made cleanup threshold errors failures and kept a fixed three-second escalation deadline independent of TERM success. Fake-owned-process tests demonstrated TERM failure followed by KILL/reap, while wrong identity caused no signal. These are mocks, not actual lifecycle torture runs or authority to signal old/guessed identities.

The separate archive adapter retained its own exact direct-Popen semantics and two-second escalation deadline; it did **not** inherit identical identity rules or media authority merely because the high-level lesson is shared. Preserve each actual frozen contract.

R016 v3 then fixed diagnostic ordering: record the violating gap before raising. An independent pure 1.01-second regression verified it appeared in the report without increasing the one-second threshold. The actual twelve-static-image invocation closed with the sole Node exit0/reaped: 27 observed samples, peak new RSS 199,467,008 bytes, minimum MemAvailable 7,603,208,192 bytes and maximum observed gap 0.102125248 seconds. These observed extrema are not continuous bounds. The copied stage log's root-pixels-pending statement is preserved; the separate later root receipt accepts only twelve named static views.

## WhatIf E: successful retry is not a proven cause or cure
The first E attempt rejected a **3.0183292379988416-second** monitor gap while its worker and registered encoder were live. Both were ultimately reaped, the owned list was empty and ECHILD confirmed. No native72 proof existed for that attempt. Prior RSS/MemAvailable extrema were successful checkpoints, not measurements at the rejected interval.

The interval included controller observation, registration draining, thread/output/lease checks, sleep and subsequent control/identity/prlimit work. Without per-stage wall and parent processCPU measurements, scheduler delay, synchronous I/O and instrumentation cost could not be separated.

Diagnostic v2 was rejected before media because each later cleanup violation could overwrite the initiating snapshot. V3 retained the **first** rejecting checkpoint and counted later breaches separately, with bounded in-memory phase histories and unchanged cadence, source, resolution, shutters, caps and cleanup. The field `firstCauseSnapshot` names first-rejection evidence, not demonstrated causality; parent CPU excludes children, and wall minus parent CPU is not scheduler attribution.

The separately authorized v3 retry passed technical checks, 12 raw overlap frames and lead 72/root 4 discrete review. It had no cadence breach. That result neither explains nor proves elimination of the earlier failure, and does not establish normal-speed playback, listening or full-scene acceptance.

## Prevention and regression
Retain the actual initiating failure; do not replace it with cleanup telemetry. Update breach-inclusive diagnostics before throwing. Test normal-monitor and cleanup-monitor failures separately, TERM errors, fixed-deadline KILL and identity uncertainty under the exact owner contract. Preserve failed runtime versions and terminal records. New root authority, clear common registry, fresh host checks and exclusive ownership remain necessary; synthetic or successful new evidence never upgrades old UNKNOWN.

## Evidence and update history
Copied unchanged R016 runtime/root reports and E cadence stage log, with exact SHA256 values: [manifest](../evidence/recovery-and-archive-20261031/manifest.json). 2026-10-31 additive compilation; visual findings are attributed to recorded reviewers, not newly viewed by the compiler.
