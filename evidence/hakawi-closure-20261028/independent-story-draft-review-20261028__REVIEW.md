# Independent full-story staging review — E01 / 2026-10-28

Status: COMPLETED SCOPED FRAME-BASED STORY QA. Frozen diagnostic is NOT release clearance.

## Evidence and method
- Immutable snapshot: `hakawi-staging-freeze-20261028-1934`; freeze metadata UTC 19:36:01.469598. 960×540,15fps,7605 frames / canonical narration506.96s.
- Read all56 canonical beats in `storyboard/E01-timed-narrative-storyboard.json` (exact text retained; no rewrites).
- Initial review: render-produced stills at15-second intervals and module boundaries. These are source render outputs, NOT decoded video or playback. Decoded fullclip samples pending container completion.
- No audio listened to. No continuous playback claimed. Anatomy/native60fps acceptance outside scope; native producers retain ownership.

## Ranked findings

### 1. HIGH — Farouk rebukes the wrong screen direction (415.04–422.08;431.8–443.36)
Observed frozen render frames06300 (420s) and06525 (435s): Farouk keeps his face/body facing screen-left toward Sabah; Yaser is screen-right behind him. Canonical wording specifically turns attention to Yaser («وبصلي وقاللي» / «وبصلي بقرف وقال»). Roll of the existing left-facing head is not a gaze turn.
- Source: frozen `prototype/resume-tail/evidence-reveal-scene.cjs:14`, Farouk `face:-1`, headAngle only .07 after415.04; Yaser atx1210 versus Farouk900.
- Action: proper source-matched rightward look/head turn or motivated shot/reblocking that establishes eye contact with Yaser. Preserve notebook hand support; no mirrored identity pop.
- Producer notified; live status pending confirmation.

### 2. MEDIUM — Rania's brother conflated with furniture worker (367.28–371.36;429.84–431.8)
Canonical lists Farouk, Rania and her brother accompanying Yaser. Frozen source explicitly labels brother temporary carrier identity and reuses the same carrier for withdrawal.
- Source: `prototype/resume-tail/furniture-arrival-scene.cjs`, party-arrival metrics and withdrawal.
- Tail producer confirms still placeholder, not independently cleared. Distinct brother role/identity versus workers needed; do not silently omit named story participant.

## Known frozen gates (already assigned; avoid duplicate repair)
- Opening stair crouch; group ascent old bodies/arms.
- Witness release arm flip after68.16.
- P05 early cup/root join191.6–195.6 and contact-adapter exit227.8.
- Threshold carry approach crouch/body overlap pre314.88; live fix newer than freeze.
- Ring persistence layer drawn on sleeve after425.2; live V8 reportedly draws before actors.
- Departure stair footpath and sleeve grip/withdrawal remain native review gates.

## False alarm / uncertainty resolved or tracked
- Basil apparently absent375s: source draws pot at[750,530] BEFORE Sabah, whose body at375 overlaps it. Do NOT flag missing or move anchor from one occluded frame. Later arrival samples pending; producer confirms likely occlusion.

## Positive observations (limited to sampled stills)
- Broad chronology0–390s follows canonical deed→payments→gift→basil→closed-door confrontation→plantsetdown→notebook reveal.
- No sampled caption clipping seen. Captions are narrative subtitles, so reaction-shot subject differing from current words is not inherently wrong speaker.
- Closed door behind both actors268.67/270/285 supports required private confrontation.


## Completed decoded review (19:53UTC)
- Completed105 targeted decoded samples, one midpoint per all56 beats plus prop/scene/shot transition neighborhoods. `samples.json` records exact frame numbers/times. `sheet-01.jpg`…`sheet-09.jpg` summarize; `frames/` retains individual960×540 decoded JPEGs. Additional exact372.5s unboxing frame and4fps sequence265–268.7s retained.
- Samples decoded from completed video-only encode; verified compressed video stream SHA256 **ab7038b27ffdd292bca46b1cae1f6120d5d03d85d0a57a35bf588a3092381e0e** matches final mux `DIAGNOSTIC-E01-960x540-15fps-canonical-narration.mp4`. Therefore these are the same visuals as full canonical-audio draft.
- This is frame inspection, not playback/listening or exhaustive native60fps joint inspection. No final media approval.
- Extraction tool failed first with unescaped ffmpeg expression commas, then expression depth too long; safely retried in35-frame batches and succeeded. No production source changed.

