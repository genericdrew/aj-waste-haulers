# AJ Liquid Waste Haulers — Design Character Bible

**Purpose:** Section-by-section rubric of what the site IS and what it is NOT. Used by review agents in Stage 7 to verify the build matches its brief. Also used by the builder (main session) as a guardrail during Stage 6.

**Anchor mood:** The family-owned Hill Country septic business that keeps receipts. Premium through restraint, not flash. The waiting area at a good independent auto mechanic, not a dental clinic. A well-made work boot, not a sneaker.

---

## Global Character

### IS
- **Restrained.** More white space than you think is needed. Let the gallon-meter photograph breathe.
- **Direct.** Headlines state facts. Copy states facts. No vague uplift.
- **Local.** Every page has Hill Country specificity somewhere visible — a place name, a TCEQ reference, a landmark, a neighborhood.
- **Grounded.** Earth-tone palette (navy, bone, terracotta) not sky-blue generic.
- **Human.** Real photos. Real founders. Real numbers. No clip-art trucks, no stock hands-on-a-meter.
- **Confident without chest-beating.** States what's true and moves on.

### IS NOT
- A plumbing franchise template recolored.
- A SaaS landing page.
- A quilted-pattern small-business theme with a script font.
- A rescue-dog-charity soft-blob aesthetic.
- An Instagram-first playful brand with emoji.
- A carousel-driven "features wall" pretending the business has 15 services when it has 5.

---

## Section 1 — Hero

### IS
- A single strong headline that names the proof-of-pumpage idea.
- A background photograph: AJ truck in a recognizable Hill Country landscape. Limestone, live oaks, open sky, gravel drive. Natural light. Mid-day or golden hour — not blue-hour dramatic.
- A primary CTA (terracotta-600 button, "Get a Free Quote") and a phone CTA as secondary.
- One eyebrow line above the headline, Inter SemiBold uppercase, terracotta: "Measured. Documented. Proven."
- Quiet. The hero should feel like it's speaking in a normal voice, not shouting.

### IS NOT
- A carousel.
- A video autoplay.
- A photograph of a stylized gauge dial in a vacuum space. Show the actual truck or the actual meter on the actual truck.
- A gradient overlay covering 80% of the photo. 30–40% navy gradient for legibility is fine.
- Three CTAs of equal visual weight. One primary wins.
- A stock photo of a smiling woman in a yellow hard hat.
- A "book an appointment" calendar widget embedded inside the hero.

---

## Section 2 — Trust Strip

### IS
- Dark navy-900 horizontal band directly under the hero. No margin above.
- 5 items, evenly spaced on desktop, 2-column grid on mobile.
- Each item = small line icon (terracotta or bone, not navy) + short label + value.
- One-line max per item. If a value needs two lines, rewrite it.
- Font: Inter body-sm, bone-50 on navy-900, letter-spacing 0.02em.

### IS NOT
- A row of colored badges from BBB, Angi, HomeAdvisor crammed together.
- A bright blue strip with rotating text.
- A section with a headline above it calling out "Why Choose Us" — the trust strip doesn't need a headline, it IS the signal.
- A strip with 8+ items that forces horizontal scroll on mobile.

---

## Section 3 — Audience Pathways

### IS
- Three cards. Exactly three. Labeled: Homeowners / Restaurants & Commercial / Wineries, Breweries & Distilleries.
- Each card has a simple line icon, a short description, and a text-link CTA.
- Equal visual weight across the three cards — no card dominates unless there's a real reason.
- bone-50 background. Cards on bone-100 with navy-500 border-top 4px.
- Asymmetric content length across the 3 cards (voice §10d: break parallel structure) — a little variance proves a human wrote it.

### IS NOT
- A grid of 6 audience tiles.
- A decorative illustration on each card that dwarfs the copy.
- Cards that all start with "We..."
- Cards that look identical in structure. Vary slightly.

---

## Section 4 — Services Grid

### IS
- Five cards, 3-column on desktop, 2-column tablet, single-column mobile.
- Each card: line icon (navy-700), service name (Playfair h3), 1–2 sentence description, "Learn more →" link.
- Cards rest on bone-100. Subtle shadow-sm.
- Hover: card lifts to shadow-md, cursor pointer on the whole card.

### IS NOT
- Six cards because "we always have six." Five is right.
- Stock icons from an icon library that look like they're for a marketing agency.
- Long paragraph descriptions. Keep it 1–2 sentences.
- Pricing on the cards. Pricing has its own page.

---

## Section 5 — Why AJ / Proof-of-Pumpage

### IS
- Dark section. navy-700 background.
- A large, well-lit, close-cropped photograph of the actual gallon meter on the truck. This is the hero image of the brand.
- Four differentiator pillars, stacked 2×2 on desktop, single column mobile.
- Each pillar: small terracotta icon, Playfair heading-lg title, Inter body-md description.
- The section title names the meter explicitly. No metaphor. "We Measure Every Drop" works.

### IS NOT
- A generic "Why Choose Us" with four icon-and-text cards about integrity, quality, experience, satisfaction.
- A stock photograph of a digital readout.
- An animated counter rolling up to "1,000,000 gallons pumped."
- A video.

---

## Section 6 — Process + Estimator

### IS
- Two halves in one section with a clear internal divider.
- Top half: 5 steps, horizontal on desktop (numbered, line-connected), vertical on mobile. Step 2 visibly names the gallon meter.
- Bottom half: the estimator form. Two `<select>` inputs + one result paragraph. Minimal chrome. Feels like a tool, not a form.
- bone-50 background. Full width.

### IS NOT
- A timeline with parallax scroll effects.
- An estimator that requires email to see the result.
- A process with 8+ steps. Five is the cap.
- A process that opens with "Step 1: You call us" stating the obvious.

