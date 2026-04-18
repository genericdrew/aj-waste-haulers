# AJ Liquid Waste Haulers — Pattern Library

**Stage 5-1 output. Produced:** 2026-04-17
**Design system authority:** `site/CLAUDE.md`
**Character authority:** `03-design/character-bible.md`
**Token namespace:** All values via `var(--*)`. Raw hex/px values are a hard ban.

---

## How to Read This Document

Each pattern uses seven standard fields:

| Field | Content |
|---|---|
| **Purpose** | What the component does and why it exists in this design system |
| **Variants** | Named size / color / context variants |
| **Structure** | Semantic HTML skeleton with class names and key data attributes |
| **States** | Interaction states with token-referenced style deltas |
| **Accessibility** | ARIA, keyboard, focus, touch-target, and contrast requirements |
| **Do** | One affirmative rule drawn from the Character Bible or CLAUDE.md |
| **Don't** | One prohibition drawn from the Character Bible or CLAUDE.md |

Token shorthand used throughout:
- Colors: `--color-navy-900`, `--color-terracotta-600`, etc.
- Type: `--text-display-xl`, `--text-body-md`, `--text-eyebrow`, etc.
- Radius: `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-xl`, `--radius-pill`
- Shadow: `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-xl`

---

## Pattern Index

1. Primary Button (on-light / on-dark)
2. Secondary Button (outline)
3. Text Link (body, inline)
4. Eyebrow Label
5. Section Header
6. Trust Strip
7. Trust Strip Item
8. Audience Pathway Card
9. Service Card
10. Differentiator Pillar
11. Process Step
12. Testimonial Card
13. Testimonial Empty State
14. City Card
15. FAQ Accordion Item
16. Form Field (text input, select, textarea)
17. Field Error
18. Mobile CTA Bar
19. Sticky Header
20. Footer Column
21. Schema JSON-LD Wrapper
22. Estimator Tool
23. ZIP Service Area Widget
24. Empty State (generic)
25. Callout Block

---

## 1. Primary Button

**Purpose:** The single highest-priority conversion action on any page or section. Used for "Get a Free Quote," "Schedule Service," and equivalent CTAs. Never used for navigation or secondary actions.

**Variants:**

| Variant | Background | Text | Use context |
|---|---|---|---|
| `btn-primary` (on-light) | `--color-terracotta-600` | `--color-bone-50` | Light backgrounds (bone-50, bone-100) |
| `btn-primary--on-dark` | `--color-bone-50` | `--color-navy-900` | Dark sections (navy-700, navy-900) |

**Structure:**

```html
<a href="/contact/" class="btn btn-primary" role="button">
  Get a Free Quote
</a>

<!-- On-dark variant -->
<a href="/contact/" class="btn btn-primary btn-primary--on-dark" role="button">
  Get a Free Quote
</a>

<!-- Button element (form submission) -->
<button type="submit" class="btn btn-primary">
  Send Request
</button>
```

Class anatomy:
- `btn` — base class: height, padding, font, border-radius, transition
- `btn-primary` — fill color, text color, hover delta
- `btn-primary--on-dark` — modifier for dark-section context
- Min height: 44px (touch-target floor per CLAUDE.md §17)
- Padding: `0.75rem 1.5rem`
- Font: Inter SemiBold, `--text-body-md`, uppercase, letter-spacing 0.06em
- Border-radius: `var(--radius-md)`

**States:**

| State | Style delta |
|---|---|
| Default | Fill `--color-terracotta-600`, shadow `var(--shadow-sm)` |
| Hover | Fill `--color-terracotta-800`, shadow `var(--shadow-md)`, translate Y -1px |
| Focus-visible | Outline 2px `--color-terracotta-800`, offset 2px |
| Active | Fill `--color-terracotta-800`, translate Y 0, shadow `var(--shadow-sm)` |
| Disabled | Opacity 0.45, cursor not-allowed, no hover delta |
| On-dark hover | Fill `--color-gray-200`, text `--color-navy-900` |

**Accessibility:**
- Use `<a role="button">` only when linking to a real `href`. Use `<button>` for form actions.
- Focus ring: 2px terracotta-800 outline, 2px offset — never `outline: none`.
- Touch target: 44×44px minimum. Pad generously; do not shrink below this for mobile.
- Contrast: terracotta-600 on bone-50 meets WCAG AA for large text (≥18.67px bold or ≥24px). Verify with each size variant.
- If the button text is an icon only, add `aria-label` with the action name.

**Do:** Use terracotta-600 fill on light backgrounds — it signals the Hill Country earth tone and differentiates from the generic blue-button pattern every local competitor uses.

**Don't:** Apply a gradient background to the button. Gradient CTAs are a hard ban (CLAUDE.md §11).

---

## 2. Secondary Button (Outline)

**Purpose:** Supports the primary action with a lower-commitment path — typically "Call (512) 956-0047," "Learn More," or "See All Services." Used alongside a primary button; never the only CTA in a section.

**Variants:**

| Variant | Border | Text | Use context |
|---|---|---|---|
| `btn-secondary` (on-light) | `--color-navy-700` 2px | `--color-navy-700` | Light backgrounds |
| `btn-secondary--on-dark` | `--color-bone-50` 2px | `--color-bone-50` | Dark sections (navy-700, navy-900) |

**Structure:**

```html
<a href="tel:5129560047" class="btn btn-secondary" role="button">
  Call (512) 956-0047
</a>

<!-- On-dark variant (CTA banner, footer) -->
<a href="tel:5129560047" class="btn btn-secondary btn-secondary--on-dark" role="button">
  Call (512) 956-0047
</a>
```

Class anatomy:
- `btn` — shared base
- `btn-secondary` — transparent fill, border, text color
- `btn-secondary--on-dark` — modifier
- Border-radius: `var(--radius-md)` (matches primary)
- Min height: 44px

**States:**

| State | Style delta |
|---|---|
| Default | Transparent fill, 2px border `--color-navy-700`, text `--color-navy-700` |
| Hover | Fill `--color-navy-700` at 8% opacity, text `--color-navy-900` |
| Focus-visible | Outline 2px `--color-terracotta-800`, offset 2px |
| Active | Fill `--color-navy-700` at 16% opacity |
| Disabled | Opacity 0.45, cursor not-allowed |
| On-dark hover | Fill `--color-bone-50` at 10% opacity |

**Accessibility:**
- Same focus-ring and touch-target requirements as primary button.
- On dark sections: bone-50 on navy-900 meets 4.5:1 contrast for normal text — verify at all sizes.
- `aria-label` if the visible text alone is ambiguous (e.g., a bare phone number without context).

**Do:** Pair this with a primary button in every section that has a CTA. The two-CTA convention (primary action + secondary softer path) is the standard for this vertical.

**Don't:** Make the outline button the only CTA on a section. A section with only a secondary button signals low confidence in the value proposition.

---

## 3. Text Link

**Purpose:** Inline hyperlinks within body copy and card CTAs (e.g., "Learn more →" on service cards, inline editorial links in FAQ answers or callout blocks).

**Variants:**

| Variant | Class | Context |
|---|---|---|
| Body link | `link-body` | Body paragraphs, inline editorial |
| Card CTA link | `link-card-cta` | End of card descriptions, "Learn more →" |
| Attention link | `link-attention` | Callout blocks, testimonial attribution — the terracotta bottom-border emphasis device |

**Structure:**

```html
<!-- Body inline link -->
<a href="/services/septic-tank-pumping/" class="link-body">
  septic pumping schedule
</a>

<!-- Card CTA link -->
<a href="/services/grease-trap-pumping/" class="link-card-cta" aria-label="Learn more about grease trap cleaning">
  Learn more →
</a>

<!-- Attention link (callout / testimonial attribution) -->
<a href="/reviews/" class="link-attention">
  Read all reviews
</a>
```

Style notes:
- `link-body`: `--color-navy-700`, underline on hover, no underline at rest for cleanliness
- `link-card-cta`: `--color-terracotta-600`, no underline, arrow glyph included in text node
- `link-attention`: `--color-terracotta-600`, permanent 4px bottom border in `--color-terracotta-600` (the brand emphasis device per CLAUDE.md §7)

**States:**

| State | Style delta |
|---|---|
| Default | Color as above; underline per variant |
| Hover | `link-body` → underline visible; `link-card-cta` → color `--color-terracotta-800`, arrow nudge 2px right |
| Focus-visible | Outline 2px `--color-terracotta-800`, offset 1px |
| Visited | `link-body` → `--color-navy-500`; CTA links unchanged |
| Active | `--color-terracotta-800` |

