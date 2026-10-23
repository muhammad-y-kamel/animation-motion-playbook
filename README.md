# animation-motion-playbook

## Animation & Motion Error Playbook

بلايبوك حي للرسم والتحريك البرمجي — نصلح الخطأ، نوثّق السبب والمحاولات والنتيجة، ونراجع الدروس **قبل الحلقة وعند كل مرحلة**، وليس بعد الانتهاء فقط.

## Current evidence, not a claimed universal skill
13 evidence-backed case entries from MOKI & PEB EP026–027. Cross-project structure is ready; no other project's undocumented mistakes are presented as facts. Eight EP027 cases have detailed repair histories; five EP026 cases preserve documented repairs with explicit historical gaps. “Best fix” means best validated among recorded attempts for that case, not a universal best technique.

- [Preflight / stage gates](PREFLIGHT.md) — open before **every stage**.
- [Error index](INDEX.md) / [machine-readable index](index.json).
- [Update workflow](WORKFLOW.md) — every observed error, including regressions introduced by fixes.
- [Entry template](ENTRY-TEMPLATE.md).
- [MOKI & PEB constraints](projects/moki-peb.md).
- [Evidence manifest](evidence/manifest.json) — SHA256 and original local provenance.
- [Unverified leads and gaps](UNVERIFIED.md).

## Organization
`entries/` holds reusable mechanisms with specific project occurrences. `projects/` holds contracts and exceptions. The local `evidence/` contains copied source/report/frame snapshots and rejected EP027 encodes; repository text evidence and binary retrieval are explained in [evidence/README.md](evidence/README.md); original production files were not modified. The compiler read source and attributed QA reports; copied visual review findings are not a new independent frame inspection.

## Evidence language
Keep these distinct: source geometry tests; source-preview inspection; encoded thumbnail coverage; selected encoded full-resolution frames; decoded audio numerical checks; actual listening; continuous real-time AV playback; browser parity; archive integrity; publication confirmation. A pass in one cannot certify another. EP027 has full 4,200-frame thumbnail coverage, not full-resolution every-frame viewing. Direct listening, continuous playback and browser parity remain unverified in imported reports.

## Repository policy
Additive updates; preserve prior attempts and history. No automatic claiming of completeness or animation mastery. A recurring pattern can become a reusable helper/skill only after reproducible tests and validated project adaptations. User-provided private destination: `muhammad-y-kamel/animation-motion-playbook`.

## Cross-project historical audit — 2026-10-23
The original 13 entries above remain intact. [Historical audit and case index](HISTORICAL-AUDIT.md) adds 125 attributed historical case records across animation/motion projects, with exact user feedback, repair attempts, coverage gaps and proposed regression checks. These are **not 125 independently validated fixes** and do not mean all account conversations were accessible. Read the [cross-project stage checks](audits/2026-10-23-history/REUSE-CHECKLIST.md) alongside the existing preflight at every relevant stage.
