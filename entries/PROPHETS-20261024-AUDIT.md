# قصص الأنبياء — تدقيق الأخطاء والمحاولات وملاحظات المراجعة

Source: https://chatgpt.com/c/6adb7624-cd30-83ea-8214-ba563ae3fde9?messageId=c570fc24-ccc5-5bdf-8520-8d116ba779ab

Reviewed on 2026-10-24 Cairo. Full visible conversation:6 pages,8distinct messages,no omitted content, both cursors exhausted. Recovered editable source and linked QA records. Hidden execution conversations are not exposed. Reports below are historical evidence inspected now, not a fresh claim of continuous viewing or human listening.

## Coverage and reconciliation
Earlier audit `audits/2026-10-23-native-expanded/moki-stories/findings.json` correctly recorded only preventive rules before the final production reply. This adds the later production evidence; it does not erase or falsely count earlier project instructions as defects.

No confirmed drawing/acting defect or chronological visual repair trial was documented in the recovered visible conversation. The source review says888stills/38sheets had no defect requiring drawing changes. Important actual incidents were rendering, color, checkpoint/export, review provenance and unresolvedaudio/archive issues.12records below include experiments and preventive constraints, NOT12provenanimationbugs.

## Records

### PROPHETS-001 — Invalid final checkpoint despite matching historical receipt
- Category/status/origin: export / validated_with_partial_history / agent
- Observation: E01 landscape P03 lacked moov; SHA aeeb5b39a6eecf9ccbdbe59bbc71456ed500e6741a3d0cdcb4f06348d410f124 matched receipt that claimed2316 decoded frames.
- Cause: Missing moov and receipt/byte inconsistency established; underlying writer failure unknown. Missing await and competing writer were not established.
#### Actual trials
1. Audit20E01headers:19valid,onlyP03invalid.
2. Preserve failed bytes/receipt; regenerate onlyP03 with unchanged narration and approved pixel-equivalent renderer.
3. Probe exact final path, compare SHA before/after, require strict full decode.
- Best supported outcome: Replacement83990a260e5e38d5abbdee47d79c87d3d68564b1902f6eee37f35735c80bd1cf has2316 decoded frames.
- Prevention/regression: Do not reuse solely by receipt+checksum; parse final-path headers and decode. Preserve valid checkpoints.
Evidence: [Motion/QA/Checkpoint_Repair_E01_P03/Writer_Code_Review.txt](../evidence/prophets-20261024/Motion/QA/Checkpoint_Repair_E01_P03/Writer_Code_Review.txt), [Motion/QA/Checkpoint_Repair_E01_P03/Repair_Record.json](../evidence/prophets-20261024/Motion/QA/Checkpoint_Repair_E01_P03/Repair_Record.json)

### PROPHETS-002 — Concat exit zero concealed truncated long episode
- Category/status/origin: export / validated_with_partial_history / agent
- Observation: FirstE01master had4401frames/73.35s instead of22992; no incomplete master published.
- Cause: Concat returned0 although P03input could not open; stderr not inspected on zero exit.
#### Actual trials
1. Final frame-count gate rejected partialmaster.
2. Diagnostic -xerror returned183 and missingmoov.
3. Harden concat,mux,decode with -xerror,stderr inspection,exactcounts and unique temporarypaths.
- Best supported outcome: Repaired checkpoint+strict final AV gates; final production report records completed films.
- Prevention/regression: Reject nonempty errorstderr even zeroexit; assert plannedframes and both streams from final pathname.
Evidence: [Motion/QA/Checkpoint_Repair_E01_P03/Writer_Code_Review.txt](../evidence/prophets-20261024/Motion/QA/Checkpoint_Repair_E01_P03/Writer_Code_Review.txt), [Motion/QA/E01_Concat_Diagnostic.json](../evidence/prophets-20261024/Motion/QA/E01_Concat_Diagnostic.json), [Motion/QA/Final_Production_Completion.json](../evidence/prophets-20261024/Motion/QA/Final_Production_Completion.json)

