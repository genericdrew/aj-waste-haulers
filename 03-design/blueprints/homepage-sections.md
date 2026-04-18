# Homepage Section Blueprints — AJ Liquid Waste Haulers
**Stage:** 5-3 Homepage Section Blueprints
**Compiled:** 2026-04-17
**Sources:** CLAUDE.md, character-bible.md, homepage-sections.md, content.yaml, trust-analysis.md, WI-design-psychology.md

Section sequence locked per CLAUDE.md §8. Nine content sections; header + footer excluded from Miller's Law count.

---

## S1 — Hero

### 1. ASCII Wireframe — 1440px Desktop

```
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│  [NAV: logo left · Services · Service Area · About · FAQ · Contact · phone · "Get a Free Quote"]│
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                              │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   │
│  ░  Hero photograph: AJ truck on Hill Country property (limestone, live oaks, open sky)  ░   │
│  ░  30–40% navy-900 gradient overlay bottom-left to right, leaving sky/landscape visible  ░   │
│  ░                                                                                        ░   │
│  ░  ┌────────────────────────────────────────────────────┐                               ░   │
│  ░  │  [eyebrow: "MEASURED. DOCUMENTED. PROVEN."]        │                               ░   │
│  ░  │  ━━●                                               │                               ░   │
│  ░  │                                                    │                               ░   │
│  ░  │  You pay only for what we pump.                    │                               ░   │
│  ░  │  [H1 — Playfair Display — display-xl — navy-900]  │                               ░   │
│  ░  │                                                    │                               ░   │
│  ░  │  Our trucks run electronic gallon meters on every  │                               ░   │
│  ░  │  job. You see the number. So do we.                │                               ░   │
│  ░  │  [Inter — body-lg — charcoal-900]                  │                               ░   │
│  ░  │                                                    │                               ░   │
│  ░  │  [  Get a Free Quote  ]  (512) 956-0047            │                               ░   │
│  ░  │   terracotta-600 fill   text link, navy-700        │                               ░   │
│  ░  └────────────────────────────────────────────────────┘                               ░   │
│  ░                                                                                        ░   │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   │
└──────────────────────────────────────────────────────────────────────────────────────────────┘
```

### 2. ASCII Wireframe — 375px Mobile

```
┌──────────────────────────┐
│ [logo]         [☰]       │
├──────────────────────────┤
│ ░░░░░░░░░░░░░░░░░░░░░░░ │
│ ░                       ░│
│ ░ MEASURED.             ░│
│ ░ DOCUMENTED. PROVEN.   ░│
│ ░ ━━●                   ░│
│ ░                       ░│
│ ░ You pay only for      ░│
│ ░ what we pump.         ░│
│ ░                       ░│
│ ░ Our trucks run        ░│
│ ░ electronic gallon     ░│
│ ░ meters on every job.  ░│
│ ░ You see the number.   ░│
│ ░                       ░│
│ ░ [ Get a Free Quote ]  ░│
│ ░  (full-width button)  ░│
│ ░                       ░│
│ ░ (512) 956-0047        ░│
│ ░ [text link below btn] ░│
│ ░░░░░░░░░░░░░░░░░░░░░░░ │
└──────────────────────────┘
[sticky bottom bar: CALL NOW | GET QUOTE]
```

### 3. Layout Specs

| Breakpoint | Container max-width | Columns | Gutter | Padding top | Padding bottom |
|---|---|---|---|---|---|
| 375px | 100% | 1 | — | 0 (flush to nav) | 0 (Trust Strip flush below) |
| 768px | 100% | 1 | — | 0 | 0 |
| 1024px | 100% | 1 (content left-aligned at 60%) | — | 0 | 0 |
| 1440px | 100% (full-bleed) | 1 (content card ~640px left-positioned) | — | 0 | 0 |

Full-bleed background image. Content positioned in a left-aligned zone with 80px left padding at 1440px, 40px at 1024px, 24px at mobile. Hero minimum height: 520px mobile, 640px tablet, 720px desktop. Image fills full section with `object-fit: cover`.

### 4. Typography Specs

| Element | Token | Font | Size | Weight | Color |
|---|---|---|---|---|---|
| Eyebrow | `--text-eyebrow` | Inter | 0.75rem / 12px | 600 uppercase, letter-spacing 0.12em | `var(--color-terracotta-600)` |
| H1 Headline | `--text-display-xl` | Playfair Display | 4.5rem desktop → 3rem mobile | 600 | `var(--color-navy-900)` on light; `var(--color-bone-50)` if overlay dark enough |
| Body copy | `--text-body-lg` | Inter | 1.125rem / 18px | 400 | `var(--color-charcoal-900)` on light; `var(--color-bone-50)` if overlay |
| Primary CTA button | `--text-body-md` | Inter | 1rem | 600 uppercase, letter-spacing 0.04em | `var(--color-bone-50)` on `var(--color-terracotta-600)` fill |
| Secondary CTA | `--text-body-md` | Inter | 1rem | 600 | `var(--color-navy-700)` |

Eyebrow rule: Inter for eyebrows (not Playfair) — CLAUDE.md §4 recommendation.

### 5. Color Specs

| Element | Token |
|---|---|
| Section background | Hero photograph + `var(--color-navy-900)` 35% opacity gradient overlay (bottom-left corner wash) |
| Content card/zone | No explicit card background — gradient wash behind text provides legibility |
| Eyebrow text | `var(--color-terracotta-600)` |
| Eyebrow rule motif | 40px `var(--color-terracotta-600)` 2px line + 6px circle (CLAUDE.md §7) |
| H1 text | `var(--color-bone-50)` (visible on dark gradient overlay) |
| Body text | `var(--color-bone-50)` |
| Primary CTA fill | `var(--color-terracotta-600)` |
| Primary CTA text | `var(--color-bone-50)` |
| Primary CTA hover fill | `var(--color-terracotta-800)` |
| Secondary CTA text | `var(--color-bone-50)` with underline on hover |

### 6. Content Mapping

| content.yaml key | Element |
|---|---|
| `hero.eyebrow` | `<p class="eyebrow">` above H1 |
| `hero.headline` | `<h1>` |
| `hero.body` | `<p class="lead">` |
| `hero.cta` | Primary `<a>` button text |
| `hero.cta_href` | Primary button `href` |
| `hero.secondary_cta` | Secondary `<a>` link text |
| `hero.secondary_cta_href` | Secondary link `href` (tel:) |
| `hero.image` | `<img src>` — Hugo image pipeline processes to AVIF/WebP |
| `hero.image_alt` | `<img alt>` |

### 7. Interaction Specs

- **Primary CTA hover:** background transitions from `terracotta-600` to `terracotta-800`, 150ms ease. No scale transform.
- **Secondary CTA hover:** terracotta-600 underline appears, 150ms.
- **Focus rings:** 2px solid `var(--color-terracotta-600)`, 2px offset, on both CTAs (CLAUDE.md §17).
- **Keyboard order:** nav skip link → H1 region → primary CTA → secondary CTA.
- **No scroll animation on hero.** Static entry — CLAUDE.md §11 bans animated scroll-triggered cascades.
- **Image:** `fetchpriority="high"` + `loading="eager"` for LCP. Preloaded in `<head>` via Hugo template (CLAUDE.md §17).
- **`prefers-reduced-motion`:** No motion to disable here; hero has no animation.

### 8. Mobile Behavior (<768px)

- H1 scales from `--text-display-xl` (4.5rem) to 3rem per CLAUDE.md §4 mobile scale rule.
- Body copy remains `--text-body-lg` (1.125rem) — do not scale down.
- Primary CTA expands to full width (`width: 100%`) for thumb-friendly tap target.
- Secondary CTA centers below primary, 12px gap.
- Gradient overlay may intensify slightly (40%) on mobile to ensure text legibility on smaller viewport.
- Sticky bottom CTA bar appears after hero scrolls out of view (JS scroll listener in `site.js`).

### 9. Accessibility Specs

- `<section aria-label="Hero">` wrapping landmark.
- `<h1>` — one per page, this is it.
- Skip link at top of `<body>`: `<a href="#main-content" class="skip-link">Skip to main content</a>`. Target `id="main-content"` on this `<section>`.
- Hero image: meaningful alt text from `hero.image_alt` — describes the truck and Hill Country setting for screen reader users.
- Both CTA links have descriptive text (no "click here").
- Color contrast: bone-50 on navy-900 overlay = >7:1 WCAG AAA. Verify on actual photo at runtime.
- Touch targets: both CTAs ≥ 44×44px.

### 10. Trust Signal Placement

- **Eyebrow line:** "Measured. Documented. Proven." — reinforces proof-of-pumpage thesis (CLAUDE.md §12b MUST: gallon meter visible above fold).
- Hero does not stack trust badges (character-bible.md S1 IS NOT: dilutes headline). Trust strip immediately follows.
- Secondary CTA phone number signals 24/7 accessibility (reinforced in Trust Strip).

### 11. UX Law Justification

| Law | Justification |
|---|---|
| **Serial Position — Primacy** | Hero is position 1. Headline names the proof-of-pumpage thesis per strategic-validation.md §7 mandate. The most memorable content lands first. |
| **F-Pattern** | Value prop (H1) is top-left/centered above fold. Primary CTA is above fold. Navigation is persistent at top. Thesis differentiator is within the first section. All F-Pattern requirements satisfied (PASS per WI-design-psychology.md §1, Law 5). |
| **Hick's Law** | Two CTAs in hero: primary (form) + secondary (phone). Exactly 2 distinct actions — minimum cognitive load before the next section. |
| **Progressive Disclosure** | Hero answers "Can you help me?" before any other question. Trust strip (S2) immediately follows to answer "Should I trust you?" — correct cognitive sequence. |

---

## S2 — Trust Strip

### 1. ASCII Wireframe — 1440px Desktop

```
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│ navy-900 background — flush below hero, no gap                                               │
│                                                                                              │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐     │
│  │ [icon]       │ │ [icon]       │ │ [icon]       │ │ [icon]       │ │ [icon]       │     │
│  │ TCEQ Licensed│ │ Insured      │ │ Experience   │ │ Hill Country │ │ Emergency    │     │
│  │ OSSF-Reg.    │ │ Fully Insured│ │ 40+ Years    │ │ Family-Owned │ │ 24/7 by Text │     │
│  │ Hauler       │ │ Service      │ │ Combined     │ │ Since 2018   │ │              │     │
│  └──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘     │
│                                                                                              │
└──────────────────────────────────────────────────────────────────────────────────────────────┘
```

### 2. ASCII Wireframe — 375px Mobile

