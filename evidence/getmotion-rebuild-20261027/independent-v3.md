# Independent v3 review — NOT PASSED
2026-10-27. Full v3 source read; native stills0,15,30,45,60,90,180,190,200,1045,1930,3120 inspected. No complete video/AV playback. Original brief and v1 review remain applicable.

## Improvements actually evidenced
- Slider now visible atframe0, large enough for hook; gap visibly separates inframe15.
- p0 outline drawing no longer erroneously shows complete storefront; localpathprogress is improved.
- Incoming content is masked over outgoing scene instead of direct instantaneous wholeframe scene replacement.
- Periodic door/progress knob animation removed.

## Remaining HIGH semantic defects
1. This is still zipper-wipe switching21icon-scenes. `world(i,t)` objects remain independent constructions; no actual film→spool fold, briefline→wall transformation, clockseam→film etc. The writtenstoryboard claims actions not implemented. Mask alone cannot certify objecthandoff. Afterfirst.6seconds ofeachstage, seammechanics vanish; no oneconnectedseam persists.
2. Camera uses pinholeprojection but doesnot cross seamplane: denominator900+z-cz remainspositive(hookcz≤760,z≥~73), andmechanics disappear atprogress1. Need actual cameracrossing/visibilityclipping, not denominatorclamp followedby deletion.
3. Teeth→markershandoff wrong: frame60 lime teeth sitinside film, whereas actualperforations areouterblackholes. `hookMarkers` positions x540±300 ignoring hero1.35scale (actualperforationcenters≈540±390). Teeth suddenlydisappear after1.2seconds; unrelatedrails appear. Need equalworldposition/scale/rotation and sharedidentity atjoin.
4. Circletransition is not continuous: angle determinedperstage (jumps), radiusMode beginsatstage14; line is simplyreplacedwithsmallcircle. Everynewstage startsafreshzipper, not oneconnectedboundary.
5. Final source logo appears complete behindmask; approximate limepath is drawn independently. Frame3120 shows limepath offsetfrom enlargedlogo contour, andarrowtip detachedfromstroke. No pulltab→CTAphysicalhandoff. Removefakeovertrace and build actual exactassetmask/contour and sharedtabidentity.
6. Titleprotectedregion stillpiercedbyseam/slider(frame180/190/1045). Dynamic globalhero1.3 scaling newly makes final logo nearlyfullwidth; preserve realisticmargins and arrowalignment.
7. Source world content omissions remain: filmroute linearpath doesnotfollowBezier; costcircle overlapslockbody, no realblock/release; folding is onlyuniformscale; no recipientmeaning in blanktray;price/clock coveruprectangles remain.
8. Pathlengthhelper lacks S handling and approximates A length without truearc geometry. Explicitlysamplecurves or usecorrectSVGparser and testpartialprogress. Fourtemporal-sampleblur doesnotrepairsemanticgeometry.

## Next repair priorities
- Implement single persistentcenterline/carrier and explicitphaseownership throughwholefilm; allmask/slider/teethpositions derivedfromthatgeometry.
- Finishhookhandoff exactnativepositions; keep teeth as actualfilmperforations ratherthanadding/discardingduplicategraphics.
- Make one demonstrableobjecttransformationperclause, not just differentobjectinsidewipe. Can revise storyboard honestly; cannotclaimunimplementedfolds/handoffs.
- Rebuild finalclosure fromexactlogo paths and parentedCTAterminal; verify contact/time samples beforefullencode.
- Repeat independent source/still/encodedreview; no technicalorpalettepass outweighs currentsemanticfailures.
