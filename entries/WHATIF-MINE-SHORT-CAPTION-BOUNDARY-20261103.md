# WHATIF-MINE-SHORT-CAPTION-BOUNDARY-20261103

- Category: subtitles / derivative cuts / immutable source scope.
- Project: WhatIf Arabic, Mine native Shorts.
- Status: validated_with_limits. Blocking caption defect, discovered by agent during actual assembled Short1 boundary review, 2026-11-03.
- Related: ANIM-0013 (changed-source review invalidation); HAKAWI-CORRECTED-PASS-20261024-0644 (part-dispatch/canonical text); HAKAWI-E04-DISCRETE-FREEZE-20261030 (central clock and historical carry).

## Observed failure and confirmed cause

At zero-based absolute frame4999, final frame of Short1, caption read «عودتي. كنتُ قد» although the approved audio cut is frame5000 after a complete sentence. Caption groups were inherited from the complete long timeline, and a group crossed the semantic section boundary. Correct audio cuts therefore did not guarantee correct visible final words. This was an agent-found encoded defect, not a specific user complaint. Original source, encoded output and historical23-job plan remain preserved.

Three original groups cross the six-section cuts:
- p02_c005: عودتي. كنتُ قد → S1 عودتي. / S2 كنتُ قد
- p07_c019: يرتكز عليها. وقبل → S4 يرتكز عليها. / S5 وقبل
- p09_c023: جوعًا. أما لو → S5 جوعًا. / S6 أما لو

## Actual repair and trials

1. Diagnosed original grouped captions against canonical word times and approved cuts. No audio, script, timing or long-player change was needed.
2. Created additive native-short-only caption V008 source/runtime. A fixed explicit nativeShortSection applies exact original word/punctuation subsets after calculating original display holds. It is fixed for the job, not inferred separately at each shutter timestamp. No query preserves original behavior. Reject landscape and jobs crossing section boundaries.
3. Exhaustively compared34556 frames /103668 shutter evaluations with canvas-free call recording: unchanged-caption shutters retain identical compositor operations and scene arguments. Scene source bytes remain identical. This is source compatibility, not raster-byte identity.
4. Corrected runtime request metadata and restored original cutsSHA256 binding before freeze. Neither correction changed drawn media. Historical plan/output evidence remained untouched.
5. Rendered six3-frame preflights: all18 decoded thumbnails plus12 selected native images actually reviewed. Exact six subsets visible, no spill/crop.
6. Replaced complete Short1 chunk03, frames3600–4999, under a new output directory rather than arbitrary GOP splicing. All1400 decoded thumbnails and4 selected native images reviewed PASS. Final caption is only عودتي. Canonical audio remains unchanged. Other section replacement production/assembly remains separate work.

Source freeze SHA256: d0eac06a3802876a0fd8f02ef39f557e10bbd4f63cbed2aa71d31b3790cf58d6.
Runtime plan SHA256: c8580df5232e615a496c7a7c1ff0d9c35c29484bdd70b7e8d6b0ab1c7fdb7312.
Corrected1400-frame video SHA256: afea50d506996e520030b45e010e63199b82a9609fb36ed0bb865d3190f2c4fd.

## Exact source-effect scope

Only263 output frames have any changed shutter caption:
- S1chunk03 [4954,5000):46.
- S2chunk01 [5000,5041):41.
- S4chunk04 [22347,22417):70.
- S5chunk01 [22417,22450):33.
- S5chunk04 [28661,28698):37.
- S6chunk01 [28698,28734):36.

263 is not the number of newly rendered or reviewed production frames. Whole affected chunks are rerendered for the existing interframe-coded assembly contract. Unaffected historical chunk evidence can be retained only with exact source/plan/output scope and the compatibility report; never relabel it newly rendered.

## Best validated fix and prevention

Keep native section caption selection separate from canonical audio and long caption data. Preserve display-hold timing and exact punctuation; subset only the cross-boundary groups, with section identity stable over all shutter evaluations. Do not globally truncate captions, retime narration, or make unrelated scene changes.

Before native Shorts rendering, test every cut's prior/following group against word ownership and display holds. Inspect last/first decoded frames at native resolution, including punctuation. Recheck all affected sections and near-cut shutter times. When word metadata drops opening quote marks, retain original caption tokens rather than reconstructing punctuation from metadata alone (detected prospectively in Aran; not a rendered Aran fix).

## Evidence and limits

[evidence manifest](../evidence/mine-short-caption-v008-20261103/acceptance.json) preserves actual report content and hashes. Preflight:18 thumbnail frames and12 native inspections, six boundaries only. Corrected production chunk:1400 thumbnails and4 natives. Sparse storybook poses and symbolic millwheel/scale remain qualified. No full-film, complete six-Short, normal-speed playback, listening, publication or user-creative-acceptance claim follows. Preserve the old failure and additive replacement evidence.

## Stage log

Mine / native Shorts caption repair | exact source freeze above | related entries and PREFLIGHT/WORKFLOW reviewed | cross-sentence spill | pure full-range compatibility, six-boundary actual preflight, corrected1400-frame actual review | parent + independent reviewer reports | validated_with_limits | remaining affected chunks and refreshed assembly proof.
