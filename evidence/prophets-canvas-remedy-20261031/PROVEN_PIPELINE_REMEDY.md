# Proven pipeline remedy: native history must be tested beyond completion and captions

Evidence snapshot2026-10-31 around01:49UTC. Prepared from closed local records only; no new media/decode/native import/network. This is a playbook-ready lesson, not a repository publication or expansion of acceptance. Exact supporting file hashes are in EVIDENCE_HASHES.json.

## Scope of the proven result
The specific v006 pipeline, using isolated official @napi-rs/canvas1.0.10 plus the already hardened renderer/controller, produced correct nonfrozen grain-portrait history for globalframes[16794,17166),372frames/1116source shutters/6.2seconds. Its actual encoder input ledger matches the independently reviewed history diagnostic exactly. Decoded-video technical QA, byte-exact canonical PCM comparison, and scoped lead/root chronological image reviews subsequently passed.

This proves the current bounded pipeline remedy for that window. It does **not** prove that packageversion alone or a single upstream commit caused/fixed the previous symptom. It does not accept normal-speed playback, actual listening, landscape, other windows, whole121.6second provisional tail, revised duration, general runtime adoption, or publication. Published prefix remains protected. Source/audio/layout/fonts/shutter quality and sacred exclusions were not relaxed to obtain the result.

## Chronology, preserving failed versions
1. v001 renderer aborted with allocation failure under unchanged384MiB DATA limit. Journal terminalrenderer−6/encoder255, both reaped; partial retained. Completion was not inferred.
2. v002 copied temporary native ImageData into one reusable8,294,400byte output Buffer, cleared aliases before awaited stdout, and collected after copy/write. Its synthetic lifetime test passed, but actual retry still hit DATA ceiling and exited−6. Failure site in ContextifyScript was a clue, not proof of sole cause.
3. v003 reused one compiled vm.Script and mutable globalframe scalar instead of compiling perframe, preserving exact composeFrame time/shutters and timeout. It delivered372frames but failed a later small native allocation at teardown. A renderer completion receipt did not override nonzero terminal exit.
4. v004 added explicit native-surface disposal and bounded reference clearing. **It never ran media.** Independent source audit found an initialization-error cleanup gap: loadRuntime could throw before outer ownership assignment.
5. v005 closed that initialization gap. The actual encoder/renderer then both exited0 and reaped, and technical/PCM checks passed. Actual decoded images nevertheless showed first-gold art frozen while headers/captions advanced. Thus fullframe hash changes, PTS, audio equality, and terminal0 were insufficient visual-motion checks. The v005 creative HOLD remains a historical fact, not erased by later success.
6. Source-only full372frame state modeling found balanced saves/restores, no clipping growth, no plateCache/beatCache access, and changing geometry commands. Native diagnostic history still failed; reset experiments also encountered bad_alloc and were not remedies.
7. An isolated official1.0.10 package was staged and separately pinned, leaving accepted runtime untouched. Sameframe17159 PNGs matched prior native references byte-for-byte, preserving the already reviewed material/Arabic presentation at that point. This only established sameframe compatibility, not history.
8. A separately admitted all372frame native history diagnostic generated ordinary raw-blend hashes,245distinct artROI hashes,11 chronological contact sheets, and native contact/outcome witnesses. Source canvases were not PNG-encoded during the history; endpoint blend was sealed before mainrow readback. Main/blend retained endpoints matched the fresh reference. Lead reviewed allframes through sheets, root reviewed six named artifacts. Scope remained diagnostic.
9. v006 then used the original raw Node→FFmpeg encoding path without diagnostic sheets/ROI/reset intervention. Its entire clocked rawRGBA ledger equaled the diagnostic's ledger. Separate sequential decoder QA verified video/PCM, followed by actual decoded contact-sheet/native-image review. This closes the observer-path loophole: the remedy was not demonstrated only under diagnostic PNG/zlib pressure.

