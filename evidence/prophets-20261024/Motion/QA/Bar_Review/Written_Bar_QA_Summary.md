# Musical-bar still verification

888 native Canvas PNG stills and 38 contact sheets were rendered and their written bytes verified against their recorded SHA-256 hashes.

- 444 musical bars, each represented in landscape (1920×1080) and portrait (1080×1920).
- Three distinct temporal samples at 60fps and a 180-degree shutter for every still.
- The reviewed HTML was unchanged; its hash is 723d7185fb21075c3f110f7c3c107ad3e569773f5eaa2acea9fbe2276eab2710.
- Embedded Arabic font readiness was confirmed. Maximum visible word count is seven, including the two-word header and the part badge.
- Full PNGs are under Stills; exact bar/frame times and contact-sheet paths are in Bar_Still_Render_QA.json.

Visual sign-off belongs in Visual_Review_Checklist.csv. These file and render checks do not assert completion of human visual inspection, half-speed video review, or audio listening.

22 PNGs completed before an execution interruption but their batch receipts had not yet been flushed. Those images were fully decoded, preserved and hashed on resume. Their sample-time receipt was reconstructed from the saved deterministic renderer and bar plan and is identified explicitly per record; the other 866 records retain the runtime sample-time receipt.

Descriptive metadata was corrected to identify the header that drawHeader actually draws (display_title). This did not change any pixels. Both executed and reusable renderer versions and hashes are retained.
