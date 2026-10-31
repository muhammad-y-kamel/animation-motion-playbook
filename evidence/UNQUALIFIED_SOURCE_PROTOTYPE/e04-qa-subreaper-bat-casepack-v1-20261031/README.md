# Separate BAT qualification casepack and retained-pidfd exit proposal

15 explicit qualification cases are NOT RUN. This casepack is not a live harness or execution grant. Current host remains no-live-child/native/media/registry/lease testing. Fake tests only use AS128MiB/CPU30 bounds. The frozen synthetic source prototype remains unchanged; deterministic pause/fault-injection hooks and an independently owned observation harness must be separately implemented/frozen/admitted before relevant live cases. Do not claim coverage from cases not supported by the current source.

## More precise disposition for the lost-report gap
Primary Linux man-pages describe process pidfd polling as readable after termination, and hangup after reaping. With flags0 rather than PIDFD_THREAD, readiness occurs after the last thread in the group exits. Source: https://man7.org/linux/man-pages/man2/pidfd_open.2.html . These documented semantics need confirmation on the actual BAT kernel/runtime before operational use.

An originally registered, continuously retained PROCESS pidfd can therefore support a distinct `EXIT_OBSERVED_VIA_RETAINED_PROCESS_PIDFD_NO_OWN_REAP` disposition if own wait reports ECHILD and valid qualified poll events establish exit. This is stronger than a later numericPID or namespace lookup, but it is NOT an own wait/reap result, exit code, normal controller-reap attribution, successful decoder receipt, or QA acceptance. POLLNVAL, POLLERR, unknown flags, lost/reopened descriptor, thread-pidfd or unknown provenance remains HOLD.

Pure classifier requires explicit qualified-kernel and root-policy inputs; even its positive result never authorizes lease release. A future separate policy must evaluate every owned target, adopted descendants, controller closure, retained ownership/lease and durable failure terminal before deciding whether this failure-only disposition permits release. It must never set observedReaped/allOwnedChildrenObservedReaped merely from exit readiness. All associated output remains failed/unaccepted without normal complete QA.

Current002r1 and005r3 UNKNOWNs have no continuously retained process pidfd in this owner. This proposal has NO retrospective application and does not lift current HOLD. Supervisor/tool loss also destroys the needed continuity; reopening a same-number PID cannot repair it.

## Casepack evidence rules
Each live case needs exact new BAT source/runtime/config/GO hashes, current boot/namespace and original owner identity, original pidfd provenance/creation flags, raw event masks, actual wait results/errno, exact child/resource/lease ACKs, bounded telemetry, terminal and cleanup outcome. Separate testharness must retain original descriptors before intentionally killing supervisor/controller. No hostmemory stress; resource threshold branches are fake injected tests. Every case status starts NOT_RUN. Partial/hung/unresolved cases stop further admission; no automatic new unknown accumulation.
