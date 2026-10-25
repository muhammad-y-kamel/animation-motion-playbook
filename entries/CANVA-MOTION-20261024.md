# CANVA-MOTION-20261024 — Desktop demonstration in native portrait
- Project: Learn EG five-tools Canva advertisement; observed2026-10-24.
- Status: REOPENED after user rejection; see authoritative current-status section below. Prior technical evidence retained; no full-listening or continuous-playback claim.
- Discovery: reviewer for geometry, cursor, visual causality, readability and CTA overlap; agent for ASR/tooling failures. These were autonomous findings, not user-reported defects.
- Toolchain: @napi-rs/canvas deterministic1080×1920, FFmpeg H.26430fps/AAC; frozenv2.
- Exact identities: [artifact receipt](../evidence/canva-five-tools-20261024/artifact-hashes.json).
- Failed/earlier source: [frozenv1](../evidence/canva-five-tools-20261024/render-frozen-v1.cjs); corrected source: [frozenv2](../evidence/canva-five-tools-20261024/render-frozen-v2.cjs). Earlier preliminary source failures are attributed review observations, not fully reconstructed before/after footage. The partialv1 encode was stopped and not delivered.

## Chronology and final evidence
1. Independent reviewer found squeezed resize products, generic cursor routes, missing intermediate data/size-selection steps, small controls and caption/CTA risks. Producer implemented native-format contain layout, tool-specific paths, data-table/link steps, camera bounds and full captions.
2. Re-review found duplicate cursor interval0.40–0.45, resize action before click, bulk result before button, and CTA question/caption conflict. Frozenv1 encode was stopped; frozenv2 was rendered instead.
3. All322 approved words are covered exactly once in captions; speech audio was generated once and reused. No narration shortening to fit55s.
4. Producer inspected encoded contact sheet at5,19.48,23.8,36.72,43,59.44,66,83.7,84.3,88,109.5,111.1,112.5,117,129,136,141.5,145.5seconds. Independent reviewer inspected contact sheet and full-resolution84.3,88,111.1,141.5s; no new major geometry/boundary/readability/overlap defect observed. This is sampled evidence only.
5. Full final decode completed with zero errors. Final video146.466667s; audio146.453991s. Separate ASR checks do not constitute listening.
6. All three Library creates succeeded with local metadata; sourceZIP integrity passed and no credential-pattern matches were found in included text. No public publication occurred.

Evidence: [audit](../evidence/canva-five-tools-20261024/final-audit.json), [probe](../evidence/canva-five-tools-20261024/final-media-probe.json), [base ASR](../evidence/canva-five-tools-20261024/asr-gross-content.json), [small CTA ASR](../evidence/canva-five-tools-20261024/asr-price-content.json).

## Native portrait product geometry
- Fault: resized product image was squeezed into square/story/banner rectangles.
- Cause: destination width and height independently scaled the same source bitmap.
- Fix: preserve intrinsic aspect ratio, use contain scaling inside each independently composed format.
- Test: independent source/still review cleared distortion; encoded sample review passed.

## Cursor and narration alignment
- Fault: shared cursor route did not point at each tool; overlapping generic and drag cursors briefly appeared.
- Cause: one route reused for tools with distinct panel layouts.
- Fix: tool-specific paths driven by provider character-alignment anchors; generic grab cursor ends at phase0.40, attached drag cursor begins after0.40.
- Test: source inspection and fresh stills; encoded sample review passed.

## Action before click
- Fault: resized formats and bulk results appeared before the relevant button press.
- Cause: result animation began at generic phase0.40 or0.67 rather than the tool-specific action phase.
- Fix: resize begins0.60 after0.58 click; bulk begins0.69 after0.67 click. Maintain causal order.
- Test: source/still clearance; encoded boundary samples reviewed.

## Mobile readability and camera bounds
- Fault: tiny desktop labels and camera focus could expose outside-frame gaps.
- Fix: native portrait composition, focused1.65× zoom, camera center clamped to viewport coverage, same transform for pointer/UI.
- Test: independent fresh still review, readable40px captions, max2lines.

## CTA and captions
- Fault: premature CTA elements and possible final question/caption collision.
- Fix: cue button and question at their actual paragraph starts; question y1580; captions y1645–1790.
- Test: all322 approved words covered exactly; question stays above caption.

