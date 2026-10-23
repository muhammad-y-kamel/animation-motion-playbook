# MOKI-EP030-REVIEW-002 — Swept clearance finds hand, control-station and structural intersections

- Status: repair in progress; encoded review pending.
- Discovery: reviewer, then producer's additional structure audit, 2026-10-23.
- Initial source SHA256: d34790c280075acb360adb829719940acda2b03ec25703ca1bbfd1461b104440.
- Evidence: `qa/rejected-review-002/episode-discovery.js`, full-resolution39s and94.8s source images; rejected partial encode-v2 remains preserved by producer. The unrelated file explicitly named `historical-not-discovery-source.js` is not evidence for this finding.

## Symptoms and causes
1. At39s the left deck is858.52; the lower hauling fist is centered(350,853.76), radius approximately24.48. The platform starts at360, so the fist intersects its moving edge. Cause: semantic grip coincides with the rope but the rope has insufficient clearance from the adjacent solid deck.
2. The floor ratchet housing315–385 ×866–920 lies in Moki's walking ramp route; the94.8s image shows shoe/housing intersection. Cause: control decoration was not registered as a solid obstacle during support testing.
3. Producer subsequently found the right deck1000–1560 overlaps the original balcony starting1480 and its support post1550 while rising/falling. This discovery is attributed to the producer, not this reviewer. Cause: docking alignment was treated as overlap rather than abutting support and clearance.

## Actual trials
- Trial1 moved only the auxiliary rope and hauling/catch grips350→320. This clears the hand/deck overlap, but the ratchet remained in the walking route. Producer stopped the active second encode; partial output was preserved, not approved.
- Trial2 moved the ratchet to the wall at320,500, preserving a visible control rope while removing the floor obstacle. Swept source6caaf2d passed expanded foot, carry, jump and control clearance tests. Structural exclusion was not yet part of that test; no full-world clearance claim was made.
- Trial3 moves balcony left edge1480→1560, changes the bridge extension to640px, and moves the first support post1550→1610. Independent structural regression is now running; encoded visual gate remains pending.

## Reusable prevention and test
`qa/contact-utils.cjs` supplies swept absolute times, rotated stroked-ellipse perimeter sampling, support residual and rectangle-clearance helpers. `qa/swept-contact.cjs` uses four samples per60fps interval plus boundary ±1e-6 probes, a conditional support registry, hand/deck exclusion and parsed structural geometry. Unsupported geometry must fail the registry parse instead of silently passing. A numerical pass is not an analytic continuous collision proof, encoded visual review, or listening claim.

### Trial3 source verification — passed with limits
Source SHA2566b89bb72f71710ba082f2dc5886351b24c728611c2312e7c91325122c08685ce passed `qa/swept-contact.cjs`:42,132 sampled times,28,216 dock-foot checks,1,684 carried-box checks,966 jump checks and5,652 control-hand checks. Actual stroked-foot perimeter ramp residual0.148px is within the explicit2px tolerance. Tested hand/deck, jump/crate and deck/balcony/post overlaps are zero. Source full-resolution39 and94.8 were freshly inspected after the final change; hands and walking route are clear and structures abut instead of overlap. This clears the source gate only. Encoded inspection remains required, and no whole-world exact-mesh/analytic continuous collision claim is made.


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