### PROPHETS-003 — Temporary mux missing moov
- Category/status/origin: export / validated_with_partial_history / agent
- Observation: E01P08 initial final-mux validation found no moov; video-only checkpoint valid.
- Cause: Unknown; inspection found no concurrent mux process.
#### Actual trials
1. Repeat same command to unique diagnosticfile:exit0,41.35s,bothstreams.
2. Cryptographically unique temp names, record encodedbytes, watcher lock, reuse verifiedfingerprints.
- Best supported outcome: Diagnostic successful; final48productgate records completion.
- Prevention/regression: Never treat temporary partialMP4 as final; preserve failure and validate afterrename.
Evidence: [Motion/QA/Mux_Recovery/Recovery_Note.json](../evidence/prophets-20261024/Motion/QA/Mux_Recovery/Recovery_Note.json), [Motion/QA/E01_P08_Mux_Diagnostic.json](../evidence/prophets-20261024/Motion/QA/E01_P08_Mux_Diagnostic.json), [Motion/QA/Final_Production_Completion.json](../evidence/prophets-20261024/Motion/QA/Final_Production_Completion.json)

### PROPHETS-004 — Browser crash during resource saturation
- Category/status/origin: rendering / validated_with_partial_history / agent
- Observation: E03landscapeP09 targetcrashed after2700/2899frames;59correctcheckpoints existed.
- Cause: GlobalOOM events and saturation coincided; victimprocess/owner notidentified.
#### Actual trials
1. Gracefully stopassignment while activejobsfinish.
2. Preserve failedpartial e151b0f65d784cd0deba7210faee361e258ae9261698bd4fe80794a1b52ed147.
3. Resume3workers, reuse59valid, run onlyfailedP09 andunstartedE04.
- Best supported outcome: P09replacement3e59f63abd0ffdb3e8ccdf0bfcff3ce0c949ce69492ba4f3f6b249ff2f3498dc; finalE03strictAVdecode28383frames zeroerrors.
- Prevention/regression: Bound concurrency, monitorresources, graceful checkpointshutdown, avoid rerendering correct outputs.
Evidence: [Motion/QA/Resource_Interruption_E03_P09/Recovery_Record.json](../evidence/prophets-20261024/Motion/QA/Resource_Interruption_E03_P09/Recovery_Record.json)

### PROPHETS-005 — WebCodecs color-space experiment rejected
- Category/status/origin: rendering / experiment_rejected / agent
- Observation: Canvas/RGB input encoded SMPTE170M despite explicit RGB metadata; BT709 requirement not met.
- Cause: Observed localChromium conversion/metadata behavior; not universal codecclaim.
#### Actual trials
1. Canvas/RGB explicitmetadata stillSMPTE170M.
2. Reencode toBT709 reduced sampledRGBPSNR~36to33.7dB; rejected.
3. DirectI420BT709 gotBT709,~36.22–36.49dB samples but added~22ms/frame.
4. AVC quantizer bitrateMode unsupported.
- Best supported outcome: Retain approvedRGBA→libx264CRF19; no WebCodecs production adoption.
- Prevention/regression: Probe actualstream metadata and decodedpixels; bitrate value notqualityproof; samplesnotwholefilm equivalence.
Evidence: [Motion/QA/WebCodecs_Assessment.json](../evidence/prophets-20261024/Motion/QA/WebCodecs_Assessment.json)

### PROPHETS-006 — Frame transport and process bottleneck
- Category/status/origin: performance / validated_with_limits / agent
- Observation: TypedArray requests incurred expensive protocolcopies; sharedNode transport limited scaling.
- Cause: Measured localtransport behavior, not proof of everymachine bottleneck.
#### Actual trials
1. LegacyJPEG/base64 transport benchmarked.
2. BinaryBlob loopbackstream adopted with backpressure and atmostoneupload+nextframe perworker.
3. 4independent120framejobs about30.8steadyfps vs6pages/sharedNode28.5 undermeasuredload.
- Best supported outcome: Bounded Blob streaming and independentworkers; later3workers forresource safety.
- Prevention/regression: Keep native resolution,60fps,3distinctsamples; compare settled/load timings without adding overlappingCPUcategories.
Evidence: [Motion/Batch_Render_Instructions.txt](../evidence/prophets-20261024/Motion/Batch_Render_Instructions.txt), [Motion/QA/WebCodecs_Assessment.json](../evidence/prophets-20261024/Motion/QA/WebCodecs_Assessment.json)

