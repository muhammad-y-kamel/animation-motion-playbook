# Cross-project animation / motion history audit

**2026-10-23 — evidence-backed partial account coverage, not a claim that every account conversation was accessible.**

We discovered 43 current cloud tasks and one archived task. Seventeen relevant production/prompt histories were paginated to the end: **566 pages, 1,944 returned items**. Eight returned items were explicitly truncated. Sixteen other tasks returned only empty messages after full pagination; Global Search failed for both Arabic and English animation terms. Local-only or unauthorized-computer histories may not appear. Three mixed room histories were relevance-screened; six operational tasks were screened by latest page, not treated as production history. The active current task is not declared historically exhausted. Previously deleted private content was not resurrected.

## Findings

| Project group | Records | Evidence and exact comments |
|---|---:|---|
| MOKI early animation/Blender, EP002 recovery, Gemini source conflicts, What If historical episodes, Hawaky/Prophets prompt development | 28 | [Findings](audits/2026-10-23-history/moki-history/findings.md), [structured cases](audits/2026-10-23-history/moki-history/cases.json) |
| AnswerAct bilingual films, hammer versions and brainrot/3D campaign | 33 | [Findings](audits/2026-10-23-history/answeract/findings.md), [bounded source excerpts](audits/2026-10-23-history/answeract/evidence-excerpts.json) |
| GetMotion rebuild and delivery, Ezzay30 production | 45 | [Findings](audits/2026-10-23-history/getmotion-ezzay/FINDINGS.md), [structured cases](audits/2026-10-23-history/getmotion-ezzay/cases.json) |
| Canva/Learn EG, four showreels, Ezzay first ten/kit, GetMotion brand-copy | 19 | [Findings](audits/2026-10-23-history/own-findings.md), [case index](audits/2026-10-23-history/own-cases.json) |

**125 historical case records, not 125 unique validated defects.** A record may group related occurrences; one AnswerAct entry supplements earlier causes. Existing ANIM entries remain untouched. Related mechanisms are linked by [reuse checks](audits/2026-10-23-history/REUSE-CHECKLIST.md), while each project's separate trials, rejected revisions and user feedback are preserved.

## Evidence strength

- User criticism = user-reported observation. Assistant “fixed” = attributed repair claim, not independent proof. Later user rejection overrides earlier broad pass claims.
- This audit does **not** claim new frame-by-frame video review, direct listening or continuous playback of historical outputs.
- Seventeen Ezzay QA reports were recovered. The hashes of all thirteen episode correction reports match the archived release-verification record: this validates **report identity**, not pixels or pronunciation in current exports.
- Cloud reader returns task/item IDs but no source-message URLs or per-item dates. Exact identifiers are retained instead of invented links or dates. Library artifact IDs/paths/dates are retained when supplied. Old sandbox URLs in excerpts are historical references, not guaranteed working downloads.
- Causes absent from evidence remain unknown; suggested regression tests are labelled recommendations rather than executed experiments. Voice/style preferences remain project-specific.

## Read before building

1. Read [the existing stage gates](PREFLIGHT.md) and [cross-project regression checklist](audits/2026-10-23-history/REUSE-CHECKLIST.md).
2. Open relevant historical cases **at each stage**: script/TTS, rig/contact, layout/type, transitions, beat synchronization, encoded review, packaging/retention.
3. Record every new failure and each attempted fix; preserve rejected results. Re-test the fix and related regressions, naming evidence coverage precisely.
4. Do not label an unresolved historical issue solved without a recovered artifact/test or a newly validated repair.

## Coverage and remaining gaps

[Full discovery/coverage ledger](audits/2026-10-23-history/COVERAGE.json) · [package manifest](audits/2026-10-23-history/MANIFEST.json)

Remaining: failed saved-ChatGPT Global Search, sixteen empty task histories, explicit truncated messages, unidentified local-only histories, and prompt-only leads without canonical conversation IDs. حكاوي الحارة motion prompt was read from Library but is not an incident log; no error was invented from its prohibitions. Static-image projects are not silently converted into animation incidents. Closing these gaps requires a supported readable source/export, not guessing or denied session reads.