```
┌──────────────────────────┐
│ navy-900 background      │
│                          │
│  ┌──────────┐ ┌────────┐ │
│  │ [icon]   │ │ [icon] │ │
│  │ TCEQ     │ │Insured │ │
│  │ Licensed │ │Fully   │ │
│  │ OSSF-Reg.│ │Insured │ │
│  └──────────┘ └────────┘ │
│  ┌──────────┐ ┌────────┐ │
│  │ [icon]   │ │ [icon] │ │
│  │Experience│ │ Hill   │ │
│  │ 40+ Yrs  │ │ Country│ │
│  │ Combined │ │ Since  │ │
│  └──────────┘ └────────┘ │
│  ┌─────────────────────┐ │
│  │      [icon]         │ │
│  │    Emergency        │ │
│  │   24/7 by Text      │ │
│  └─────────────────────┘ │
└──────────────────────────┘
```

### 3. Layout Specs

| Breakpoint | Container max-width | Columns | Gutter | Padding top | Padding bottom |
|---|---|---|---|---|---|
| 375px | 100% | 2 (5th item spans full width centered) | 16px | 24px | 24px |
| 768px | 100% | 3 (or 5 if they fit) | 24px | 24px | 24px |
| 1024px | 1280px | 5 equal columns | 24px | 28px | 28px |
| 1440px | 1280px | 5 equal columns | 32px | 32px | 32px |

No section headline. No margin-top separating from Hero — `margin-top: 0` on this section. Dividers between items: `var(--radius-none)` vertical hairlines at 1px `var(--color-navy-500)` opacity 0.4 on desktop only.

### 4. Typography Specs

| Element | Token | Font | Size | Weight | Color |
|---|---|---|---|---|---|
| Item label | `--text-eyebrow` | Inter | 0.75rem | 600 uppercase, letter-spacing 0.12em | `var(--color-gray-600)` on navy reads poorly — use `var(--color-bone-100)` opacity 0.7 |
| Item value | `--text-body-sm` | Inter | 0.875rem | 400, letter-spacing 0.02em | `var(--color-bone-50)` |
| Icon | SVG line icon | — | 20×20px | — | `var(--color-terracotta-600)` |

One-line maximum per item per character-bible.md S2 rule. If a value needs two lines, rewrite it.

### 5. Color Specs

| Element | Token |
|---|---|
| Section background | `var(--color-navy-900)` |
| Label text | `var(--color-bone-100)` at 0.7 opacity |
| Value text | `var(--color-bone-50)` |
| Icons | `var(--color-terracotta-600)` |
| Vertical dividers (desktop) | `var(--color-navy-500)` at 0.4 opacity |

### 6. Content Mapping

| content.yaml key | Element |
|---|---|
| `trust_strip.items[n].label` | Item label `<span class="strip-label">` |
| `trust_strip.items[n].value` | Item value `<span class="strip-value">` |
| Icons | SVG sprite reference per `items[n]` — icon name matched to label in template logic |

Hugo range over `$.Site.Data.content.trust_strip.items`. No hardcoded text in template.

### 7. Interaction Specs

- Trust strip items are non-interactive (no hover states, no links).
- No JS required.
- Static display only.
- `prefers-reduced-motion`: no motion present.

### 8. Mobile Behavior (<768px)

- 5 items reflow to 2-column grid. 5th item centers in a full-width row below.
- Label and value stack vertically within each cell (icon top, label mid, value bottom).
- Vertical dividers are hidden on mobile (horizontal spacing sufficient).
- Padding reduces to 24px top/bottom.

### 9. Accessibility Specs

- `<section aria-label="Trust and credentials">` landmark.
- No heading required — character-bible.md S2 IS NOT: does not need a headline.
- Each item is a `<div>` with icon `aria-hidden="true"` + visible label + value text.
- No interactive elements — no keyboard traps.
- Contrast: `bone-50` on `navy-900` = >7:1 WCAG AAA.

### 10. Trust Signal Placement

All five MUST trust signals from CLAUDE.md §12b are deployed here:
1. TCEQ Licensed — Risk Reduction + Competence
2. Licensed & Insured — Risk Reduction
3. 40+ Years Combined Experience — Competence
4. Family-Owned Since 2018 — Character
5. 24/7 Emergency Service — Character (accessibility) + Risk Reduction

This is the "Early (position 2): Rational credentials" deployment per CLAUDE.md §12b placement pattern. Spans 3 of 4 trust categories in one strip.

### 11. UX Law Justification

| Law | Justification |
|---|---|
| **Proximity — Trust strip immediately after hero** | Trust strip is at position 2 with zero gap from hero. Satisfies WI-design-psychology.md §1 Law 4 ERROR requirement: "Trust strip immediately after/within hero." |
| **F-Pattern** | Visitors scanning horizontally across the top of the page hit all 5 credentials in a single eye sweep. Left-to-right reading of the strip covers license → insurance → experience → local roots → emergency. |
| **Serial Position** | Position 2 (immediately after primacy hero) captures maximum attention for credentials — higher recall than mid-page placement. |
| **Miller's Law** | 5 items in the strip = below the 7-item cognitive load limit for a list element. All 5 land without requiring a decision. |

---

## S3 — Audience Pathways

### 1. ASCII Wireframe — 1440px Desktop

```
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│ background: bone-50                                                                          │
│                                                                                              │
│         EYEBROW — "THREE KINDS OF CUSTOMER. THREE DIFFERENT PROBLEMS."                       │
│         ━━●                                                                                  │
│         Three kinds of customer. Three different problems.  [H2]                            │
│         Pick your path. We'll meet you where the work is.  [body-lg]                        │
│                                                                                              │
│  ┌──────────────────────┐  ┌───────────────────────┐  ┌──────────────────────┐             │
│  │ navy-500 4px top bar │  │ navy-500 4px top bar  │  │ navy-500 4px top bar │             │
│  │ [icon — home]        │  │ [icon — commercial]   │  │ [icon — beverage]    │             │
│  │                      │  │                       │  │                      │             │
│  │ Homeowners           │  │ Restaurants &         │  │ Wineries, Breweries  │             │
│  │ [heading-lg Playfair]│  │ Commercial Kitchens   │  │ & Distilleries       │             │
│  │                      │  │ [heading-lg Playfair] │  │ [heading-lg Playfair]│             │
│  │ Septic pumping, real │  │                       │  │                      │             │
│  │ estate inspections,  │  │ Austin's 90-day grease│  │ Hill Country's craft │             │
│  │ and 24/7 emergency   │  │ trap mandate is real. │  │ beverage corridor    │             │
│  │ help for rural homes │  │ We run the schedule…  │  │ has unique liquid    │             │
│  │ across Hays, Travis, │  │                       │  │ waste. Spent mash,   │             │
│  │ and Comal counties.  │  │                       │  │ stillage, wash water │             │
│  │                      │  │                       │  │                      │             │
│  │ Home Septic Services→│  │ Grease Trap Service → │  │ Beverage Industry  → │             │
│  └──────────────────────┘  └───────────────────────┘  └──────────────────────┘             │
│                                                                                              │
└──────────────────────────────────────────────────────────────────────────────────────────────┘
```

### 2. ASCII Wireframe — 375px Mobile

```
┌──────────────────────────┐
│ background: bone-50      │
│                          │
│ EYEBROW                  │
│ ━━●                      │
│ Three kinds of           │
│ customer. [H2]           │
│                          │
│ ┌──────────────────────┐ │
│ │ ▄ navy-500 top bar   │ │
│ │ [icon]               │ │
│ │ Homeowners [h3]      │ │
│ │ Septic pumping, real │ │
│ │ estate inspections…  │ │
│ │ Home Septic Svcs →   │ │
│ └──────────────────────┘ │
│ ┌──────────────────────┐ │
│ │ ▄ navy-500 top bar   │ │
│ │ [icon]               │ │
│ │ Restaurants &        │ │
│ │ Commercial [h3]      │ │
│ │ Austin's 90-day…     │ │
│ │ Grease Trap Svc →    │ │
│ └──────────────────────┘ │
│ ┌──────────────────────┐ │
│ │ ▄ navy-500 top bar   │ │
│ │ [icon]               │ │
│ │ Wineries, Breweries  │ │
│ │ & Distilleries [h3]  │ │
│ │ Hill Country craft…  │ │
│ │ Beverage Waste →     │ │
│ └──────────────────────┘ │
└──────────────────────────┘
```

### 3. Layout Specs

| Breakpoint | Container max-width | Columns | Gutter | Padding top | Padding bottom |
|---|---|---|---|---|---|
| 375px | 100% | 1 (stacked) | — | 56px | 56px |
| 768px | 100% | 1 or 3 (if 3 fit at 220px each) | 24px | 64px | 64px |
| 1024px | 1280px | 3 equal | 24px | 72px | 72px |
| 1440px | 1280px | 3 equal | 32px | 80px | 80px |

Section headline + subhead centered above card row. Cards: `var(--radius-lg)` (16px), `var(--shadow-sm)`, bone-100 fill, navy-500 4px `border-top` per character-bible.md S3 spec. Card padding: 32px internal all sides.

### 4. Typography Specs

| Element | Token | Font | Size | Weight | Color |
|---|---|---|---|---|---|
| Section eyebrow | `--text-eyebrow` | Inter | 0.75rem | 600 uppercase, ls 0.12em | `var(--color-terracotta-600)` |
| Section H2 | `--text-display-lg` | Playfair Display | 3rem → 2.25rem mobile | 600 | `var(--color-navy-900)` |
| Section subhead | `--text-body-lg` | Inter | 1.125rem | 400 | `var(--color-gray-600)` |
| Card audience label (H3) | `--text-heading-lg` | Playfair Display | 1.5rem | 600 | `var(--color-navy-900)` |
| Card description | `--text-body-md` | Inter | 1rem | 400 | `var(--color-charcoal-900)` |
| Card CTA text link | `--text-body-md` | Inter | 1rem | 600 | `var(--color-terracotta-600)` |

### 5. Color Specs

| Element | Token |
|---|---|
| Section background | `var(--color-bone-50)` |
| Card fill | `var(--color-bone-100)` |
| Card top accent bar | `var(--color-navy-500)` 4px |
| Card border (optional hairline) | `var(--color-gray-200)` |
| Card shadow | `var(--shadow-sm)` |
| Card hover shadow | `var(--shadow-md)` |
| Icon stroke | `var(--color-navy-700)` |
| CTA link | `var(--color-terracotta-600)` |
| CTA link hover underline | `var(--color-terracotta-800)` 4px bottom border |

### 6. Content Mapping

