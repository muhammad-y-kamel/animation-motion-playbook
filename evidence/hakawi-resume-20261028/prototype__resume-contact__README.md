# E01 cash / envelope contact candidate
Scope: exact episode time 223.12–226.30, acceptance/transfer and tabletop setdown. NOT the complete P05 sequence; no cup-drinking or earlier envelope extraction implemented here. Original narration/audio/script untouched. No publication.

## Render interface
`const draw = await require('./room-proof.cjs').create(nativeStage); draw(absoluteEpisodeSeconds)`.
This initializes existing P05 assets, resets/draws the whole room, and returns exact pose/contact state. Logical stage1672×941, backing1920×1080.
Run `node encode.cjs` for 60fps native proof; `node room-proof.cjs` for exact key stills.
Actors restaged: Yaser root775,880 scale.6; Sabah1060,910 scale.75 mirrored. Preserve these positions across neighboring shots or blend deliberately—do not hard-splice this candidate into original actor anchors.

## Causal contract
Cash original note atlas, continuously affine-transformed, not swapped for an upright sprite.
Sabah support before224.35; shared224.35–224.70; Yaser224.70–225.60; receiver+table225.60–225.80; table thereafter.
Cash pivots modestly with receiver's wrist during cup bypass, then returns to table perspective before releasing. Sender release uses fixed held pose as departure origin, never follows receiver's cash after release. Empty envelope stays attached to far hand with slight coordinated arm response.
Original head pixels tilted modestly toward exchange; no new faces. New generated art limited to grip/neutral limb donor; whole generated Yaser body NOT used.

## Preserved failed attempts
v1 rejected: sender return referenced moving cash, causing clamp23frames; wrist seam retained trouser pixels from donor.
v2 rejected: zero clamps but horizontal packet forced visibly excessive receiver wrist bend during bypass. Numeric pass not visual acceptance.
v3 rotates packet with receiver wrist during bypass and tapers forearm into grip, fixes donor contamination, maintains original identity and exact contact timing.
Generated tan packet under grip was masked out, retaining original banknote atlas. Far-arm frozen local wrist745 rather than779 avoids retaining original palm fragment under replacement grip.
Native imagegen envelope retry succeeded after interrupted cell was checked missing; no external paid API invoked.

## Files
- cash-transform.cjs: supported packet planes/ownership.
- grips.cjs + grip-atlas-v1.png: registered pinching/support hand overlays.
- envelope-grip-v1.png: native-generated natural empty envelope grip.
- yaser-arm.cjs + yaser-neutral-complete-v1.png: donor forearm only.
- near-arm-frozen.cjs / far-arm-frozen.cjs: local freeze of teammate's curved sleeve implementation.
- contact-frame-ledger.json: every rendered frame pose/state.
- decoded/: encoded-video visual evidence.

## Current v4 review candidate (supersedes v3)
v3 rejected after root native inspection: squared receiver wrist notch during high bypass; full alpha test also exposed cash/cup overlap between225.287–225.503.
v4 restages fixed cup to logical[910,570], width55; earlier setdown/drinking must use this anchor, no teleport at223.12. Direct lower-left trajectory removes high vertical-forearm pose. New native-generated empty-hand-v1.png supplies complete softly rounded fingers after release, blend224.70–224.90. The cash never changes sprite or ownership prematurely.
191/191 frames: cash-vs-cup native alpha overlap0; both wrist solvers zero clamps, residual<0.0001sourcepx. All191 decoded arm crops viewed, plus native lowering/released frames. Awaiting independent root visual acceptance, not a full-scene pass.
Minimal seated reuse: yaser-seated.cjs create(stage)->draw(t,{root,scale,wrist,body,nearArm,headAngle}); default root775880 scale.6 wrist750560. Render body before table, nearArm after table by calling twice. Needs original yaserSeated loaded in stage.images. No background reset inside this adapter.
