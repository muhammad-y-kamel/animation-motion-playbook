# MOKI-EP030-REVIEW-001 — Independent horizontal and vertical loading paths penetrate the platform

- Status: observed, blocking source gate. Discovered by independent encoded reviewer during pre-encode source inspection, 2026-10-23.
- Source SHA256: bda702750937e7911c29d82b45c66dfae45eb472017299f3f0e7ed8cf7e8df1f. No encoded candidate inspected yet.
- Evidence: `ep030/qa/rejected-review-001/` preserves exact episode/story/art sources, full-resolution 28s image, and sampled geometry JSON.

## Symptom and confirmed cause
At 28s the crate is centered around1502.86 with bottom920, already inside the right platform spanning1000–1560 with top880. Its wheels and lower body therefore penetrate the platform by40px. Peb is around1350 with soles920 while standing inside the same platform footprint. The drawn loading ramp is1560–1640, already passed before the independent vertical28–31 transition begins. Root cause: independent x and sole-height tracks instead of support derived from actual footprint and ramp geometry. Similar character boarding/exiting phases require regression checks.

## Trials and repair
No repair attempted by reviewer. Producer notified immediately. Proposed derive contact height from the actual support/ramp at each foot/wheel, with rigid crate angle or an explicit flush-height loading dock; alternatively a clearly owned lift must keep the crate above the deck before crossing its edge. Do not simply shift the vertical interval without checking both wheels and feet.

## Best validated fix
Pending. Numerical declared soles alone did not test support against physical deck footprints. Full encoded review remains required after repair.

## Prevention / tests
For each grounded/boarding state, query actual support under each contact point, including ramp slope and object footprint. Test absolute gap/penetration, not only world-floor bounds. Inspect28s and all boarding/exit transitions14–16,19–31,39.7–41.5,55–57,90–96 at full resolution and in encoded thumbnails. Preserve failed versions; bind retest to exact source/video hash.

### Expanded same-mechanism evidence
Sampled exact current source: Moki14.9 x460 sole900 insideleftdeck880; Moki40.3 x382.96 sole909.63 and95.2 x444.02 sole902 likewise penetrate deck. Peb55.5 x1308.75 sole886.25 and56 x1460 sole900 cross the crate1400 and deck. Peb90 x1327.23 sole920 enters deck before vertical boarding starts90–92. These are not new separately counted errors; they arise from independent horizontal/vertical tracks and missing route collision constraints. Idle Moki x300 also straddles ramp280–360 with feet≈260/340 and both soles920; repair must sample each support point, not only rootx. Producer notified with explicit suggested support/route fixes. No repaired version inspected yet.

### Actual repair trial1
Producer changed idle Moki to240/bucket65, derives per-foot support from ramps, lifts crate at24–25 before horizontal carry25–31, and adds Peb jumping over the crate55–57/90–92. Source6adb0f6... passes dock-center contact and continuous carried-box hand ownership. New regression found residual jump collision: walking gait retained during flight causes trailing shoe to linger over crate while descending91.7–91.8667, with up to40.85px penetration. Exact trial source and output preserved `rejected-review-001/episode-trial1.js` and `loading-trial1.json`. Producer notified to use root-relative airborne feet during both jumps. Rotated-foot/ramp envelope test added; final repaired state not yet approved.

### Actual repair trial2 — source gate passed with scope limits
Exact assembled source SHA256 d34790c280075acb360adb829719940acda2b03ec25703ca1bbfd1461b104440 uses root-relative airborne feet for both crate-clearing jumps and rotated, sampled per-foot ramp contacts. `qa/loading-regression.json` scans10,500 story states:7,020 dock-foot states,420 continuous owned-carry states,240 jump states. Max sampled painted-envelope penetration0; max stance support residual6.82e−13; max carry-hand error0; no shoe/crate intersection in the tested routes. This is a sampled expanded-ellipse support model, not exact per-pixel collision proof.
Fresh full-resolution source frames14.9,24.5,28,56,91.8 inspected in `qa/reviewer-source-final/`: repair visually legible, box lift owned before crossing the platform, jump routes clear crate. Source gate passed; encoded final review still pending. No continuous playback/listening claim. Best tested fix: one support geometry shared by feet and ramps, explicit owned lift before horizontal crossing, and airborne foot mode replacing ground gait during jumps.