## Exact anchor hashes and measurements
- Canonical v007 HTML:615b522683394bd26080e3ea75c65a7a4e78390aa7f076d4be1c7bef74b9947b.
- Canonical source freeze:0e194ce920a9fa83bf277775291f848a18d17fab5247061564f5802b92cfb810.
- Isolated staging freeze:f2176643a844b933e7005aad259e6b342a1cdf3d20caad949f98baf11ef49e8f.
- Actual1.0.10 nativebinary:eff464d8c283ad1e73e36c636d9ec9a6469ae34c3c04b298794735c89f9c863a.
- v006 PLAN:d575236df54ad54ee8c674fb11e6c914a26d2dca7acb6e79a2322cf3f4c5aa70; FREEZE:d65f3505542fae4dae5b708a1a63024b118ac6b6f54c358c768fedb494ba3e75.
- Diagnostic receipt:eaf1b82b37f289db54e148d96690e0a0cecc56a60a6079c03866899621ccf221.
- Matching372frame RGBA ledgers:42a1883b4af89ffbdbc8a71485b7c4f17d9d3ad4df3fc15ccaa7d811263e0d23.
- Encoder journal:97516c8cd1b8dcded30b1ab2cfe2f64e061bf1772ea98f8b6bac6d53ff558173.
- Closed MP4:027d7bc89e27d3c9cf066ff0c8c690abc540865e460e95e26a619da7fa0a18b4,1,257,331bytes. Filename remains window.partial.mp4; acceptance comes from closed hash/journal, not basename.
- QA technical closure:2458fd5b1b6a0699cb12282e2b6fae1e59e64259fab715d5efdbadae727754f0.
- Canonical PCM slice[13435200,13732800):297600stereo48k sampleframes,24bit/6bytes each,1,785,600bytes; SHA157d1cebe5090ce886ae0ea4c635a2f8c53b4f7f57d171990074912168069c67. Auditor independently checked canonical slice. Byte equality is not listening.
- v006 renderer observed peakRSS145,899,520B/DATA184,360,960B, versus v005 peakRSS362,606,592B/DATA402,636,800B. This strengthens bounded-resource evidence for the tested configuration, not a universal bound or attribution proof.
- Lead decoded review SHA96d9d528ae86c3adb7fcd6a4a8ba5bed74dcf7eea66266b7ac1120e91c0d1326:8nativeJPEGs+11sheets, all372frames chronological, not normal-speed playback.
- Root decoded review SHAc30e5af6848e8d4124f7966407df33dda8add00e12a461405e68dd34bbbbd996:exactly6named images, not a claim that root viewed all19. Findings: nonfrozen gold growth/retention, silver arrival/contact/accumulation, both retained heaps, clean captions.

## What the upstream research supports—and does not
The preserved source-only research identifies official issue1342/PR1347, released1.0.10, changing deferred-recording release on getImageData and adding estimated recording accounting. This plausibly relates to rawreadback versus toBuffer behavior. But this production did not isolate one upstream commit with an otherwise identical binary build; version bundles other changes. Do not relabel the result as a sole-commit root-cause proof. Consult the preserved UPSTREAM_FIX_RESEARCH.md rather than installing latest; later versions change text behavior.

## Regression protocol for future reuse
1. Freeze source/wordclock/fonts/runtime/nativebinary/libraries/PCM and absolute globalframe mapping. Preserve every failed packet and raw ledger.
2. Revalidate sole/directchild ownership, callback/drain buffer lifetime, immediate postPopen registration, cleanup on initialization failure, signal flags, reaping before lease release, file quotas and global reservations. Do not raise caps or shrink native geometry to turn a failure green.
3. Run a fresh sameframe reference for actual glyph/material/layout compatibility. Do not mistake it for repeated-history coverage.
4. Test full relevant persistent history with source-free artROI hashes and allframe chronological coverage. Compute hashes from already copied raw bytes to avoid observer flush. Retain contact native witnesses; read endpoint main only after blend is sealed. Constant retained-state hashes are valid—evaluate expected cue/state changes, not arbitrary uniqueness thresholds.
5. Re-run the actual encoder path without diagnostic interventions; independently compare exact clocked RGBA ledger to diagnostic. Any mismatch reopens localization.
6. Sequential exact-owned decoders verify every video ordinal/PTS/native dimensions, full sample range/rate/channels/bitwidth and every PCM byte. Check decoder/encoder exit/reap and artifact hashes separately.
7. Actually inspect allframe sheets plus native contact/readability witnesses, document precisely which reviewer viewed which files. Then require separate normal-speed audiovisual playback/listening before claiming temporal/auditory acceptance. Repeat for landscape and remaining transitions; no fulltail claim from sampled windows.
8. Only after those scoped gates may a separately authorized production/export process adopt the runtime. This lesson itself authorizes no media, upload, runtime replacement, or repository write.
