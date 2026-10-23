# Living update protocol

1. **At every stage start**, read PREFLIGHT and relevant entries; record applicable IDs and adaptations. Review again after changes or stage transitions, not just once per episode.
2. **On every mistake**, immediately reserve an ANIM-#### ID (or add an occurrence to the existing mechanism). Set `observed` even if unresolved. Record symptom, exact source/video hash, timestamp/frame convention, reporter, severity and evidence. Never delay recording until a fix works.
3. **Preserve the failed state** before changes: source diff/snapshot, rejected encode or focused reproducer, screenshot plus its provenance. Never overwrite the only failure artifact. Separate hypothesized cause from confirmed cause.
4. **Trial log** is chronological and append-only in substance: attempted change, rationale, source hash, test, observed result, side effects. Record failed trials and regressions as well as successful trials. Do not manufacture undocumented approaches.
5. **Repair and validate** in actual final renderer/encode; re-test exact symptom, neighboring transitions and related cases. Numerical checks complement, not replace, visual review. Mark `validated_with_limits` only with evidence and exact scope. Leave open questions explicit.
6. **Select best-known fix** among actual trials, with tradeoffs and where it may not generalize. Convert it into a preflight prevention rule and reproducible regression test where feasible.
7. **Before proceeding to next stage**, update INDEX.md + index.json, evidence hashes, entry status and project stage log. Blocking errors remain a gate; unresolved nonblocking limitations require explicit disclosure, not a silent pass.
8. **Before next episode**, read accumulated rules again. After recurrence across projects, factor a general rule/helper while preserving each project's dimensions, constraints and exceptions.
9. **Archive additively** in the authorized private repo. Re-read head before committing, preserve history, verify remote head and changed file content; avoid publishing private evidence elsewhere. Repository verification is separate from YouTube scheduling.

## Stage log template
`project / episode | stage | source SHA256 | relevant IDs reviewed | new errors | tests / evidence | reviewer | result / limitations | next gate`

## Status vocabulary
`observed` → `diagnosing` → `repair_attempted` → `validated_with_limits`; `reopened` when reproduced. Historical imports may use `validated_with_partial_history`. An unverified lead is not a confirmed error entry. Preserve earlier result when superseding with new evidence.


## Explicit universal error-capture directive
For EVERY user-authorized animation or motion-graphics project, log every error noticed by the producer, a delegated agent, an independent reviewer or the user—even when fixed without user intervention. Record symptom, cause, discoveryattribution, each actual attempted solution/result, best tested repair, exact evidence and regressions. Read the cumulative playbook at script/layout/rig/motion/audio/render/review/archive stages. After review, record and repair new errors and re-test; do not silentlyfix. User rejection reopens creative acceptance; numerical correctness is not story comprehension. No future production beyond the user's current scope is authorized by this rule.
