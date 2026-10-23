# EP031 final audio candidate — 40 seconds

**Master:** `EP031-v4-final-mix.wav` (mono48kHz PCM16, exactly40s).
**Rebuild:** `python build_final.py` with NumPy + SciPy. All production inputs are local relative `assets/` files. No network, model, credential, archive or external project directory is required to rebuild. Re-execution was byte-identical (`reports/reproducibility.json`).

## Sound design
Real recorded human sneeze B remains unchanged; its dominant burst is synchronized13.20/22.20 seconds. Human preparation and short suppression precede it. Tin follows the first sneeze rather than masking its vocal body. Real wood-foot contacts at6.3/28.5 and quiet wood+tin floor contact15.5. Recorded vocal release30.15 (body around30.5); actual card shuffle31–32.5 and quiet card-place contacts.

The score is a new deterministic original90BPM rounded-pluck composition, synthesized solely as music—not as vocal/story effects. It appears in negative space and the CTA. Initial28dB ducking reduced recognition evidence, so that trial is preserved under `reports/first-mix-28dB-duck-rejected/`. The final arrangement fully mutes music during all important action beats with smooth lead/release. Exact music-stem samples are zero in every evaluated story window (`music-isolation-QA.json`). No limiter or dynamic loudness normalization was applied; the master uses only one global linear gain.

## Final-mix semantic evidence
`reports/final-mix-semantic-results.json` holds all527 label scores for10 windows sliced from the **exact delivered PCM master**, with its SHA-256. Official MIT AST model revision is recorded. The model receives waveform only, not filenames/expected classes or forced choices.
- Bucket sneeze: **Sneeze .858** (next Sigh .050).
- Turn-away sneeze: **Sneeze .920** (next Sigh .029).
- Relief including early cards: **Sigh .294**, Gasp .175 — weaker evidence than isolated vocal.
- Cards after relief: **Shuffling cards .109**, Sound effect .082 — weak, not a claim that a listener understands collapse.
- Suppression: **Snort .337**, Gasp .200; preparation: Gasp-leading, not spoken ah-ah.
- Wood-foot contacts: Knock .385; bucket-floor: Plop .428. Model labels do not establish precise physical causes.

No human listening occurred. No creative/story comprehension or final visual sync pass is claimed. The score is evidence of improved sneeze differentiation, not a substitute for synchronized review.

## Technical QA
Measured master integrated loudness **-20.29 LUFS**, true peak **-1.91dBTP**; zero clipped PCM samples. Loudness measurement used FFmpeg's analysis-to-null only; its suggested normalized output was **not** applied. Preserve purposeful quiet intervals instead of amplifying the music into the vocal cues. Full logs/manifests in `reports/`.

## Sources / licensing
`selected-originals/` includes only the used source members, not huge archives. `licenses/` preserves official CC0 evidence and source/archive hashes:
- Sapereaudio530295 human sneeze; otherthings65621 inhale; jrssandoval67167 sniff: CC0 public Freesound HQ previews (source pages and original provenance included).
- Kenney Impact Sounds: CC0 wood footsteps, wood impact, tin impact.
- Kenney Casino Audio1.1: CC0 card shuffle/card placement, official publisher free download.
- OwlishMedia Sound Effects Pack: CC0 human `yawn2.wav` vocal release from author's OpenGameArt pack. Originally labeled yawn, repurposed as release based on Sigh-leading independent classification; not misrepresented as a source labeled relief.
- Music: newly composed deterministically for this project by `build_final.py`; no sampled music or third-party score.

Derivative crop/processing manifests are included. Their historical archive/member references are provenance, not runtime dependencies; current source members are in `selected-originals/`. Older unused comparison WAVs retained in `assets/` are not used by the builder.

## Optional classifier reproduction
`classify_final_mix.py` requires PyTorch, Transformers, SciPy/NumPy, the official AST cached model and its feature extractor. Select the cache with `HF_HOME`; otherwise `.model-cache/` beside the script is used. It intentionally uses `local_files_only=True`. Current available environment command:
`HF_HOME=/workspace/shared/ep031/audio/.hf-cache /workspace/shared/ep031/audio/.semantic-venv/bin/python classify_final_mix.py`
The model/environment are **not** production dependencies or part of the delivery package.

No episode script/storyboard or publication state was changed by this audio task.
