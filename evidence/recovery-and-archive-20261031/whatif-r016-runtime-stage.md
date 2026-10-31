# WhatIf R016: reactive RSS admission and exact-owned cleanup

Closed runtime stage, 2026-10-31 04:21:30 UTC. Root pixel verdict is separate and pending at this log's creation; nothing here implies full-cellar or motion acceptance.

## Context and limits
An older E04 QA attempt has unknown terminal state. A free lease is not proof of absence. This narrow new invocation explicitly reserves 2 GiB for that old controller plus one sequential decoder, plus 2 GiB host safety. Root accepted sampled/reactive monitoring and residual intersample/scheduling/OOM overshoot risk, not hard physical isolation. New parent RSS cap 384 MiB; parent+sole Node sampled envelope 2 GiB; MemAvailable thresholds 6 GiB pre-spawn and 4 GiB running. The original child AS 2 GiB, DATA/RSS 384 MiB, thread16, 32 MiB aggregate proof, 8 MiB per PNG, temporary reservation and per-write disk/font guards remained unchanged.

One common risk-execution registry is used by E04/Prophets/WhatIf. Any new STARTED without its hash-bound returned TERMINAL blocks another invocation. The registry START is created under the shared lease; TERMINAL follows base-owned child reap and the actual journal, while the lease is still held. No guessed PID, namespace kill, or retroactive old-attempt closure is permitted.

## Rejected v1 and additive v2
Independent source audit caught three inherited/adapted exception-path faults before media:
1. A cleanup retry slept one second without monitoring, potentially violating the declared one-second cadence.
2. Cleanup-monitor errors could be retained only as telemetry while the final status still claimed success.
3. A TERM error could exit the cleanup helper before the KILL deadline, causing indefinite repeated TERM attempts.

V2 kept the original frozen rejection and changed only the new admission: retries use ten monitored 50 ms slices; cleanup threshold errors force failure; escalation uses a fixed three-second deadline independent of TERM success. Both TERM and KILL remain restricted to the base-owned Popen with verified start tick. Identity uncertainty retains the lease and never authorizes fallback signaling. Injected TERM-always-fails/KILL-succeeds tests demonstrated exact child reap with failure retained. Injected wrong identity produced no signal. These are fake-process tests, not new real child lifecycle torture runs.

Normal wait-monitor errors propagate immediately into base cleanup. Monitor attachment happens only after Popen has been assigned to the base owner. During cleanup, monitor errors are recorded without skipping original stop/wait/reap. Registration failure also leaves a base-owned child available for cleanup.

## V3 diagnostic correction
A real cadence failure in another project's attempt exposed a shared diagnostic weakness: rejection occurred before recording the violating interval. V3 records max gap/last time before raising and includes the actual duration in the error. The threshold stayed unchanged. An independent pure regression verifies a 1.01-second violation appears in the report. V2 source admission remained preserved; v3 was independently rehashed and approved for an exact root gate.

## Actual bounded result
Exact R016 twelve static native PNGs (six portrait, six landscape) executed once under a new root risk GO and fresh E04 gap. Actual source uses sixteen HTML scripts and the main player/painter; pure twelve-witness plan parity imported no Canvas. Runtime completed with sole Node PID5/startTick2674185 exit0, observed reaped, no cleanup errors. All twelve actual native PNG hashes/headers and receipt fields independently verified; total proof 3,713,714 bytes.

Observed 27 reactive samples: parent peak 43,487,232 bytes; new aggregate peak 199,467,008; minimum MemAvailable 7,603,208,192; maximum live monitor gap 0.102125248 seconds. These are observations, not guaranteed intersample bounds. Shared registry terminal binds START and journal; old E04 attempt remains UNKNOWN.

Actual journal SHA256: 4278fe4fa6daec907bf53f7d315c8310f82b132183cc1e950105519b3fb2f388.
Actual receipt SHA256: a10898b8f3664761107585b7a66d9c7b16bedb2024b267ecfa32ff7d8c0c6a19.
Registry terminal SHA256: a78b51a51c97ec4202490706f80968c78499cce2429314e91a9b9829ab7323f3.

## Regression policy
Do not raise cadence thresholds or silently retry a failed unknown attempt. Keep breach-inclusive telemetry, the common registry, and the old unknown reservation. Test normal and cleanup monitor failures separately; successful reap does not erase a threshold breach. Preserve rejected candidates and scope visual acceptance separately from technical resource success. This sole-Node proof does not grant motion/registered-grandchild authority or full-film publication.
