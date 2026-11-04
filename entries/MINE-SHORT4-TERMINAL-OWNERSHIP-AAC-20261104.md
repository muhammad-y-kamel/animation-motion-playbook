# Mine Short4: conservative terminal ownership and exact AAC delivery

This is Mine-specific evidence supplementing [the existing terminal-wall finding](MOKI-EP010-V7-TAIL-RGB-TERMINAL-WALL-20261103.md), not a replacement for it.

## Failure modes and correction

The recovered historical assembly helper was retained unchanged at SHA256 a78ad5cfbfe2f4cc64fbe1e441ef526cd4d5ad892ec83b50ee796dd65d18a155. An additive helper captures observed child elapsed immediately after wait, checks final output bytes with a 512 KiB receipt reserve, and requires direct-child reap, an empty owned process group, and an adopted-child census reaching ECHILD. An empty original group alone is not proof that adopted children are gone. Unknown adopted children or cleanup exceptions produce a durable blocked receipt rather than permissive acceptance. Signals are ignored only during final cleanup and receipt finalization, then restored.

Fake lifecycle tests covered fast exit, missing startup identity after confirmed exit, terminal elapsed and disk overruns, surviving group/adopted children, poll errors, cancellation, and cleanup wait errors. These are synthetic checks, not hard resource isolation. Sampled RSS and disk monitoring retain their documented limits.

## Actual Short4 evidence

Four separately reviewed native portrait chunks produced 5,804 frames at 60 fps, absolute range [16613,22417), and 4,265,940 mono 44,100 Hz canonical PCM samples. Assembly compared every decoded frame hash, every PTS, and the complete canonical PCM slice. Eleven join originals were actually inspected by two reviewers. Master SHA256: 6076c6c3c70adebbf783600cd69d9b8235e9949c3b1d30adba2b550c16777003. Eight direct assembly/QA stages exited zero and were reaped with empty cleanup/census results.

The exact historical deliver_short.py was recovered from its prior archive and matched SHA256 b9d5b5df45bc6f5bb99a09cb2a3c1114f0e3748527d90b620ff715509cd24a0b. The additive delivery candidate bound the current accepted assembly, all join evidence, exact canonical audio, and the conservative helper. It stream-copied H264 and encoded AAC at 192 kbps. Five direct stages closed cleanly: AAC 2.508 seconds, source packet probe 0.251 seconds, delivery packet probe 0.251 seconds, full decode 28.096 seconds, and stream/frame probe 10.540 seconds. Original per-child ceilings and sampled 2 GiB RSS / 512 MiB output ceilings were not raised.

All 5,804 encoded video packet hashes and codec configuration matched, all decoded frame hashes matched, and all PTS passed. AAC decoded to 4,265,984 samples, 44 beyond the 4,265,940 canonical samples, within the explicit padding bound. Sample-aligned numerical SNR was 47.047 dB. This is numerical audio QA, not listening or perceptual approval.

Final MP4 SHA256: 9ed6832d73dd3cba4a4464faf15a15b16d4ab86b96d5a92ceb3bd1687f6799ff. Delivery candidate core: 1d5a09107bdc9c900a4b35b6c8dd33736e6c6fbae6b5743623849e450eef58df.

## Scope and recovery

The prior interrupted November 3 render remains unresolved and unaccepted. Absence in a new process namespace is not cleanup evidence. This work used a separately authorized fresh boot and fresh output paths; it never promoted the old partial output.

Complete assembly/source archive: libfile_a71f33cda2b481918d6076c57e2d2c0a. Final MP4: libfile_aa9e64b748ec8191adb29b3ae5ec4bdd. Compact delivery QA/source: libfile_86b0750c1dc08191a99374d0bd3ff24a. These records do not clear later Mine collapse scenes or Aran applicability. Actual still/sequence review and numerical checks must remain distinguished from normal-speed audiovisual review.
