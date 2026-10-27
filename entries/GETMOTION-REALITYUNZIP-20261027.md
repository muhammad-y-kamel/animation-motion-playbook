# GETMOTION-REALITYUNZIP-20261027 — Technical integrity is not semantic acceptance

- Project: GetMotion; episode: GMX03_AR (RealityUnzip), first of a 40-output rebuild.
- Status: **OPEN — v1/v2 rejected; independent v3 review NOT PASSED. No final-media acceptance.**
- Severity: blocking creative/continuity defects; rendering infrastructure and review limitations tracked separately.
- Observed: 2026-10-27. This entry is a bounded snapshot, not an audit of every historical GetMotion conversation.
- Discovery: user for rejection of the old 24 outputs; independent reviewer for fresh semantic defects; agent for renderer/XML/portability trials. Component attribution follows below.

## Visible symptom and source evidence

User message `Sentinel_319945147b0c8191ae1f4a9d35977778` rejected all 24 recovered videos as unrelated to the requested content and instructed a fresh rebuild from the ZIP, one video delivered at a time. Subsequent messages `Sentinel_785ef416c09081918473b0567bc979d7` and `Sentinel_909a82396d9c8191b1cca0e60b44171c` requested irreversible deletion. The exact 24 Library outputs were moved to trash; permanent erasure was **not** available or established. Original ZIP, audio, prompts and assets remain intact; old local renders are rejected evidence, not approved inputs.

The recovered files passed full technical decode. Limited sampled contact-sheet inspection did not establish their adherence to the complete prompts, continuous motion or sound. The user's rejection supersedes any implication of artistic acceptance from those checks. The original conversation `6ad8c338-55c4-83ea-8f0f-b2165a26c23c` remains subject to a safe-read limit; this case uses the recovered ZIP and current reports, not a claimed complete reading of that history.

Authoritative input: `hi.zip`, Library `libfile_8438452da7c481918c98ef3ee774c755`, SHA256 `81f558d99c0ce014dd16b502a2b7b846909efeaf7757b3fcc7c60a5c4b51ba23`. Prompt `01_PROMPTS/GMX03_RealityUnzip.txt` requires an actual continuous zipper-connected spatial event, not a generic icon explainer. Original Arabic narration is locked, SHA256 `cb5a1248105cc34f5687dc099fd570b798c746072214ca13aa033b18e3ea114c`.

See [artifact provenance](../evidence/getmotion-rebuild-20261027/artifact-hashes.json), [v1 report](../evidence/getmotion-rebuild-20261027/independent-v1.md), [v3 report](../evidence/getmotion-rebuild-20261027/independent-v3.md), and [renderer evidence](../evidence/getmotion-rebuild-20261027/renderer-evidence.md). Copied reports are attributed evidence, **not new independent pixel inspection by this compiler**.

## Root cause and chronological trials

