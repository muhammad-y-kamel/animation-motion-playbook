# Facebook opening: actual encoded all-frame review

Reviewed proof: `qa/opening-motion-proof.mp4`
SHA-256 independently computed: `e39a0e4a9378375af090611f494c39f8e24071c9d2807b69cc4637ea6c1ad71c`.

## Coverage
Decoded all 135 frames with ffmpeg (no reported decode error), then actually viewed every frame 0–134 inclusive, 0.000–8.933 seconds at 15 fps. Evidence: `qa/opening-review/sheet-000.jpg` through `sheet-022.jpg`, contiguous six-frame sheets; last sheet contains three frames. Tiles 360×640. Additionally inspected native 1080×1920 decoded frames 103 and 106 (`frames/0104.png`, `frames/0107.png`). This is a frame-sequence review, not continuous human playback. Silent provisional proof: no audio or narration timing claim. Production source untouched.

## Findings requiring transition repair
1. **MEDIUM — competing headings, approximately frames 100–111 / 6.667–7.400s.** Incoming «من معلومات شغلك» appears while outgoing «عميل بيسأل.. والرد بطريقتك» is still visible immediately beneath it, with crowded/intersecting Arabic ink at the shared boundary. Strongest around 6.87–7.13s; native frames103/106 confirm. Fade old heading completely before revealing new heading; do not crossfade both in this near-identical lane.
2. **MEDIUM — services panel shows through moving chat card, approximately frames 100–106 / 6.667–7.067s.** The new «خدماتك / تجهيز ملف جديد • مراجعة ملف» strip appears while the shrinking chat card still occupies its area. At native frame103, the incoming panel top overlays the blue reply's bottom and its text ghosts across the white card. Gate the entire services strip and connector until the card bottom has cleared its top with a positive gap (around7.13s in this proof), or place it below the instantaneous card bottom during transition. Do not fix only text opacity while leaving its panel visible.

## Other observations
- No additional HIGH defect, viewport clipping, or orphan chat header/text found in the 135 reviewed frames.
- Completed reply remains readable as one group during compaction; stable 7.5–8.93s compact layout has separated header, reply, services panel and orb.
- Initial blue reply container is visibly empty roughly0.53–1.0s before greeting appears. Minor polish option: start greeting with container reveal, or use an intentional typing indicator; not a blocking overlap.
- No full-film or final-audio approval implied. Retest every affected encoded transition frame after repair.

## Encoded repair retest — passed within affected range
New `qa/opening-motion-proof.mp4` independently computed SHA-256: `9ede7743096430c25b528a14da93780cc63270f55735f42bdc164ddcb9965175`.
Original reviewed proof preserved by producer as `qa/opening-motion-proof-before-temporal-repair.mp4` (original hash above).

Actually viewed every affected decoded frame **97–134 inclusive**, 38 consecutive frames, 6.467–8.933s, in `qa/opening-retest/sheet-000.jpg` through `sheet-006.jpg`. Last sheet contains two frames. New extraction completed without reported decode error.

Both MEDIUM findings are visibly repaired: outgoing heading disappears before incoming heading becomes visible; services panel, connector and orb reveal after shrinking chat card clears their space. No new overlap, orphan text, or clipping found in these 38 frames. Stable final layout remains intact. Frames0–96 were reviewed on original proof, not re-viewed on repaired encode; producer describes repair as transition-only. Audio remains pending and unassessed.
