# Denial-only immutable-base patch

Base: `hakawi-native-freeze-20261028-2122`. No frozen or committed live source was edited.

## Actual-output defects
1. Frame19925 (332.083s) had separated Yaser hand ghost: two shutter samples still solved toward old `[387,628]`, while a third crossed the adapter's0.01 legacy-rest recognition threshold and switched to measured natural rest. This was a real discontinuity, not normal motion blur.
2. Native326.5 with canonical line «ساعتها بصيت في عينها» showed Sabah facing away. The existing camera return at318.16 now establishes her facing Yaser through346.88; the existing wide departure cut restores the original descent direction. There is no in-shot actor mirror or invented continuous turn.

## Narrow correction
- Interpolate gesture from `naturalRest('near',t)`, not the old sentinel.
- Standing Sabah `face:1`, unchanged world root, world-foot contact points, pot and all narration/captions.
- All original lowering/descent/contact sources remain unchanged.

## Checks so far
Actual immutable-master preload samples inspected at318.16,326.5,346.879,346.881. Feet remain on upper landing, pot fixed, gaze towardYaser during request/denial. Endpoint pairs across325.44/332.1/334 have palm differences0.0035/0.0057/0.0059sourcepx and no clamp; elbow/angle continuity also recorded. This is numerical/still validation only until actual encoded temporal proof is reviewed.

Exact hashes, changed-range envelope, endpoint measurements: `PATCH-CONTRACT.json`.
Integrator owns render slots and immutable composition. Source on HOLD.
