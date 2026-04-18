# AJ Liquid Waste Haulers — Design Refinement Prompt

**Stage:** 3-2
**Compiled:** 2026-04-17
**Sources:** existing-site-crawl.md, trust-analysis.md, competitive-analysis.md, design-research.md, homepage-sections.md, strategic-validation.md, client-intake.md

---

## 1. What's Wrong (The Problem)

The current site at ajliquidwastehaulers.com fails on every dimension that converts a stranger into a caller. These are documented failures from the site crawl — not opinions.

**The site is structurally invisible.** There is no street address, no hours, no years-in-business claim, no schema markup of any kind. A visitor cannot confirm this is a real operating business from what the page alone shows them. (Source: existing-site-crawl.md §Business Information, §Gaps Observed; seo-audit.md §1.3 — fetched 2026-04-17)

**Trust signals are absent or buried.** The current site scores 10/285 (4%) on the weighted trust rubric — last among all six entities evaluated including every local competitor. Insurance is "mentioned" in passing but displayed nowhere as a badge. TCEQ compliance is referenced but no license number is shown. Founders James Ashman and Gerry Jones — 40+ combined years of experience — do not appear on the website at all. (Source: trust-analysis.md §2 AJ Current Site Score Summary — fetched 2026-04-17)

**Zero social proof is visible to a first-time visitor.** There are no embedded testimonials. The site sends visitors off-page to Google with a "Write a Review" link. Every visit is a cold start: no names, no quotes, no star rating, no review count. Four out of five competitors display named on-site testimonials. (Source: existing-site-crawl.md §Certifications / Trust Signals On Site; competitive-analysis.md §3 Trust Signal Adoption Table; trust-analysis.md §MUST Signals — fetched 2026-04-17)

**The CTA architecture is broken for a service that has emergencies.** The phone number is not reinforced in the hero. There is no embedded quote or service-request form — only a "Contact Us" navigation link. On mobile, there is no sticky bottom bar. Four out of five competitors embed a contact/quote form on the homepage. AJ's current site will lose a homeowner with a backing-up system at 10 PM because there is no visible, clickable phone number in front of them when they land. (Source: existing-site-crawl.md §CTAs Present; competitive-analysis.md §2 Homepage Layout Comparison Table; design-research.md §6 — fetched 2026-04-17)

**The unique differentiator — the electronic gallon meter — is buried as a bullet point.** The proof-of-pumpage system is listed third in a "Why Choose Us" paragraph block, indistinguishable from generic claims. No competitor in the market possesses this capability. It is the direct answer to the vertical's deepest customer fear (being overcharged for an invisible service) and it is functionally invisible on the current site. (Source: existing-site-crawl.md §Why Choose Us / Differentiators; trust-analysis.md §4 Fear/Desire Pair; competitive-analysis.md §5 — fetched 2026-04-17)

**The site is geo-vague.** The H1 says "Septic Pumping & Liquid Waste Removal in Texas." Competitors based in Leander and Round Rock have individual city landing pages for Dripping Springs — AJ's home turf — naming 30+ local neighborhoods. AJ lists its service cities as prose only, with no linked pages, no map, no local context. It is giving away every "septic service + [city name]" transactional search to operators who commute from farther away. (Source: existing-site-crawl.md §Service Areas Listed; competitive-analysis.md §5 — A+ Septic Dripping Springs city page; seo-audit.md §1 — fetched 2026-04-17)

**The site reads as a brochure, not a conversion machine.** No process walkthrough, no pricing transparency, no audience-differentiated pathways, no interactive tools, no schema. It looks like a placeholder for a real site. The gap between what AJ actually is — a technologically differentiated, family-owned, Hill Country-rooted operator with 40+ years of combined expertise — and what the site communicates — essentially nothing — is the entire design problem. (Source: strategic-validation.md §4 Theme 5, §5 Thesis — fetched 2026-04-17)

---

## 2. Five Things the Homepage Must Communicate

These are the five non-negotiable messages the homepage must prove — not state — within one scroll. Each is evidence-backed.

**1. "AJ is the only operator in this market that proves every job with a measured, documented gallon count."**

This is the thesis. The electronic solid-state gallon meters are AJ's moat. Zero competitors claim anything like it. The primary fear in this vertical is being overcharged on an invisible service — the gallon meter eliminates that fear with documented proof. The homepage must make this visible and named, not buried. It belongs in the hero eyebrow, the hero headline or subhead, the Why AJ section, and the process walkthrough. A visitor who reads only the above-the-fold section must come away knowing AJ measures every drop.

