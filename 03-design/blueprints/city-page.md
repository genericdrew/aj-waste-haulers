# Stage 5-4 — City Service-Area Page Blueprint

**Template:** `layouts/service-area/single.html`
**Data source:** `data/locations/cities/[slug].yaml`
**Content instances:** 5 (dripping-springs · austin · kyle · new-braunfels · driftwood)
**Prepared:** 2026-04-17

---

## Section Stack

| Order | Section | Background | Notes |
|---|---|---|---|
| 1 | Hero | bone-50 + navy-900 overlay on photo | City-specific headline + body |
| 2 | Local Context | bone-100 | County authority, aquifer notes, regulatory callouts |
| 3 | Compliance Callouts | bone-100 (within section) | 2–3 city-specific callout cards |
| 4 | Neighborhoods Served | bone-50 | Named list, intro paragraph |
| 5 | Landmarks / Commercial Accounts | navy-700 | Named venues where applicable |
| 6 | Typical Jobs | bone-50 | Bulleted list of what AJ does most in this city |
| 7 | Related Services | bone-100 | 2–4 service cards linking to service detail pages |
| 8 | CTA Banner | navy-900 | Primary + phone CTA; city name in supporting line |

Visual pacing: bone-50 → bone-100 → bone-50 → navy-700 → bone-50 → bone-100 → navy-900. No 3+ consecutive same-background sections. Passes.

---

## ASCII Wireframes

### 1440px Desktop

```
┌────────────────────────────────────────────────────────────────────┐
│  NAV: Logo | Services | Service Area | About | FAQ | Contact | CTA │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  HERO PHOTO (authentic AJ truck or city landscape)           │  │
│  │  30–40% navy-900 gradient overlay                            │  │
│  │                                                              │  │
│  │  [EYEBROW — Inter 12px/0.12em uppercase, terracotta-600]     │  │
│  │  HEADLINE — Playfair display-lg, bone-50                     │  │
│  │                                                              │  │
│  │  Body copy — Inter body-lg, bone-50, max 65ch                │  │
│  │                                                              │  │
│  │  [GET A FREE QUOTE]   Call (512) 956-0047                   │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                    │
│  LOCAL CONTEXT — bone-100 bg                                       │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  H2: heading (Playfair display-lg, navy-900)                 │  │
│  │  Body paragraph — Inter body-md                              │  │
│  │                                                              │  │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │  │
│  │  │ Callout 1    │  │ Callout 2    │  │ Callout 3    │       │  │
│  │  │ Title (H3)   │  │ Title (H3)   │  │ Title (H3)   │       │  │
│  │  │ Body text    │  │ Body text    │  │ Body text    │       │  │
│  │  └──────────────┘  └──────────────┘  └──────────────┘       │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                    │
│  NEIGHBORHOODS — bone-50 bg                                        │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  H2: heading  ●  Intro paragraph                             │  │
│  │                                                              │  │
│  │  • Neighborhood / area 1        • Neighborhood / area 2      │  │
│  │  • Neighborhood / area 3        • Neighborhood / area 4      │  │
│  │  • Neighborhood / area 5        • Neighborhood / area 6      │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                    │
│  LANDMARKS / COMMERCIAL — navy-700 bg                              │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  H2: heading (bone-50)                                       │  │
│  │  Body paragraph (bone-100)                                   │  │
│  │  Named venues list — bone-50 pills (if city has venues)      │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                    │
│  TYPICAL JOBS — bone-50 bg                                         │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  H2: heading                                                 │  │
│  │  ┌──────────────────────────────────────────────────────┐    │  │
│  │  │  ✓ Typical job 1                                     │    │  │
│  │  │  ✓ Typical job 2                                     │    │  │
│  │  │  ✓ Typical job 3    (check-icon, terracotta-600)     │    │  │
│  │  │  ✓ Typical job 4                                     │    │  │
│  │  │  ✓ Typical job 5                                     │    │  │
│  │  └──────────────────────────────────────────────────────┘    │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                    │
│  RELATED SERVICES — bone-100 bg                                    │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  H2: "Other services for [City] properties"                  │  │
│  │                                                              │  │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │  │
│  │  │ Service  │  │ Service  │  │ Service  │  │ Service  │    │  │
│  │  │ icon     │  │ icon     │  │ icon     │  │ icon     │    │  │
│  │  │ Name     │  │ Name     │  │ Name     │  │ Name     │    │  │
│  │  │ 1-line   │  │ 1-line   │  │ 1-line   │  │ 1-line   │    │  │
│  │  │ Learn →  │  │ Learn →  │  │ Learn →  │  │ Learn →  │    │  │
│  │  └──────────┘  └──────────┘  └──────────┘  └──────────┘    │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                    │
│  CTA BANNER — navy-900 bg                                          │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  Eyebrow: "Ready When You Are"                               │  │
│  │  H2: "Schedule your pumping. Or call us right now."          │  │
│  │  Body: Free quotes. Same-day. 24/7 emergency by text.        │  │
│  │                                                              │  │
│  │  [GET A FREE QUOTE]   [Call (512) 956-0047]                  │  │
│  │  Supporting: "[City] · Dripping Springs · Austin · ..."      │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                    │
│  FOOTER — navy-900 bg                                              │
└────────────────────────────────────────────────────────────────────┘
```

