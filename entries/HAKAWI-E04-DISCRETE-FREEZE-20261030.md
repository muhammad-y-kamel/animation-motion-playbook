# HAKAWI-E04-DISCRETE-FREEZE-20261030 — Shutter-mixed cuts, honest historical carry and freeze writer races

- Project/episode: حكاوي الحارة / E04 native long; rendering/editorial continuity, evidence provenance, resource admission.
- Status: `validated_with_limits`; scoped source/native/caption repair and fail-closed admission, **not full-film acceptance**.
- Discovery: agent source audit; independent reviewer full-call differential; root actual native review and independent pin audit. No specific user complaint is invented.
- Date: 2026-10-30. Global frame numbers below are zero-based, 60fps; shutter offsets −1/180, 0, +1/180 seconds.

## Observed errors and confirmed causes
1. Failed v14 native G1951 (`motion-preflight-standing-v6/qa/slot-1/mostafa-craft-wrist-help-family-1/native-L192-G01951.jpg`) mixed wide/detail whole figures. `Math.floor(t/3)` used sampled local time to select a discrete framing. One output frame sampled opposite editorial views. Locking only outer shot selection was insufficient: camera, donor crop, pose, visibility and captions all need the central frame clock.
2. Proposed blanket first-four carry was false. Full symbolic draw calls **including captions** compared 755 frames × 3 samples: 2,264/2,265 matched, but tag7 G9857 negative sample differed. Sample time164.27777777777777 still selects caption ending164.28; central164.28333333333333 selects none. The old caption was `دي مش هتعدي من قدامي تاني.»`. Same action/helper labels did not establish equivalent output.
3. Standing-v7 was frozen while another writer still updated three auxiliary tests. Root's83-pin check caught post-freeze mutations: test-command-parity.py, test-input-thread-scoping.py, test-thread-watch-delta.py changed expected aggregate QA64→96MiB after freeze. Runtime supervisor did not change, but that does not make the freeze valid. HOLD occurred before any media launch.
4. Existing16MiB QA allowance could not retain required proof derivatives at unchanged quality. Measured eight native JPEG94 images10,772,817bytes + four sheet JPEG88 images4,645,470bytes left insufficient room for the fifth sheet; prewrite guard rejected it. Resource correction must be prospective, not a retroactive waiver or quality downgrade.

## Chronological trials and outcomes
| Trial | Change/test | Result and scope |
|---|---|---|
| v14 | Existing shot central lock, sampled legacy inner selectors | Actual G1951 failed; predecessor and failed proof retained. |
| additive source-v15 | episode forwards centralTime; legacy carries sampled dt/p plus centralDt; story discrete decisions and caption lookup central-locked | Continuous easing/mixing, motion helpers, shutter offsets and canonical audio accounting unchanged. Freeze SHA256 `5afc13343c814505433ec6f48cc7ee934e24a8b8cf6cb00eedef4a85cd22925e`. |
| source regressions | Lead83,334 mocked default calls; independent60 boundaries × five center choices × three samples =900 full dispatched traces | Discrete choices stable; normalized story ct→t exactly equals v14, unchanged motion helpers byte-equal. Source tests are not pixels. |
| native cut proof | Root personally viewed G1951/1952,2708/2709,3654/3655 | Six selected native cut stills accepted: no wide/detail double exposure, single captions, connected selected limbs. Does not certify wrist action or full window. |
| blanket historical carry trial | Compare complete first-four symbolic draw sequences | Rejected on G9857 caption difference; failure trace preserved, never normalized away. |
| narrow hybrid | Re-render only affected tag7; retain tag12/cloth/gas as explicitly v14 historical evidence | Other three:559frames,1,677 exact full symbolic sample traces including captions (588+549+540). Same assets/helpers/caption paths verified; **not decoded-pixel equivalence or new v15 media**. |
| fresh v15 tag7 | Full196-frame `[9856,10052)` encoded proof; exact144,060 canonical PCM samples and frame PTS; actual lead196 thumbnails/eight natives | Lead scoped PASS. Root separately viewed five natives9856/9857/9858/9992/10040; clean caption disappearance and connected legible grip accepted. Media SHA256 `b970953af5f9657c04afa8e7bbf0e59341051316c084c5254a1a85aee5f6b2ff`. |
| bridge hardening | Exact first-five/index4 target; forbid execution of carried three; source/plan/GO/range/assets/media/receipt binding; expected-hash capture then fresh checkpoint semantic revalidation and pre-spawn rehash | Independent six selected synthetic/source tests passed, plus seven budget tests. Race coverage is source ordering, not an integration-race experiment. Historical media never relabelled. |
| v7 freeze race | Root mismatch check, additive FREEZE_DRIFT_HOLD | No launch. Original proposal/freeze retained, not edited into apparent validity. |
| additive standing-v8 | Close all source/test writers, then freeze and independently hash complete inputs | Root reported834 path/hash checks,0mismatches. This verifies admission identity, not future media. |
| prospective QA budget | QA per-window24MiB, four-slot aggregate96MiB, global reservation454MiB incl150MiB floor | Native JPEG94/sheets JPEG88, required native count/thumb coverage, codec and audio unchanged.512KiB local control reserve and prewrite denial remain; no hidden cap uplift. |

## Best validated repair / prevention
- Use two clocks: central time for topology/editorial choices and captions, sampled time for genuine continuous motion. Audit reachable dispatcher paths, not just a helper's name. Do not freeze all movement as a shortcut.
- Compare actual evaluated selectors and resulting calls, including captions/assets/camera/visibility. Exercise threshold±epsilon and adjacent60fps centers, not just interiors. Then re-render the actual failed boundary and neighboring frames.
- Carry only explicitly equivalent scopes. Bind old/new source identities, old plan/GO and exact ranges/assets/media/QA/lead/root receipts. Keep historical provenance; require fresh proof for any output mismatch. New checkpoint is not an invitation to fabricate same-source history.
- Freeze only after every participating writer reports closed, including auxiliary tests and receipts. Rehash all pins after freeze and immediately before admission. Any mismatch invalidates the proposal even if it is “only a test.” Preserve it and create an additive replacement phase; never rewrite old freeze/GO/history.
- Bind dynamic checkpoint bytes to expected hashes, revalidate their semantics after capture, and check unchanged controls before each owned child. Preserve bounded termination/reap and ordinary same-plan/source checkpoints.
- Size proof budgets from measured derivatives with control headroom; enforce before writes. Any prospective increase needs its own reviewed frozen plan and admission. Never reduce image quality/coverage to disguise the limit.

## Evidence and limits
[Text-only evidence manifest](../evidence/hakawi-e04-discrete-freeze-20261030/manifest.json) binds copied source-audit and attributed root/lead receipts. The compiler independently performed source traces and source admission review; later native and actual-frame findings above are attributed to the root/lead receipts, not a new image inspection.

Fresh tag7 archive identity reported verified by root: `libfile_df4f699566388191959045665886a313v0`. This is a Library identity, not a public URL or evidence that a recipient opened it. Earlier failed proofs and source versions remain preserved.

No claim of continuous real-time AV playback, subjective listening, every-frame native anatomy, whole42-window completion, final E04 film/portrait acceptance or publication. Read with [runtime pilot](HAKAWI-E04-RUNTIME-PILOT-20261030.md), [tag-mask still repair](HAKAWI-E04-TAG-MASK-20261030.md), and PREFLIGHT at every affected stage.

## Update history
2026-10-30: append confirmed ghost, caption carry mismatch, scoped v15 reproof, no-downgrade QA budget and freeze-writer race; retain all failed trials and evidence scope boundaries.