| content.yaml key | Element |
|---|---|
| `audience_pathways.headline` | Section `<h2>` |
| `audience_pathways.subhead` | Section `<p class="lead">` |
| `audience_pathways.cards[n].audience` | Card `<h3>` |
| `audience_pathways.cards[n].icon` | SVG icon reference |
| `audience_pathways.cards[n].description` | Card `<p>` |
| `audience_pathways.cards[n].cta` | Card `<a>` link text |
| `audience_pathways.cards[n].cta_href` | Card `<a href>` |

### 7. Interaction Specs

- **Card hover:** `box-shadow` transitions from `--shadow-sm` to `--shadow-md`, 150ms ease. No card scaling.
- **CTA text link hover:** Terracotta-800 4px bottom border appears, color deepens. 150ms.
- **Focus:** 2px terracotta-600 outline on card `<a>` element (entire card is NOT a link — only the `<a>` at bottom). Keyboard tab moves through three CTAs in source order.
- **No JS required.** Pure CSS interactions.
- **`prefers-reduced-motion`:** Transition: none override.

### 8. Mobile Behavior (<768px)

- 3 cards stack vertically, full width.
- Section H2 scales to `--text-display-lg` mobile value (2.25rem).
- Card padding reduces to 24px.
- Card CTA text link remains styled (not converted to button).
- Cards remain equal visual weight — character-bible.md S3: no card dominates.

### 9. Accessibility Specs

- `<section aria-label="Services by customer type">` landmark.
- `<h2>` section heading above cards.
- Each card's audience label is `<h3>` — correct heading hierarchy (H1 hero → H2 section → H3 card).
- Card CTA links: descriptive text ("Home Septic Services" not "Learn more").
- Icons: `aria-hidden="true"` on SVG (decorative — label provides meaning).
- No keyboard trap. Tab order: card 1 CTA → card 2 CTA → card 3 CTA.

### 10. Trust Signal Placement

- **Character signal:** The Homeowners card names "24/7 emergency help" — reinforcing S2 Emergency item.
- **Competence + Character (grease trap card):** "Austin's 90-day grease trap mandate" shows regulatory knowledge — expertise signal for commercial segment.
- **First-mover (beverage card):** Naming "spent mash, stillage, wash water" signals fluency in niche — Competence signal that no competitor can replicate.

### 11. UX Law Justification

| Law | Justification |
|---|---|
| **Hick's Law** | Exactly 3 pathways. Three distinct audiences have different fears; presenting exactly 3 choices minimizes decision paralysis. Per WI-design-psychology.md §1 Law 2: 3-5 CTAs = PASS score 100. |
| **Progressive Disclosure** | Follows trust strip (S2). After establishing credentials, the page asks the visitor to self-identify — reducing the cognitive work of scanning all 5 services undifferentiated. |
| **F-Pattern** | Section headline + three cards in a horizontal row serve the left-to-right scanning pattern. Homeowners card leads (largest residential audience) — most commercially relevant segment anchors left. |
| **Proximity** | Cards reference specific services and link directly to service detail pages, setting up S4 (Services Grid) where the full picture appears — correct logical proximity. |

---

## S4 — Services Grid

### 1. ASCII Wireframe — 1440px Desktop

```
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│ background: bone-100                                                                         │
│                                                                                              │
│         EYEBROW (not in content.yaml — use structural label in template only)                │
│         Liquid waste service, done right the first time.  [H2]                              │
│         Five focused services for Central Texas and the Hill Country.  [body-lg]            │
│                                                                                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                                         │
│  │ [icon]      │  │ [icon]      │  │ [icon]       │                                         │
│  │ Septic Tank │  │ Grease Trap │  │ Winery,      │                                         │
│  │ Pumping [h3]│  │ Cleaning[h3]│  │ Brewery &    │                                         │
│  │             │  │             │  │ Distillery   │                                         │
│  │ Residential │  │ 90-day      │  │ Waste [h3]   │                                         │
│  │ and         │  │ cycles for  │  │              │                                         │
│  │ commercial  │  │ Austin-area │  │ Spent mash,  │                                         │
│  │ tank pumping│  │ restaurants.│  │ pomace…      │                                         │
│  │             │  │             │  │              │                                         │
│  │ Learn more→ │  │ Learn more→ │  │ Learn more → │                                         │
│  └─────────────┘  └─────────────┘  └─────────────┘                                         │
│                                                                                              │
│       ┌─────────────────────┐  ┌─────────────────────┐                                      │
│       │ [icon]              │  │ [icon]               │                                      │
│       │ Real Estate Septic  │  │ 24/7 Emergency       │                                      │
│       │ Inspections [h3]    │  │ Pumping [h3]         │                                      │
│       │                     │  │                      │                                      │
│       │ Pre-listing and pre-│  │ Backing up on a      │                                      │
│       │ purchase reports…   │  │ Sunday? Text the     │                                      │
│       │                     │  │ address. We'll roll. │                                      │
│       │ Learn more →        │  │ Learn more →         │                                      │
│       └─────────────────────┘  └─────────────────────┘                                      │
│                                                                                              │
└──────────────────────────────────────────────────────────────────────────────────────────────┘
```

### 2. ASCII Wireframe — 375px Mobile

```
┌──────────────────────────┐
│ background: bone-100     │
│                          │
│ Liquid waste service,    │
│ done right… [H2]         │
│ Five focused… [body-lg]  │
│                          │
│ ┌──────────────────────┐ │
│ │ [icon] Septic Tank   │ │
│ │ Pumping [h3]         │ │
│ │ Residential and…     │ │
│ │ Learn more →         │ │
│ └──────────────────────┘ │
│ ┌──────────────────────┐ │
│ │ [icon] Grease Trap   │ │
│ │ Cleaning [h3]        │ │
│ │ 90-day cycles…       │ │
│ │ Learn more →         │ │
│ └──────────────────────┘ │
│  … (3 more cards stacked)│
└──────────────────────────┘
```

### 3. Layout Specs

| Breakpoint | Container max-width | Columns | Gutter | Padding top | Padding bottom |
|---|---|---|---|---|---|
| 375px | 100% | 1 | — | 56px | 56px |
| 768px | 768px | 2 | 24px | 64px | 64px |
| 1024px | 1280px | 3 (row 1) / 2 centered (row 2) | 24px | 72px | 72px |
| 1440px | 1280px | 3 / 2 centered | 32px | 80px | 80px |

5 cards total. Row 1: 3 cards. Row 2: 2 cards centered. Cards: `var(--radius-lg)`, `var(--shadow-sm)`, bone-50 fill (card surface lighter than section background). Internal card padding: 28px. Icon area: 48×48px container with 24px icon SVG.

### 4. Typography Specs

| Element | Token | Font | Size | Weight | Color |
|---|---|---|---|---|---|
| Section H2 | `--text-display-lg` | Playfair Display | 3rem → 2.25rem mobile | 600 | `var(--color-navy-900)` |
| Section subhead | `--text-body-lg` | Inter | 1.125rem | 400 | `var(--color-gray-600)` |
| Card service name (H3) | `--text-display-md` | Playfair Display | 2.25rem → 1.5rem mobile | 600 | `var(--color-navy-900)` |
| Card description | `--text-body-md` | Inter | 1rem | 400 | `var(--color-charcoal-900)` |
| Card CTA | `--text-body-md` | Inter | 1rem | 600 | `var(--color-terracotta-600)` |

Note: character-bible.md S4 specifies "service name (Playfair h3)" — use `--text-display-md` (2.25rem) at desktop, scaled to `--text-heading-lg` (1.5rem) on mobile for 5-card grid legibility.

### 5. Color Specs

| Element | Token |
|---|---|
| Section background | `var(--color-bone-100)` |
| Card fill | `var(--color-bone-50)` |
| Card shadow | `var(--shadow-sm)` |
| Card hover shadow | `var(--shadow-md)` |
| Service icon | `var(--color-navy-700)` |
| Service name text | `var(--color-navy-900)` |
| Description text | `var(--color-charcoal-900)` |
| CTA link | `var(--color-terracotta-600)` |
| CTA link hover | 4px `var(--color-terracotta-800)` underline border |

### 6. Content Mapping

| content.yaml key | Element |
|---|---|
| `services.headline` | Section `<h2>` |
| `services.subhead` | Section `<p class="lead">` |
| `services.items[n].name` | Card `<h3>` |
| `services.items[n].icon` | SVG icon reference |
| `services.items[n].short` | Card `<p>` description |
| `services.items[n].cta` | Card `<a>` text |
| `services.items[n].slug` | Card `<a href>` constructed as `/services/{{ .slug }}/` |

### 7. Interaction Specs

- **Card hover:** `box-shadow` transitions from `--shadow-sm` to `--shadow-md`, `cursor: pointer`, 150ms ease. Entire card is a block-level link container.
- **CTA "Learn more →" arrow:** Arrow shifts 4px right on hover, 150ms ease. Only if `prefers-reduced-motion` is not set.
- **Focus:** 2px terracotta-600 outline on card `<a>` wrapper. Tab order follows source order (top-left to bottom-right, then row 2 left to right).
- **`prefers-reduced-motion`:** Arrow animation disabled; shadow still transitions (non-motion).

### 8. Mobile Behavior (<768px)

- 5 cards reflow to single column.
- Card H3 scales to `--text-heading-lg` (1.5rem) at mobile.
- Card padding reduces to 20px.
- Hover states become active/focus states on touch.
- Character-bible.md S4: "Long paragraph descriptions. Keep it 1–2 sentences." — already enforced by content.yaml `short` values.

### 9. Accessibility Specs

- `<section aria-label="Our services">` landmark.
- `<h2>` for section heading; `<h3>` for each card service name — correct hierarchy.
- Entire card is wrapped in a `<a>` block link with `aria-label="Septic Tank Pumping — learn more"` pattern for screen readers.
- Icon SVGs: `aria-hidden="true"`.
- "Learn more →" text inside the link — descriptive enough with `aria-label` on wrapper.
- Touch targets: cards are large blocks — well above 44×44px minimum.

### 10. Trust Signal Placement

- **Competence:** 5 focused services (not 6+ inflated) demonstrates operational clarity, not franchise bloat (character-bible.md S4).
- **Emergency pumping card:** "Backing up on a Sunday? Text the address. We'll roll." — reinforces 24/7 availability established in S2.
- **Real estate inspections card:** "pre-listing and pre-purchase reports, with a gallon-meter pumpout on the same visit" — gallon meter appears a second time in the page flow, reinforcing proof-of-pumpage thesis.

### 11. UX Law Justification