### PROPHETS-007 — General Path2D cache did not consistently improve performance
- Category/status/origin: performance / experiment_rejected / agent
- Observation: GeneralPath2Dcache lacked consistent speed benefit.
- Cause: No detailed failedtrial timings supplied in recoveredexperiment note; do not invent.
#### Actual trials
1. Generalcache rejected.
2. Restrict rastercache to mathematicallytime-independent settledstates in4scenes; no movingstatecache.
3. Initial32comparisons; correction: E04P04t140 isintermediate notq0; extend explicitboundarycoverage to74comparisons.
- Best supported outcome: Settledcache candidate2e68954... all74fullresRGBcomparisons exact; eligiblecases65.4–73.1% reduction only.
- Prevention/regression: Bound8canvases; caption/headeroutsidecache; compare0/1,before/crossing/afteractionboundary,bothlayouts andmovingcontrols.
Evidence: [Motion/Optimizations/Settled_Raster/Settled_Raster_Experiment.md](../evidence/prophets-20261024/Motion/Optimizations/Settled_Raster/Settled_Raster_Experiment.md), [Motion/Optimizations/Settled_Raster/Settled_Raster_Final_Coverage.json](../evidence/prophets-20261024/Motion/Optimizations/Settled_Raster/Settled_Raster_Final_Coverage.json)

### PROPHETS-008 — Review image receipts lost at interruption
- Category/status/origin: review-integrity / reconstructed_with_limits / agent
- Observation: 22PNGimages finished before receiptbatchflushed.
- Cause: Executioninterruption before receiptflush.
#### Actual trials
1. Preserve andfullydecode22images; hashbytes.
2. Reconstructsample-time receipts fromdeterministic renderer/barplan,markreconstructed.
3. Remaining866records retain runtime receipt.
- Best supported outcome: 888images complete with explicit22reconstructed provenance, not fabricatedruntimeobservations.
- Prevention/regression: Flush receipts atomically perimage; distinguish reconstructedtiming fromruntimecapture.
Evidence: [Motion/QA/Bar_Review/Written_Bar_QA_Summary.md](../evidence/prophets-20261024/Motion/QA/Bar_Review/Written_Bar_QA_Summary.md)

### PROPHETS-009 — Review metadata described wrong header field
- Category/status/origin: review-integrity / validated_with_limits / agent
- Observation: Descriptive metadata didnot identify actual drawHeader field.
- Cause: Metadata needed display_title ratherthanotherdescriptivefield; pixelsunchanged.
#### Actual trials
1. Correct descriptivefield todisplay_title; preserve executed/reusableversions andhashes.
- Best supported outcome: Writtenreview records metadatacorrection, no visualrepair claimed.
- Prevention/regression: Validate reportedtext against actualdrawfunction andcount title+badge+captiontogether.
Evidence: [Motion/QA/Bar_Review/Written_Bar_QA_Summary.md](../evidence/prophets-20261024/Motion/QA/Bar_Review/Written_Bar_QA_Summary.md)

