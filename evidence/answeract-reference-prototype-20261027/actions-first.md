# Scene-actions proof: independent first-half visual review

SHA-256: `a34942d897956ed22de9c4462e3a3ce1a93886c6c51f64d7b9adfbccb91d3197`
Reviewer: v6_frames_middle; 2026-10-27 13:28 UTC.

## Evidence / coverage
Decoded and visually inspected every frame0–224 inclusive (225 frames): account0–74, data75–149, rules150–224. Contact sheets `scene-review-first/sheets/sheet-000.jpg` through `sheet-037.jpg`, six consecutive frames each except final three. Native117 additionally inspected. Actual encoded frames, no source-only pass.
FFprobe confirms H.2641080×1920,15fps,450frames,30s and no audio stream. This review covers first15s only, not audio synchronization or final transitions. The cuts at75/150 are intentional proof segmentation.

## Findings
- Semantic action gap in account scene: Facebook/Instagram checkmarks appear aroundframes43–48 (~2.9–3.2s), but the cursor has disappeared after creating the assistant. Neither platform is visibly selected or clicked. Parent notified and agreed explicit sequential click repair; revised encode requires retest.
- Minor readability polish: at frames117–122, large cursor/click ring sits on right-side letters of the green confirmation label. Native117 confirms partial label occlusion. It is brief and clears byframe123, not clipped Arabic; optionally move click target into empty right-side button padding or reduce cursor size.

## Other results
Create-assistant and save-information cursor tips actually land inside their respective buttons before the success states. Text remains within cards/buttons across assigned frames. Data fields populate sequentially. Rules appear as configured rows with checks; this is illustrative configuration rather than a verified live platform UI. No unsupported native-app verification claim is established by this silent proof. No additional geometry overlap or isolated erroneous frame was observed in this assigned range. Final film needs its own complete visual and narration-alignment review.

## Sheet ledger
|Sheet|Frames inspected|
|---|---|
|000|0–5 (every frame)|
|001|6–11 (every frame)|
|002|12–17 (every frame)|
|003|18–23 (every frame)|
|004|24–29 (every frame)|
|005|30–35 (every frame)|
|006|36–41 (every frame)|
|007|42–47 (every frame)|
|008|48–53 (every frame)|
|009|54–59 (every frame)|
|010|60–65 (every frame)|
|011|66–71 (every frame)|
|012|72–77 (every frame)|
|013|78–83 (every frame)|
|014|84–89 (every frame)|
|015|90–95 (every frame)|
|016|96–101 (every frame)|
|017|102–107 (every frame)|
|018|108–113 (every frame)|
|019|114–119 (every frame)|
|020|120–125 (every frame)|
|021|126–131 (every frame)|
|022|132–137 (every frame)|
|023|138–143 (every frame)|
|024|144–149 (every frame)|
|025|150–155 (every frame)|
|026|156–161 (every frame)|
|027|162–167 (every frame)|
|028|168–173 (every frame)|
|029|174–179 (every frame)|
|030|180–185 (every frame)|
|031|186–191 (every frame)|
|032|192–197 (every frame)|
|033|198–203 (every frame)|
|034|204–209 (every frame)|
|035|210–215 (every frame)|
|036|216–221 (every frame)|
|037|222–224 (every frame)|

## Repaired encode retest — 2026-10-27 13:35 UTC
New SHA-256: `a09d84cb0f8b5fee7f891fb023cf60dbeeb16a3d652a42190a27c9ae7740fa7f`.
Visually inspected every actual encoded frame0–149 inclusive (150 frames), consecutive sheets `scene-retest-first/sheets/sheet-000.jpg` through `sheet-024.jpg`, six frames on every sheet, no gaps.

Both original findings resolved in these ranges:
- Cursor travels from create control to Facebook, visibly clicks aroundframe35 and check follows; it then travels to Instagram, visibly clicks aroundframe50 and check follows. This now demonstrates both separate selection actions, not automatic dual linking after create.
- Save-information pointer/click effect now occupies the button's bottom-right padding. Confirmation Arabic stays readable throughout117–122.
No new clipping or isolated wrong state observed in reviewed repaired0–149. Rules150–224 were reviewed in prior encode and reported unchanged by producer, but were not re-inspected in this bounded retest. This remains silent proof QA, not final narration sync or verified live-UI behavior.
