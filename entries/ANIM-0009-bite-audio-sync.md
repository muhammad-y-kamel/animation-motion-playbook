# ANIM-0009 — Visual bite mismatched second crunch

- Project / episode: MOKI & PEB / EP026
- Category: audio
- Status: repair reported validated; historical root-cause / trial details incomplete.

## Observed symptom / frame
Peb visual bite corrected to 50.4 s rather than conflating with Moki’s 50 s bite.

## Root cause and confidence
Visual action and declared sound event differed; exact original code cause not retained. Confidence: medium.

## Actual attempts and outcomes
QA records moving the visual bite to 50.4 s. No other attempted timing fixes established.

## Best validated repair and tradeoffs
Move the visual bite to the intended second crunch; preserve separate character events. This is the best documented repair in this case, not a comparison of all possible techniques.

## Prevention before building
Use one authored event timeline for poses and cues; validate actual scene state, not cue-sheet presence alone.

## Regression and pass evidence
EP026 independent review verifies 50.4 s; 15 source cue checks pass, 17 decoded cue windows zero-sample lag. Numerical evidence is not perceptual listening.

## Evidence
[Production QA](../evidence/EP026/QA-REPORT.md), [independent visual/numerical review](../evidence/EP026/qa/INDEPENDENT-REVIEW.md), [numerical QA](../evidence/EP026/NUMERICAL-QA.md), [audio QA](../evidence/EP026/audio/AUDIO-QA.md), [cue audit](../evidence/EP026/audio/cue-contact-audit.json), [encoded margin identity](../evidence/EP026/qa/margin-encoded-identity.json). Individual report scopes apply; these are retained prior observations, not compiler re-review. Final encode SHA256 `33af749ed7b5bc858321db4221495e496d50812d2982bb1face870a9a4a04526`. Failed EP026 candidate binaries are not present in this local snapshot; do not imply they are.
