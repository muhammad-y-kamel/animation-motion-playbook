# ANIM-#### — Precise mechanism title
- Category / project / episode:
- Status / severity / reporter / observed date:
- Source hash / encoded hash / rendering toolchain:
## Visible symptom and evidence
Timestamp, frame index (zero/one based), resolution, expected vs observed; before-image/encode path + hash.
## Root cause
Hypothesis or confirmed? Confidence and evidence; unknowns explicit.
## Chronological trials
| Attempt | Exact change / source hash | Test | Outcome | Side effects / evidence |
|---|---|---|---|---|
## Best validated fix
Why selected among actual attempts; tradeoffs and non-applicability. If not validated, write “not established.”
## Prevention before building and at relevant stages
Concrete design constraint / checklist / helper; relevant stage names.
## Regression test and pass evidence
Reproducer/command, acceptance criterion, final hash, sample coverage, reviewer, result, limits. Do not equate numerical pass with full visual or listening coverage.
## Cross-project occurrences / related entries
Mechanism shared? Project-specific dimensions and adaptations.
## Update history
Append observed/fixed/reopened events and evidence; never erase failed approaches.

## Discovery origin (required)
- `discovered_by`: `agent` | `reviewer` | `user` | `unknown`.
- Exact source/test/frame/message that first establishes this specific observation within available evidence.
- Distinguish a general user request to review from a specific user-reported defect. Self-review is `agent`; use `reviewer` only for a separately evidenced reviewer/tool report.
- For mixed grouped cases, keep component-level origins and mark overall origin unknown if necessary.
- Log autonomous findings and regressions introduced by repairs without waiting for user criticism; preserve each trial and its actual outcome/verification scope.
