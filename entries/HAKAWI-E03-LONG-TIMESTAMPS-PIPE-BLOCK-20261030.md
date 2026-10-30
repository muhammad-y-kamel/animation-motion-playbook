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

Witnesses: global11111/11112 and11346/11347/11348, mapped by global=9930+local without timestamp seeking. Corresponding local indices/60Hz PTS were1181/1182 and1416/1417/1418. JPEG tile MAE was approximately4.37–4.43, consistent with the actual comparison, not a claim of byte-identical JPEG pixels. The established cuts are11112 and11348;11111 is the table shot and11112 the kitchen shot. Native selection used select(n), atlas extraction trim(start_frame). There was no established offset bug to patch.

Discovery attribution: the initial display suspicion's first reporter is not established by this diagnostic alone; the exact mapping investigation is an agent diagnostic. Preserve the suspicion separately from the disproved offset hypothesis.

### Prevention and scope
Do not change a renderer, seek offset or caption/frame label because of a sliced sheet view alone. Inspect the exact numbered tile and independently decode the ordinal/PTS with a closed baseline. This diagnostic proves five witnesses plus their baseline correspondence; it is not a new whole-film visual review.

## 3. Correct byte guard, unsafe pipe cleanup: actual recovery still blocked
### Observed failure and mechanism
The native-join32 MiB global QA guard correctly stopped **before writing the39th JPEG**, retaining38 proofs. The old cleanup then called terminate();wait() without closing stdout and without a timeout. A decoder blocked on a full stdout pipe can fail to exit while its parent waits, retaining both inherited kernel locks.

Reported decoder52300 and both locks remained unresolved at this entry's snapshot. Host/process visibility is not supported in the current execution context. Namespace-local process absence is not proof of host termination. **No successful actual decoder termination, lock release, or resumed18-frame extraction is claimed.** Do not attempt unsupported host control or start a duplicate process.

`discovered_by: agent`: extraction/resource failure and cleanup investigation. This entry does not convert an environmental visibility limitation into a successful repair.

### Source fix and tests — narrowly proven
Source candidate `runtime/long-v22-copyts-candidate-0904/resume_missing_18.py`:
1. On exception close the owned stdout pipe.
2. Request TERM of the owned child.
3. Wait with a5-second timeout.
4. On TimeoutExpired, kill the owned child and reap it.
5. Preserve partial receipts and re-raise; do not call the incomplete extraction reviewed.

`PIPE_CLEANUP_TEST_0920.json`: own synthetic pipe writer, child reaped in about0.019s, no forced kill needed.  
`PIPE_FORCED_KILL_TEST_0920.json`: synthetic writer ignored TERM and broken pipe, forced-kill fallback reaped it with returncode-9. No real decoder/media/shared locks were used.

These **two synthetic tests pass**. They demonstrate the cleanup pattern for owned test children only. They do not unblock the existing decoder, release historical locks, or authorize a real resume. Source fix and actual recovery must have separate receipts.

### Byte-budget discipline
For JPEG output, encode to an in-memory buffer first, compute exact encoded bytes, and check subbudget + global cap + metadata margin + free-space reserve **before writing**. A root diagnostic derivative set reached approximately2.503 MB before an after-write assertion caught its2 MiB subbudget breach; the global32 MiB ceiling remained intact, but that does not make the local overshoot compliant. Preserve the failed budget assertion. Global headroom is not permission to ignore a narrower approved budget.

The resume candidate uses buffered JPEG encoding and guard(len(data)) before p.write_bytes(data), preserving existing output on stop. This guards future writes; it does not retroactively fix the previous local overshoot.

## Stage checklist / evidence boundaries
- Test cleanup with a pipe-filling child and with a child that resists TERM; close unused pipe endpoints and bound waits.
- Inherit both global locks into actual media children; don't assume killing a controller releases descendants' descriptors.
- Before real resume, establish original child/lock closure through supported execution evidence and separate authorization. If unavailable, report BLOCKED, preserve bytes and wait for supported resolution.
- Reuse only identity-verified closed work; maintain exact38-existing/18-missing accounting.
- Preserve technical mux closure, selected mapping diagnostics, synthetic cleanup tests and actual join review as distinct evidence classes.
- No ASR, subjective listening, continuous real-time playback, full native-join visual acceptance, platform publication or successful actual deadlock recovery is claimed here.

## Update history
2026-10-30 09:23 UTC: documented actual timestamp/NAL/audio technical pass and exact mapping diagnosis; recorded pipe cleanup as synthetic-only with actual recovery BLOCKED. Later real recovery must append evidence rather than erase this failed/pending state.

Related: [E03 immutable/mixed reuse](HAKAWI-E03-IMMUTABLE-MIXED-REUSE-20261030.md), [native chunk regressions](PLAYBOOK_NATIVE_CHUNK_REGRESSIONS.md).
