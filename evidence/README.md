# Evidence storage and retrieval

This repository version includes **textual reports, source snapshots, numerical tests and the SHA256 manifest**. Large PNG/JPG/MP4 evidence remains in the local `/workspace/shared/animation-playbook/evidence/` snapshot (140 copied files total) and the episode archive in the authorized private production repository:

- https://github.com/muhammad-y-kamel/moki-peb-animation/tree/main/episodes/EP026
- https://github.com/muhammad-y-kamel/moki-peb-animation/tree/main/episodes/EP027

Use each episode's archive manifest and reassembly instructions for source/QA package parts. EP027 archive verification is a separate production gate; do not assume completion from this pointer. `manifest.json` fingerprints local evidence, including binaries **not committed to this playbook repository**. Paths in original reports are relative to their episode package. This avoids duplicating large videos and makes the evidence location explicit; a missing remote binary is not a failed verification claim.
