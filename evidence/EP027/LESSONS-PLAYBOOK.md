# EP027 animation lessons and regression playbook

This is a factual production record, not a claim that every imaginable defect was tested. Review these rules before future episodes. Preserve failed candidates and unsuccessful approaches: they explain why the final solution exists. Future cross-project consolidation is pending repository assignment; this file belongs to the EP027 source and QA packages.

## 1. Floating stack gaps and base penetration — blocking contact defect
- **Symptom:** 50px cubes placed with55px pitch left5px air gaps. Base center1431 gave bottom1456,6px below tabletop1450.
- **Root cause:** center/pitch constants did not derive from rendered block dimensions and tabletop plane.
- **Attempts/outcomes:** first encoded candidate retained as `qa/rejected/stack-gap-candidate.mp4`; cosmetic rendering did not resolve geometry. Changed base center to1425 and pitch to50.
- **Best validated fix:** base center = tabletop minus cube half-size; stack pitch = cube size. Final sampled towers show contiguous blocks and supported base.
- **Prevention rule:** derive placements from shape dimensions, not independent magic numbers.
- **Regression check:** confirm base center+25=1450 and neighboring centers differ50; inspect final8s/51.8s and sequential building thumbnails.

## 2. Camera transform clipped hand and exposed black bottom — blocking composition defect
- **Symptom:** enlarging/repositioning stage exposed a black bottom strip and cropped Moki's resting left hand. Preserved early `qa/composition.png` demonstrates both.
- **Root cause:** transformed room background did not cover the original canvas; hand extents were not rechecked after camera scaling.
- **Attempts/outcomes:** stage scale1.17 improved framing but introduced these defects. Added full-canvas background before transform and changed resting left-hand local x from-145 to-110.
- **Best validated fix:** clear/fill in canvas coordinates before any camera transform; keep resting hands inside projected safe frame.
- **Prevention rule:** camera edits require a fresh canvas-edge and projected-extents pass.
- **Regression check:** numerical projected hand circles across4200states have zero edge failures; assigned final thumbnail sheets and selected full-resolution frames show no black border/clipped resting hand. This is not a proof that every rendered path was bounded.

## 3. Rotating hourglass penetrated tabletop — blocking support defect
- **Symptom:** at51.8s the lower cap passed below tabletop while being raised.
- **Root cause:** interpolated center height ignored rotated cap extents.
- **Attempts/outcomes:** straight center interpolation between upright/horizontal poses failed. Added conservative rotated envelope clamp: `g.y <= 1448 - abs(cos(a))*110 - abs(sin(a))*65`.
- **Best validated fix:** support height derives from rotated geometry, including a small stroke allowance.
- **Prevention rule:** rotating supported props need orientation-dependent support; center interpolation alone is insufficient.
- **Regression check:** source and encoded51.8s visually clear the table. Independent conservative cap/stroke envelope over4200states max1450.83, within the stated2px tabletop tolerance.

## 4. Open palm during high cube carrying — blocking grip/readability defect
- **Symptom:** Moki's high carried cube triggered a raised open-hand pose instead of a grip around18s/51.8s.
- **Root cause:** reusable rig inferred reaching from hand height when no explicit grip flag was set.
- **Attempts/outcomes:** default rig pose did not express ownership; explicitly set `gripRight=true` throughout Moki's carried-cube interval.
- **Best validated fix:** semantic action state overrides generic reach heuristics.
- **Prevention rule:** every carried prop must declare which hand grips it and keep that flag through the whole carry.
- **Regression check:** fresh source51.8s and final encoded51.8s show closed grip; authored carried-cube contact equations remain exact.

## 5. Hourglass outline vanished during particle/clump rendering — blocking render regression
- **Symptom:** glass outline disappeared during flow or jam; a particle inherited the outline stroke instead.
- **Root cause:** Canvas `ellipse()` calls replace the current path. `save()/restore()` do not preserve the current path; stroking after particles therefore stroked the wrong shape.
- **Attempts/outcomes:** adding visible clump improved jam readability but exposed/largened the pre-existing flow-particle path issue. Outline candidate retained at `qa/rejected/outline-candidate.mp4`. Rebuilt complete glass silhouette immediately before its stroke.
- **Best validated fix:** rebuild intended path at its draw operation, or use an explicit reusable Path2D in future implementations.
- **Prevention rule:** never assume canvas state restore restores current paths. Helpers that begin paths invalidate caller path assumptions.
- **Regression check:** inspect flowing8s and jammed52.5s source frames; final encoded8s/56.5s retain glass boundary and grain clump.

## 6. Sand hung from upper cap after flip — blocking visual physics defect
- **Symptom:** after180degree rotation, upper sand appeared suspended from cap and lower sand floated from neck instead of resting at bottom.
- **Root cause:** swapping local fill fractions did not preserve gravity-relative fill anchors under rotation.
- **Attempts/outcomes:** local fill fraction swap failed; `qa/rejected/sand-gravity-candidate.mp4` preserves defect. Rotated drawing back to world-gravity coordinates inside the already-rotated glass clip. Upper fill anchors at neck; lower fill anchors at base; horizontal phase uses a world-lower settled slab with no stream.
- **Best validated fix:** separate container orientation from gravity-oriented contents.
- **Prevention rule:** for rotating containers, inspect both orientation and substance behavior at0°,90°,180° and transition angles.
- **Regression check:** fresh8s and39s confirm upright gravity and horizontal settling; final encoded8s confirms corrected anchors. Illustrative fill is not a mass-conserving grain simulation; do not claim physical simulation validation.

## 7. Jam too subtle — important story-readability repair
- **Symptom:** tiny residual fill at52.5–61.5s was difficult to read as a jam.
- **Root cause:** mathematically small amount did not create a clear visual storytelling cue.
- **Attempts/outcomes:** residual fill alone insufficient; added five visible gold grains above neck. Initial addition caused path regression described above, then was repaired.
- **Best validated fix:** readable clump held until delayed release61.5s, with intact silhouette.
- **Prevention rule:** plot-critical state must be legible at normal delivery scale, not only present numerically.
- **Regression check:** source52.5s and final56.5s show jam at tap; final61.8s shows clump gone and sand flowing.

## 8. Cubes appeared without visible source — continuity improvement
- **Symptom:** unplaced cubes appeared near hands at pickup starts, with no visible supply origin.
- **Root cause:** only carried/placed cubes were drawn.
- **Attempts/outcomes:** initial story remained interpretable but pickup emergence was visually unexplained. Small bins added at pickup positions300/790 and drawn in front of emerging blocks.
- **Best validated fix:** clearly located supply bins explain hand-carried arrivals without crowding towers or hourglass.
- **Prevention rule:** props entering a shot should have an established source, entrance or occlusion explanation.
- **Regression check:** fresh8s/39s and final8s show bins; sequential thumbnails show building without unexplained mid-air spawning. This was a continuity improvement, not a decode/technical failure.

## Persistent review discipline
- Preserve original fixed character geometry; disclose elastic reach, fixed-camera, stool/bin adaptations and authored cartoon physics.
- Audit source, then inspect encoded results after the last source change; source previews are not evidence that a different encode was corrected.
- Here all4200final thumbnails and13unique selected final full-resolution frames were reviewed by two attributed reviewers. Numerical checks and source/audio reconstruction are separate from visual inspection.
- Direct listening, real-time audiovisual playback, actual browser playback and full-resolution every-frame inspection were NOT performed. Do not upgrade those limits into claims.
