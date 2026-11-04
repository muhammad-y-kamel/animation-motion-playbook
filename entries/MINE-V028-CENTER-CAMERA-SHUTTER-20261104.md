# Mine V028: center-sampled camera avoids separated shutter contours

Date: 2026-11-04. Scoped diagnostic result, not whole-film acceptance.

## Symptom and cause
The delivered diagnostic frame32117 showed several displaced scene contours during the intended2.4-second wheel-entry camera move. Scene sampling was not merely blurring moving actors: each of three shutter samples also used a different fast camera transform. The source diagnosis measured about20.7–21.1 output pixels of camera displacement across those samples. Preserve the V026 scene HOLD separately from its valid center-caption result.

## Narrow correction
V028 adds an optional camera clock to player.seek. Only Mine wheel_every_day,534.32–536.72seconds, samples camera center/zoom at the frame center. Actor/scene clocks and old-stage visibility retain shutter time. The existing2.4-second path, script, audio, captions and unopted seek behavior remain unchanged. Center-caption compositing remains a separate mechanism.

Source freeze SHA256:07cba54281108fb3bae04d08c2174bea6e90f850d66e5aaccf6a3b75a39257e8.
Full diagnostic PLAN SHA256:319197f6d7388ed0bbd45af2a4814fcd56870ea7f772b07a830641a019143a90.

## Tests and actual evidence
Pure tests covered400 default calls,888 shutter cases and69,112 center calls. These are source tests, not raster proof.
An initial three-frame portrait test32116–32118 removed the separated contours in actual decoded originals.
Four bounded74-frame jobs then covered32058–32205 in each layout:296 decoded thumbnails, selected original native witnesses, both entry and endpoint. All six technical stages per job closed with direct children reaped, no cleanup errors and adopted-child census clear under unchanged sampled resource guards.
Actual reviewers saw progressive atlas travel, single contours and a stable mill endpoint. Endpoint32202–32205 matters because old-stage visibility is still shutter-timed.
Aggregate review SHA256:f55ae084906189d4af8736acbb6f2e90230bc49d3170245c6dfd395900a0f73a.
Closed evidence archive SHA256:b82686a54538db19425251ffbaf58b11f62a6a66f67b6e9fc8a8971b0a698aa3.

## Limits and prevention
This is sequential-image camera review, not normal-speed playback or listening. It does not accept ladder grip/gait, every actor action, full production or the entire film. Partially visible atlas panels during travel are explicitly retained as transitional framing, not a blanket waiver of composition defects.
Check both formats and the last opt-in sample plus adjacent non-opted frames. Do not center-sample all animation indiscriminately. Bind diagnostics to exact source and actual producer arguments, keep rejected evidence, and retain unchanged resource guards.
Related:[camera extents](ANIM-0002-camera-extents.md), [central caption sampling](MINE-V026-CENTER-CAPTION-SHUTTER-20261104.md).