---

## Section 7 — Testimonials

### IS
- Bone-100 background. Cards on bone-50.
- 3 cards on desktop, 1-column mobile.
- Each card: 5-star row at top (terracotta or amber), quote body in Inter body-lg (slightly larger than standard body), attribution (first name + last initial, date, source), and a quote mark flourish in terracotta.
- If real testimonials aren't yet imported, render an empty state: "We're pulling our Google reviews in now. Come back soon." with a link to Google.

### IS NOT
- A row of fabricated quotes.
- A sliding carousel.
- Photographs of the people quoted (unless explicitly permitted).
- A testimonial that quotes a last name in full.

---

## Section 8 — Service Area

### IS
- A simple static SVG map of the Hill Country service triangle (Hays, Travis, Comal counties with primary cities labeled). Not an embedded Google Maps tile.
- A city grid to the right on desktop, stacked below map on mobile.
- 5 primary city links, then a secondary grouping of smaller communities.
- A ZIP code widget: single `<input>` + "Check" button, inline result below.
- Hill Country character — maybe a subtle topo-line pattern behind the map.

### IS NOT
- A Google Maps iframe.
- A Leaflet map with 50 pins.
- An "Apply now" form pretending to be a service area check.
- A giant list of 100+ cities and counties.

---

## Section 9 — CTA Banner

### IS
- Dark navy-900 section.
- Single headline (Playfair display-lg), one body line, two CTA buttons (primary bone-50 fill, secondary outline in bone-50).
- Generous padding — this section breathes.
- A supporting line in smaller Inter below the buttons: service area + 24/7 emergency note.

### IS NOT
- A repeat of the hero.
- A form embedded in the banner. Link to the contact page; don't repeat the form.
- A section that tries to "close" with urgency copy like "Don't wait!" in all caps.

---

## Footer

### IS
- navy-900 background.
- Multi-column on desktop: logo+phone | services | company | resources | top cities.
- Below columns: trust line + copyright.
- Social icons (FB, IG) as a small row of line icons, bone-50 on navy-900.

### IS NOT
- A wall of 10 columns with 50 links.
- A newsletter signup box.
- Contact information in 4 different formats.

---

## Interior Pages — General

### Every interior page IS
- On its own dedicated layout (not `_default/single.html`).
- Pulling every string from a data file.
- Opening with a short hero or header (eyebrow + H1 + short body).
- Ending with a CTA banner or CTA block that links to /contact/.
- Visually consistent with the homepage design system — same tokens, same type, same radii, same shadows.

### Every interior page IS NOT
- A long scroll of markdown with no visual structure.
- A "coming soon" placeholder.
- A page that duplicates what the homepage already says.

---

## About Page — specific

### IS
- Founder-forward. Photos of James and Gerry if available; named cards with bio paragraphs if not.
- A short founding story (one paragraph, voice §10c: like explaining to a neighbor).
- A credentials block — TCEQ Licensed / Insured / TCEQ-Approved Disposal / Dripping Springs HQ — styled as discrete cards, not a bulleted list.
- A values section — 3 items, each with a short title + 1–2 sentence description.
- A CTA at bottom.

### IS NOT
- A wall of mission/vision/values corporate boilerplate.
- A stock photo of a "team" of 8 people.
- A timeline of the company's founding in quarterly milestones.

---

## Contact Page — specific

### IS
- A form on the right/primary position, contact details on the left/secondary.
- Clean form — 7 fields maximum, logical progression (who you are → what you need → when).
- A "Privacy" one-liner below the submit button.
- Business hours + emergency-text note visible.

### IS NOT
- A form with 20 fields including "how did you hear about us."
- A form with conditional logic branching on every answer.
- A pop-up captcha that blocks submission.

---

## FAQ Page — specific

### IS
- Accordion pattern — single-question expand, keyboard-accessible, ARIA-correct.
- Grouped by topic with clear H2 headers (Septic / Grease Traps / Emergency / Pricing).
- `FAQPage` JSON-LD schema on the page.

### IS NOT
- A single long bulleted list of questions.
- A search-as-you-type interface.

---

## Service Detail Pages — specific

### IS
- Hero with service name + single-sentence positioning.
- "What we do" block with bullet list of specifics.
- "When / compliance / commercial context" block where applicable.
- A faqs block of 4 questions specific to this service (drawn from the service's data file).
- Related services block (2 cards).
- Schema: `Service` with `provider` = LocalBusiness, `areaServed` = cities list.

### IS NOT
- A copy-paste of the services index card description expanded to 500 words.
- A page with no schema markup.
- A page that links only back to the services index — related service cross-links expected.

---

## City Service-Area Pages — specific

### IS
- Hero that names the city and the value prop for that city (e.g., "Dripping Springs septic, by the Dripping Springs locals").
- At least one fact a competitor couldn't get from a map (Hays Trinity GCD, Comal 1-acre rule, Austin 90-day rule, Canyon Lake's 80+ 1970s subdivisions, etc.).
- Neighborhood and landmark list.
- A typical-jobs list specific to this city.
- `LocalBusiness` schema with `areaServed` specific to the city.

### IS NOT
- A template with the city name swapped in and nothing else different.
- A page that duplicates the homepage service list.
- A page that has no local specificity beyond the city name.

---

## Review Gate (Stage 7)

Before any review agent signs off, the build must pass:

- [ ] Every section matches its IS list.
- [ ] Zero IS NOT violations on any section.
- [ ] Global character holds — no "feels like a plumbing franchise" slippage.
- [ ] Typography pairing is Playfair + Inter only.
- [ ] Palette is Earthen Luxe only.
- [ ] Every photograph is authentic — no stock, no clip-art.
- [ ] The gallon meter is visible somewhere above the fold and re-appears in the Why AJ section.
