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

## V2 delivered with bounded encoded QA — 2026-10-27 07:35 UTC

**Production/delivery milestone complete; final VIDEO user acceptance pending.** The first candidate was held after root's sampled visual review found a static phone panel, weak motion and long tiny-form sections. Its technical/source clearance was not creative acceptance. V2 is a new revision, not retroactive approval.

### Additional observed failures and repairs
1. Same-space fades again stacked readable text at 39.95/48.65/53.5/57.63/60.52. Sequential outgoing-text fade before incoming text repairs the sampled overlaps.
2. Knowledge cards crossed the heading during feed. Shrinking into small beads and retiring the heading before transit avoids readable text wiping over readable text.
3. Assigned assistant orb was hidden by an opaque page drawn later, despite correct coordinates. Redrawing above page background and moving its check beside the face restores visibility.
4. Generic results omitted public comment, explicit order intent and timely complaint. The revision shows linked question/reply, message, details request, complaint and distinct owner exception/order alerts; identity/product details remain consistent.
5. Enlarged scenes narrowed safe margins. Endpoint geometry and anchors moved inward; routes avoid headings; disclaimer enlarged.
6. **Encoded timing defect:** clean stills concealed replies visible for only 0.2–0.3s. Completed exchanges now accumulate in four lanes. Encoded-excerpt retest found approximate reply holds of 3.47/2.79/2.08/1.39s for price/delivery/order/complaint. This is an excerpt-specific readability result, not a universal duration rule.
7. Separate cursor windows could overlap or jump between controls. One pointer now travels before each click. A 50ms timeline scan found at most one pointer path; sampled final images separately confirm targets. Numeric object count alone cannot certify interaction readability.

### Audio scope
The approved composite narration for V2 is SHA256 `02812291d1b7c349fbf92e2515bf5014219d0ea0eb92bb57c7ebb510658bcdf3`. It supersedes the earlier original narration for this revised production, following separate user audio feedback/approval; do not claim it is the same original take. No paid TTS occurred during V2. Production reports PCM preservation outside added cue windows; this is numerical integrity, not listening. Earlier pronunciation trials and user-feedback histories remain separate local evidence; this update does not assert all pronunciation was independently audited.

### Exact final artifact and evidence
- Video `AnswerAct_Response_V2.mp4`, SHA256 `0387f20d315c795e48a085d022d635de5a145fd047006efdc9797bcebf8e87d0`,7,406,946bytes.
- 1080×1920,30fps,2059frames,68.633333s; AAC68.623991s. Full FFmpeg decode returned no errors. Encoded peak−1.9dBFS; this is not a perceptual audio-quality certificate.
- Frozen film source `8699715296c525f66a69c3572159eb5f4fa2bf733216e5f6aadfafd8d6e1963b`; mix `74f462c00d1470dd2ca673befee9f509f76d5c617ce230aeba6b6ebbe681d1cb`.
- Independent review inspected the actual 26-frame encoded contact sheet and native frames37.8,50.6,55.8,60.52,65s. No outstanding HIGH visual issue in that focused scope: cursor target, routing, assistant layer, four result lanes and separated CTA remained readable. Root also reviewed the final sheet.
- No continuous playback/listening, full native every-frame inspection, naturalness or perceptual-sync certification. Earlier user-provided 80% assertion remains unverified; visual QA does not substantiate it.

Library saves succeeded: video `libfile_dbcc993dd6f88191b719f3280ca346a0`; editable ZIP `libfile_36d5a317bf488191a208948701ea9459`, ZIP SHA256 `3cd9f43bf0b8c037eeb373d985a63e8d5ede0d90b2c531102be26dc455a4d7dc`. Coordinator attached both at07:35UTC. **No publication performed; audio approval is not video approval.**

[Final technical evidence](../evidence/answeract-response-ad-20261027/v2-final-verification.json), [independent encoded review](../evidence/answeract-response-ad-20261027/v2-final-native-review.md), [reading-time failure and retest](../evidence/answeract-response-ad-20261027/v2-encoded-proof-review.md), [expanded chronological error log](../evidence/answeract-response-ad-20261027/error-log-v2.md), [delivery receipts](../evidence/answeract-response-ad-20261027/v2-delivery-receipts.json). Earlier snapshots remain intact.

## V3 user layout repairs and V4 opening repairs — delivered 2026-10-27

User approval of the visual STYLE did not approve the defects. V2's sampled no-HIGH review missed subsequently reported temporal/layout issues; preserve this limitation.

### V3 failures and tested corrections (delivered09:49)
Capabilities had upper whitespace/bottom crowding and reply overdraw. A shared connector bus was drawn repeatedly, while endpoints followed the moving orb and overlapped dialogue. Step-four composition was too low; the handoff tip terminated inside the target; the next scene left an empty corridor. Repair redistributes content, draws the bus once, retires connectors before movement, centers assignment, ends arrow before target, and uses the existing CTA heading in the corridor.

The repair introduced a63.85s notification/button overlap. Encoded review caught it; delayed button entry64.24s clears the moving notice. A35.70s orb/faint-heading collision was then found: advance heading retirement, replace native frames1055–1073, and retain the complete base AAC rather than audio from the patch. Independent adjacent boundary review1054–1056/1073–1075 found no sampled jump or heading reappearance. V3 output SHA256 `cd7bf93e7af019ca93747e346fb93873789703b1a964768159a5c6ea88908035`; video `libfile_272b951959948191963ffdbb76511460`, source `libfile_d95200974a1c81919d6adec9433cdc9b`.

### V4 failures, unsuccessful attempt and repair (delivered10:26)
- User replaces niche sneaker with generic storefront, removes needless tagline and tiny waiting label, separates five-minute caption from arrow. An initial time-label position nearly touched incoming bubble and was adjusted before final rendering.
- V3 exit condition i<2 omitted the bottom message; separately drawn avatar0 remained orphaned. Grouping all message/avatar/dot elements fixed ownership but **did not fully fix the rendered exit**:600px offscreen travel clipped bubble text before avatars. Actual encoded10.2s revealed this. Final100px translation plus shared fade while groups remain onscreen cleared sampled9.8/10.2s orphaning.
- Arabic labels were not centered by a universal baseline. Actual Sharp/Noto alpha-ink measurements showed account10px low, activation6.5px low, CTA6px low, platform3–6px low. Apply phrase-specific offsets and inspect ink against current boxes; do not extrapolate to every possible label.

V4 final SHA256 `5465cc695b7da86464d162c92edb8366a7929c58c23383cc2ef9f94003a679d1`; full decode passed, approved AAC payload unchanged from V3, no new TTS or publication. Independent review viewed28 actual encoded samples plus native6.5/10.2/26/27.3/50.5/51.6/65s. No remaining HIGH within requested-fix/sample scope; earlier V3 layout repairs remained visible. **Not continuous playback/listening, every-frame certification or blanket creative approval.** An unfinished user fragment was not interpreted.

V4 saved video `libfile_4871c517ab3c8191802b344d9652ea86`; source `libfile_34b4b178d3b481919a3ce81b0f63f922`. User video acceptance pending. [Expanded error log](../evidence/answeract-response-ad-20261027/error-log-v4.md), [V3 final review](../evidence/answeract-response-ad-20261027/v3-final-review.md), [V4 final review](../evidence/answeract-response-ad-20261027/v4-final-review.md), [V4 receipts](../evidence/answeract-response-ad-20261027/v4-receipts.json).
