# Scene-actions proof: independent all-frame review, last half

Reviewed 2026-10-27 13:28 UTC by v6_frames_late. Source: `qa/scene-actions-proof.mp4`. Computed SHA256 `a34942d897956ed22de9c4462e3a3ce1a93886c6c51f64d7b9adfbccb91d3197`.

Decoded and actually visually inspected EVERY frame225–449 inclusive: 225 frames at15fps,15.000–29.933s. Contact sheets `qa/last-review/sheet-000.jpg` through `sheet-037.jpg`, six frames each except last three; frame size360×640. Native275 and420 additionally viewed individually for activation-label and small private-message text. No source review substituted for visual inspection.

Coverage ledger (all frames on each listed sheet actually viewed):
- sheets000–005:225–260
- sheets006–011:261–296
- sheets012–017:297–332
- sheets018–023:333–368
- sheets024–029:369–404
- sheets030–035:405–440
- sheets036–037:441–449

## Findings
No blocking clipping, overlapping Arabic, detached/orphan visual, or off-button cursor found in assigned frames.

### Test scene225–299
Question is visible before response; response asks relevant file format. Cursor travels from outside panel into activation button and remains inside at state change264. Button becomes green with correct text `الردود اتفعّلت` (confirmed native275). It does not say closed/deactivated. Cursor disappears cleanly270. Response and button remain bounded. Initial unused panel area is reserved for response, filled shortly afterward.

### Order scene300–374
Intent→name/phone request→customer name/placeholder number→team request summary is chronological and logical. Arabic remains within bubbles. Placeholder phone is clearly non-real `01X XXX XXXX`. Green summary retains customer name and service type. LOW content-detail improvement: phone is present in preceding conversation but omitted from green summary, despite bottom caption saying details collected in one place; could include masked phone in summary for a stronger literal demonstration. No actual contradictory customer identity observed.

### Comments scene375–449
Public question gets a relevant public invitation to message privately; private-information panel appears below without overlap. Public content contains no private phone/name. Small private-panel line is readable at native420 but noticeably smaller at phone-sized sheet scale; LOW readability improvement: enlarge it if meant as a primary message. Generic label-only private panel explains privacy distinction rather than demonstrating a real received DM. That is a semantic limitation, not a rendering failure.

## Scope/limits
Hard cuts at300 and375 are intentional five-second proof scene boundaries, not assessed as final transitions. Some states hold still after completing actions; this review does not certify final motion pacing. Silent proof only: no audio/TTS listening, narration sync, timing approval, verified live-platform UI claim or final creative acceptance. No production source/audio changes made; only review derivatives/report created.

## Action-repair retest — 2026-10-27 13:36 UTC
New computed proof SHA256: `a09d84cb0f8b5fee7f891fb023cf60dbeeb16a3d652a42190a27c9ae7740fa7f`.
Previous review above retained unchanged; previous video retained by producer as `qa/scene-actions-proof-before-action-repair.mp4`.

Decoded and actually visually viewed ALL150 frames300–449 inclusive using every six-frame sheet000–024 in `qa/last-retest/` (360×640 per frame). Actual viewed batches:000–005=300–335;006–011=336–371;012–017=372–407;018–024=408–449. No source-only inference and no skipped frames.

Both prior LOW content-detail flags are addressed visibly:
- Green request summary now contains the same `01X XXX XXXX` masked phone as the preceding customer message, alongside Ahmed and the requested file-review service. Added line stays inside green summary with bottom padding across reveal and hold.
- Private-message panel now shows Ahmed, file-review service and the same masked contact on separate readable lines instead of only a descriptive privacy sentence. Text is larger, remains inside bounds across fade and hold, and does not collide with public response or bottom caption.
- Public comment still contains no private phone. Scene cut375 remains intentional proof boundary. No new blocking clipping/overlap found in300–449.

No native magnification was necessary in this retest; all150 actual frames were inspected at sheet scale. This is still silent proof review, not an audio-sync or final creative-acceptance claim. No production edits made.
