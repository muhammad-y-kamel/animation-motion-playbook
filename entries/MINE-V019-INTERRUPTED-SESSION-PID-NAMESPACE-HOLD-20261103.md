# Interrupted Mine render: missing session is not a cleanup receipt

Date: 2026-11-03. Open recovery finding, not a proven repair.

## Observed failure
The first Mine V019 Short4 production chunk requested 1,800 frames from global frame16613. After an execution interruption, its session9444 became unknown to the session tool. The output remained at 1,141 frames, last progress21:17:58UTC. A partial Matroska file existed, but no render terminal receipt or ADMISSION_OWNED receipt had been written. The supervisor record still said OWNED with cleanupVerified:false.

## Checks and limits
Both ordinary and permitted escalated process inspections showed a fresh per-command codex-linux-sandbox PID namespace. Their process lists could inspect only that new namespace. They did not establish that the original renderer or encoder was absent or reaped. No recorded PID was targeted from the wrong namespace. The original render deadline passing was also not treated as proof of cleanup.

## Safe response taken
Preserve the partial output and its exact progress, original ownership records, hashes and timestamps. Hold new media launches pending reliable termination/reset evidence. Continue source-only preparation. Do not overwrite the attempt, fabricate a successful receipt, accept its partial video, or blindly retry the same output path.

The consistent snapshot archive SHA-256 is 3d28519a567435f1e56977eb7b106b473dcaa3102e1766a0e76f11a772cee66f. Before/after file hashes and ZIP CRC passed; persisted metadata was verified. Snapshot consistency is not process-termination evidence.

## Remaining blocker
Obtain authoritative original-session cleanup or environment-reset/termination evidence before releasing the exclusive media lane. No recovery render or completed replacement is claimed in this entry.

This supplements the existing terminal elapsed-time polling checks rather than replacing them: a guard inside an inaccessible interrupted execution is not the same as an observed terminal cleanup receipt.
