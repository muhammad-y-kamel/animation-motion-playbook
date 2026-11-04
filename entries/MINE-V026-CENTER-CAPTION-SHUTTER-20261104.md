# Mine V026: hold caption selection at the output-frame center

## Defect and cause

The renderer averaged three shutter exposures after each exposure independently selected Arabic caption text. At a caption boundary, two different nonempty strings could be blended into one delivered frame. Exact decoded delivery witnesses confirmed this in Short 1 at global/local frame 2339, Short 3 at global 13393/local 2455, and Short 4 at global 17939/local 1326. These are confirmed individual frames, not evidence of prolonged corruption.

A complete source audit of 34,556 centers in each layout found 435 potential mixed-caption frames per layout: 425 text-to-empty transitions and ten two-nonempty-string transitions. Potential exposure differences are not all confirmed delivered defects.

## Narrow correction and tests

V026 adds an optional caption clock to the actual player. All three scene exposures retain their original times, while caption selection alone uses the output frame center. Default player calls remain unchanged. Script, audio, frame rate, three-sample scene averaging, encoder settings and resource caps remain unchanged.

Independent source tests covered 884 default operations, 2,652 shutter traces and 69,112 center selections. Runtime checks used the actual source preflight, lifecycle fakes and malformed/stale-source negatives.

Fresh portrait contact-entry proof covered 82 frames. Complete decoded PTS/frame and exact canonical PCM checks passed, and both reviewers inspected the sequence and selected native originals. Seventy-nine raw frames were byte-identical to the earlier proof; only three caption-boundary frames changed. A further nineteen three-frame fixtures covered the remaining collision cases in both layouts. All 57 thumbnails and 19 center originals were actually reviewed, with clean single-caption results and closed owned-child receipts.

This is caption-scoped evidence. Paper staging at frame 28254 and strong inherited camera-exposure contours at 32117 remain separate scene HOLDs. Passing text does not accept the scene or the whole film.

Source freeze: 40e855738064226797cf48159c58d9df1d51630a08cd492096a1fefea54ce554.
Runtime plan: 62b31dccf55c6d75d6c72420ebd6798bf934e0aa02e678f5949225fe477a0a8d.
First 82-frame archive: libfile_dfa9bf9ecd6881919f7d210c38cb23f8.
Nineteen-fixture archive: libfile_666fa2860b408191b3a86767e4a71f39; ZIP SHA256 bb7a8212ef43578c4ac453684e16246a999de790edb151e168fd3cc9cdd3abed.

## Historical delivery repair is a separate gate

Do not rerender historical scenes from the latest source: Shorts 1, 3 and 4 have different accepted source lineages. A bounded Short 4 PNG fixture instead repairs only the caption band of the exact decoded delivered frame. The approved band is x=0, y=1540, width=1080, height=170. Actual review found one readable caption, 182,330 changed inside-band pixels and zero changed outside-band pixels. This proves a pre-encode PNG only, not a corrected video or replacement upload. Any later lossy encode needs separate checks and disclosure; original AAC packet identity and exact old scene lineage should be preserved.

The first band fixture failed before Popen because its launcher supplied three arguments to an ownership helper requiring four. The failure was retained, not retried in place. R2 added an exact job/output argument contract and a no-child preflight intercepting the real launcher and worker exec path. Eleven fake cases and CLI negatives passed before a fresh admitted run. Its one owned child exited zero, was reaped, and the adopted-child census reached ECHILD. Corrected PNG SHA256: ab559d87e530feb1d39a854b269eeeaca43d77da55ef44c2844963238cab2f17.

R1 failure and R2 scoped proof archive: libfile_b56479002384819194cfb2acdb580019; ZIP SHA256 443320ea77b44b4b05d4cb3adce4a11dd6f4712c06683c223a58d13e9afe29af.

No normal-speed audiovisual or listening acceptance is claimed. No scheduled original was retired on the basis of these fixtures.
