# L01 native portrait review — work in progress

Preserved original scene clocks/caption words and timings. Native body redesigned as 952×1040 logical canvas inside1080×1920. No crop, blurred padding or landscape shrink. Full original AAC copied from original final video; exact stream comparison pending final encode.

## Actually inspected
- 38 scene-midpoint source frames, four per sheet at540×960 each: qa/L01/sheet_00.jpg through sheet_09.jpg. The actual source frames and scene times are recoverable from filenames/source job; all text readable at the inspected size.
- Full-resolution source: cycle50s, split209s, cover0s, hook2s, CTA435s.
- Full-resolution decoded preview: preview_encoded/03.png, representing original50s in44–56s motion excerpt.
- This is NOT all-frame inspection, continuous playback or an audio-listening pass. Not cleared for publication.

## Errors / trials
1. First portrait cycle_split incorrectly substituted generic central text for explicit inside/outside regions, with an arrow glyph less clear in RTL. Preserved L01_pre_cycle_split_fix.cjs and sheet_04.jpg. Added dashed physical boundary and distinct region labels.
2. First boundary repair placed labels across vertical flow pipes; full-resolution L01_split_corrected.png exposed overlap. Moved labels to row125 above component names. L01_split_v3.png inspected; labels now separate from pipes. Encoded retest pending.
3. Root review found caption area too low for mobile UI. Changed portrait caption box y1560→1460, width888→820, size56→54. Full L01 caption two-line layout validation passes with identical words/timing. L01_safearea.png inspected; no cycle/caption overlap.
4. Cover inherited explanatory footnote near early caption line after safe-area change. Removed note only from cover dispatch; L01_hook_caption.png at2s inspected, distinct diagram labels and subtitle.

No model-generated audio, TTS, service purchases or publishing.
5. Encoded sampled boundary review exposed inherited body-scene wipe combining Arabic titles and temporarily cutting mechanism diagrams. Actual frames433 and1316 visible in rejected_wipe_samples/encoded_sheet_02.jpg and04.jpg. Preserved full rejected_wipe.mp4 and core_before_transition_repair.cjs. Native-only repair switches complete scene+labels atomically at original timestamps. All old encoded reviews invalidated; full replacement encode underway. This changes transition styling, not narration/scene schedule.
6. Sample-extraction harness: 158-term left-deep FFmpeg selection expression exceeded parser depth. Balanced binary expression generated same explicit frame list; extraction succeeded158 frames/40 sheets. Tooling error, not video defect.

Original rejected-wipe frame inspection covered sheets00–09 (40 encoded frames), all at540×960; mixed titles visible at transitions. Remaining sheets were generated, not inspected by this worker. New cut-style encode requires fresh evidence.