### PROPHETS-010 — ASR disagreements remain unverified pronunciation leads
- Category/status/origin: audio-review / unresolved_leads_not_confirmed_errors / reviewer
- Observation: 63initialdifferencegroups/71alignmentdifferences;7persistentlexical+2unstable candidates.
- Cause: ASR can normalize, substitute,omit orhallucinate; no directlistening completed.
#### Actual trials
1. Turbo fullPCMpass withoutreferenceprompt.
2. 15originalMP3windowslarge-v3;7targetedbeam5windows.
3. 24orthographic,10resolvedtranscription,2unstable,20grammar/boundary,7persistent.
- Best supported outcome: Notestablished; noTTSregenerationwas justified orperformed.
- Prevention/regression: Keep exacttimedwindows andallhypotheses. Neither agreementwithinWhisperfamily nor peak/decodepass proves pronunciation.
Evidence: [QA_Reports/Local_ASR_Review.txt](../evidence/prophets-20261024/QA_Reports/Local_ASR_Review.txt), [QA_Reports/Local_ASR_Review.json](../evidence/prophets-20261024/QA_Reports/Local_ASR_Review.json)

### PROPHETS-011 — Thumbnail archival timeout has uncertain outcome
- Category/status/origin: archive / unresolved_at_source_delivery / agent
- Observation: Finalchat explicitly couldnot confirm40portraitcovers+manifest+ZIP persisted aftertimeout.
- Cause: Transporttimeout, notproof ofsavefailure orsuccess.
#### Actual trials
1. Delivered4longcoversreported; didnotclaim42filespersisted.
2. Requested retry ratherthan silentlycreatingduplicates.
- Best supported outcome: Notestablished in sourceconversation; currentrecovery isseparateappend-onlyfollowup.
- Prevention/regression: InspectexistingLibraryidentity/version before retry; generatedlocalfile isnot durablearchiveproof.
Evidence: [conversation-evidence.json](../evidence/prophets-20261024/conversation-evidence.json)

### PROPHETS-012 — Preventive depiction constraint must not become invented incident
- Category/status/origin: project-contract / preventive_not_observed_defect / user
- Observation: User permitsordinaryhumans, forbidsprophetembodiment; currentbatch usesonlyobjects/environments.
- Cause: No depictedprophet wasreported in inspectedsourceframes; thisisnot a repaireddefect.
#### Actual trials
1. Clarified ordinaryhuman permission vsbatchchoice.
2. Sourcefinalclaims noface/body/limb/shadow/reflection/substituteprophet;888stillsreview foundnone.
- Best supported outcome: No defecttofix; preserve userconstraint andboundedreview.
- Prevention/regression: Check storyboards,sourceassets,finalvideo,covers; symbolicobjectsareeditorialnotinventedhistoricalfacts.
Evidence: [conversation-evidence.json](../evidence/prophets-20261024/conversation-evidence.json), [Motion/Evidence_And_Shot_Notes.txt](../evidence/prophets-20261024/Motion/Evidence_And_Shot_Notes.txt), [Motion/QA/Bar_Review/Root_Visual_Review_Summary.json](../evidence/prophets-20261024/Motion/QA/Bar_Review/Root_Visual_Review_Summary.json)

## Additional observations without false defect claims
- Narrative/editorial corrections: Ayoub popular embellishments, Dawood unsupported age/weapon/causalclaims, Zakariafruit/kinshipdetail, Hudaybiyyahtruncatedending/order were corrected accordingto finalassistantandverificationfiles. These are contentaccuracy corrections, not drawingbugs. No independent religious re-research is claimed here.
- TTS Pronunciation_Changes preserves targeteddiacriticsandchunkplanning; preventive spelling preparation isnot evidence that prioraudio waswrong.
- Sourcefreeze has audio-derived timings and7visiblewordlimit includingtitle+badge. Randomseekhashes match; stationary-camera internalpixelschange0.02663655 fraction. This supports some internalmotion, not audienceengagement or fulltemporalquality.
- Finalproductionreport technicalgates cover48files including4extra portraitmasters. Userpublication scope44files; do not upload4portraitmastersasduplicates.
- Single-passmux adoption preserved17completedproducts andvalidated firstnewE02P05with2985decodedframes,zero reporteddup/drop; optimization not proofoldfilesdefective.
- Rejectedexperiments, oldreceipts andsourcehashlineage remain preserved in originals. Thisauditdoesnotdelete orrewrite them.

