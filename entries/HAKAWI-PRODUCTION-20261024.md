# HAKAWI-PRODUCTION-20261024 — bounded production trials

Scope: accepted four-story Hakawi batch, audition and one silent 8-second E01 rig proof. No claim that all episodes, portrait outputs or publication passed. Original scripts and failed trials retained. No credentials are recorded.

## HAKAWI-TTS-001 — cheerful casting and ambiguous pronunciation
Discoverer: user, Sentinel_53408ccdc8cc8191af1087c05b0e569b. Mahmoud Soliman audition sounded too cheerful; كمها and شطب were mispronounced. Profile metadata had not established suitability and Arabic spelling ambiguity was insufficiently guided.
- Failed trial: `Hakawi_E01_Voice_Sample_Mahmoud.mp3`, SHA256 `f0141948ee39cc1b11fab7538ea3d8b86b3d2121a279d916f3a87d0432fd9505`, eleven_v4, stability 0.5. Technical decode/alignment had passed but user rejected performance.
- Repair: Omar narration + Heba for Sabah dialogue, same source excerpt, only authorized كُمّها / شطّب diacritics; normalization off, no emotion tags. 32.365714s, SHA256 `6bbc891c3a8bebdafafcbf0aca48ce2c345145b510df5741b9dfdd82337ded2e`. Decode and exact477-character alignment passed. Actual runtime listening unavailable.
- User audition accepted second sample: «جامد» / «اعتمد» in Sentinel_d6cef6d73178819183a4358f12a4623f / Sentinel_740cafd8534081919929f5c34807900e. Subsequent request asks finer emotion, not rewriting or automatic new voices.
- Status: sample_user_accepted; full_episode_review_pending. Do not treat the sample's acceptance as complete pronunciation QA. Reconcile active single-voice instructions with approved casting before generation.
- Prevention: short representative audition, current verified voice access, immutable original, explicit difference ledger, contextual performance rather than unsupported crying tags. ASR/metadata cannot replace listening.

## HAKAWI-ART-002 — technical motion did not establish suitable art
Discoverer: parent review of proof-shot-0. Flat generic cutouts, identical profiles, empty framing and arbitrary posing were rejected despite60fps rendering. Replaced with original engraved kitchen and differentiated adult Sabah articulated assets. Art direction later accepted by parent at still/contact-sheet scope only, not user or full-film acceptance.
Prevention: inspect style, character identity, eyelines and story-specific action before spending on full renders. FPS is not a creative-quality metric.

## HAKAWI-CONTINUITY-003 — wrong scene state and prop semantics
Initial kitchen was old/cluttered/occupied, contradicting a newly finished room and an imagined future chair. Precise image edit removed chair, plant, rug and cookware, cleaned cupboards while preserving engraved texture and teapot tile. Initial wiping asset held a separate rag though the source says sleeve; first attempted edit failed to remove the rag, later targeted edit extended the actual sleeve. Preserve failed edits; a successful image-tool call does not prove all requested changes occurred.
Status: corrected inspected assets and sampled proof; full-story continuity remains pending. Compare positive visible scene facts and action contact with exact script, not an overall atmospheric resemblance.

## HAKAWI-RIG-004 / 007 — inverted elbow, socket holes and outlined caps
- Initial vector IK bend sign lifted elbow above shoulder for a low handoff. Bend-sign/spacing correction improved the still; that rejected generic rig was not promoted to final.
- Rich sprite's hollow socket ends produced artificial pipe joints. Filled texture edit improved sockets but left outlines.
- Trial1: clipped cloth texture ellipse at elbow looked like a mushy patch; rejected.
- Trial2: crop forearm root and reverse layering still left upper-arm cap visible.
- Trial3: crop both terminal outlines, recalculate source span237px and retain actual two-link lengths190/260px. Parent saw continuous elbow in encoded contact-sheet samples. Added foot shadow and independent slight head tilt, not whole-body wobble.
- Numeric sampled proof: ten seek times agree forward/random PNG hashes;160samples at0.05s preserve segment lengths within1.14e-13px;54active wiping-anchor samples remain within decorative tile bounds.
- Status: bounded sampled proof passed. Anchor tests do not prove full painted silhouette collision clearance, sleeve-contact comprehension or arbitrary continuous motion. Recheck endpoints, neighbors, scale and every affected final encode.

## HAKAWI-RENDER-006 — invalid partial encode after native-memory failure
Initial rich60fps/three-temporal-sample renderer exited137 after~37frames and left48-byte invalidMP4. Cause suspected native Canvas state/buffer retention and unconstrained encoder resources; OS-level root cause not proven.
- Trial1: explicit GC every5frames,2x264threads,30fps/single temporal sample produced8s1008x566 and clean decode. This did not establish1080p viability.
- Trial2:1080p still exited137 at173frames despite the earlier low-resolution pass.
- Trial3: context.reset() before every source and compositing frame, GC every outputframe,2encoderthreads completed1920x1080/30fps/8.000s,1,305,524bytes in12.073s. Full FFmpeg decode exit0 with no errors.
- Exact proof MP4 SHA256 `8026a7273f3c757a29a8386b2a530d5d95af079779c8ffc83f01592e66c64824`; renderer SHA256 `ab10ca5f5a5141d6f717d2f45da93e5abceca29b87799e32872b7b9da4b9a2e6`.
- Status: short1080p proof validated_with_limits. Sustained episode rendering, audio sync and portrait variants pending. This trial is30fps/one sample, not60fps/three samples. Do not silently generalize a technical fallback into a project's delivery specification.
- Prevention: test actual target resolution/duration/resource conditions; reject partial output until process success, metadata and full decode; profile/retest sustained workload. Reset graphics state without invalidating deterministic absolute-time rendering.

## HAKAWI-TYPE-001 — absent Arabic glyphs
Native Canvas default sans-serif failed to render brand text. Explicit DejaVuSans registration restored connected Arabic in inspected PNG. Status: still-only correction; encoded portrait safe-area and final typography not passed. Inspect actual RTL joins and glyphs, not a successful draw call.

## HAKAWI-TOOL-005 — oversized shell image payload
First image transfer unnecessarily injected base64 into shell argv and failed Argument list too long, despite a supported persisted generated-image path. Copying from the exact returned persisted path worked and pixels were viewed. Do not invent storage URLs or treat a failed transfer as a usable asset.

## Evidence and remaining scope
Local contemporaneous stage log, rig-qa.json, engraved-proof-encode-qa.json, proof-final-hashes.txt and sample receipt informed this record. Eight encoded time samples were inspected at1920x540 contact-sheet scope; no continuous human playback or full-episode listening is claimed. Parent accepted the richer visual direction with further cautions about cuff contact and varied acting. Related mechanisms: ANIM-0004 semantic grip, ANIM-0007 causal readability, ANIM-0012 state-independent seeking, ANIM-0013 hash-bound review invalidation.