| Law | Justification |
|---|---|
| **Progressive Disclosure** | Services appear after audience pathways (S3) self-segment the visitor. A homeowner arriving at the services grid already knows their path — reducing cognitive load vs. landing here cold. |
| **Proximity — Process within 2 sections of services** | S6 (Process + Estimator) is 2 positions from S4. WI-design-psychology.md §1 Law 4: "Process within 2 sections of services" = WARNING if violated, PASS at gap of 1 (S5 between). |
| **F-Pattern** | First card top-left is the highest-volume service (septic pumping). Emergency pumping (bottom-right) is discoverable but not the lead — correct hierarchy. |
| **Miller's Law** | 5 service cards. Within the 5–7 PASS range (score 100) per WI-design-psychology.md §1 Law 1 interpretation for a section-internal list. |

---

## S5 — Why AJ (Proof-of-Pumpage)

### 1. ASCII Wireframe — 1440px Desktop

```
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│ background: navy-700                                                                         │
│                                                                                              │
│  ┌──────────────────────────────────┐   ┌──────────────────────────────────────────────┐   │
│  │                                  │   │                                              │   │
│  │   [Gallon meter close-up photo]  │   │  WHY AJ  [eyebrow, terracotta-600]           │   │
│  │   —————————————————————————————  │   │  ━━●                                         │   │
│  │   radius-xl container            │   │                                              │   │
│  │   shadow-xl                      │   │  The only Hill Country hauler                │   │
│  │                                  │   │  that proves every gallon.  [H2, bone-50]    │   │
│  │                                  │   │                                              │   │
│  │                                  │   │  Most septic companies eyeball it. We        │   │
│  │                                  │   │  don't. Every AJ truck carries an            │   │
│  │                                  │   │  electronic solid-state gallon meter…        │   │
│  └──────────────────────────────────┘   │  [body-lg, bone-50 op 0.9]                   │   │
│  45% width col                          │                                              │   │
│                                         │  ┌────────────┐  ┌────────────┐             │   │
│                                         │  │[icon gauge]│  │[icon award]│             │   │
│                                         │  │Proof-of-   │  │40+ Years   │             │   │
│                                         │  │Pumpage     │  │Combined    │             │   │
│                                         │  │[h3 bone-50]│  │[h3 bone-50]│             │   │
│                                         │  │body…       │  │body…       │             │   │
│                                         │  └────────────┘  └────────────┘             │   │
│                                         │  ┌────────────┐  ┌────────────┐             │   │
│                                         │  │[icon pin]  │  │[icon shield│             │   │
│                                         │  │Dripping    │  │TCEQ-Aprvd  │             │   │
│                                         │  │Springs HQ  │  │Disposal    │             │   │
│                                         │  │[h3 bone-50]│  │[h3 bone-50]│             │   │
│                                         │  │body…       │  │body…       │             │   │
│                                         │  └────────────┘  └────────────┘             │   │
│                                         └──────────────────────────────────────────────┘   │
│                                           55% width col                                     │
└──────────────────────────────────────────────────────────────────────────────────────────────┘
```

### 2. ASCII Wireframe — 375px Mobile

```
┌──────────────────────────┐
│ background: navy-700     │
│                          │
│ WHY AJ [eyebrow,terra]   │
│ ━━●                      │
│                          │
│ The only Hill Country    │
│ hauler that proves       │
│ every gallon. [H2]       │
│                          │
│ Most septic companies    │
│ eyeball it. We don't…    │
│ [body-lg, bone-50]       │
│                          │
│ ┌──────────────────────┐ │
│ │ [gallon meter photo] │ │
│ │ radius-xl            │ │
│ └──────────────────────┘ │
│                          │
│ ┌──────────┐ ┌─────────┐ │
│ │[icon]    │ │[icon]   │ │
│ │Proof-of- │ │40+ Yrs  │ │
│ │Pumpage   │ │Combined │ │
│ │[h3]      │ │[h3]     │ │
│ │body…     │ │body…    │ │
│ └──────────┘ └─────────┘ │
│ ┌──────────┐ ┌─────────┐ │
│ │[icon]    │ │[icon]   │ │
│ │Dripping  │ │TCEQ-    │ │
│ │Springs   │ │Approved │ │
│ │[h3]      │ │[h3]     │ │
│ │body…     │ │body…    │ │
│ └──────────┘ └─────────┘ │
└──────────────────────────┘
```

### 3. Layout Specs

| Breakpoint | Container max-width | Columns | Gutter | Padding top | Padding bottom |
|---|---|---|---|---|---|
| 375px | 100% | 1 (stacked: text → photo → 2×2 pillars) | — | 64px | 64px |
| 768px | 100% | 1 (stacked) | — | 72px | 72px |
| 1024px | 1280px | 2 (40/60 split: image left, content right) | 40px | 80px | 80px |
| 1440px | 1280px | 2 (45/55 split) | 48px | 96px | 96px |

Pillars: 2×2 grid within the right column on desktop. Single column on ≤768px. Photo container: `var(--radius-xl)`, `var(--shadow-xl)`, full-height relative to content column. Pillar cards: no border, no shadow — rely on navy-700 background. Pillar padding: 24px top/bottom, 0 horizontal.

### 4. Typography Specs

| Element | Token | Font | Size | Weight | Color |
|---|---|---|---|---|---|
| Section eyebrow | `--text-eyebrow` | Inter | 0.75rem | 600 uppercase, ls 0.12em | `var(--color-terracotta-600)` |
| Section H2 | `--text-display-lg` | Playfair Display | 3rem → 2.25rem mobile | 600 | `var(--color-bone-50)` |
| Body copy | `--text-body-lg` | Inter | 1.125rem | 400 | `var(--color-bone-50)` at 0.9 opacity |
| Pillar H3 title | `--text-heading-lg` | Playfair Display | 1.5rem | 600 | `var(--color-bone-50)` |
| Pillar body | `--text-body-md` | Inter | 1rem | 400 | `var(--color-bone-100)` at 0.8 opacity |
| Pillar icon | SVG | — | 24×24px | — | `var(--color-terracotta-600)` |

### 5. Color Specs

| Element | Token |
|---|---|
| Section background | `var(--color-navy-700)` |
| Headline | `var(--color-bone-50)` |
| Body | `var(--color-bone-50)` at 0.9 opacity |
| Eyebrow | `var(--color-terracotta-600)` |
| Eyebrow motif line+dot | `var(--color-terracotta-600)` |
| Pillar icons | `var(--color-terracotta-600)` |
| Pillar H3 | `var(--color-bone-50)` |
| Pillar body | `var(--color-bone-100)` at 0.8 |
| Pillar horizontal divider (optional) | `var(--color-navy-500)` hairline |
| Image container | `var(--shadow-xl)` + `var(--radius-xl)` |

### 6. Content Mapping

| content.yaml key | Element |
|---|---|
| `why_aj.eyebrow` | `<p class="eyebrow">` |
| `why_aj.headline` | `<h2>` |
| `why_aj.body` | `<p class="lead">` |
| `why_aj.image` | `<img src>` |
| `why_aj.image_alt` | `<img alt>` |
| `why_aj.pillars[n].icon` | SVG icon reference |
| `why_aj.pillars[n].title` | Pillar `<h3>` |
| `why_aj.pillars[n].body` | Pillar `<p>` |

### 7. Interaction Specs

- **Pillar cards:** No hover effect. Dark background — avoid shadow-lift on dark surface (visually muddies). Static display.
- **No CTA in this section.** Character-bible.md S5 does not list a CTA — the section builds conviction, the next section (process) and S9 (CTA) convert it.
- **Photo:** Static. No hover zoom, no parallax (CLAUDE.md §11 bans parallax).
- **`prefers-reduced-motion`:** No motion present.

### 8. Mobile Behavior (<768px)

- Content (eyebrow + H2 + body) moves above the photo on mobile.
- Photo drops below the intro copy and above the 2×2 pillar grid.
- Pillar grid stays 2×2 on mobile (each pillar compact enough).
- Section H2 scales to 2.25rem.
- Dark section retains navy-700 background — no change at mobile.

### 9. Accessibility Specs

- `<section aria-label="Why AJ — proof-of-pumpage differentiators">` landmark.
- `<h2>` section heading.
- `<h3>` for each pillar title — correct hierarchy.
- Photo: meaningful alt text from `why_aj.image_alt` (describes gallon meter on truck).
- Pillar icons: `aria-hidden="true"` (SVG decorative).
- Contrast: `bone-50` on `navy-700` = confirmed >4.5:1 (verify at build).

### 10. Trust Signal Placement

This section is the **peak trust deployment** (CLAUDE.md §8 "designed peak"):
- **Proof-of-Pumpage pillar:** FIRST-MOVER signal per trust-analysis.md §6. Electronic gallon meters = direct Fear neutralizer. No competitor has this.
- **40+ Years Combined pillar:** Competence signal per CLAUDE.md §12b item 3.
- **Dripping Springs HQ pillar:** Character — "We live here" = locality + accountability.
- **TCEQ-Approved Disposal pillar:** Risk Reduction — CLAUDE.md §12b item 1 expanded.
- **Manifest-on-request note** in pillar 4 body: "You can ask for a copy" = NICE signal #11 per CLAUDE.md §12b.

### 11. UX Law Justification

| Law | Justification |
|---|---|
| **Peak-End Rule** | S5 is the designed peak of the page. The gallon meter photograph is the most visually distinct element of the entire site — the brand's moat made visible. Visitors who remember one section of this page will remember this one. WI-design-psychology.md §1 and CLAUDE.md §8 both designate this as the peak moment. |
| **Serial Position** | Position 5 of 9 is near the psychological midpoint — peak engagement before post-peak falloff. The designed peak at mid-page maximizes the Peak-End Rule effect. |
| **Progressive Disclosure** | The thesis (hero) → credentials (trust strip) → what we offer (services) → WHY we're different (Why AJ). This is the correct order: claim → evidence → proof-of-mechanism. |
| **F-Pattern** | Photo anchors left column; text content right. F-pattern eye movement hits the photo (visual anchor) then moves right to read differentiators — natural Western reading flow. |

---

## S6 — Process + Estimator

### 1. ASCII Wireframe — 1440px Desktop

