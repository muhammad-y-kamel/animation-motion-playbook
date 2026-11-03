# EP010 painter-branch native HOLD

2026-11-03. Original source restored, not replaced. Source SHA256 3723b8ce89b54d2afb39c1cbae6744de1dcad69b516894742c13b79a987dabac. Canonical 171 seconds, 10260 frames at 60 fps, 1920×1080; unchanged stereo 48 kHz audio.

Source audit identified painter branches outside the 13-state pose average. Twelve original native frames were rendered under inherited single-child resource guards. The child exited 0 and was reaped; no cleanup error. Lead and independent reviewer actually viewed all twelve full native images and confirmed:

- Frames 4919→4920 (82 seconds): umbrella switches from the vertical rack region to a diagonal shaft across Moki's screen-right pupil. Contact matching of the hand alone does not preserve the rigid umbrella or eye clearance.
- Frames 5639→5640 (94 seconds) and 6239→6240 (104 seconds): canopy reverses tilt in one frame while grip and shaft remain nearly fixed.
- Frames 8999→9000 (150 seconds): rope endpoint jumps from beside Moki to the resting vertical tassel. Held umbrella disappears and a closed parked umbrella appears, without a continuous release trajectory.

These are adjacent-frame visible discontinuities, not inferred motion-rate judgements. Existing contact tests exclude several transition margins and do not evaluate these painter branches. A smoothed pose object cannot smooth a separate discrete draw condition.

Status: HOLD, repair pending. Next repair must use continuous absolute-time prop geometry and explicit pickup/carry/transfer/release/settled states, keep canonical script/audio/duration, test pupils and full prop envelopes, and inspect neighboring native images plus bounded encoded motion. Mount/perch hypotheses remain separately untested; no full-episode verdict.

Original diagnostic checkpoint: MOKI_EP010_Original_Native12_Prop_Defects_20261103.zip, libfile_38ac26f58c588191b49d77fdc68c8d38, 2353883 bytes, SHA256 4400486de7a4fbbfcbe8a0b6e825ca54a96d3ed4cac44e437be9b850de16a034. No normal-speed playback or listening claim. Original scheduled EP010 Efl0LhmX_Tw remains unchanged.
