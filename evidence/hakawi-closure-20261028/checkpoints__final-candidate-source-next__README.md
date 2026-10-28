# Immutable final-candidate source — NOT RELEASE ACCEPTED

Supplement03 links to basev13, supplement01v0 and supplement02v0 without modifying them. Exact 21:22 source snapshot, canonical alignment data, runtime/font bytes and hashes, all source reports and native filesystem preflight are captured. All files are mapped by SHA256; only new unique bytes are stored. No render cache/node_modules copy.

Restore with: python restore.py BASE.zip SUPPLEMENT01.zip SUPPLEMENT02.zip THIS_SUPPLEMENT03.zip NEW_EMPTY_DIRECTORY

The output directory is the exact freeze root. Install pinned Linux x64 runtime from RUNTIME_ENVIRONMENT.json: Node24.22.1, @napi-rs/canvas0.1.100, ffmpeg7.1.5. Restore included font bytes to equivalent configured font paths or update only runtime path configuration. Absolute historical workspace references may need root mapping. Run NATIVE_FILESYSTEM_PREFLIGHT-equivalent dependency checks before rendering. Do not interpret scoped visual proof passes as full episode acceptance. Native full master will be saved separately only after rendering and review.
