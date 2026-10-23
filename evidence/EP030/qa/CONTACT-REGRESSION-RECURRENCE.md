# Contact regression: why floor-only checks missed EP030

## Known recurrence, not a new count of each prior error
- EP027 required support derived from actual stack/cube dimensions, not generic spacing (ANIM-0001).
- EP028 exposed standing/seated foot constants copied across differently scaled rigs and conditional seat contacts (ANIM-0014).
- EP029 showed that a shrinking wool radius with a fixed center creates a positive support gap; a one-sided no-penetration test allowed levitation (MOKI-EP029-GEO-007).
- EP030 initially checked the world floor at920, but the real low decks are880 and the ramps interpolate between them. Independent horizontal/vertical tracks passed that floor bound while feet and crate penetrated the decks. A later jump retained a planted walking gait, and semantic hand ownership did not prevent hand/deck intersections. The floor-mounted ratchet and overlapping balcony were additional solids absent from the support registry.

## Required reusable model
1. Keep an explicit, conditional support registry: moving deck, ramp, world floor, carried object, airborne transfer, ladder or catwalk. An unregistered mode is not automatically grounded.
2. Use rendered extents, scale, rotation and outline. A point at the sole center is not the painted sole. Check absolute support gap for planted contacts as well as penetration.
3. Keep temporal ownership and geometry together. An owned hand may still hit an adjacent solid; a declared grip can target empty air unless the target's actual drawing geometry is tested.
4. A foot in an airborne mode must not inherit ground stance anchors. Check the entire swept shoe volume against obstacles along the route.
5. Include fixed machinery and architecture in exclusion tests, not only characters and foreground props.
6. Preserve every rejected source/partial encode. After any source change, rerun numerical and affected visual checks; prior encoded review carries forward only through exact-byte identity.

## Utility and evidence
`contact-utils.cjs` is episode-independent: swept-time generation, rotated stroked-ellipse boundary points, support residuals, polygon/rectangle penetration and circle/rectangle clearance. `swept-contact.cjs` is the EP030 registry and test adapter. It samples four times per60fps interval plus ±1e-6 probes around authored boundaries. Foot geometry uses the actual44×20 radius and6px outline scaled and rotated, rather than the prior expanded47×23 approximation;128 perimeter points are sampled. The observed0.148px maximum ramp residual is inside the explicit2px tolerance and is not misreported as exact pixel tangency.

This is strengthened sampled regression, not a mathematical guarantee for all continuous times, arbitrary meshes or unknown future episodes. Other episodes must supply their own geometry and mode registry. The source physics/support tests and final encoded visual review remain separate gates.

## Honest sequence
The first partial EP030 encode began before REVIEW001 was discovered and was stopped. The second partial encode began after its source repair gate, then was stopped when the expanded swept audit exposed REVIEW002. Neither partial encode is an approved final. The four-subsample reusable test and structural checks were added before the next complete candidate; this was not retroactively claimed to have existed before the first attempt.
