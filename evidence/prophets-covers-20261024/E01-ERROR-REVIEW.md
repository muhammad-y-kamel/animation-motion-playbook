# E01 regeneration review

These files are new images generated from original authored cover specifications in `Shorts_Map.txt` and the visual identity in `Production_Brief.txt`. They are not recovered historical image bytes or exact historical image-generation tool prompts.

## Scene drift in P03/P04
The first referenced-image attempts reproduced a generic tree/landscape instead of the specified abstract dense ink / quiet paper contrast and abstract ink strokes. Arabic text was readable, but the scene did not follow the original per-part concept. Candidates were rejected before upload handoff and preserved as `E01_P03_candidate-scene-rejected.png` and `E01_P04_candidate-scene-rejected.png`. A new isolated prompt explicitly limited the image to abstract ink and paper and excluded landscape objects. The final images were visually checked against the original briefs and exact text/number.

## Missing hamza in P06
The initial output rendered the series header as `صبر ايوب`, omitting the hamza in `أيوب`. A targeted imagegen edit requested only the missing hamza but failed to restore it and slightly altered the artwork. The failed edit was not accepted. A fresh per-part generation explicitly required a clearly visible hamza on أ and produced the correctly spelled final header. The final `E01_P06_Cover.png` was visually inspected, including header, main title and 06/10 badge. Original missing-hamza candidate is preserved.

## Cross-part prompt contamination in P07–P10
The agent mistakenly appended conditional guidance for several different scene types to each prompt. The image generator incorporated those mentioned objects even where they belonged to other parts: grain/metal heaps appeared in P07, locusts in P08, and multiple unrelated events in P09/P10. The output therefore conflated separate narrative events. All four were rejected before upload handoff and preserved as `*_candidate-mixed-scenes.png`.

Corrective action: generate each part with only its own positive visual concept and narrowly relevant exclusions. P07 now shows a spring and rocks only; P08 shows two separate schematic threshing areas with grain and gold/silver, without insects; P09 shows one modest tied plant bundle without a claimed exact count; P10 shows golden locusts on plain earth, without grain/metal heaps or cloth. Exact Arabic headers/main titles/part badges and the no-human/no-prophet rule were visually checked in all four final outputs.

Prevention: never insert multi-part conditional scene instructions into a per-image prompt. Build the positive scene from one record only. Limit reference images to layout/style and state what must not transfer. A generation success is not a QA success. Review text character-level, especially Arabic hamza and dots, and verify narrative object exclusivity before handing a file to publishing. Keep rejected candidates out of the upload manifest.

## Delivery checks
All ten final JPEGs are separate portrait images, 940×1672, below 2MB. Original generated PNGs are retained. JPEG conversion used quality94, 4:4:4 and no crop, resizing or artwork changes. This conversion is lossy compression, not a claim of byte identity to PNG. Final hashes and sizes are recorded in E01-generation.json. Review is visual inspection of still covers, not video review.
