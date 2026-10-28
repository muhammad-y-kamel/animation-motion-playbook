# Actual-scene gait correction (2026-10-28)

Not master release clearance.

- Legacy caller worldFeet used projected floor depth as anatomical ankle lift, producing crouched legs. Path feet now have explicit floorY and lift. IK uses true lift; floor depth is projected separately along the cloth leg from hip to shoe.
- Actual dream50.8,51.5,53.15 re-rendered with both pathGait and drawSabahPath injected; no stance guard bypass.
- worldFeet phase now falls back to first foot.step+phase when caller omits gaitPhase. Integration wrapper explicitly supplies phase, weight, lean and time, so stopped character does not retain a walking swing.
- V8 actual roof scene241frames/60fps/native1920x1080 at50.4–54.4: maximum stance knee flexion37.37deg, not a visual pass on its own. Decoded sample sheets confirm alternating arms and feet, support changes, start/settle without prior deep crouch. No geometric proxy artwork used.
- V9 normalizes far anatomical leg length from390.07 to414.56px while separately preserving the common sole plane; triangle clip expanded1.5px to cover faint mesh seams. Source freeze gait-v9-source.cjs. Continuous render/review pending below.
- Prescribed foot contacts are stationary during each stance. This is not a claim of zero rendered shoe texture drift; scaling can change shoe silhouette around its anchored ankle.

V9 result: actual scene50.4–54.4 rendered241 frames,1920x1080,60fps,4.016667seconds. SHA256 `89ea409f545bcb15ab696459193cdfe1987ad2135d038f448701982765003e41`. All-frame stance guard maximum36.904deg; no disabled guard. Native frame090 and decoded sampled sheets01–03 visually inspected: connected original-character identity, alternating arms and legs, start/stop support and no observed mesh cracks. Subtle neutral stance knee bend remains. Visual inspection used sampled decoded frames, not an assertion every encoded frame was watched in real-time. Parent independent review pending. Other scenes/characters still require integration QA.

Current source retained as `gait-v9-source.cjs`; executable `gait.cjs` matches it. `render-dream-v9.cjs` is reproduction harness, injecting adapter in separate process without mutating legacy rigs.

## V9 terminal rejection and V10 correction
Parent independently rejected decoded terminal frame210: overlapped feet and bent/backward-looking arrival. Therefore V9 is NOT accepted despite guard pass. V10 sets hip-width lanes[-45,+45], ±5sourcepx floor-depth stagger, near neutral ankle+4.5px, corresponding shoe-height remap to retain sole plane, and modest per-foot contact shadows. Terminal knees now7.25/7.27deg with separated shoes. `dream-gait-v10.mp4` SHA256 `03c58fd1b3a1662263d2951091a15d5ac9b79f9331fb13dd15f0910a74b9c484`. Decoded arrival150–220 inspected; parent independent validation pending. Frozen `gait-v10-source.cjs`, `path-state-v10.cjs`.

## P05 postcut proof
`p05-exit-v10.mp4`,325frames at60fps/native1920x1080, starts with0.25s planted,4.04s path,1.11s final settle. Root[1060,910]→[1470,650],scale.75→.48,8steps,face+1. This is a shot AFTER a camera cut, not proof of a180degree turn. Original room and Sabah art, repaired bilateral arms; seated Yaser background uses contact worker neutral near-arm donor. No cash-contact overlay. Native060/150/270 and decodedtravel+arrival sheets inspected; separated feet and stable terminal support. All-frame stanceguard max28.206deg. SHA256 `e241519b8e50088b6267797bd69b3eb099f22ddac2e36843bf7f2dfbedbd7b08`.

`gait.cjs` now additionally supports optional `opts.drawBody(ctx,asset)` replacing only default torso/head image draw; default unchanged. Parent owns callback implementation. Initial P05 render uses default original head/torso. No claim other-character full motion or master completion.
