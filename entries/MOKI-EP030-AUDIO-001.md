# MOKI-EP030-AUDIO-001 — Script-derived cue candidates precede reconciled mechanics

Status: observed; source audit in progress. Audio production stage re-read PREFLIGHT, ANIM-0009 and EP029 AUDIO001/002.

Symptom: initial editable cue candidates based on canonical detailed scenes differ from implemented coherent trajectory: reverse-platform stop was16.5 but source17.2; box set40 but source31; heavy-right stop44 but source46; source Peb hop landings5.65,7.05,8.45,9.85,11.25 differ from guessed6,8.5,11. This is not a final-film defect claim: no final mux yet.

Cause: intentional provisional script timing not yet audited against actual source, compounded by mechanically necessary reconciliation of conflicting script actions. Confidence high for observed source snapshot.

Preservation: rejected-script-timing-v1 contains exact synthesis source, editable events, cue sheet, original numerical QA with WAV hashes and loudness log; it deterministically reconstructs the old WAVs. Initial master is not approved as final.

Actual attempts: initial script-derived composition passed numerical reconstruction/clipping tests but is rejected for final sync. No alternative timing repair yet validated.

Best repair pending: bind events to actual final scene transitions and audit contacts, then regenerate source/mux tests. Prevention: never equate script cue entries with actual visual alignment; check contact and visible motion endpoints for each Foley.

Trial1 (actual source timing): updated physical event map to implemented trajectory: reverse15.8–17.2, load completion31, manual haul32–40 and92–95, gravity42–46, hop landings5.65/7.05/8.45/9.85/11.25, boxrise57–62, restraint81.9–83, transfer116.5/landing117.4, dock125–130, weight132–137, ascent138–148. Numerical `audit_source.cjs` checks stop arrival, actual foot landing, box endpoints, semantic hand contacts, water loss and exact deck coincidence. Initial source audit passed all checks; exact source hash in source-alignment.json. Audio rebuilt byte-identically, no clipping; fullres/encoded/ladder-contact review remains pending. Later source changes require rerun, not blind carryforward. No failed repair attempt invented.

Additional observation under same cue/source mechanism: the implemented ladder is telescoping, not hinged, so provisional four folding-joint impact cues had no corresponding hinge contacts. Producer expressly reconciled to continuous wooden slide163.5–166.5 with final floor contact166.5. Preserved v2 source/events/QA/hashes in rejected-joint-cues-v2 before change. Trial2 removes four unmatched joint hits and adds continuous slide; final floor thump retained. Rerunning numerical reconstruction and exact-source audit; final encoded AAC still pending.

Trial3 (new source carry/jump reconciliation): producer fixed box loading to lift24–25 then carry25–31, with Peb clearing it in jumps55–57 and90–92. Old seven-second floor-roll cue no longer matched source. Preserved prior v3 source/events/QA with audio hashes in rejected-roll-cue-v3; removed floor-roll sound, inserted quiet handle-grip24 and actual landing57/92. No generic whoosh or guessed footfalls added. Expanded source audit checks box ownership throughout lift/carry and both jump landing supports. Regenerating audio then exact-source audit. This is review invalidation after changed animation, not evidence that prior-version audio tests were false.

Final validation: source 6b89bb72f71710ba082f2dc5886351b24c728611c2312e7c91325122c08685ce and MP4 891b322c698b801de5610f937bcbb64ae9ced282610c998b2543f2056aa84228. All source contact tests pass, 45 decoded AAC cue windows have zero-sample lag, peak0.481537, no clipped samples, full AV decode produces empty error log. Audio master SHA256 cefbb528f4a28319d28f7e1964a4390748eefbc2510c9d9b77e4e8f2073bb0fa; byte-identical synthesis rebuild passed. Status validated_with_limits; no listening/continuous playback claim.


## Compilation scope and discovery attribution
- `discovered_by`: `agent`. Producer-only structure finding within REVIEW-002 remains explicitly attributed to the producer.
- This compilation preserves chronological source-stage findings; earlier narrow source gates did not establish complete support or geometry. REVIEW-001/002 reopened those gates, and both partial encodes were rejected and retained.
- Current complete encoded validation is pending. Never interpret historical source-pass wording as final media approval.
- Preserved producer notes, recurrence report, stage logs and numerical evidence: [EP030 evidence](../evidence/EP030/README.md).


## Final EP030 validation — supersedes earlier pending checkpoints
Status: **validated_with_limits**. Final MP4 SHA256 `891b322c698b801de5610f937bcbb64ae9ced282610c998b2543f2056aa84228`; assembled source SHA256 `6b89bb72f71710ba082f2dc5886351b24c728611c2312e7c91325122c08685ce`.

Independent reviewer inspected encoded frames 0–5519 at thumbnail size and 15 selected full-resolution times; producer inspected frames 5520–10859 and 18 selected full-resolution times. Combined coverage is all **10,860 encoded thumbnail states and 33 selected full-resolution inspections**, with no newly observed defect in those stated scopes. Reports retain image hashes and exact times. This compiler is preserving their attributed observations, not claiming an additional independent whole-film visual screening.

Full AV decode, 181-second/60-fps/1920×1080 stream checks and blank-frame scan passed. Forty-five decoded AAC cue windows have zero-sample measured lag; decoded peak 0.481537 and zero clipped samples. Source ZIP CRC, exact reconstructed source, three exact synthesized WAVs and 14 native pixel hashes passed in `source-rebuild.json`. Rejected source versions, trial audio and two interrupted encode attempts remain separate failure evidence, not approved films.

Read [final evidence summary](../evidence/EP030/README.md), [reviewer scope](../evidence/EP030/qa/reviewer-encoded-final.json), [producer scope](../evidence/EP030/qa/producer-review-final.json) and [swept regression](../evidence/EP030/qa/swept-contact.json). Best tested repairs are the actual final trials recorded above; no untried alternatives are called validated. The strengthened contact helper is sampled regression with declared tolerances, not analytic continuous collision or arbitrary-mesh proof.

No direct listening, continuous real-time audiovisual playback, browser parity or every-frame full-resolution inspection claim. Private episode archive and YouTube scheduling are separate coordinator-owned gates; this entry does not assert publication or completed remote movie archival. Earlier narrower source gates were reopened by REVIEW-001/002 and must not be reused as comprehensive geometry approval.
