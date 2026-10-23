# E04 cover regeneration QA

All ten finished covers were generated as separate assets with the built-in image_gen tool, from the original authored cover text and visual concepts in Shorts_Map.txt and the visual/religious constraints in Production_Brief.txt. They are regenerated assets, not recovered original images.

## Final checks
- Ten numbered parts 01/10 through 10/10; Arabic series label صلح الحديبية and each original short title visually checked.
- Portrait 940×1672; upload JPEG copies quality94, 4:4:4, each under 1.35 MB. Original generated PNGs preserved.
- Empty landscape, tree, scroll, water, vessels, architecture and only P07 empty restraints. No people, prophet bodies, hands, faces, silhouettes or luminous substitute representations.
- Paper and books remain blank; no invented religious quotations, signatures or seals.
- All final images were visually inspected at generated resolution, not merely inferred from prompts.

## Detected failure and correction
P04, P05 and P06 initial generations incorrectly included empty metal shackles. Cause: a shared prompt included the conditional line “For empty shackles, no human limbs or figures” intended for P07, leaking that positive object into other parts. Those candidates were withheld from upload, saved under rejected/, and corrected using image_gen with a precise remove-all-shackles/chains/restraints instruction while preserving Arabic, part badge and all other elements. All three corrected outputs visibly remove the metal objects and preserve correct text. Final hashes, exact original and corrective prompts and original output locations are recorded in E04-generation.json.

Prevention: construct the positive object list separately for each part. Do not include other parts' objects even inside shared conditional language. Validate the pictured objects against that exact part's original concept before publishing.