## Speech QA false positives
- Fault: base Whisper misrecognized149 as unrelated digits.
- Cause: weak recognition model and dialect orthography; ASR output is not an acoustic ground truth.
- Fix: stronger local small-model short-segment check recovered149 and guarantee/email/support correctly; no paid voice regeneration.
- Rule: never certify Egyptian vowels/emotion from transcript alone; never spend credits solely to chase noisy ASR.

## Local ASR tooling compatibility
- Fault: model cache tried read-only home; PyAV rejected metadata_errors argument.
- Fix: explicitly scoped writable HF_HOME/HF_XET_CACHE; decode via FFmpeg float32 mono16k and pass NumPy samples to Whisper.
- Test: complete base transcript and small-model CTA transcript generated successfully.

## Missing intermediate interface steps — reviewer finding
Initial bulk/resize presentation lacked clear data-table→field-link→generate and size-selection steps. Adding only a final result was insufficient. The repaired illustration includes these states and maps pointer/camera/action timing to narration anchors; encoded109.5/111.1/112.5/117s and83.7/84.3/88s samples cover this sequence. The interface remains explicitly labelled an illustrative simulation, not current live Canva UI or a validated walkthrough.

## Prevention at future stages
- Layout: preserve image aspect ratio and compose each native format independently; no crop-only substitution for mobile scene design.
- Motion: use one absolute-time action ledger; click precedes result, one pointer owns a drag, cursor shares UI camera transform, camera center stays within coverage bounds.
- Semantic review: show required intermediate data states and inspect actual encoded boundary samples, not function names.
- Audio: source text stays immutable; separate phonetic layer, one authorized master, reuse good output. No paid repair based solely on weak ASR.
- Release: freeze source before encode, preserve rejected attempts, bind review to exact hashes, distinguish decode/stills/ASR/listening/playback/publication.

Related mechanisms: ANIM-0002(camera coverage), ANIM-0013(review invalidation), Hakawi source/ASR gates and native-portrait gate. This cross-project occurrence does not broaden previous validation or certify all future software interfaces.


## Reopened after user rejection — 2026-10-24 (authoritative current status)
**Status: REOPENED / unresolved.** The earlier `validated_with_limits` assessment only described technical and sampled checks; it did not establish creative acceptance or an authentic product demonstration. Do not treat the earlier “after click” wording as proof that a visible press event actually occurred.

### User-discovered failures and inspection results
1. **Pointer does not click.** User identified absent clicking. Inspection of the delivered frozen renderer found both cursor calls passing click=0 (`cursor(px+pw*.55,py+ph*.55,0)` and `cursor(mix(a[1],b[1],cp),mix(a[2],b[2],cp),0)`). The click-pulse branch never ran. Earlier still/phase-order checks missed the missing click event entirely. This is a QA false pass, not merely a new preference.
2. **Not the real Canva interface.** User rejected the illustrated interface. Labeling a mock interface as illustrative avoided claiming live capture but did not satisfy the requested Desktop walkthrough. Root cause: substituting a generic drawing for task-required product capture. Required repair: actual current Canva editor, real tool activation, and corresponding visible UI result; no fabricated success sequence.
3. **Slow, boring narration.** User rejected pacing. Technical duration/ASR checks did not validate engagement. A non-destructive FFmpeg atempo=1.16 preview of the existing master was prepared (opening plus first tool, about 23.7 seconds); pitch preserved and no new paid generation. This is a proposed repair awaiting feedback, not verified naturalness or an audition claim. Source text remains unchanged.
4. **Wrong LearnEG/Canva branding.** User rejected generic branding with logos. Root cause: reused generated charcoal/gold visuals were mistaken for identity authority. Recovered original user-uploaded 124506.jpg (Library libfile_82ce811db4d08191a3d3d3bfe23a39d0) establishes LearnEG blue #1075AD and white circular growth-arrow emblem/wordmark. Official Canva SVG uses teal/violet gradient. A new 1080×1920 style proposal preserves the intact original LearnEG image; it is a proposed co-branded composition, not proof of an official partnership.

