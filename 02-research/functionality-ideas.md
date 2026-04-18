# Functionality Ideas — AJ Liquid Waste Haulers

**Prepared:** 2026-04-17
**Stack constraint:** Hugo + vanilla CSS + vanilla JS. No React, Vue, or heavy libraries.
**Primary goal:** Drive form submissions, phone calls, and repeat visits.
**Secondary goal:** Make AJ feel more capable and trustworthy than competitors.

---

## Bucket 1: Lead-Capture Tools

### 1. Multi-Step Quote Request Form
**Description:** A 3-step guided form: (1) service type selector with icon buttons, (2) basic details (address, tank size if known, urgency), (3) contact info and preferred callback time. Shows a progress bar across steps.
**Audience:** Residential homeowners, restaurant managers, real estate agents.
**Build feasibility:** Fully buildable. Three `<div>` panels toggled with vanilla JS `classList.toggle()`. No library needed.
**Trust/conversion rationale:** Multi-step forms consistently outperform single-page forms because each micro-commitment reduces abandonment. Guiding users through service selection also pre-qualifies the lead and gives AJ better intake information before the callback.

---

### 2. "Do We Serve Your Area?" ZIP Code Widget
**Description:** A small text input that accepts a ZIP code. Vanilla JS checks the entered code against a hardcoded array of served ZIP codes and returns an instant "Yes, we serve [City]!" or a friendly "We may be able to help — call to confirm" message.
**Audience:** Rural homeowners on the edge of the service area (Wimberley, Marble Falls, Blanco corridor).
**Build feasibility:** Fully buildable. Static JS array of ~40 ZIP codes, no API needed. Output updates a `<p>` element on input.
**Trust/conversion rationale:** Prevents users from leaving the site uncertain. A positive result immediately prompts a booking CTA; a soft "call to confirm" still captures the lead. Particularly valuable for the Hill Country corridor where service boundaries are fuzzy.

---

### 3. Emergency Text-Me-Back Button
**Description:** A high-contrast "Emergency? Text us now" button (mobile-first) that deep-links to `sms:5129560047` with a pre-filled message body ("I need emergency septic service at [address]"). On desktop, shows the number prominently with a copy-to-clipboard icon.
**Audience:** Homeowners with a backed-up system, property managers, anyone calling after hours.
**Build feasibility:** Fully buildable. `<a href="sms:5129560047?body=...">` with JS clipboard fallback for desktop. Zero libraries.
**Trust/conversion rationale:** AJ already offers 24/7 emergency service via text — this feature just surfaces it visually and removes friction. Emergency pumping commands premium rates; capturing these calls is high-value lead acquisition.

---

### 4. Appointment Request Calendar Widget (Lightweight)
**Description:** A simple date-picker built with a vanilla JS month/week grid. User selects a preferred date and time window (AM/PM/flexible) — no real-time availability, just preference capture. Form data emails to AJ for confirmation.
**Audience:** Residential homeowners scheduling routine pumping, restaurant managers scheduling grease trap service.
**Build feasibility:** Fully buildable with vanilla JS. Render a calendar grid in JS, mark weekdays only (Mon–Fri per intake hours), submit via a standard HTML `<form>` `action`. If real-time booking is needed later, replace with Calendly embed (future scope).
**Trust/conversion rationale:** Letting users self-serve a preferred date reduces the "I'll call tomorrow" delay that kills leads. The form still requires human confirmation, so AJ retains scheduling control.

---

## Bucket 2: Educational / Trust-Builders

### 5. Pumping Frequency Estimator
**Description:** A two-input calculator: household size (1–8+ people) and tank size (500–2,000+ gallons, with a "don't know" option that defaults to a conservative estimate). Outputs a recommended pumping interval in years and a call-to-action ("Your tank is due — schedule now").
**Audience:** Residential homeowners, new homebuyers unfamiliar with septic maintenance.
**Build feasibility:** Fully buildable. A simple lookup table encoded in JS (EPA guidance on pumping frequency by household size and tank volume). Two `<select>` elements, one `<p>` output.
**Trust/conversion rationale:** This is the single most useful free tool a septic company can offer. It creates a "now I need to act" moment when the result shows the tank is overdue. It also positions AJ as the educator, not just the vendor — consistent with their stated tone. Drives repeat visits annually when homeowners re-check.

---

### 6. Septic Tank Size Lookup by Home Age + Bedrooms
**Description:** User inputs home construction decade (pre-1970, 1970s, 1980s, etc.) and number of bedrooms. Output is the likely tank size range based on Texas/Hays County code standards of that era, with a note to verify with records.
**Audience:** Homeowners who don't know their tank size (very common input), real estate buyers.
**Build feasibility:** Fully buildable. Static JS lookup table. Pairs naturally with the Pumping Frequency Estimator (idea 5) — the two can be combined into one "Septic Health Check" widget.
**Trust/conversion rationale:** Solves a real pain point (most homeowners have no idea what size tank they have). Demonstrates expertise, creates utility that competitors don't offer, and feeds directly into the frequency estimator result.

