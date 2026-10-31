# Same-boot interruption and namespace ambiguity — unresolved HOLD

Source-only staged lesson from three closed E04 observations; not a proven recovery fix, not yet archived or appended to GitHub. Exact metadata hashes are in EVIDENCE_HASHES.json. Original partial images and records remain unchanged.

Interrupted fullfilm-002 QA session57233 returned an unknown-session result after a tool/environment interruption. Current boot remained01b20354-c996-45bd-a52d-4fbd4c679fce. Original recorded decoder PID7/startTick2310933 did not have a terminal/reap receipt. The new namespace's absence of PID7 is not evidence about the original namespace identity. Thirteen partial files do not establish complete QA or successful exit.

The wrapper's pass_fds establishes initial inherited lease-FD transfer at exec. Retained evidence does not establish that FFmpeg kept that FD throughout its lifetime. Normal controller finally/reap logic does not prove closure after the controlling execution session disappears. Therefore a presently free flock cannot establish absence of the old decoder. Reusing the same boot or observing a reappeared workspace likewise does not establish host process teardown.

The supported host-identity check could not execute because of infrastructure failure; no denied path was accessed and no workaround was attempted. This is an observation limit, not evidence of successful cleanup. Current disposition remains RECOVERY_EXCLUSION_HOLD_NO_QA_RETRY; no archive heavy I/O or media retry under the old exclusion contract.

Prevention candidate, not a tested repair: admission should explicitly model interruption and original-process visibility/lifetime evidence, retain boot+namespace-aware identities and actual terminal/reap receipts, and distinguish inherited lock intent from observed lock lifetime. A future source-only recovery design requires independent review and separate authority; neither changing a lock inode nor treating unknown as absent is a valid repair.

Any later supported cleanup or exact-scope policy revision must be an additive new receipt. It must not relabel the interrupted attempt as successful, erase partials, or confer fullfilm/listening/real-time acceptance.
