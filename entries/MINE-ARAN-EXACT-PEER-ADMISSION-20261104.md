# Mine and Aran: test the actual admission contract, not a guessed status label

Status: source-admission defects caught before launch, corrected metadata followed by clean bounded technical runs on 2026-11-04. This is not full-film or publication acceptance.

## Observations and cause
Aran V039 R7/R11 peer extensions used PASS_SOURCE_ONLY_ARAN_FADE_STAGED_EXTENSION while the actual launcher required PASS_SOURCE_ONLY_ARAN_FADE_R7. Mine V027's paper-motion peer subsequently used PASS_SOURCE_ONLY_MOTION_V027 while run.py required PASS_SOURCE_ONLY_PAPER_MOTION_V027. In each case, pin checking and general source tests had passed, but the exact report/launcher interface had not been exercised. The lead caught both mismatches before any output directory or media child was created.

The prior reports remain separately retained as schema HOLD. Frozen renderer code, plans, limits and actual review evidence were not changed to accommodate a label. Corrected peer reports use the exact status read from the launcher. A fake test calls the real main/verify/admission path with the intended job and parent admission, intercepting mkdir before output creation or Popen. This establishes interface compatibility without consuming media resources.

## Evidence and results
- Aran R7 plan 6895170f96aaa1d4df7f8e81b1b6031916c73e7e4909c6ae3a98f30b4b7409b8 and R11 plan 340d1a6db48af9f58acd9d0c714442f0978ccbac5d17ce79d1c8461eb3fb4720 remained unchanged. Corrected R7 peer b868c70b3793bdb6491b8d867081b027acea2f45ba27c3dabd4d9a0ae93c4fbd and initial corrected R11 peer ee6c2e730db616577fcf22a47d89a254c5e9ecd4895d76bd35d03a18d2b48076 passed the exact admission contract. Six 16-frame jobs subsequently closed, 96 frames total across both formats. All decoded thumbnails and selected original native images passed the scoped fade-cover-reveal review. Archive: libfile_279181d0605c81919b0675bafdf6f59c, ZIP SHA256 8cf4a4375402ec985a29071a1121a20ddfa12dcb76232eeb5a1941cb7037a7dc.
- Mine V027 plan 6bc3480b1ab481c9e9f085aec7714c8ad3139533ccc7acb054056c81fe151242 remained unchanged. Corrected peer a32afdd149c2538f6a4e05183d4ba9282d0caccbe0386928055a6cd66b70a69e passed the real admission-path fake test for paper-entry-portrait. The bounded 96-frame job then completed all six owned technical stages with terminal elapsed, output, reaping and adopted-child closure checks. Video SHA256 b3801e94c20f0421aeb6d03b90c697f37e416266042901c96c1709c6c8c1f5e3. Independent visual review and remaining jobs were still gated when this entry was written.

## Prevention
Read exact accepted schema/status strings from the current launcher. Do not derive them from a neighboring project or a human-readable title. Test the actual pre-output admission path for each allowed job after final peer metadata and parent-admission fields are composed. Keep a positive control and negative cases for wrong job/status/plan. Preserve rejected reports and distinguish a prelaunch metadata HOLD from a failed media run. Never loosen the launcher merely to make a report pass.

Related existing evidence: MOKI-EP010-V7-AGGREGATE-SCHEMA-20261103.md records an aggregate schema copy error; EZZAY-S21-INTERFACE-ADMISSION-20261102.md records top-level helper-path admission. This entry adds separate Mine/Aran exact-status and real-main test evidence, without changing those entries.

Resource guards remain sampled monitoring, not OS hard isolation. No normal-speed playback, listening or full-film acceptance is implied.
