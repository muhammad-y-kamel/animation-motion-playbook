# ANIM-0019 — Shell-output truncation corrupts staged binary transport

Project MOKI & PEB / EP028. Category workflow/archive. Status validated_with_limits.

## Symptom and confirmed cause
A5,834,744byteMP4 was read via one shellbase64 output with a large tokenrequest. The tool response still capped near1MiB(1,048,607characters with truncation annotation). create_blob accepted a staged blobdffadce8034c6bbf84c9ab3d2bdd6f3c65315631, which did not equal local expectedGitblobSHA9c190e04241d9358a350df2007261d7f8a42000a. Successful API response was not valid binary proof. Cause: shell response byte cap independent of requested tokens; base64transport was truncated before API submission. No committed file was overwritten; badblob stayed unreferenced.

## Attempts and results
1. One whole-file shellread: failed integrity, rejected and not attached to anytree.
2. Read393216byte slices(each524288base64characters; intermediate chunks divisibleby3), verify each returned encoded length, concatenate inJS, verify total7,779,660characters. Returned remote blob9c190e04241d9358a350df2007261d7f8a42000a exactly matched localgit hash-object. This was the best validated trial.
3. Applied same guard to every source/HTML/QA/poster binary; used8MiB archiveparts for largeartifacts. Every returnedblobSHA matched expected localGitSHA before treecreation. Reassembled parts verified artifactSHA256 andbytes. Maincommit0a6f53782b31252c2fbcc880681364b949a4047f remotehead and27treeentries confirmed.

## Prevention / regression
Never equate successful blobcreation with correct bytes. Before mutatingref: exactper-slice length, overall encodedlength, localGitblobSHA versus returnedSHA, and per-partSHA256/reassembly must pass. A toolcap is a transportlimit, not grounds to bypass approval/permissions. Inspect uncertain calls before retries; retain invalid stagedblob unreferenced rather than destructive cleanup. Preserve currentbase_tree and expectedparentSHA.

## Evidence / limits
[Manifest](https://github.com/muhammad-y-kamel/moki-peb-animation/blob/0a6f53782b31252c2fbcc880681364b949a4047f/episodes/EP028/archive-manifest.json), [lessons and failed attempt](https://github.com/muhammad-y-kamel/moki-peb-animation/blob/0a6f53782b31252c2fbcc880681364b949a4047f/episodes/EP028/LESSONS-PLAYBOOK.md), [reassemblyscript](https://github.com/muhammad-y-kamel/moki-peb-animation/blob/0a6f53782b31252c2fbcc880681364b949a4047f/episodes/EP028/reassemble.py). Verification uses content-addressed remoteGitblobSHAs and committedtree lookup; no claim a full remoteMP4was downloaded anew. Not an animationpixel defect.