### 375px Mobile

```
┌──────────────────────────────┐
│  NAV: Logo        ☰  ☎       │
├──────────────────────────────┤
│  HERO (full-bleed)           │
│  navy-900 overlay 40%        │
│                              │
│  [EYEBROW terracotta-600]    │
│  HEADLINE Playfair 2.25rem   │
│  Body Inter 1rem             │
│                              │
│  [GET A FREE QUOTE] (full-w) │
│  Call (512) 956-0047 (full-w)│
├──────────────────────────────┤
│  LOCAL CONTEXT — bone-100    │
│  H2 Playfair 2.25rem         │
│  Body Inter 1rem             │
│                              │
│  ┌──────────────────────────┐│
│  │ Callout card 1           ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │ Callout card 2           ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │ Callout card 3           ││
│  └──────────────────────────┘│
├──────────────────────────────┤
│  NEIGHBORHOODS — bone-50     │
│  H2 Playfair                 │
│  Intro para                  │
│  • Item 1                    │
│  • Item 2                    │
│  • Item 3  (single col)      │
│  • Item 4                    │
│  • Item 5                    │
├──────────────────────────────┤
│  LANDMARKS — navy-700        │
│  H2 bone-50                  │
│  Body bone-100               │
│  Venue pill stack            │
├──────────────────────────────┤
│  TYPICAL JOBS — bone-50      │
│  H2                          │
│  ✓ Job 1                     │
│  ✓ Job 2                     │
│  ✓ Job 3                     │
│  ✓ Job 4                     │
│  ✓ Job 5                     │
├──────────────────────────────┤
│  RELATED SERVICES — bone-100 │
│  H2                          │
│  ┌──────────────────────────┐│
│  │ Service card 1           ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │ Service card 2           ││
│  └──────────────────────────┘│
│  (single column, scroll)     │
├──────────────────────────────┤
│  CTA BANNER — navy-900       │
│  Eyebrow                     │
│  H2 Playfair                 │
│  Body                        │
│  [GET A FREE QUOTE] (full-w) │
│  [Call (512) 956-0047]       │
│  Supporting line             │
├──────────────────────────────┤
│  FOOTER — navy-900           │
│  (accordion nav columns)     │
│                              │
│  ┌────────────┐ ┌──────────┐ │
│  │  CALL NOW  │ │  QUOTE   │ │
│  └────────────┘ └──────────┘ │
│  (fixed bottom mobile CTA)   │
└──────────────────────────────┘
```

---

## Layout Specs