(Source: strategic-validation.md §5 Thesis, §SF-06; trust-analysis.md §4 Fear/Desire, §FIRST-MOVER; client-intake.md §Known Differentiators — fetched 2026-04-17. Confidence: HIGH — documented unique capability with zero competitor adoption.)

**2. "This is a real, credentialed, licensed, insured family business — not a fly-by-night truck with a phone number."**

The vertical's second-deepest fear is: who am I letting onto my property to access the infrastructure under my house? The site must answer this before the visitor scrolls. TCEQ license number (pending confirmation of AJ's number), insurance statement, 40+ years combined experience, family-owned designation, and named founders must appear in the trust strip immediately below the hero. No competitor in the local market deploys a trust strip — this is unoccupied white space.

(Source: trust-analysis.md §MUST Signals — "TCEQ license number displayed" 2/5 competitor adoption; §SHOULD Signals — "TCEQ license number" +12% call rate per WI-trust-psychology.md §4; design-research.md §4 — trust strip as most consistent premium home-services pattern; existing-site-crawl.md §Gaps — no license number visible. Confidence: HIGH.)

**3. "AJ serves your specific community — they are from the Hill Country, not commuting to it."**

AJ is based in Dripping Springs. Competitors with far greater web presence are based in Leander and Round Rock. The geography is a genuine competitive advantage — and it is not expressed anywhere on the current site. The homepage must show the service area map, name the cities, link to city pages, and root the brand language explicitly in Dripping Springs and the Hill Country. "Serving Dripping Springs, Austin & Hill Country" must appear in the hero subhead, the footer, and the CTA banner.

