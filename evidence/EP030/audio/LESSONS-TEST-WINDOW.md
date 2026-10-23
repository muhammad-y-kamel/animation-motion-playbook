# MOKI-EP030-AUDIO-002 — Correlation test negative window at opening cue

Status: observed, test repair underway. Symptom: final AAC verifier raised IndexError on the first .05s cue before producing results. Cause confirmed: inherited test calculates .05-.06=-.01s and slices NumPy with a negative start, yielding an empty near-start window. This is a verification-tool defect, not a media decode/audio defect. Original verify_mux.py preserved at audio/rejected-negative-window-test/.

Actual attempt: initial verifier fails on empty correlation input; no AAC sync pass claimed. Repair: clamp window start to zero and end to shorter stream length, assert nonempty windows. Rerun all cues plus opening-specific check. Prevention: include timeline-start and end-window cases in reusable media QA. Numerical alignment is not listening.

Validated repair: all45 cue windows pass zero-sample lag, including .05s opening cue. MP4 891b322c698b801de5610f937bcbb64ae9ced282610c998b2543f2056aa84228. Full AV decode clean; decoded peak0.481537 and no clipping. Status validated_with_limits. Only actual repair was boundary clamp; no invented failed alternatives.