---

### 7. "What Happens If You Skip Pumping?" Interactive Visual
**Description:** A 4-stage illustrated timeline showing septic system health from "well-maintained" to "drain field failure" — each stage toggled by clicking Next/Prev buttons. Plain SVG or CSS-illustrated stages (no images needed). Ends with a cost-of-neglect figure ("Emergency replacement: $10,000–$30,000+") versus routine pumping cost.
**Audience:** Cost-sensitive homeowners who keep deferring service.
**Build feasibility:** Fully buildable. Four `<div>` panels with CSS transitions, toggled by vanilla JS. SVG illustrations drawn inline.
**Trust/conversion rationale:** Transforms abstract risk into a visceral cost comparison. "Routine pumping: ~$350. Drain field replacement: $15,000+" is a powerful motivator. This type of fear-then-relief content structure is effective in home services verticals.

---

### 8. Real Estate Buyer's Septic Checklist
**Description:** A downloadable (or printable) checklist PDF linked from the real estate inspection page. Items include: age of system, date of last pumping, tank material, permit records, leach field condition flags. Formatted as a one-page checklist with AJ branding and contact info.
**Audience:** Real estate agents, home buyers, buyer's agents.
**Build feasibility:** Fully buildable. A styled HTML page with `@media print` styles that renders cleanly as a PDF. Optionally gated behind a short email-capture form to build a realtor contact list.
**Trust/conversion rationale:** Realtors are repeat referral sources — they send multiple clients per year. A branded checklist that agents hand to every buyer keeps AJ top-of-mind at every transaction. Gating it collects a warm professional audience.

---

### 9. Grease Trap Sizing Guide for Restaurants
**Description:** A simple form: type of establishment (full-service restaurant, fast-casual, bar, food truck), seats or daily covers, and cooking method (fryer-heavy, grill, low-grease). Output: recommended trap size range in gallons and suggested pumping frequency. Includes a note referencing local health code requirements.
**Audience:** Restaurant owners, facility managers, new food-service operators.
**Build feasibility:** Fully buildable. Static JS lookup table based on industry rule-of-thumb sizing guidelines (not a live code database). Add a disclaimer to verify with local authority.
**Trust/conversion rationale:** Most restaurant operators don't know their trap is undersized until a health inspector flags it. This tool creates urgency and demonstrates commercial expertise that generic haulers lack. Positions AJ as a knowledgeable partner, not just a pump truck.

---

## Bucket 3: Service-Area Tools

### 10. Interactive Service Map
**Description:** A static SVG map of the Hill Country corridor with service cities highlighted (Austin, Dripping Springs, Driftwood, Kyle, New Braunfels, and surrounding areas). Clicking a city name scrolls to or links to that city's landing page. No Google Maps API required.
**Audience:** All audiences checking coverage.
**Build feasibility:** Fully buildable. A hand-crafted SVG of the target counties (Hays, Travis, Comal) with named `<path>` elements styled via CSS and linked via `<a>` tags. No external API. Could alternatively be a CSS grid of city pill-buttons.
**Trust/conversion rationale:** Visual service maps signal scale and legitimacy. Competitors relying on text lists look thinner by comparison. The linked city pages also support local SEO — each city landing page captures "septic pumping [city]" searches.

---

### 11. City Landing Pages with Local Context
**Description:** A Hugo template that generates one page per served city (Austin, Dripping Springs, Driftwood, Kyle, New Braunfels, Wimberley, etc.) with city-specific copy, local regulatory notes (TCEQ/county references), and a localized CTA. Linked from the service map and a city grid on the service area page.
**Audience:** Homeowners searching "[city] septic pumping."
**Build feasibility:** Fully buildable. Hugo's data-driven page generation (`data/locations/cities/[slug].yaml`) plus a shared layout template. Standard Hugo pattern.
**Trust/conversion rationale:** Primary SEO capture for high-intent local searches. Each city page ranks independently and funnels to a booking call or form. This is table-stakes for any multi-city home-services business.

---

## Bucket 4: Commercial-Specific Tools

### 12. Restaurant Grease Trap Maintenance Schedule Builder
**Description:** User inputs establishment type, trap size, and average weekly covers. Output: a suggested pumping schedule (e.g., "every 4 weeks") with a "Set a reminder" prompt that generates an `.ics` calendar file for download. The `.ics` file auto-populates a recurring event with AJ's phone number in the notes field.
**Audience:** Restaurant managers, facility managers, commercial kitchen operators.
**Build feasibility:** Fully buildable. `.ics` file is plain text generated client-side in JS and downloaded via a `<a download>` link. No library required.
**Trust/conversion rationale:** A downloadable maintenance calendar with AJ's name and phone baked in is a persistent brand touchpoint that lives on the manager's calendar. Every reminder is an implicit ad. Reduces the chance a competitor gets called when service is due.

---

