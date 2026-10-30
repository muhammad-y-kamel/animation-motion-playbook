# HAKAWI E03 long — concat timestamp normalization, atlas-label diagnosis and blocked pipe cleanup
- Observed: 2026-10-30; compiler snapshot 09:23 UTC.
- Status: timestamp repair technically proven; atlas mapping diagnosis proven for named witnesses; actual native-join process recovery **BLOCKED / NOT PROVEN**.
- Current main read before this additive update: 4a4f8a32ff21dc033771b7e08725963ca3df7c1d.
- No failed media/report/history is replaced by this entry. No media or credentials are uploaded.

## 1. Uniform timestamp shift despite contiguous video packets
### Symptom, cause and discovery
`discovered_by: agent`, strict actual final timestamp validation and packet diagnosis. The long mixed AAC/ALAC concat had all 27,922 video packets and no DTS discontinuities, yet every video PTS was shifted by +1392 ticks. Counting frames or checking cadence alone would falsely accept it.

The concat input began at video PTS 0, video DTS -2000, and audio PTS -1024 at timebase 1/44100. FFmpeg input timestamp normalization considered the earliest audio priming time even though that audio stream was not the intended mapped final audio. The result was a uniform video-origin shift. Negative B-frame DTS is not itself corrupt video.

### Trials and validated fix
- Preserve the failed output (74,429,930 bytes recorded in the source plan); do not relax exact PTS validation.
- Create a new candidate output directory rather than overwriting the failed file.
- Add global `-copyts` and output `-avoid_negative_ts disabled`; **do not add `-start_at_zero`**, which would reintroduce normalization in this proven command context.
- Keep original source/config/video/QA pins and strict canonical validation; require the separately approved candidate runtime/AUTH.

`runtime/long-v22-copyts-candidate-0904/SOURCE_PLAN.json` deliberately remains a historical **SOURCE_ONLY_NOT_MEDIA_PROVEN** plan with actualCopytsMux NOT_RUN. Later real output evidence, not rewriting that plan, establishes the successful trial.

Actual `runtime/long-v22-production-PENDING-GO/final-assembly-copyts-v2/COMPLETE.json` records:
- 27,922 frames, exact PTS and DTS.
- 22,553 outside frames and 5,369 replacement frames exact to their approved decoded baselines.
- 27,897 exact packet payloads; 25 packets differ only by identical parameter-set insertion, with equivalent NAL content.
- Canonical presented audio 20,522,376 samples, final real video-frame coverage 441 samples.
- Five bounded AAC alignment windows have best lag zero; AAC byte identity and subjective listening are explicitly false.
- Final SHA256 `2a3f4119af00ad10d68fcedd2de682c4444d9c53dd1aa710c1439c3d323404ac`.
- COMPLETE SHA256 `7a9bd443cbbffc6a13f5ff9b29e2b2bb51401c4d9421d142583b91735da7c953`.
- Status remains **TECHNICAL_FINAL_CLOSED_JOINS_QA_PENDING_NOT_PUBLISHABLE**. Technical success is not complete visual/native-join acceptance or release.

### Prevention
Inspect origin and cadence separately, including *unmapped input streams* and codec priming. Verify all output PTS/DTS, decoded frame identity, packet/NAL compatibility and canonical audio coverage after any mux-option change. These options are a tested repair for this exact input/command, not a universal timestamp recipe.

## 2. Whole-sheet display slicing can create a false adjacent-label association
### Observation and diagnosis
A whole-sheet display suggested an adjacent-frame/cut offset. Exact diagnostic `qa/long-v22-production/MAPPING_DIAGNOSTIC_0849.json` instead proved correspondence by sequential decoded ordinal, PTS, MD5 against the closed full-decode baseline, and scaled-frame versus JPEG-tile MAE.

Witnesses: global 11111/11112 and 11346/11347/11348, mapped by global=9930+local without timestamp seeking. Corresponding local indices/60Hz PTS were 1181/1182 and 1416/1417/1418. JPEG tile MAE was approximately 4.37–4.43, consistent with the actual comparison, not a claim of byte-identical JPEG pixels. The established cuts are 11112 and 11348; 11111 is the table shot and 11112 the kitchen shot. Native selection used select(n), atlas extraction trim(start_frame). There was no established offset bug to patch.

Discovery attribution: the initial display suspicion's first reporter is not established by this diagnostic alone; the exact mapping investigation is an agent diagnostic. Preserve the suspicion separately from the disproved offset hypothesis.

