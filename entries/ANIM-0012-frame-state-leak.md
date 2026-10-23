# ANIM-0012 — Random-access renders depended on Canvas state

- Project / episode: MOKI & PEB / EP026
- Category: rendering
- Status: repair reported validated; historical root-cause / trial details incomplete.

## Observed symptom / frame
EP026 QA records Canvas state reset repair and subsequent agreement across random-access seek order.

## Root cause and confidence
Drawing state leaked across frames; specific state variable not identified in retained report. Confidence: medium; do not guess transform/alpha culprit.

## Actual attempts and outcomes
Reset Canvas drawing state each frame; prior attempts unspecified.

## Best validated repair and tradeoffs
Make each frame self-contained and reset state before drawing. This is the best documented repair in this case, not a comparison of all possible techniques.

## Prevention before building
Render the same timestamp after different preceding timestamps, including reverse order; compare exact pixels.

## Regression and pass evidence
EP026 NUMERICAL-QA states random-access agreement; EP027 independent numerical report records 38 reverse-order seeks with identical hashes. Per-test scope differs; do not imply EP026 had the same count.

## Evidence
[Production QA](../evidence/EP026/QA-REPORT.md), [independent visual/numerical review](../evidence/EP026/qa/INDEPENDENT-REVIEW.md), [numerical QA](../evidence/EP026/NUMERICAL-QA.md), [audio QA](../evidence/EP026/audio/AUDIO-QA.md), [cue audit](../evidence/EP026/audio/cue-contact-audit.json), [encoded margin identity](../evidence/EP026/qa/margin-encoded-identity.json). Individual report scopes apply; these are retained prior observations, not compiler re-review. Final encode SHA256 `33af749ed7b5bc858321db4221495e496d50812d2982bb1face870a9a4a04526`. Failed EP026 candidate binaries are not present in this local snapshot; do not imply they are.