### Hero
- Min-height: 480px desktop / 360px mobile
- Background: `<img>` with Hugo srcset (AVIF → WebP → JPEG); `fetchpriority="high"`
- Overlay: `background: linear-gradient(to right, rgba(15,27,46,0.55) 0%, rgba(15,27,46,0.25) 100%)`
- Constraint: Do not use a stock photo. Use authentic AJ truck or a landscape-only city photograph if truck is unavailable. If no photo exists, use a high-quality texturally rich bone-50 background with the terracotta rule/dot motif — no placeholder gradient blobs.
- Content area: max-width 720px, padding-inline 5vw (desktop), 1.25rem (mobile)
- CTA row: flex, gap 1rem; primary = terracotta-600 button; secondary = bone-50 ghost text link with phone number

### Local Context Callout Cards
- 3-column grid on desktop (1fr 1fr 1fr), 1-column on mobile
- Card: bone-50 fill, `--shadow-sm`, `--radius-lg`, navy-500 left-border 4px, padding 1.5rem
- H3 title: `--text-heading-md`, navy-900, Playfair
- Body: `--text-body-md`, charcoal-900, Inter

### Neighborhoods
- 2-column grid list on desktop, 1-column on mobile
- Each item: Inter body-md, charcoal-900, terracotta-600 bullet dot (via CSS ::before, not a glyph)
- Section padding: 80px block desktop / 48px mobile

### Landmarks (conditional — renders only when `landmarks_served` key exists in YAML)
- Dark navy-700 background
- Named venues render as inline pills: bone-50 text on navy-500 background, `--radius-pill`, padding 0.375rem 0.875rem, gap 0.5rem, wrapping flex-row
- If city YAML has `named_venues` array, iterate it; if only `body` prose, render prose only

### Typical Jobs
- Single-column ordered list; terracotta-600 checkbox icon (`✓`) via CSS; Inter body-md; charcoal-900
- Max 6 items (trim to top 6 if YAML has more)

### Related Services
- 2–4 cards from `related_services` array in city YAML, cross-referenced to `data/services/[slug].yaml` for name + short description
- Desktop: 2-up or 4-up grid depending on count; mobile: single column
- Card anatomy: icon (navy-700 SVG line icon, 32px), service name (Playfair heading-lg), 1-line description (Inter body-sm), "Learn more →" link (terracotta-600 underline)
- Shadow: `--shadow-sm`; hover: `--shadow-md`; radius: `--radius-lg`

### CTA Banner
- Shared component (same as homepage `cta_banner` section)
- `supporting_line` pulled from `cta.primary_href` context; overrides city name prepended: "[City Name] · Dripping Springs · Austin · Kyle · New Braunfels · Driftwood"
- navy-900 bg, bone-50 headline, bone-100 body text

---

## Typography Specs

| Element | Token | Family | Color |
|---|---|---|---|
| Hero eyebrow | `--text-eyebrow` | Inter | `--color-terracotta-600` |
| Hero H1 | `--text-display-lg` → 2.25rem mobile | Playfair | `--color-bone-50` |
| Hero body | `--text-body-lg` | Inter | `--color-bone-50` |
| Section H2 | `--text-display-lg` | Playfair | `--color-navy-900` |
| Section H2 on dark | `--text-display-lg` | Playfair | `--color-bone-50` |
| Callout H3 | `--text-heading-md` | Playfair | `--color-navy-900` |
| Body prose | `--text-body-md` | Inter | `--color-charcoal-900` |
| List items | `--text-body-md` | Inter | `--color-charcoal-900` |
| Card service name | `--text-heading-lg` | Playfair | `--color-navy-900` |
| Card description | `--text-body-sm` | Inter | `--color-gray-600` |
| Learn more link | `--text-body-sm` | Inter | `--color-terracotta-600` |
| Venue pills | `--text-body-sm` | Inter | `--color-bone-50` |
| CTA banner H2 | `--text-display-lg` | Playfair | `--color-bone-50` |
| CTA banner body | `--text-body-md` | Inter | `--color-bone-100` |
| CTA supporting line | `--text-body-sm` | Inter | `--color-gray-600` (on bone) / `--color-bone-100` (on navy) |

