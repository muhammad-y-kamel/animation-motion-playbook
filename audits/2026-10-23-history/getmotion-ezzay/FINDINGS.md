# GetMotion and إزاي historical error audit

## Scope and evidence strength
Two **cloud task visible histories** were read to exhausted cursors on 2026-10-23. This does not mean all ChatGPT account conversations were available or reviewed. ChatGPT Global Search failed in the coordinating task. The cloud API returned stable thread/item IDs but no conversation URLs or per-item dates; those are deliberately not invented. Sandbox links inside quoted messages are historical artifact references, not verified current downloads.

All GetMotion repair outcomes below are **attributed historical assistant claims**, not a new visual, audio, browser or source-code verification. Its latest recorded snapshot was 24 saved rebuilt videos and GM067 Arabic rendering; earlier 40-file delivery was followed by lost local files. Do not collapse these stages into “40 recovered”.

For إزاي, 17 native Library QA/correction reports were recovered. The 13 episode correction-report SHA256 values match the archived final-release verification report. That report records final/clean rerender acceptance, superseding the individual reports' earlier pending states. **This audit verifies report identity, not the actual current video pixels or audio.** Reports preserve source-only QA limitations and exact prior/new export hashes.

## Files
- `cases.json`: 45 case groups; detailed issues, attempted solutions, outcomes and exact evidence references. A group can contain multiple separately retained occurrences; this is not a count of 45 independently verified fixes.
- `getmotion-excerpts.json`, `getmotion-render-excerpts.json`, `ezzay-excerpts.json`: bounded relevant direct-message excerpts; user feedback retained verbatim, secrets and credential message excluded. Excerpts are stored newest-first; do not interpret order as repair chronology without the case narrative.
- `coverage.json`: retrieval completion and truncation counts for assigned cloud threads.
- `reports/`: original supplemental QA records, not full private conversations.
- `library-sources.json`: Library item identifiers, dates and paths; `report-hashes.json` and `report-identity-verification.json`: integrity.
- `ezzay-audio-caveats.json`: explicit unresolved ASR ambiguities. No invented pronunciation fix.

## Exact user feedback
GetMotion: «حدث خطا وقت التحميل ارسل الملفات مرة اخرى»; «مع ان عندي مساحة في اشتراكي كنت تقدى تحفظ عليها

دلوقتي عيد المهمة من اولها مرة أخرى».
إزاي: «الملفات ل ذكرتها فلبرومبت ماديتهاليش عشان ابعتهاله»; «بلاش حزم ابعت الملفات خام»; «متنساش ترفع يعد ماتخلص النتايج النهائية في الاسبيس بتاعت في التطبيق

وكمل اللي كنت بتعمله دا مجرد هينت».
These are delivery/process comments, not user validation of individual visual repairs. No case-specific user approval of the sampled visual fixes was found in the visible assigned histories.

## Reusable prevention checklist (audit recommendations, not historically verified fixes)
1. Sample **transition windows**, not only stable poses; check both languages and the actual encoded output.
2. Bound contact using rotated silhouettes, not origins; test near-plane changes for clipping regressions.
3. For Arabic geometry inspect join/fill rules and glyph contour asset parity in offline previews.
4. Drive reveal duration from real scene progress and actual speech-word cues; static explanatory diagrams can persist for 10–19 seconds unnoticed.
5. Compare semantic directions/targets, not merely pretty arrows (rod vs cone, heat flow, gastric arrow).
6. Freeze source while rendering; tie QA to artifact SHA; supersede rejected versions explicitly.
7. Validate original vs derived audio duration before regeneration; numerical/ASR checks do not equal listening.
8. Save approved files durably before claiming downloadable delivery; preserve current source, all dependent assets and independent offline editable previews. Never treat stale sandbox URLs as storage.

## Case index

- getmotion: 177 pages, 665 visible items, exhausted=True, truncated items=0.

- ezzay: 27 pages, 90 visible items, exhausted=True, truncated items=0.

