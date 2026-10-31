# ANIM-0023 — Bounded preservation needs exact inputs, reservations and actual readback
- Project / category: shared animation preservation / streaming I/O, privacy screening, quotas and provenance.
- Status: `validated_with_limits` for four named whole/member-verified archives and the named synthetic guards; no full-film acceptance.
- `discovered_by: reviewer` for source path, receipt, reservation and cleanup defects; `agent` for the real generated-cache rejection and scanner-source literal false positive.

## Historical rejected designs
Streaming v1/v2 source reviews found incomplete lexical/symlink checks on control/output paths, weak readback reservation linkage, unbounded serialized receipts, a final-entry-count off-by-two, guard dependence on nonoptimized Python and insufficient private-path/credential-pattern tests. An arbitrary positive free-floor input did not bind remaining production obligations. Preserve rejected versions rather than editing their freezes into validity.

The corrected writer binds exact production PLAN/GO and all seven quota roots, reserves the remaining capacities plus floor, uses bounded serialization and exclusive writes, hashes files/ZIP members in chunks, checks CRC/member set, and retains original plus fresh readback without extraction/deletion. A separate queue guard adds its own remaining 1 GiB quota once; it does not silently charge unrelated files to E04's 13 GiB archive allocation. Media/control/input, ZIP, metadata and member limits remain distinct.

The actual source/native queue initially rejected an owner-listed `__pycache__` file. The additive allowlist excluded that generated cache while retaining the old candidate and owner provenance. No cache/private guard was weakened. Byte-identical already-durable dependencies were mapped to exact Library ID/version/archive/member hashes; this transfers bytes only, not historical resource or creative acceptance.

## Local execution and external transfers are different evidence
The archive RSS adapter uses isolated pinned Python, constructed child environment, exact direct-child ownership, a pre-work RELEASE gate, observed RSS/cadence and retained TERM/KILL/reap. A RELEASE gate is not an invented child ACK. Source tests repaired membership normalization, pre-registration cleanup and escalation even when TERM always raises. Actual accepted package/reserve/readback children exited0 and were reaped.

Supported uploads/materializations were separately authorized, serialized bounded payloads with shared registry and pre/post host/disk checks. Connector RSS was **not** observed; there is no claim it remained inside the local sampled envelope or that remote processes were reaped. Unknown transfer outcomes require reconciliation, not blind duplicate uploads. Returned immutable IDs/version must precede exact readback configuration and its separate gate.

## Actual verified result
| Archive scope | Library identity / version | SHA256 | Whole + entries |
|---|---|---|---|
| E04 first four closed production proofs | `libfile_fe9391e2a7008191a34b5739e2b9fc77` /0 | `3ede9dd6f86ff2f6f87e38d39bf04158be4ca60214fc571932f52780b352a443` | 58,441,469 bytes; 234 |
| Closed source/native queue | `libfile_74f0ec6a06e081918d8a534c9eb94473` /0 | `8de14b6208103c100db801daad2305784e150bf9ff65193bc5598e0fc7f9314c` | 7,323,924 bytes; 389 |
| WhatIf actual-main C72 | `libfile_ff298a75e88c8191958929bdb4bf3e7a` /0 | `9e2dd687443b14d6a8b9462d434cb021330c78c55e178520c0095d191f8043c3` | 42,096,745 bytes; 97 |
| WhatIf actual-main D72 | `libfile_2f857d21c9f081919d27acc1481034fb` /0 | `c2953a84f39117b88cc6c2d953d775c19e64095f12c9a2557de96c3fe8f313e3` | 41,660,972 bytes; 107 |

Exact copied durable receipts and observed phase results are in [the evidence manifest](../evidence/recovery-and-archive-20261031/manifest.json). These prove the named storage checks, not whole-film quality, listening, old QA002 closure, or permission to relocate original QA. Owner relocation and post-relocation attestation require separate exact authority and preserve the original durability receipt.

## Scanner self-literal false positive and narrow correction
When preparing source-runtime preservation, the scanner detected its own 40-byte private-key regex literal, which is not a valid key header. Queue writer v2 permits **only** that exact pattern-index1 literal in a source file whose absolute path and current whole SHA are explicitly pinned in the root-approved config. Every other sensitive match still rejects, including a real header in the same file. Fifteen synthetic regressions cover missing/wrong pins, five real key header forms, quoted/unquoted credential-pattern fixtures and an appended real header. It is not a broad source-file exemption or universal proof of credential absence. The runtime-provenance package passed locally and uploaded; its later readback is not claimed by this four-archive snapshot.

## Prevention and update history
Keep archive, runtime, creative acceptance and owner-release receipts separate. Enforce exact closure allowlists and serialized writer gaps; never package changing/possibly open forensic files. Validate actual stored bytes and every member, preserve old failures and immutable IDs, and account for all retained copies. 2026-10-31 additive scoped record; no new media or credentials are copied into the repository.

Historical storage verification does not assert a currently clear global registry. At this documentation update, old002 and the later new005r3 were separately UNKNOWN; the latter triggered a new local-work hold. The four completed archive receipts above remain historical byte-verification evidence, not an exemption from that hold.