**Mobile scale:** H1 drops to 2.25rem per `--text-display-lg` mobile rule (CLAUDE.md §4).

---

## Color Specs

| Section | Background token | Primary text | Accent |
|---|---|---|---|
| Hero | none (photo + overlay) | `--color-bone-50` | `--color-terracotta-600` (eyebrow, CTA) |
| Local Context | `--color-bone-100` | `--color-charcoal-900` | `--color-navy-500` (card border) |
| Callout cards | `--color-bone-50` | `--color-charcoal-900` | `--color-navy-500` (left border) |
| Neighborhoods | `--color-bone-50` | `--color-charcoal-900` | `--color-terracotta-600` (bullet) |
| Landmarks | `--color-navy-700` | `--color-bone-50` | `--color-bone-100` (body) |
| Venue pills | `--color-navy-500` | `--color-bone-50` | — |
| Typical Jobs | `--color-bone-50` | `--color-charcoal-900` | `--color-terracotta-600` (checkmark) |
| Related Services | `--color-bone-100` | `--color-charcoal-900` | `--color-terracotta-600` (link) |
| CTA Banner | `--color-navy-900` | `--color-bone-50` | `--color-bone-50` (primary btn fill, navy-900 text) |

---

## Content Mapping — City YAML Keys

```
data/locations/cities/[slug].yaml
  slug                     → <html lang="en"> slug context, canonical href
  name                     → page title, hero H1 suffix, CTA supporting line city name
  county                   → Local Context section header reference
  county_authority         → Local Context body prose
  meta_title               → <title> tag
  meta_description         → <meta name="description">
  hero.eyebrow             → hero eyebrow text
  hero.headline            → hero H1
  hero.body                → hero body copy
  local_context.heading    → Local Context H2
  local_context.body       → Local Context body paragraph
  local_context.callouts[].title   → callout card H3
  local_context.callouts[].body    → callout card body text
  neighborhoods.heading    → Neighborhoods H2
  neighborhoods.body       → Neighborhoods intro paragraph
  neighborhoods.items[]    → neighborhood list items
  landmarks_served.heading → Landmarks H2 (conditional — skip section if key absent)
  landmarks_served.body    → Landmarks body paragraph
  landmarks_served.named_venues[]  → venue pills (conditional)
  typical_jobs.heading     → Typical Jobs H2
  typical_jobs.items[]     → Typical Jobs checklist
  related_services[]       → slugs; cross-reference data/services/[slug].yaml for name + short
  cta.primary              → CTA Banner primary button label
  cta.primary_href         → CTA Banner primary button href
  cta.secondary            → CTA Banner secondary button label
  cta.secondary_href       → CTA Banner secondary button href

data/services/[slug].yaml (cross-referenced for related service cards):
  name                     → card title
  short                    → card description (one line max)
  slug                     → card href → /services/[slug]/
```

**Shared content (from `data/content.yaml`):**
```
site.phone              → hero secondary CTA + CTA banner secondary
site.phone_href         → same
cta_banner.eyebrow      → CTA banner eyebrow
cta_banner.headline     → CTA banner H2
cta_banner.body         → CTA banner body
cta_banner.primary_cta  → CTA banner primary label
cta_banner.primary_cta_href → CTA banner primary href
cta_banner.secondary_cta    → CTA banner secondary label
cta_banner.secondary_cta_href → CTA banner secondary href
```

---

## Per-City Variables vs. Template-Shared Elements

