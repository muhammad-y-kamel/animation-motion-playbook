# AnswerAct cross-project error audit

Retrieved 2026-10-23 UTC through cloud_threads_read. Audits visible recorded user/assistant messages, not hidden tool traces or local-only histories. All cursor chains exhausted for these three tasks. One original long user brief in the hammer task is tool-truncated; see coverage.json. No source-message URLs or per-item dates returned: exact thread/item identifiers are citations; no URLs invented.

**Status:** All technical fixes below are historical assistant claims, NOT independently artifact-verified here. User criticism establishes reported defects; later rejection overrides earlier broad success claims. No final user approval inferred from silence. Bounded original-language excerpts in evidence-excerpts.json, no full conversations/secrets.

## A01 — Brand backgrounds and text boxes

- **Observed:** White logo backplates, oversized/out-of-frame Arabic labels.
- **History / cause / attempts / outcome:** Assistant diagnosis: white primitives under assets and font-size rather than glyph bounds used for placement. Claimed repair: remove backplates; actual Arabic glyph bounding boxes including marks; smaller type; padded columns; stagger entry/exit. Subsequent user still reported movement defects, so this was not global approval.
- **User evidence:** 01a14b79-1a15-70dc-a424-3cac0821cc70
- **Assistant evidence:** msg_01970fd4588b4086016ad3d5ec525081919b1a701d6f3e6246,msg_01970fd4588b4086016ad3dc44b3888191859c85e153c31e57
- **Verification:** User-reported; repair claimed, independent artifact validation pending.

## A02 — Detached dot / underline and arbitrary trajectories

- **Observed:** Dot geometry breaks, elements leave intended positions; wrong order-field label.
- **History / cause / attempts / outcome:** Claimed repair: same dot stretches into line and remains its endpoint; stabilize data rows before dot/highlight moves; one continuous card-to-logo motion. Earlier correction underline crossed text in transit, then blue dot touched three captions; moved paths into whitespace. Field should identify color (black), not product generically.
- **User evidence:** 01a14b98-b11c-732b-86ad-79a48781b0de
- **Assistant evidence:** msg_01970fd4588b4086016ad3e9a6671c81919e2520b6bf457be1,msg_01970fd4588b4086016ad3e33997b08191b0586eb9f2b22960
- **Verification:** User-reported; repair claimed, independent artifact validation pending.

## A03 — Inter-scene text and card overlap

- **Observed:** Motion elements overlap; brainrot arrows broken and motion weaker than music.
- **History / cause / attempts / outcome:** Assistant localized transitions knowledge→models and chat→order. Claimed repair: outgoing text leaves before card movement; new text after settling; text stays attached to folding surfaces; arrows use shared card coordinates; motion amplitude follows measured bass energy.
- **User evidence:** 01a14a5e-3b1d-74ee-8ba6-e8ba76d5de7e
- **Assistant evidence:** msg_01970fd4588b4086016ad38f6a96d88191899c1c1be90f5e8a,msg_01970fd4588b4086016ad39e93161c81918827932f329a2bbf
- **Verification:** User-reported; repair claimed, independent artifact validation pending.

## A04 — Brainrot typography / unwanted decorations

- **Observed:** Bad text size, placement, overall presentation; unwanted margin text/page counter.
- **History / cause / attempts / outcome:** Claimed repair split phrases, resize and pad cards, remove team-copy/paste labels/margin text/page counter. Later critique in A03 shows this did not finish motion QA.
- **User evidence:** 01a149ca-abaf-75a3-a8f9-61f90387c1f8
- **Assistant evidence:** msg_01970fd4588b4086016ad38634ced48191b89c060cdbfea3d2
- **Verification:** User-reported; repair claimed, independent artifact validation pending.

## A05 — Arabic narration unnatural / pronunciation loop

- **Observed:** Robotic voice and wrong pronunciations; flat emotion compared with English.
- **History / cause / attempts / outcome:** Trials: conversational story instead of feature list; anxiety→relief direction; Anas/Hamid samples; replace notification phrase with «بتوصلك رسالة» and spell «أربع مية نقطة». User later said replacement still mispronounced. ASR cannot validate emotional naturalness.
- **User evidence:** 01a15696-d804-76d6-8c16-0cfa46f05c19,01a15699-7298-7720-af77-f6adfdeafc4e,01a156e0-96d1-7235-80af-0ffb92db968c
- **Assistant evidence:** msg_01970fd4588b4086016ad6aebeaf0c8191b2b30c9ece63b2df,msg_01970fd4588b4086016ad6c465b89c8191bb84e17f9bad4097,msg_01970fd4588b4086016ad6c644d61081918a811874050d106e
- **Verification:** User-reported; repair claimed, independent artifact validation pending.

