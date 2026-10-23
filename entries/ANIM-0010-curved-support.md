# ANIM-0010 — Unsupported soles and missing bowl-lip support

- Project / episode: MOKI & PEB / EP026
- Category: geometry
- Status: repair reported validated; historical root-cause / trial details incomplete.

## Observed symptom / frame
Soles at 8.6–11 s looked unsupported; QA also records terrace landing penetration repair.

## Root cause and confidence
Support representation did not visibly match curved bowl lip. Exact old implementation unverified. Confidence: medium.

## Actual attempts and outcomes
Added actual curved front-lip support plus foreground rim occlusion; terrace sole correction separately recorded without detailed failed trial history.

## Best validated repair and tradeoffs
Match sole contact to visible support curve and render foreground rim occlusion. This is the best documented repair in this case, not a comparison of all possible techniques.

## Prevention before building
Define contact surfaces from rendered geometry; verify landing and support transitions, not just flat-floor bounds.

## Regression and pass evidence
All 3,120 EP026 story states tested; floor penetration 0, declared contact error 0; selected full-resolution 8.6 s inspected in independent review.

## Evidence
[Production QA](../evidence/EP026/QA-REPORT.md), [independent visual/numerical review](../evidence/EP026/qa/INDEPENDENT-REVIEW.md), [numerical QA](../evidence/EP026/NUMERICAL-QA.md), [audio QA](../evidence/EP026/audio/AUDIO-QA.md), [cue audit](../evidence/EP026/audio/cue-contact-audit.json), [encoded margin identity](../evidence/EP026/qa/margin-encoded-identity.json). Individual report scopes apply; these are retained prior observations, not compiler re-review. Final encode SHA256 `33af749ed7b5bc858321db4221495e496d50812d2982bb1face870a9a4a04526`. Failed EP026 candidate binaries are not present in this local snapshot; do not imply they are.
