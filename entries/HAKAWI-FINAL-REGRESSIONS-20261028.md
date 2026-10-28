# Hakawi E01 — two final-output regressions and verified replacements

Snapshot23:51 UTC2026-10-28. Additive correction to component-closure documentation, not whole-film release clearance. Actual final-output inspection caught defects that earlier component checks missed or understated. Old frozen sources and rejected chunks remain preserved/excluded. This compiler read attributed independent and source-owner evidence; no new playback/listening is claimed.

Evidence copies and SHA256 provenance: `../evidence/hakawi-final-regressions-20261028/manifest.json`. Ranges below are global60fps half-open intervals.

## HAKAWI-FINAL-01 — hope ascent bypass and missing anatomical shin
**Actual failure:** frozen hope dispatch used `opening/dawn-landing → dawn-sabah/dawn-leg-skin` during17.2≤t<18.8, frames[1032,1128). Warm-kitchen proof did not exercise this branch. Native1065(17.75s) showed raised shoe folded against thigh/hip, implausibly short or absent visible shin. Earlier reviewer classified this uncertain/minor because stance foot was planted; root native review corrected it to MAJOR at21:36. Support alone cannot certify anatomical leg chain.

**Cause and failed trial:** legacy knee720/ankle914 (inside-shoe ankle) plus pelvis advancing over raised foot before step completion collapsed the silhouette. Merely replacing the rig while retaining old path still failed; `REJECTED-v1.cjs` preserved. Do not silently transfer unrelated repaired-gait approval to dispatch branches.

**Working correction:** local `hope-ascent-patch-2137/scene.cjs` overrides only ascent branch using existing repaired original-character adapter and actual world-feet stair mode. Original dawn head retained; global gait untouched. Leading sole middle[900,725]→upper[1040,620], other[960,735]→upper[1110,630], pelvis stays behind lead until weight transfer, lift12 authoredpixels. Two alternating supported steps finish on landing before unchanged kitchen cut. No new illustration, caption, script or audio. Warm init retains frozen prepared cache; raw native RGB18.8/20.96 exactly equals frozen baseline.

**Exact identity/tests:** source SHA256 `a01b2b2bf73099ff069865f57683e94a34e94e682efb5ccdca3bb94aaa3abd08`. Real frozen master renderer, native1920×1080/60, three temporal samples, proof[960,1320),360frames. Independent21:51 review inspected every frame in640×360 tiles, all96 ascent frames and both camera boundaries, native1065/1100: distinct knee/shin below raised shoe, coherent lift/plant/weight transfer, no prior crouch/flip. Scoped PASS. MP4 SHA `ed34c7c54b87f252d303f4f197c64754d20d2c1483720bcab6ba600e7285a583`.

**Adoption:** `REPAIR_ADOPTION.json` indexes[960,1320) without reencoding; original rejected chunks preserved. Later `HOPE_ADOPTION_SEAM_REVIEW.json` independently passes adjacent windows[948,972),[1308,1332), joins959→960/1319→1320. Seam video SHA `ced9e791a2920867ece967d485acca463f6fc064bd014792a9d6470beaf65972`; source plan SHA `6e48589e43263f83f133538dc4fc7d7a8423ab70b29ca509b8cf55e543055c9a`. Component plus adjacent seam acceptance only, not whole-master acceptance.

## HAKAWI-FINAL-02 — natural-rest sentinel discontinuity and reciprocal-gaze mismatch
**Actual failures:** original final frame19925(332.083s) contained separated translucent near hand/forearm. Initial temporal/ownership screening downplayed it as brief blur; root23:25 reopened and whole[19080,20880) original acceptance was withdrawn23:31. Native326.5 and canonical eye-contact line showed Sabah facing away. Neither matching captions nor stable ownership certifies bodily semantics.

**Cause:** two shutter samples still solved old `[387,628]`; third crossed adapter's0.01 legacy-neutral recognition threshold and switched to measured natural rest. This was a real discontinuity, not normal blur or display artifact. Unlike earlier head-pose ghosts, underlying arm trajectory must be continuous; no false cut or blanket shutter disabling is the remedy.

**Correction:** `denial-patch-2326/scene.cjs` interpolates gesture from dynamic `naturalRest('near',t)`, not legacy sentinel. Standing Sabah face+1 toward Yaser is established at existing318.16 reverse-shot return through346.88; existing wider departure cut restores original descent direction. No within-shot mirror or invented continuous turn. Roots, world feet, pot, lowering/descent sources, audio, captions and timeline unchanged. Base frozen2122 not edited.

**Identity and numerical evidence:** source SHA `574db681913498d20f8ad5b8172c0cf2e174ce272000dd4c39f7920c31b06cc2`; rejected base SHA `36d98a9b4ec97ebc770bcba8bcaeae393449167d1a07e4de9d84852a6d6d8ee2`. Changed central-frame envelope[19090,20813), replacement safety slots[19080,20880). Paired endpoints325.44/332.1/334 measured palm deltas0.0034813/0.0057395/0.0058763sourcepx, no clamp; elbow/angle continuity retained. Actual encoded19925 near error1.7763568394002505e−10, unclamped. These measurements support continuity but do not replace encoded inspection.

**Independent encoded result:**23:44 all1,800 replacement frames[19080,20880) visually inspected sequentially with per-chunk hashes. Native19590 confirms reciprocal gaze;19925 single solid hand; source owner also inspected every native hand crop19920–19935 and cut pairs19089/19090,20812/20813. Outer native19079/19080 and20879/20880 coherent, fixed pot/feet. Scoped visual PASS, no audio/listening/full-release claim.

**Adoption receipt:** `DENIAL_REPAIR_ADOPTION.json`23:45:07.962834UTC indexes reviewed replacement without reencoding, original slots remain rejected. Composition plan SHA `e8798d6bd3dd527624947dcf318955966f5ca797b562e0291516ac37d3ce92b0`; patch manifest `0f1a349fcdbf05a2a583b708c7b163262597217e855265edff4f06868917ccd5`; ledger `eb00fc9129d71bfa4a6da98e08d6ee44b2a40dcc485ba81354bb2baf4d040790`; shutter identity `317aba07a74019177e67605c32698a71cb86681172b4a1995445dcf4d6886983`. Original chunk-level status strings can remain historical; top-level adoption and per-chunk final review metadata establish scoped current verdict, not retroactive approval of rejected originals.

## Regression prevention
- Exercise actual frozen dispatch, including short custom branches and camera transitions; unrelated helper proof is insufficient.
- Independently inspect anatomical hip/knee/shin/ankle/sole chain, not just planted support or zero clamps.
- Audit semantic sentinel/mode boundaries at actual temporal subsamples. Return gestures to measured time-dependent rest, not magic coordinate thresholds.
- Compare exact narration claims to eye/contact/body direction; use motivated existing editorial boundaries without claiming unseen continuous turns.
- Preserve reviewer corrections, failed source/encode identities and raw evidence. New scoped pass requires exact replacement adoption and adjacent seam checks. Continue whole-master/audio/portrait gates separately.