## A06 — English voices for Egyptian Arabic failed

- **Observed:** User suggested English voice for Arabic; later explicitly judged it worse.
- **History / cause / attempts / outcome:** V6 tested Jon and James, selected Jon, one continuous take; user rejected sound as worse and requested Arabic/tashkeel. V7 returned to Haytham Egyptian, simplified phrases, diacritics on ambiguous words, spelled numbers; continuous recording without word splicing or rate shifts. No independent trustworthy star ratings found; no subsequent user approval in retrieved history.
- **User evidence:** 01a157a9-a4fe-72b5-bc53-3577cc9ad4af,01a157d2-8753-7310-895e-defbbaf988a0
- **Assistant evidence:** msg_01970fd4588b4086016ad6fc38a3d881918399b795afb2c794,msg_0ded140a17753036016ad7005ca5548191b0766a27e5cbb08c,msg_0ded140a17753036016ad707d1b6c4819196b79ac440b8dbbc
- **Verification:** User-reported; repair claimed, independent artifact validation pending.

## A07 — Mid-recording voice discontinuity and unsuitable bag

- **Observed:** Voice changes/cuts midway as though different person; invented bag inappropriate.
- **History / cause / attempts / outcome:** V5 removed bag completely; regenerated entire Arabic narration in one request with unchanged settings and no sentence joins. Numerical signal check did not find long silence; assistant explicitly could not listen directly, so perceived voice consistency not verified.
- **User evidence:** 01a1577c-cfb3-73f7-8c1f-732a9fdcf762
- **Assistant evidence:** msg_01970fd4588b4086016ad6f22d79688191b94ad07cbffb761d
- **Verification:** User-reported; repair claimed, independent artifact validation pending.

## A08 — Distorted brand identity

- **Observed:** Wrong/disfigured logos in both language versions; opening Arabic mispronounced.
- **History / cause / attempts / outcome:** Use official icon and wordmark, preserve proportions/features during motion; claimed encoded-frame inspection of AnswerAct/OpenAI marks. Distinguish this from white-backplate issue.
- **User evidence:** 01a15778-31c3-727e-afc8-4fe4747276ed
- **Assistant evidence:** msg_01970fd4588b4086016ad6f22d79688191b94ad07cbffb761d,msg_01970fd4588b4086016ad6f01a5ff88191aff5db1e45d622c4
- **Verification:** User-reported; repair claimed, independent artifact validation pending.

## A09 — V6 rejected despite prior review claims

- **Observed:** Severe overlap, odd motion, objects on top of each other in both films.
- **History / cause / attempts / outcome:** V7 diagnosed letter-clipping transitions, cards covering headers, offer digits incomplete during reveal. Claimed repair: card+text grouped within fixed region, remove clipping reveals, separate subtitles, checkmarks stay in fields. Claimed all 4650 frames via contact sheets plus 12 full-resolution frames/language; NOT every full-resolution frame, direct listening, or independent verification.
- **User evidence:** 01a157d2-8753-7310-895e-defbbaf988a0
- **Assistant evidence:** msg_0ded140a17753036016ad6ffa159f08191b19b6ee25065508c,msg_0ded140a17753036016ad700e02d508191abb47f9160217e36,msg_0ded140a17753036016ad707d1b6c4819196b79ac440b8dbbc
- **Verification:** User-reported; repair claimed, independent artifact validation pending.

## A10 — Wrong audience pain / insufficient concept

- **Observed:** Products-only framing; cold-food story fits moderator rather than business owner; feature-list delivery.
- **History / cause / attempts / outcome:** V2 expanded services/subscriptions/products; V3 switched to owner paid for ad but interested customer gets no reply. V6 rebuilt around repeated questions stealing workspace. Treat direction revisions separately from mechanical defects.
- **User evidence:** 01a15649-c66b-74b1-b859-9a3bb47f00cb,01a156aa-fd78-77b3-bbf3-0df623492a51
- **Assistant evidence:** msg_01970fd4588b4086016ad6abad421881918a8e838335ab1bcd,msg_01970fd4588b4086016ad6be9b21908191af75c1ce384af2f8
- **Verification:** User-reported; repair claimed, independent artifact validation pending.

