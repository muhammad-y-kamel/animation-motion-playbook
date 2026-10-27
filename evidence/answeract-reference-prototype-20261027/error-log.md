# New Facebook-reference AnswerAct adaptation
## AA-FB-001 — punctuation in right-aligned Arabic chat lines
Observed native source previews opening-t5.png/opening-t8.png: neutral punctuation at a line end resolved visually next to the rightmost word under the generic SVG text helper. This is a visual typography issue, not TTS/source-copy error.
Cause: inherited helper relies on default bidi handling, with end-anchoring but no explicit RTL isolation.
Trial: keep canonical narration untouched; use punctuation-free short chat display lines (except Arabic question marks) in opening-prototype.cjs. Preserve initial previews. New v2 previews generated; native visual recheck required before encoding.
Prevention: inspect each actual mixed-script/neutral-punctuation line, not just font support. Do not modify canonical script to compensate for a visual renderer issue. If future display needs embedded Latin/numerals, use explicit per-run direction with measured bounds.

AA-FB-001 retest: opening-t5-v2.png actually viewed natively; punctuation-free chat lines read normally. This is only a source-preview fix, not final encoded or voice approval.

## AA-FB-002 — source reveal pushed orb below safe composition
Root visually reviewed t8 and rejected bottom-heavy layout: full900px chat persisted while source and orb landed at1435/1700. Parent also flagged heading clearance. Preserve opening-prototype-before-layout-fix.cjs and earlier images.
Repair trial: retire incoming question/input first, compact chat to selected reply only, reduce panel height900→520, source y1150 and orb1410; heading retained y300. Parent-local transformations keep response and panel together. Native opening-t8-v3.png viewed; visible elements fit central region with footerreserve. Temporal/encoded all-frame checks remain pending.

## AA-FB-003 — clean native still hid transition collisions
Independent reviewer inspected the encoded opening, identifying concurrent outgoing/incoming headings around6.67–7.13s and services strip colliding with shrinking chat around6.7–7.07s. Cause: both opacity transitions reused one global progress even though geometries needed a clearance interval. Retained original encoded proof and source (`opening-motion-proof-before-temporal-repair.mp4`, `opening-before-temporal-repair.cjs`). Repair: heading retirement6.5–6.75, incoming starts6.9; source/orb/connectors start7.45 after chat reaches contracted layout7.5. Re-encoded actual-frame re-review pending; no pass claim from source.

AA-FB-003 retest outcome: independent reviewer actually viewed all135 original encoded frames, then all38 repaired frames97–134. Both heading and services-panel collisions resolved in re-encoded output. No new blocking issue in that retest. Evidence: `opening-motion-review.md`. This does not cover future final timing changes or audio sync.

## AA-FB-004 — platform connection checks lacked a visible cause
All-frame account reviewer found Facebook/Instagram checks appeared without platform selection after Create. Repaired with one continuous cursor: Create, Facebook click, then Instagram click; each check follows its own target action. Previous source/proof retained. Pending encoded retest.

## AA-FB-005 — request summary incomplete / privacy shown only as labels
All-frame later-scene reviewer found no blocking visual defect but two semantic polish items: masked contact visible in chat missing from consolidated request, and private panel explaining rather than demonstrating a DM. Added same masked phone to request summary and actual fictional name/service/masked-contact to private panel. No real contact data used, no payment confirmation implied. Re-review required after encode.

AA-FB-004 retest: all150 actual repaired frames0–149 reviewed, distinct platform clicks now precede checks and save cursor no longer masks label. AA-FB-005 retest: all150 repaired frames300–449 reviewed, matching masked phone and larger private-message example visible. Both reviewer reports retain earlier findings and new exact hash. No blocking defect observed in these retested ranges. Untouched scene ranges150–299 were visually reviewed in prior encode; new lossy encode is not pixel-identical, and these ranges were not re-reviewed in this bounded prototype retest. Final audio-timed film still requires fresh all-frame visual review.
