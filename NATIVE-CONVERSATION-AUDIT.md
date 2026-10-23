# Native ChatGPT conversation audit — 2026-10-23 recovery pass

Direct conversation reading became available for five exact URLs supplied by the parent/Dreamer. Search discovery itself still returned `Error searching saved ChatGPT content.` during this pass (15:51–15:53 UTC), including exact-title and conversation-only requests. This is **not an all-account completion claim** and does not resolve the earlier 16 empty cloud histories or 8 truncated items. Known native IDs are a different source layer and cannot be assumed equivalent to cloud threads without matching evidence.

## Coverage
All available reader directions and split text chunks were exhausted for the five known conversations: **69 unique messages**, **9 messages with content omitted still unavailable**. No media artifacts were independently re-rendered, watched or listened to in this pass.

| Conversation | Unique messages | Omitted | Result |
|---|---:|---:|---|
| [إعادة بناء المشروع](https://chatgpt.com/c/6ad352d7-d63c-83ea-8596-a11ed8e009f9) | 9 | 1 | Dated AnswerAct repair/rejection history and missing deliverable |
| [برومبت لفيديو 3D](https://chatgpt.com/c/69b1e321-4c40-8329-ab45-47eb7433baba) | 16 | 0 | Learn EG angry-tablet scene/script corrections |
| [فيديو كورسيرا بالذكاء الاصطناعي](https://chatgpt.com/c/6a4c060c-8f30-83ea-a1e1-8de605143eeb) | 22 | 5 | Nodding, distorted UI, frozen-motion repair regression, provider rejection |
| [برومبت نانو بانانا](https://chatgpt.com/c/6968d7df-37ac-8327-b969-c213398c3b64) | 20 | 3 | Chibi identity and sequential-vs-concurrent interaction |
| [حكاوي الحارة وتحسينات البرومبت](https://chatgpt.com/c/6a21ed68-0144-8326-bee6-d692044e3b9f) | 2 | 0 | Requirements/prompt design only; not fabricated as an error |

## Records and deduplication
- [Coursera/chibi findings](audits/2026-10-23-native/own/FINDINGS.md): six new historical records, [structured evidence](audits/2026-10-23-native/own/cases.json).
- [AnswerAct/Learn EG findings](audits/2026-10-23-native/answeract/findings.md): eight records, of which five are new mechanisms/scope or authoring corrections; two are additional dated occurrences/repair attempts associated with existing mechanisms; one is a QA evidence limitation, **not another defect**. [Cases](audits/2026-10-23-native/answeract/cases.json), [dated message excerpts](audits/2026-10-23-native/answeract/evidence.json).
- Thus this pass stores **14 records: 11 new historical cases/corrections, two occurrence supplements, one limitation**. Do not add all 14 as unique defects or verified fixes. The existing 139 historical records and EZZAY-WF-001 current-workflow entry remain intact.
- [Own coverage](audits/2026-10-23-native/own/coverage.json), [AnswerAct/3D coverage](audits/2026-10-23-native/answeract/coverage.json), [Hakawy coverage](audits/2026-10-23-native/moki-stories/coverage.json) retain exact URLs, message IDs, dates and unavailable content.

## Most important correction to snippet-only impressions
Coursera's anti-nodding/UI-preservation prompt was **not a verified fix**: the later user explicitly reports «دلوقتي اصبح مابيتحركش». The assistant then attributes this to overly strict preservation and proposes selective motion. No subsequent successful artifact is established. Similarly, chibi concurrency JSON/flags and final plain-text prompt were proposals, not proven supported controls or guaranteed repairs.

## Reusable prevention gates
1. Check purposeful nonzero motion *and* image/UI fidelity after every motion-suppression revision.
2. Specify simultaneous contact/reaction intervals; inspect continuous playback for delayed responses.
3. Check identity before animation, not merely general style similarity.
4. Compare delivered engine/formats against the requested deliverables; disclose missing components.
5. Fit scene prompts to the user's actual historical generation constraints; do not infer current vendor specifications from an old message.
6. Treat silent playback as media-operation evidence only, never listening approval.
7. Keep autonomous editorial/render findings, rejected intermediate fixes and later user regressions in chronological order.

No secrets or full private conversation archive is included. Source excerpts are bounded; copied API documentation/request identifiers unrelated to the defect were omitted. Provider privacy rejection is recorded as a workflow limitation, not as a safeguard bypass recipe.