```
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│ background: bone-50                                                                          │
│                                                                                              │
│ ── PROCESS HALF ──────────────────────────────────────────────────────────────────────────  │
│                                                                                              │
│         WHAT HAPPENS NEXT  [eyebrow]                                                         │
│         ━━●                                                                                  │
│         A pumping visit, start to finish.  [H2]                                             │
│         Five steps. Thirty to ninety minutes, most days.  [body-lg]                         │
│                                                                                              │
│  ┌────┐→──┌────┐→──┌────┐→──┌────┐→──┌────┐                                               │
│  │ 01 │   │ 02 │   │ 03 │   │ 04 │   │ 05 │                                               │
│  │────│   │────│   │────│   │────│   │────│                                               │
│  │We  │   │We  │   │We  │   │We  │   │Waste│                                               │
│  │arrive│ │measure│ │pump│   │walk│   │goes │                                               │
│  │and │   │what's│  │and │   │you │   │to   │                                               │
│  │find│   │in the│  │inspect│ │through│  │TCEQ │                                            │
│  │your│   │tank  │  │    │   │the │   │     │                                               │
│  │access│ │      │  │    │   │reading│  │     │                                             │
│  └────┘   └────┘   └────┘   └────┘   └────┘                                               │
│  [short title + 1-sentence body below each numbered circle]                                  │
│  Step 02 title underline: terracotta-600 (gallon meter step — visual emphasis)               │
│                                                                                              │
│ ── DIVIDER: bone-100 1px full-width ─────────────────────────────────────────────────────   │
│                                                                                              │
│ ── ESTIMATOR HALF ────────────────────────────────────────────────────────────────────────  │
│                                                                                              │
│         SEPTIC HEALTH CHECK  [eyebrow]                                                       │
│         ━━●                                                                                  │
│         Is your tank overdue?  [H2]                                                          │
│         Pick your household size and your tank size…  [body-lg]                             │
│                                                                                              │
│  ┌───────────────────────────────────────────────────────────────────────────────────────┐  │
│  │  ┌──────────────────────────┐     ┌──────────────────────────┐                        │  │
│  │  │ People in the home  [▼]  │     │ Tank size (gallons)  [▼]  │                       │  │
│  │  └──────────────────────────┘     └──────────────────────────┘                        │  │
│  │                                                                                        │  │
│  │  [result paragraph — aria-live="polite"] Based on TCEQ guidance, your tank should     │  │
│  │  be pumped every X years on average.                                                   │  │
│  │                                                                                        │  │
│  │  [if overdue: "Your tank is likely overdue. Call us today." + CTA button]              │  │
│  │                                                                                        │  │
│  │  Guidance only. Actual frequency depends on…  [body-sm, gray-600]                     │  │
│  └───────────────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                              │
└──────────────────────────────────────────────────────────────────────────────────────────────┘
```

### 2. ASCII Wireframe — 375px Mobile

```
┌──────────────────────────┐
│ background: bone-50      │
│                          │
│ WHAT HAPPENS NEXT [eybw] │
│ ━━●                      │
│ A pumping visit,         │
│ start to finish. [H2]    │
│ Five steps… [body-lg]    │
│                          │
│ ┌──────────────────────┐ │
│ │ 01 ──────────────    │ │
│ │ We arrive and find   │ │
│ │ your access          │ │
│ └──────────────────────┘ │
│ ┌──────────────────────┐ │
│ │ 02 ──────────────    │ │
│ │ We measure what's    │ │
│ │ in the tank [terra]  │ │
│ └──────────────────────┘ │
│  … (steps 03-05)         │
│                          │
│ ── bone-100 divider ──   │
│                          │
│ SEPTIC HEALTH CHECK      │
│ ━━●                      │
│ Is your tank overdue?    │
│ [H2]                     │
│                          │
│ ┌──────────────────────┐ │
│ │ People in home  [▼]  │ │
│ └──────────────────────┘ │
│ ┌──────────────────────┐ │
│ │ Tank size (gal) [▼]  │ │
│ └──────────────────────┘ │
│ [result text output]     │
│ [Schedule Pumping btn]   │
│ [disclaimer body-sm]     │
└──────────────────────────┘
```

### 3. Layout Specs

| Breakpoint | Container max-width | Columns | Gutter | Padding top | Padding bottom |
|---|---|---|---|---|---|
| 375px | 100% | 1 (all stacked) | — | 56px | 56px |
| 768px | 768px | 1 (process vertical; estimator vertical) | — | 64px | 64px |
| 1024px | 1280px | Process: 5 equal columns; Estimator: 2 col (selects side by side) | 24px | 72px | 72px |
| 1440px | 1280px | Process: 5 equal; Estimator: 2 col | 32px | 80px | 80px |

Internal divider between process and estimator halves: `var(--color-bone-100)` 1px full-width (CLAUDE.md §7 divider motif). Process step numbers: 48px circle, `var(--color-navy-700)` fill, `var(--color-bone-50)` text, `--text-heading-md` token. Connector lines (desktop): 1px `var(--color-gray-200)` between circles.

Estimator form container: `var(--radius-lg)`, `var(--shadow-md)`, `var(--color-bone-100)` fill, 40px padding all sides.

### 4. Typography Specs

| Element | Token | Font | Size | Weight | Color |
|---|---|---|---|---|---|
| Process eyebrow | `--text-eyebrow` | Inter | 0.75rem | 600 uppercase, ls 0.12em | `var(--color-terracotta-600)` |
| Process H2 | `--text-display-lg` | Playfair Display | 3rem → 2.25rem | 600 | `var(--color-navy-900)` |
| Process subhead | `--text-body-lg` | Inter | 1.125rem | 400 | `var(--color-gray-600)` |
| Step number | `--text-heading-lg` | Inter | 1.5rem | 600 | `var(--color-bone-50)` |
| Step title | `--text-heading-md` | Playfair Display | 1.25rem | 600 | `var(--color-navy-900)` |
| Step body | `--text-body-md` | Inter | 1rem | 400 | `var(--color-charcoal-900)` |
| Estimator eyebrow | `--text-eyebrow` | Inter | 0.75rem | 600 uppercase | `var(--color-terracotta-600)` |
| Estimator H2 | `--text-display-lg` | Playfair Display | 3rem → 2.25rem | 600 | `var(--color-navy-900)` |
| Form labels | `--text-body-sm` | Inter | 0.875rem | 600 | `var(--color-charcoal-900)` |
| Select inputs | `--text-body-md` | Inter | 1rem | 400 | `var(--color-charcoal-900)` |
| Result paragraph | `--text-body-lg` | Inter | 1.125rem | 400 | `var(--color-charcoal-900)` |
| Overdue message | `--text-body-lg` | Inter | 1.125rem | 600 | `var(--color-terracotta-600)` |
| Disclaimer | `--text-body-sm` | Inter | 0.875rem | 400 | `var(--color-gray-600)` |

### 5. Color Specs

| Element | Token |
|---|---|
| Section background | `var(--color-bone-50)` |
| Step number circles | `var(--color-navy-700)` fill |
| Step 02 title special underline | `var(--color-terracotta-600)` 2px bottom border (gallon meter emphasis) |
| Connector lines | `var(--color-gray-200)` |
| Estimator container | `var(--color-bone-100)` |
| Select input border | `var(--color-gray-200)` |
| Select focus ring | `var(--color-terracotta-600)` |
| CTA button (overdue state) | `var(--color-terracotta-600)` fill, `var(--color-bone-50)` text |
| CTA button hover | `var(--color-terracotta-800)` fill |
| Disclaimer | `var(--color-gray-600)` |

### 6. Content Mapping

**Process half:**

| content.yaml key | Element |
|---|---|
| `process.eyebrow` | `<p class="eyebrow">` |
| `process.headline` | `<h2>` |
| `process.subhead` | `<p class="lead">` |
| `process.steps[n].number` | Step circle display |
| `process.steps[n].title` | Step `<h3>` |
| `process.steps[n].body` | Step `<p>` |

**Estimator half:**

| content.yaml key | Element |
|---|---|
| `estimator.eyebrow` | `<p class="eyebrow">` |
| `estimator.headline` | `<h2>` |
| `estimator.body` | `<p class="lead">` |
| `estimator.household_label` | `<label>` for select |
| `estimator.tank_label` | `<label>` for select |
| `estimator.household_options` | `<option>` loop |
| `estimator.tank_options` | `<option>` loop |
| `estimator.result_prefix` | Result `<p>` prefix (JS populated) |
| `estimator.result_suffix` | Result `<p>` suffix |
| `estimator.overdue_message` | Conditional overdue `<p>` |
| `estimator.cta` | CTA button text |
| `estimator.cta_href` | CTA button `href` |
| `estimator.disclaimer` | Disclaimer `<p>` |

### 7. Interaction Specs

**Process steps:** No hover interactions. Static display. Step 02 title has a static terracotta underline (not hover-triggered).

**Estimator:**
- Both `<select>` elements trigger the JS calculation on `change` event.
- Result `<p>` updates inline — no page reload, no modal.
- CTA button appears only when result is calculated (`display: none` → `display: inline-block` via JS class toggle, no `!important`).
- Overdue state: result paragraph class switches to overdue styling via JS-added class.
- `estimator.js` (vanilla JS, deferred) contains the lookup table from TCEQ OSSF guidance.
- **No email gate** to see result (character-bible.md S6 IS NOT).
- `prefers-reduced-motion`: no animations in estimator; transition on CTA button appearance is `transition: none`.

### 8. Mobile Behavior (<768px)

- Process steps stack vertically (1 column). Connector lines hidden. Steps become horizontal number + text rows.
- Estimator selects stack vertically (1 column, full width each).
- Both H2 headings scale to 2.25rem.
- Estimator container padding reduces to 24px.
- CTA button full width on mobile when visible.

### 9. Accessibility Specs

- `<section aria-label="Our process and pumping frequency estimator">` landmark.
- Two `<h2>` headings in this section — one per half. Hugo partial structure keeps them semantically distinct.
- Process steps: `<ol>` (ordered list) wrapping step items — correct semantics for numbered sequential steps.
- Each step: `<li>` with `<span class="step-number">` + `<h3>` + `<p>`.
- Estimator: `<form>` element with `novalidate` (result shown inline, not form submission).
- `<label for="household-select">` and `<label for="tank-select">` — both inputs have associated labels (CLAUDE.md §17).
- Result `<p id="estimator-result" aria-live="polite">` — screen readers announce result changes.
- CTA button: `type="button"` (not submit — JS handles action). `aria-describedby="estimator-result"`.
- Skip target: Section is reachable from the skip link chain via page anchor.

### 10. Trust Signal Placement

- **Step 02 ("We measure what's in the tank"):** Third appearance of gallon meter in the page flow (hero eyebrow → Why AJ section → here). Repetition across three contexts = Competence + Risk Reduction reinforcement (CLAUDE.md §12b repetition pattern).
- **Step 05 ("Waste goes to a TCEQ-approved facility"):** Risk Reduction — TCEQ-approved disposal (FIRST-MOVER signal from trust-analysis.md §6).
- **Estimator:** Character signal — AJ as educator positions the brand as transparent and trustworthy before the sale. No competitor offers this (trust-analysis.md §3 FIRST-MOVER).
- **Estimator disclaimer:** "Source: TCEQ OSSF Advice for Owners" — sourced claim (CLAUDE.md §9 G03).

