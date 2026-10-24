# HAKAWI-ANATOMY-021 — user caught disproportionate arms despite rig checks

Snapshot: 24 October 2026, 05:29 UTC. **OPEN / repair_in_progress**. Related: HAKAWI-CROP-013, HAKAWI-IK-014 and HAKAWI-ACTING-015 in [earlier sampled QA](HAKAWI-PRODUCTION-QA-20261024-0503.md).

## Actual observation and failed review
After receiving a 45-second 1080p excerpt and compressed full E01 v1 draft, the user said: «احا ايه حجم الدراع دا» (message `Sentinel_22737275030c8191a8f06a7d2ca0e3aa`). This explicitly rejects visible arm proportion; it is **not style approval**. Preserve the rejected v1 and before/after images.

The excerpt covers **0–45s**, not only the previously tested 0–32.32s opening. The family scene around33–45s is therefore part of the failed user-visible review scope. Do not narrow the complaint to one previously inspected pose.

Numeric IK, connected joints, limb-length checks and selected-pose passes did not catch apparent arm thickness/scale relative to body, shoulder, elbow and hand. Correct joint locations do not establish convincing painted anatomy; crop extent, transverse width, perspective and pose can make a mathematically connected arm look enormous. Exact asset/transform contributions remain under investigation rather than a proven single cause.

## Repair attempt and current limits
The production owner paused full v2 rendering. Both Yaser and Sabah, including family33–45s, are being recalibrated against the **same intact full-body references**. Do not compensate a bad isolated arm by arbitrarily resizing the whole character or changing approved text.

Required next evidence: independent first45s silhouette/body-ratio and pose-transition review; corrected encoded short review clip; then user feedback and first explicit style approval. At this snapshot no corrected encoded proof or user acceptance is established. Do not label this fixed, style-approved or publication-ready. Documentation changes do not alter scripts or media.

## Regression gate
- Compare intact full-body reference with actual composite at matched scale and camera/perspective; retain side-by-side before/after images.
- Check at rest, reaching, raised arm, contact and withdrawal, plus transitions/mirrored poses. Include both characters and family33–45s, not only a favored closeup.
- Assess upper-arm/forearm length **and thickness**, shoulder breadth, elbow width, wrist/hand scale, head and torso ratios; distinguish perspective foreshortening from incorrect source scaling.
- Verify silhouette and perceived proportion at mobile viewing size and full resolution. Joint connectivity/IK reachability are necessary but insufficient.
- Recheck sleeve overlap/alpha islands and hand contact after rescaling. A proportion fix can regress grip, elbow path or crop isolation.
- Bind independent review to exact corrected encode/hash and state sampled/playback scope. Preserve failed v1 and all trial evidence; a source patch is not a passed encoded test.
- Obtain the promised style feedback before treating the direction as user-approved; no publication claim follows from a corrected preview.