| ID | Project | Issue | Status |
|---|---|---|---|
| HIST-GM-01 | GetMotion | GMX10 title / 3D background collision | assistant_reported_repair_not_independently_verified |
| HIST-GM-02 | GetMotion | GMX02 shadow stripes / depth precision | assistant_reported_repair_not_independently_verified |
| HIST-GM-03 | GetMotion | GMX07 self-intersecting morph | assistant_reported_repair_not_independently_verified |
| HIST-GM-04 | GetMotion | Arabic connected glyph gaps GM001 / GM067 | assistant_reported_repair_not_independently_verified |
| HIST-GM-05 | GetMotion | GM005 vertical refraction seam | assistant_reported_repair_not_independently_verified |
| HIST-GM-06 | GetMotion | Opening choreography does not implement brief | assistant_reported_repair_not_independently_verified |
| HIST-GM-07 | GetMotion | Editable HTML differs from render / missing glyph outlines | assistant_reported_repair_not_independently_verified |
| HIST-GM-08 | GetMotion | UI preview path and title crossings | assistant_reported_repair_not_independently_verified |
| HIST-GM-09 | GetMotion | Download failure and lost final delivery | user_reported_failure_with_partial_rebuild |
| HIST-GM-10 | GetMotion | Disk / render resource failure | assistant_reported_repair_not_independently_verified |
| HIST-GM-11 | GetMotion | GlassPrint cursor / clock collision | assistant_reported_repair_not_independently_verified |
| HIST-GM-12 | GetMotion | MetricLoad transition word overlap | assistant_reported_repair_not_independently_verified |
| HIST-GM-13 | GetMotion | MorphRail checkmark crosses إرسال | assistant_reported_repair_not_independently_verified |
| HIST-GM-14 | GetMotion | Other layout collisions retained individually | assistant_reported_repair_not_independently_verified |
| HIST-GM-15 | GetMotion | Logo clipped before entrance in musical-ball style | assistant_reported_repair_not_independently_verified |
| HIST-GM-16 | GetMotion | Glass motion blur duplicate sample times | assistant_reported_issue_repair_details_incomplete |
| HIST-GM-17 | GetMotion | Transient price/currency and frame/title collision | assistant_reported_repair_not_independently_verified |
| HIST-GM-18 | GetMotion | GM025 / GMX08 repeated phrases and send icon | assistant_reported_repair_not_independently_verified |
| HIST-GM-19 | GetMotion | GM099 English text intersects construction line | assistant_reported_repair_not_independently_verified |
| HIST-GM-20 | GetMotion | 3D text / paper fold clipping | assistant_reported_repair_not_independently_verified |
| HIST-GM-21 | GetMotion | Blur combines two Arabic sentences | assistant_reported_repair_not_independently_verified |
| HIST-GM-22 | GetMotion | Reverse Evidence boundary crosses Arabic lines | assistant_reported_repair_not_independently_verified |
| HIST-GM-23 | GetMotion | 3D size jump / end-logo assembly / camera jump | assistant_reported_repair_not_independently_verified |
| HIST-GM-24 | GetMotion | UI preview overlaps send button | assistant_reported_repair_not_independently_verified |
| HIST-GM-25 | GetMotion | GM002 single-frame blend / GMX02 hold noted, not proven defect | observed_caveat_accepted_by_prior_assistant |
| HIST-EZ-L01 | Ezzay | L01 original correction record | archived_QA_reports_accept_corrected_export_not_new_visual_review |
| HIST-EZ-L02 | Ezzay | L02 original correction record | archived_QA_reports_accept_corrected_export_not_new_visual_review |
| HIST-EZ-L03 | Ezzay | L03 original correction record | archived_QA_reports_accept_corrected_export_not_new_visual_review |
| HIST-EZ-L04 | Ezzay | L04 original correction record | archived_QA_reports_accept_corrected_export_not_new_visual_review |
| HIST-EZ-L05 | Ezzay | L05 original correction record | archived_QA_reports_accept_corrected_export_not_new_visual_review |
| HIST-EZ-S02 | Ezzay | S02 original correction record | archived_QA_reports_accept_corrected_export_not_new_visual_review |
| HIST-EZ-S03 | Ezzay | S03 original correction record | archived_QA_reports_accept_corrected_export_not_new_visual_review |
| HIST-EZ-S05 | Ezzay | S05 original correction record | archived_QA_reports_accept_corrected_export_not_new_visual_review |
| HIST-EZ-S08 | Ezzay | S08 original correction record | archived_QA_reports_accept_corrected_export_not_new_visual_review |
| HIST-EZ-S10 | Ezzay | S10 original correction record | archived_QA_reports_accept_corrected_export_not_new_visual_review |
| HIST-EZ-S11 | Ezzay | S11 original correction record | archived_QA_reports_accept_corrected_export_not_new_visual_review |
| HIST-EZ-S17 | Ezzay | S17 original correction record | archived_QA_reports_accept_corrected_export_not_new_visual_review |
| HIST-EZ-S21 | Ezzay | S21 original correction record | archived_QA_reports_accept_corrected_export_not_new_visual_review |
| HIST-EZ-EXTRA-39 | Ezzay | Static opener | conversation_report_only |
| HIST-EZ-EXTRA-40 | Ezzay | Airbag continuity | conversation_report_only |
| HIST-EZ-EXTRA-41 | Ezzay | Undelivered referenced files | conversation_report_only |
| HIST-EZ-EXTRA-42 | Ezzay | Scientific script-to-diagram safety | conversation_report_only |
| HIST-EZ-EXTRA-43 | Ezzay | Three truncated derived WAVs, not original TTS | archived_repair_report_not_new_playback |
| HIST-EZ-EXTRA-44 | Ezzay | Eight cover titles too long for safe margins | archived_repair_report_not_new_playback |
| HIST-EZ-ASR-CAVEAT | Ezzay | Unresolved ASR ambiguity is not proven pronunciation failure | unresolved_requires_listening |