### Per-City Variables (change per instance)
| Variable | Source key | Notes |
|---|---|---|
| `<title>` tag | `meta_title` | Unique for all 5 cities |
| Meta description | `meta_description` | Unique for all 5 cities |
| Hero eyebrow | `hero.eyebrow` | Dripping Springs: "Our Home Market"; others: county/orientation |
| Hero H1 | `hero.headline` | City-specific angle (e.g., Kyle: "If your Kyle tank was installed in the 2000s, it's time.") |
| Hero body | `hero.body` | City-specific 2–3 sentences |
| Local context heading + body | `local_context.*` | County authority, aquifer rules, unique local facts |
| Callout cards (2–3) | `local_context.callouts[]` | Unique regulatory / geological / market facts per city |
| Neighborhoods heading + intro | `neighborhoods.*` | Per-city geographic intro |
| Neighborhood list | `neighborhoods.items[]` | Named areas per city (6 items typical) |
| Landmarks section | `landmarks_served.*` | Conditional: renders if key exists (Dripping Springs, Driftwood, Austin, New Braunfels have it; Kyle has no landmarks_served key in current YAML — section is hidden) |
| Venue pills | `landmarks_served.named_venues[]` | Present: Driftwood (8 venues). Absent: other cities fall back to prose body only |
| Typical jobs heading + list | `typical_jobs.*` | Per-city job types (e.g., Driftwood: winery/distillery/brewery; Kyle: first-time pumping; Austin: 90-day grease trap) |
| Related services | `related_services[]` | Per-city array of 2–4 service slugs |
| CTA primary label | `cta.primary` | Kyle differs ("Schedule a Kyle Pumping"); others share "Get a Free Quote" |
| JSON-LD areaServed | city name + county | Per-city schema |
| Canonical URL | /service-area/[slug]/ | Per-city |

### Template-Shared Elements (same across all 5 cities)
- Global nav + mobile CTA bar
- Header/footer partials
- Section order and component structure
- CTA banner headline / body (from `cta_banner.*` in content.yaml)
- Phone number in hero secondary CTA and CTA banner
- All typography tokens, color tokens, shadow tokens, radius tokens
- JSON-LD schema shape (LocalBusiness + areaServed) — content varies, structure does not
- Accessibility attributes (aria-labels, focus rings, skip link)
- Section containers (semantic `<section>`, `<article>`, `<ul>`)

### Missing Optional Field Handling

| Field | Behavior when absent |
|---|---|
| `landmarks_served` key missing | Skip `<section class="city-landmarks">` entirely — no empty section rendered |
| `landmarks_served.named_venues` missing (has prose only) | Render prose body; skip venue pills flex row |
| `local_context.callouts` count < 3 | Render only the present callouts; grid auto-fills; no empty card placeholders |
| Hero image unavailable | Fall back to bone-50 background + terracotta/dot motif; never a placeholder gradient blob |
| `meta_description` absent | Hugo partial falls back to `site.description` from content.yaml |

---

## SEO Specifications

### Title / Meta Template Pattern
```
meta_title: "[Service keyword] in [City], TX | AJ Liquid Waste Haulers"
```
**Instances:**
- Dripping Springs: "Septic Pumping in Dripping Springs, TX | AJ Liquid Waste Haulers"
- Austin: "Septic Pumping & Grease Trap Service in Austin, TX | AJ Liquid Waste Haulers"
- Kyle: "Septic Pumping in Kyle, TX | AJ Liquid Waste Haulers"
- New Braunfels: "Septic Pumping in New Braunfels & Canyon Lake | AJ Liquid Waste Haulers"
- Driftwood: "Septic & Liquid Waste Hauling in Driftwood, TX | AJ"

**Meta description pattern:** Lead with the sharpest city-specific differentiator (not generic "we serve…"). Max 155 characters.

### Canonical
```html
<link rel="canonical" href="https://ajliquidwastehaulers.com/service-area/[slug]/">
```

### H1 Rule
One H1 per page (hero headline). Section headings are H2. Callout titles are H3. Service card titles are H3 if nested inside a Related Services H2 section.

### Internal Linking
- Hero secondary CTA links to `tel:+15129560047`
- Related service cards link to `/services/[slug]/`
- CTA Banner primary links to `/contact/`
- Footer city links are present on every page, with the active city highlighted
- Service Area Hub breadcrumb: `Home > Service Area > [City]` in `<nav aria-label="Breadcrumb">` with JSON-LD `BreadcrumbList`

