# Independent resumed final-candidate review
Candidate SHA256 `b137923c596878a66c880697cedb81575101b3828fcdc125e5e3bb01b2973fba`.
No source edits. No audio review. Rendered new52-frame overview via render.cjs; inspected enlarged32.5 frame. Previous20Hz repair sequences remain historical evidence and are not asserted as latest output.

## Passing limited checks
- 40 actual boundaries: handtarget/sx/sy/rot continuity passes independent epsilon audit.
- Independent 240Hz torso/table sweep,101samplepoints per rightbodycubic: no intersection in straightedge verticalband1298..1312; minimum stroke-to-stroke xgap2.63656 worldpx after boardleft680.
- Former shoe/table edge collision cleared (shoe outerright660.48 < boardstrokeleft677.5).
- Shifted table rightedge1050 maps1075.5 in wide camera, stroke remains inside1080. Peb at970 fits wide and closing camera: rightshoeouter1030.48 maps1055.00 wide, bodycontrolpoint bound1050? Actual bodymax≈1043 and stroke maps<1080. Closingcamera rightframe allows worldx1095.45, ample clearance.
- Neutralhand/eye fix, visiblebucketpickup, bucket/title clearance, persistent15castleparts remain visually intact in freshoverview.

## Blocking collapsed-card contact
At32.5, `k=7` card target=(937,1276), anglePI/2, rectangle x903..971,y1262..1290 (plusstroke). Peb leftshoe=(934.9,1277.58), strictly inside this rectangle. `latest-32.5.png` confirms card visibly behind/throughshoe. This was not resolved by moving standingPeb970. Narrow cardspread and keep rightmostcard edge<leftshoeedge909.52. Suggested max targetcenter≤874.

## Minor support defect
Collapsed k%3=0 cards centerY1280, horizontalhalfheight14 andstroke1.2 extend to1295.2, below tabletop1290. Reduce baselineY to1274.8 (~1275). Horizontal support rectangles currently have bottom1290 (+stroke1) and do not need the same shift.

Status: not yet approved pending collapsedcard contact repair/recheck.

## Subsequent collapsed-card repair verified
Latest reviewed SHA256 `031cf008c0f26f81d560214b0d385b024cc05f276840eaff07fb53d000173cf1`.
Card targets now720+(k*31%120), targety1286−(k%3)*4, with world-vertical flattening factor1−.85phase before rotation. New16-frame10Hz sequence `final-collapse.jpg` and full-size `final-collapse-32.5.png` inspected.
- 240Hz sweep31..32.5 of12cards with transformed rectangularcorner bounds+stroke: maxcardright889.3485, min xclearance20.1715 to Peb leftshoe outeredge909.52. Thus previous collapsedcard/shoe blocker **cleared** throughout sampledfall, not just finalframe.
- Settled card bottom≤1288.28<1290; previous settled-table penetration **cleared**.3horizontal supportcards remain visible and land at1282/1278 with8pxheight.
- Repeated40-boundary and240Hz tabletop tests pass unchanged (JSON artifacts updated).
- Minor pre-existing upright-card support overlap: roundedrectangle bottom at≈1295.6 inclstroke vs tabletop1290; optional clean-contact improvement initial yy=base−37 instead of−31. This is distinct from now-fixed settled penetration, and was reported explicitly rather than hidden behind pass counts.

Reviewer gate: **No remaining major geometry blocker identified within tested/rendered scope for031cf008…**. Minor initial-card contact imperfection noted. This is a source geometry/selected-sequence review, not full-motion playback, audio, story clarity, or publication authorization. New source edits require corresponding recheck; do not transfer this gate to another SHA silently.

## Final upright support adjustment
Reviewed source SHA256 `ab0670bc69bf1b40d75e00c6d872e9437558201bfcf58f0662cb5230a4e83c24` after initial card centers changedbase−31→base−37 and starting handtargets moved6px upward. Fresh fullsize `final-tower-2.png` visually checked.
Rounded-card lowest outlinedpoint relative tobase = −37 +(14−4)sin(.44)+(34−4)cos(.44)+4+1.2 = −0.39806worldpx; this removes previous≈5.6px base penetration and leaves less than0.5px separation to support surface. Other rows translate identically; supports remain present. Initial-card xgeometry and finalcollapse positions unchanged; prior shoe xclearance proof remains applicable. Sourceboundary/table audits rerun and pass. Tower is stylized overlapping2Dgeometry, not a physically simulated contact proof; no assertion of perfect rigid-body support.

**Geometry/source gate: acceptable to proceed to full encode and independent audiovisual/playback review for this exact SHA.** No remaining major blocker identified in this review. This is not a full-film/audio/publication approval.
