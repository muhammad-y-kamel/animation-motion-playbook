# MOKI-EP030-AUDIO-002 — Correlation test negative window at opening cue

Status: observed, test repair underway. Symptom: final AAC verifier raised IndexError on the first .05s cue before producing results. Cause confirmed: inherited test calculates .05-.06=-.01s and slices NumPy with a negative start, yielding an empty near-start window. This is a verification-tool defect, not a media decode/audio defect. Original verify_mux.py preserved at audio/rejected-negative-window-test/.

Actual attempt: initial verifier fails on empty correlation input; no AAC sync pass claimed. Repair: clamp window start to zero and end to shorter stream length, assert nonempty windows. Rerun all cues plus opening-specific check. Prevention: include timeline-start and end-window cases in reusable media QA. Numerical alignment is not listening.

Validated repair: all45 cue windows pass zero-sample lag, including .05s opening cue. MP4 891b322c698b801de5610f937bcbb64ae9ced282610c998b2543f2056aa84228. Full AV decode clean; decoded peak0.481537 and no clipping. Status validated_with_limits. Only actual repair was boundary clamp; no invented failed alternatives.


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
