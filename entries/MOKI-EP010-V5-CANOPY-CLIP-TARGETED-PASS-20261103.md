# EP010 V5: canopy decoration containment proved in targeted pixels

Date: 2026-11-03 UTC

V4 failed at frame 5090 because full-open pale rib strokes escaped a partially morphed canopy. V5 adds one ctx.clip() inside the saved decoration context, using the exact existing continuously morphing canopy path. Restore prevents leakage. Rig, story, prop routes, audio and fonts remain unchanged. The fix also trims small full-open hem overruns; do not claim every V4 pixel is identical.

Independent preflight verified all 171 source pins and both nested runtime pinsets. Twelve actual native stills covering closed, intermediate and full states passed. Opening frames 5040–5159 and closing 8940–9059 each rendered under unchanged guards. All 240 decoded thumbnail frames and 14 native witnesses were actually viewed. Ribs remain inside the canopy, with no new actor/environment clipping leakage. Frames 5105/5106/5107 preserve the shaft behind the connected fist. All 17 direct children across these three tests exited 0 and were reaped; errors null and cleanup empty. Decoded frame counts, PTS and exact canonical PCM slices passed.

Scope: targeted decoration/contact proof, not full-film acceptance, normal-speed playback or hearing. Prior V4 motion evidence supports unchanged rig/rope geometry only with disclosed scope. Full 10,260-frame rendering still requires independent runtime/semantic/resource preflight and explicit admission.

Source SHA256: 2181052d7b836ed4f5dfdd744c253656914089477a9f52d773ec1ed37037522f
Freeze SHA256: 9cd000fffdcea577764a5385a8f72c9c5453c6e68a2be01c203e4d9168a1f6f7
Native plan: c6abdfcace447a622cb47d02bbbe2e78ae6daa52400fb13871c747cea218cdb4
Motion plan: 17383a537c67264a3df9904c594d83be61731aacb9a3bb9430c949cd9db6ad71
Archive: MOKI_EP010_CorrectedV5_Canopy252_Pass_20261103.zip; 76,519,859 bytes; SHA256 8b325dfeb3e88d6540d1bedda2d9672225c9290f3279eb634589b5ac54de6c95; 288 local members tested. Space transfer pending at documentation time. No EP010 Studio mutation.
