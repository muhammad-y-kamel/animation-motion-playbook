# ANIM-EZZAY-01 — Hero element leaves slot for focal stage: straight sliding path reads as drag-and-paste, not designed motion
- Category / project / episode: motion design / ezzay (@ezzay-da) / White Friday sample excerpt v8b→v9
- Status / severity / reporter / observed date: v9 pending user review / user-facing quality / user / 2026-11-22 ~03:29 EET
- Source hash / encoded hash / rendering toolchain: local Pillow frame renderer, 405 frames @30fps, ffmpeg libx264 crf18; frames and review sheets not committed here.

## Visible symptom and evidence
v8b excerpt: emphasized number element left its slot, enlarged at focal center, returned home, on a single eased straight path with the same artwork. User feedback (2026-11-22 ~03:29 EET, WhatsApp): motion feels like «سحب ونسخ وقص ولزق» (drag/copy/cut/paste), not natural animation or motion graphics. No encode-side defect; the motion design itself read as sliding UI art.

## Root cause
Hypothesis, high confidence: a single smoothstep position lerp of identical artwork carries no animation principles. Missing: anticipation before launch, curved (arc) travel paths, speed contrast (fast release vs eased arrival), overshoot/settle, squash-and-stretch, secondary reactive motion in connected elements, impact response at strike moments.

## Chronological trials
| Attempt | Exact change / source hash | Test | Outcome | Side effects / evidence |
|---|---|---|---|---|
| v8 (2026-11-22 ~03:24) | Number leaves slot, straight eased path, badge follows value only | full-frame contact sheets + zooms + phone-size beats | accepted visually except decorative shadow oval crossing hero digits | defect found by pixel inspection of hero zoom |
| v8b (~03:26) | shadow removed; same path | re-rendered affected frames, full 405-frame sheets | clean placement; user rejected motion FEEL (drag/copy/paste) | placement pass cannot certify motion quality |
| v9 (~03:52) | anticipation crouch (compress ~12%, dip, 0.3s) before launch and before return; bezier arcs out/back; ease-out cubic launch; damped-spring settle with one restrained overshoot; velocity-proportional squash-stretch capped ~11%; badge as lagging spring follower (0.22s delay, larger overshoot, docks last); whip strike with small decaying impact shake; tag pendulum given recoil/catch impulses | all 405 frames re-rendered; consecutive contact sheets + full-res zoom at 8 beats + phone-size beats at 10 timepoints | placement/continuity/math/legibility clean; delivered for user review 03:52 | perceived naturalness NOT verifiable from frames; real-time playback QC remains a separate human gate |

## Best validated fix
Not established. v9 is the best current attempt at designed motion; user review pending as of 2026-11-22 03:52 EET. Do not record v9 as validated until user feedback arrives.

## Prevention before building and at relevant stages
- When an element "takes the shot" (leaves slot, focal stage, returns), design the move as animation: anticipation → arc → speed contrast → restrained settle; add one secondary follower and one impact response. Do not ship a bare lerp.
- Keep restraint: digits/numbers stay legible through travel (cap stretch, no self-rotation), effects do not stack during holds.
- Math coherence: derived on-screen values recomputed every frame from DISPLAYED rounded operands; honest zero states.
- Layout safety: decorative layers (shadows etc.) must stay clear of focal elements' full travel/hold envelope; world motion never crops/collides with screen-space text.
- Font limits (tested this task): Noto Kufi Arabic lacks « » — – ÷ − = ( ) × / …; Noto Naskh supports only « » of those; pure-digit strings render reversed under RTL in raqm, force LTR for digit runs; verify final pixels.
- Sync: ffmpeg silencedetect sentence-boundary mapping beats word-proportional mapping; verify narration via transcript before syncing.
- Identity: Ezzay = cream #F5F2EB, handwritten «إزاي» wordmark, bold Kufi black title + one blue keyword line, flat minimal vector, gray tagline «كل سؤال وراه حكاية». Grid/crosshatch/ink-teal belongs to competitor @TabIzzay; competitor assets are learning-only, never reuse.

## Regression test and pass evidence
Reproducer: local gen script; acceptance: consecutive-frame contact sheets show continuous arc handoffs, follower lag and dock order, impact response, no text collisions, math matches displayed operands; final: v9 405 frames, all-frame sheet coverage + 8 full-res zoom beats + 10 phone-size beats, reviewer: agent. Limits: frame strips prove placement/continuity only; smoothness perception and real-time playback unverified by agent; user verdict pending.

## Cross-project occurrences / related entries
Same "sliding art reads as cheap" risk applies to any hero-element emphasis move (cf. MOKI & PEB motion entries). Analytics-reading cautions from this task (initial-stay vs retention vs AVD; scope mixing) documented separately for channel analytics, not a motion mechanism.

## Update history
- 2026-11-22: observed (user, v8b feedback); v9 attempt delivered for review; pending.

## Discovery origin
- `discovered_by`: `user` (v8b motion-quality rejection, exact WhatsApp feedback 2026-11-22 ~03:29 EET). The v8 shadow defect was `agent` (own pixel inspection before delivery). The v9 attempt and its verification scope are agent work; user validation outstanding.
