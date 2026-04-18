# CLAUDE.md — AJ Liquid Waste Haulers Design System

Authoritative spec for the Hugo build. Every Stage 6 prompt reads this. If a rule here conflicts with anything in `build-framework-ai-optimized/`, this file wins for this client.

---

## 1. Project Context

**Client:** AJ Liquid Waste Haulers, LLC — family-owned septic and liquid waste hauler based in Dripping Springs, TX. Founded 2018 by James Ashman and Gerry Jones. 40+ years combined experience. Services: septic pumping, grease trap cleaning, beverage-industry waste, real estate inspections, 24/7 emergency. Service area: Dripping Springs, Austin, Kyle, New Braunfels, Driftwood (Hays, Travis, Comal counties).

**Thesis (strategic-validation.md §5):** AJ is the only Hill Country liquid-waste operator that proves every service call with a truck-mounted electronic gallon meter — in a market where even the 43-year incumbent can't show homeowners the evidence they need to trust a stranger with their most critical hidden infrastructure.

**Positioning line:** "The Hill Country's only proof-of-pumpage septic service."

**Fear/Desire pair (trust-analysis.md §4):** Fear = invisible overcharging + catastrophic system failure. Desire = frictionless, permanent, fairly-priced resolution with proof. The gallon meter is the mechanical answer to the primary fear.

---

## 2. Tech Stack

- **Generator:** Hugo (extended) — static site, server-rendered templates.
- **CSS:** Vanilla CSS with custom properties. No Tailwind, no Bootstrap, no SCSS.
- **JS:** Vanilla, minimal. No React / Vue / jQuery / heavy libraries. Progressive enhancement only.
- **Fonts:** Self-hosted WOFF2. No Google Fonts CDN hotlink.
- **Images:** Hugo Image Processing Pipeline for responsive srcsets. AVIF + WebP fallback to JPEG.
- **No build tooling outside Hugo.** No npm, no webpack, no bundler for v1.

---

## 3. Color Palette (12 tokens)

Palette name: **Earthen Luxe.** Deep navy + terracotta + bone, borrowed from premium home-services peers (design-research.md §10). Native to the Hill Country palette — limestone, live-oak shadow, clay soil — without being a cliché.

| Token | Hex | Usage | Rationale |
|---|---|---|---|
| `--color-navy-900` | `#0F1B2E` | Headlines, dark sections, nav background when sticky-dark | Authoritative, premium; distinguishes from the interchangeable mid-blue the local competitive field uses. |
| `--color-navy-700` | `#1C2E4A` | Primary brand, button primary fill, footer background | Core brand color. Sits well alongside terracotta and bone without fighting either. |
| `--color-navy-500` | `#2F4870` | Hover state for navy-700, secondary surface | Tonal variation so large dark blocks don't flatten. |
| `--color-terracotta-600` | `#C07B3A` | Accent, primary CTA fill on light backgrounds, eyebrow text | Hill Country earth tone; warm; differentiates from the gradient-teal cliché of the vertical. |
| `--color-terracotta-800` | `#8A5525` | Hover state for terracotta-600, link focus ring | Deeper clay tone, enough contrast for WCAG AA on bone. |
| `--color-bone-50` | `#FAF6EF` | Page background (light), card fill | Warmer than pure white; reads as considered, not sterile. |
| `--color-bone-100` | `#F2EDE4` | Secondary surface, trust strip background variant, section alternation | Slightly deeper bone for visual pacing between white-ish sections. |
| `--color-sage-500` | `#6B8E6B` | Success state, positive affordance, eco/compliance iconography | The vertical is genuinely environmental — sage lands credibly without going "recycling green." |
| `--color-amber-500` | `#D9A441` | Star ratings, emergency callout highlight, "overdue" state in estimator | Warm, attention-pulling, avoids the harsh-red trope. |
| `--color-charcoal-900` | `#1F1F1F` | Body text on light backgrounds | Near-black, warmer than pure black, pairs with bone. |
| `--color-gray-600` | `#5A5A5A` | Secondary body text, captions, metadata | Enough contrast on bone-50 for WCAG AA. |
| `--color-gray-200` | `#E3E0D9` | Borders, hairlines, dividers | Tinted toward bone so borders don't read cold. |

