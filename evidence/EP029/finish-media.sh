#!/bin/bash
set -e
cd "$(dirname "$0")/.."
ffmpeg -hide_banner -loglevel error -y -i EP029-silent.mp4 -i audio/EP029-mix.wav -c:v copy -c:a aac -b:a 192k -t 76 -movflags +faststart EP029-The-Unraveling-Scarf.mp4
ffprobe -v error -count_frames -show_streams -show_format -of json EP029-The-Unraveling-Scarf.mp4 > ffprobe.json
ffmpeg -v error -i EP029-The-Unraveling-Scarf.mp4 -f null - 2>qa/final-decode.log
mkdir -p qa/encoded-sheets qa/encoded-critical
ffmpeg -v error -i EP029-The-Unraveling-Scarf.mp4 -vf 'scale=90:160,tile=20x12' -fps_mode passthrough -q:v 2 qa/encoded-sheets/sheet-%02d.jpg
python audio/verify_mux.py EP029-The-Unraveling-Scarf.mp4
node poster.cjs