### Prevention and scope
Do not change a renderer, seek offset or caption/frame label because of a sliced sheet view alone. Inspect the exact numbered tile and independently decode the ordinal/PTS with a closed baseline. This diagnostic proves five witnesses plus their baseline correspondence; it is not a new whole-film visual review.

## 3. Correct byte guard, unsafe pipe cleanup: actual recovery still blocked
### Observed failure and mechanism
The native-join 32 MiB global QA guard correctly stopped **before writing the 39th JPEG**, retaining 38 proofs. The old cleanup then called terminate();wait() without closing stdout and without a timeout. A decoder blocked on a full stdout pipe can fail to exit while its parent waits, retaining both inherited kernel locks.

Reported decoder 52300 and both locks remained unresolved at this entry's snapshot. Host/process visibility is not supported in the current execution context. Namespace-local process absence is not proof of host termination. **No successful actual decoder termination, lock release, or resumed 18-frame extraction is claimed.** Do not attempt unsupported host control or start a duplicate process.

`discovered_by: agent`: extraction/resource failure and cleanup investigation. This entry does not convert an environmental visibility limitation into a successful repair.

### Source fix and tests — narrowly proven
Source candidate `runtime/long-v22-copyts-candidate-0904/resume_missing_18.py`:
1. On exception close the owned stdout pipe.
2. Request TERM of the owned child.
3. Wait with a 5-second timeout.
4. On TimeoutExpired, kill the owned child and reap it.
5. Preserve partial receipts and re-raise; do not call the incomplete extraction reviewed.

`PIPE_CLEANUP_TEST_0920.json`: own synthetic pipe writer, child reaped in about 0.019 s, no forced kill needed.  
`PIPE_FORCED_KILL_TEST_0920.json`: synthetic writer ignored TERM and broken pipe, forced-kill fallback reaped it with return code -9. No real decoder/media/shared locks were used.

These **two synthetic tests pass**. They demonstrate the cleanup pattern for owned test children only. They do not unblock the existing decoder, release historical locks, or authorize a real resume. Source fix and actual recovery must have separate receipts.

### Byte-budget discipline
For JPEG output, encode to an in-memory buffer first, compute exact encoded bytes, and check subbudget + global cap + metadata margin + free-space reserve **before writing**. A root diagnostic derivative set reached approximately 2.503 MB before an after-write assertion caught its 2 MiB subbudget breach; the global 32 MiB ceiling remained intact, but that does not make the local overshoot compliant. Preserve the failed budget assertion. Global headroom is not permission to ignore a narrower approved budget.

The resume candidate uses buffered JPEG encoding and guard(len(data)) before p.write_bytes(data), preserving existing output on stop. This guards future writes; it does not retroactively fix the previous local overshoot.

## Stage checklist / evidence boundaries
- Test cleanup with a pipe-filling child and with a child that resists TERM; close unused pipe endpoints and bound waits.
- Inherit both global locks into actual media children; don't assume killing a controller releases descendants' descriptors.
- Before real resume, establish original child/lock closure through supported execution evidence and separate authorization. If unavailable, report BLOCKED, preserve bytes and wait for supported resolution.
- Reuse only identity-verified closed work; maintain exact 38-existing/18-missing accounting.
- Preserve technical mux closure, selected mapping diagnostics, synthetic cleanup tests and actual join review as distinct evidence classes.
- No ASR, subjective listening, continuous real-time playback, full native-join visual acceptance, platform publication or successful actual deadlock recovery is claimed here.

## Update history
2026-10-30 09:23 UTC: documented actual timestamp/NAL/audio technical pass and exact mapping diagnosis; recorded pipe cleanup as synthetic-only with actual recovery BLOCKED. Later real recovery must append evidence rather than erase this failed/pending state.

Related: [E03 immutable/mixed reuse](HAKAWI-E03-IMMUTABLE-MIXED-REUSE-20261030.md), [native chunk regressions](PLAYBOOK_NATIVE_CHUNK_REGRESSIONS.md).


## Additive outcome — 2026-10-30 10:14 UTC: media accepted, original cleanup still OPEN
This update supersedes the earlier *media-recovery pending* state only. It does not erase the failed attempts or close the original session/locks.