### 3. HIGH — Furniture vanishes before its removal is ordered (372.5→382.48–425.2)
`unboxing-372.5.jpg`: same tail living room contains open carton on center chair, second chair beneath window. `frames/t382.533.jpg` and all subsequent room wides are completely empty of these objects, although Farouk orders furniture carried out only425.2+. Worker later materializes with a carton429.84+.
- Source: `furniture-arrival-scene.cjs` draws furniture/chair/carton371.36–373.52. `evidence-reveal-scene.cjs:world` draws same tailRoom without that persistent furniture layer.
- Fix: share world-space furniture state across shots; leave it until a visible/remotivated removal after the order. Respect actor occlusion and ring sill.
- Tail producer notified, latest implementation status pending. Parent informed promptly.

### 4. MEDIUM — Extended dialogue tableau needs expressive coverage review (390.96–408.6)
Decoded391.13,400,404.87 show nearly unchanged four-person wide while Sabah explains notebook provenance. Source action state has completed offer/release and does not start page opening until409.92 (Farouk support reach408.6). This is roughly17.6s without substantive visible action.
- Not an audio/story mismatch. Use restrained source-faithful facial/gaze/reaction or purposeful close coverage to sustain the spoken turn; not arbitrary zoom/padding. Do not claim continuous motion judgment from sparse samples.

### 5. MEDIUM/LOW — Rented-door style discontinuity (467.9–472.24)
Decoded467.87s already shows a flat-vector rectangular green door/background unlike detailed engraved apartment/interior assets. This is an aesthetic consistency gate, not script rewrite. Source `consequences-scene.cjs:doorExterior`. Replace/match treatment while retaining closed-door rejection; no reunion.

## Producer confirmations / resolved observations
- Farouk eyeline (finding1): producer confirms live still wrong; plans motivated reverse/reblock at415.04 and431.8. No fix independently reviewed yet.
- Brother identity (finding2): producer confirms same carrier donor, still placeholder.
- Basil375s falsealarm CLOSED: decoded378/381.47 show pot in original spot after body moves. No disappearance or anchor change warranted.
- Frozen352–354s shows Sabah alone asleep then cut to Yaser separately; earlier bedroom intrusion concern does not reproduce in this actual draft.
- Ring424.93 lies flat on white sill in insert; later frozen wide-layer occlusion remains known live-fix item, not new.
- Both actors remain indoors after painter exit; sampled265–268.7 door closes and private confrontation follows. Known crouch/overlap in passage remains a motion gate.
- Gift postjoin231.6 shows earlier set cash no longer clearly present, supporting already-known227.8 exit continuity gate; no duplicate ownership assignment.
- Warehouse485.27 box overlaps torso without clear continuous support; known native prop-contact gate remains (not newly accepted here).
- Ending506.8 retains lonely seated Yaser, locked door, dry basil in same place, text quotation without added religious imagery. No added reconciliation/hand kiss observed in samples.

## Result
**NOT ACCEPTED FOR RELEASE.** New prioritized actionable story/staging findings are Farouk wrong eyeline, vanishing furniture, brother/worker identity conflation. All communicated to parent and responsible producer. Scope complete: full canonical-story comparison + representative decoded transitions; parent/production owners retain repair and continuous native QA. No external mutations, upload or publishing performed. No permission blockers.

