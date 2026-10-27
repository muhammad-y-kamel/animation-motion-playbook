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

## V5 explicit composition change — delivered10:41 UTC, 2026-10-27

The user's new instruction **supersedes V4's fading-message design**: retain unanswered messages at11–12s with red X marks and subtle decaying8px shake. Do not relabel the prior grouped-fade ownership repair as a failure merely because the requested design changed. Footer removed throughout; first clock moves below queue; at19s storefront is left, clock center and disconnected Wi-Fi right.

Two actual failed trials are retained:
- Naive v4→v5 substring replacement corrupted `yuv420p` to invalid `yuv520p`. FFmpeg refused before rendering. Explicit pixel-format correction fixed the build; future version edits must target intended filename/version tokens, not arbitrary substrings.
- Old competitor card and new storefront overlapped around17s under simultaneous fades. Retire outgoing card/arrow by16.94, begin incoming then. Independent0.1s-spaced encoded retest16.5–18.4 cleared the sampled stack.

Final native V5 SHA256 `1ee951cb317ad001041a8fbb6b9d2cd80e6865d36b389fb29d22793bebe7d9cf`; source `fc843e9488712aa70f61cca292dada23b5ececbb2d26d6b118882538f43c0429`. Full decode clean;2059 generated frames scanned with zero footer occurrences. V4/V5 ADTS audio payload byte-identical, SHA256 `265dd200dddb28a4d0ee40323e181cfc9dec48ff7ab4a8066c8c33af223c0137`; no new TTS.

Independent final review:33 actual encoded samples plus native7.5/11.5/19s. No remaining HIGH within requested fixes/sample scope. Root viewed sheet. **Not full playback/listening, every-frame or creative approval.**

Video `libfile_560f545f3d1c8191b7f7f45119d74ccf`; source `libfile_0aa3ca3609ec81918b599697f7685efa`, source ZIP SHA256 `29779a5d502b7d2cbe20d11fc04a7095a35a6c0b54c37e529b2300e73efc5c8a`. Root confirms delivery10:41; user acceptance pending. [Final review](../evidence/answeract-response-ad-20261027/v5-final-review.md), [QA](../evidence/answeract-response-ad-20261027/v5-final-qa.json), [chronological errors](../evidence/answeract-response-ad-20261027/error-log-v5.md).

## V6 hierarchy correction and exhaustive initial frame review — delivered12:18 UTC

User clarified V5 should retain the original V4 upper card/customer groups and only add small icons beside the lower clock. V5 incorrectly replaced upper alternatives with oversized icons. Collision-free QA did not establish fidelity to the user's requested hierarchy. V6 restores those upper groups and adds clock-sized lower storefront/clock/Wi-Fi at340/540/740, roughly120px each, while retaining lower7s clock, red-X messages and no footer.

**All2059 initial decoded frames actually viewed**, on consecutive six-frame sheets with suspicious details enlarged:0–503,504–1007,1008–1511,1512–2058. Initial hash `37798af997de1a22d1061d9686b00b7e3772d9c6c38d3336435c17b80f55c5db`. This found four brief overlaps missed by sparse review:
- Opening arrow crosses shrinking card/button and first inquiry touches its edge: derive arrow from moving card bottom, gate for gap and delay first bubble to3s.
- “أو” crosses alternate card near17.2: delay label until17.35.
- Account outline crosses rising orb near25: delay fields until25.15.
- Orb crosses assignment title near53: retire title before52.85.

All487 final affected/boundary frames were directly re-inspected:60–420,495–540,735–780,1572–1605. Four collisions resolved in those ledgers. This does not mean every final frame was freshly re-viewed. Brief fades and a cosmetic check-dot remain; no whole-film perfection, actual listening or continuous playback claim.

Final video SHA256 `917d64b8eee9f8659141ed4c872759c800cc887c6da01ec31231b25abb7df2a5`; AAC unchanged. Video `libfile_1810240f055481919528364c733ba0a4`; source `libfile_d0c8c1cc517c81918c3f9c4e73f2266d`, source ZIP SHA256 `9afc54c069db0ff9bc94051749aff9d623de12d23f809347d2e7f07d8b0603ee`. Delivered12:18 per coordinator; **user creative acceptance pending**.

[All-frame coverage/retest record](../evidence/answeract-response-ad-20261027/v6-all-frame-review.json), [final technical verification](../evidence/answeract-response-ad-20261027/v6-final-qa.json), [receipts](../evidence/answeract-response-ad-20261027/v6-receipts.json), [chronological error log](../evidence/answeract-response-ad-20261027/error-log-v6.md). Preserve earlier narrow reviews rather than rewriting them as exhaustive.