## A11 — Audio source restart / incomplete mix

- **Observed:** Assistant-observed source restarted near 37s; first Arabic mix too short.
- **History / cause / attempts / outcome:** Claims: used uninterrupted section (~36s brainrot) and measured its beats; regenerated complete Arabic mix and duration gate. Check sample length and source continuity, not filename/download success.
- **User evidence:** No user report retrieved for this internal observation.
- **Assistant evidence:** msg_01970fd4588b4086016ad35b8c87088191a24f4a3d257ee2d7,msg_01970fd4588b4086016ad686b8cdc48191b3ebd1864938d344
- **Verification:** Assistant-reported; repair claimed, independent artifact validation pending.

## A12 — Other render-stage defects

- **Observed:** Assistant-observed blue overexposure, crowded card edges, text clipping and doubled logo dot.
- **History / cause / attempts / outcome:** Claimed fixes: lighting/layout changes; Arabic diacritic bounds; eliminate doubled endpoint during moving-dot→logo handoff; fixed mask exit before next title. Subtitle cue overlaps separately repaired in V5.
- **User evidence:** No user report retrieved for this internal observation.
- **Assistant evidence:** msg_01970fd4588b4086016ad35d11c8308191a8f9c78ea4aede21,msg_01970fd4588b4086016ad37f8783ec8191af6cd9c601fe8774,msg_01970fd4588b4086016ad68c45d6ac8191bf2dc2ade9b1f94c,msg_01970fd4588b4086016ad68af0a0388191900e860d039a6cde
- **Verification:** Assistant-reported; repair claimed, independent artifact validation pending.

## H01 — Checkmark/card timing and broken ending

- **Observed:** Checks appear outside/early; text and elements unsmooth; broken transitions especially last scene.
- **History / cause / attempts / outcome:** Assistant diagnosis checks preceding their text and endpoint swapping two separate objects. Rebuild check/text within card and one persistent character; subframe impact blended old question and new answer, then renderer corrected; source/frame claims only.
- **User evidence:** 01a14b7e-a75f-70a8-a2ee-6c30d4b0d068
- **Assistant evidence:** msg_0bf238f475655df7016ad3d7f4cf7481919468e5df134d9a7b,msg_0bf238f475655df7016ad3db9f98bc8191b3cb2d673f0d8287
- **Verification:** User-reported; repair claimed, independent artifact validation pending.

## H02 — Character identity and hammer composition

- **Observed:** Bat-like ears, wrong eyes/smile, tether-like lines, upside-down hammer, smile persists.
- **History / cause / attempts / outcome:** V3 remove tether, one card, official oval eyes, curved short horns, glance leads hammer; user still disliked ears. V4 thinner forehead horns, gradual frown, revised subtle victory smile; horns retract after jobs, smile gone after wink. User later called overall good but beat sync still wrong.
- **User evidence:** 01a14ba1-1cae-768d-89fb-8d68c19ed646,01a14bec-8b59-77c3-b65a-88380d69acb9
- **Assistant evidence:** msg_0bf238f475655df7016ad3e0ba1e3481919d1e5cc397ec97a4,msg_0bf238f475655df7016ad3edd077808191b18e4be7372ecea8,msg_0bf238f475655df7016ad3fbac8cac819198c65bbb2b860fba
- **Verification:** User-reported; repair claimed, independent artifact validation pending.

## H03 — Wrong black-flash file / fullscreen coverage

- **Observed:** User says black variant was wrong; full-screen black/red intended.
- **History / cause / attempts / outcome:** V3/V4 explicitly versioned filenames, claimed downloaded deliverables matched reviewed variants; full-corner coverage and color inversion preserves figure/readability. Audit actual linked delivery, not merely source.
- **User evidence:** 01a14ba1-1cae-768d-89fb-8d68c19ed646
- **Assistant evidence:** msg_0bf238f475655df7016ad3edd077808191b18e4be7372ecea8,msg_0bf238f475655df7016ad3faefe80c8191897a5b83a65d28a5
- **Verification:** User-reported; repair claimed, independent artifact validation pending.

