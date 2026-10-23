# EP030 — coherent mechanical staging plan

Planning review 2026-10-23; independent physics/story reviewer. This is a proposed staging reconciliation, **not a rendered validation**. Canonical `USER-SCRIPT-EP030.txt` remains unchanged. Detailed scene boundaries 0/24/54/88/122/150/162/175 take precedence over incompatible synopsis ranges. Story175 s plus exact6 s CTA;1920×1080 at60fps.

## Non-negotiable mechanism
- Platform deck heights L+R=1260 at every story state, endpoints380/880. Use ONE scalar trajectory L(t); derive R=1260-L, including impacts/bounces.
- The opening420/880 pair contradicts1260; start380/880. At1s settle880/380.
- Fixed mass ratio Moki1.00, Peb0.54, box0.65; water is additional mass, not changed character scale. Equal platform tare cancels.
- Only gravity with correct mass sign, visible hand haul/winch, a brake, or a physical stop may drive/hold vertical travel. Equal masses do not spontaneously accelerate. Authored damping is permitted but not energy from nowhere.
- Native floor920 and platform deck880 need a visible40px dock step and correctly stepped foot support, not instant foot offsets.
- Preserve established rig at common scene scale, Peb exactly0.54 of Moki. Eye/mouth and full silhouettes need camera/pulley clearance.

## Legible layout
Pulleys x640/1280,y140. Suggested platform width500 (edges390..890,1030..1530) leaves140px gap. At handoff actors move to facing edges, then Peb traverses a short owned arc while Moki retreats to make landing space. Never relocate Peb640px in one state. Right platform overlaps dock edge1480..1530 at upper380; bridge plate aligns380 (canonical balcony400 is rim/structure, not walking plane). A clearly established rear upper catwalk can lead left platform to right balcony **only after final arrival**, with a gate initially closed or dock plate not deployed; do not accidentally provide an easy route that invalidates the puzzle. Alternatively final left platform reaches a visibly deployed bridge at148–150.

## Timeline and causes
| Time | Mechanically explicit action |
|---|---|
|0–1|Moki's full weight settles on high left; left drops380→880, right rises880→380 with Peb. No long unexplained entry fall required.|
|5–12|Peb's small hops apply impulses; couple opposite platform motion15px, retain stops and rope sum. Foot flight states must lift both soles above deck.|
|15–16.5|Moki steps off low left via dock; now right's Peb mass wins: right descends to880, left rises380.|
|24–32|Load box with Peb on **grounded right**; left remains high and empty. Box ownership is continuous from floor through carried/rolled loading.|
|32–40|Moki visibly braces/hauls external control rope or turns ratchet, lowering empty left380→880 and raising loaded right880→380. This supplies work; brake catches.|
|40–42|Moki boards grounded left, then releases brake. Supersedes impossible canonical boarding26/loading32–40 sequence.|
|42–46|Right1.19 exceeds left1.00: right descends880; Moki risesleft380.47s celebration then recognition.|
|57–62|Peb steps off grounded right. Left1.00 now exceeds rightbox0.65: left falls880, box risesright380.|
|65–76|Both stare at inaccessible box; Peb attaches temporary ground peg to left restraint before Moki departs.|
|76–82|Moki leaves left. Peg visibly takes load until82 pop; then right starts falling and left rising. Moki catches restraint before significant travel; hands attach before arrest.|
|82–88|Moki secures caught restraint to visibly permanent brake/cleat, then controls next lowering. Do not let the failed peg become magically reliable.|
|88–90|Moki off left; lower rightbox380→880 under controlled brake.|
|90–92|Peb boards grounded right with box.|
|92–95|Moki on floor visibly hauls empty left down380→880; loaded right goes880→380.|
|95–96|Moki boards left carrying visible water bucket, already introduced on ground. Brake remains engaged during boarding.|
|96–98|Nearly equal1.19/1.19 needs a small visible winch impulse; brake meters movement to **near midpoint L650/R610**, then holds. Exact630/630 at98 conflicts with later crossing and is reconciled to near midpoint.|
|102–112|Water visibly leaves bucket while platforms held; mass drops below1.19. Retain empty bucket mass consistently or include it within stated balance allowance.|
|115–116.5|Brake release permits lighter left to rise650→630 and right descend610→630. Actors approach facing edges before hand contact; at116.5 both decks exactly630.|
|116.5–122|Moki catches Peb hand while airborne, Peb crosses gap and lands left; left becomes1.54 (plus bucket allowance), box alone0.65 right. Left begins descent as added weight is transferred, not before. Stow bucket with real support.|
|122–125|Pair left drops880, box right rises380.|
|125–130|At top, explicit tilted/hinged dock ramp or spring pusher makes box roll onto balcony. 'Slides automatically' without slope/push is not enough; show wheel/roller/ramp causality.|
|130–138|Iron counterweight (mass>1.54), established from opening on an **elevated latched shelf**, is transferred onto now-empty right platform at380 via remote release/ramp. Moki operates a floor-level release cord; the iron itself is not on the floor. This is the necessary repair to the canonical ground-weight perpetual-motion error.|
|139–148|Heavy right descends380→880, pair left rises880→380. Same rope invariant survives unchanged. Brake/stops arrest gently.|
|148–155|Visible upper bridge/gate deploys only after final arrival; both walk across with alternating planted feet to box.|
|157–161.5|Hands contact both locks, sequentially release, lid rises around stable hinge.|
|163.5–166.5|Peb owns folded ladder before extraction; hinged sections unfold physically, with bottom reaching floor920 and top on balcony380. No ladder morph or unsupported beam.|
|166.5–170|Flat reaction clearly alternates ladder versus complicated pulley rig.|
|170–175|Peb descends using rung/hand contacts along inclined ladder; detailed five-second interval prevails over inconsistent prose 'two seconds'.|
|175–181|Standard six-second CTA.|