### 11. UX Law Justification

| Law | Justification |
|---|---|
| **Proximity — Process within 2 sections of services** | S6 is 2 sections after S4 (Services), with S5 (Why AJ) between. WI-design-psychology.md §1 Law 4 = 1 gap = 80% score, no WARNING triggered. |
| **Miller's Law** | 5 process steps (within cognitive limit). 2 estimator inputs. Both sub-components are within comfortable chunking limits. |
| **Progressive Disclosure** | "You know why we're different (S5) — now here's how the service actually works (process), and here's whether you personally need it right now (estimator)." Estimator creates the "I need to act" moment. |
| **Hick's Law** | Estimator: exactly 2 inputs. Minimal decision load for maximum utility. Result drives to single CTA. |
| **Combining sections** | CLAUDE.md §8 rationale: "combines two high-value sections to stay under Miller's Law ceiling." Without combination, the 12-section sequence from homepage-sections.md becomes 10 content sections — Miller WARNING territory. |

---

## S7 — Testimonials

### 1. ASCII Wireframe — 1440px Desktop

```
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│ background: bone-100                                                                         │
│                                                                                              │
│         WHAT CUSTOMERS SAY  [eyebrow, terracotta-600]                                        │
│         ━━●                                                                                  │
│         Five stars, with receipts.  [H2, navy-900]                                          │
│         We don't run canned quotes…  [body-lg, gray-600]                                    │
│                                                                                              │
│  ┌─────────────────────────┐ ┌─────────────────────────┐ ┌─────────────────────────┐        │
│  │ ★ ★ ★ ★ ★               │ │ ★ ★ ★ ★ ★               │ │ ★ ★ ★ ★ ★               │        │
│  │ [amber-500]             │ │ [amber-500]             │ │ [amber-500]             │        │
│  │                         │ │                         │ │                         │        │
│  │ " [quote mark, terra-   │ │ " [quote mark]          │ │ " [quote mark]          │        │
│  │   cotta, display-md]    │ │                         │ │                         │        │
│  │                         │ │                         │ │                         │        │
│  │ Quote body in body-lg   │ │ Quote body in body-lg   │ │ Quote body in body-lg   │        │
│  │ Inter — slightly larger │ │                         │ │                         │        │
│  │ than standard body.     │ │                         │ │                         │        │
│  │                         │ │                         │ │                         │        │
│  │ ─────────────────────── │ │ ─────────────────────── │ │ ─────────────────────── │        │
│  │ First Name L. · Date    │ │ First Name L. · Date    │ │ First Name L. · Date    │        │
│  │ [body-sm, gray-600]     │ │ · Google                │ │ · Google                │        │
│  └─────────────────────────┘ └─────────────────────────┘ └─────────────────────────┘        │
│                                                                                              │
│  [EMPTY STATE — if items: [] — "We're pulling our Google reviews in now. Come back soon."   │
│   with a link to Google. Visible only when testimonials array is empty.]                     │
│                                                                                              │
└──────────────────────────────────────────────────────────────────────────────────────────────┘
```

### 2. ASCII Wireframe — 375px Mobile

```
┌──────────────────────────┐
│ background: bone-100     │
│                          │
│ WHAT CUSTOMERS SAY       │
│ ━━●                      │
│ Five stars, with         │
│ receipts. [H2]           │
│                          │
│ ┌──────────────────────┐ │
│ │ ★ ★ ★ ★ ★            │ │
│ │ " [large quote mark] │ │
│ │ Quote body in body-lg│ │
│ │ ─────────────────    │ │
│ │ First Name L. · Date │ │
│ │ · Google             │ │
│ └──────────────────────┘ │
│ ┌──────────────────────┐ │
│ │ ★ ★ ★ ★ ★            │ │
│ │ [second card]        │ │
│ └──────────────────────┘ │
│ ┌──────────────────────┐ │
│ │ ★ ★ ★ ★ ★            │ │
│ │ [third card]         │ │
│ └──────────────────────┘ │
└──────────────────────────┘
```

### 3. Layout Specs

| Breakpoint | Container max-width | Columns | Gutter | Padding top | Padding bottom |
|---|---|---|---|---|---|
| 375px | 100% | 1 | — | 56px | 56px |
| 768px | 768px | 1 or 2 | 24px | 64px | 64px |
| 1024px | 1280px | 3 equal | 24px | 72px | 72px |
| 1440px | 1280px | 3 equal | 32px | 80px | 80px |

Cards: `var(--radius-xl)` (24px), `var(--shadow-sm)`, `var(--color-bone-50)` fill. Internal card padding: 32px. Star row: 20px height, 4px gap between stars. Quote mark: decorative Playfair or CSS `content: '"'` at `--text-display-md` size, terracotta-600, positioned absolutely top-left of card or as a design flourish.

No carousel (CLAUDE.md §11 hard ban).

### 4. Typography Specs

| Element | Token | Font | Size | Weight | Color |
|---|---|---|---|---|---|
| Section eyebrow | `--text-eyebrow` | Inter | 0.75rem | 600 uppercase, ls 0.12em | `var(--color-terracotta-600)` |
| Section H2 | `--text-display-lg` | Playfair Display | 3rem → 2.25rem mobile | 600 | `var(--color-navy-900)` |
| Section body | `--text-body-lg` | Inter | 1.125rem | 400 | `var(--color-gray-600)` |
| Quote body | `--text-body-lg` | Inter | 1.125rem | 400 | `var(--color-charcoal-900)` |
| Quote mark flourish | `--text-display-md` | Playfair Display | 2.25rem | 400 | `var(--color-terracotta-600)` |
| Attribution | `--text-body-sm` | Inter | 0.875rem | 400 | `var(--color-gray-600)` |
| Stars | SVG | — | 16×16px each | — | `var(--color-amber-500)` |

### 5. Color Specs

| Element | Token |
|---|---|
| Section background | `var(--color-bone-100)` |
| Card fill | `var(--color-bone-50)` |
| Card shadow | `var(--shadow-sm)` |
| Stars | `var(--color-amber-500)` |
| Quote mark | `var(--color-terracotta-600)` |
| Quote text | `var(--color-charcoal-900)` |
| Attribution text | `var(--color-gray-600)` |
| Attribution divider hairline | `var(--color-gray-200)` |

### 6. Content Mapping

| content.yaml key | Element |
|---|---|
| `testimonials.eyebrow` | `<p class="eyebrow">` |
| `testimonials.headline` | `<h2>` |
| `testimonials.body` | `<p class="lead">` |
| `testimonials.items[n].stars` | Star row (always 5 per CLAUDE.md §9 no-fabrication rule — if displayed) |
| `testimonials.items[n].quote` | Quote `<blockquote>` |
| `testimonials.items[n].attribution` | `<cite>` — first name + last initial + date + source |
| `testimonials.google_link` | Empty state link href |
| `testimonials.write_review_cta` | Empty state link text |

**Empty state logic:** When `testimonials.items` is an empty array, the template renders the empty-state message (character-bible.md S7 spec: "We're pulling our Google reviews in now. Come back soon.") with a `<a href="{{ .Site.Data.content.testimonials.google_link }}">` link. No fabricated testimonials under any circumstances (CLAUDE.md §9 + §11).

### 7. Interaction Specs

- Cards are non-interactive (no hover, no click). Static display.
- No carousel or slider (CLAUDE.md §11 hard ban).
- Empty state link: standard hover underline, terracotta-800 on hover, 150ms.
- Focus: standard 2px terracotta-600 ring on any links.
- No JS required for static testimonial display.

### 8. Mobile Behavior (<768px)

- 3 cards stack to single column.
- Section H2 scales to 2.25rem.
- Card padding reduces to 24px.
- Stars and quote mark maintain same size — they are visual anchors.
- Attribution remains `--text-body-sm`.

### 9. Accessibility Specs

- `<section aria-label="Customer testimonials">` landmark.
- `<h2>` section heading.
- Each testimonial: `<figure>` + `<blockquote>` + `<figcaption>` for attribution — correct semantic structure.
- Star rows: `<span aria-label="5 out of 5 stars">` wrapping the SVG stars. SVG stars are `aria-hidden="true"`.
- Quote mark flourish: `aria-hidden="true"` (purely decorative).
- Attribution: `<cite>` element (correct use for reviewer attribution).
- Empty state: `<p>` with link — fully accessible, no visual trickery.

### 10. Trust Signal Placement

- **Social Proof — MUST signal:** On-site named testimonials (trust-analysis.md §6 MUST). This is the **mid-page emotional trust** deployment per CLAUDE.md §12b placement pattern.
- **Review dates visible:** First name + last initial + date is a NICE signal per trust-analysis.md §6 — review recency/velocity marker. No competitor shows dates.
- **"Five stars, with receipts"** headline: consistent with proof-of-pumpage brand voice — signals that reviews are verifiable.
- **Source attribution (Google):** Shows reviews are from a real external platform, not self-generated.

### 11. UX Law Justification

| Law | Justification |
|---|---|
| **Proximity — Testimonials within 2 sections of services** | S7 (Testimonials) is 3 sections from S4 (Services), with S5 and S6 between. Per WI-design-psychology.md §1 Law 4: at 2-gap = 60% proximity score. This is a known trade-off accepted in CLAUDE.md §8 Composition Score (Proximity scored 75 overall). The Why AJ and Process sections between S4 and S7 are necessary for the persuasion arc — moving testimonials earlier would sacrifice the proof-of-pumpage peak. |
| **Peak-End Rule — emotional follow-through** | Testimonials follow the designed peak (S5 Why AJ). Visitors who were convinced by the gallon meter differentiator are now reinforced by peer voices — the persuasion arc moves from rational (mechanism) to emotional (social proof). |
| **Serial Position** | S7 is in the recency-approaching zone. As visitors near the end of the page, testimonials catch the "final confirmation" need before the CTA ask. |
| **Progressive Disclosure** | "You know what we do → you know how we do it → here's what others say about it." Testimonials answer "Do others trust them?" after claims and process have been laid out. |

---

## S8 — Service Area

### 1. ASCII Wireframe — 1440px Desktop