## H04 — Hammer skips beats

- **Observed:** Repeated user sync complaint despite V4 83ms descent.
- **History / cause / attempts / outcome:** Earlier four then three selected hits failed user's every-thump intent. V5 measured 24 main+2 extra hits; 26 impacts; shorten recovery between rapid hits so no skipped beat; flash same impact frame. No independent audio/visual test here.
- **User evidence:** 01a14bec-8b59-77c3-b65a-88380d69acb9,01a14e54-8165-7477-8e70-dce67a9f8183
- **Assistant evidence:** msg_0bf238f475655df7016ad3fbac8cac819198c65bbb2b860fba,msg_0bf238f475655df7016ad491c3197c819196131f102161ff8b,msg_0bf238f475655df7016ad4998cac748191a8e75875731abc3a
- **Verification:** User-reported; repair claimed, independent artifact validation pending.

## H05 — Eye/face and hammer velocity mismatch

- **Observed:** Eye travels at different speed from hammer; nod desired without deforming eye.
- **History / cause / attempts / outcome:** V6 separate face transform from eye shape, both share hammer path/speed/easing; small nod; claimed motion measurements and final MP4 review.
- **User evidence:** 01a14e95-88ee-73c2-a171-6729b5030874,01a14e91-1c88-749d-b952-e5dcb666439a
- **Assistant evidence:** msg_0bf238f475655df7016ad4a279087c81919194d2fded9a623d,msg_0bf238f475655df7016ad4a6c68a488191968a221c1ea8119c
- **Verification:** User-reported; repair claimed, independent artifact validation pending.

## H06 — Insufficient response cases across flashes

- **Observed:** Box ideas did not change every flash; more flashes than ideas; result wording too generic.
- **History / cause / attempts / outcome:** V6 26 distinct problem/result cases, both remain until next impact, shorten copy for closely spaced hits. Exact user requested صورة—فاهمها وتم الرد / فويس—فاهمه وتم الرد. Claimed no preceding-state residue.
- **User evidence:** 01a14e8e-4929-71bb-ac05-60a5e1618513,01a14e8e-a225-75ba-b4c1-99785ac5cf67,01a14e95-88ee-73c2-a171-672456b5c61e
- **Assistant evidence:** msg_0bf238f475655df7016ad4a6c68a488191968a221c1ea8119c
- **Verification:** User-reported; repair claimed, independent artifact validation pending.

## H07 — Audio offset and other seven-film internal defects

- **Observed:** Assistant found 18–48ms offset after earlier no-delay claim; slow opener and box lid near title.
- **History / cause / attempts / outcome:** Claimed sample-accurate audio trim fixed all seven while retaining picture; reinforce opener on beats and lower box-lid path. Do not elevate initial no-delay claim over later finer measurement.
- **User evidence:** No user report retrieved for this internal observation.
- **Assistant evidence:** msg_0bf238f475655df7016ad39796ab94819199f0fa9bd2974ddb,msg_0bf238f475655df7016ad39904cd248191b4787da6eae8150c,msg_0bf238f475655df7016ad391cc814c8191ae6f2209bfa3daca
- **Verification:** Assistant-reported; repair claimed, independent artifact validation pending.

## B01 — Arabic line-height

- **Observed:** Bad word/line spacing; reading pace too fast.
- **History / cause / attempts / outcome:** Diagnosis fixed line centers despite variable glyph/dot/diacritic height. Calculate gaps from glyph bounds, consistent title size; 140→120 BPM with AV re-render, duration45→52.5s; inspect max zoom/mobile reading.
- **User evidence:** 01a1487e-1a5e-7422-ac9a-d98a768a1d03
- **Assistant evidence:** msg_0bd9f608fae1fb7d016ad312bd65648191a38dcba7e08cfe70,msg_0bd9f608fae1fb7d016ad3163ca3748191a04d929cfb179ce9
- **Verification:** User-reported; repair claimed, independent artifact validation pending.

## B02 — Instagram dot / unclear problem and service

