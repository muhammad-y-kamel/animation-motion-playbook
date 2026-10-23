# EZZAY-WF-001 — Duplicate CTA and empty sources heading during metadata enrichment

- Project/stage: إزاي / upload preparation, generated publication schedule.
- Observed: 2026-10-23; current workflow incident, not part of the 139 historical records.
- `discovered_by`: `reviewer`; `discovered_by_detail`: `reviewer_agent` (upload worker), relayed by parent agent.
- Status: **local description repair independently regression-tested**; YouTube saved state not verified here.

## Symptom and evidence
The upload reviewer caught S13's generated description containing a duplicated comment request and an empty `مصادر الشرح:` heading before scheduling S13. This observation is the parent agent's contemporaneous report; the faulty generated schedule was not preserved as a before snapshot and is not reconstructed as an observed artifact.

The original S13 metadata is preserved in [original metadata](../evidence/EZZAY-WF-001/original-S13-publication-metadata.json): its description already includes `اكتب لنا في التعليقات سؤال عن حاجة عاوز تفهم بتحصل إزاي.` and has no `primary_source_urls` field. [Cleaned S13–S25 descriptions](../evidence/EZZAY-WF-001/cleaned-descriptions-S13-S25.json) are bounded snapshots read from the actual repaired schedule.

## Root cause
Unconditional enrichment appended a standard CTA even when the base already contained one, and emitted a sources heading even when no source URLs were supplied. Mechanism reported by parent and consistent with the inspected original metadata. No user complaint was needed to detect this incident.

## Attempts and outcomes
1. Initial enrichment: duplicate CTA / empty heading, caught by upload reviewer (reported observation; faulty schedule not archived).
2. Parent repaired S13–S25 locally to one CTA and conditional sources section, and asked upload worker to re-read. Parent reports titles, dates and media unchanged; no before snapshot is available here to independently prove those invariants.
3. Parent regression at 15:39:21 UTC: all 13 descriptions passed exact CTA count 1 and did not end with an empty sources heading.
4. Audit regression at 15:41:21 UTC on the actual file: 13/13 pass exactly one CTA marker and nonempty suffix after any sources heading. All 13 currently have zero sources headings. [Machine-readable results and hashes](../evidence/EZZAY-WF-001/local-regression-test.json).

## Best locally validated fix and prevention
Keep one CTA; only render a sources section if the sanitized source list is nonempty. Apply enrichment idempotently so applying it twice produces the same output. Prefer structured sections over appending free-text fragments. At metadata creation, schedule compilation and upload preflight, check CTA duplication and empty headings. After a repair, re-read the schedule instead of using cached description text. Do not fabricate missing sources.

## Reproducible local regression
```python
import json
rows = json.load(open('/workspace/shared/ezzay_recovery/publication_schedule.json'))
targets = {f'S{i:02}' for i in range(13, 26)}
selected = [r for r in rows if r['id'] in targets]
assert len(selected) == 13 and {r['id'] for r in selected} == targets
for row in selected:
    text = row['description']
    assert text.count('اكتب لنا في التعليقات') == 1
    assert all(section.strip() for section in text.split('مصادر الشرح:')[1:])
```
This check proves these exact metadata properties only. Semantic paraphrase duplication, source validity, the enrichment function's repeat-run idempotence, and YouTube persistence need their own checks; those were not tested here. No claim about audiovisual QA or public publication.