(Source: strategic-validation.md §SF-07, §4 Theme 3; competitive-analysis.md §5 — AJ's Hill Country HQ; seo-audit.md §1.7 — city landing pages as highest-ROI move; homepage-sections.md §8 Service Area — fetched 2026-04-17. Confidence: HIGH.)

**4. "AJ serves homeowners, restaurant operators, AND winery/brewery/distillery operators — with dedicated expertise for each."**

Three distinct audiences visit this site with fundamentally different fears, service needs, and purchase criteria. A homeowner with a failing septic system has a different urgency than a restaurant manager facing a $2,000 grease-trap compliance fine. Neither is the same as a Hill Country winery owner whose effluent handling is part of their licensing. These audiences must find themselves on the homepage through distinct pathway cards. Collapsing them into one "Services" page loses each segment. Zero competitors provide audience-differentiated entry points — this is a structural first-mover opportunity.

(Source: strategic-validation.md §7 — "Build 3 distinct audience entry points"; §SF-04 — grease trap compliance market; §SF-05 — Hill Country beverage industry; client-intake.md §Audiences; competitive-analysis.md §5 — beverage niche completely uncontested. Confidence: HIGH.)

**5. "Real customers say AJ is reliable, fair, and thorough — and we can show you exactly who said it."**

Social proof is the highest-weighted trust category in home services purchase decisions (per WI-trust-psychology.md §1). The current site has zero on-site social proof. The market average for social proof signals is 31% — terrible — but still 31 points ahead of AJ's current 0. Named testimonials, star rating with review count, and review dates must appear on the homepage. The dates matter: no competitor shows them, and recency is a direct signal of an active, ongoing business.

(Source: trust-analysis.md §2 Social Proof category — market average 23/75 (31%), AJ 0/75 (0%); §MUST Signals — "On-site named testimonials (8–12)" — 4/5 competitor adoption; design-research.md §4 — testimonials mid-page as emotional trust deployment; competitive-analysis.md §6 Takeaway 2. Confidence: HIGH — 4/5 competitor adoption makes this table stakes.)

---

## 3. Who Evaluates (The Audience)

### Primary Decision-Makers (Founders)

**James Ashman (JMA)** — Co-founder of AJ Liquid Waste Haulers. Experienced operator with decades in liquid waste. The brand's credibility rests partly on his personal reputation in the Hill Country community. The site must represent him and Gerry Jones with the same pride and professionalism they bring to the job. A site that looks like a GoDaddy template is an insult to their combined experience. A site that names them, shows their faces, and explains their technology makes them proud to hand out a business card pointing to it.
(Source: client-intake.md §Ownership — fetched 2026-04-17)

**Gerry Jones** — Co-founder. Same evaluation profile as James. The About page is the primary surface where Gerry and James need to appear — named, photographed, with their credentials and founding story displayed as credential cards, not prose paragraphs.
(Source: client-intake.md §Ownership — fetched 2026-04-17)

### Target Audiences (End Evaluators)

**Rural and semi-rural homeowners in Hays County and surrounding Hill Country.** Primary decision archetype: a homeowner who has recently moved from an urban area (82.3% of Hays County growth is in-migration per market-context.md), has never dealt with septic maintenance before, and is Googling "septic pumping Dripping Springs" after noticing a slow drain or smelling something outside. They are anxious, unfamiliar with the process, and highly susceptible to the invisible-service fear. What impresses them: a site that shows real people, explains exactly what will happen, displays the license number, and has Google reviews they can read without leaving the page. What dismisses them as a template: a stock hero photo, a generic tagline, no phone number in the header, and no one's name anywhere on the site.
(Source: market-context.md §6 — migration data; trust-analysis.md §4 Fear/Desire; client-intake.md §Audiences — fetched 2026-04-17)

**Restaurant operators and commercial kitchen managers in Austin.** Evaluation archetype: a restaurant GM or owner who is legally required to pump their grease trap every 90 days (Austin municipal ordinance) and faces fines up to $2,000 per violation. They are not researching septic systems — they need a reliable compliance partner on a recurring schedule. What impresses them: a site that speaks their language (compliance, inspection-ready, recurring service, no hassle), names a price signal or process, and shows commercial credentials. What dismisses them: a residential-focused site that makes them hunt for evidence the company does commercial work.
(Source: market-context.md §4 — grease trap compliance mandate; strategic-validation.md §SF-04; client-intake.md §Audiences — fetched 2026-04-17)

**Winery, brewery, and distillery operators in Driftwood and Dripping Springs.** Evaluation archetype: a small to mid-size beverage producer in the Texas Hill Country AVA who generates substantial effluent from production and cleaning cycles and needs a hauler familiar with their specific waste profile and TCEQ requirements. They are sophisticated operators who will immediately distrust a generic residential septic company. What impresses them: a site that explicitly names their industry, mentions the Hill Country beverage cluster, and makes it clear AJ has done this before. What dismisses them: a homepage built entirely around residential septic pumping with no mention of their segment.
(Source: market-context.md §3 — Texas Hill Country AVA, Dripping Springs beverage cluster; strategic-validation.md §SF-05; client-intake.md §Audiences — fetched 2026-04-17)

**Real estate agents and buyers.** Evaluation archetype: an agent in the Hill Country / Hays County market who needs a trusted septic inspector for pre-closing transactions. They make referral decisions — a single good relationship converts to repeated business without advertising. What impresses them: a dedicated page that understands their timeline needs (closing deadlines), mentions inspection reports, and has a clear process. What dismisses them: having to call and ask whether AJ does inspections because the site doesn't say.
(Source: client-intake.md §Audiences; competitive-analysis.md §5 — real estate inspection page as 0/5-competitor first-mover opportunity — fetched 2026-04-17)

---

## 4. What "Impressive" Means

AJ is not competing against ServiceMaster or a national franchise. The comparison set is local Hill Country trades operators — and the standard for "impressive" in that context is specific.

**Clarity at speed — 5-second scan absorption.**
Within 5 seconds of landing, a visitor must be able to read: what AJ does, where they serve, and one proof that they are legitimate. This means: (1) a headline under 10 words that names the core service and the differentiator; (2) a phone number in the header that is clickable; (3) one trust signal visible above the fold (the trust strip, immediately below the hero). If the 5-second scan does not yield these three elements, the site has failed its most basic job.

**Visible competence — technology that competitors cannot claim.**
"Impressive" in this competitive set means showing something the others cannot show. The gallon meter is that thing. A close-up photograph of the electronic solid-state meter readout, captioned with what it means for the customer, makes AJ visually unique against a field of sites where every operator looks interchangeable. Impressive is not polish — it is specificity. A blurry photo of AJ's actual truck beats a crisp stock photo of a generic septic truck every time.

**Tangible scale — proof of a real, established operation.**
Homeowners evaluating a liquid waste hauler do not want the cheapest option — they want a business that will still be operating next year. Scale signals include: number of reviews, number of gallons hauled (a trust strip statistic), fleet count, years of combined experience, and the TCEQ license number. None of these require a large company — they require documentation. AJ's 40+ combined years is a scale signal. The TCEQ registration number is a scale signal. "Serving Hays, Travis, and Comal Counties" is a scale signal. Impressive in this market means: you have been around long enough to have paperwork.

**Real value immediately clear — one-scroll understanding.**
A visitor who scrolls through the homepage once should know: what AJ does, who it serves (residential / commercial / beverage), how the service works (the 5-step process), why it is different (gallon meter + founders), and how to act (phone CTA or quote form). If any of those elements require a second visit to the nav or a search through text blocks, the design has failed progressive disclosure.

**Local identity — the Hill Country is not a backdrop, it is the brand.**
The competitor from Leander cannot say "we are from here." AJ can. Impressive to a Hill Country homeowner means: this business knows what limestone caliche soil does to a drain field, knows the difference between a conventional OSSF and an aerobic system in Hays County, and has a truck parked 15 minutes from their house. The design should carry this: warm terracotta and bone palette that reads as Texas land, not corporate blue; Hill Country landscape in the hero photo background; "Dripping Springs" named in the first two sentences of copy, not hidden in the footer service area list.

**Local-premium-trades standard, not big-box-franchise standard.**
The benchmark is not Parker & Sons with their 14-year consecutive #1 ranking banner. The benchmark is the best family-owned trades operator in the Austin Hill Country market — a business like Tony LaMartina Plumbing at the level of: named founders, heritage narrative, real photography, clean typography hierarchy, phone repeated four times, trust strip, and no stock images. That is the ceiling to hit. It is achievable without a six-figure design budget. It requires discipline, authentic photography, and a refusal to use generic copy.

---

## 5. Design Tokens With Rationale

These tokens are derived from design-research.md §10 "Recommended Direction for AJ Liquid Waste Haulers" and the Earthen Luxe palette direction. Each includes a one-sentence rationale grounded in the client's specific positioning.

### Primary Color Palette — "Earthen Luxe"

| Token Name | Hex | Usage | Rationale |
|---|---|---|---|
| `--color-navy` | `#1C2E4A` | Primary brand color; hero background; section backgrounds; sticky header; CTA banner; footer | Deep navy telegraphs the seriousness and longevity of a 40+-year expertise claim before a single word is read — the same register Tony LaMartina Plumbing uses to signal a century-old family legacy. |
| `--color-navy-dark` | `#0F1E31` | Darkest background variant; footer deep band; overlay on hero photo | Provides depth and contrast when full navy would read as flat; separates the footer from the CTA banner visually. |
| `--color-bone` | `#F2EDE4` | Section background alternating with white; testimonials section; FAQ section | The warm bone tone distinguishes content sections from white without introducing a cold break, maintaining the Earthen Luxe warmth that signals a family business rather than a corporate franchise. |
| `--color-terracotta` | `#C07B3A` | Primary CTA buttons; link hover; icon accent; active states | Terracotta is the color of Central Texas limestone and caliche soil — it grounds the brand in the Hill Country landscape and provides high contrast against navy that orange and red alone cannot achieve with the same warmth. |
| `--color-terracotta-light` | `#D4924F` | CTA button hover state; secondary accents | Lightened terracotta for hover feedback without switching to a conceptually different hue — maintains the Earthen Luxe system under interaction. |
| `--color-white` | `#FFFFFF` | Body text on dark backgrounds; card backgrounds; form fields | Clean white on navy is the clearest trust signal in print and screen — readable, professional, no ambiguity. |
| `--color-off-white` | `#FAF8F5` | Page background (default); section backgrounds where bone is too warm | Slightly warmer than pure white so the page does not read as sterile; preserves the organic, approachable register of a family business. |

### Secondary Palette — Earth Accents

| Token Name | Hex | Usage | Rationale |
|---|---|---|---|
| `--color-sage` | `#6B8F71` | Beverage-industry section accent; environmental messaging; "TCEQ-approved disposal" callout | Sage connects the brand to the Hill Country's live oak and cedar landscape, used specifically in the beverage-industry pathway card and environmental compliance callouts where a land-stewardship register is appropriate. |
| `--color-charcoal` | `#2D3142` | Body text on light backgrounds; secondary headings on bone | Slightly warmer than pure black, charcoal body text against bone or off-white preserves readability while softening the harshness that #000000 on warm backgrounds creates. |
| `--color-gray-mid` | `#6E7582` | Subtext; caption text; form labels; meta information | Recedes appropriately for supporting text without disappearing — maintains accessibility contrast ratios against bone and off-white backgrounds. |
| `--color-gray-light` | `#E4E2DD` | Dividers; card borders; input field borders | Warm-tinted light gray prevents the cold clinical feel of #E0E0E0 while still clearly delineating structural elements. |
| `--color-star-gold` | `#F5A623` | Star rating icons in testimonials and trust strip | Matches the visual convention visitors expect for star ratings (gold/amber), making the review count and star display instantly scannable without requiring context. |

### Typography

| Token Name | Value | Usage | Rationale |
|---|---|---|---|
| `--font-display` | `'Playfair Display', Georgia, serif` | H1, H2; section hero headings; trust strip labels | Playfair Display is a humanist serif with strong weight contrast that signals established craft and family heritage — it makes "40+ Years Combined Experience" read as a legacy claim rather than a boast, and it separates AJ visually from every competitor using mechanical sans headings. |
| `--font-body` | `'Inter', 'DM Sans', system-ui, sans-serif` | All body copy; navigation; form labels; CTAs; captions | Inter's geometric clarity and superior screen rendering at 400 weight ensures that educational content (process steps, FAQ answers, service descriptions) reads effortlessly at every viewport — the clean body font makes the serif display stand out rather than compete. |
| `--font-weight-display` | `700` | H1, H2 headings | Bold weight in Playfair Display creates the visual authority that converts a headline into a declaration — critical for the proof-of-pumpage statement in the hero. |
| `--font-weight-subhead` | `600` | H3, H4; trust strip item labels; card titles | Semi-bold Inter for sub-headings maintains hierarchy without the formality of the display serif — keeps the information architecture readable at a glance. |
| `--font-weight-body` | `400` | Body paragraphs, descriptions | 400-weight Inter is optimized for reading comprehension on screens; do not use 300 (thin) weight at any body size. |
| `--font-size-hero` | `clamp(2.25rem, 5vw, 3.5rem)` | H1 in hero section | Fluid type ensures the hero headline reads at the correct visual weight on a 375px phone and a 1440px desktop without two separate fixed sizes. |

### Corner Radius Philosophy

| Token Name | Value | Where Applied | Rationale |
|---|---|---|---|
| `--radius-sm` | `4px` | Form inputs; table cells; small badges | Minimal rounding on functional UI elements: enough to avoid the harshness of sharp corners but not so much that it reads as playful — service forms are serious tools. |
| `--radius-md` | `8px` | Service cards; testimonial cards; FAQ accordion items; gallery thumbnails | Medium rounding gives cards a friendly, approachable feel consistent with the family-business warmth without competing with the more structured sections. |
| `--radius-lg` | `16px` | CTA banner section; feature callout boxes; the proof-of-pumpage highlight block | Larger radius on signature sections creates visual distinction — the homepage's peak moments (the gallon meter callout, the primary CTA) feel designed rather than assembled. |
| `--radius-pill` | `9999px` | Primary CTA buttons; tag/badge labels on service cards | Pill-shaped primary CTAs follow the established home-services conversion pattern (Parker & Sons, Genz-Ryan) — the fully rounded button is universally read as "action button" by visitors trained on modern UI. |

### Shadow Usage

| Token Name | Value | Where Applied | Rationale |
|---|---|---|---|
| `--shadow-card` | `0 2px 8px rgba(28,46,74,0.08)` | Service cards; testimonial cards; FAQ items at rest | A barely-perceptible shadow tinted with navy (not neutral gray) lifts cards off the background with warmth rather than coldness — consistent with the Earthen Luxe palette's insistence on warmth in every detail. |
| `--shadow-card-hover` | `0 6px 20px rgba(28,46,74,0.16)` | Service cards on hover; CTA button on hover | Deepening the same navy-tinted shadow on hover gives clear affordance that the element is interactive without a harsh color shift — the elevation metaphor is gentle and controlled. |
| `--shadow-sticky` | `0 2px 12px rgba(15,30,49,0.18)` | Sticky header after scroll | The sticky header acquires a shadow only after the user scrolls past the hero — the shadow communicates "this header is floating above content" and prevents the nav from reading as part of the hero photo. |

---

## 6. The Six Evaluation Lenses

| Lens | Question |
|------|----------|
| **Decision Maker — James Ashman + Gerry Jones** | Would James and Gerry point to this site with pride? Does it represent 40+ years of expertise without looking corporate or generic? Would they feel comfortable handing a homeowner their card and saying "check us out online"? |
| **Value Clarity — Visitor on First Scroll** | Within one scroll, does a visitor understand exactly what AJ does, the proof-of-pumpage differentiator, the three types of customers served, and how to take the next step? Can someone who arrived on a mobile phone at 10 PM with a septic emergency find the phone number and tap it in under 5 seconds? |
| **End User — The Stressed Homeowner** | Can the most anxious, septic-illiterate homeowner — an Austin tech worker who just bought a Hays County property and has never dealt with a septic system — complete the following: (1) confirm AJ is licensed and insured, (2) read one real customer testimonial, (3) understand what happens on a service visit, and (4) submit a quote request — all without leaving the homepage? |
| **Local Identity — Hill Country Authenticity** | Does the site feel like a Dripping Springs business, or does it feel like a template any septic company in any state could use? Is the Hill Country landscape in the hero photo? Is "Dripping Springs" named before the fold ends? Does the palette read as Texas earth, not corporate blue? Would a neighbor recognize this as local? |
| **Platform Credibility — "Is This a Real Business?"** | Does the site pass the 5-second realness test? Real photo (not stock), real name (James Ashman + Gerry Jones), real license number (TCEQ), real review count, real address or service area. No stock photography, no "Committed to Excellence" vagueness, no GoDaddy-footer indicators. |
| **Craft — Intentional Design vs. Assembled Default** | Would a designer reading the CSS recognize deliberate token choices — navy-tinted shadows instead of gray, fluid type with clamp(), pill-radius CTAs against medium-radius cards, a serif/sans pairing with weight contrast — rather than default browser styles and a theme stylesheet? Does the typography hierarchy communicate even if no copy is visible? |

---

## 7. The Creative Mandate

The homepage must make the gallon meter famous. This is the design brief in one sentence. Before the visitor scrolls, they know AJ charges by the gallon. Before the fold ends, they have either seen the meter or felt the meter in the headline. The entire homepage is a delivery mechanism for that claim — and everything else on the page (the trust strip, the process walkthrough, the testimonials, the CTA) is built to make that claim credible, actionable, and memorable.

The gallon meter exists because of a specific, named fear: you cannot see inside a septic tank. You cannot verify whether the truck pumped it completely or 80% of the way. You are paying a stranger with a hose on an honor system for a service you cannot observe or measure. This fear is not irrational — it is structurally true. Most septic companies charge a flat rate. AJ does not. AJ measures. The design must communicate this asymmetry between AJ and everyone else not as a feature bullet, but as the foundational brand claim. The headline is not "Reliable Septic Pumping in Austin." The headline is the measurement: "You Pay Only for What We Remove." Or "Measured. Documented. Proven." Or "Every Gallon Counted." The exact words are to be determined — the principle is not: the first thing a visitor reads must name the measurement.

The site's visual system must make the gallon meter legible as a physical object, not just a claim. A photograph of the electronic solid-state meter in use — tight crop, the readout visible, a uniformed hand at the connection — transforms an abstract differentiator into a concrete, tangible proof. The meter is not a marketing argument. It is a piece of equipment. Show it. Caption it plainly: "Every service call includes a documented gallon readout. You see the number before we leave." This is the visual anchor the entire design should organize around. The Why AJ section exists to house this photo and this explanation at full attention.

The creative mandate for the typography and color system is restraint and intentionality. AJ is a small family operation in Dripping Springs with 40+ years of combined expertise. The site must feel like a craftsperson's website — not polished into franchise anonymity, not rough and template-default, but deliberately composed. The deep navy conveys the seriousness of handling something as consequential as a home's buried waste infrastructure. The terracotta grounds the brand in the Hill Country landscape every visitor already knows. The Playfair Display serif says "we have been doing this long enough to have a voice." The Inter body copy says "we explain clearly and we don't waste your time." These are not arbitrary aesthetic preferences — they are signals that position AJ against a field of gradient-teal template sites that look interchangeable.

Finally, the three audience pathways are not a UX convenience — they are a strategic statement. AJ is not a one-size residential septic company. It serves homeowners, restaurant operators, and beverage-industry clients. This breadth is unusual for a business of AJ's size, and it is a genuine strength. The design must surface this breadth at the homepage level — not buried in a services submenu, but as three distinct, clearly labeled cards that say: "whoever you are, there is a path here for you." The homeowner card, the restaurant card, and the winery/brewery card are each a separate door into the same building. The building is AJ Liquid Waste Haulers. The door you walk through depends on what brought you here — and the site is built to receive all three of you.

---

## 8. Trust Signal Strategy

### Primary Fear / Primary Desire

| Primary Fear | Primary Desire |
|---|---|
| Catastrophic system failure, sewage overflow, or being overcharged for a service that is invisible and unverifiable — you can't tell if the tank was fully pumped or if the price was fair. | The problem disappears completely, handled by a competent professional who charged a fair price, without judgment or drama — and it doesn't come back. |

*(Source: trust-analysis.md §4 Fear/Desire Pair, identified via WI-trust-psychology.md §3 Home Services framework — fetched 2026-04-17)*

---

### Trust Signals to Prove (Priority Order)

**MUST HAVE — 80%+ competitor adoption; AJ currently missing; table stakes for conversion**

| Signal | Category | Adoption | Placement |
|---|---|---|---|
| **On-site named testimonials (8–12 minimum)** | Social Proof | 4/5 (80%) | Homepage §9 Testimonials section + dedicated Reviews page. Cards with star rating, text, first name + last initial, review date. |
| **Embedded contact / quote form** | Character | 4/5 (80%) | Hero section (simplified 3-field version) + Contact page (full form). |
| **Service detail pages (individual per service)** | Competence | 4/5 (80%) | Navigation → Services dropdown linking to 5 dedicated service pages. |
| **Service area grid — linked and visible** | Competence | 4/5 (80%) | Homepage §8 Service Area section (map + city grid). Footer top_areas list. |
| **40+ Years Combined Experience** | Competence | 4/5 (80%) | Trust strip (position 2); hero eyebrow line; About page. Do NOT use founding year of 2018 as the lead credential. |
| **24/7 Emergency Service — prominent** | Risk Reduction | 3/5 (60%) | Trust strip item; hero subhead; footer supporting line; CTA banner secondary copy. |
| **Family-owned + named founders (James Ashman + Gerry Jones)** | Character | 3/5 (60%) | Trust strip; About page as primary surface. Named with photos. |

**SHOULD HAVE — 40–79% competitor adoption; strong conversion signals; implement in rebuild**

| Signal | Category | Adoption | Placement |
|---|---|---|---|
| **TCEQ license number displayed** | Risk Reduction | 2/5 (40%) | Trust strip item #1; About page; footer. +12% call rate per trust framework. *Requires: confirm actual license number from client (G-04 gap).* |
| **Insurance — visible badge or statement** | Risk Reduction | 1/5 (20%) | Trust strip item; About page. Upgrade from buried mention to styled badge. |
| **Dedicated About / Team page with founder photos** | Character | 2/5 (40%) | Interior page. Primary E-E-A-T surface. Named founders + photos + founding story + credential display. |
| **Named founders with photos** | Character | 2/5 (40%) | About page primary + hero subtext secondary. +19% trust per trust framework. |
| **Fleet / equipment photography** | Competence | 2/5 (40%) | Hero background; Why AJ section; Gallery (if commissioned). *Requires: photoshoot (G-05 gap).* |
| **Google review count + star rating (on-site display)** | Social Proof | 2/5 (40%) | Trust strip item #4. *Requires: confirm exact count + rating from live GBP (G-02 gap).* |
| **Free estimate / quote CTA** | Character | 2/5 (40%) | Hero primary CTA wording: "Get a Free Quote." +18% form completion per trust framework. |
| **FAQ section on homepage** | Character | 2/5 (40%) | Homepage §10 FAQ Teaser — top 4 Q&A pairs + link to full FAQ page. Earns FAQPage schema. |
| **Educational resource content** | Competence | 2/5 (40%) | Resources page (nav link already exists). AJ's educational tone (client-intake.md §Tone) makes this natural. |

**NICE TO HAVE — <40% competitor adoption; differentiating but not essential at launch**

| Signal | Category | Adoption | Placement |
|---|---|---|---|
| **"No hidden fees" pledge** | Character | 1/5 (20%) | Why AJ section — one of the 4 differentiator columns. Directly addresses invisible-service fear. |
| **Written service guarantee** | Risk Reduction | 1/5 (20%) | Services pages; Why AJ section. |
| **Insurance badge / certificate image** | Risk Reduction | 0/5 (0%) | Trust strip or About page — visual upgrade from text statement. |
| **Review recency — dates visible on testimonials** | Social Proof | 0/5 (0%) | Testimonials section — include review dates. Zero competitors show dates; this is an immediate differentiator. |
| **Dedicated winery/brewery industry page** | Competence | 0/5 (0%) | Services → Winery & Brewery Liquid Waste. Zero competition, first-mover SEO. |

---

### First-Mover Opportunities (0% Competitor Adoption)

These are signals no competitor deploys. AJ can own them entirely and achieve disproportionate trust differentiation.

| Signal | Category | Requirement | Placement |
|---|---|---|---|
| **Proof-of-pumpage / gallon meter explanation** | Competence + Risk Reduction | Client has the equipment; requires photo of meter in use | Hero level; Why AJ section §5; Process step 2 naming the meter explicitly. The design mandate: make this the brand. |
| **"What to Expect" 5-step process walkthrough** | Character | No external dependency — buildable from intake knowledge | Homepage §6 Process section. Named at step 2: the gallon meter records your tank's volume. |
| **Transparent pricing guidance page** | Character | Even a "how pricing works" explanation without exact rates | Interior page only (not homepage section). High-intent bounce prevention. |
| **TCEQ-approved disposal callout** | Risk Reduction | Client already states this | About page + footer note. Environmental responsibility signal for commercial clients. |
| **Real estate inspection dedicated page** | Competence | Service exists; needs dedicated page | Services navigation + landing page. Referral channel for agents; zero competitor pages. |

---

### Trust Gap Analysis

| Entity | Visibility Proxy | Trust Score (weighted, /285 scaled to 100) | Trust Gap | Implication |
|---|:---:|:---:|:---:|---|
| C3 Superior Septic | 85 | 42 | **+43** | High visibility, low trust — vulnerable to an AJ with better trust signals |
| C4 A+ Septic | 90 | 33 | **+57** | Highest visibility in market, weakest trust conversion — most exploitable gap |
| C5 Action Septic | 60 | 30 | **+30** | Commercial logos boost Social Proof but weak Competence + Risk Reduction |
| C2 Aloha Septic | 40 | 19 | **+21** | Character is their strength but Social Proof thin |
| C1 Hill Country WW | 20 | 9 | **+11** | Minimal presence; trust near zero |
| **AJ Current Site** | **25** | **4** | **+21** | Low visibility AND low trust — neither metric working |

*(Source: trust-analysis.md §5 Trust Gap Scores — fetched 2026-04-17. Visibility proxy = site richness inferred from competitive-analysis.md §1 profiles.)*

**Trust Gap Interpretation:** AJ's trust gap (+21) is the same as Hill Country Wastewater's — both are undermarketed. But AJ's gap hides a key asymmetry: AJ possesses more valuable trust-signal assets (gallon meter, insurance, founder experience, TCEQ compliance) than any competitor, and is simply not surfacing them. Deploying the 7 MUST signals alone would project an estimated trust score of 60–70/100 — overtaking every competitor without requiring new capabilities.

**Design implication:** This is not a creativity problem. It is a visibility problem. The substance exists. The rebuild is the act of making the substance visible.

---

### Trust Deployment Pattern — Three-Band Distribution

Following the Parker & Sons / Genz-Ryan pattern documented in design-research.md §4:

1. **Trust Strip (homepage position 2 — below hero):** First credibility hit. Rational, credential-forward. Items: TCEQ License · Licensed & Insured · 40+ Years Combined Experience · [N]-Star Google Rating · [N] Reviews · 24/7 Emergency Service. Dark navy background. Icon + short text per item.

2. **Testimonials (homepage position 9 — mid-page):** Emotional trust. Named customer quotes with star ratings and review dates. 3-column desktop, 1-column mobile. "What real customers say" — not marketing language.

3. **Footer (homepage position 12 — page end):** Rational trust confirmation. TCEQ license number, insurance statement, "Serving Central Texas Since 2018," copyright. The footer is the third time the visitor sees the credentials — by this point, they have been shown, not told, that AJ is trustworthy.

*(Source: design-research.md §4 — "Progressive trust distribution: trust strip → testimonials → footer triple-deployment pattern"; design-research.md §9 — Parker & Sons and Genz-Ryan as reference models — fetched 2026-04-17)*