## 20:09UTC independent writer repair verification
**Scoped PASS for major arm continuity / nib-page support in supplied clips**, not full scene/release approval.
- Native sources under `prototype/resume-arm-20261028`: key `writing-keyvisit-v5.mp4`380 frames125.6–131.92; witness `writing-witness-v5.mp4`134 frames66.72–68.95; father `writing-father-v2.mp4`159 frames55.58–58.23.
- Inspected every decoded frame via numbered arm/page crops/contact sheets, selected full-native decode: key f164,379; witness f50,120,133; father f100. Retained `writer-native/` all numbered frames/sheets and selected native images. No source code written or changed.
- Key f156–177 (128.2–128.55) lifts and repositions to second line without cap/arm flip; f379 remains coherent on page. Witness release68.16+ no former behind-head arm flip; f120/133 stays near page. Father's supplied159-frame interval shows continuous supported page and intact arm silhouette.
- Key/witness JSON ledgers independently queried: zero true clamped entries. That alone is not visual proof; matched to above decoded checks.
- Minor dark shoulder seam/cap remains; not a detached joint or single-frame flip in reviewed clips. Pen/hand rigid, no visible nib teleport. Some dense image previews appeared to omit rectangles; native witness f50 intact, matching earlier known display-only falsealarm. Do not treat preview artifact as encoded missing anatomy.
- Limits: no audio in clips; no playback/listening claim. Father later closeup/release outside55.58–58.23 not covered; earlier key120.8–123.72 and final scene joins not covered. Fullmaster still pending.

## 20:11UTC early cup setdown v2 verification
**Scoped PASS for supplied191.6–195.7 component** (`prototype/resume-contact-v5/early-setdown-native-60fps-v2.mp4`,246 frames1920×1080/60).
- Inspected all246 decoded frames through numbered actor/hand/leg crops (`cup-native/all-01..09.jpg`), native192.4(f48),193.3(f102),195.6(f240). Selected other full-native samples retained too.
- Cup travels continuously to table then stays supported while fingers withdraw around192.5–192.8. Wrist silhouette remains coherent. Envelope remains supported by opposite hand while the empty hand returns and envelope raises/cash emerges. No premature receiver handover.
- Retreat193.3+ shows alternating foot reposition rather than prior crouch/pop. No new prop/body snap in this clip.
-192.4 close actor overlap reads as Sabah foreground occluding seated Yaser, supported by nearer feet; no confirmed body interpenetration. Composition is crowded, but not sufficient evidence to reject collision.
-195.6 endpoint cup/cash/envelope each have legible separate ownership. Component does not establish entrybefore191.6 or actual canonical-camera integration joinafter195.6. No captions/audio in this component; no fullmaster or audio clearance.

## 20:16UTC Farouk turn v4 — temporal FAIL, endpoint still PASS only
- `prototype/resume-tail/reviews/farouk-yaw-v4.mp4`,132 native60fps frames414.8–417. Inspected every decoded head/neck crop, selected native crops.
-416s endpoint genuinely looks right toward Yaser; neck attachment plausible. This closes wrong-direction still but NOT animation quality.
- **REJECT head turn:** opacity crossfades create two noses/mouths/eyes and a transparent silhouette through which wall is visible. Four intervals approximately f18–22,31–35,44–48,57–61. Exact native witness f32 =415.333s: `tail-repairs/yaw-ghost-native-01.jpg`; f46 and59 also retained.
- Not display/contact-sheet artifact: isolated encoded native crop visibly duplicates features. Source `farouk-yaw.cjs` blends adjacent independent head sprites using globalAlpha, not a continuous opaque turn.
- Require one opaque face/silhouette perframe via aligned intermediate turn or motivated editorial cut. Preserve stable book/arms/body. Both producer and parent informed immediately.
- Furniture389.5-v3 still has supported carton/chair on left, rightchair, notebook hand clear. Producer says latest chairfloorcontact lowered110px; removal now at431.8 motivated camera cut following workerwithdrawal, pending encoded boundary verification.
- Brother389.5-v1 is stale/unaccepted (too small/away gaze). New mirrored .34 source pending producer proof.