### Independent encoded verification — first 5,520 frames
Reviewer report `qa/reviewer-encoded-final.json` binds MP4 SHA256 `891b322c698b801de5610f937bcbb64ae9ced282610c998b2543f2056aa84228` and source `6b89bb72f71710ba082f2dc5886351b24c728611c2312e7c91325122c08685ce`. Sheets 01–23 cover frames 0–5519 (5,520 thumbnail states); encoded full-resolution checks at 0, 0.5, 1, 5.65, 14.9, 24.5, 28, 31, 39, 46, 56, 62, 75, 82.4 and 91.8 seconds passed with no new issue or recurrence within that scope. This independently confirms the early loading/route and control repairs in the encoded candidate. Later frames remain the producer’s review gate; no whole-film approval is inferred here. No continuous playback or direct listening claim. Earlier rejected and pending stages above remain chronological evidence.


## Compilation scope and discovery attribution
- `discovered_by`: `reviewer`. Producer-only structure finding within REVIEW-002 remains explicitly attributed to the producer.
- This compilation preserves chronological source-stage findings; earlier narrow source gates did not establish complete support or geometry. REVIEW-001/002 reopened those gates, and both partial encodes were rejected and retained.
- Current complete encoded validation is pending. Never interpret historical source-pass wording as final media approval.
- Preserved producer notes, recurrence report, stage logs and numerical evidence: [EP030 evidence](../evidence/EP030/README.md).


## Final EP030 validation — supersedes earlier pending checkpoints
Status: **validated_with_limits**. Final MP4 SHA256 `891b322c698b801de5610f937bcbb64ae9ced282610c998b2543f2056aa84228`; assembled source SHA256 `6b89bb72f71710ba082f2dc5886351b24c728611c2312e7c91325122c08685ce`.

Independent reviewer inspected encoded frames 0–5519 at thumbnail size and 15 selected full-resolution times; producer inspected frames 5520–10859 and 18 selected full-resolution times. Combined coverage is all **10,860 encoded thumbnail states and 33 selected full-resolution inspections**, with no newly observed defect in those stated scopes. Reports retain image hashes and exact times. This compiler is preserving their attributed observations, not claiming an additional independent whole-film visual screening.

Full AV decode, 181-second/60-fps/1920×1080 stream checks and blank-frame scan passed. Forty-five decoded AAC cue windows have zero-sample measured lag; decoded peak 0.481537 and zero clipped samples. Source ZIP CRC, exact reconstructed source, three exact synthesized WAVs and 14 native pixel hashes passed in `source-rebuild.json`. Rejected source versions, trial audio and two interrupted encode attempts remain separate failure evidence, not approved films.

Read [final evidence summary](../evidence/EP030/README.md), [reviewer scope](../evidence/EP030/qa/reviewer-encoded-final.json), [producer scope](../evidence/EP030/qa/producer-review-final.json) and [swept regression](../evidence/EP030/qa/swept-contact.json). Best tested repairs are the actual final trials recorded above; no untried alternatives are called validated. The strengthened contact helper is sampled regression with declared tolerances, not analytic continuous collision or arbitrary-mesh proof.

No direct listening, continuous real-time audiovisual playback, browser parity or every-frame full-resolution inspection claim. Private episode archive and YouTube scheduling are separate coordinator-owned gates; this entry does not assert publication or completed remote movie archival. Earlier narrower source gates were reopened by REVIEW-001/002 and must not be reused as comprehensive geometry approval.
