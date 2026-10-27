# ANSWERACT-RESPONSE-AD-20261027 — Causal UI actions, transition bounds and limiter headroom

- Project: AnswerAct response advertisement; separate from original GetMotion and paused RealityUnzip.
- Status: **Source cleared within sampled scope; final-resolution encoding and encoded QA pending. No final acceptance or delivery established.**
- Frozen source: `a52d29c7723a4cb61986bbc575b030a33150749e464b1b35703cdf500bd62b87`.
- Fixed mix SHA256: `c7372dfea611f9c21df86e757a90a4b26efdf0eddfd5c3e334ad066d33a6b355`.
- Discovery origins: agent for intro collision and numeric limiter finding; reviewer for competitor overlap, clipping, missing semantic actions and transition layering.
- Evidence: [producer error log](../evidence/answeract-response-ad-20261027/error-log.md), [independent source review](../evidence/answeract-response-ad-20261027/final-source-review.md), [source freeze](../evidence/answeract-response-ad-20261027/source-freeze.sha256).

## Chronological failures, repairs and actual outcomes

| ID | Symptom / cause | Attempt and evidence | Result / remaining gate |
|---|---|---|---|
| AA-01 | At 3s chart, ad caption and incoming inquiries collide; separate entrances share one region. | Preserve rejected-intro-overlap.png. Retire chart 3.1–3.75s, introduce messages after 3.5s, shrink ad and use separate vertical slots. Source proof at 4.8s inspected. | Source-sampled repair; encoded retest pending. |
| AA-02 | Competitor label overlaps retained original inquiry during 15.2–19.2s. | Remove original inquiry state as alternate-store response enters; 17s source proof. | Independently cleared within samples, not complete encoded interval. |
| AA-03 | Connected and complaint badges exceed viewport after shell contraction. Absolute child coordinates did not follow the actual clip. | Connected badge to 1460; complaint→owner layout bounded to 1455 under contracted 1475 clip; retest 57.5/75 and related states. | Source/frame clearance; final encoded retest required. |
| AA-04 | Comments and complaints exist as labels without actual response/routing. | Add public question→reply before inbox sequence; complaint→directional route→owner alert, with separately timed order alert. | Independent source review sees causal actions. Labels alone are not proof of performed operation. |
| AA-05 | Mix peaks at 0.0dBFS despite limiter limit 0.84. Limiter automatic output normalization restores gain. | Preserve rejected-limiter-autolevel.wav; set level=false. Numerical repaired WAV peak −1.5dBFS. Dry narration unchanged; no additional paid TTS for repair. | Numeric headroom repair only. No listening, pronunciation or perceptual clipping clearance. |
| AA-06 | During 67.44–68.04s chat, instruction and handoff layers stack under crossfade. | Replace simultaneous fading layers with separated 900px horizontal panes. Producer samples 67.5/.7/.9; independent latest review includes 67.5 and 67.9. | Bounded source/frame clearance; not every-frame transition proof. |

Rejected evidence stays in the producer's qa directory; no production assets are altered by this documentation. This compiler read attributed reports and source freeze, not a new independent pixel/audio review.

## Best validated fixes and prevention

Within tested scope: assign nonoverlapping regions using current shell/clip geometry, derive action states from visible contact, and use explicit comment/reply and complaint/owner transitions. At scene handoffs, inspect outgoing and incoming content simultaneously; a crossfade can produce three illegible text layers even when each resting state looks correct.

For limiter processing, test measured peak after the complete filter chain rather than assuming its threshold controls final output gain. Preserve dry narration and rejected mix. A waveform statistic cannot substitute for listening.

## Required regression gates

- Freeze source, audio and render configuration; bind review to exact final output hash.
- Inspect intro entrances, 15.2–19.2 competitor transition, activation connected badge, handoff pane travel and complaint/CTA bounds at native resolution, including boundary frames.
- Show actual pointer/contact, pressed state, result and destination. Do not label a missing action as completed.
- Decode final output; verify dimensions, duration, FPS, narration identity and ending, final mix peak and audible clarity through available capabilities.
- No ASR, vowel/shadda certification, actual listening or continuous playback occurred in this checkpoint. Independent initial review covered 15 full-scene frames and 10 transition samples plus targeted retests—not all output frames.
- Source clearance permits encoding only. It is not encoded-video approval, live-product testing, marketing-claim validation or publication authorization.

## Data-accuracy limit

The exact “80% lost orders” statement is user-provided advertising copy retained after an accuracy caveat and explicit insistence. It was **not independently established**. A generated search overview is not substantiation; the referenced first-call conversion finding does not establish this social-order percentage. Do not add research badges, invented citations or claims that this case verified the percentage. This is a data-accuracy review limitation, not a legal assessment.

The interface is illustrative. Source/frame QA does not certify actual deployed product behavior. No posting is authorized or claimed here.

## Update history

- 2026-10-27 03:19 UTC: documented six observed mechanisms and bounded source fixes. Full encode is underway; encoded review and Library delivery pending. No global PASS or user acceptance.