### Repair attempts and evidence boundary
- Browser authentication succeeded. Current Canva account offers only a team named “Canva Pro” explicitly marked Free (480 members), plus Personal explicitly Free (1 member). Canva displayed that this team’s Education plan ended and premium tools such as Background Remover are unavailable. Team NAME is not entitlement. No purchase, trial, eligibility submission or access-control workaround was attempted. Actual premium-tool capture remains blocked pending active authorized access or user-supplied real recordings.
- New style preview: libfile_6429eb0f396c8191bf7bcd89ec3f5dce, LearnEG-Canva-Style-Proposal.png, version0. Inspected full-resolution; no fake editor is present.
- Pace preview: libfile_822601818d0c8191a64d3feb7152368b, Haytham-Pace-Preview-116.mp3, version0. Existing recording only. No claim that pronunciation or emotional delivery has been fully listened to.
- During style rendering, @napi-rs/canvas corrupted the official SVG pattern gradient; rasterizing the official SVG through sharp at 2× fixed the observed checkered artifact. Intermediate font weight650 dropped an Arabic line; supported700 restored it. Fresh full-resolution PNG inspection verified those two local rendering fixes only.
- Original delivered files and source remain preserved. No replacement final video has yet passed review.

### Strengthened release gates
- Validate pointer press on the actual encoded frames: pre-press, down/visible feedback, release, and correct resulting UI state. A cursor route, source phase constant or result animation alone is not click evidence.
- Confirm product-demonstration fidelity before building: real UI vs an explicitly authorized illustration. A disclaimer cannot substitute for the required output.
- Confirm brand provenance from original user assets before adopting colors, fonts or previous generated templates.
- Evaluate pacing with a short representative preview early; technical loudness and ASR cannot establish engagement.
- Separate authentication, workspace name, paid entitlement and successful tool execution. Never infer one from another.
- Reopen acceptance on user-reported defects; retain old technical evidence without presenting it as proof the rejected outcome was correct.


### Follow-up: no-spoiler cover and reveal staging — 22:17 UTC
User explicitly prohibited individual tool names both on the cover and anywhere in the video before each reveal. The preceding informational cover still listed names at its bottom; removed those lines from render-cover.cjs and inspected the actual 1080×1920 output. Cover now contains only “أقوى ٥ أدوات برو في كانفا”, brand assets and generic numbered cards. Library identity libfile_6429eb0f396c8191bf7bcd89ec3f5dce preserved, version2; previous versions retained. This cover fix is verified visually, not a claim that the future video is fixed.

Repair source now has a reveal manifest using actual master provider first-name onsets: 9.20, 29.12, 49.84, 69.40 and 93.28 seconds. Final time-stretch/edit mapping must transform these boundaries. Paragraph start or subtitle chunk start is not a safe reveal boundary: split captions so a future name cannot appear early. Inspect intro cards, labels, transitions, chapter text, background menus and hover labels. Real editor recordings must use targeted genuine framing that excludes unrevealed tool names; no fabricated UI or tool results. Approved narration and sales ending remain unchanged. Final video gate remains OPEN pending real capture and encoded-boundary inspection.

### Actual editor execution and bulk overflow repair — 2026-10-25 00:16 UTC
- Later authorized workspace access succeeded; Arabic (Egypt) UI applied as explicitly requested. This supersedes the earlier Free-workspace blocker, not the historical observation. Education use restrictions were disclosed; only user-owned neutral demonstration assets are being used. No private design migration, purchase, eligibility attestation or premium stock asset.
- Image editing remains blocked by the cloud editor's explicit WebGL requirement. Normal browser settings navigation was denied by the browser URL policy; no bypass or launch-flag workaround attempted. Parent is coordinating an authorized local browser route. Authentication and membership do not prove renderer/tool compatibility.
- Actual Resize succeeded: Instagram Story plus Facebook Cover selected, Copy and Resize completed, separate outputs verified in Canva. Actual Bulk Create succeeded with 30 original neutral phrases linked to the template's text field; editor verified 1/30. These are genuine executed UI states, not continuous video footage.
- New autonomous defect: the first bulk output clipped wrapped phrases at the bottom edge. Root cause: narrow 511.4px text box at Y923.5 in a 1080px-high template. A short placeholder fitting on one line was an insufficient variable-data layout test.
- Repair: widened text box to 900px, X90, Y865, preserving font56 and image geometry; regenerated all30 pages into a separate output, retaining the rejected output. First, middle/later and final grid rows visually inspected; visible phrases now fit inside safe margins. Final row explicitly shows pages26–30.
- Numeric-field attempt using locator fill plus Enter silently failed to commit the intended geometry (readback remained approximately511.5px/Y923.6). Ordinary click, Select All, sequential typing and Enter succeeded; readback and screenshot verified width900 and resulting layout. Never infer success from a no-error field call.
- Toast “View design” disappeared before click twice; recovered the saved result from Home instead of generating another duplicate. Home preview said20pages while actual editor showed30; verify in the opened artifact, not a stale preview.
- Current Arabic UI shows “إنشاء بالجملة” in app navigation and “ابتكار تصاميم بالجملة” within the app. Preserve approved narration; do not fabricate matching interface wording.
- Evidence files: real-ui-captures/resize-completed.jpg, bulk-generated-grid.jpg (rejected), bulk-generated-grid-fixed.jpg, bulk-generated-grid-fixed-lower.jpg, bulk-generated-grid-fixed-last.jpg. Overall final-video acceptance remains REOPENED; first-three-tool capture and final encoded click/reveal/pace QA are still pending.