```
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│ background: bone-50                                                                          │
│                                                                                              │
│         WHERE WE WORK  [eyebrow, terracotta-600]                                             │
│         ━━●                                                                                  │
│         Hill Country and South-Central Texas.  [H2, navy-900]                               │
│         Dripping Springs is home. We run west to Driftwood…  [body-lg]                      │
│                                                                                              │
│  ┌────────────────────────────────────────┐  ┌──────────────────────────────────────────┐  │
│  │                                        │  │                                          │  │
│  │  [Static SVG map]                      │  │  Primary Cities              County       │  │
│  │  Hill Country service triangle:        │  │  ─────────────────────────────────────   │  │
│  │  Hays · Travis · Comal counties        │  │  Dripping Springs            Hays         │  │
│  │  highlighted                           │  │  Austin                      Travis       │  │
│  │  Primary city labels on map            │  │  Kyle                        Hays         │  │
│  │  Subtle topo-line pattern behind map   │  │  New Braunfels               Comal        │  │
│  │  (character-bible.md S8 IS)            │  │  Driftwood                   Hays         │  │
│  │                                        │  │                                          │  │
│  │                                        │  │  Also serving:                           │  │
│  │                                        │  │  Wimberley · Buda · San Marcos           │  │
│  │                                        │  │  Spicewood · Johnson City · Canyon Lake   │  │
│  └────────────────────────────────────────┘  │                                          │  │
│  55% width                                   │  ┌──────────────────────────────────────┐│  │
│                                              │  │ Check your ZIP code               [  ]││  │
│                                              │  │ [input placeholder: 78620]  [Check] ││  │
│                                              │  └──────────────────────────────────────┘│  │
│                                              │  [result line — aria-live="polite"]      │  │
│                                              └──────────────────────────────────────────┘  │
│                                              45% width                                      │
└──────────────────────────────────────────────────────────────────────────────────────────────┘
```

### 2. ASCII Wireframe — 375px Mobile

```
┌──────────────────────────┐
│ background: bone-50      │
│                          │
│ WHERE WE WORK [eyebrow]  │
│ ━━●                      │
│ Hill Country and         │
│ South-Central Texas. [H2]│
│                          │
│ [SVG map — full width,   │
│  max-height 280px]       │
│                          │
│ Primary Cities:          │
│ • Dripping Springs       │
│ • Austin                 │
│ • Kyle                   │
│ • New Braunfels          │
│ • Driftwood              │
│                          │
│ Also serving:            │
│ Wimberley · Buda ·       │
│ San Marcos · Spicewood   │
│ · Johnson City           │
│ · Canyon Lake            │
│                          │
│ ┌──────────────────────┐ │
│ │ ZIP code  [Check]    │ │
│ └──────────────────────┘ │
│ [result text]            │
└──────────────────────────┘
```

### 3. Layout Specs

| Breakpoint | Container max-width | Columns | Gutter | Padding top | Padding bottom |
|---|---|---|---|---|---|
| 375px | 100% | 1 (map → cities → ZIP) | — | 56px | 56px |
| 768px | 768px | 1 (stacked) | — | 64px | 64px |
| 1024px | 1280px | 2 (55/45 split: map left, city grid + ZIP right) | 40px | 72px | 72px |
| 1440px | 1280px | 2 (55/45) | 48px | 80px | 80px |

SVG map: `max-height: 480px` desktop, `max-height: 280px` mobile, `width: 100%`, `viewBox` preserved. Not a Google Maps iframe or Leaflet embed (character-bible.md S8 IS NOT). City grid: `<ul>` with `<li>` items linked to `/service-area/[slug]/`. Secondary city list: inline comma-separated or simple `<ul>` without links. ZIP widget: `<input type="text" inputmode="numeric" pattern="[0-9]{5}">` + `<button>` side by side.

### 4. Typography Specs

| Element | Token | Font | Size | Weight | Color |
|---|---|---|---|---|---|
| Section eyebrow | `--text-eyebrow` | Inter | 0.75rem | 600 uppercase, ls 0.12em | `var(--color-terracotta-600)` |
| Section H2 | `--text-display-lg` | Playfair Display | 3rem → 2.25rem mobile | 600 | `var(--color-navy-900)` |
| Section body | `--text-body-lg` | Inter | 1.125rem | 400 | `var(--color-charcoal-900)` |
| City list heading | `--text-heading-md` | Inter | 1.25rem | 600 | `var(--color-navy-900)` |
| Primary city links | `--text-body-md` | Inter | 1rem | 400 | `var(--color-navy-700)` |
| Secondary city list | `--text-body-sm` | Inter | 0.875rem | 400 | `var(--color-gray-600)` |
| ZIP label | `--text-body-sm` | Inter | 0.875rem | 600 | `var(--color-charcoal-900)` |
| ZIP input | `--text-body-md` | Inter | 1rem | 400 | `var(--color-charcoal-900)` |
| ZIP result | `--text-body-md` | Inter | 1rem | 600 | contextual (sage-500 for in-service, gray-600 for out) |

### 5. Color Specs

| Element | Token |
|---|---|
| Section background | `var(--color-bone-50)` |
| SVG map county fills (highlighted) | `var(--color-navy-500)` at 0.15 opacity |
| SVG map county borders | `var(--color-navy-700)` 1px |
| SVG map city labels | `var(--color-navy-900)` |
| Topo line pattern (behind map) | `var(--color-gray-200)` very low opacity |
| Primary city links | `var(--color-navy-700)` |
| Primary city links hover | `var(--color-terracotta-600)` |
| ZIP input border | `var(--color-gray-200)` |
| ZIP input focus border | `var(--color-terracotta-600)` |
| ZIP "Check" button | `var(--color-navy-700)` fill, `var(--color-bone-50)` text |
| ZIP result — in service | `var(--color-sage-500)` |
| ZIP result — out of service | `var(--color-gray-600)` |

### 6. Content Mapping

| content.yaml key | Element |
|---|---|
| `service_area.eyebrow` | `<p class="eyebrow">` |
| `service_area.headline` | `<h2>` |
| `service_area.body` | `<p class="lead">` |
| `service_area.primary_cities[n].name` | City list `<a>` text |
| `service_area.primary_cities[n].slug` | City link `href` as `/service-area/{{ .slug }}/` |
| `service_area.primary_cities[n].county` | City county label |
| `service_area.secondary_cities` | Comma-separated or `<ul>` secondary list |
| `service_area.zip_widget_label` | ZIP `<label>` |
| `service_area.zip_widget_hint` | ZIP `<input placeholder>` |
| `service_area.zip_in_service_message` | ZIP result (in-service state) |
| `service_area.zip_out_of_service_message` | ZIP result (out-of-service state) |

ZIP check logic: `site.js` or inline `<script defer>` contains a served-ZIP array. On button click or Enter, compares input against array and writes the appropriate content.yaml message to the result paragraph. No server-side call.

### 7. Interaction Specs

- **City links hover:** `var(--color-terracotta-600)` text color, terracotta-800 underline, 150ms.
- **ZIP input focus:** 2px terracotta-600 focus ring + border changes to terracotta-600.
- **"Check" button hover:** navy-500 fill, 150ms.
- **ZIP result:** Writes in-service or out-of-service message to `aria-live="polite"` paragraph.
- **Enter key in ZIP input:** Triggers the same check as button click.
- **No third-party geocoding API.** Static ZIP array in JS.
- `prefers-reduced-motion`: No motion present in this section.

### 8. Mobile Behavior (<768px)

- Map stacks above city grid (full width, height capped at 280px).
- City grid below map, stacked vertically.
- ZIP widget below city grid.
- ZIP input and button remain side-by-side on mobile (both 44px+ height, button ~80px wide).
- Section H2 scales to 2.25rem.

### 9. Accessibility Specs

- `<section aria-label="Service area">` landmark.
- `<h2>` section heading.
- SVG map: `<svg role="img" aria-label="Map of AJ service area covering Hays, Travis, and Comal counties in Texas">`. City labels within SVG: `<text>` elements (accessible to assistive tech). County regions: `<path aria-label="Hays County">` etc.
- Primary city list: `<ul>` with `<li><a href>` — standard accessible link list.
- ZIP widget: `<label for="zip-input">` associated with `<input id="zip-input">`. Button has explicit `aria-label="Check if we serve this ZIP code"`.
- Result paragraph: `id="zip-result" aria-live="polite" aria-atomic="true"`.
- Keyboard: Tab to input → Enter/Tab to button → result announced by screen reader.

### 10. Trust Signal Placement

- **Competence — service area display:** 4/5 competitors show service areas (trust-analysis.md §3 MUST). AJ's previous prose-only list is now a visual grid with named county data.
- **Local character:** Dripping Springs listed first, with county attribution — reinforces "Hill Country Roots" trust strip item.
- **ZIP widget:** Character signal — "we respect your time; find out before you call" (educational + transparent, no competitor offers this per homepage-sections.md §3).

### 11. UX Law Justification

| Law | Justification |
|---|---|
| **Progressive Disclosure** | "You know what we do → you know why to trust us → now check if we serve you." Geography is answered after value and trust — correct cognitive sequencing per WI-design-psychology.md §2 Dependency Rules: "Service Areas: Best after services, testimonials. Reason: Geography after value+trust." |
| **Proximity** | S8 is positioned after S7 (Testimonials) — satisfying the "Service Areas best after testimonials" dependency rule. |
| **F-Pattern** | Map (visual anchor) left, city links right. Visitors scanning the left column get the geographic picture; those who want specifics move right to the city list or ZIP widget. |
| **Hick's Law** | ZIP widget: single input + single action = 1 micro-decision. Minimal friction for the "do you serve me?" question. |

---

## S9 — CTA Banner

### 1. ASCII Wireframe — 1440px Desktop

```
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│ background: navy-900                                                                         │
│                                                                                              │
│                                                                                              │
│              READY WHEN YOU ARE  [eyebrow, terracotta-600]                                   │
│              ━━●                                                                             │
│                                                                                              │
│              Schedule your pumping. Or call us right now.                                    │
│              [H2 — Playfair Display — display-lg — bone-50]                                 │
│                                                                                              │
│              Free quotes. Same-day service when we've got                                    │
│              the truck. 24/7 emergency response by text.                                     │
│              [body-lg — bone-50 op 0.9]                                                     │
│                                                                                              │
│              [  Get a Free Quote  ]    [  Call (512) 956-0047  ]                            │
│               bone-50 fill + navy-900   bone-50 outline + bone-50 text                      │
│                                                                                              │
│              Dripping Springs · Austin · Kyle · New Braunfels · Driftwood                   │
│              [body-sm — bone-50 op 0.6]                                                     │
│                                                                                              │
│                                                                                              │
└──────────────────────────────────────────────────────────────────────────────────────────────┘
```

### 2. ASCII Wireframe — 375px Mobile

