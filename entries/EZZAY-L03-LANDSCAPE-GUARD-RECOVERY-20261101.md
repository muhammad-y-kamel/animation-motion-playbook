# L03: native landscape guard recovery — 2026-11-01

## Observed failure
The first full-production renderer rejected the actual landscape job with `native portrait only`. The inherited format guard was wrong despite the renderer already creating 1920×1080 output. The first attempt failed before frame output; both direct children were reaped. This is a concrete source failure, not an unexplained resource or parent-loss incident.

## Additive correction
The original runtime, terminal and stderr remain unchanged. Runtime v2 changes only the raw renderer format guard and message from portrait to landscape, with fresh exact input pins and output paths. Encode and QA helper bytes remain unchanged. Independent source review verified the narrow delta and explicitly acknowledged that the earlier source-only review missed this guard; source review was not execution qualification.

## Actual execution evidence
The retry rendered 12,687 native 1920×1080 frames through 22 fresh renderer windows into one continuous encoder. All 23 encode children exited 0 and were reaped. Full QA then completed: all physical PTS/frame counts passed; decoded lossless-master PCM exactly matches canonical mono 44,100 Hz audio (37,241,568 bytes). All 14 QA children exited 0 and were reaped. AAC delivery preserves the encoded video and packet timing; ten audio-window correlations exceed 0.995, but AAC is not PCM-byte-exact.

## Scope still separated
Saved-thumbnail and selected-native review receipts are independent of technical success. Normal-speed perceptual playback and actual listening are not claimed by these tests. Reactive RSS monitoring/direct-child cleanup does not qualify unexpected parent-loss recovery or OS-hard memory isolation. Canonical narration and script were not edited.