**Usage rules:**
- Body background = `--color-bone-50`.
- Dark sections (Why AJ, CTA Banner, Footer) = `--color-navy-700` or `--color-navy-900`.
- Primary CTA on light = terracotta-600. Primary CTA on dark = bone-50 fill with navy-900 text.
- Never `--color-amber-500` as a block background; it's an accent only.
- Never adjust colors inline via hex. All color use via `var(--color-*)`.

---

## 4. Typography

**Display:** **Playfair Display** (self-hosted WOFF2) — humanist serif, restrained weight contrast. Used for H1, H2, and eyebrows. Never body.

**Body:** **Inter** (self-hosted WOFF2) — clean neo-grotesque sans. Used for everything else (body, H3–H6, buttons, captions, nav).

**Pairing rationale:** Playfair's calligraphic warmth softens the industrial subject matter and signals "this is a real business with care," differentiating from the generic-Oswald + Roboto franchise-plumbing typography pattern. Inter keeps utility copy legible and neutral (design-refinement-prompt.md §5).

**Type scale (rem, 16px base):**

| Token | Size | Line-height | Weight | Use |
|---|---|---|---|---|
| `--text-display-xl` | 4.5rem / 72px | 1.05 | 600 | Hero H1 only |
| `--text-display-lg` | 3rem / 48px | 1.1 | 600 | Section H2 |
| `--text-display-md` | 2.25rem / 36px | 1.15 | 600 | Sub-section / card H3 on feature cards |
| `--text-heading-lg` | 1.5rem / 24px | 1.25 | 600 | Card titles, H3 in body |
| `--text-heading-md` | 1.25rem / 20px | 1.3 | 600 | H4, callout titles |
| `--text-body-lg` | 1.125rem / 18px | 1.6 | 400 | Lead paragraphs |
| `--text-body-md` | 1rem / 16px | 1.6 | 400 | Body |
| `--text-body-sm` | 0.875rem / 14px | 1.5 | 400 | Captions, metadata |
| `--text-eyebrow` | 0.75rem / 12px | 1.2 | 600 uppercase, letter-spacing 0.12em | Section eyebrows (Playfair or Inter — pick one and keep it consistent; recommend Inter for eyebrows, Playfair for headlines) |

**Mobile scale:** At <768px, `--text-display-xl` drops to 3rem, `--text-display-lg` drops to 2.25rem.

**Rules:**
- Max two fonts loaded. Playfair Display + Inter. Nothing else.
- All-caps reserved for eyebrows and buttons. Never headlines, never body.
- No italics in body unless emphasizing a proper noun the reader will miss otherwise.

---

## 5. Radius Ladder

| Token | Value | Use |
|---|---|---|
| `--radius-none` | `0` | Trust strip dividers, hairlines |
| `--radius-sm` | `4px` | Form inputs, small tags |
| `--radius-md` | `8px` | Buttons, small cards |
| `--radius-lg` | `16px` | Service cards, feature panels |
| `--radius-xl` | `24px` | Hero image containers, testimonial cards |
| `--radius-pill` | `999px` | Pill badges, audience tags |

**Rule:** Never declare `border-radius` with a raw pixel value in component CSS. Always reference a token. G09 check.

---

## 6. Shadow System

Shadows carry navy tint, not gray. Subtle — we're not a SaaS dashboard.

| Token | Value |
|---|---|
| `--shadow-sm` | `0 1px 2px rgba(15, 27, 46, 0.06)` |
| `--shadow-md` | `0 4px 12px rgba(15, 27, 46, 0.08)` |
| `--shadow-lg` | `0 12px 32px rgba(15, 27, 46, 0.10)` |
| `--shadow-xl` | `0 24px 48px rgba(15, 27, 46, 0.14)` |
| `--shadow-inset` | `inset 0 2px 4px rgba(15, 27, 46, 0.06)` |

**Rule:** Never `box-shadow` with a raw color. Use tokens. G09 check.

---

## 7. Brand Shapes

