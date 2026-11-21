# Ezzay (إزاي) project contract — consolidated from playbook entries

Draft, additive. Consolidates conventions actually recorded across EZZAY-S01–S25, L02–L05 and EZZAY-NATIVE-PORTRAIT-20261028 entries (2026-10-28 to 2026-11-02). Where entries disagree, the stricter recorded practice wins. This document invents no new requirements.

## Channel identity
Arabic science-mechanism explainer: how everyday things and body/physics phenomena work (thermos, onion tears, PTFE coating, tinnitus, contactless cards, own-voice perception, receptors, condensation, airbags, foil insulation, dark adaptation, chemistry conservation, ball spin, popcorn, wireless charging, nerve interfaces, force arrows, oxygen transport, electric shock, adhesives, vestibular cupula, ligands, induction hobs). Illustrations are symbolic/qualitative, never presented as measured simulations; entries repeatedly disclaim CFD, calibrated-physics, medical and clinical validation.

## Formats
- Shorts (S##): native portrait 1080×1920 @ 30 fps, roughly 40–70 s (observed 1,609–2,202 frames). Portrait is designed natively, not cropped from landscape.
- Long-form (L##): landscape, observed ~11,500–13,400 frames @ 30 fps (~6.5–7.5 min).
- Every video pairs with a matching vector cover (YouTube thumbnail), cover-only footnotes avoided when they collide with early captions.

## Narration and captions
- Canonical Arabic narration audio is frozen per episode; scripts/word timings are preserved exactly across repairs (no new TTS or retiming during visual fixes).
- Captions are word-aligned RTL, regrouped into semantic groups of mostly 2–3 words, max 4, protecting negation and referents.
- Arabic multiline spacing tested (e.g. 48–49 px raised to 58 px) so lines cannot touch.

## Layout and annotation rules (from repeated defects)
- Labels, moving markers and routes are separate owned lanes; leaders tie to current geometry midpoints, not stale anchors.
- A mechanism arrow must cross the actual material/contact interface, not point near it (induction heat arrow, force arrows).
- Residual-warning/CTA placement is inspected in the final core CTA layout, not only standalone diagrams.
- Scene transitions are reviewed complete; changed wipes invalidate earlier encoded coverage.
- RTL annotation placement rechecked after every label repair; blank hook-output and suppressed-label identity defects are admission gates.

## CTA
- Single CTA ownership: exactly one owner renders the CTA; compositor must not shrink the mechanism or duplicate oversized CTA text over canonical captions. CTA uses continuing absolute time, not a frozen last-scene clock.

## QA gates (per episode, scoped claims discipline)
- Full frame-timestamp (PTS) verification and canonical master decoded PCM checks; AAC delivery verified with zero-offset correlation windows, explicitly not PCM-identity or listening proof.
- Visual review: all chronological thumbnails in contact sheets plus selected full-resolution native witnesses, owner and independent scopes recorded separately.
- Source-freeze hash mismatches block admission before media work; runtime inventories pinned and verified.
- Claims discipline: no actual-listening, normal-speed playback, browser-parity or publication claims unless actually performed. Scheduling on YouTube is a separate authenticated gate; replacement pattern is schedule-new-verified, then old made private with readback.

## Production runtime notes
- Node/Canvas sequential rendering with bounded heap and output caps; direct-owned child processes reaped; monitoring is reactive, not an OS guarantee.
- Phase-local state resets and stale anchors are recurring defect sources; register support modes and derive contacts from actual support footprints (recurrence gate in PREFLIGHT applies).
