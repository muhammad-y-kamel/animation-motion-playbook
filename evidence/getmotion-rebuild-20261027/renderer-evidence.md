# GMX03 render driver

This is the deterministic capture/encode driver only. Scene authors provide `index.html` with `window.seek(t)` and all local assets. It has **not yet passed actual browser capture** in this environment; see the blocker below.

## Runtime
Node.js, `playwright`, `sharp`, system Chromium (`/usr/bin/chromium`) and FFmpeg with libx264. Override Chromium with `--chromium /absolute/path` only if a supported browser is available. No network runtime assets are required or expected. Keep scene assets within this project or verify the explicit outside dependencies in the report.

## Full Arabic review candidate

```sh
node render.cjs --html index.html --output review/GMX03_AR.mp4
```

Defaults: 1080×1920, 60 fps, 3212 frames (53.533333 s), four distinct time requests per output frame, 180° shutter; x264 CRF18 fast, yuv420p, AAC192k. The original full approved 53.52-second Arabic MP3 is mapped at zero with no trim, seek, speed, pitch or sentence changes. The approved hash is checked before encoding. Music/SFX are not composed or mixed by this driver. A later authorized mix requires a separately tested workflow preserving the voice timeline.

The current source path for audio is `../../getmotion-recovery/fresh-input/GetMotion_20_Prompts_40_Videos_Handoff/03_AUDIO/GetMotion_AR_APPROVED.mp3`. For portable packaging, include that exact file locally and pass `--audio assets/GetMotion_AR_APPROVED.mp3`; its hash remains enforced. Do not omit the file from the delivered package.

## Beat stills and local range checks

```sh
node render.cjs --html index.html --stills 0,15,30,60,120 --outdir review/beats
node render.cjs --html index.html --start 0 --frames 120 --no-audio --output review/hook.mp4
```

`--stills` uses the same four-sample temporal average, rather than a different unblurred path. Partial video renders require `--no-audio`: the driver never slices approved narration. `--width` and `--height` support small driver fixtures, **not reduced-quality final exports**.

## Temporal convention and correctness

Frame n captures t=(n+offset)/60 for offsets 1/16,3/16,5/16,7/16. These are four uniformly spaced midpoints over a shutter interval spanning the first half of an output-frame interval. There are no negative/clamped duplicate times at frame0 and no cross-frame blending. Each capture calls `seek(t)` independently and captures the resulting browser state. Sharp decodes PNG to raw RGB; a Uint16 accumulator averages exactly those four RGB images with round-to-nearest. The raw averaged RGB frame is piped directly into FFmpeg with backpressure. No full-frame PNG cache is retained for video rendering.

The report records all exact sample times, per-sample RGB hashes, distinct image counts and averaged hashes. A static shot can legitimately have identical pixels across distinct sample times; hashes alone cannot prove correct animation. The scene must have no autonomous animations, timers or changing randomness.

Fonts and image decoding are awaited. An optional promise `window.ready` is awaited. Source inventory and local dependencies requested during page load are SHA256-frozen, then checked every60 frames and at completion. Page errors fail the run. Outputs/caches are excluded from source freeze. Do not mutate source while a renderer is working. Dynamic, late-loaded external assets are unsupported; preload all assets before window.ready resolves.

Capture reports are technical evidence only. They do not certify semantic compliance, visual review, listening, normal-speed or half-speed playback. Output remains a review candidate until those independent gates pass.

## Test status / actual blocker

2026-10-27: Node syntax check and CLI help pass. Four-frame 320×180 fixture was attempted, but ordinary Chromium launch failed before capture with `socket() failed: Operation not permitted`. One supported escalation request was attempted for the authorized local rendering test; the command did not execute, returning `bwrap: Can't create file at /home/agent/.codex/sessions: Read-only file system`. No frame or MP4 was generated. This path is denied for reads; no attempt to inspect it was made. Actual temporal capture, pixels, FFmpeg output and throughput remain **UNVERIFIED**. Do not claim the driver is production-tested.

## Tested direct-SVG alternative

`render-svg.cjs` uses Sharp/librsvg to render the **same standalone SVG** returned by the scene generator, without Chromium or sockets. This is suitable only when the scene authors explicitly project perspective geometry into the SVG itself. It does not execute HTML, CSS perspective, browser JavaScript or browser filters/layout. **Browser parity remains unverified.** Keep the HTML `window.seek(t)` wrapper on the same generator; do not create two different scene implementations.

```sh
node render-svg.cjs --scene scene.cjs --stills 0,15,30,60 --outdir review/beats
node render-svg.cjs --scene scene.cjs --output review/GMX03_AR.mp4
```

`scene.cjs` must export `render(t) -> string` (a complete SVG with 1080×1920 width/height), and may export a readiness promise. It must be pure and use only absolute time. All other capture/range/shutter/audio settings follow the browser driver's conventions above. SVG rendering fails if intrinsic raster dimensions differ; it never silently scales a wrong-size scene. Output transparency is flattened to the brand charcoal.

A generated private `review/fonts.conf` directs fontconfig to the bundled `assets/` directory and system fallback fonts, using a writable cache. `fc-match` confirmed `Noto Sans Arabic` resolves to bundled `assets/NotoSansArabic-Regular.ttf`. Caller-provided `FONTCONFIG_FILE` is preserved. The fontconfig and cache are generated runtime files, not source assets; include real fonts/licenses in the package.

### Direct-engine bounded tests, 2026-10-27

A synthetic fixture—not the project scene—ran 12 frames at320×180 /60fps. Each of the12frames had four distinct sample image hashes. FFprobe confirmed12 frames,60/1fps and the exact dimensions. Full FFmpeg decode returned no errors. A temporally averaged still was actually inspected: connected Arabic “مشاهد متحركة” appeared in correct reading order, and an SVG mask cut a circular hole from the moving rectangle. Evidence is under `review/driver-tests/`.

These tests establish only that the direct engine can capture the stated small fixture, distinct shutter samples, a basic SVG mask and this Arabic phrase. They do not certify full-resolution performance, final-scene geometry, arbitrary Arabic text, audio mux/ending, semantic quality or playback. The driver does not remove the final scene's independent review gates.

A second 12-frame **1080×1920** synthetic fixture also encoded and fully decoded successfully at60fps (about2.55seconds capture elapsed for12frames, excluding final encode close). This is bounded throughput for simple geometry, not an estimate/guarantee for the full scene. Evidence and both reproducible synthetic scene files are in `review/driver-tests/`. No approved audio was consumed in either fixture test.