| Component / origin | Symptom and cause | Attempt and test | Actual result |
|---|---|---|---|
| Semantic acceptance / user | Successful decoding and selected stills cannot prove source-specific choreography. | Recover and decode old 24; user reviews deliverables. | All 24 rejected. No blanket technical-pass-to-final inference permitted. |
| Hook / reviewer | v1 slider begins outside the viewport; aperture finishes too early; a 2D scale substitutes for camera movement through the gap. | v1/v2 source and native four-sample stills, including frames 0/15/30/60 at 60 fps. | Rejected before full export. |
| Hook repair / reviewer | v3 makes slider visible and adds projected opening. | Source and native stills 0/15/30/45/60/90. | Visible slider/gap improvement evidenced. Camera still does not cross the seam plane; deleting mechanics is not a crossing. NOT PASSED. |
| Ownership / reviewer | Detached slider, incompatible seam front and repeated scene replacement. | Mask incoming scene over outgoing; inspect v3 transitions. | Better reveal, but 21 independent icon scenes still lack causal object handoffs. A mask is not proof of shared object identity. |
| Geometry / reviewer | Teeth become separate markers at mismatched positions; line/circle changes and stage angles reset. | v3 source/still review. | Teeth positions ignore hero scale, then disappear. Circular boundary is replaced rather than continuously transformed. OPEN. |
| Finale / reviewer | Full logo revealed behind unrelated approximate trace; pull-tab does not become CTA. | v3 frame 3120 and source. | Offset trace and detached arrow tip persist. Exact asset contour and shared tab ownership still required. |
| Composition / reviewer | Seam/slider crosses protected text; cover-up rectangles and unmotivated object paths remain. | v3 frames 180/190/1045 plus source. | OPEN. Positive Arabic shaping in selected labels does not waive overlaps or missing actions. |
| Browser runtime / agent | Chromium fails before capture: socket operation not permitted. Supported escalation did not execute due to a read-only sandbox setup failure. | Ordinary launch and one supported escalation. | No browser frame captured. No security-flag workaround or denied-path inspection attempted. Infrastructure block, not scene pass. |
| Direct SVG fallback / agent | Browser unavailable; need deterministic capture without claiming HTML/browser equivalence. | Same SVG generator exposed through HTML seek; native Sharp/librsvg fixtures, four distinct shutter samples. | Synthetic 12-frame 320×180 and 1080×1920 fixtures encoded/decoded at 60 fps; mask and one Arabic phrase sampled. Bounded engine evidence only; browser parity and final-scene review remain unverified. |
| SVG XML / agent | Invalid generated XML prevents native rendering. | Repair generator XML; subsequent source stills produced. | Subsequent rendering is evidence of a local repair, not proof every time-dependent SVG is valid. Full-range regression still required. |
| Dash portability / reviewer + agent | librsvg does not apply the intended pathLength-normalized dash progress; zero-progress outline appears complete. | Replace normalized dash assumptions with explicit lengths; inspect v3. | p0 outline improved. v3 helper still lacks S support and approximates A arcs; general path progress NOT validated. |

## Best validated fix

**Not established for the film.** The useful bounded changes are visible first-frame slider, improved p0 outline, incoming-content masking and removal of gratuitous periodic knob/door motion. They do not resolve the central source mismatch. Preserve failed trials rather than rewriting them as successful fixes.

The next implementation should derive slider, teeth, reveal mask and transitions from one persistent centerline/carrier with explicit phase ownership. Each spoken clause needs an actual transformation and inherited end state. A storyboard assertion is not implementation evidence.

## Prevention and regression gates

Before building: read the complete prompt and frozen recording contract; write an executable shot table for every clause with object identity, start/end geometry, cause/result and inherited state. Do not substitute titles/icons for the specified technique.

Before full encode:
- Inspect the hook at 0/.1/.25/.5/.75/1 seconds; demonstrate actual plane crossing and visibility clipping, not only a projected zoom.
- Test slider at the common join of closed/open edges; derive tooth tangents from the same path.
- Compare transition entry/exit coordinates and 0/25/50/75/100% phases; inspect neighboring output frames and all shutter samples.
- Preserve teeth-to-marker identity in position, scale and rotation. Verify line→diagonal→circle continuity without resets.
- Trace the exact supplied logo geometry; keep the same pull-tab parented through CTA formation.
- Check protected Arabic glyph regions, ownership masks and full path progress including curves/arcs.
- Test arbitrary seek order and freeze exact source/assets for capture.

After encode: full decode, exact dimensions/frame count/FPS, source and output hashes, full audio identity/placement/ending, dense encoded transition inspection and native-resolution typography. 60 fps with four distinct samples and 180° shutter is a technical requirement, not semantic approval.

**Actual listening and continuous normal/half-speed AV playback remain unavailable/unperformed in the recorded trials.** Numeric audio checks, ASR, stills and contact sheets cannot close those gates. Any export lacking required review remains a review candidate; do not claim finished or fully watched/listened.

## Related mechanisms

See [ANIM-0013](ANIM-0013-margin-review-invalidation.md) for invalidating earlier review after changes and [ANIM-0008](ANIM-0008-prop-origin.md) for object continuity. These are analogous prevention lessons, not proof that the same production fix applies.

## Update history

- 2026-10-27: Added user rejection, fresh v1/v2 failure history, independent v3 NOT PASSED findings, bounded native-renderer tests and unresolved AV gates. No production source edited and no new paid generation performed by this documentation update.

- Producer follow-up at 00:26 UTC: v1 XML duplicate font-family was repaired in a separate snapshot; v2 had outgoing-scene ghosting through transparent incoming content. v4 source now attempts real plane crossing, aligned marker endpoints, opaque incoming clearing, exact logo-contour reveal and persistent artifact boundary. **All v4 semantic tests are pending; no full video exists yet.** These are attempted changes, not validated fixes.