## QA obligations before approval
1. 10,500 story states: abs(L+R-1260)<1e-9, deck endpoints/stop range, correct support per actor/prop, box/counterweight source and ownership.
2. Epsilon probes around every timeline boundary independently of ordinary per-frame speed; hands/feet/prop centers and extents must not reset.
3. At116.5 exact decks630/630; continuity of both grip hands; transfer arc clears140px gap and platform edges without clipping and lands only on valid support.
4. Counterweight release precedes downward weight travel and upward pair travel; mass never originates atfloor then lifts same pair without external work.
5. Box deck→dock contact continuous; end ladder top/bottom and individual rung support tested through full descent.
6. Source numerical tests do not establish encoded visual approval. Inspect encoded thumbnails, key fullres contacts and transitions; audio timing/peak checks are distinct from listening.

## Playbook reviewed at planning stage
PREFLIGHT, WORKFLOW (in inherited producer context), project contract, ANIM-0015/0016/0018, EP029 GEO001..007; key rules: action-boundary continuity, continuous ownership, full rendered sole/outline support, changing-size support, no thumbnail-only ownership claims. Production/QA stages must re-read relevant current entries.

## Producer-selected layout refinement (supersedes suggested dimensions above)
Platform width560: left edges360..920, right1000..1560; gap80. Elevated iron weight is70px wide atx970,y380 on visible latched wall shelf, leaving15px clearance to left edge and right edge before transfer. It rolls970→1110 during132–137; brake holds right at380. Box already moved onto balconyx1680 at130. Floor release control at138 starts travel139–148. Retractable upperwall catwalk extends1480→920 during148–150; unavailable earlier, preserving puzzle. Validate its left dock adjacency and traversal surface before actor departure.

## Source-gate mass refinement
Final native motion has left rise96–98 before the hold; no extra winch impulse is drawn there. Canonical water mass is unspecified. Use a near-balanced full bucket+water mass0.15 (left1.15 vsright1.19), not an exact0.19 assumption; the small weight difference drives this gentle rise and the brake holds at98. Empty bucket allowance0.02 remains after water0.13 drains. Pair+emptybucket1.56 still exceeds box0.65 and remains belowiron2.0. This supersedes proposed exact1.19/1.19 and winch-impulse wording above, preserving prior planning provenance. The approximate balance caption already matches this interpretation.

## Final boarding and ladder implementation refinement
The first support plan was insufficient: independently keyed heights crossed the 40 px raised decks. The original attempt and two interrupted encodes are preserved, not represented as approved films.

- Moki rests at x240, clear of the left ramp. Every walking shoe queries the actual piecewise floor/ramp/deck surface. Its rotated, outline-expanded ellipse is sampled to derive contact, while a declared swing lift distinguishes airborne feet from planted feet.
- Peb approaches the crate from the right platform/ramp. The crate starts at x1740 with both wheels clear of the ramp. Peb establishes a visible grip, lifts it from floor level to deck height during 24–25 s, then carries it onto the deck during 25–31 s. The mass comparison concerns gravity, not a prohibition on muscular lifting. No unsupported rolling is claimed during this transfer.
- Peb’s exit at 55–57 s and return at 90–92 s use explicit arcs above the crate. Both feet are root-relative in flight; retaining a planted walking gait produced a trailing-shoe collision and was rejected.
- The auxiliary winch input rope and hauling/catch grips lie at x320, clear of the moving left deck edge x360. Its bottom return connects to the existing cleat at x350. The primary two-platform rope invariant is unchanged.
- A visible control gesture and docking piston initiate the box transfer at 125–130 s. The pre-elevated counterweight then moves onto the empty right platform at 132–137 s; release and ascent run 138–148 s.
- The ladder is explicitly telescoping/sliding rather than a set of animated hinges. Its initial short form emerges from the open box, follows Peb’s rail grip, and extends to the floor by 166.5 s. Audio uses wooden sliding and a final contact, not unmatched hinge clicks. Descent runs 169–175 s with actual rung/rail support; the original script remains untouched.

## Final structural clearance refinement
The initial floor ratchet occupied the walking ramp. It is now mounted on the back wall at (320, 500); the input rope continues through the hand positions to y880. The first proposed ground return/cleat arrangement is retained above only as planning history.

The balcony now begins at x1560, directly abutting the right platform edge rather than overlapping it by 80 px. Its left background support is x1610. The retractable bridge spans x920..1560 (640 px) after final arrival. These dimensions supersede the earlier x1480 balcony / 560 px bridge proposal and prevent the moving deck from passing through the balcony slab.
