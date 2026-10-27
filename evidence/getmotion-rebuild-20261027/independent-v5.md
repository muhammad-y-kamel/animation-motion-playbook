# v5 review — candidate only, no semantic PASS
Source frozen by producer SHA2564e1230cb32334014aed42e0b7043ab5f689e3b38cba2916c876a3092d63b1457. Reviewed current artifactState/render source and native v5stills180,190,200,210,480,490,500,1045,1060,1070,1080,3060,3120. No source mutations. No actualvideo/audio playback; no everyframecoverage.

## Improvements confirmed
Duplicate fullframeportal removed afterhook. Multiobjectscenes returnto1.0scale; oldcropseverity reduced. Headings protected duringtransition. Exactlogooutline/finalbranding remainlegible in inspectedfinalsamples. A fullreviewencode is useful now for timing/continuity assessment, butthis isnotsemanticapproval.

## Remaining high risks and concrete encoded checks
- `base=hero(previous)` uses incomingstageheroScale. At7.92s scalechanges1.3→1.0, so outgoingfilm suddenlyshrinks~23% beforewipe. Similarchanges occur wherever solo/multiactor scalesdiffer. Check encodedframes474–478 and1039–1042, thenallcuechanges. Need previousheroScale/currentheroScale separate; geometrymustreadactualoutgoingpose.
- mask iscenter-to-outlinefan, then instantlyfullframe atlocal.65. Thisradialwipe leavesoutgoingparts outsidetheboundary untiltheyvanish atcompletion. Examplefilmrectangle aroundsmallspool inframe210; check~215–216. Need finitecontinuousmaskexpansion/actualsheetclosure ratherthanend-switch.
- Oneoffsettoothrow isdrawn, notpairedcompatibleedges. Slideronoutline andfanopening are onegraphicwipe, nottruezipperjoin. Semanticclaimmustmatchactualmechanics.
- Repeatedpie-wipe plusfixedheading/icon remainsweakmatch toRealityUnzip's physicaltransformations. Store/spool/clock/message assets arestilllargelyindependentscenes. Mostseamjoins settleafter.65andstop; continuousmeaningfulcause/resultnotestablished bytheseamples.

Do not revisitfixedduplicateportal complaint. Priorlowqualityfeedbackmustremainopen untilactualreplacementreview meetsbrief. Candidatefilemay be labeledreview withspecificlimits; notfinal, notfullsourcecompliance, notfullAVlistening.
