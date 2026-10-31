# WhatIf main E — cadence rejection and bounded diagnostic retry

Closed evidence through 2026-10-31 05:27:52 UTC. This is not a claim of an identified scheduler defect or a cured resource problem.

## Observed failure
The first portrait E attempt safely rejected a 3.0183292379988416-second monitor gap while the owned worker and registered encoder were live. The worker terminated, encoder was reaped after SIGKILL, remaining owned identities were empty and ECHILD was confirmed. No probe/decode or actual native72 proof existed. The failed receipt and registry terminal remain immutable.

The original gap interval included normal loop observation, registration draining, thread scans, output stat, lease checks and sleep, plus the next checkpoint's controller limits, control hashes, identities and prlimit work before reading the clock. No per-stage wall/processCPU data was captured. Therefore scheduler delay, blocked synchronous filesystem work and instrumentation time cannot be distinguished. RSS and MemAvailable extrema were from successful checkpoints, not measurements at the rejected interval.

## Rejected diagnostic candidate
Diagnostic v2 wrapped bounded monitor/loop phases with monotonic wall and parent processCPU measurements, but assigned the cadence snapshot on every violation. A later cleanup breach could overwrite the initiating rejection. Independent source review rejected that telemetry behavior; no media was run with it.

## Additive diagnostic v3
V3 retains the first rejecting checkpoint snapshot and counts later breaches separately. Bounded recent/slowest phase histories are held in memory; no live diagnostic disk writes were added. The one-second limit, original renderer, 72 frames, 60fps, three shutters, native resolution, output caps and registered-child cleanup remained unchanged. The field named firstCauseSnapshot denotes first rejecting checkpoint evidence, not proven root cause. Parent processCPU excludes worker/children; wall minus parentCPU is not scheduler attribution.

Independent pure tests verified first-snapshot retention across a later cleanup violation. Exact source/admission and separate root retry authority preceded execution.

## Actual retry result and limits
The one authorized diagnostic-v3 E retry closed successfully with all registered identities terminal, empty remaining list and ECHILD. Its 72 actual native frames, stream/decoder PTS, three explicit central topology fallbacks and 12 raw-RGBA overlap frames with D were independently checked. Lead reviewed all72 actual decoded images chronologically; root viewed022/041/053/072 and accepted only the discrete floor-support→withdrawal→initial-rise window. No normal-speed playback, listening, full recovery or full-cellar acceptance follows.

The successful retry had no cadence rejection and does not establish why the earlier attempt failed or whether it will recur. Original old E04 unknown work reservation and reactive/inter-sample risk caveats remain in force. New attempts still require exact authority, a clear shared registry, fresh resource checks, exclusive media ownership and closed archive writers.