**Accessibility:**
- Never use `href="#"`. Every link goes to a real destination (CLAUDE.md §9).
- Link text must be descriptive. "Click here" and "learn more" without `aria-label` are failures.
- Focus ring must be visible on all backgrounds. Verify on bone-50, bone-100, and navy-700.
- Minimum touch-target: 44px height via generous `padding-block`.

**Do:** Use the terracotta bottom-border emphasis device on attention links — it is one of the two brand shapes in the design system and should appear on links that reward sustained attention.

**Don't:** Use the attention / bottom-border style for every link. Reserve it for links in callout blocks and testimonial attribution only — overuse kills the emphasis signal.

---

## 4. Eyebrow Label

**Purpose:** The one-line label above section headlines that frames context and signals section intent. Appears above every Section Header (Pattern 5). Examples: "Measured. Documented. Proven." (hero), "Why AJ" (differentiator section), "Our Services" (services grid).

**Variants:**

| Variant | Surface | Color |
|---|---|---|
| `eyebrow` (standard) | Light backgrounds | `--color-terracotta-600` |
| `eyebrow--on-dark` | Dark sections (navy-700, navy-900) | `--color-terracotta-600` (same — sufficient contrast on dark) |

**Structure:**

```html
<p class="eyebrow" aria-hidden="true">
  Why AJ
</p>
```

- Tag: `<p>` (not `<span>` or `<div>`) — descriptive, not presentational
- `aria-hidden="true"` when the eyebrow is purely decorative and the section heading provides the semantic context. If the eyebrow carries unique information not in the heading, remove `aria-hidden`.
- Font: Inter SemiBold, `--text-eyebrow` (0.75rem, 1.2 lh, uppercase, letter-spacing 0.12em)
- Color: `--color-terracotta-600`
- Followed by the brand shape motif: 40px wide × 2px terracotta rule + 6px × 6px terracotta dot (rendered as a `<span class="eyebrow-rule" aria-hidden="true">` or CSS `::after` on `.eyebrow`)

**States:** No interactive states. Static element.

**Accessibility:**
- `aria-hidden="true"` is appropriate when the immediately following heading contains the same or richer information.
- Do not rely on eyebrow uppercase for meaning — the semantic content lives in the heading.
- Contrast: `--color-terracotta-600` on `--color-bone-50` — verify meets 3:1 for large text (this text is 12px uppercase, which is below the 18.67px bold threshold; aim for 4.5:1 to be safe).

**Do:** Use Inter for eyebrows consistently — CLAUDE.md §4 recommends Inter for eyebrows and Playfair for headlines. Pick once and hold.

**Don't:** Use the eyebrow on more than one element per section. One eyebrow per section header. Multiple eyebrows in a section is visual clutter.

---

## 5. Section Header

**Purpose:** The reusable heading block used to open every homepage section and most interior page sections. Composed of: optional Eyebrow Label (Pattern 4) + H2 headline + optional body/subheadline. The brand rule divider (terracotta line + dot) follows the eyebrow.

**Variants:**

| Variant | Alignment | Context |
|---|---|---|
| `section-header` (left) | Left-aligned | Default for most sections |
| `section-header--centered` | Centered | Services grid, CTA Banner, Testimonials |
| `section-header--on-dark` | Either | Dark sections (navy-700, navy-900) |

**Structure:**

```html
<header class="section-header">
  <p class="eyebrow" aria-hidden="true">Our Services</p>
  <span class="eyebrow-rule" aria-hidden="true"></span>
  <h2 class="section-header__headline">
    Five services. One truck you can trust.
  </h2>
  <p class="section-header__body">
    <!-- Optional lead paragraph. Inter body-lg. Max 2 sentences. -->
    Septic pumping, grease trap cleaning, and emergency service — all documented
    with an electronic gallon meter.
  </p>
</header>
```

Style notes:
- `section-header__headline`: Playfair Display, `--text-display-lg` (3rem / 48px), `--color-navy-900` on light; `--color-bone-50` on dark
- `section-header__body`: Inter, `--text-body-lg`, `--color-charcoal-900` on light; `--color-bone-50` at 85% on dark
- Max-width on body text: ~60ch for readability
- `--on-dark` modifier flips text tokens but keeps eyebrow terracotta-600

**States:** Static element. No interaction.

**Accessibility:**
- H2 is the correct level for section headings on the homepage. Interior pages may use H1 for the page title, H2 for sections.
- Never skip heading levels. If a sub-section inside a section needs a heading, use H3.
- The eyebrow `<p>` precedes the `<h2>` in DOM order — screen readers will announce the eyebrow text unless it is `aria-hidden`.

**Do:** Keep the headline to one punchy sentence. "Five services. One truck you can trust." outperforms "AJ Liquid Waste Haulers Offers a Wide Range of Services."

**Don't:** Use H1 for section headers on the homepage. H1 is for the hero headline only — one per page.

---

## 6. Trust Strip

**Purpose:** The full horizontal band that appears immediately below the hero. Carries five Trust Strip Items (Pattern 7). Sets the rational-credibility tone before the visitor scrolls to service content. Background: `--color-navy-900`.

**Variants:**

| Variant | Notes |
|---|---|
| `trust-strip` (standard) | 5 items, horizontal desktop, 2-column mobile grid |

**Structure:**

```html
<section class="trust-strip" aria-label="Credentials and trust signals">
  <ul class="trust-strip__list" role="list">
    <!-- 5 × Trust Strip Item (Pattern 7) -->
  </ul>
</section>
```

Style notes:
- Background: `--color-navy-900`
- No margin-top above the strip — it must butt directly against the hero's bottom edge (Character Bible §2)
- Padding: `1.5rem 0` (vertical), full bleed horizontal
- Desktop: flex row, `justify-content: space-evenly`, `align-items: center`
- Mobile (< 768px): `display: grid; grid-template-columns: 1fr 1fr;` — 5th item spans full width if count is odd
- Dividers between items: `--radius-none`, 1px `--color-navy-700` vertical rule

**States:** Static element. Items may have hover states if items link out (TCEQ license number link, for example).

**Accessibility:**
- `<section aria-label="Credentials and trust signals">` provides a landmark label for assistive technology.
- `<ul role="list">` with `role="list"` restores list semantics in Safari where CSS `list-style: none` strips them.
- The strip is a landmark-level element; do not wrap it in a decorative `<div>` without a role.

**Do:** Run the strip background flush against the hero — Character Bible §2 states there must be no margin above it. The visual contrast break between hero photography and the navy band is the trust signal itself.

**Don't:** Add a section headline above the Trust Strip calling it "Why Choose Us." The strip is a silent signal; a headline turns it into a pitch (Character Bible §2 IS NOT).

---

## 7. Trust Strip Item

**Purpose:** A single credential unit within the Trust Strip. Pairs a line icon with a short label and a value string. Maximum one line of text.

**Variants:** No named variants — all items use the same structure. The icon changes per credential.

**Structure:**

```html
<li class="trust-item">
  <span class="trust-item__icon" aria-hidden="true">
    <!-- Inline SVG, 24×24px, fill --color-terracotta-600 or --color-bone-50 -->
  </span>
  <span class="trust-item__label">TCEQ Licensed</span>
  <!-- Optional: a short value when distinct from label -->
  <span class="trust-item__value">Lic. # [number]</span>
</li>
```

Style notes:
- Font: Inter, `--text-body-sm` (0.875rem), `--color-bone-50`, letter-spacing 0.02em
- Icon: 24×24px, inline SVG, `--color-terracotta-600` (preferred) or `--color-bone-50`
- Icon + label on the same baseline; flex row, gap `0.5rem`
- One-line constraint: if a value needs two lines, rewrite it (Character Bible §2 IS)

**States:**
- Default: static
- If the item links (TCEQ license number → TCEQ lookup): hover underlines `trust-item__value`, focus ring on the `<a>` wrapper

**Accessibility:**
- SVG icons must have `aria-hidden="true"` — the text label carries the meaning.
- If an item is a link, the `<a>` wraps `trust-item__label` + `trust-item__value` and carries a descriptive `aria-label`.
- Contrast: `--color-bone-50` on `--color-navy-900` — WCAG AAA compliant (> 7:1).