---

## JSON-LD Schema Spec

**Type:** `LocalBusiness` with `areaServed` scoped to specific city.

### Schema Fields Required (all 5 instances)
| Field | Value source |
|---|---|
| `@type` | `LocalBusiness` |
| `name` | `site.legal_name` from content.yaml |
| `url` | site base URL |
| `telephone` | `site.phone_href` |
| `address` | PostalAddress (Dripping Springs, TX — no street per CLAUDE.md §1 note) |
| `openingHoursSpecification` | Mon–Fri 08:00–17:00 |
| `areaServed` | `Place` node with `name` = city name, `addressRegion` = TX |
| `employee` | 2 `Person` nodes: James Ashman + Gerry Jones |
| `foundingDate` | "2018" |

### Concrete JSON-LD Example — Dripping Springs

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "AJ Liquid Waste Haulers, LLC",
  "url": "https://ajliquidwastehaulers.com",
  "telephone": "+15129560047",
  "email": "office@ajliquidwastehaulers.com",
  "foundingDate": "2018",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dripping Springs",
    "addressRegion": "TX",
    "addressCountry": "US"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "08:00",
      "closes": "17:00"
    }
  ],
  "areaServed": {
    "@type": "Place",
    "name": "Dripping Springs",
    "containedInPlace": {
      "@type": "Place",
      "name": "Hays County",
      "addressRegion": "TX"
    }
  },
  "employee": [
    {
      "@type": "Person",
      "name": "James Ashman",
      "jobTitle": "Co-Founder"
    },
    {
      "@type": "Person",
      "name": "Gerry Jones",
      "jobTitle": "Co-Founder"
    }
  ],
  "description": "TCEQ-licensed family-owned septic and liquid waste hauler serving Dripping Springs and the Texas Hill Country since 2018.",
  "priceRange": "$$",
  "hasMap": "https://ajliquidwastehaulers.com/service-area/dripping-springs/"
}
```

**Per-city variation:** Only `areaServed.name` and `areaServed.containedInPlace.name` change across the 5 instances. Everything else is shared.

**Austin variation note:** `areaServed` should be expressed as an array for Austin since the coverage spans Travis County + portions of Hays County border:
```json
"areaServed": [
  { "@type": "Place", "name": "Austin", "containedInPlace": { "@type": "Place", "name": "Travis County", "addressRegion": "TX" } },
  { "@type": "Place", "name": "Southwest Austin" }
]
```

**New Braunfels variation note:** Include both Comal County and the Canyon Lake sub-area:
```json
"areaServed": [
  { "@type": "Place", "name": "New Braunfels", "containedInPlace": { "@type": "Place", "name": "Comal County", "addressRegion": "TX" } },
  { "@type": "Place", "name": "Canyon Lake" }
]
```

**BreadcrumbList JSON-LD (all city pages):**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ajliquidwastehaulers.com" },
    { "@type": "ListItem", "position": 2, "name": "Service Area", "item": "https://ajliquidwastehaulers.com/service-area/" },
    { "@type": "ListItem", "position": 3, "name": "[City Name]", "item": "https://ajliquidwastehaulers.com/service-area/[slug]/" }
  ]
}
```

---

## Trust Signal Placement (CLAUDE.md §12b)

| Signal | MUST/SHOULD | Placement on city page |
|---|---|---|
| TCEQ Licensed | MUST | Hero body or eyebrow implicit; explicit in footer trust line |
| Licensed & Insured | MUST | Footer trust line (all pages) |
| 40+ Years Combined Experience | MUST | Local Context section body prose where relevant (e.g., "Forty years of experience in systems like the ones here.") |
| Family-Owned Since 2018 | MUST | Footer trust line |
| 24/7 Emergency Service | MUST | Hero secondary CTA supporting text; CTA Banner body |
| TCEQ License Number (when confirmed) | SHOULD | Footer trust line |
| Named Founders | SHOULD | CTA Banner supporting line: "Questions? James or Gerry will answer." |