### Partial real-UI montage annotation review — 00:23 UTC
A 43.103-second tools4/5 preview now uses real captured Resize/Bulk states, approved co-branding and existing Haytham narration at1.16x. It explicitly identifies itself as a screenshot montage, not uninterrupted recording. Library libfile_76ba1efc2c648191aaa42e1bdad9ec50 v0; SHA25661854c7e1cddbb85c8376e51006d1779d12616471c05dfa8e6039579cd8a9bd3.
Independent reviewer caught the initial Copy and Resize annotation at screenshotY560 pointing to the lower Resize This Design button. CorrectedY522; preserved rejected render. Also added the actual enabled Bulk Generate control at950,673 before its verified output, rather than skipping directly from connection dialog to result. Encoded13.67s and37.4s samples independently verified both corrected targets. Full decode passed with zero errors. No complete-video, audio audition or all-frame review claim. First three image-tool captures and full repair remain pending.

### User rejected screenshot montage; scope changed to animated reconstruction — 2026-10-25 01:12 UTC
The user rejected the partial tools4/5 montage: critical content was cropped, full narration subtitles occupied the wrong area, the pointer was mostly static, clicks were sparse/misaligned and lacked motion/audio. Earlier two encoded still checks only verified those selected target positions; they did not establish overall motion quality. Acceptance remains REOPENED.

Root causes in montage source: fixed narrow image crops removed full design context; literal caption cards consumed portrait space; three short rings replaced an actual cursor travel/down/up sequence; no click sound layer existed. Correction requirements: whole-context view retained, readable targeted magnifier with exactly the same world/cursor transform, short current/next action map instead of literal subtitles, every necessary interaction explicitly animated and causally followed by the relevant UI state, synchronized down/up sound cues.

The user then explicitly authorized a motion-graphics reconstruction of the same Canva interface instead of screen capture. This changes the permitted creative method; it does not authorize access-control workarounds or turn recreated operations into live service executions. Historical official English Magic Studio/Expand references are being adapted into the observed Arabic editor shell, with a focused current-tool panel and an explicit reconstruction label. Unrevealed future tool names must be omitted even from navigation chrome.

New14-second proof includes five purposeful interactions, moving pointer, press/release scaling/ripples,10 procedural click sound ticks, full context, same-world animated detail and a3-step action map. Library libfile_d734f06653fc8191be5afcf0193da152 v0; SHA256abf0dc385ee862535c652d5530b2f1a2948af3b8c9551e52dc45370995310d87. Existing approved Haytham audio reused; no new paid generation.
Proof review found and fixed: unsupported symbol glyphs (vector paths/observed icon sprites), inaccurate repeated size labels (actual format dimensions), late step highlight (switch before copy action), and a screenshot thumbnail sprite containing a baked second cursor/truncated text (use clean artwork-only sprite bounds). Source event transforms and SFX nonzero-energy timestamps recorded;14 one-second visual samples reviewed, targeted encoded frames and full decode checked. This does not constitute continuous audiovisual audition or final full-video approval.