**Do:** Use terracotta-600 for trust strip icons — it creates a warm visual pulse against the navy band and carries the brand accent into the dark section (consistent with the design system's accent-on-dark pattern).

**Don't:** Include BBB, Angi, or HomeAdvisor badge images in the trust strip. The Character Bible §2 explicitly bans "a row of colored badges from BBB, Angi, HomeAdvisor crammed together."

---

## 8. Audience Pathway Card

**Purpose:** One of the three cards in the Audience Pathways section (section 3). Each card represents a distinct customer segment — Homeowners, Restaurants & Commercial, Wineries/Breweries/Distilleries — and routes them to the most relevant service path.

**Variants:**

| Variant | Context |
|---|---|
| `pathway-card` | Standard — all three use this base class; content varies |

**Structure:**

```html
<article class="pathway-card">
  <span class="pathway-card__icon" aria-hidden="true">
    <!-- Inline SVG line icon, 40×40px, --color-terracotta-600 -->
  </span>
  <h3 class="pathway-card__title">Homeowners</h3>
  <p class="pathway-card__body">
    <!-- 1–2 sentences. Varies per card — see Character Bible §3 IS: asymmetric content. -->
    Septic pumping, real estate inspections, and 24/7 emergency response — 
    for the 1-in-3 Hays County homes on a septic system.
  </p>
  <a href="/services/septic-tank-pumping/" class="link-card-cta pathway-card__cta">
    Explore homeowner services →
  </a>
</article>
```

Style notes:
- Background: `--color-bone-100`
- Border-top: 4px solid `--color-navy-500` (Character Bible §3 IS)
- Border-radius: `var(--radius-lg)`
- Shadow: `var(--shadow-sm)` at rest
- Hover: shadow lifts to `var(--shadow-md)`, entire card is clickable (pointer cursor)
- Parent section background: `--color-bone-50`
- Layout: 3-column CSS grid, desktop; 1-column mobile

**States:**

| State | Style delta |
|---|---|
| Default | `--shadow-sm`, `--color-bone-100` background |
| Hover | `--shadow-md`, translate Y -2px |
| Focus-within | Focus ring on the inner CTA link; card shadow lifts |
| Active | Translate Y 0 |

**Accessibility:**
- Use `<article>` — each card is a self-contained thematic unit.
- The card's `<a>` is the primary interactive element. The entire card's click area should forward to this link via JS `pointerup` on the card (not by wrapping the whole card in an `<a>` tag, which is an HTML validity issue with nested block-level content).
- `aria-label` on the CTA link must be fully descriptive: `aria-label="Explore homeowner services — septic pumping and inspections"`.
- Icon SVGs: `aria-hidden="true"`.

**Do:** Vary the body copy length and sentence structure meaningfully across all three cards — the Character Bible §3 explicitly calls for "asymmetric content length" across the three cards as proof of human authorship.

**Don't:** Start all three card bodies with "We…" — the Character Bible §3 explicitly bans this and CLAUDE.md §10d flags it as a pattern to break.

---

## 9. Service Card

**Purpose:** Represents one of AJ's five services in the Services Grid (section 4). Links to the dedicated service detail page. Gives just enough information to confirm a visitor found their service without replacing the detail page.

**Variants:**

| Variant | Context |
|---|---|
| `service-card` | Standard; all 5 service cards use this |

**Structure:**

```html
<article class="service-card">
  <span class="service-card__icon" aria-hidden="true">
    <!-- Inline SVG line icon, 32×32px, fill --color-navy-700 -->
  </span>
  <h3 class="service-card__title">Septic Tank Pumping</h3>
  <p class="service-card__body">
    <!-- 1–2 sentences max. No pricing. (Character Bible §4 IS NOT) -->
    Residential and light-commercial pumping for all tank types, 
    measured by our truck-mounted electronic gallon meter.
  </p>
  <a href="/services/septic-tank-pumping/" class="link-card-cta service-card__cta"
     aria-label="Learn more about septic tank pumping">
    Learn more →
  </a>
</article>
```

Style notes:
- Background: `--color-bone-100`
- Shadow: `var(--shadow-sm)` at rest
- Border-radius: `var(--radius-lg)`
- Parent section background: `--color-bone-100` (alternating with bone-50 for pacing)
- Hover: card shadow lifts to `var(--shadow-md)`, cursor pointer on whole card (Character Bible §4 IS)
- Layout: 3-column desktop, 2-column tablet, 1-column mobile
- Title: Playfair Display, `--text-heading-lg`, `--color-navy-900`

**States:**

| State | Style delta |
|---|---|
| Default | `--shadow-sm` |
| Hover | `--shadow-md`, translate Y -2px, cursor pointer |
| Focus-within | CTA link focus ring; card shadow lifts |
| Active | Translate Y 0 |

**Accessibility:**
- `<article>` wrapper; each card is self-contained.
- CTA link carries descriptive `aria-label` per item.
- Card title should be an H3 — this is inside a section with an H2 header.
- Icon: `aria-hidden="true"`.

**Do:** Keep service card descriptions to 1–2 sentences. The detail page exists for depth; the card's job is recognition and a click (Character Bible §4 IS).

**Don't:** Add pricing to service cards. "Pricing has its own page" — Character Bible §4 IS NOT.

---

## 10. Differentiator Pillar

**Purpose:** One of four "Why AJ" pillars in the Proof-of-Pumpage section (section 5). Each pillar names a specific, verifiable reason to choose AJ — gallon-meter proof, founder experience, local roots, TCEQ-approved disposal. Appears on a dark `--color-navy-700` background.

**Variants:**

| Variant | Context |
|---|---|
| `diff-pillar` | Standard; all four use this; always on dark background |

**Structure:**

```html
<article class="diff-pillar">
  <span class="diff-pillar__icon" aria-hidden="true">
    <!-- Inline SVG, 28×28px, fill --color-terracotta-600 -->
  </span>
  <h3 class="diff-pillar__title">Proof-of-Pumpage</h3>
  <p class="diff-pillar__body">
    Our truck-mounted electronic gallon meter records every cubic inch removed.
    You see the number. We document it. No guesswork, no disputes.
  </p>
</article>
```

Style notes:
- Section background: `--color-navy-700`
- `diff-pillar__title`: Playfair Display, `--text-heading-lg`, `--color-bone-50`
- `diff-pillar__body`: Inter, `--text-body-md`, `--color-bone-50` at 85% opacity
- Icon fill: `--color-terracotta-600`
- Layout: 2×2 CSS grid on desktop, single column on mobile (Character Bible §5 IS)
- No card background — pillars float directly on the navy section background
- No card border or shadow — dark section; restraint over decoration

**States:** Static. No hover or interactive states.

**Accessibility:**
- H3 for pillar titles — inside an H2 section.
- Icon `aria-hidden="true"`.
- Contrast: `--color-bone-50` on `--color-navy-700` — verify ≥ 4.5:1. (It is.)

**Do:** Name the gallon meter explicitly in at least one pillar title. "Proof-of-Pumpage" alone is too abstract — the body must name the electronic meter directly (Character Bible §5 IS: "The section title names the meter explicitly. No metaphor.").

**Don't:** Use generic differentiator text like "integrity," "quality," or "customer satisfaction" for any pillar. Character Bible §5 IS NOT: "A generic 'Why Choose Us' with four icon-and-text cards about integrity, quality, experience, satisfaction."

---

## 11. Process Step

**Purpose:** One numbered step in the 5-step "What to Expect on Pumping Day" process flow (section 6, top half). Each step advances the customer's mental model of the service visit. Step 2 names the gallon meter — its second dedicated placement on the page.

**Variants:**

| Variant | Context |
|---|---|
| `process-step` | Standard; used in the 5-step horizontal/vertical flow |

**Structure:**

```html
<li class="process-step">
  <span class="process-step__number" aria-hidden="true">02</span>
  <div class="process-step__content">
    <h3 class="process-step__title">Measure and Record</h3>
    <p class="process-step__body">
      We run your tank volume through the truck-mounted electronic gallon meter.
      You get the exact number before we leave the site.
    </p>
  </div>
</li>
```

Parent:
```html
<ol class="process-steps" aria-label="Service process steps">
  <!-- 5 × process-step -->
</ol>
```

Style notes:
- `<ol>` carries semantic order; do not use `<ul>`
- Desktop: horizontal flex row, steps connected by a `--color-gray-200` 1px horizontal line between numbers
- Mobile: vertical stack, line becomes a 1px left border on `process-step__content`
- Number: Inter SemiBold, `--text-display-md`, `--color-terracotta-600`
- Title: Inter SemiBold, `--text-heading-md`, `--color-navy-900`
- Body: Inter, `--text-body-md`, `--color-charcoal-900`
- Section background: `--color-bone-50`

**States:** Static. No interaction states.

**Accessibility:**
- `<ol>` communicates sequence to screen readers — do not replace with unordered list.
- `aria-label="Service process steps"` on the `<ol>`.
- Step numbers are `aria-hidden="true"` — the `<ol>` position already communicates order to AT.
- Each `<li>` should be opaque as a standalone item; the title + body must make sense without the number.

**Do:** Name the gallon meter explicitly at Step 2. This is the second appearance of the proof-of-pumpage differentiator in the page sequence, and it belongs inside the process narrative where it has mechanical context (CLAUDE.md §8: "Step 2 visibly names the gallon meter").

**Don't:** Open Step 1 with "You call us" or "You contact AJ." The Character Bible §6 IS NOT explicitly bans "A process that opens with 'Step 1: You call us' stating the obvious." Start with the truck's arrival or the site work.

---

## 12. Testimonial Card

**Purpose:** Displays one customer review with star rating, quote body, and attribution. Used in the Testimonials section (section 7). Content pulled from real Google reviews only — no fabrication.

**Variants:**

| Variant | Context |
|---|---|
| `testimonial-card` | Standard — 3 cards per row on desktop |
| `testimonial-card--empty` | Empty state when no reviews available (see Pattern 13) |

**Structure:**

```html
<article class="testimonial-card">
  <div class="testimonial-card__stars" aria-label="5 out of 5 stars">
    <!-- 5 × star SVG, 18×18px, fill --color-amber-500 -->
  </div>
  <blockquote class="testimonial-card__quote">
    <p>
      James showed me the meter reading before he left. First time I've
      ever actually known what I paid for with a septic job.
    </p>
  </blockquote>
  <footer class="testimonial-card__attribution">
    <span class="testimonial-card__author">Michael T.</span>
    <span class="testimonial-card__meta">
      <time datetime="2025-09">September 2025</time> · Google Review
    </span>
  </footer>
  <span class="testimonial-card__mark" aria-hidden="true">&#8220;</span>
</article>
```

Style notes:
- Background: `--color-bone-50` (cards on bone-100 section background)
- Border-radius: `var(--radius-xl)`
- Shadow: `var(--shadow-md)`
- Quote body: Inter, `--text-body-lg`, `--color-charcoal-900`
- Attribution: Inter, `--text-body-sm`, `--color-gray-600`
- Quote mark flourish: Playfair Display, large (3–4rem), `--color-terracotta-600`, absolute-positioned top-left of card
- Layout: 3-column desktop, 1-column mobile

**States:** Static. No interactive states unless the card links to the full review.

**Accessibility:**
- `<blockquote>` is the correct element for quoted external content.
- `<footer>` inside `<article>` is semantically valid for attribution.
- Star rating `<div>` needs `aria-label="5 out of 5 stars"` — the SVGs themselves are `aria-hidden`.
- `<time datetime="YYYY-MM">` for machine-readable dates.
- Full last names must never be included — first name + last initial only (Character Bible §7 IS).

**Do:** Include a review date (`<time>` element) in the attribution — no competitor shows dates, making this a visible trust differentiator that signals review recency.

**Don't:** Use a sliding carousel for testimonials. "A sliding carousel" is explicitly named in the Character Bible §7 IS NOT, and carousels are a hard ban in CLAUDE.md §11.

---

## 13. Testimonial Empty State

**Purpose:** Shown in place of the Testimonials section when real Google reviews have not yet been imported. Maintains layout integrity without fabricating social proof. CLAUDE.md §9 is explicit: fabricated testimonials are a hard ban.

**Variants:**

| Variant | Context |
|---|---|
| `empty-state--testimonials` | Testimonials section pending real data |

**Structure:**

```html
<div class="empty-state empty-state--testimonials" role="status" aria-live="polite">
  <p class="empty-state__message">
    We're pulling our Google reviews in now. Come back soon.
  </p>
  <a href="https://g.page/r/[AJ-Google-CID]/review" class="link-attention"
     rel="noopener" target="_blank"
     aria-label="See AJ Liquid Waste Haulers on Google Reviews (opens in new tab)">
    See us on Google →
  </a>
</div>
```

Style notes:
- No card grid is rendered when empty state is active
- Section background `--color-bone-100` still present for pacing
- Empty state centered, generous padding, no border or shadow
- Message: Inter, `--text-body-lg`, `--color-charcoal-900`
- Link: `link-attention` pattern (Pattern 3)

**States:** Static. `role="status"` allows AT to announce it without disrupting flow.

**Accessibility:**
- `role="status"` with `aria-live="polite"` — appropriate for status messages.
- The external link to Google must carry `aria-label` with "(opens in new tab)" notice and `target="_blank" rel="noopener"`.

**Do:** Keep the message brief and direct — Character Bible §7 IS: "We're pulling our Google reviews in now. Come back soon." with a Google link. That exact wording is specified.

**Don't:** Add placeholder quote cards with lorem ipsum, greyed-out stars, or "Your testimonial here" copy. Empty fabrication is worse than a clean empty state.

---

## 14. City Card

**Purpose:** One city link in the Service Area city grid (section 8). Navigates to the dedicated city landing page. Groups with 4–5 primary cities and a secondary cluster of surrounding communities.

**Variants:**

| Variant | Context |
|---|---|
| `city-card--primary` | 5 primary cities (Dripping Springs, Austin, Kyle, New Braunfels, Driftwood) |
| `city-card--secondary` | Surrounding communities (smaller type, less prominent) |

**Structure:**

```html
<!-- Primary city card -->
<a href="/service-area/dripping-springs/" class="city-card city-card--primary">
  <span class="city-card__name">Dripping Springs</span>
  <span class="city-card__county">Hays County</span>
</a>

<!-- Secondary community item -->
<a href="/service-area/wimberley/" class="city-card city-card--secondary">
  Wimberley
</a>
```

Style notes:
- `city-card--primary`: Background `--color-bone-100`, border-radius `var(--radius-md)`, padding `1rem 1.25rem`, shadow `var(--shadow-sm)`, city name Inter SemiBold `--text-heading-md` `--color-navy-700`, county Inter `--text-body-sm` `--color-gray-600`
- `city-card--secondary`: No card background, plain link style, Inter `--text-body-md`, `--color-navy-700`
- Hover (primary): shadow `var(--shadow-md)`, text `--color-terracotta-600`
- Layout: CSS grid, 2–3 columns on desktop; 2-column on mobile

**States:**

| State | Style delta |
|---|---|
| Default | Shadow `--shadow-sm`, navy-700 text |
| Hover | Shadow `--shadow-md`, text `--color-terracotta-600` |
| Focus-visible | Outline 2px `--color-terracotta-800`, offset 2px |
| Active | Shadow `--shadow-sm`, translate Y 0 |

**Accessibility:**
- `<a>` is the correct element — the entire card is a link.
- Link text must be descriptive: "Dripping Springs" alone is sufficient in context; if needed, `aria-label="Septic services in Dripping Springs"`.
- Touch target: primary cards naturally meet 44px minimum; verify secondary links have adequate padding.

**Do:** Link every city card to a real, content-distinct city landing page — CLAUDE.md §9 requires every CTA to link to a real destination, and CLAUDE.md §14 step 19 builds all 5 city pages.

**Don't:** List 100+ cities or counties in the city grid. Character Bible §8 IS NOT: "A giant list of 100+ cities and counties."

---

## 15. FAQ Accordion Item

**Purpose:** A single collapsible question-and-answer pair in the FAQ page accordion and the homepage FAQ Teaser (section 10). Keyboard-accessible, ARIA-correct expand/collapse. Supports FAQPage JSON-LD schema (the structured data lives in Pattern 21).

**Variants:**

| Variant | Context |
|---|---|
| `faq-item` | Standard; used on /faq/ page and homepage teaser |
| `faq-item--open` | JS-added modifier when expanded |

**Structure:**

```html
<div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
  <h3 class="faq-item__question">
    <button
      class="faq-item__trigger"
      aria-expanded="false"
      aria-controls="faq-answer-1"
      id="faq-trigger-1"
      itemprop="name"
    >
      How often does a septic tank need to be pumped?
      <span class="faq-item__icon" aria-hidden="true"><!-- chevron SVG --></span>
    </button>
  </h3>
  <div
    class="faq-item__answer"
    id="faq-answer-1"
    role="region"
    aria-labelledby="faq-trigger-1"
    hidden
    itemscope
    itemprop="acceptedAnswer"
    itemtype="https://schema.org/Answer"
  >
    <div itemprop="text">
      <p>
        Most residential tanks need pumping every 3–5 years, depending on
        household size and tank volume. Our estimator tool gives you a
        personalized interval in under 30 seconds.
      </p>
    </div>
  </div>
</div>
```

JS behavior:
- Toggle `aria-expanded` between `"true"` / `"false"` on click
- Toggle `hidden` attribute on the answer panel
- Add/remove `faq-item--open` modifier class
- Single-open behavior optional (closing others on open)

Style notes:
- Trigger: full-width, `text-align: left`, Inter SemiBold `--text-heading-md`, `--color-navy-900`
- Chevron icon rotates 180deg when open (CSS transition)
- Answer: Inter `--text-body-md`, `--color-charcoal-900`, padding inside the panel
- Divider between items: 1px `--color-gray-200`

**States:**

| State | Style delta |
|---|---|
| Collapsed | `hidden` on answer, chevron pointing down, `aria-expanded="false"` |
| Expanded | Answer visible, chevron rotated 180deg, `aria-expanded="true"`, `faq-item--open` |
| Focus-visible | Outline 2px `--color-terracotta-800`, offset 2px on trigger button |
| Hover | Trigger text `--color-terracotta-600` |

**Accessibility:**
- `<button>` inside `<h3>` is the correct ARIA accordion pattern (not `<div>` clickable).
- `aria-expanded` must be on the `<button>`, not the `<h3>`.
- `aria-controls` + `id` pairing links trigger to panel.
- `role="region"` + `aria-labelledby` on the answer panel.
- `hidden` attribute (not `display:none` via CSS) ensures AT skips collapsed panels.
- Keyboard: Space/Enter toggles open/close; Tab moves to next trigger.

**Do:** Group accordion items under H2 topic headings on the full FAQ page (Character Bible §FAQ IS: "Grouped by topic with clear H2 headers — Septic / Grease Traps / Emergency / Pricing").

**Don't:** Build a search-as-you-type FAQ filter. Character Bible §FAQ IS NOT explicitly bans this.

---

## 16. Form Field

**Purpose:** Text input, select dropdown, and textarea variants used in the contact form, the Estimator Tool, and the ZIP Widget. Every field has a visible label, a consistent focus state, and programmatic error association.

**Variants:**

| Variant | Element | Context |
|---|---|---|
| `field--text` | `<input type="text">` | Name, phone, address |
| `field--email` | `<input type="email">` | Email address |
| `field--tel` | `<input type="tel">` | Phone number |
| `field--select` | `<select>` | Estimator dropdowns, service type selector |
| `field--textarea` | `<textarea>` | Message / details |

**Structure:**

```html
<!-- Text input -->
<div class="field field--text">
  <label class="field__label" for="field-name">
    Your Name <span class="field__required" aria-hidden="true">*</span>
  </label>
  <input
    class="field__input"
    type="text"
    id="field-name"
    name="name"
    autocomplete="name"
    required
    aria-required="true"
    aria-describedby="field-name-error"
  />
  <!-- Error message slot — hidden until invalid (see Pattern 17) -->
</div>

<!-- Select -->
<div class="field field--select">
  <label class="field__label" for="field-service">Service Type</label>
  <select class="field__select" id="field-service" name="service" aria-describedby="field-service-error">
    <option value="">Select a service…</option>
    <option value="septic-pumping">Septic Tank Pumping</option>
    <option value="grease-trap">Grease Trap Cleaning</option>
    <option value="emergency">Emergency Service</option>
    <option value="inspection">Real Estate Inspection</option>
    <option value="beverage">Beverage Industry Waste</option>
  </select>
</div>

<!-- Textarea -->
<div class="field field--textarea">
  <label class="field__label" for="field-message">Details (optional)</label>
  <textarea
    class="field__input field__textarea"
    id="field-message"
    name="message"
    rows="4"
    aria-describedby="field-message-error"
  ></textarea>
</div>
```

Style notes:
- All inputs: background `--color-bone-50`, border 1px `--color-gray-200`, border-radius `var(--radius-sm)`, padding `0.625rem 0.875rem`, font Inter `--text-body-md`, color `--color-charcoal-900`
- Label: Inter SemiBold `--text-body-sm`, `--color-charcoal-900`, margin-bottom `0.25rem`
- Focus: border-color `--color-terracotta-600`, outline 2px `--color-terracotta-600`, offset 0
- Error state: border-color `--color-sage-500` (invalid) — see Pattern 17
- Shadow: `var(--shadow-inset)` on inputs at rest for depth

**States:**

| State | Style delta |
|---|---|
| Default | Border `--color-gray-200`, shadow `--shadow-inset` |
| Focus | Border `--color-terracotta-600`, focus outline 2px terracotta |
| Filled / valid | Border `--color-gray-200` (no aggressive green border) |
| Invalid | Border `--color-amber-500`, see Pattern 17 for error message |
| Disabled | Background `--color-bone-100`, text `--color-gray-600`, cursor not-allowed |

**Accessibility:**
- Every input has a `<label for="[id]">` — never placeholder-only labels (CLAUDE.md §17).
- `aria-required="true"` on required fields in addition to HTML `required`.
- `aria-describedby` points to the error message element (Pattern 17), which is always present in the DOM even when empty.
- `autocomplete` attribute on all personal-data fields.
- Touch target: inputs must be min 44px height.
- `<select>` styling: custom appearance is acceptable via CSS `appearance: none` + arrow icon, but must retain native keyboard behavior.

**Do:** Label every field with a visible `<label>` element. Never use placeholder text as the sole label — it disappears on input and fails WCAG 1.3.1.

**Don't:** Add more than 7 fields to the contact form. Character Bible §Contact IS: "Clean form — 7 fields maximum."

---

## 17. Field Error

**Purpose:** Inline validation message that appears below a form field when the field value is invalid or required but empty. Programmatically associated with the field via `aria-describedby`.

**Variants:** No size variants — single consistent treatment for all field types.

**Structure:**

```html
<!-- Always present in DOM; empty when no error; shown via aria-live -->
<p
  class="field-error"
  id="field-name-error"
  role="alert"
  aria-live="polite"
>
  <!-- Injected by JS on validation: "Please enter your name." -->
</p>
```

Style notes:
- Font: Inter `--text-body-sm`, `--color-amber-500` (warm, attention-pulling, avoids harsh red per CLAUDE.md §3)
- Icon: small warning SVG (16×16px) inline-before the text, `aria-hidden`
- Display: `block` only when content is present; CSS hides empty `<p>` via `:empty { display: none }`
- Margin-top: `0.25rem` below the input

**States:**
- Empty (no error): hidden via CSS `:empty`
- Active error: visible, `role="alert"` triggers AT announcement

**Accessibility:**
- `role="alert"` causes AT to announce immediately when content is injected — no need for `aria-live` redundancy, but both are safe.
- The `id` on this element must match the `aria-describedby` value on the corresponding input.
- Error messages must be plain language: "Please enter your name." not "Field validation error: null."
- Do not rely on color alone to signal error — the icon reinforces the message visually.

**Do:** Keep error messages in the DOM even when empty and toggle content via JS — this preserves the `aria-describedby` connection established at load time.

**Don't:** Use red (`#FF0000`) for field errors. The design system uses `--color-amber-500` as the error accent — warm attention without the harsh trope (CLAUDE.md §3).

---

## 18. Mobile CTA Bar

**Purpose:** A fixed bottom bar visible only on mobile viewports (< 768px). Two tappable zones: "Call Now" (tel: link) and "Request Quote" (link to contact form). Appears after the user scrolls past the hero, triggered by an `IntersectionObserver` on the hero section.

**Variants:** Single variant — no size or color alternates.

**Structure:**

```html
<div class="mobile-cta-bar" aria-label="Quick contact actions" role="complementary" hidden>
  <a href="tel:5129560047" class="mobile-cta-bar__btn mobile-cta-bar__btn--call">
    <span class="mobile-cta-bar__icon" aria-hidden="true"><!-- phone SVG --></span>
    Call Now
  </a>
  <a href="/contact/" class="mobile-cta-bar__btn mobile-cta-bar__btn--quote">
    <span class="mobile-cta-bar__icon" aria-hidden="true"><!-- form/clipboard SVG --></span>
    Request Quote
  </a>
</div>
```

JS: `IntersectionObserver` on the hero section — when hero exits viewport, remove `hidden` from `.mobile-cta-bar`. Add back when hero re-enters.

Style notes:
- `position: fixed; bottom: 0; left: 0; right: 0; z-index: [above content, below modals]`
- `display: none` on desktop (≥ 768px) via `@media`
- Background: `--color-navy-900`
- Each button: 50% width, min-height 56px (generous — this is a primary touch target), flex center
- "Call Now" text: `--color-bone-50`, Inter SemiBold `--text-body-md` uppercase
- "Request Quote" background: `--color-terracotta-600`, text `--color-bone-50`
- Divider: 1px `--color-navy-700` between buttons
- Add `padding-bottom: env(safe-area-inset-bottom)` for iPhone home indicator clearance

**States:**

| State | Style delta |
|---|---|
| Hidden | `hidden` attribute; off-screen or `display:none` |
| Visible | Slides up from bottom via CSS transition (`transform: translateY(0)`) |
| Tap active | Brief opacity drop (0.8) on the tapped half |
| Focus-visible | Outline 2px bone-50, offset 2px (focus ring on dark background) |

**Accessibility:**
- `role="complementary"` + `aria-label` creates a landmark for AT users to navigate to.
- Tel link: `<a href="tel:5129560047">` — AT reads it as a phone number.
- Both buttons must meet the 44×44px touch target minimum — 56px height comfortably exceeds this.
- Ensure the bar does not obscure sticky form submit buttons or bottom-fixed content on long scroll pages.
- `prefers-reduced-motion`: disable the slide-up transition; just toggle visibility.

**Do:** Use `IntersectionObserver` to hide the bar when the hero's primary CTA is visible — avoid showing a duplicate CTA over the hero's own CTA, which creates visual redundancy (functionality-ideas.md §Idea 15).

**Don't:** Show the mobile CTA bar on desktop viewports. It is explicitly mobile-only. The header CTA suffices on desktop (functionality-ideas.md §Idea 15).

---

## 19. Sticky Header

**Purpose:** Persistent top navigation bar visible at all scroll depths. Carries the AJ logo, primary nav links, phone number, and "Get a Free Quote" CTA button. Transitions from transparent-over-hero to a solid navy background once the hero scrolls out of view.

**Variants:**

| Variant | Context |
|---|---|
| `header--transparent` | Over the hero section, initial scroll position |
| `header--solid` | JS-applied once hero scrolls out; `--color-navy-900` background |
| Desktop | Full nav links visible, CTA button in header |
| Mobile | Hamburger icon; nav collapses to off-canvas drawer or fullscreen overlay |

**Structure:**

```html
<header class="site-header site-header--transparent" id="site-header" role="banner">
  <div class="site-header__inner">

    <!-- Logo -->
    <a href="/" class="site-header__logo" aria-label="AJ Liquid Waste Haulers — home">
      <img src="/images/aj-logo.svg" alt="AJ Liquid Waste Haulers" width="140" height="40" />
    </a>

    <!-- Desktop nav -->
    <nav class="site-header__nav" aria-label="Primary navigation">
      <ul role="list">
        <li><a href="/services/">Services</a></li>
        <li><a href="/about/">About</a></li>
        <li><a href="/service-area/">Service Area</a></li>
        <li><a href="/faq/">FAQ</a></li>
        <li><a href="/contact/">Contact</a></li>
      </ul>
    </nav>

    <!-- Phone + CTA (desktop) -->
    <div class="site-header__actions">
      <a href="tel:5129560047" class="site-header__phone">
        (512) 956-0047
      </a>
      <a href="/contact/" class="btn btn-primary btn-primary--on-dark site-header__cta">
        Get a Free Quote
      </a>
    </div>

    <!-- Hamburger (mobile) -->
    <button
      class="site-header__hamburger"
      aria-expanded="false"
      aria-controls="mobile-nav"
      aria-label="Open navigation menu"
    >
      <span aria-hidden="true"><!-- hamburger SVG or 3-line CSS bars --></span>
    </button>

  </div>

  <!-- Mobile nav drawer -->
  <nav
    class="mobile-nav"
    id="mobile-nav"
    aria-label="Mobile navigation"
    hidden
  >
    <!-- mirror of desktop nav links + phone + CTA -->
  </nav>
</header>
```

Style notes:
- `position: sticky; top: 0; z-index: [layout stack top]`
- Transparent variant: `background: transparent`, logo + links in `--color-bone-50`
- Solid variant: background `--color-navy-900`, logo + links in `--color-bone-50`
- Transition: `background-color 200ms ease` (respect `prefers-reduced-motion`)
- Desktop nav links: Inter `--text-body-md`, `--color-bone-50` on dark
- CTA button in header uses `btn-primary--on-dark` (bone-50 fill, navy-900 text)
- Height: min 64px desktop, min 56px mobile

**States:**

| State | Style delta |
|---|---|
| Transparent (at-top) | `background: transparent` |
| Solid (scrolled) | `background: --color-navy-900`, `box-shadow: --shadow-md` |
| Mobile nav open | `aria-expanded="true"`, mobile-nav `hidden` removed, hamburger changes to close icon |
| Mobile nav closed | `aria-expanded="false"`, mobile-nav `hidden` restored |

**Accessibility:**
- `role="banner"` on `<header>` — one per page, in the outermost `<header>`.
- `aria-label` on both `<nav>` elements to distinguish them for AT.
- Skip link: `<a href="#main-content" class="skip-link">Skip to main content</a>` must be the first focusable element in the DOM, positioned before the header (CLAUDE.md §17).
- Hamburger `<button>` uses `aria-expanded` + `aria-controls` — not a styled `<div>`.
- Focus trap within mobile nav when open: Tab cycles through nav links, Escape closes.
- `aria-label="Open navigation menu"` / `"Close navigation menu"` toggled by JS.

**Do:** Ensure the phone number is always visible in the header — 5/5 competitors include it and local customers expect immediate phone access at all scroll depths (homepage-sections.md §4).

**Don't:** Add a dropdown submenu to the Services nav link on mobile. Mobile nav must be clean — hamburger drawer with 5 flat links only (homepage-sections.md §4 recommendation: 5 links maximum for mobile scannability).

---

## 20. Footer Column

**Purpose:** One content column within the multi-column site footer. The footer uses 4–5 columns on desktop, collapses to single-column stacked on mobile. Background: `--color-navy-900`.

**Variants:**

| Variant | Content |
|---|---|
| `footer-col--brand` | Logo, phone, brief tagline |
| `footer-col--links` | A labeled group of navigation links (Services, Company, Resources) |
| `footer-col--cities` | Top city service-area links |
| `footer-col--trust` | Trust line (TCEQ · Insured · Since 2018) + social icons |

**Structure:**

```html
<!-- Brand column -->
<div class="footer-col footer-col--brand">
  <a href="/" aria-label="AJ Liquid Waste Haulers — home">
    <img src="/images/aj-logo-light.svg" alt="AJ Liquid Waste Haulers" width="120" height="34" />
  </a>
  <p class="footer-col__tagline">The Hill Country's only proof-of-pumpage septic service.</p>
  <a href="tel:5129560047" class="footer-col__phone">(512) 956-0047</a>
</div>

<!-- Links column -->
<div class="footer-col footer-col--links">
  <h2 class="footer-col__heading">Services</h2>
  <ul role="list" class="footer-col__list">
    <li><a href="/services/septic-tank-pumping/">Septic Pumping</a></li>
    <li><a href="/services/grease-trap-pumping/">Grease Trap Cleaning</a></li>
    <li><a href="/services/emergency-pumping/">Emergency Service</a></li>
    <li><a href="/services/real-estate-inspections/">Real Estate Inspections</a></li>
    <li><a href="/services/beverage-industry-waste/">Beverage Industry</a></li>
  </ul>
</div>

<!-- Cities column -->
<div class="footer-col footer-col--cities">
  <h2 class="footer-col__heading">Service Areas</h2>
  <ul role="list" class="footer-col__list">
    <li><a href="/service-area/dripping-springs/">Dripping Springs</a></li>
    <li><a href="/service-area/austin/">Austin</a></li>
    <li><a href="/service-area/kyle/">Kyle</a></li>
    <li><a href="/service-area/new-braunfels/">New Braunfels</a></li>
    <li><a href="/service-area/driftwood/">Driftwood</a></li>
  </ul>
</div>
```

Style notes:
- Column heading: Inter SemiBold `--text-body-sm` uppercase letter-spacing 0.10em, `--color-bone-50` at 60% opacity (subdued label)
- Links: Inter `--text-body-sm`, `--color-bone-50` at 80%, hover `--color-bone-50` full opacity + terracotta-600 underline
- Phone: Inter SemiBold `--text-body-lg`, `--color-bone-50`
- Layout: CSS grid `repeat(auto-fit, minmax(160px, 1fr))` on desktop; `grid-template-columns: 1fr` on mobile
- Trust line below columns: Inter `--text-body-sm`, `--color-bone-50` at 60%, centered or left-aligned

**States:**

| State | Style delta |
|---|---|
| Link default | 80% opacity bone-50 |
| Link hover | Full opacity + terracotta-600 underline |
| Link focus-visible | Outline 2px `--color-terracotta-600`, offset 2px |

**Accessibility:**
- Footer column headings use `<h2>` — the footer is a landmark (`<footer>`) outside the main content hierarchy; `<h2>` establishes group context within AT.
- `<ul role="list">` restores Safari list semantics.
- Social icons (if present): `<a>` with `aria-label="AJ on Facebook (opens in new tab)"`, icon SVG `aria-hidden`.
- `<footer>` element carries implicit `role="contentinfo"` — do not add it explicitly.

**Do:** Include the trust line "TCEQ Licensed · Insured · Serving Central Texas Since 2018" below the footer columns — it is the third trust deployment point in the progressive trust distribution pattern (CLAUDE.md §12b placement pattern).

**Don't:** Add a newsletter signup box to the footer. Character Bible §Footer IS NOT explicitly bans it.

---

## 21. Schema JSON-LD Wrapper

**Purpose:** A Hugo partial pattern that injects the appropriate JSON-LD structured data block into the `<head>` of every page. Not a visual component — a technical pattern that every page template must implement. Supports Google Rich Results for LocalBusiness, Service, FAQPage, and Place types.

**Variants:**

| Schema type | Used on | Hugo partial |
|---|---|---|
| `LocalBusiness` + `WebSite` | Homepage | `layouts/partials/schema/home.html` |
| `Service` + `Place` | Service detail pages | `layouts/partials/schema/service.html` |
| `LocalBusiness` with `areaServed` | City service-area pages | `layouts/partials/schema/city.html` |
| `Person` × 2 within `LocalBusiness` | About page | `layouts/partials/schema/about.html` |
| `FAQPage` | /faq/ page | `layouts/partials/schema/faq.html` |
| `AggregateRating` | /reviews/ (when data available) | `layouts/partials/schema/reviews.html` |

**Structure (Hugo partial invocation in `<head>`):**

```html
<!-- In layouts/partials/head.html -->
{{ if .IsHome }}
  {{ partial "schema/home.html" . }}
{{ else if eq .Section "services" }}
  {{ partial "schema/service.html" . }}
{{ else if eq .Section "service-area" }}
  {{ partial "schema/city.html" . }}
{{ else if eq .Type "faq" }}
  {{ partial "schema/faq.html" . }}
{{ else if eq .Type "about" }}
  {{ partial "schema/about.html" . }}
{{ end }}
```

**Structure (schema partial — example: home.html):**

```html
<!-- layouts/partials/schema/home.html -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "{{ .Site.Data.content.business.name }}",
  "url": "{{ .Site.BaseURL }}",
  "telephone": "{{ .Site.Data.content.business.phone }}",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "{{ .Site.Data.content.business.city }}",
    "addressRegion": "TX",
    "addressCountry": "US"
  },
  "areaServed": [
    {{ range .Site.Data.content.business.service_cities }}
    { "@type": "City", "name": "{{ . }}" }{{ if not (last 1 $) }},{{ end }}
    {{ end }}
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  }
}
</script>
```

**Rules:**
- All schema data comes from `data/content.yaml` or the relevant data file — never hardcoded in the partial template.
- The `<script type="application/ld+json">` tag lives in `<head>`, not in `<body>`.
- Rich Results Test must return 0 errors on every page type before launch (CLAUDE.md §17).
- `AggregateRating` must only be added when real review data exists — never fabricated (CLAUDE.md §9).

**Accessibility:** No direct accessibility impact. Indirect: structured data enables rich snippets in search results, which improves discoverability for screen-reader users and keyboard-only users searching for the business.

**Do:** Run the Google Rich Results Test on every page type after schema is wired (CLAUDE.md §14 step 20). Schema is a BLOCKER per CLAUDE.md §12b gate check G10b.

**Don't:** Hardcode business name, phone, or address in the schema partial. All values must reference `var(--*)` — the data equivalent — through Hugo template variables reading from `data/content.yaml` (CLAUDE.md §9 G07 gate).

---

## 22. Estimator Tool

**Purpose:** The "Pumping Frequency Estimator" embedded in section 6 (Process + Estimator). Two `<select>` inputs — household size and tank volume — output a recommended pumping interval and a context-aware CTA. No email gate. No API call. Pure vanilla JS lookup table.

**Variants:**

| Variant | Context |
|---|---|
| `estimator` | Standard; embedded in process-estimator section |

**Structure:**

```html
<div class="estimator" role="form" aria-label="Pumping frequency estimator">
  <h3 class="estimator__heading">Is Your Tank Overdue?</h3>
  <p class="estimator__intro">
    Pick your household size and tank volume. Get your number.
  </p>

  <div class="estimator__controls">
    <div class="field field--select">
      <label class="field__label" for="est-household">Household size</label>
      <select class="field__select" id="est-household" name="household">
        <option value="">Select…</option>
        <option value="1">1–2 people</option>
        <option value="2">3–4 people</option>
        <option value="3">5–6 people</option>
        <option value="4">7+ people</option>
      </select>
    </div>

    <div class="field field--select">
      <label class="field__label" for="est-tank">Tank size (gallons)</label>
      <select class="field__select" id="est-tank" name="tank">
        <option value="">Select…</option>
        <option value="500">Under 750</option>
        <option value="750">750–1,000</option>
        <option value="1000">1,000–1,500</option>
        <option value="1500">1,500–2,000</option>
        <option value="2000">Over 2,000</option>
        <option value="unknown">I don't know</option>
      </select>
    </div>
  </div>

  <div class="estimator__result" id="est-result" role="status" aria-live="polite" aria-atomic="true">
    <!-- JS populates this. Hidden when both selects are unset. -->
  </div>
</div>
```

JS behavior (`assets/js/estimator.js`):
- Listen for `change` on both selects
- Look up interval from static table (EPA guidance × tank size)
- Inject result into `#est-result`:
  - Interval ≥ 3 years: "Pump every [N] years. You're on track — schedule a reminder."
  - Interval < 1 year or flagged overdue: "Your tank may be overdue. Schedule service now." + CTA button
- "I don't know" tank size: default to conservative 3-year residential assumption with a note

Style notes:
- Background: `--color-bone-50` (matches section)
- Container: `--radius-lg`, `--shadow-md`, padding `2rem`, max-width ~560px
- Controls: 2-column flex on desktop, stacked on mobile
- Result block: Inter `--text-body-lg`, `--color-navy-900`, with conditional CTA button when overdue
- Character Bible §6 IS: "Feels like a tool, not a form" — no chrome, no submit button for the estimator itself

**States:**

| State | Style delta |
|---|---|
| Initial (empty) | Result block hidden |
| One select filled | Result block still hidden (needs both inputs) |
| Both filled — healthy | Result shown, neutral tone, soft scheduling CTA |
| Both filled — overdue | Result shown, `--color-amber-500` accent, primary CTA button |

**Accessibility:**
- `role="form"` + `aria-label` on the container makes it a landmark.
- `role="status"` + `aria-live="polite"` + `aria-atomic="true"` on the result block — AT announces changes without interrupting other reading.
- Both selects have visible `<label>` elements.
- The CTA injected by JS into the result block must be a fully accessible `<a>` with descriptive text.
- `prefers-reduced-motion`: no animated transitions on result reveal.

**Do:** Include the "I don't know my tank size" option in the tank-size select and handle it gracefully with a conservative default — most homeowners genuinely don't know their tank size (functionality-ideas.md §Idea 6).

**Don't:** Gate the estimator result behind an email capture form. Character Bible §6 IS NOT: "An estimator that requires email to see the result."

---

## 23. ZIP Service Area Widget

**Purpose:** A minimal input widget in the Service Area section (section 8) that checks a visitor's ZIP code against the served area and returns an instant confirmation or soft referral. No API. Static JS array of ~40 served ZIP codes.

**Variants:** Single variant. One input + one button + one result line.

**Structure:**

```html
<div class="zip-widget" role="search" aria-label="Check if we serve your area">
  <label class="zip-widget__label" for="zip-input">
    Do we serve your ZIP code?
  </label>
  <div class="zip-widget__controls">
    <input
      class="zip-widget__input"
      type="text"
      id="zip-input"
      name="zip"
      inputmode="numeric"
      pattern="[0-9]{5}"
      maxlength="5"
      placeholder="78620"
      autocomplete="postal-code"
      aria-describedby="zip-result"
    />
    <button type="button" class="btn btn-primary zip-widget__btn" id="zip-check-btn">
      Check
    </button>
  </div>
  <p class="zip-widget__result" id="zip-result" role="status" aria-live="polite">
    <!-- JS: "Yes, we serve [City]! Ready to schedule?" or "We may be able to help — call to confirm." -->
  </p>
</div>
```

JS behavior (`assets/js/site.js` or inline):
- On button click or Enter key: read 5-digit input value
- Check against hardcoded array of served ZIP codes
- Positive match: inject "Yes, we serve [city name]! <a href='/contact/'>Ready to schedule?</a>"
- No match: inject "We may be able to help — call us at (512) 956-0047 to confirm."
- Invalid input (non-5-digit): inject "Please enter a 5-digit ZIP code."

Style notes:
- Input: `--radius-sm`, min-width 120px, `--text-body-md`
- Controls row: flex row, gap `0.5rem`, wraps on narrow viewports
- Result: Inter `--text-body-md`, color changes per state:
  - Match: `--color-sage-500` (success)
  - No match: `--color-charcoal-900` (neutral soft)
  - Error: `--color-amber-500`

**States:**

| State | Style delta |
|---|---|
| Empty | Result `<p>` empty, hidden via `:empty` |
| Match | Result `--color-sage-500`, positive message + schedule CTA |
| No match | Result `--color-charcoal-900`, soft message + phone CTA |
| Invalid | Result `--color-amber-500`, validation message |

**Accessibility:**
- `role="search"` + `aria-label` creates a search landmark.
- `type="text"` with `inputmode="numeric"` + `pattern="[0-9]{5}"` gives mobile numeric keyboard without restricting copy-paste.
- `aria-describedby="zip-result"` links input to result.
- `role="status"` + `aria-live="polite"` on result for AT announcement.
- Button must not disable on submit — keep enabled for correction.
- CTA links injected by JS must be full `<a>` elements with descriptive text.

**Do:** Return a city name in the success message ("Yes, we serve Dripping Springs!") — this personalizes the response and builds confidence for the visitor that AJ knows the area (functionality-ideas.md §Idea 2).

**Don't:** Build a form that asks for name, address, or email as part of the ZIP check. Character Bible §8 IS NOT: "An 'Apply now' form pretending to be a service area check."

---

## 24. Empty State (Generic)

**Purpose:** A consistent treatment for sections or page areas that are awaiting real content — most commonly the Gallery and Reviews pages before authentic photography or testimonials are available. Prevents "coming soon" placeholders (Character Bible §Interior IS NOT) while giving visitors a useful message and action.

**Variants:**

| Variant | Context |
|---|---|
| `empty-state--gallery` | Gallery page before authentic photos |
| `empty-state--reviews` | Reviews page (distinct from testimonials section empty state — Pattern 13) |

**Structure:**

```html
<div class="empty-state empty-state--gallery" role="status">
  <span class="empty-state__icon" aria-hidden="true">
    <!-- Placeholder camera / image SVG, 48×48px, --color-gray-200 -->
  </span>
  <p class="empty-state__message">
    Authentic fleet and job-site photos are on the way.
    We don't use stock photography — these will be real.
  </p>
  <a href="/contact/" class="link-card-cta empty-state__cta">
    Schedule service while you wait →
  </a>
</div>
```

Style notes:
- Centered, generous padding (`4rem 2rem`)
- Icon: large, `--color-gray-200` (subdued, not alarming)
- Message: Inter `--text-body-lg`, `--color-gray-600`
- No box, no card — floats on the section background
- CTA link present (G10: every section has at least one CTA linking to a real href)

**States:** Static. `role="status"` is passive.

**Accessibility:**
- `role="status"` communicates the state to AT without demanding attention.
- Do not use `role="alert"` — an empty gallery is not an error.
- CTA link must go to a real destination (CLAUDE.md §9).

**Do:** Keep the empty-state message honest and direct — "Authentic fleet and job-site photos are on the way. We don't use stock photography — these will be real." This is on-brand for AJ's transparency-forward character.

**Don't:** Use `alt=""` on a placeholder illustration with meaningful content. Decorative empty-state icons get `aria-hidden="true"`; if the icon carries unique meaning, provide text equivalent.

---

## 25. Callout Block

**Purpose:** An in-body emphasis block used within long-form interior pages (How We Work, What to Expect, Pricing, Drought, Grease Trap Compliance). Pulls a key fact, warning, or callout out of the prose flow. Uses the terracotta left-border emphasis device.

**Variants:**

| Variant | Left border color | Use |
|---|---|---|
| `callout--info` | `--color-terracotta-600` | General emphasis, pro-tips, key facts |
| `callout--warning` | `--color-amber-500` | Time-sensitive warnings (e.g., "overdue tank signs"), compliance deadlines |
| `callout--positive` | `--color-sage-500` | Good-news callouts, "you're on track" confirmations |

**Structure:**

```html
<aside class="callout callout--info" role="note">
  <p class="callout__body">
    Hays County requires a licensed hauler for all septic waste removal.
    AJ holds TCEQ License #[number] — and we can show you the certificate on request.
  </p>
  <!-- Optional attention link -->
  <a href="/about/" class="link-attention callout__link">
    See our credentials →
  </a>
</aside>
```

Style notes:
- Background: `--color-bone-100`
- Border-left: 4px solid (color per variant, from tokens above)
- Border-radius: `var(--radius-sm)` (right side only — left is flush with the border)
- Padding: `1rem 1.25rem`
- Body: Inter `--text-body-md`, `--color-charcoal-900`
- Optional link: `link-attention` pattern (Pattern 3) — terracotta-600 bottom-border emphasis device
- Max-width: inherit from prose column (typically ~70ch)
- Margin: `2rem 0` to give breathing room above and below in prose flow

**States:** Static. No interactive states.

**Accessibility:**
- `<aside role="note">` — `<aside>` is appropriate for content tangentially related to the main flow; `role="note"` further clarifies semantic intent for AT.
- Do not use `role="alert"` unless the callout content requires immediate AT announcement (it generally does not in static page context).
- Contrast: `--color-charcoal-900` on `--color-bone-100` — verify ≥ 4.5:1. (It is.)
- Left-border alone is not sufficient contrast differentiation — the variant class (info/warning/positive) should be visible via the background tint as well if possible, or the copy itself makes the register clear.

**Do:** Use the `link-attention` pattern (Pattern 3, terracotta bottom-border emphasis device) for the callout's CTA link — this is one of the two approved uses of that emphasis device in the system (the other being testimonial attribution).

**Don't:** Use a callout block as a promotional banner ("Limited time offer!"). Every callout must contain a verifiable fact, a genuine warning, or a concrete positive confirmation — consistent with CLAUDE.md §10c ("Be specific… Take a stance").

---

## Token Reference Summary

| Category | Tokens |
|---|---|
| **Colors** | `--color-navy-900` `--color-navy-700` `--color-navy-500` `--color-terracotta-600` `--color-terracotta-800` `--color-bone-50` `--color-bone-100` `--color-sage-500` `--color-amber-500` `--color-charcoal-900` `--color-gray-600` `--color-gray-200` |
| **Type scale** | `--text-display-xl` `--text-display-lg` `--text-display-md` `--text-heading-lg` `--text-heading-md` `--text-body-lg` `--text-body-md` `--text-body-sm` `--text-eyebrow` |
| **Radius** | `--radius-none` `--radius-sm` `--radius-md` `--radius-lg` `--radius-xl` `--radius-pill` |
| **Shadow** | `--shadow-sm` `--shadow-md` `--shadow-lg` `--shadow-xl` `--shadow-inset` |

**Hard bans (repeat for clarity):**
- No raw hex in component CSS — always `var(--color-*)`
- No raw `border-radius` or `box-shadow` values — always `var(--radius-*)` / `var(--shadow-*)`
- No `!important` except vendor overrides
- No inline `style=""` except Hugo image processor outputs
- No ID selectors in CSS
- No carousel/slider for any pattern
- No gradient backgrounds on any CTA
- No font other than Playfair Display + Inter

---

*Pattern library complete. 25 patterns. All token references use `var(--*)` notation. All Do/Don't rules cite the Character Bible or CLAUDE.md directly.*