## 2026-10-28 20:25 UTC — gait and yaw follow-up (decoded frames, no playback/audio)
- Opening stairs v3: all 298 frames inspected via numbered sheets and native f81. Scoped PASS old crouch/pop repair: successive stair lifts coherent, feet supported on distinct treads, no major detached limbs or sudden position jump. Group ascent v2: all 115 frames (146.24 + f/60) plus native f41; same scoped PASS. Not a whole-master or exterior boundary pass.
- Key entry v2: all 142 frames (142.64 + f/60) inspected. FAIL floor geometry: native f68 (143.7733) shows left planted shoe sole around y920 over wall baseboard while wall/floor boundary at same x is around y950. Needs root/sole translation to floor, not merely unclamped IK. Witness gait-native/key-native68.jpg. Owner notified; no repair evidence yet.
- Farouk yaw v5 opaque: all 132 decoded head crops inspected. Source opaque poses improve v4 but rendered frames 25, 32, 39 still have doubled facial contours from temporal subframe averaging. Not cleared. Producer acknowledges subframe averaging and requested lock authored pose index across sub-samples or disable temporal blend for this feature. Witness tail-repairs/yaw5-all-01.jpg and 02.jpg. Other poses retain corrected rightward eyeline. This is not a continuous mesh yaw claim.

## 2026-10-28 20:37 UTC — Connected P05 v1 scoped visual verification
Candidate: `prototype/resume-integration/p05-connected-v1/proof.mp4`, 2415 native 1920×1080/60 frames, 191.6–231.84 s. Visually inspected every decoded frame f0–2414 sequentially in `p05-connected/all-001.jpg` through `all-076.jpg` (480×270 per full-frame tile); selected native decoded handover f1988/f2004 and drinking f2116 in `contact-native-01..03.jpg`, plus prior early-setdown native proof.
**Scoped PASS:** no major body/prop snap, unsupported cash transfer, false early handover, or old deep-crouch exit gait observed. Cash remains in Sabah's palm until Yaser's fingers contact; it transfers to Yaser then lies on table. Envelope remains in Sabah's other hand. Cup is supported on table, lifted with fingers to mouth and returned. Camera cuts at 195.6/f240, 227.8/f2172 and 228.6/f2220 preserve semantic staging and prop continuity. Sabah's turn occurs during Yaser closeup, not a visible within-shot mirror pop. Final exit through f2414 maintains alternating steps. Captions remain readable within frame. Close foreground occlusion is not evidence of actual interpenetration.
Limit: all-frame inspection was reduced-resolution sequential decoded stills, with selected native checks, not pixel QA of every frame, real-time playback or listening. Does not validate outside candidate boundaries or authorize whole-master release.

## 2026-10-28 20:38 UTC — Key-entry v3 floor correction
Candidate: `prototype/resume-gait-20261028/key-entry-v3.mp4`, SHA256 `3798ec20c659c052be43b533db9b482cc11b1665d3afcf00dbd1aaa411fa89e5`, 142 frames at 60 fps. All frames inspected sequentially in `gait-native/keyv3-all-01..05.jpg`, plus producer decoded native f68 `key-entry-v3-review/native-03.png`.
**Scoped PASS; v2 floor defect CLOSED.** At f68 (143.7733 s), the full planted left shoe heel/sole now lies below the wall baseboard on the floor. Early left-edge emergence, subsequent alternating steps and stance remain continuous; no old deep crouch or teleport. Joint root/scale correction does not break hook reach in later camera cuts. This is decoded-frame visual inspection, not audio/playback or a master-wide pass.

## 2026-10-28 20:40 UTC — Farouk yaw v6 frame-locked
Candidate: `prototype/resume-tail/reviews/farouk-yaw-v6-frame-locked.mp4`, 132 frames, 414.8–417 s. Inspected all 132 decoded native-resolution 360×320 head/neck crops sequentially in `tail-repairs/yaw6-all-01..05.jpg` and native whole-frame f0.
**Scoped PASS; v4/v5 double-face ghosts CLOSED.** Prior f25/f32/f39 duplicate eye/nose witnesses are clean. Five discrete authored poses change at f18/25/32/40, with no alpha ghost in any decoded frame; final rightward gaze targets Yaser and neck remains attached. This is intentionally stepped authored yaw, not a smooth 3D rotation. No audio/playback/full-tail pass implied; other tail contacts and furniture/brother continuity remain separate gates.

