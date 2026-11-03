# Mine V019 shelf visibility and painter-depth repair

Date: 2026-11-03. This supplements MINE-V017-LEG-CONTRAST-ARAN-V023-COMPOSITING-20261103.md; it does not replace earlier findings.

## Failure and correction
The bunk bundle's support was not readable because the shelf brackets matched the wall. V018 added light contrast, but actual landscape pixels revealed the now-visible brackets painted over the foreground mattress. A color-only fix therefore exposed an independent depth-order defect.

V019 retains the complete shelf, bracket, packing geometry and colors, and places the bed drawing after that wall-mounted support. The bracket now disappears naturally behind the foreground bed. No actor pose, timing, canvas size or encoder quality was changed by this delta.

## Evidence
- Source freeze SHA-256: 7434477deae064aba1b80567c899227318dfa3d2499db98c2f9e1b8f03ebfb2f.
- Four critical original-size images: frames 18484 and 18507 in both formats.
- Motion plan SHA-256: d9d6fe368a0374f96e5bf9e92ce1298b0b4f6b0e9426994db48a78003a7a3f5f.
- Thirty bounded jobs cover frames 18364–20449 in each format: 2,086 per format, 4,172 total decoded thumbnails.
- All thirty jobs have separate owner and independent scoped reviews, plus video/source/plan-bound combined reports.
- Actual images show the bundle lowering onto support before the hand releases, stable shelf depth, and readable transitions through the framed empty-bed insert.
- Final landscape archives: SHA-256 f3ab29c8ac7e66f4f9842b2617707ccc4143bac601aa8e16f6a5a54e289e3fe7 (1,584 frames) and de1fe8fe3f08a76f68d08bcc6e312279cb4802ec5726211e1c105b7dd591b3a9 (502 frames). ZIP CRC and persisted file metadata verified.

## Scope limits
This is sequential decoded-image and selected original-size image review, not normal-speed audiovisual playback or listening. Sparse held poses are not proof of detailed mud-application choreography. Incoming ghosted boots at the final transition do not establish acceptance of the later gait. The diagnostic pass does not automatically admit replacement production; exact evidence admission and per-output review remain required.

## Reusable test
Check support contrast and painter depth separately. After a contrast change, inspect every overlap with nearer furniture in both layouts. A correctly positioned support can still read as unsupported if its contour vanishes, or as a collision if drawn on top of a nearer object. Preserve failed versions and bind the successful review to the exact source and decoded video.
