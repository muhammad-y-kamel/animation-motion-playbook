# EP031 — The Held Sneeze, clarity rebuild v4

40-second native1080×1920/60fps short;36s story+4s endcard. The30s previous preview is rejected and preserved separately. This directory is the only current candidate. Parent coordinates upload/scheduling after final QA, no child publication.

## Rebuild
Requires Node.js, @napi-rs/canvas0.1.100, FFmpeg/FFprobe, Python3 NumPy+SciPy.
1. `python3 build.py` joins rig/helpers/story/art in order.
2. `python3 audio/build_final.py` rebuilds the licensed-effects/original-music PCM from local relativeassets.
3. `node export.cjs` creates1080p60 silentfilm in four600-framechunks; cached chunks are source-hashchecked.
4. `ffmpeg -i EP031-silent.mp4 -i audio/EP031-v4-final-mix.wav -map 0:v:0 -map 1:a:0 -c:v copy -c:a aac -b:a 192k -movflags +faststart EP031-The-Held-Sneeze-v4.mp4`
5. `node poster.cjs` creates the optional cover from the actual film artwork. Shorts thumbnail setting availability is a separate platform concern.

Random-access seek is deterministic. No model/cache/network required for production rebuild. Optional audio classifier has separate dependencies; its stored527-class reports are evidence, not production inputs. Native video encoding byteidentity can depend on FFmpeg version; source/audio/pixel rebuild equality is tested separately.

## Story and evidence
Peb completes a cardtower. Moki tries to hold a sneeze. Noseblock fails; bucket flies off; Peb points away; the sneeze goes harmlesslyaway. Peb's relieved breath ruins the tower. Shock turns back to friendship.
See LESSONS-CLARITY-V4.md for user rejection, failed attempts and precise repairs. qa/ contains independent limited geometry, dense decodedvisual, audio-model and decodedAAC evidence. No continuous1× audiovisual viewing, humanlistening, every-frame native-resolution or audience-retention claim. General audience setting and future schedule are parent-owned metadata; not a publication receipt.
