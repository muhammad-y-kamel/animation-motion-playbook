# Mine V017 leg visibility and Aran V023 compositing

## Mine: painted legs hidden by coat

Actual V016 landscape descent originals at frames 21760 and 21790 showed a raised lower leg/boot disappearing behind the coat. Source reach and planted-foot equations alone did not establish visibility. The defect was retained as a HOLD rather than waived as a stylized pose.

V017 changes only landscape single-actor descent/climb: closer rung spacing, foot-midpoint-based root placement and a two-rung upper inset keep lower legs below the coat while retaining the existing lamp grip. Portrait and paired inspector source poses remain unchanged. A swept painted-bound test with the old source as a negative control was followed by 26 actual landscape native witnesses.

Fresh dense proof covers descent 21707–21826 (120 frames) and climb 31550–32204 (655 frames). All 775 decoded thumbnails and selected original decoded witnesses were reviewed across two reviewers. Lower legs and boots remain readable; no new concrete crop or step discontinuity was observed. The atlas outgoing-panel crop is explicitly limited to the transition, not accepted as a settled actor crop. This is sequential-image review, not normal-speed playback or listening.

The exact six-job plan is 11bf2f4defcf658b8dcc1162dc31b5131f72b0cf98526d295ff56a993b45e0f3. All 36 media-stage receipts and six admission receipts closed cleanly, with reaped children and terminal elapsed within unchanged caps. The 775-frame checkpoint has SHA256 e8a3c1037f71471dadf6247ddbfff70e7ca7f12fd219e7572958322ea4deef5c and 28,123,060 bytes. Bunk and full-film production acceptance remain separate pending work.

## Aran: fading primitives is not fading a composition

V021 climb had a same-backdrop pose/root jump and backward-facing movement. V022 introduced a held pocket pose, fade to paper and a framed uphill-running shot. Its source geometry tests passed, but actual decoded frame 28894 showed internal body layers and background visible through each other. The cause was applying globalAlpha to every primitive before painting the scene. Rocks also extended beyond the new inset border because only the outer scene clip existed.

V023 keeps run geometry and timing unchanged. It draws the shore opaquely inside an explicit inner rectangular clip, then overlays paper with inverse reveal opacity and draws the border afterward. No offscreen canvas or resource-cap increase is needed. Source tests assert opaque shore rendering under the clip, restored canvas state, the old-source negative, and exact unchanged fade-out behavior.

Fresh portrait entry16 proof, frames 28879–28894, closed cleanly under the same 1 GiB sampled aggregate RSS, 90-second and 64 MiB guards. All 16 thumbnails plus source/decoded original 28894 were reviewed by both reviewers. The compositing and inset-containment defects are corrected within this scope. Exact plan: 023ab775fd9759645031014b8c27829c70928342b281250682abaf823444cc97. Source freeze: d0962811811dae8399a9d424f9816f763686e84e831ca1201b12a4a7da8e563d.

## Remaining Aran HOLD

The later running-phase test at frames 28911–28926 is not accepted. Actual originals 28912 and 28920 show black upper legs merging into the dark ridge, leaving partial pale contours and two boots but not two reliably traceable upper-leg silhouettes. Source and decoded witnesses agree. Direction and foot separation improved, but geometry success does not resolve contrast. A climb-only contrast correction is pending; no full-run or full-film acceptance is implied.

## Reusable checks

- Test painted limb silhouettes against their actual background, not only joint reach and contact coordinates.
- Fade a completed opaque composition, not every overlapping primitive independently.
- An inset border is not a clip; install and restore the inner clip explicitly.
- Preserve failed versions and precise scope. A corrected entry does not accept a later gait phase.
- Retain the prospective terminal-elapsed checks documented in the existing terminal-wall entries; this entry does not replace them.