**Triple deployment pattern (design-research §4):**
- Early: TCEQ/insured implied in hero copy; explicit in footer seen immediately on scroll
- Mid: 40+ years mentioned naturally in Local Context body prose
- Late: Full trust line in footer (TCEQ Licensed · Insured · Family-Owned Since 2018)

---

## Interaction Specs

- **Hero CTA buttons:** Primary = terracotta-600 fill, bone-50 text; hover = terracotta-800. Secondary = text link, bone-50, underline on hover. Focus ring: terracotta-600 outline 2px, 2px offset.
- **Callout cards:** No hover state (static informational). No lift effect.
- **Related service cards:** Whole card is a link (`<a>` wrapping the card). Hover: `--shadow-md`, cursor pointer. Focus: visible ring on the anchor.
- **Venue pills:** No interaction; purely decorative labels. If future iteration links them, add `role="link"` and href.
- **CTA Banner buttons:** Same pattern as hero buttons but inverted: primary = bone-50 fill, navy-900 text; secondary = bone-50 outline.

---

## Mobile Specs

| Breakpoint | Behavior |
|---|---|
| < 375px | fluid, 1rem padding-inline, all content single-column |
| 375–767px | Mobile layout: single column, hero min-height 360px, H1 2.25rem |
| 768–1023px | Tablet: callout grid 2-column (2+1 or 3-col at wider tablet), service cards 2-up |
| 1024–1439px | Desktop-ish: full 3-col callouts, service cards 2–4 across |
| ≥ 1440px | Max-width 1280px container, centered, sections full-bleed backgrounds |

**Mobile CTA bar:** Fixed bottom bar (Call Now + Get Quote) persists across all city pages. From `data/content.yaml` `mobile_cta_bar.*`.

**Touch targets:** All interactive elements ≥ 44×44px per CLAUDE.md §17.

**Hero on mobile:** Overlay increases to 45% opacity for legibility. Body copy drops to body-md (1rem) if hero body exceeds 3 lines at mobile width.

---

## Accessibility Specs

- `<h1>` is hero headline. One per page.
- All sections open with a semantic `<section>` + `aria-labelledby` pointing to the section H2 `id`.
- Service cards: `<article>` inside `<ul>` pattern; or plain `<div>` with role implied by heading hierarchy.
- Venue pills: `<ul>` with `<li>` items; `role="list"` to restore list semantics in Safari.
- Skip link: `<a href="#main-content" class="skip-link">Skip to main content</a>` — visually hidden until focused.
- Breadcrumb nav: `<nav aria-label="Breadcrumb">` with `<ol>` structure.
- All `<img>` tags: descriptive `alt` attributes. Hero image: `alt="[city-specific description from hero.image_alt if present, else: AJ Liquid Waste Haulers truck in [City] Texas]"`.
- Color contrast: bone-50 on navy-900 = 14.4:1 (passes). bone-50 on navy-700 = ~8.5:1 (passes). charcoal-900 on bone-50 = ~14.7:1 (passes). charcoal-900 on bone-100 = ~14.2:1 (passes). terracotta-600 on bone-50 = 3.8:1 for large text — use only on display-sized text or buttons with icon support for AAA.

---

## Sibling-Link Behavior

At the bottom of the Related Services section (desktop) or inline in the Local Context (mobile hint), render a "← Back to all service areas" link pointing to `/service-area/`. This keeps the Service Area Hub navigable without using the breadcrumb trail alone.

Hugo template hint: `{{ range .Site.RegularPages "Section" "service-area" }}` to build sibling city links. Render the other 4 cities as a compact horizontal link list below the Related Services grid: "Also serving: [Dripping Springs] · [Austin] · [Kyle] · [New Braunfels] · [Driftwood]" with the current city excluded and rendered in muted gray-600 non-link text.
