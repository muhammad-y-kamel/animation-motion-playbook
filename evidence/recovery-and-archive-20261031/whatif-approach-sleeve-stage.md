# Approach support and painted-sleeve clearance — 2026-10-31

## Rejected mechanisms retained
- R010 swing intervals overlapped by 0.01 normalized duration twice, creating unintended 9.71 ms flight despite a continuously supported side-step claim.
- R011 separated swing windows with explicit double support, C2 foot lift/body posture, independently projected stance shoes and actual far-leg-plus-shoe painter ordering. These fixes did **not** make the composition safe.
- Independent actual-painter geometry found a concrete sleeve collision at t172.24: hero right wrist (49,-141) lies 15.551344 local units from chef left forearm, while two width19 round-cap ink strokes require19 clearance. The3.448656 overlap lies outside both coats. At187.746 the inherited reaction wrist also collided. Wrist-to-wrist distance alone missed the earlier forearm collision.

## Narrow verified repair
R012 increases final root separation from110 to125 world units and keeps the reaction hand nearer the body, (49,-141)→(49,-125). A trial raising the hand to(60,-155) failed the capsule sweep and is retained as a rejected draft receipt.

Owner and independent auditor reran256064 actual arm capsule comparisons over8002 time/layout states, preserving49+47 arm lengths, facing, torso/rotation/crouch transforms and actual19-wide round-cap ink envelopes. Minimum sampled world clearance9.606302376. Relaxed palm geometry fits the declared9.5 radius bound.

Related source checks:4004 sampled coat/shoe join checks (hip100% robust interior, ankle68.32% filled and58.42% beyond shoe halfstroke);10002 leg/shoe depth-order states;614 boundary velocity/support checks;270 actual Atelier command-trace checks including unchanged legacy actors. These are separately scoped mechanisms, not native acceptance.

## Generalizable regression
Use actual painted stroke envelopes and non-endpoint limb segments, not joint centers or loose endpoint spacing. Preserve a failed source snapshot before repairing it. Test inherited later poses after a staging change, not just the approach endpoint. Keep world-space collision clearance distinct from projected silhouette separation when depths differ.

## Remaining limits
No continuous-minimum, full-body/knife/wall clearance, dynamic balance, native gait/palm/occlusion or full-cellar acceptance. R013 contact/pull work is separate and not covered by this closed report. Existing R009 main A/B/C discrete proof does not transfer to the new approach.
