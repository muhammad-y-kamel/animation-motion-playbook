# Historical error audit recovery — 2026-10-26

**Status: materially advanced, still not a complete account-wide audit.** Earlier findings remain preserved. No media production, publishing, account settings, workflow execution or external API generation was changed.

## Recovered scope
Search now works, unlike the October23 failure. Fourteen Arabic/English conversation queries were paginated through all returned cursors (**65 pages**, **18 pages marked partial**): animation, موشن, انيميشن, أنيميشن, motion, Veo, موكي, بيب, تحريك, رسوم متحركة, GetMotion, MOKI, PEB, حكاوي الحارة. An additional animation query over Projects/Library returned no matches without error. These are retrieval outcomes, not proof that every account conversation or project was found. Unrelated personal search hits were not archived.

[Search ledger](audits/2026-10-26-history-recovery/own/SEARCH-LEDGER.json)

**42 newly identified leads were read or relevance-screened**, with scope recorded per conversation. Full pagination was used for relevant production histories; adjacent static-design/marketing/chatbot threads were screened only far enough to establish lack of demonstrated animation relevance, not labeled fully audited. Two own-source pagination requests became unavailable. The ledgers distinguish these states.

- [Udemy ad / automated YouTube workflow](audits/2026-10-26-history-recovery/answeract/coverage.json): five histories,45pages,220messages,16with omitted content. Two Blaze/API conversations lack established video linkage and were excluded from error import; one Veo concept was requirements only.
- [Cinematic / narrative production](audits/2026-10-26-history-recovery/stories/coverage.json): eight histories,29pages,87messages,5with omitted content.
- [UGC/vegetable automation initial screen](audits/2026-10-26-history-recovery/ugc/coverage.json): five histories,7pages,52messages; no observed production failures. Three omitted static-image attachments retained as limits.
- [Additional relevance screens](audits/2026-10-26-history-recovery/ugc/extra-relevance-ledger.json), [final borderline screens](audits/2026-10-26-history-recovery/ugc/extra2-relevance-ledger.json): ten leads, explicitly bounded where older pages remain.
- [Own14-lead ledger](audits/2026-10-26-history-recovery/own/coverage.json): static/reference/copy sources and partial Ezzay input; no fabricated new render defects.

## Findings saved
**30 new case/correction records**, not thirty proven fixes or unique visual defects:

1. [Five Udemy ad +15 media-pipeline records](audits/2026-10-26-history-recovery/answeract/findings.md): speaker identity/dialogue duplication, broken sigh, pronunciation, phone/camera/physics continuity; n8n payload loss, schema and item-mode mismatch, false save confirmation, import failures, and a foreign-key race introduced by a repair.
2. [Ten cinematic/narrative records](audits/2026-10-26-history-recovery/stories/findings.md): face identity drift, conflicting shot/wardrobe constraints, speech-contract correction, a provider block, runtime contract drift, source-copying contradiction, colder/verbose script regression, localization feedback, and dropped pronunciation/story sections.

The new audit itself noticed **exactly8 seconds in the source becoming exactly9 seconds in the delivered prompt**, with no explicit runtime-change authorization found in the visible history. This is a textual deviation, not a measured video-duration failure. It remains unresolved; no production was restarted to fix it.

The pipeline history preserves a particularly useful failed repair: moving mandatory run creation to a parallel branch avoided one payload problem but allowed episode insertion before its FK parent existed. The historical follow-up proposed inline initialization followed by payload restoration, leaving noncritical logs parallel. No workflow execution here verified that repair. A user also explicitly reported the same Postgres split error after a claimed fix; subsequent suggestions remain unvalidated.

[Deduplication/status](audits/2026-10-26-history-recovery/DEDUP-AND-STATUS.md) explains why these are distinct occurrences from existing Moki, WhatIf rendered episodes, Coursera and office-UGC cases. Historical diagnoses and repairs retain their source attribution; discovery origin distinguishes user symptoms, agent diagnosis and current-reviewer findings. No historical success claim was promoted to independent verification.

## Remaining blockers — rechecked, not guessed
- **All33 old native omitted messages checked individually:**31remain flagged omitted; one exact message is unavailable; one returns temporary context unavailability. **Zero omissions resolved.** [Results](audits/2026-10-26-history-recovery/own/OLD-OMISSIONS-RECHECK.json)
- **GetMotion gfx** still returns `Conversation context exceeds its safe read limit.` No bypass was attempted. Prior cloud evidence is preserved, not a substitute for claiming this native history read.
- **Sixteen formerly empty cloud tasks:** latest-page rechecks still return only empty text. This was not renewed full pagination and does not establish older content recovered. [Results](audits/2026-10-26-history-recovery/own/CLOUD-EMPTY-LATEST-RECHECK.json)
- **Two new partial sources:** Ezzay script-index input and an adjacent course-catalog/infographic conversation hit `This conversation or exact message is unavailable to this Dot.` during older-chunk pagination. [Exact IDs and ranges](audits/2026-10-26-history-recovery/own/KNOWN-READ-BLOCKERS.json)
- Partial search pages, inaccessible/local-only histories and old cloud truncations remain coverage limits. None is treated as evidence that no project/error exists.

## Closing condition
Do not mark the original “all projects, all conversations” task complete on the basis of this pass. A truthful current state is **available new evidence archived; residual coverage blocked/partial**. Resume only on materially new accessible sources, supplied exports/URLs, restored omitted content or improved search coverage; then deduplicate against these ledgers. No new approval, spend, publication or production authority is implied by the audit status.

Files contain bounded evidence and retrieval inventories, not full private conversation dumps or credentials. Secrets were excluded and pattern-scanned. Provider blocks are documented as limits, never as instructions to defeat safeguards. No current vendor capability/pricing recommendation is inferred from historical statements.
