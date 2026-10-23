# MOKI-EP029-AUDIO-001 — Initial synthesized master leaves unnecessary headroom
- Project / episode: MOKI & PEB / EP029
- Category: audio
- Status: validated_with_limits
- Discovered by: agent; observation date2026-10-23. See attributed source below.

## Observation, cause and chronological trial evidence
Observed by audio producer: first master measured -27.17 LUFS integrated / -9.81 dBTP, peak 0.32022, despite clear numeric cue energy and no clipping. This is a mix-level improvement, not an asserted listening defect. Root cause: conservative per-instrument gains plus a common gain capped at unity, leaving unnecessary headroom. Original script/QA/cues/loudness log preserved in rejected-v1; exact old WAVs reproducible with preserved script (hashes recorded in its QA).

Trial 1: retain timbres, score, cue positions and linear stem reconstruction; permit 1.6 common gain subject to .78 peak ceiling. Rebuild all WAVs, test byte deterministic reconstruction, clipping, DC, tails, critical cue energy and loudness. Results recorded in current audio-QA.json. Best tested repair is common linear gain, not hard compression; it cannot guarantee perceptual balance without listening. Regression: final decoded AAC peak and cue cross-correlation after mux. No listening or final visual alignment claimed by audio subtask.

Validated trial 1 measurements: -23.09 LUFS integrated; -5.73 dBTP; peak 0.51236; 3,648,000 samples/channel at 48 kHz, 76 seconds; zero clipped samples; byte-identical rebuild; maximum stem sum rounding residual 1 LSB. Final mux remains pending producer encode.

## Full append-only provenance and later trials
See [preserved audio production log](../evidence/EP029/audio-lessons.md), including later source-stage reruns. This compiler preserves source review claims as scoped evidence, not a new independent visual inspection. Historical source b4416b9e95c5470a915b6fee5902eb8f532a50e605fe4096e18de0b600a3c4ad and rejected encode f320d24e10e1b7c3873b634a7f60b2aec10d10be73abdb270c79229582cf6618 must not be labeled final approved video.

## Best tested repair and prevention
Measure integrated loudness and true peak alongside clipping; common linear gain preserves stems. Listening still required for perceptual judgement.
Actual attempted changes and their test outcomes are preserved in the source excerpt/log; no hypothetical alternative is called a tested fix.

## Regression commands and evidence scope
`node qa/geometry.cjs`; `node qa/ownership.cjs`; audio-specific `python audio/verify_audio.py`, `node qa/media-audio-source.cjs`, `python qa/media-audio-verify.py`, `python qa/media-audio-knitting.py`. Run relevant tests against exact final source/video. Encoded thumbnail/fullres visual review is separate. No human listening, whole-film playback or publication claim.

## Related records / deduplication
ANIM-0009. Producer001/002 preserve early discovery provenance; GEO entries hold specific mechanisms, not additional counts of the same observations.

## Replacement final media/audio regression
New MP4 aec63c64e7b593a8c6713f46cfec8baf966ae01cc741cfb7ef446636f6a47673 and source fae49506c09a7af2a48a124f58e8db38738a3abd1dad6e42d22132baf84fc51e: complete AV decode passed;4560frames,76s,1080x1920/60fps,48k stereo. No decoded clipping;peak0.496826.10 critical windows plus83 knit hits and2placement/catch windows all zero-sample lag. Actual-source83 needle intersections/opacity pass. These are audio/numerical results only; visual review gate belongs to separate reviewer and is not asserted here.

## Final replacement validation — supersedes pending status without erasing history
Status: validated_with_limits. Final MP4 SHA256 aec63c64e7b593a8c6713f46cfec8baf966ae01cc741cfb7ef446636f6a47673; source SHA256 fae49506c09a7af2a48a124f58e8db38738a3abd1dad6e42d22132baf84fc51e. Separate reviewer covered frames0–2399 and producer2400–4559: all4560thumbnail states covered through final reinspection or exact sheet-byte identity, plus22 selected fullresolution times through reinspection/identity. See encoded-review-first-final.json and producer-review-final.json with identity ledgers. GEO005/006 corrected in early encoded frames; GEO007 support corrected in encoded50s. Numerical geometry, ownership, source rebuild and full AV decode passed. Audio master rebuild and AAC cue correlations pass without clipping. No listening, continuousAV, browserparity or everyframe-fullresolution claim. Earlier pending/rejected statements remain historical evidence, not current status.
