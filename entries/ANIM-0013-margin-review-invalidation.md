# ANIM-0013 — Late margin correction required encoded revalidation

- Project / episode: MOKI & PEB / EP026
- Category: workflow
- Status: repair reported validated; historical root-cause / trial details incomplete.

## Observed symptom / frame
Waiting Moki thumb grazed left edge before boarding; moved 15 px inward.

## Root cause and confidence
Insufficient projected safe margin. Confidence: high from explicit margin repair record.

## Actual attempts and outcomes
Moved Moki inward; source changed only frames 1441–1781; rerendered encoded 20–30 s segment.

## Best validated repair and tradeoffs
Recheck changed encoded region; carry forward old visual review only where exact frame/sheet identity is proven. This is the best documented repair in this case, not a comparison of all possible techniques.

## Prevention before building
Camera/pose edits invalidate affected review. Record source/encode hashes and changed-frame scope.

## Regression and pass evidence
2,880 decoded frames outside 20–30 s exact pixel identity; changed sheets 021–030 reviewed again; final frame 1620 newly inspected. Evidence margin-encoded-identity.json and INDEPENDENT-REVIEW.md.

## Evidence
[Production QA](../evidence/EP026/QA-REPORT.md), [independent visual/numerical review](../evidence/EP026/qa/INDEPENDENT-REVIEW.md), [numerical QA](../evidence/EP026/NUMERICAL-QA.md), [audio QA](../evidence/EP026/audio/AUDIO-QA.md), [cue audit](../evidence/EP026/audio/cue-contact-audit.json), [encoded margin identity](../evidence/EP026/qa/margin-encoded-identity.json). Individual report scopes apply; these are retained prior observations, not compiler re-review. Final encode SHA256 `33af749ed7b5bc858321db4221495e496d50812d2982bb1face870a9a4a04526`. Failed EP026 candidate binaries are not present in this local snapshot; do not imply they are.
