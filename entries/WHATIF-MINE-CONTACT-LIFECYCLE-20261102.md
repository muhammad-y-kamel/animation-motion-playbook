# Mine bounded contact and owned-child occurrence — 2026-11-02

Status: bounded diagnostic and first motion-group validation with explicit limits; **full episode remains pending**. This is an occurrence of existing [ladder contact](MOKI-EP030-002.md), [carried-prop depth](ANIM-0017-carried-prop-depth.md), and [WhatIf lifecycle](WHATIF-SOURCE-LIFECYCLE-20261030.md) mechanisms, not a replacement of their history.

## Observed failures and additive repairs
Source audit and actual diagnostic originals found disconnected/hidden carrying arms on ladder, front-painted hand disks with forearms hidden behind false-wall boards, and a portrait bell inset covering the actor. Numeric reach/rung support alone did not establish visible custody. V002 diagnostic86 remained HOLD. Private Mine rig draws the entire opted-in carrying arm in front, moves ladder root relative to the actual rail and recomputes IK; board drawing precedes the connected actor instead of repainting isolated hands; portrait bell inset moves away from the face.

V003 source review caught the wall block inserted into bunkScene, where a/d were undefined. It was never rendered or accepted. V004 relocates that exact block into mineScene; pure mock dispatch and peer exact-delta checks pass. Earlier originals and source failures remain preserved. Source math samples establish only their stated reach/rung constraints, not naturalistic anatomy.

Actual V00452 selected originals cleared targeted visibility but exposed near-coincident heads at inspector entry. Both formats' bounded420-frame entry sequences were subsequently reviewed at chronological thumbnail resolution plus selected originals: overlap at278.5/279.5, clear head separation by280.5 through the reviewed endpoint. This is qualified brief occlusion, not a claim of perfect identity clearance.

## Cancellation admission failure, not an actual orphaned production claim
Before motion launch, peer read found wrapper SIGTERM would kill run.py normally while run.py owned separately-sessioned renderer/QA children. Wrapper p.wait alone could not prove descendant cleanup. R1 was held, unexecuted. Additive r2 installs TERM/INT exception handling so owned cleanup runs and registers ACTIVE_OWNED before work. R3 additionally checks the exact fresh encoder PID/startTicks from CHILD.json before permitting release; a surviving registered encoder is HOLD, never inferred reaped from its parent.

A harmless synthetic separate-group Python sleeper cancellation test ran against exact r2 run.py: parent failure and child TERM/reap were recorded, ACTIVE removed and registered process absent. This does **not** dynamically test nested FFmpeg cancellation or hard-KILL fallback. Failure protocol retains lane ownership until registered encoder identity is absent or explicit owned recovery closes. Normal media success requires encoder terminal0/empty stderr, every direct-owned receipt0/reaped/error-null, no active sentinel and registered encoder gone.

## Actual first motion group
Exact tuples per format: support(2616,264), wall(16283,433), inspector_entry(16710,420), run_ladder(20904,936), total2053/layout. Frozen V004 source; native60fps, three shutters, unchanged canonical mono44100 s16 PCM. All eight bounded encodes/PTS/decoded-ledger/exactPCM checks closed; all2053 chronological thumbnails per format plus selected native originals actually reviewed.

Scope is narrow: small final beam alignment, not full horizontal-to-upright lifting; boards are prestaged and floor-pivoted, not carried from an unseen source; finite steps lead to a long planted hold, not continuous vigorous running; landscape ladder poses are deeply crouched/compact and shutter-softened. No new concrete blocker in those reviewed ranges, not whole-film acceptance. No normal-speed playback, listening, full-resolution inspection of every frame or publication claim.

## Durable evidence
- V002 diagnostic HOLD: libfile_b688c05f27e8819196a0156c082bd884, ZIP SHA a69422b0ab60a0b3272f50b32e87674d8e5b8484220a19ea451862c4f06f72b4.
- V003 source HOLD/V004 diagnostic: libfile_b41f3d8a0f248191a10692f6b91c328b, ZIP SHA8eb74a99ebf9f0558dcadd19f548ed8b925c9e9ce682cc2d28d2299850d5b797.
- Portrait2053 plus source/cancellation history: libfile_7ca4f9079c448191a8fe3ce2ecddb0dc, ZIP SHAeeef957c0b993e154eebe33a8f640a55a9827189c7023c82355210bbffe5da38,230 entries.
- Landscape2053: libfile_784c82f6f2c081918481d3dcd17790bd, ZIP SHAffa70db74e4f692d8a527979bfb2a3bd8aa2d4b85f406309dadaf19da112eaf9,200 entries.
All reported archives received fresh whole/every-entry readback by preservation owner. Actual visual reviews are owner observations, source/runtime peer contributions attributed in retained receipts.

## Regression practice
Verify painted whole-arm depth, sole/rung stroke extents, initial and retained states, both layouts and actual chronology. Source patch anchors must identify the intended function uniquely; mock-dispatch all branches before native. Exact tuple admission and pre/post source/tool hashes prevent accidental scope expansion. Register/cancel/reap separately-sessioned children explicitly; never upgrade an interrupted or unverified child to closure.
