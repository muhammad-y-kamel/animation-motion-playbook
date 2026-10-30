# HAKAWI-E04-QA-SCHEMA-WORD-CUES-20261030 — Validate actual downstream metadata and word-level actor cues

- Project: حكاوي الحارة / E04; immutable metadata admission and semantic synchronization.
- Status: `validated_with_limits`; metadata schema recovery and source/six-native scoped cue proof, not whole-motion or full-film acceptance.
- Discovery: agent encountered metadata preparation failure; independent source/admission reviewers and lead/root actual-pixel reviews supplied bounded outcomes.
- Evidence date: 2026-10-30. Compiler read the closed reports; attributed pixel review is not a new image inspection.

## 1. A prospective validator skipped the actual QA preparation lookup
**Confirmed failure.** After a valid closed encoder output, QA metadata preparation raised `KeyError: qaStandingAuthorization.freshRuntimeInventoryAuthorization` at frozen builder line 134. The nested fresh runtime authorization was omitted from the prospective QA template. `validate_standing_documents` did not exercise the lookup later used by prepare. No QA phase or QA child existed; the slot was empty. The successful encoder was not invalid media and did not need a blind rerender.

**Repair / preserved attempts.** Original PLAN, standing GO, journal and MP4 identities were retained. Root supplied a separately hash-bound QA-only supplement; an additive derivative builder replaced only the missing nested lookup with that validated supplement and corrected its separately located frozen path bindings. Full original dependency rehash, actual closed encoder/window/slot/empty-proof checks, QA engine/wrapper, caps, native quality, PCM and PTS remained unchanged. Supplement and derivative provenance were added to per-window PLAN/FREEZE; original authority was not rewritten.

**Tests / result.** The recovery report validates all 20 actual-GO schema rows without claiming future media. The later v19 `ACTUAL_FINAL_GO_ALL20_QA_SCHEMA_PASS.json` tests the real admitted GO's nested authorization and complete per-window assignment before the first encode. That is stronger than testing a prospective template. Preserved PRECHILD_FAILURE and DERIVATION_SCOPE establish the failure and exact repair scope; retained actual bounded proof QA establishes execution separately.

**Prevention / regression.** Run the exact downstream metadata-construction path against the actual finalized authorization for every planned row before expensive encoding; check nested fields, phase path, slot and bound inventory. Treat pre-child metadata failure separately from media failure. Recover via explicit additive authority/derivation while preserving original media and source identities; never fabricate GO fields or silently relax caps.

## 2. Caption groups and interpolated character anchors are not actor word cues
**Observed failure.** V18 return-restition-existing-3 was held for semantic actor/cue timing even though technical proof closed. Correct pixels/PCM cadence alone did not prove the intended person appeared on the intended spoken name. Earlier source and HOLD remain preserved.

**Confirmed source correction.** Inventory the actual source-token ledger `start_seconds`, not an interpolated within-word character anchor or six-word caption group. V19 binds the Mostafa/uncle/office starts to global frame 24149 / 24327 / 24543 (zero-based, 60fps) while preserving captions/audio. Pure test report records 3,786 calls and explicitly says source-only. Full default draw trace compares 27,778 central frames × three samples = 83,334 comparisons: 936 changed frames (2,808 samples), 26,842 unchanged frames, zero text/caption call differences. Changed ranges are 23549–23822 and 24149–24810 inclusive; affected motion windows must be freshly proved, not blanketed by source carry.

**Actual bounded result.** Lead/root six-native review accepted the selected composition/cue states only. V19 full changed motion remains a separate proof sequence; this entry deliberately does not claim all cue motion, acting/dwell, full episode, audio listening or publication acceptance. A source word ledger is not independent listening evidence.

**Prevention / regression.** Bind actor/action landmarks to canonical word starts and their exact source/audio identity. Audit the entire related semantic sequence, include neighboring transitions and full dispatched caption/assets calls, enumerate changed frame ranges, then view actual native evidence and affected encoded windows. Do not use group captions to infer precise spoken onsets or let a technical pass override a semantic HOLD.

## Evidence / preservation
Copied text evidence and exact hashes: `evidence/source-runtime-20261030-2322/manifest.json`. Earlier failed v18 partial proof: Library `libfile_c8f422ba88e48191a191903463470573` v0, SHA256 `54934a1efc11924680873bd6f91628f1be1ad78811bd7fd354adc196e5bf9f94`. V19 closed source/six-native archive: `libfile_ef7d9e29dd90819196cfc7e92eb2d6d5` v0, SHA256 `0352d5325edba24f6738f76b7dbbc22f6db3219450b18d8d820133f0684e1873`. Whole archive and every-entry readbacks passed; that verifies preservation, not new media acceptance.

Related: HAKAWI-E04-DISCRETE-FREEZE-20261030, HAKAWI-E04-RUNTIME-PILOT-20261030 and ANIM-0009/0013. Failed trials and prior HOLD statuses remain unchanged.
