# EP026 — Inside-Out Umbrella: production QA

Final video:58.0s,1080×1920,60fps,3480frames. Canonical story52s and exact standard CTA6s. General audience, not made for children, not18+.

## Corrections made before acceptance
- Kept umbrella hoist continuous rather than teleporting canopy above Moki.
- Prevented Peb's soles penetrating the terrace during landing.
- Made the bowl front lip an actual support curve beneath Moki's soles.
- Smoothed abrupt hand transitions and shortened the captain's non-gripping arm.
- Added the visible center-ring tug before17.5s canopy righting, with foreground shaft during grip.
- Corrected Peb's visual bite to50.4s, matching its second crunch.
- Exposed the captain's handle/shaft between the characters instead of hiding it behind Moki; separated rowing hand from Peb.
- Moved waiting Moki15px inward to eliminate a few-pixel thumb-edge grazing before boarding.
- Reset Canvas drawing state each frame; random-access rendering now agrees.

Rejected candidates and their source revisions remain in prior-draft. The latest15px correction changes source state only frames1441–1781. Only encoded segment20–30s was rerendered; all2880 decoded frames outside that interval are pixel-identical to the reviewed prior candidate. See margin-source-identity.json and margin-encoded-identity.json.

## Evidence and limits
All3480 encoded frames are represented in58 sheets at108×192 per thumbnail. Two independent reviewers inspected the full coverage; unchanged sheets were carried forward only after exact image-hash comparison, and corrected20–30s sheets were inspected again. Selected exact indexed encoded PNGs were separately inspected at full resolution.65 exact indexed PNGs were also compared to native source rendering within lossy H264 tolerances.

All3120 story-frame source states pass finite-coordinate, arm-distance, sole-floor, contact and motion continuity checks. Independent numerical checks repeat the contact/geometry tests.15 actual source-sampled audio cue checks pass. Final AAC soundtrack is correlated to the exact source mix with17 cue windows at zero-sample lag, no clipping, and expected sub-frame AAC tail padding. Full-file AV decode is clean.

Editable ZIP rebuild reproduces exact animation/audio; standalone HTML embeds exact source, fonts and mix. Mocked controls cover play,pause,scrub,restart,edit,save/recompile,invalid-source feedback and recovery.

Not claimed: direct listening, continuous real-time AV playback, actual browser playback, every frame at full resolution, YouTube upload, copyright checks on YouTube, or successful scheduling. Native Canvas/FFmpeg is the renderer. QA is scoped evidence, not a guarantee of arbitrary subjective quality.

## Publication
NOT_UPLOADED. Archive and YouTube verification remain separate steps. Approved schedule row26:2026-12-09 19:00 America/New_York,16:00 America/Los_Angeles;2026-12-10 00:00 UTC,02:00 Africa/Cairo. No immediate publishing or duplicate upload.