## Mandatory stages for future authorized production
1. Story: sourcefactvsgraphicmetaphor; noinventedprophetbody orhistoricalevent.
2. Layout: nativeportraitrecomposition,RTL/fontloaded,allvisiblewordsincludingheader/badge.
3. Motion: realinternalmovement and3distinctshuttersamples; cacheonlyeligibleheldstates; endpointandtransitionregression.
4. Audio: actualwordalignment; preservenarrationidentity; unresolvedASRleadsremainopenuntil directlyverified.
5. Render: boundedresources,isolatedcheckpoints,strictstderr+framecount+exactfinalpathdecode.
6. Review: separate source-still,encoded-still,continuousplaybackandlisteningcoverage; receiptprovenanceexplicit.
7. Archive/publish: finalhashmanifest,versionidentity,duplicatecheck; timeoutisunknownnotfailure; verifyremotewrites beforeclaimingcompletion.


## Follow-up — user creative rejection and prompt-contract repair (2026-10-24)

**Current verdict: OPEN — existing media not verified fixed.** The historical “no confirmed drawing/acting defect” statement above describes the earlier evidence only. User feedback at 00:46 UTC, message `Sentinel_9fa13ea04c7881919cc40fac8285f7e9`, subsequently rejects the films as too static, like still images rather than animated scenes; requests better pronunciation and rejects Haytham for MSA narration. This supersedes creative acceptance, not the historical decode/hash results. This follow-up did not rerender media, audition a voice, listen to a replacement, or inspect continuous final playback.

### PROPHETS-012 update — representation scope drift and current boundary
- Source reconciliation: the original motion prompt permitted justified ordinary people (historically restricted to incidental/schematic roles), while later `outputs/Prophets_Stories_Review/Production_Brief.txt` says “هذه المعالجة كلها خالية من الشخصيات البشرية.” The original also explicitly rejects still illustrations animated only by camera pans/zooms/parallax.
- Established problem: a later blanket human exclusion narrowed the original permission and does not satisfy the user's current request for meaningful ordinary-character acting. It is a specification conflict, **not evidence that a prohibited prophet was depicted**. It is not proven to be the sole cause of static results.
- Planning repair: active prompts now permit source-supported focal ordinary-character acting; preserve the engraved identity and distinguish schematic design from authenticated historical portraits.
- Latest override `Sentinel_37985129b8dc81918c35fbf758117dff`: prophets may be represented **only by abstract moving light without human form**. No face, head, limbs, body, robe, human outline, shadow/reflection, glowing person or prophetic POV; no prophet-character voice. This is the user's creative constraint, not a religious ruling. Do not invent historical movement or a miracle to motivate the symbol. Older absolute light prohibitions in this historical audit/source are superseded only by this narrow exception.
- Regression: inspect actual motion, transitions, occlusion, shadow/reflection layers and both aspect ratios/covers; a light patch that becomes person-shaped fails. Prompt compliance alone does not establish output compliance.
- Outcome: constraint text updated; existing media repair remains unperformed/unverified.

### PROPHETS-010 update — user-reported pronunciation and casting rejection
- New observation: user reports pronunciation needs improvement and Haytham is unsuitable for this project's MSA narration. This is direct user creative feedback, separate from the earlier ASR hypotheses.
- Do not convert the seven persistent plus two unstable ASR candidates into nine confirmed pronunciation errors; no new exact-word listening evidence establishes that.
- Planning repair: remove Haytham as automatic choice/fallback; require actual available MSA candidates, representative audition, contextual pronunciation preparation, preserved editorial/TTS/caption texts, and actual final-mix listening with bounded evidence.
- Tests required before closure: record voice/model/settings and sample hashes, listen to names/negation/joins/connected phrasing and earlier timed suspect windows; retain rejected takes and retest repaired passage plus joins. ASR agreement, waveform peaks and decode success are not listening or casting approval.
- Outcome: voice guidance updated; replacement voice identity, availability, audition and repaired audio remain unverified. No causal claim that voice alone produced every pronunciation problem.