- **Observed:** Logo dot misplaced; hook and AI for FB/IG messages+comments unclear.
- **History / cause / attempts / outcome:** Claimed fix Instagram dot; hook reply late→customer gone→money lost; demonstrate matching message response, comment reply, order handoff rather than labels alone.
- **User evidence:** 01a14886-9f4d-71bc-a1cd-6cd43e6b7e3e
- **Assistant evidence:** msg_0bd9f608fae1fb7d016ad3143026948191bca7284b90691466,msg_0bd9f608fae1fb7d016ad315208e0c819188fcd4251de8f7ba
- **Verification:** User-reported; repair claimed, independent artifact validation pending.

## B03 — 3D lettering / camera collision

- **Observed:** Half-speed review found extruded message line intersects next line as camera cranes.
- **History / cause / attempts / outcome:** Retract letters to card plane before camera rise; rerender affected ~5s, compare boundary/audio/frame timing; assistant claimed full-speed and half-speed repeat passed.
- **User evidence:** No user report retrieved for this internal observation.
- **Assistant evidence:** msg_0bd9f608fae1fb7d016ad2f2faed0481918d0e05dc79506cae,msg_0bd9f608fae1fb7d016ad2f3af090c8191a4fd19cb7b34ee43,msg_0bd9f608fae1fb7d016ad2f63c1c34819186c1ac884a64af40
- **Verification:** Assistant-reported; repair claimed, independent artifact validation pending.

## B04 — 3D ribbon seams / transition overlap / RTL final

- **Observed:** Assistant observed Arabic line collision, visible 3D ribbon seams, title-space and final reading direction defects.
- **History / cause / attempts / outcome:** Claimed repaired continuous ribbon and explicit notification region; card header room and final reading direction. Exact code cause/trials not exposed, don't invent.
- **User evidence:** No user report retrieved for this internal observation.
- **Assistant evidence:** msg_0bd9f608fae1fb7d016ad2e11bc5ac81919edbf01a591fc418,msg_0bd9f608fae1fb7d016ad2e245173081919b1d781e5fef75ae,msg_0bd9f608fae1fb7d016ad2ea087f0c819180cd662bfacedb56
- **Verification:** Assistant-reported; repair claimed, independent artifact validation pending.

## B05 — New campaign model-card collisions / contrast

- **Observed:** Assistant review saw overlap in model/step cards and weak logo on blue.
- **History / cause / attempts / outcome:** Claimed underlying layout repair, separated labels, stable reading region, inspect zoom and brand contrast. No exact implementation exposed.
- **User evidence:** No user report retrieved for this internal observation.
- **Assistant evidence:** msg_0bd9f608fae1fb7d016ad336dc7664819185bd16e5af062d99,msg_0bd9f608fae1fb7d016ad338575f58819190075fbe554133dc
- **Verification:** Assistant-reported; repair claimed, independent artifact validation pending.

## B06 — Download success was HTML error

- **Observed:** Audio downloader reported success but file was error page, not audio.
- **History / cause / attempts / outcome:** Assistant caught before mux; validate actual codec/container/content before trusting success. Later reports audio installed, not independently confirmed here.
- **User evidence:** No user report retrieved for this internal observation.
- **Assistant evidence:** msg_0bd9f608fae1fb7d016ad33b7c7ea881918a34d914d720637a
- **Verification:** Assistant-reported; repair claimed, independent artifact validation pending.

## B07 — Aspect ratio language ambiguity

- **Observed:** User says horizontal 9:16 Reels; numeric target is vertical.
- **History / cause / attempts / outcome:** Assistant reconciled to 1080×1920,9:16 vertical, claimed existing dimensions correct and explicit display ratio metadata + unambiguous Reels filename. Not evidence a landscape file had actually been delivered.
- **User evidence:** 01a14941-abaf-70f9-9ea5-9c84f8357c32
- **Assistant evidence:** msg_0bd9f608fae1fb7d016ad344c704f48191baf24661f37c76b7
- **Verification:** User-reported; repair claimed, independent artifact validation pending.

## Reuse gates — recommendations, not retroactive results

- Measure actual glyph bounds including Arabic dots/diacritics at max zoom; inspect all transition phases.
- Shared transforms for card/text/checkmark and eye/face/hammer; continuous dot/line and one actor through end transitions.
- Measured beat event table including rapid doubles; same event controls impact/flash/caption; fit recovery before next hit; verify final encoded AV.
- Audition hard pronunciation; one continuous chosen-voice recording; human listening for emotion/identity, ASR for text only; length/sample gates before mux.
- Separate source assertions, contact sheets, full-resolution frames, continuous playback and listening. Validate actual delivered variant, not source filename.
- Owner-relevant pain and accurate brand/features; creative direction changes are distinct from technical defects.