```
┌──────────────────────────┐
│ background: navy-900     │
│                          │
│ READY WHEN YOU ARE       │
│ [eyebrow, terracotta]    │
│ ━━●                      │
│                          │
│ Schedule your pumping.   │
│ Or call us right now.    │
│ [H2, bone-50]            │
│                          │
│ Free quotes. Same-day    │
│ service when we've got   │
│ the truck. 24/7 emergency│
│ [body-lg, bone-50]       │
│                          │
│ [ Get a Free Quote ]     │
│  (full width, bone-50)   │
│                          │
│ [ Call (512) 956-0047 ]  │
│  (full width, outline)   │
│                          │
│ Dripping Springs ·       │
│ Austin · Kyle · New      │
│ Braunfels · Driftwood    │
│ [body-sm, bone-50 op 0.6]│
└──────────────────────────┘
```

### 3. Layout Specs

| Breakpoint | Container max-width | Columns | Gutter | Padding top | Padding bottom |
|---|---|---|---|---|---|
| 375px | 100% | 1 (centered) | — | 64px | 64px |
| 768px | 768px | 1 (centered) | — | 72px | 72px |
| 1024px | 960px | 1 (centered, max-width 800px for content) | — | 88px | 88px |
| 1440px | 960px | 1 (centered) | — | 96px | 96px |

Content is center-aligned (text-align: center). Buttons sit on a single row at desktop with 24px gap; stack to full-width single column on mobile. Supporting line (city list) is below the buttons with 24px margin-top. Character-bible.md S9: "Generous padding — this section breathes." Supporting line below buttons. No form embedded (character-bible.md S9 IS NOT).

### 4. Typography Specs

| Element | Token | Font | Size | Weight | Color |
|---|---|---|---|---|---|
| Section eyebrow | `--text-eyebrow` | Inter | 0.75rem | 600 uppercase, ls 0.12em | `var(--color-terracotta-600)` |
| Section H2 | `--text-display-lg` | Playfair Display | 3rem → 2.25rem mobile | 600 | `var(--color-bone-50)` |
| Body copy | `--text-body-lg` | Inter | 1.125rem | 400 | `var(--color-bone-50)` at 0.9 opacity |
| Primary CTA button | `--text-body-md` | Inter | 1rem | 600 uppercase, ls 0.04em | `var(--color-navy-900)` on `var(--color-bone-50)` fill |
| Secondary CTA button | `--text-body-md` | Inter | 1rem | 600 | `var(--color-bone-50)` text + 2px `var(--color-bone-50)` border |
| Supporting line | `--text-body-sm` | Inter | 0.875rem | 400 | `var(--color-bone-50)` at 0.6 opacity |

### 5. Color Specs

| Element | Token |
|---|---|
| Section background | `var(--color-navy-900)` |
| Eyebrow | `var(--color-terracotta-600)` |
| H2 | `var(--color-bone-50)` |
| Body | `var(--color-bone-50)` at 0.9 opacity |
| Primary CTA fill | `var(--color-bone-50)` |
| Primary CTA text | `var(--color-navy-900)` |
| Primary CTA hover fill | `var(--color-bone-100)` |
| Secondary CTA border | `var(--color-bone-50)` 2px solid |
| Secondary CTA text | `var(--color-bone-50)` |
| Secondary CTA hover | `var(--color-bone-50)` 20% opacity fill, text stays `bone-50` |
| Supporting line | `var(--color-bone-50)` at 0.6 opacity |

Per CLAUDE.md §3 usage rules: "Primary CTA on dark = bone-50 fill with navy-900 text." CTA buttons must not use gradient backgrounds (CLAUDE.md §11).

### 6. Content Mapping

| content.yaml key | Element |
|---|---|
| `cta_banner.eyebrow` | `<p class="eyebrow">` |
| `cta_banner.headline` | `<h2>` |
| `cta_banner.body` | `<p class="lead">` |
| `cta_banner.primary_cta` | Primary `<a>` button text |
| `cta_banner.primary_cta_href` | Primary button `href` (/contact/) |
| `cta_banner.secondary_cta` | Secondary `<a>` button text |
| `cta_banner.secondary_cta_href` | Secondary button `href` (tel:) |
| `cta_banner.supporting_line` | Supporting `<p>` below buttons |

### 7. Interaction Specs

- **Primary CTA hover:** fill transitions from `bone-50` to `bone-100`, 150ms ease.
- **Secondary CTA hover:** 20% opacity `bone-50` background fill appears behind outline button, 150ms ease.
- **Focus:** Both buttons: 2px `var(--color-terracotta-600)` outline, 2px offset. On dark background, terracotta focus ring is visible against navy-900.
- **Keyboard order:** Tab from section entry → primary CTA → secondary CTA → supporting line (non-interactive).
- No JS required. Static section.
- `prefers-reduced-motion`: transitions disabled.

### 8. Mobile Behavior (<768px)

- H2 scales to 2.25rem.
- Both CTA buttons stack to full width (100%), 12px vertical gap between them.
- Supporting line wraps naturally (white-space: normal).
- Padding reduces to 64px top/bottom — still generous per character-bible.md S9.
- Sticky bottom mobile CTA bar (from mobile_cta_bar content key) remains visible in this viewport but does not conflict — banner provides a third persistent action surface for scroll-depth conversions.

### 9. Accessibility Specs

- `<section aria-label="Call to action">` landmark.
- `<h2>` section heading — correct hierarchy (one H2 per section, consistent with all other sections).
- Primary CTA `<a>`: descriptive text "Get a Free Quote" — unambiguous destination.
- Secondary CTA `<a>`: "Call (512) 956-0047" — number visible in link text, screen readers read the full number.
- Both buttons ≥ 44×44px touch target.
- Contrast: `navy-900` text on `bone-50` fill = >7:1. `bone-50` outline on `navy-900` = >7:1.
- Supporting line: visual decoration only, not an interactive element. `aria-hidden="false"` — it contains service city information that is meaningful to screen readers.

### 10. Trust Signal Placement

- **24/7 emergency reinforcement:** Body copy "24/7 emergency response by text" — fourth mention in the page flow (Trust Strip → Homeowners card → emergency service card → here). Recency-position reinforcement before conversion.
- **Supporting line:** City names in the supporting line confirm service area in the final section — rational trust confirmation (CLAUDE.md §12b "Late (footer): Credential reinforcement").
- **"Free quotes"** in body copy: Character signal — explicit "free" reduces commitment anxiety (trust-analysis.md §6 SHOULD: "Free estimates / quote CTA: +18% form completion").

### 11. UX Law Justification

| Law | Justification |
|---|---|
| **Serial Position — Recency** | S9 is the final content section before the footer. Per WI-design-psychology.md §1 Law 3 Serial Position: "Last section: CTA/contact (NOT FAQ, blog, about) — ERROR if violated." CTA Banner at position 9 satisfies this requirement at the PASS/no-error level. The designed end-action captures visitors who have scrolled the full page. |
| **Hick's Law** | Two CTA buttons: primary (form) + secondary (phone). Exactly 2 choices at the final decision point — the same pair from the hero, creating bookend consistency. |
| **Peak-End Rule — End** | CTA Banner is the designed end action. Visitors will remember the final section's emotional register — the generous padding, the clear ask, the phone number within reach. Calm confidence, not pressure. |
| **Proximity — CTA within 1 section of testimonials** | S9 (CTA Banner) is 2 sections from S7 (Testimonials), with S8 (Service Area) between. WI-design-psychology.md §1 Law 4: "CTA banner within 1 section of testimonials — WARNING." This gap is accepted per CLAUDE.md §8 Composition Score (Service Area is a necessary and expected final-path section). The overall composition score of 94.75 accounts for this. |
| **F-Pattern** | Center-aligned text with two prominent buttons creates a natural visual anchor. On a dark background, the high-contrast bone-50 buttons draw the eye directly. |

---

## Cross-Section Reference Summary

### Visual Pacing Check (CLAUDE.md §8)

| Section | Background |
|---|---|
| S1 Hero | bone-50 with navy-900 overlay on photo |
| S2 Trust Strip | navy-900 |
| S3 Audience Pathways | bone-50 |
| S4 Services Grid | bone-100 |
| S5 Why AJ | navy-700 |
| S6 Process + Estimator | bone-50 |
| S7 Testimonials | bone-100 |
| S8 Service Area | bone-50 |
| S9 CTA Banner | navy-900 |

No 3+ consecutive sections share the same background. Visual pacing rule PASSES.

### Gallon Meter / Proof-of-Pumpage Appearances

| Section | Context |
|---|---|
| S1 Hero | Eyebrow line "Measured. Documented. Proven." + body copy |
| S4 Services Grid | Real estate inspections card: "with a gallon-meter pumpout on the same visit" |
| S5 Why AJ | Section headline + Proof-of-Pumpage pillar (headline element) + photo |
| S6 Process | Step 02 title (explicitly named) + terracotta underline emphasis |

Four distinct appearances across four sections = distributed reinforcement across the page. No single section over-relies on the differentiator.

### CTA Hierarchy Summary (Hick's Law)

| CTA | Appears In | Destination | Hierarchy |
|---|---|---|---|
| "Get a Free Quote" | S1, S9, estimator overdue state | /contact/ | Primary |
| "(512) 956-0047" | S1, S9 | tel:+15129560047 | Secondary |
| "Home Septic Services →" | S3 | /services/septic-tank-pumping/ | Tertiary |
| "Grease Trap Service →" | S3 | /services/grease-trap-pumping/ | Tertiary |
| "Beverage Industry Waste →" | S3 | /services/beverage-industry-waste/ | Tertiary |
| "Learn more →" (×5) | S4 | /services/[slug]/ | Tertiary |
| "Schedule a Pumping" | S6 estimator | /contact/ | Tertiary (conditional) |

Distinct destinations: 3 primary (form, phone, service pages). Consistent with Hick's Law PASS (3–5 distinct CTAs). Same destination + same ask counted as one repeated CTA per WI-design-psychology.md §1 Law 2.

### Trust Signal Distribution Map

| Trust Signal | S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8 | S9 |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Proof-of-pumpage / gallon meter | ✓ | | | ✓ | ✓ | ✓ | | | |
| TCEQ Licensed | | ✓ | | | ✓ | ✓ | | | |
| Licensed & Insured | | ✓ | | | | | | | |
| 40+ Years Experience | | ✓ | | | ✓ | | | | |
| Family-Owned Since 2018 | | ✓ | | | ✓ | | | | |
| 24/7 Emergency | | ✓ | ✓ | ✓ | | | | | ✓ |
| Named testimonials | | | | | | | ✓ | | |
| Hill Country locality | | ✓ | ✓ | | ✓ | | | ✓ | ✓ |
