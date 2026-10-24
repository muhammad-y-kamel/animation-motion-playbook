# CANVA-MOTION-20261024 — Desktop demonstration in native portrait
- Project: Learn EG five-tools Canva advertisement; observed2026-10-24.
- Status: validated_with_limits; no full-listening or continuous-playback claim.
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