## 2026-10-28 20:43 UTC — Warehouse v8 and lowering boundary v2 latest
- `prototype/resume-tail/reviews/warehouse-contact-v8.mp4`: **scoped visual PASS**, 250 frames, 483.2–487.3667 s. Every frame inspected sequentially in `tail-repairs/warehouse8-all-01..08.jpg` at 640×360 per tile, selected native decoded f62/f178/f211. Both hands support box lower corners during lift/carry; box lowers onto tabletop before withdrawal of hands. Alternating gait remains coherent behind table. No unsupported reset or major arm snap observed.
- `prototype/resume-tail/reviews/lowering-boundary-v2-latest.mp4`: **scoped editorial continuity/support PASS**, 264 frames, 313.9–318.3 s. Every frame inspected in `tail-repairs/lowering2-all-01..09.jpg`, selected native f59/f152/f256. f59 (314.8833 s) cuts from standing carry to crouched close insert; hands/pot descend together to landing and release after placement. f153 cuts to Yaser; f256 returns to Sabah standing with pot preserved on landing. These motivated camera cuts provide coherent edited action coverage, not continuous standing-to-squat or squat-to-stand animation proof. No within-shot body snap or broken ownership found.
Both findings are sequential decoded-frame visual review, not actual playback/listening or whole-master release acceptance. Native images `warehouse8-native-01..03.jpg` and `lowering2-native-01..03.jpg` preserve selected witnesses.

## 2026-10-28 20:45 UTC — Brother and withdrawal native witnesses
Viewed latest producer native images `resume-tail/reviews/brother-arrival-368-v3.png`, `brother-furniture-389.5-v2.png`, `withdrawal-431.79-v2.png`, `withdrawal-431.8-v2.png`.
- **Scoped still PASS:** distinct beige-shirt adult brother now differs clearly from red-shirt carrier, appears consistently with Rania in room, and latest arrival brother feet lie on top landing instead of wall base. Does not prove his whole arrival trajectory.
- **Scoped camera-boundary continuity acceptable:** furniture persists through 431.79 (worker carries carton out, chairs remain), and is absent after explicit tighter camera cut431.8 following withdrawal. No within-shot pop is shown by these two witnesses. Still-boundary evidence only, not all-frame worker/chair removal animation.
- **Uncertain separate floor support:** Rania's arrival368 shoes around x1030–1160/y775 appear over the riser between top landing edge (~730 at that x) and lower tread (~800). Farouk may also merit tread verification. Relayed to root/tail owner for existing family reviewer; do not treat brother landing correction as clearing other actors' stair support.

## 2026-10-28 20:59 UTC — Remaining finite tail gates
All checks below use sequential decoded frames and selected native stills, not actual playback/listening or master release approval. Evidence sheets are under `tail-repairs/`.
- **Ending join v3 scoped editorial PASS:** `resume-tail/reviews/ending-join-v3.mp4`, 248 frames, 487.3667–491.5. All frames inspected in ending3-all-01..08; native f75 and f185 in ending3-native-01..02. Two coherent stair steps lead to dry-pot cutaway, then chairless seated Yaser on the same green-door landing. The cutaway covers sitting; continuous sit animation is NOT demonstrated.
- **Furniture sale v3 chair/contact PASS with explicit repayment limit:** 379 frames, 476.8833–483.2, all sale3-all-01..12, native f100/f250 sale3-native-01..02. Chair stays grounded while hand reaches and rests on top rail. At f217 (~480.5) a symbolic document overlay illustrates repayment; there is no physical payment handover to certify. Caption conveys the event. No unsupported forced chair carry remains.
- **Departure v3 release FAIL, now superseded:** all 369 frames 448.25–454.4 inspected in departure3-all-01..12, native f70/290/340/368. At f287→288 (453.0333→453.05) grip donor swapped abruptly to detached hands with nearly unchanged framing. Eight-frame release-boundary.jpg labels 0..7 correspond f284..291. Owner accepted and replaced this seam.
- **Sleeve release v4 scoped editorial PASS:** 114 frames 452.4–454.3, all release4-all-01..04; native f39/f90 release4-native-01..02. At f39 (453.05) an explicit tighter camera cut establishes released hands; independently separated opaque arm parts subsequently withdraw. No ghost or warped hand observed. This edited action does NOT prove continuous finger opening; it closes the prior same-framing pose-pop failure through distinct shot coverage.
- **Sabah lookback v2 scoped PASS:** 150 frames 454.3–456.8, all lookback2-all-01..05 plus native f72. Opaque head poses at f13 and f21 turn gaze toward Yaser with collar attached and unchanged bag/feet/body. Native72 confirms missing rectangles seen in sheet display are not present in the encoded native witness.
- **Family arrival v4 scoped landing-support PASS:** 245 frames 367.2833–371.3667, all arrival4-all-01..08 plus producer native family-arrival-368-v4.png. Rania, Farouk, Yaser and distinct beige-shirt brother are already on the actual upper landing, with soles on the top plane throughout. Replaces the rejected diagonal family-root translation over risers. This is an already-arrived tableau while worker transports a box, NOT continuous family stair-climb proof. Worker retains coherent box support during the viewed path. No source edits made by reviewer.

