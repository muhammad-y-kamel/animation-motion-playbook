# Settled illustration raster-cache experiment

Status: independent candidate only; the approved source and existing video checkpoints were not modified.

Original HTML SHA-256: 723d7185fb21075c3f110f7c3c107ad3e569773f5eaa2acea9fbe2276eab2710
Candidate HTML SHA-256: 2e68954b0b4de82a752f90a5adb45a7dc286be30c5601fc823236452dd2a8751

## Scope

The paper background, ground, mountains and architectural plates were already cached. This experiment adds one opaque illustration cache only when the entire illustrated scene is mathematically independent of time: E03_P07 three-days device, E04_P04 treaty talks, E04_P06 treaty, and E04_P07 chain, only at exact action progress 0 or 1. Transitions and intermediate motion continue through the original vector renderer. Caption/header overlays remain outside the cache and change at their original measured timing. composeFrame retains three distinct temporal samples per 60fps output frame. Cache is bounded to eight full-resolution canvases (~64 MiB pixel memory).

## Pixel evidence

32 full-resolution comparisons covered portrait and landscape, a transition, moving states, static states before and after caching, altered caption times and an unmodified flowing-water control. Every compared RGB channel was equal (maximum absolute delta zero; PSNR infinite). The source hash was identical after the test. This does not claim exhaustive equality at every time; the implementation restricts caching to scenes whose drawing has no other time input in these states.

## Timing evidence

One browser, sequential baseline/candidate/baseline-repeat runs; 24 measured frames per case after five warm frames; actual three-sample composeFrame plus forced pixel readback. Other production load remained present.

| Case | Baseline ms/frame (mean of two medians) | Candidate ms/frame | Reduction |
|---|---:|---:|---:|
| E03 portrait t=290 | 74.62 | 25.40 | 66.0% |
| E03 landscape t=290 | 78.62 | 21.15 | 73.1% |
| E04 portrait t=255 | 77.03 | 24.70 | 67.9% |
| E04 portrait t=310 | 61.35 | 21.20 | 65.4% |

The gain is limited to eligible held states. No benefit is claimed for encoding, audio, untested scenes, or the whole-film runtime. The earlier general Path2D cache was rejected because it did not consistently improve performance. Adoption and checkpoint mapping belong to the production renderer owner after approval.

Files: Settled_Raster_Candidate.html, motion_settled_raster_candidate.js, build_settled_candidate.py, compare_settled.cjs, Settled_Raster_Comparison.json.

## Explicit progress coverage of the initial 32 comparisons

Values below come from executing the exact original action/narrationBeats functions against the final frame plan. Each listed time was compared in both native layouts. Cache eligibility is reported, not an instrumented hit count.

| Scene / time (s) | q across three shutter samples | Eligible |
|---|---|---|
| E03_P07 / 273.100000 | 0 | no |
| E03_P07 / 274.000000 | 0 | yes |
| E03_P07 / 276.000000 | 0.242117463 / 0.243025170 / 0.243933911 | no |
| E03_P07 / 290.000000 | 1 | yes |
| E03_P07 / 310.000000 | 1 | yes |
| E04_P04 / 140.000000 | 0.083577503 / 0.083577503 / 0.083577503 | no |
| E04_P04 / 158.000000 | 0.758270372 / 0.758569176 / 0.758868210 | no |
| E04_P04 / 182.000000 | 1 | yes |
| E04_P06 / 230.000000 | 0 | yes |
| E04_P06 / 246.000000 | 0.470536014 / 0.471576128 / 0.472616351 | no |
| E04_P06 / 255.000000 | 1 | yes |
| E04_P06 / 270.000000 | 1 | yes |
| E04_P07 / 281.000000 | 0 | yes |
| E04_P07 / 286.000000 | 0.282224067 / 0.283172849 / 0.284122494 | no |
| E04_P07 / 310.000000 | 1 | yes |
| E01_P06 / 200.000000 | not applicable | no |

The initial E04_P04 time140s is intermediate, not q=0. A separate pending boundary plan explicitly covers immediately before/after q leaves0 and reaches1 for every affected scene in both layouts; it must pass before adoption.

## Final bounded acceptance check

All 74 full-resolution comparisons passed with zero changed RGB channels in both layouts. The final coverage JSON explicitly includes q=0 and q=1 held states, the immediately preceding and following 60fps frames for every affected action endpoint, and any mixed shutter-sample frame crossing an endpoint. The original source is unchanged. No additional optimization testing is planned.

Reference SHA-256: 723d7185fb21075c3f110f7c3c107ad3e569773f5eaa2acea9fbe2276eab2710

Candidate SHA-256: 2e68954b0b4de82a752f90a5adb45a7dc286be30c5601fc823236452dd2a8751

The candidate is a separate performance variant; it must retain its own source hash in renderer lineage and must not be described as the original reviewed HTML.