- **Primary motif:** Horizontal rule with a small terracotta dot — used below eyebrows on section headers. 40px wide by 2px, terracotta-600, followed by a 6px × 6px circle of the same.
- **Divider motif:** Full-width bone-100 bar 1px, used to separate sections where a full background change would be visually heavy.
- **Emphasis device:** Terracotta-600 4px bottom-border on inline links that reward attention (callout links, testimonial attribution).
- **Disallowed shapes:** Gradients (except subtle noise textures for hero backgrounds), blobs, parallax waves, cartoon illustrations.

---

## 8. Section Sequence & Composition Score

**Homepage section sequence (9 content sections; header + footer excluded per Miller's Law):**

| # | Section | Rationale | Background |
|---|---|---|---|
| 1 | Hero | Primacy; thesis + proof-of-pumpage framing; primary CTA above fold | bone-50 with navy-900 overlay on hero image |
| 2 | Trust Strip | Immediate credibility (design-research.md §4); 5 items spanning 3 of 4 trust categories | navy-900 |
| 3 | Audience Pathways | Hick's Law — 3 cards for residential / commercial / beverage | bone-50 |
| 4 | Services Grid | Full service picture after audience segmentation | bone-100 |
| 5 | Why AJ (Proof-of-Pumpage) | Peak-End Rule — designed peak; dark; gallon meter hero imagery | navy-700 |
| 6 | Process + Estimator | 5-step process on top, estimator tool bottom — combines two high-value sections to stay under Miller's Law ceiling | bone-50 |
| 7 | Testimonials | Social proof after claims are made; within 3 sections of services (proximity) | bone-100 |
| 8 | Service Area | Geography after value + trust; map + city grid + ZIP widget | bone-50 |
| 9 | CTA Banner | Recency effect — designed end action; primary + phone CTA | navy-900 |

**Composition Score calculation:**

| Component | Score | Weight | Contribution |
|---|---|---|---|
| Miller (9 sections) | 85 | 0.25 | 21.25 |
| Hick (3 primary CTA destinations: quote form, phone, FAQ link — repeated) | 100 | 0.25 | 25 |
| Serial Position (Hero first, CTA last) | 100 | 0.25 | 25 |
| Proximity (process+estimator combined closer to services; testimonials 3 from services; CTA 2 from testimonials) | 75 | 0.15 | 11.25 |
| F-Pattern (value prop + CTA above fold; nav persistent) | 100 | 0.10 | 10 |
| **UX Law Compliance** | **92.5** | — | — |

- Industry Flow Match: 95 (Local Service pattern followed with Audience Pathways as +5 value-add; dark-section swap before process costs -5)
- Dependency Satisfaction: 100 (all after-rules met)
- Conflict Penalty: 0

**Final Score = (92.5 × 0.5) + (95 × 0.3) + (100 × 0.2) = 46.25 + 28.5 + 20 = 94.75**

**PASS — target ≥80 exceeded. Ship.**

**Visual pacing rule:** no 3+ consecutive sections with the same background. Sequence alternates bone-50 → navy-900 → bone-50 → bone-100 → navy-700 → bone-50 → bone-100 → bone-50 → navy-900. Passes.

---

## 9. Content Rules

- All display copy comes from `data/content.yaml`, `data/services/*.yaml`, or `data/locations/cities/*.yaml`. Layouts contain zero hardcoded text (G07).
- Voice rules from §10 apply to every string in data files.
- Never fabricate testimonials, review counts, or stats. `items: []` with a comment if not yet available.
- Every trust-strip value has a source comment in YAML (G03).
- Every CTA links to a real destination. No `href="#"` placeholders.

---

## 10. Content Voice

**10a. Sentence Structure.** Vary length. Mix short (5–8 words) with long (15–25). Never 3+ consecutive similar lengths. Use fragments. Vary paragraph length.

**10b. Banned filler phrases — NEVER use:**

"In today's world" · "When it comes to" · "It's important to note" · "At the end of the day" · "In order to" · "Whether you're looking for" · "We understand that" · "Your comfort is our priority" · "Look no further" · "Second to none" · "Peace of mind" · "In the heart of" · "Nestled in" · "Don't hesitate to" · "We strive to" · "Our team of experts" · "We take pride in" · "Your satisfaction is" · "Comprehensive solutions" · "Tailored to your needs" · "State-of-the-art" · "Cutting-edge" · "Seamless experience" · "Wide range of" · "One-stop shop" · "Exceed your expectations"

**Banned sentence openers:** "Furthermore" · "Moreover" · "Additionally" · "It's worth noting" · "That being said" · "Notably" · "Essentially" · "Certainly" · "In addition" · "As a matter of fact" · "Rest assured" · "Needless to say" · "Without a doubt" · "Interestingly" · "Importantly"

**10c. Tone for AJ.** Write like James Ashman or Gerry Jones explaining to a neighbor at the co-op. Direct, knowledgeable, educational, dry humor allowed. Take a stance. Be specific to the Hill Country — Dripping Springs, TCEQ, Hays County, drought, Distillery Capital, Wedding Capital. Use contractions. Never "best," "top," "premier," "world-class," "leading" without a verifiable fact behind it.

**10d. Structural patterns.** Vary narrative arcs across sections. Break the "We [verb]..." opener pattern — if 3+ descriptions start with "We," rewrite. Start with "Your home...", a fact, a question, a fragment.

**10e. Content review gate.** Before marking any section done:
- [ ] Read-aloud test: sounds like a person, not a brochure
- [ ] Burstiness scan: no 3+ consecutive similar-length sentences
- [ ] Banned phrase scan: zero matches from 10b
- [ ] Specificity check: every claim cites a number, cert, local detail, or fact
- [ ] Stance check: expresses a point of view
- [ ] Pattern check: card/list descriptions vary
- [ ] Contraction check: natural contractions present
- [ ] Punctuation audit: ≤2 em dashes per section, no semicolons, ≥1 question mark across the page

**10f. Punctuation.** Max 2 em dashes per section. Zero semicolons. Use question marks (1–2 per page minimum). Colons sparingly, only for setup. Ellipses max 1–2 across all copy. Em dashes must carry real information — delete any that introduce vague uplift like "— ensuring your comfort."

---

## 11. Hard Bans

These are automatic reviewer rejections. Do not attempt them.

**Visual / UI:**
- Autoplay video hero
- Carousel sliders (homepage or service pages)
- Parallax scrolling backgrounds
- Animated scroll-triggered "fade-in" cascades
- Gradient text on headlines
- Gradient backgrounds on CTAs
- Cartoon mascot illustrations
- Clip-art truck graphics
- Stock photography of any kind (fleet, team, job site must be authentic or omitted)
- Cookie-banner pop-ups (add a footer notice instead)
- Exit-intent modals
- Chat widget that auto-opens
- Emoji in headlines or body copy

**Typography:**
- Fonts other than Playfair Display + Inter
- Headlines in all-caps
- Body copy justified (left-aligned only)
- Line-height under 1.4 on body
- More than 2 font weights loaded per family

**CSS:**
- Raw hex values in new CSS (G08) — always use `var(--color-*)`
- Raw radius/shadow values (G09)
- `!important` except to override a vendor style
- Inline `style=""` attributes (except for Hugo image processor outputs)
- ID selectors in CSS

**Content:**
- Fabricated testimonials
- Fabricated stats (years, gallons, jobs)
- Banned phrases from §10b
- Claims that can't be sourced

**Performance:**
- Images over 400KB unoptimized
- Blocking third-party scripts in `<head>`
- Web fonts loaded synchronously (always `font-display: swap`)

---

## 12. Gate Check Commands

Run after every section build. Paste output in the Stage 6 confirmation.

```
G07: All display strings from content file. Only raw: HTML attrs, ARIA labels, structural text.
     grep -rn "[A-Za-z]" layouts/ | grep -v "{{" | grep -v "aria-" | grep -v "<!--" — inspect manually

G08: grep -n "#[0-9a-fA-F]\{3,6\}" assets/css/main.css — 0 matches outside :root tokens block

G09: grep -nE "border-radius: [0-9]+px|box-shadow: 0" assets/css/main.css — 0 matches outside :root tokens block

G10: Every section template has at least one CTA linking to a real href (contact form, tel:, or service page).

G10b: Interior pages use DEDICATED layouts (not _default/single.html or _default/list.html). Pull ALL text from data files. Have a CTA. Have schema. BLOCKER.

G11: Render at 375 / 768 / 1024 / 1440 — screenshot each. Confirm no horizontal overflow, no broken layouts.

G12: git status / git diff — changes ONLY in the section files declared for this build prompt.

G13: hugo --minify — 0 errors.
```

## 12b. Trust Signal Priority

**MUST — ship in v1 (from trust-analysis.md §6):**
1. **TCEQ Licensed** — Trust Strip + About page + Footer. Spans: Risk Reduction + Competence.
2. **Licensed & Insured** — Trust Strip + About page + Footer. Spans: Risk Reduction.
3. **40+ Years Combined Experience** — Trust Strip + About page Hero. Spans: Competence.
4. **Hill Country / Family-Owned Since 2018** — Trust Strip + About + Footer. Spans: Character.
5. **24/7 Emergency Service** — Trust Strip + Nav mobile bar + Emergency page. Spans: Character (accessibility) + Risk Reduction.

**SHOULD — ship when data available:**
6. Google Star Rating + Review Count — replaces one Trust Strip item once Google Business Profile is confirmed.
7. Named on-site testimonials with dates — Testimonials section + Reviews page.
8. Founder photos — About page.
9. Fleet / gallon meter photography — Why AJ section + Gallery page.

**NICE (first-mover):**
10. TCEQ license number displayed verbatim.
11. Manifest-on-request badge in Why AJ section.

**Placement pattern (design-research.md §4 triple deployment):**
- **Early (trust strip, position 2):** Rational credentials — licensed, insured, experience.
- **Mid (testimonials, position 7):** Emotional proof — named reviews.
- **Late (footer):** Credential reinforcement — license, insurance, service area.

---

## 13. File Structure

```
site/
├── archetypes/
├── assets/
│   ├── css/
│   │   ├── main.css              # all site styles
│   │   └── _tokens.css           # :root custom properties
│   └── js/
│       ├── site.js               # global (mobile nav, sticky CTA)
│       └── estimator.js          # pumping frequency estimator
├── content/
│   ├── _index.md                 # homepage
│   ├── about/_index.md
│   ├── contact/_index.md
│   ├── faq/_index.md
│   ├── how-we-work/_index.md
│   ├── what-to-expect/_index.md
│   ├── septic-pumping-cost/_index.md
│   ├── drought-and-septic/_index.md
│   ├── grease-trap-compliance/_index.md
│   ├── reviews/_index.md
│   ├── gallery/_index.md
│   ├── services/
│   │   ├── _index.md
│   │   ├── septic-tank-pumping.md
│   │   ├── grease-trap-pumping.md
│   │   ├── beverage-industry-waste.md
│   │   ├── real-estate-inspections.md
│   │   └── emergency-pumping.md
│   └── service-area/
│       ├── _index.md
│       ├── dripping-springs.md
│       ├── austin.md
│       ├── kyle.md
│       ├── new-braunfels.md
│       └── driftwood.md
├── data/
│   ├── content.yaml              # all display copy
│   ├── services/*.yaml           # service detail pages
│   └── locations/cities/*.yaml   # city SA pages
├── layouts/
│   ├── _default/
│   │   ├── baseof.html
│   │   ├── single.html           # generic fallback only
│   │   └── list.html             # generic fallback only
│   ├── partials/
│   │   ├── head.html
│   │   ├── header.html
│   │   ├── footer.html
│   │   ├── mobile-cta-bar.html
│   │   ├── schema/               # JSON-LD partials
│   │   └── sections/             # homepage sections
│   │       ├── hero.html
│   │       ├── trust-strip.html
│   │       ├── audience-pathways.html
│   │       ├── services.html
│   │       ├── why-aj.html
│   │       ├── process-estimator.html
│   │       ├── testimonials.html
│   │       ├── service-area.html
│   │       └── cta-banner.html
│   ├── index.html                # homepage template
│   ├── about/single.html         # dedicated
│   ├── contact/single.html       # dedicated
│   ├── faq/single.html           # dedicated
│   ├── services/
│   │   ├── list.html             # services index
│   │   └── single.html           # service detail
│   ├── service-area/
│   │   ├── list.html             # SA hub
│   │   └── single.html           # city page
│   └── page/
│       └── single.html           # for how-we-work, what-to-expect, etc.
├── static/
│   ├── images/
│   ├── fonts/
│   └── robots.txt
├── hugo.toml
└── CLAUDE.md                     # this file
```

---

## 14. Build Order

Each line is one Stage 6 prompt. Run gate checks after every item. Wait for confirmation before the next.

1. Foundation — `hugo.toml`, `baseof.html`, `_tokens.css`, fonts
2. Layout Shell — header, footer, mobile CTA bar, responsive nav
3. Hero section
4. Trust Strip section
5. Audience Pathways section
6. Services Grid section
7. Why AJ (Proof-of-Pumpage) section
8. Process + Estimator section (includes the vanilla-JS estimator)
9. Testimonials section
10. Service Area section (map + ZIP widget + city grid)
11. CTA Banner section
12. Services index page (dedicated layout)
13. Service detail template (build septic-tank-pumping first, then propagate)
14. About page (dedicated layout)
15. Contact page (dedicated layout + form)
16. FAQ page (dedicated layout + FAQPage schema)
17. How We Work / What to Expect / Pricing / Drought / Compliance pages (dedicated "page/single.html" layout)
18. Reviews + Gallery pages (dedicated layouts with empty states)
19. Service Area hub + 5 city pages
20. Schema + SEO metadata pass (LocalBusiness, Service, Place, FAQPage per blueprint)
21. Sitemap, robots, accessibility pass
22. Performance pass (image compression, font preload, LCP fix)

---

## 15. Work Instructions

| Doc | Path | When |
|---|---|---|
| Full context | `01-knowledge-base/aj-complete-context.md` | Any uncertainty about business / market / positioning |
| Design brief | `01-knowledge-base/design-refinement-prompt.md` | When making visual judgment calls |
| Homepage sequence | `02-research/homepage-sections.md` | Stage 6 section prompts |
| Page manifest | `02-research/page-type-manifest.md` | Interior page scoping |
| City specifics | `02-research/city-research.md` | City SA pages |
| Trust signals | `02-research/trust-analysis.md` | Stage 6 trust strip + placement decisions |
| Voice rules | CLAUDE.md §10 (this file) + `build-framework-ai-optimized/WI-content-voice.md` | Any copy change |
| Section blueprints | `03-design/blueprints/*.md` (Stage 5 output) | Every section build prompt |
| Character Bible | `03-design/character-bible.md` (Stage 5 output) | Design review gate |
| Changelog | `site/CHANGELOG.md` | After every change to the repo |

---

## 16. Changelog

Every time changes are made to the site repo, append an entry to `site/CHANGELOG.md`. Each entry: date (YYYY-MM-DD), summary, files changed, reason. Newest first. One entry per logical change. Multiple unrelated changes = multiple entries.

Format:
```
## YYYY-MM-DD — Summary

**Reason:** Why this change was made.

**Files changed:**
- `path/to/file.ext` — what changed
```

---

## 17. Accessibility & Performance Targets

**WCAG AA is the floor, not the ceiling.**

- Contrast: every text/background pair hits 4.5:1 minimum (body) or 3:1 (large text ≥24px bold or 18.67px+).
- Focus visible: every interactive element has a visible focus ring (terracotta-600 outline, 2px, 2px offset).
- Touch targets: every tappable element ≥44×44px.
- Keyboard nav: full site navigable by keyboard; skip link to main content.
- `prefers-reduced-motion`: disable any motion beyond base transitions.
- Alt text on every `<img>`. Decorative images get `alt=""`.
- Form labels: every input has a `<label>`. Error messages programmatically associated.
- `lang="en"` on `<html>`. Semantic HTML5 landmarks.

**Performance targets:**
- Lighthouse Performance ≥90 on both desktop and mobile.
- LCP <2.5s.
- CLS <0.1.
- INP <200ms.
- Hero image preloaded with `fetchpriority="high"`.
- Fonts preloaded with `rel="preload" as="font" type="font/woff2" crossorigin`.
- All non-critical JS deferred.

**Schema targets (Stage 6-20):**
- Homepage: `LocalBusiness` + `WebSite`.
- Service detail pages: `Service` + `Place`.
- About: `Person` (x2 for founders) within `LocalBusiness`.
- FAQ: `FAQPage`.
- Reviews: `AggregateRating` once populated with real data.
- City pages: `LocalBusiness` with `areaServed` specific to each city.

Rich Results Test must return 0 errors on every page type before launch.