## 2026-10-28 21:01 UTC — Lookaway/first exit step
`resume-tail/reviews/sabah-lookaway-exit-v3.mp4`, 145 frames 461.1–463.5167. All frames inspected in lookaway3-all-01..05; native f110 in lookaway3-native-110.jpg. **Scoped PASS**: opaque head turns away before movement; first descending step places leading shoe on lower tread while rear shoe remains on upper tread, bag maintained. Clip does not show entire offscreen exit. Tail owner is producing current pursuit proof (old gait component is not current cuff) and warehouse v9 after discovering a master/helper consistency difference. Warehouse v8 pass must not automatically be transferred to the newly wired master movement.

## 2026-10-28 21:08 UTC — Final current finite tail proofs
- **Current pursuit live v4 scoped approach/support PASS:** `resume-tail/reviews/departure-pursuit-live-v4.mp4`, all 164 frames 443.3667–446.1 inspected in pursuit4-all-01..06, native f60/f163. Yaser descends and settles beside Sabah without tread teleport, then reaches toward her hand/cuff. Native f163 shows approaching fingers, NOT a closed sleeve pinch; actual grip is established by the later close insert, not proven by this approach clip.
- **Warehouse v9 master-gait scoped PASS:** `resume-tail/reviews/warehouse-contact-v9-master-gait.mp4`, all 249 frames 483.2–487.35 inspected in warehouse9-all-01..08, native f110/f190. This supersedes v8 for the explicitly imported repaired movement path. Continuous gait behind table; box supported by both hands during carry and placement; hands withdraw after table support. No unsupported reset observed. Producer separately reports representative direct/master RGB equality; reviewer did not independently run that comparison.
- **Door refusal/phone v3 scoped PASS:** `resume-tail/reviews/door-refusal-phone-v3.mp4`, all 261 frames 467.9–472.25 inspected in door3-all-01..07, native f85/f230. Arm raises to knock at closed door, retracts, and phone is supported in palm; door remains closed. Last f260 cuts to seated old-room shot. This does not prove device retrieval from a pocket or any audio knock.
All finite assigned component checks now have scoped verdicts. No whole-master acceptance, audio playback, or continuous actions hidden by editorial cuts are claimed. Source unchanged by reviewer. Current tail proof SHA256 manifest: `TAIL_CURRENT_PROOF_SHA256.txt`.

## 2026-10-28 21:12 UTC — Explicit final dependency deltas rechecked
- `door-refusal-phone-v4-reachable.mp4`: **scoped PASS**, all 261 frames 467.9–472.25 reviewed in door4-all-01..09, native f85/f230 door4-native-01..02. Reachable-target shift preserves coherent knock/retract and palm-held phone; no new arm snap or support loss. Supersedes door v3 current-source approval, same scope limits.
- `warehouse-release-rest-v10.mp4`: **scoped PASS**, all 51 frames 486.5–487.35 reviewed in warehouse10-all-01..02 plus native f45. Box remains table-supported as hands withdraw; transition to natural arm rest does not snap. This replaces the affected final interval of v9; v9's unchanged earlier lift/carry/gait coverage is carried forward on the producer's explicitly bounded source delta, not a newly rendered full-clip claim.
These were the last announced changes within the assigned finite tail checklist. Hashes appended below the earlier candidate hashes in TAIL_CURRENT_PROOF_SHA256.txt. No whole-master/audio approval implied.
