# Mine V023: preflight the actual renderer source before Canvas

R1 copied the V022 renderer and updated the expected source-freeze digest, but retained its relative V022 ROOT. The inherited --check returned before validating source identity. Parent-plan pin checks, syntax and encoder arguments therefore passed while the actual renderer still selected old scripts.

The first call-entry portrait job rejected the source-freeze mismatch before Canvas initialization or encoder creation. One Node exited 1 and was reaped in 0.251 seconds. Durable cleanup/adopted census was empty. Failed technical acceptance and blocked markers remain unchanged. A separately reviewed ownership-only release relied on the observed terminal result and durable receipt, not absence in another namespace. The original receipt lacked boot/namespace fields, so current process absence was only corroboration.

R2 uses the same source-validation path for no-Canvas CLI preflight and actual rendering: resolved ROOT equals plan source; exact source freeze/files, font/audio and job/output identity are checked before Canvas. All six real planned CLIs were independently checked. A deliberately stale ROOT rejects at source mismatch with a valid control. Thirteen lifecycle/group cases and twelve malformed-plan cases passed. Encoding, 60 fps, three shutter samples, and resource guards were not changed.

## Bounded real evidence

Fresh R2 call-entry portrait covered frames [23317,23421), 104 frames. All six owned stages closed with exit zero, reaped children and empty cleanup. Complete decoded PTS/frame and canonical PCM checks passed. Two reviewers actually inspected all 104 decoded thumbnails and originals 23385, 23386 and 23420. The unsupported hand overlay is absent, and the scoped call boundary preserves the miner pose and blocked pile.

Plan SHA256: 8fe23d0136e0e5dac117a4618ca61ac3d4c069c540bec35c77051ba1883d4cb9.
Source freeze SHA256: ebc84db02b13a7b14a31b8eb8116083c8e803cf82ea6e0c77aa077e47eef5cc2.
Reviewed video SHA256: 62e8f9d3b321e62b00304ef39456c8373f563e6da4998bd3fff70424f7758cc7.
Independent runtime peer SHA256: 462dd84d3f3945a244acf734025e0b28e22d9c17aea35f8f5e53512c2482e213.

Evidence archive: libfile_9837079bc70481918d0c35ed662711ef. Preserved R1 failure and landscape native evidence: libfile_def7b1bd1138819187915bec606818e9.

This proves the source-binding correction only within the bounded diagnostic. Separate contact hand-shape continuity remains held/pending repair. It is not full-film, normal-speed playback, or listening acceptance. See [the earlier Mine terminal-ownership evidence](MINE-SHORT4-TERMINAL-OWNERSHIP-AAC-20261104.md) for the unchanged lifecycle guarantees and sampled-monitoring limits.
