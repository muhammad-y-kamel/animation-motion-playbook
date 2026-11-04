# Mine historical caption streaming: 64-frame guard failure and unresolved descendant ownership

On 2026-11-04, an exactly admitted 64-frame video-only caption fixture (global 17899–17962, patch only 17939) exceeded the unchanged sampled aggregate 1 GiB RSS limit. The recorded peak was 1,083,850,752 bytes. The 90-second wall and 64 MiB output ceilings were not raised. PLAN 0f741c93b886f0f74a5fdaf50714a5e6a9e5ef38c782018a91c7d02133820db2.

The prior streaming16 fixture had passed numeric comparison with its buffered baseline and selected-six actual image review, peaking at 653,164,544 bytes. That did not prove 64 frames would fit. Files and source ordering locate the new failure in the paired-decoder audit after encoding: preencode witnesses and video existed, but only the first encoded witness was written. There was no per-process/phase telemetry, so the exact offending frame and allocation owner remain unknown. No claim that encoding itself exceeded the guard is warranted.

The durable failure receipt reaped the direct worker after SIGTERM, but its immediate group census retained two descendants and waitpid reported adopted children still live or unreaped. acceptedTechnicalClosure and laneReleased are false. The cleanup implementation waits for the leader and takes one census; a leader that exits promptly can leave descendants still exiting without reaching its timeout-kill branch. This is unresolved ownership, not merely a clean technical failure.

Do not retry, raise limits, erase the receipt, or call cleanup from a fresh execution namespace. Absence of the old PID in another namespace is not authoritative termination evidence. Only appropriate original-instance evidence can resolve ownership; any later cleanup improvement is prospective and cannot relabel this failure.

Source-only work is preparing bounded verified-descendant cleanup and per-process/phase telemetry with independent fake-process tests. These are proposals, not a proven remedy. No further media was launched after the failure. Existing published/scheduled uploads were untouched.

Failure snapshot: Mine_Short04_Stream64_Guard_Ownership_HOLD_20261104.zip, 1,709,775 bytes, SHA256 03254adca3573f25cdb6cac90927db9c585af2ceb5158c63369edf7e10e5d4c5. It preserves partial output and exact failure evidence, not a completed accepted video.

Related but distinct: [terminal observed-wall enforcement](MOKI-EP010-V7-TAIL-RGB-TERMINAL-WALL-20261103.md). This event concerns descendant cleanup and scaling evidence, not that earlier polling-time defect.