### PROPHETS-013 — Static-looking storytelling escaped creative acceptance gates
- Origin/status: user / OPEN; prevention updated only.
- Observation: user rejected delivered films as static rather than actual animated motion scenes. No new per-shot measured defect count is inferred.
- Evidence/cause: prior 888-still/38-sheet review cannot establish continuous acting or pacing. The historical stationary-camera pixel-change statistic proves some pixel change, not meaningful action or audience comprehension. Source prompts already rejected camera-only motion; adding that sentence alone is not a proven repair.
- Attempt performed: reconcile canonical prompts, add per-beat before/action/after, supported ordinary actors/objects, real contact/ownership/occlusion, a representative moving probe, camera-locked checks, normal-speed encoded playback and separate technical/creative verdicts.
- Outcome: prompt/prevention package published; **no motion probe, rerender or creative playback pass was produced in this upgrade**. Neither a package validator nor a planning dry run closes this media defect.
- Regression/closure: for the authorized output scope, viewer must understand the source-supported change in subject state with the camera stationary; inspect moving encoded output at intended size, natural speed and relevant contact boundaries. Texture, captions, parallax and background loops cannot substitute for action. Holds need narrative justification; no arbitrary movement quota or global speed-up. Preserve rejected output and bind re-review to new hashes.

### Planning-only conflicts discovered and corrected
- **Scope leakage:** complete-film/full-source/ten-Short defaults could incorrectly govern a prompt-only task, plan, scene probe or selected extract. Active delivery, motion and QA contracts now resolve requested stage/source interval/output set first; full-package obligations apply only to authorized full packages absent a different specification.
- **Cut priority:** the original hard-cut-on-musical-bars rule could delay a necessary narrative/action cut. Updated contracts make meaning, cause-and-effect and readable action outrank bar alignment; off-bar cuts are permitted, music remains subordinate, speech is never retimed to wait for a beat. Short boundaries still preserve complete spoken units.
- Evidence of repair is textual planning scope, not an observed repaired film. `scope-cut-fix.json` records four changed paths, baseline unchanged and local links passing. It does not report a rendered test or demonstrate that any historical shot was actually delayed by the bar rule.
- `package-validation.json` is a **pre-publication snapshot**: validator/local-links/secret scan pass and canonical four-file match; audition/video generation not performed. Its old “github_publish: not_performed” field is superseded only for publication by the remote commit verified below, not silently rewritten.

### Evidence and verification boundary
- [Preserved provenance](../evidence/prophets-20261024-followup/provenance-and-changes.md), [planning change receipt](../evidence/prophets-20261024-followup/scope-cut-fix.json), [pre-publication validator receipt](../evidence/prophets-20261024-followup/package-validation.json).
- Published source package: [prophet-stories commit 1d0ef91](https://github.com/muhammad-y-kamel/prophet-stories/tree/1d0ef91dc08cf180ccd6f9e2cabb97dec6951e96). Remote tree verified during this follow-up; local evidence files compared with that commit's blob SHAs.
- Current contracts: [representation](https://github.com/muhammad-y-kamel/prophet-stories/blob/1d0ef91dc08cf180ccd6f9e2cabb97dec6951e96/references/representation-boundaries.md), [motion](https://github.com/muhammad-y-kamel/prophet-stories/blob/1d0ef91dc08cf180ccd6f9e2cabb97dec6951e96/references/motion-contract.md), [delivery/scope](https://github.com/muhammad-y-kamel/prophet-stories/blob/1d0ef91dc08cf180ccd6f9e2cabb97dec6951e96/references/delivery-contract.md), [voice](https://github.com/muhammad-y-kamel/prophet-stories/blob/1d0ef91dc08cf180ccd6f9e2cabb97dec6951e96/references/voice-and-pronunciation.md).
- Source baseline and old QA remain preserved. This entry neither authorizes new production nor claims publication/schedule changes.