### 13. Winery / Brewery Waste Volume Estimator
**Description:** Inputs: type of operation (winery, brewery, distillery), annual production volume in barrels/gallons/cases, and processing method. Output: estimated annual liquid waste volume and a recommended service frequency. Includes a note about TCEQ disposal requirements.
**Audience:** Winery, brewery, and distillery operators in the Dripping Springs and wider Hill Country corridor.
**Build feasibility:** Fully buildable. Static JS calculation based on industry waste-generation ratios (e.g., ~3–10 gallons of wastewater per gallon of wine produced). Outputs a range, not a precise number.
**Trust/conversion rationale:** No generic septic company offers this. The Dripping Springs area has a significant and growing craft beverage cluster — this tool signals specialized expertise to an audience that is actively underserved and willing to pay for a reliable, knowledgeable hauler.

---

## Bucket 5: Transparency / Trust

### 14. "What to Expect on Pumping Day" Step-Through
**Description:** A 5-step illustrated process walkthrough: (1) We arrive and locate access, (2) We record your tank's volume with our electronic meter, (3) We pump and inspect visible components, (4) We review findings with you on-site, (5) Waste goes to a TCEQ-approved facility. Each step toggles on Next/Prev click. Reinforces the electronic meter differentiator at step 2.
**Audience:** First-time customers (residential), new homeowners, anyone anxious about the process.
**Build feasibility:** Fully buildable. Same vanilla JS panel toggle as idea 7. CSS step-indicator at the top.
**Trust/conversion rationale:** Transparency about process is a primary anxiety-reducer for home-service purchases. Surfacing the electronic meter differentiator in a visual process narrative is more effective than a bullet point in a feature list. Directly addresses the "what are they actually doing to my property" concern.

---

## Bucket 6: Sticky Conversion

### 15. Mobile CTA Bar (Persistent Bottom Bar)
**Description:** On mobile viewports, a fixed bottom bar with two tappable zones: "Call Now" (tel: link) and "Request Quote" (links to the multi-step form). Hidden on desktop where a header CTA suffices. Appears after the user scrolls past the hero.
**Audience:** All mobile visitors (majority of local home-service searches).
**Build feasibility:** Fully buildable. `position: fixed; bottom: 0` with a CSS media query for mobile only. Scroll-triggered appearance via a small vanilla JS `IntersectionObserver` on the hero section.
**Trust/conversion rationale:** Local home-service searches are overwhelmingly mobile. A persistent call-to-action eliminates the need to scroll back to the header. This is the highest-ROI single addition to any mobile-first local business site.

---

## Top 5 to Implement in v1

### Priority 1: Pumping Frequency Estimator (Idea 5)
**Justification:** Highest utility, lowest build cost, broadest audience reach. Every residential customer — current or prospective — has a reason to use it. It creates a "I need to act now" moment when results show an overdue system, and it positions AJ as the trusted educator in the vertical. Can be combined with the tank size lookup (idea 6) into a single "Septic Health Check" widget.

### Priority 2: Mobile CTA Bar (Idea 15)
**Justification:** Applies to every page, every visitor, at zero UX cost to desktop users. Local home-service searches are heavily mobile. A persistent dual-CTA bar (call / quote) directly captures the conversion intent that exists at every scroll depth. Highest conversion-per-hour-of-build-effort ratio on this list.

### Priority 3: Multi-Step Quote Request Form (Idea 1)
**Justification:** AJ's current site has no form at all — every lead requires a phone call. A guided multi-step form captures after-hours intent (homeowners discover a problem on a Sunday evening, can't call, but will fill out a form). The service-type selector also pre-qualifies leads and makes AJ's callback more efficient.

### Priority 4: "What to Expect on Pumping Day" Step-Through (Idea 14)
**Justification:** Directly surfaces the electronic gallon meter differentiator — the single strongest trust signal AJ has that competitors cannot easily match. First-time customers have high anxiety about a truck showing up and doing unknown things to their property. A transparent process narrative converts hesitant prospects and reduces "how much will this really cost?" objections.

### Priority 5: ZIP Code Service-Area Widget (Idea 2)
**Justification:** The Hill Country geography creates genuine uncertainty about coverage. A visitor who can't confirm AJ serves their area will go find a competitor who makes it obvious. This widget turns that uncertainty into a conversion moment in under two seconds, at trivial build cost.

---

### Future Scope (Not v1)

- **Real-time appointment booking** — requires a booking API or integration (Calendly, Acuity). The lightweight date-preference capture form (idea 4) is the v1 bridge; replace when AJ is ready to connect a live calendar.
- **Real estate agent quote portal** — a dedicated login-gated portal for agent repeat use. Requires authentication, which is out of scope for a static Hugo site. Could be addressed with a third-party form tool or a separate authenticated app in a future phase.
- **Google Maps-based interactive map** — idea 10 covers this with a static SVG approach for v1. A dynamic Google Maps embed with clickable service zones requires API key management and is not necessary for the core use case.
