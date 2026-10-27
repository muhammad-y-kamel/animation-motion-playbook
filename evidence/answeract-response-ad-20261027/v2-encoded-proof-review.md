# Independent encoded V2 proof review

Artifact: `qa/v2/full-motion-proof.mp4`, 540x960, 15fps. Bound source hash recorded in `qa/v2/proof-source.sha256`: `bb43ae48fa0e21df2061028585208cf778df94584efe9a6fd58272b96ac56e93`. Later source edits are not covered by this encoded review.

## Evidence
Extracted actual encoded frames at 5fps over 53.2–56.1 seconds, plus key 39.6/39.8/40.0, 48.3/48.5/48.7, 60.2/60.4/60.6 transitions. Viewed `qa/independent/encoded/contact.jpg`. FFmpeg complete video/audio decode produced no errors. FFprobe yielded 1029 video frames; PTS from0 to68.533333 with successive steps0.066666–0.066667, no nonmonotonic values and no gaps above0.07 seconds. Video duration68.600000; audio/container68.623991, a24ms audio tail (less than one video frame). These numeric checks do not establish perceptual playback smoothness.

## Findings
No overlap/clipping HIGH found in these sampled encoded transitions. Sequential fades prevent superimposed text. Results show public comment, delivery message, order-intent/details request, and complaint escalation.

HIGH comprehension/pacing concern: the first three reply labels are strongly legible for approximately0.2–0.3 seconds each (about3–4 encoded frames); each question/reply stage lasts roughly0.5–0.8 seconds including entry and exit fading, with the reply arriving later. This is adequate to glimpse a number such as850, but not a reliable reading window for whole delivery/order exchanges while narration proceeds. The complaint response has a longer subsequent hold. Shortening text helps but does not remove the rapid-replacement problem.

Suggested repair: retain completed compact exchanges for at least1–1.5 seconds in separate lanes while later semantic beats enter, or make one persistent chat grow instead of replacing its text. Avoid extending audio or inventing a timing offset. Preserve complaint/owner alerts and uncluttered CTA.

No human playback or listening was performed. No claim about audio naturalness, cue quality, exact perceived sync, or final1080 artifact is made.

## Readability repair retest
Reviewed NEW actual encoded `qa/v2/results-reading-proof.mp4` (4.6-second excerpt beginning at main53.1), extracted sequence `qa/independent/reading/contact.jpg`, and native `qa/v2/results-persistent.png`. Current source hash `5101dcb688eefacd4eb1e8068ab786e89663c6b639cfe27bffc54e46837a01a6`.

Prior HIGH rapid-replacement reading issue is resolved in this excerpt: completed exchanges now persist in separate rows. Approximate full-opacity reply holds before the57.13 fade: price3.47s, delivery2.79s, order2.08s, complaint1.39s (source timing corroborated by extracted encoded samples; excerpt sampling does not certify exact onset to a frame). The encoded excerpt fully decoded without errors. No HIGH overlap or clipping seen. Order-detail subline and complaint heading are close but do not overlap in the native inspected image. The latest reply-font increase is covered by native still/source inspection, not asserted to be present in the earlier excerpt.

Separately viewed current source frame19.2: fading-product illustration remains clear of clock, offline label and bottom headline; no HIGH issue. Only this targeted source change is covered, not a new full video encode. No playback/listening claim.
