# Autonomous error discoveries are included

Follow-up to the owner's clarification: errors independently noticed, caught, diagnosed or repaired by the production agent/reviewer belong in the same playbook, even without a user complaint. A user asking for overall review does not mean they discovered each specific defect.

## Existing125 historical records

[Discovery-origin index](audits/2026-10-23-discovery-origin/DISCOVERY-INDEX.json) maps every prior record by exact case ID:

| discovered_by | Records | Meaning |
|---|---:|---|
| agent |84|Specific finding reported by the production agent/self-review |
| reviewer |2|Distinct review source explicitly evidenced, including automated ASR uncertainty—not necessarily a confirmed pronunciation error |
| user |27|Specific owner complaint/preference identified the issue |
| unknown |12|Discovery not established or grouped record mixes user and agent findings; components are retained rather than forced into one origin |

This proves the previous audit was **not limited to user complaints**. Examples already included: Blender between-key contact drift, stale clip reused after source correction, glyph contour/sidewall failures,6ms audio-processing delay, and GetMotion title/geometry collision.

## Genuine omissions recovered

[Fourteen new historical case records](audits/2026-10-23-discovery-origin/NEW-CASES.json) were added—not duplicate copies of existing cases:

- **GetMotion (7):** GM025 ball/shadow covering text; GM0997-second static explanation; three-style continuity/loop contract failure; zipper path crossing logo/text; English title leaving zoomed frame; over-repeated choreography; GlassPrint dependency preparation failure.
- **Ezzay first ten (3):** corrupt last-episode export; ABS wheel briefly reversing; weak before/after red-eye comparison.
- **What If (2):** thumbnail wording not accurately reflecting story consequence; arithmetic/sequencing/historical-claim errors found in supplied scripts (specific disputed propositions not recovered, repair only proposed in cited evidence).
- **AnswerAct (2):** card typography/fog weakening final reveal, followed by wall-card overlap in same rebuild; opening order paper too close to lower text.

The original125-record package remains immutable. There are now139 historical records across the two packages, including grouped occurrences and supplements—not139 unique or independently validated fixes. Separate supplements add failed/intermediate repair attempts without counting duplicate cases: transition alignment lost after first correction; looped connector dots teleport; subtitle auto-shrinking; stale scene remnants; chat example too headline-like; earlier Arabic pronunciation trial; breaker label placement; additional corrupt Aran intermediate; lighting images omitted from editable preview; geometric post-fix checks.

## Evidence and method

- [AnswerAct rereview](audits/2026-10-23-discovery-origin/answeract/discovery-review.json): fresh164-page/460-item retrieval; [attempt supplements](audits/2026-10-23-discovery-origin/answeract/missing-additions.md).
- [Moki/What If rereview](audits/2026-10-23-discovery-origin/moki-history/discovery-review.json): fresh93-page/377-item retrieval and comparison with existing sources.
- [GetMotion/Ezzay rereview](audits/2026-10-23-discovery-origin/getmotion-ezzay/discovery-review.json): saved bounded evidence plus17QA reports—not a claimed fresh full755-message retrieval; [additions](audits/2026-10-23-discovery-origin/getmotion-ezzay/missing-additions.md).
- [Canva/showreels/old Ezzay rereview](audits/2026-10-23-discovery-origin/own-discovery-review.json): search retained352-item corpus, re-read case evidence and candidate neighbors. Not a claim of a new full line-by-line reading.

“discovered_by” identifies the best-supported source of the specific observation within available evidence, not the absolute first discoverer in the world. Assistant repair claims remain claims; planned fixes remain planned. No historical video was newly rendered, continuously watched or listened to in this follow-up. Original unavailable/empty/truncated history gaps remain open.

## Future records

Record `discovered_by: agent | reviewer | user | unknown`, the exact source/test/frame that surfaced it, whether a user specifically reported it or merely requested general review, each repair/failed trial, and verification method/coverage. Record new regressions introduced by a fix too. Do not wait for owner criticism to log a defect.


## Later evidence correction — expanded native pass
[New canonical user messages](NATIVE-EXPANDED-AUDIT.md) establish A13 symptoms were user-reported before the agent diagnosis. The earlier snapshot is superseded for A13 only: baseline125 origin counts now agent83/reviewer2/user28/unknown12. [Exact correction](audits/2026-10-23-native-expanded/PROVENANCE-CORRECTION.json). Technical cause discovery can still be agent-origin; no other row is automatically relabeled.