## Supplementary internal findings — preserve claimed-vs-verified distinction

### A13 — State reset and frozen-motion pseudo-fix
- Observed: Card movement restarted when title changed; prior patch stopped movement rather than continuity. Brainrot print disappeared at paper contact and paper targeted point far from machine slot.
- Attempts / cause / outcome: Assistant diagnosis; rebuild card and machine paths on measured track. Root-code and verified outcome not exposed.
- Assistant evidence: msg_01970fd4588b4086016ad35b1ac5508191b8e6107b3263ddda
- User evidence: none for these exact internal observations (related general rejection preserved above).
- Verification: historical assistant claim; not independently validated here.

### A14 — Occlusion failures
- Observed: 24/7 ring and falling lost-opportunity pieces incorrectly hidden by geometry.
- Attempts / cause / outcome: Claimed corrected before final renders; implementation unspecified.
- Assistant evidence: msg_01970fd4588b4086016ad360c418108191991a32b8e73ce67b
- User evidence: none for these exact internal observations (related general rejection preserved above).
- Verification: historical assistant claim; not independently validated here.

### A15 — Residual state and invisible title
- Observed: Model icons remained in chat, shrinking second reply; heading retained white and vanished.
- Attempts / cause / outcome: Claimed icon transitions/text-color fix, followed by 80-beat review. Recommendation: scene state/visibility/color assertions plus in-between frames.
- Assistant evidence: msg_01970fd4588b4086016ad37c6b34b4819186ad29adfb1a8f97
- User evidence: none for these exact internal observations (related general rejection preserved above).
- Verification: historical assistant claim; not independently validated here.

### A16 — Export save failure
- Observed: Preview file inspection found failure in output save despite sound source/stills.
- Attempts / cause / outcome: Repair output step and direct MP4 validation gate; exact cause unspecified.
- Assistant evidence: msg_01970fd4588b4086016ad3803a36a88191a9c9d0472251bd5b
- User evidence: none for these exact internal observations (related general rejection preserved above).
- Verification: historical assistant claim; not independently validated here.

### A17 — Subtitle overlap / overly fast captions / bubble tail
- Observed: Small subtitle-cue overlaps could show two captions; two earlier captions too fast; wrapping and bubble tails repaired.
- Attempts / cause / outcome: Claimed cue intervals corrected and two translations shortened; wrapping/tail implementation unspecified. Separate caption timeline checks from visual positioning.
- Assistant evidence: msg_01970fd4588b4086016ad6ee6043b08191885deead2b520912,msg_01970fd4588b4086016ad68630a59481918b78e256a950bcbf,msg_01970fd4588b4086016ad68a3278d4819185e86b2cd97385b3
- User evidence: none for these exact internal observations (related general rejection preserved above).
- Verification: historical assistant claim; not independently validated here.

### A18 — V6 preview line touch, partial-letter reveal and perspective seams
- Observed: Two Arabic title lines touched; slow reveal showed clipped letter pieces; setup panel needed real perspective with text fixed to surface.
- Attempts / cause / outcome: Claimed fixes in V6, but user's later severe overlap complaint means V6 cannot be treated globally validated.
- Assistant evidence: msg_01970fd4588b4086016ad6f6ff5b2481918701b650dda28159,msg_01970fd4588b4086016ad6f9c43ddc8191b2a1a8c39b3d53d8
- User evidence: none for these exact internal observations (related general rejection preserved above).
- Verification: historical assistant claim; not independently validated here.

### A19 — Detailed causes supplement A02/A08
- Observed: Dot tail vanished abruptly, long fast paths, dot intersected underline and inter-card line detached. Logo redrawing morphed face into bag, changing eyes/face proportions.
- Attempts / cause / outcome: Preserve source-local geometry continuity and stable card order; replace redrawing with official logo as one rigid unit. These are assistant diagnoses, not independent code confirmation.
- Assistant evidence: msg_01970fd4588b4086016ad3dfa259048191a59ae8caa3f0c6af,msg_01970fd4588b4086016ad6e7e852d48191aa0b7b7206937004
- User evidence: none for these exact internal observations (related general rejection preserved above).
- Verification: historical assistant claim; not independently validated here.