### Explicit isolated recovery and measured trials
Root authorized a one-time **application-scheduling coexistence exception** for the exact 17 missing native witnesses. Original session 52300 was still reported RUNNING and both original shared locks remained HELD with unchanged inodes. The exception did not claim free locks, change lock permissions/inodes, target guessed host PIDs, or bypass security access controls. Media was immutable and read-only; the new child had its own ownership/PID journal, bounded output, process-local limits and safe reap. Previously reviewed derivative evidence was archived/released to make room under the unchanged QA ceiling rather than silently enlarging it.

Preserved sequence:
1. A 256 MiB address-space trial failed allocation. No claim of successful recovery.
2. A 512 MiB address-space trial with default stack failed pthread creation with EAGAIN. The full causal chain of EAGAIN is **not proved**; do not assert that stack alone universally explains it.
3. Synthetic CPU-count/slice variants failed and were **not adopted**.
4. The exact approved actual trial using 512 MiB address-space limits for each process, a 1 MiB child stack limit and the existing generic threads=1 configuration succeeded. This is a task-specific result, not a universal FFmpeg default. Generic threads=1 did not imply a one-thread process: observed thread count was six.

The new recovery child exited 0 and was reaped. Observed child VmPeak was 521,364 KiB, VmRSS 119,568 KiB, and Threads 6. These are observed process measurements, not proof of total cgroup capacity, complete host accounting or global process closure. Host MemAvailable was not relabelled as an enforced container memory limit. All failed recovery receipts remain preserved.

### Actual review and technical acceptance now closed
`qa/long-v22-production/LONG_V22_FINAL_MEDIA_ACCEPTANCE_0946.json` records:
- All 5,369 changed presentations actually reviewed, with exact final parity to approved replacements; 22,553 outside frames carried by exact decoded identity.
- All 56 native join witnesses actually reviewed: 24 + 14 retained stable witnesses, one exact prior native frame26100 carry, and 17 newly recovered witnesses.
- Strict all-27,922-frame technical, packet/NAL and canonical-audio checks passed for the same final SHA256 `2a3f4119af00ad10d68fcedd2de682c4444d9c53dd1aa710c1439c3d323404ac` (74,429,926 bytes).
- New recovery child EXIT0_REAPED; original session OPEN_UNRESOLVED and original locks STILL_HELD_UNMODIFIED.
- No subjective listening claim. AAC alignment is not byte-identical lossy PCM, ASR or a new continuous playback review.

The 09:46 acceptance artifact itself still says durability/publication pending; it must not be rewritten to pretend it already contained the later external verification. Root subsequently verified durable Space version 2 and YouTube scheduling for `kisAuZYFOEc` on **2026-11-11 at 19:00 Cairo**, with the superseded item identified by root as `UF-MX` set Private. This is attributed root platform verification, not a new independent browser check by the compiler. Scheduled is not already public.

### Separate lifecycle debt remains open
Original session 52300 and its held leases remain an independent cleanup incident. Successful output review, storage and scheduling do **not** imply that old processes were stopped or locks released. No continued-production exception is inferred from the one-time recovery approval. Any future work must reconcile live ownership/resource needs and obtain its own scope/resource decision; never automatically reuse an exception or silently replace a lockfile.

### Future source-only lifecycle contract
Source proposal `playbook-draft/DECODER-LIFECYCLE-CONTRACT-20261030.md`, SHA256 `33c7ae78b8f5de0e8cafdf54f326deccf5ab171326ed66b04354247045047ad7`, records these requirements for future decoders:
- Journal exact input/ordinal/authorization/output identities and verified newly owned PID, namespace, start time and process group where supported.
- Cover process creation, pipe reads, image conversion, budget checks and cleanup with an exception-safe lifecycle and monotonic total deadline; use bounded/nonblocking I/O and bounded stderr logs.
- Close/drain pipes, TERM only the verified owned child/group, wait at most five seconds, then bounded kill/reap fallback; failure receipts must report actual closure rather than assume it.
- Retain original application lease identities until inheriting children really close. Explicit coexistence authority is not a security exemption or evidence of old lease release.
- Pre-encode JPEG bytes and reserve metadata/telemetry before writing; prefer small exact-frame batches with actual review/archive/release between them.
- Test stdout saturation, budget exceptions, timeout/controller interruption, refusal to allocate beyond declared limits, retained completed hashes and eventual lock availability only after true closure.

That document is **source-only future engineering**, not proof that every proposed test was run, not permission to change system limits, and not a fix for the still-open original process. Preserve the distinction between proved one-time media recovery and unclosed lifecycle debt.
