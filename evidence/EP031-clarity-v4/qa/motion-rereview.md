# Independent repaired-source re-review
Reviewed regenerated source frames, not old MP4. Earlier evidence retained; current 52-frame `motion-sheet.jpg`, 45-frame 20 Hz `repaired-dense.jpg`, and full-size `repaired-*.png` describe repaired candidate. No audio assessment.

## Established fixes
- Old 5.95 shoe/castle collision absent in newly generated frame and dense 5.6–6.2 sequence.
- Neutral fist no longer covers Peb left eye at 13.8; hold grip raised away from face.
- Bucket pickup left grip visible at10.4, flight no longer overlaps title at13.8.
- Bucket rotation floor compensation removes prior corner-below-floor failure at16.
- Horizontal support cards persist into collapse rather than disappear (source + dense frames).
- Added smoothing fixes old22.2/31/31.3 discontinuities. Independent review then discovered missing2.7 and13.6; parent repaired those too.
- Final independent `independent-boundaries.cjs` tests40 actual source event boundaries, hand targets and sx/sy/rot with epsilon1e-7. **PASS** no jumps>1worldpx or>.001scale/radians. Scope does not include expression, faceSide, camera changes. Tested source SHA256:41b83ca88204707418c70ddfd4af4fd70aa210a4fa72f85b94261f582bfe199a.

## Remaining geometric blocker reported to parent
Peb shoe penetrates left tabletop edge during both jumps. At6.075 right shoe center=(635.1,1308.911), radii=(23.76,10.8), so rightmost ellipsepoint=(658.86,1308.911), inside tabletop x650..1030,y1290..1320. Rounded corner cannot exempt this point because y1308.9 lies in the straight vertical edge zone. Source feet never react. At26.5 the same shoe center=(635.1,1285.443) traverses edge upward. Full-size repaired-6.05.png shows onset; accurate worst-contact proof is source point6.075 above. Suggested repair: start tabletop x675 (matching existingleg), retain castle margins; or route leap farther left while crossing table height. This is distinct from castle collision and missed by a card-only test.

### Subsequent table repair check
Parent moved tabletop left edge650→665. Shoe now clears, but full torso does not. At6.15 `p=(600,1368.677556)`, scale.54. Right body cubic from(104,-266) via(123,-222),(143,-143) to(132,-84), u=.8 yields local(135.136,-121.36), world(672.97344,1303.143156). This point lies within tabletop [665,1030]×[1290,1320]. Full-size `table-repaired-6.15.png` confirms torso obscures tabletop end. Same issue at26.3. Reported to parent; recommend moving board+castle together to retain support margin, not board alone.
