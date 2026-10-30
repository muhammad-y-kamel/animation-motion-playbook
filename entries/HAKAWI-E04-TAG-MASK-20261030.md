# HAKAWI-E04-TAG-MASK-20261030 — Donor apron pixels mistaken for a joint seam

- Project / episode: حكاوي الحارة / E04.
- Category: donor masking, limb topology, physical card grip, native visual QA.
- Status: **validated_with_limits — four selected native stills only**.
- Observed and repaired: 2026-10-30, v5 → v6 → v7. Earlier failed states remain historical; no E04 overall acceptance is claimed.
- Discovery: agent actual-frame review, followed by root independent review. The user's general request to review is not attributed as a specific user report of this crescent.
- Documentation provenance: this entry compiles the frozen source and attributed review receipts; its author does not claim a new independent image inspection.

## Visible symptom

The tag-holding donor arm showed a dark crescent below the proximal forearm and, in segmented versions, a cuff/forearm separation. A correct card numeral, improved wrist overlap or successful render did not clear the arm defect. The exact native anchors were global frames **9902, 9940, 10002 and 10236**. Frame IDs are retained as recorded in the renderer/review receipts; this entry does not shift their indexing.

## Chronological trials — preserve failures

| Attempt | Actual change | Test and observed result |
|---|---|---|
| v4 → v5 split-mask repair | Narrow upper-mask trim and rounded adjacent wrist overlap; keep tag timing and opposing grip. | Actual v5 still review remained **HOLD**: dark apron crescent at 9902/9940/10002 and visible cuff/forearm separation at 9902/9940. Wrist improved, but trimming one upper-mask vertex did not repair the entire donor seam. Source-only foremask checks had missed upper-mask contamination and the rendered angled wrist. |
| v6 topology simplification | Use one continuous rigid real donor limb outline and transform rather than separate elbow/wrist pieces. Keep tag trajectory and thumb layer; place proximal exit naturally beyond the viewport. | Actual four-still review found split-joint gaps removed and card grip retained, but **DONOR_CONTOUR_HOLD** remained: the dark crescent was still present in all four frames. Topology simplification removed seams, not unwanted pixels already inside the source mask. |
| v7 pixel-boundary repair | Trace the actual donor lower-forearm boundary over source x=260…339; inset the mask by one source pixel from the last sampled warm-skin pixel. Keep geometry, rotation, thumb/card and the remaining contour unchanged. | Lead and root independently viewed all four original native JPEG94 anchors. The crescent was absent; sleeve/forearm/wrist stayed continuous, the card remained single-numbered with thumb-over/fingers-under contact, and the proximal limb exited naturally. **Scoped still PASS**, not continuous-motion acceptance. |

Source freeze SHA-256:
- v5: `6f22d37540422a540e3c6578178bf213a0d601fdecc04fb9233e74013a446b4a`
- v6: `fe4767b78e63663d97e2ca441c591463d026e5c3edd0d5e2a1feffceb97979d2`
- v7: `7338369f9f95dc9936911ed043333e1d7e92dc1af37c8eaf4cc7685a68db3540`

## Confirmed mechanism and best tested repair

Two distinct problems were present: segmented topology produced gaps, while the donor silhouette also included dark apron pixels. A continuous rigid limb solved the former but could not remove the latter.

The pixel trace used the actual `seated-gift.png` donor (SHA-256 `1ca2ebf78430bfd271fade19fa57b1a8a1602fc86c4265a41fd40e24cc181896`). At source x=280, the last warm-skin row was y=494, dark apron/background evidence lay at y=496, and the mask was inset to y=493. At x=310, these rows were y=508, y=510 and mask y=507 respectively. The recorded local sampling rule was R>90, R>1.3G, G>1.1B inside y=440…529.

**This threshold and one-pixel inset are donor-specific evidence, not a universal skin segmentation algorithm.** Inspect the original donor and native composite before applying a similar rule elsewhere. Keep actual anatomy and grip pixels; do not blindly erode an entire limb or keep changing topology when the visible artifact is already baked into the selected donor pixels.

## Reproducible prevention and regression gates

1. Preserve rejected source and original native witnesses before modifying a mask.
2. Identify whether a defect follows a joint boundary, a layer overlap or a dark region in the original donor. Test these hypotheses separately.
3. Inspect actual source pixels at the suspected boundary; record source coordinates, neighboring RGB values, donor identity and mask margin.
4. Re-render the same four native anchors from the frozen candidate and compare the whole silhouette, not only the repaired edge: continuous sleeve/forearm/wrist, no apron crescent, readable single numeral, genuine thumb-over/finger-under contact, natural proximal exit and no caption collision.
5. Recheck all affected entry, transfer, release and exit motion plus neighboring cuts in encoded output. A four-still pass cannot clear every intervening pose.
6. Preserve canonical text/audio and unaffected cloth/layout work; source numerical tests or byte-identity claims for unrelated modules are not full visual acceptance.

## Exact evidence and attributed review scope

All paths below are relative to `hakawi_repair/e04-rebuild-20261029/` in the production evidence workspace.

| Evidence | SHA-256 |
|---|---|
| `planning-v7/DONOR_PIXEL_BOUNDARY.json` | `6374240208aacbebcdaf65b087b127d24ad1406116a17a02ef3a851861e59cf4` |
| `preflight-v7-native-anchors/NATIVE_REVIEW.json` | `b864afdd3655fe262a623fa4512bb33d00241fa6a0ee2af4cb32d95b4c190f5e` |
| `preflight-v7-native-anchors/ROOT_REVIEW.json` | `3c56826b22dda7a6a806debf38bc81213ead640dde2c332b3c41531f93c07b81` |
| `source-v7/tag-grip.cjs` | `4301ee930c6808f764d64035fef1fc7176278ce01f7efbb15b71bfe5ea5f362a` |
| Native 9902 | `938d4460b5a20e662dab5988be787067e7c31f9910aeb65a5c0f4113060936f8` |
| Native 9940 | `744617ff4e5a2f5a25255a12f832941ddc09e261e21696ae6d1b0bd5cd3bda40` |
| Native 10002 | `22771d767c9d9448cdeb10c3892e9b25b22cea916b585da11c1788214c5cc66e` |
| Native 10236 | `2bd2b4d6ae480a25fa22d17f2db82e8534ebb7b3b6a103cf797f64d1c4a72904` |

Failed-trial provenance: `planning-v5/ERROR_TRIALS.md`, `planning-v6/ERROR_TRIALS.md`, `planning-v6/V5_HOLD_TOPOLOGY_DECISION.json`, and v5/v6 native review receipts. The pixel-trace file's original “pending four anchors” state and the lead receipt's original “pending root” state are preserved; the later root receipt supplies the narrowly scoped superseding review.

Root's 11:29 UTC decision: **SCOPED_STILL_MASK_TOPOLOGY_CARD_GRIP_PASS** for these four images. Continuous tag transfer/release motion, other action families, final encoded episode, sound alignment and native portrait adaptation remain separate pending gates. No full motion, audio, episode or publication approval follows from this entry.

## Related mechanism / update history

Read alongside the donor alpha-island and native-contact gates in PREFLIGHT. The reusable lesson is to separate topology defects from donor-pixel contamination, not to standardize this particular skin threshold or rigid-arm design across projects.

- 2026-10-30: recorded v5 failed split-mask repair, v6 seam improvement with residual donor contamination, and v7 four-native-still closure. Full-motion and full-episode scope remain open.
