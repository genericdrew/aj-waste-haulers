# Stage 5-5 — Interior Page Blueprints

**Scope:** All interior pages from `02-research/page-type-manifest.md`
**Design system:** CLAUDE.md (Earthen Luxe palette, Playfair + Inter, all tokens)
**Prepared:** 2026-04-17

Each blueprint contains 11 fields. Section order is fixed.

---

## Table of Contents

1. [About](#1-about)
2. [Contact](#2-contact)
3. [Services Index](#3-services-index)
4. [Service Detail (Template)](#4-service-detail-template)
5. [FAQ](#5-faq)
6. [Reviews](#6-reviews)
7. [Gallery](#7-gallery)
8. [How We Work (Proof-of-Pumpage)](#8-how-we-work)
9. [What to Expect](#9-what-to-expect)
10. [Septic Pumping Cost](#10-septic-pumping-cost)
11. [Drought & Septic](#11-drought--septic)
12. [Grease Trap Compliance](#12-grease-trap-compliance)
13. [Service Area Hub](#13-service-area-hub)

---

---

## 1. About

**Layout:** `layouts/about/single.html`
**Data:** `data/content.yaml` → `about.*`
**Priority: HIGHEST — primary E-E-A-T surface**

### 1.1 ASCII Wireframes

#### 1440px Desktop

```
┌──────────────────────────────────────────────────────────────────────┐
│  NAV: Logo | Services | Service Area | About | FAQ | Contact | CTA   │
├──────────────────────────────────────────────────────────────────────┤
│  HERO — bone-50 bg                                                   │
│  ┌────────────────────────────────────────────────────────────────┐  │
│  │  [EYEBROW: "Our Story" — terracotta-600, Inter]                │  │
│  │  H1 — Playfair display-xl: "Two Hill Country guys who         │  │
│  │         got tired of guesswork."                               │  │
│  │  Body — Inter body-lg, max 60ch, charcoal-900                 │  │
│  │  [READ OUR STORY ↓]  (ghost link, scrolls to founders)        │  │
│  └────────────────────────────────────────────────────────────────┘  │
│                                                                      │
│  FOUNDERS — bone-100 bg                                              │
│  ┌────────────────────────────────────────────────────────────────┐  │
│  │  H2: "Who You're Calling" (Playfair)                           │  │
│  │  Subtitle: Inter body-md, gray-600                             │  │
│  │                                                                │  │
│  │  ┌──────────────────────┐  ┌──────────────────────┐           │  │
│  │  │  FOUNDER PHOTO       │  │  FOUNDER PHOTO       │           │  │
│  │  │  (or monogram if     │  │  (or monogram if     │           │  │
│  │  │   no photo yet)      │  │   no photo yet)      │           │  │
│  │  │  radius-xl (24px)    │  │  radius-xl (24px)    │           │  │
│  │  │                      │  │                      │           │  │
│  │  │  James Ashman        │  │  Gerry Jones         │           │  │
│  │  │  Co-Founder          │  │  Co-Founder          │           │  │
│  │  │  ─── terracotta ─── │  │  ─── terracotta ─── │           │  │
│  │  │  Bio paragraph       │  │  Bio paragraph       │           │  │
│  │  │  Inter body-md       │  │  Inter body-md       │           │  │
│  │  └──────────────────────┘  └──────────────────────┘           │  │
│  └────────────────────────────────────────────────────────────────┘  │
│                                                                      │
│  CREDENTIALS — navy-700 bg (dark section for emphasis)              │
│  ┌────────────────────────────────────────────────────────────────┐  │
│  │  H2: "Credentials" — bone-50, Playfair                         │  │
│  │                                                                │  │
│  │  ┌───────────┐  ┌───────────┐  ┌───────────┐  ┌───────────┐  │  │
│  │  │ TCEQ Lic. │  │ Insured   │  │ Approved  │  │ Dripping  │  │  │
│  │  │           │  │           │  │ Disposal  │  │ Springs   │  │  │
│  │  │ shield    │  │ shield    │  │ shield    │  │ pin       │  │  │
│  │  │ icon      │  │ icon      │  │ icon      │  │ icon      │  │  │
│  │  │ bone-50   │  │ bone-50   │  │ bone-50   │  │ bone-50   │  │  │
│  │  │           │  │           │  │           │  │           │  │  │
│  │  │ Label H3  │  │ Label H3  │  │ Label H3  │  │ Label H3  │  │  │
│  │  │ Detail    │  │ Detail    │  │ Detail    │  │ Detail    │  │  │
│  │  │ bone-100  │  │ bone-100  │  │ bone-100  │  │ bone-100  │  │  │
│  │  └───────────┘  └───────────┘  └───────────┘  └───────────┘  │  │
│  └────────────────────────────────────────────────────────────────┘  │
│                                                                      │
│  VALUES — bone-50 bg                                                 │
│  ┌────────────────────────────────────────────────────────────────┐  │
│  │  H2: "What We Stand By"                                        │  │
│  │                                                                │  │
│  │  ┌─────────────────────┐  ┌──────────────────────┐           │  │
│  │  │ terracotta rule/dot │  │                       │           │  │
│  │  │ "Proof, not promises"│  │  "Educate, don't     │           │  │
│  │  │ H3 Playfair         │  │   upsell"            │           │  │
│  │  │ 1–2 sentence Inter  │  │   (same treatment)   │           │  │
│  │  └─────────────────────┘  └──────────────────────┘           │  │
│  │  ┌─────────────────────┐                                       │  │
│  │  │ "Show up where we   │                                       │  │
│  │  │  say we will"       │                                       │  │
│  │  └─────────────────────┘                                       │  │
│  └────────────────────────────────────────────────────────────────┘  │
│                                                                      │
│  CTA BLOCK — bone-100 bg                                             │
│  ┌────────────────────────────────────────────────────────────────┐  │
│  │  "Get a Quote from James or Gerry"   [GET A FREE QUOTE]        │  │
│  │  Support line: (512) 956-0047                                  │  │
│  └────────────────────────────────────────────────────────────────┘  │
│                                                                      │
│  FOOTER — navy-900 bg                                                │
└──────────────────────────────────────────────────────────────────────┘
```

#### 375px Mobile

```
┌──────────────────────────────┐
│  NAV: Logo          ☰  ☎    │
├──────────────────────────────┤
│  HERO — bone-50              │
│  [EYEBROW terracotta-600]    │
│  H1 Playfair 2.25rem         │
│  Body 1rem                   │
│  [READ OUR STORY ↓] link     │
├──────────────────────────────┤
│  FOUNDERS — bone-100         │
│  H2 Playfair                 │
│                              │
│  ┌──────────────────────────┐│
│  │ PHOTO (square, radius-xl)││
│  │ James Ashman             ││
│  │ Co-Founder               ││
│  │ ── terracotta rule ──    ││
│  │ Bio paragraph            ││
│  └──────────────────────────┘│
│                              │
│  ┌──────────────────────────┐│
│  │ PHOTO (square, radius-xl)││
│  │ Gerry Jones              ││
│  │ Co-Founder               ││
│  │ ── terracotta rule ──    ││
│  │ Bio paragraph            ││
│  └──────────────────────────┘│
├──────────────────────────────┤
│  CREDENTIALS — navy-700      │
│  H2 bone-50                  │
│  ┌──────────────────────────┐│
│  │ icon + label + detail    ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │ icon + label + detail    ││
│  └──────────────────────────┘│
│  2-col grid (2×2 credentials)│
├──────────────────────────────┤
│  VALUES — bone-50            │
│  H2 Playfair                 │
│  ┌──────────────────────────┐│
│  │ Value card 1             ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │ Value card 2             ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │ Value card 3             ││
│  └──────────────────────────┘│
├──────────────────────────────┤
│  CTA — bone-100              │
│  Text + [GET A FREE QUOTE]   │
│  (512) 956-0047              │
├──────────────────────────────┤
│  FOOTER navy-900             │
│  ┌──────────┐ ┌────────────┐ │
│  │ CALL NOW │ │ GET QUOTE  │ │
│  └──────────┘ └────────────┘ │
└──────────────────────────────┘
```

### 1.2 Layout Specs

**Hero (About-specific, no photo background):**
- bone-50 background. No image overlay. The openness signals confidence — the words and founders carry the page, not a dramatic photo.
- Generous padding: 120px block top / 80px bottom desktop; 72px / 48px mobile.
- H1 max-width 700px, centered.
- "Read Our Story" scroll-to-anchor link in terracotta-600 small-text, underline, points to `#founders`.

**Founder Cards:**
- 2-column CSS Grid on desktop (minmax(320px, 1fr)); single column on mobile.
- Photo container: aspect-ratio 1/1, `--radius-xl`, object-fit cover. Max photo width 320px.
- If no photo is available: `<div class="founder-monogram">` — navy-700 fill, bone-50 initials in Playfair display-md, radius-xl. Labeled with `aria-label="Photo placeholder for [Name]"`.
- Name: `--text-heading-lg`, Playfair, navy-900, margin-top 1rem.
- Role: `--text-body-sm`, Inter, gray-600, uppercase, letter-spacing 0.08em.
- Terracotta rule/dot motif below role line (from §7 brand shapes).
- Bio: `--text-body-md`, Inter, charcoal-900, max 4 lines.

**Credential Cards:**
- 4-column grid desktop, 2×2 on tablet, 2×2 on mobile.
- Card: navy-500 bg (slightly lighter than navy-700 section bg), `--radius-lg`, padding 1.5rem.
- Icon: SVG line icon, bone-50, 40×40px.
- Label (H3): `--text-heading-md`, Playfair, bone-50.
- Detail: `--text-body-sm`, Inter, bone-100.

**Values:**
- 3-column asymmetric grid (40% / 30% / 30%) on desktop to visually vary the three equal-weight items. Mobile: single column.
- Each value: terracotta rule/dot motif above the H3, Inter body-md description.

**CTA Block:**
- bone-100 bg. Not navy — this page ends on a warm, approachable note, not a hard sales close. The founders have just been introduced; the CTA should feel like a handshake.
- Center-aligned. "Get a Quote from James or Gerry" as the headline (Playfair heading-lg). Terracotta-600 button. Phone as secondary text link.

### 1.3 Typography Specs

| Element | Token | Family | Color |
|---|---|---|---|
| Hero eyebrow | `--text-eyebrow` | Inter | `--color-terracotta-600` |
| Hero H1 | `--text-display-xl` → 3rem mobile | Playfair | `--color-navy-900` |
| Hero body | `--text-body-lg` | Inter | `--color-charcoal-900` |
| Founder name | `--text-heading-lg` | Playfair | `--color-navy-900` |
| Founder role | `--text-body-sm` uppercase | Inter | `--color-gray-600` |
| Founder bio | `--text-body-md` | Inter | `--color-charcoal-900` |
| Credentials H2 | `--text-display-lg` | Playfair | `--color-bone-50` |
| Credential label H3 | `--text-heading-md` | Playfair | `--color-bone-50` |
| Credential detail | `--text-body-sm` | Inter | `--color-bone-100` |
| Values H2 | `--text-display-lg` | Playfair | `--color-navy-900` |
| Value title H3 | `--text-heading-lg` | Playfair | `--color-navy-900` |
| Value body | `--text-body-md` | Inter | `--color-charcoal-900` |
| CTA headline | `--text-heading-lg` | Playfair | `--color-navy-900` |

### 1.4 Color Specs

| Section | Background | Primary text | Accent |
|---|---|---|---|
| Hero | `--color-bone-50` | `--color-navy-900` (H1) | `--color-terracotta-600` |
| Founders | `--color-bone-100` | `--color-charcoal-900` | `--color-terracotta-600` (rule) |
| Credentials | `--color-navy-700` | `--color-bone-50` | `--color-navy-500` (card bg) |
| Values | `--color-bone-50` | `--color-charcoal-900` | `--color-terracotta-600` (rule/dot) |
| CTA block | `--color-bone-100` | `--color-navy-900` | `--color-terracotta-600` (button) |

### 1.5 Content Mapping

```
data/content.yaml → about.*
  about.hero.eyebrow          → hero eyebrow
  about.hero.headline         → hero H1
  about.hero.body             → hero body
  about.founders.heading      → founders section H2
  about.founders.people[].name          → founder name
  about.founders.people[].role          → founder role
  about.founders.people[].bio           → founder bio
  about.founders.people[].image_alt     → <img alt="">
  about.credentials.heading   → credentials H2
  about.credentials.items[].label       → credential card H3
  about.credentials.items[].detail      → credential card detail text
  about.values.heading        → values H2
  about.values.items[].title            → value title H3
  about.values.items[].body             → value body
  about.cta                   → CTA block headline
  about.cta_href              → CTA block button href
  site.phone                  → CTA block phone display
  site.phone_href             → CTA block phone link
```

### 1.6 Interaction Specs

- "Read Our Story" anchor link: smooth scroll to `#founders`. `prefers-reduced-motion` disables smooth scroll.
- Founder photo: no hover effect. Static. Human, not interactive.
- CTA button: terracotta-600 fill; hover terracotta-800; focus ring terracotta-600 2px outline.
- No accordions, no tabs, no carousels.

### 1.7 Mobile Behavior

- Hero H1 drops to `--text-display-lg` (2.25rem) at < 768px.
- Founders stack vertically; photo above name/bio, full-width.
- Photo: max-height 280px; aspect-ratio auto on mobile to avoid overly tall image.
- Credentials: 2×2 grid (2 columns) at all mobile widths.
- Values: single column, full width.

### 1.8 Accessibility Specs

- `<h1>` = hero headline. One per page.
- `<section id="founders" aria-labelledby="founders-h2">` with `<h2 id="founders-h2">` inside.
- If no founder photo: monogram placeholder has `role="img"` and `aria-label="[Name] — photo not yet available"`.
- Credential cards: `<ul>` of `<li>` items, each containing a `<h3>`.
- Focus order: nav → hero → scroll anchor → founders → credentials → values → CTA → footer.
- All terracotta-on-bone-50 text passes 3:1 at display sizes (>18.67px bold).

### 1.9 Trust Signal Placement

| Signal | Placement | From §12b |
|---|---|---|
| TCEQ Licensed | Credentials card | MUST |
| Licensed & Insured | Credentials card | MUST |
| 40+ Years Combined | Hero H1 + founders bio | MUST |
| Family-Owned Since 2018 | Hero body (founding story) | MUST |
| 24/7 Emergency | Footer (all pages) | MUST |
| TCEQ-Approved Disposal | Credentials card | SHOULD/FIRST-MOVER |
| Named Founders with Photos | Founders section | SHOULD |
| Founder bio specificity | Each bio names the person's domain | SHOULD |

**Rationale:** About is the E-E-A-T primary surface. It must contain all MUST signals from §12b. The founders section is where Google evaluates author authority. Named founders with role differentiation and bios satisfy EEAT requirements that no competitor meets.

### 1.10 Competitor Gap Exploitation

No competitor in the competitive set displays named founders with role-differentiated bios and a credential block on the same page. The closest is Aloha Septic (C2), which names founder Chris Osburn on an About page but provides no credentials block and no second founder. AJ's About page is the first in the market to show:
- Two named founders (not anonymous "our team")
- Specific domain separation (James = operations + commercial; Gerry = equipment + proof-of-pumpage)
- A formal credential block (TCEQ license, insured, disposal chain) on the same page as the human story
- The gallon-meter origin story attributed to a named person (Gerry Jones)

Source: `competitive-analysis.md §5` — "Where AJ is completely missing — real estate inspection page, process page, named team." C4 A+ Septic names technicians (Darrell, Daryl, Kelly, Matt) in reviews but has no About page photo or bio. C3 Superior has no named owner. C1 and C5 have no About page at all.

### 1.11 Schema Markup Spec

**Type:** `LocalBusiness` + 2 `Person` employees.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://ajliquidwastehaulers.com/#business",
      "name": "AJ Liquid Waste Haulers, LLC",
      "url": "https://ajliquidwastehaulers.com",
      "telephone": "+15129560047",
      "foundingDate": "2018",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dripping Springs",
        "addressRegion": "TX",
        "addressCountry": "US"
      },
      "employee": [
        {
          "@type": "Person",
          "@id": "https://ajliquidwastehaulers.com/about/#james-ashman",
          "name": "James Ashman",
          "jobTitle": "Co-Founder",
          "worksFor": { "@id": "https://ajliquidwastehaulers.com/#business" },
          "description": "Co-founder of AJ Liquid Waste Haulers. Handles operations, routing, and commercial accounts. Decades of liquid waste hauling experience."
        },
        {
          "@type": "Person",
          "@id": "https://ajliquidwastehaulers.com/about/#gerry-jones",
          "name": "Gerry Jones",
          "jobTitle": "Co-Founder",
          "worksFor": { "@id": "https://ajliquidwastehaulers.com/#business" },
          "description": "Co-founder of AJ Liquid Waste Haulers. Runs the trucks. Decades of diesel equipment and pumping experience. Championed gallon-meter proof-of-pumpage for AJ."
        }
      ]
    }
  ]
}
```

---

---

## 2. Contact

**Layout:** `layouts/contact/single.html`
**Data:** `data/content.yaml` → `contact.*`

### 2.1 ASCII Wireframes

#### 1440px Desktop

```
┌──────────────────────────────────────────────────────────────────────┐
│  NAV                                                                 │
├──────────────────────────────────────────────────────────────────────┤
│  HERO — bone-50 bg                                                   │
│  [EYEBROW] H1: "Schedule a pumping. Ask a question..."               │
│  Body (1 sentence)                                                   │
├──────────────────────────────────────────────────────────────────────┤
│  CONTENT ROW — bone-50 bg                                            │
│  ┌──────────────────────────────┐  ┌────────────────────────────┐   │
│  │  CONTACT METHODS (left 40%) │  │  FORM (right 60%)          │   │
│  │                              │  │                            │   │
│  │  ┌──────────────────────┐    │  │  H2: "Request a Free Quote"│   │
│  │  │ Phone                │    │  │  Subhead (Inter body-sm)   │   │
│  │  │ (512) 956-0047       │    │  │                            │   │
│  │  │ Mon–Fri 8AM–5PM      │    │  │  [Name         ] req       │   │
│  │  └──────────────────────┘    │  │  [Phone        ] req       │   │
│  │  ┌──────────────────────┐    │  │  [Email        ] opt       │   │
│  │  │ Emergency Text       │    │  │  [Service address] req     │   │
│  │  │ same number, 24/7    │    │  │  [Service type ▼] req      │   │
│  │  └──────────────────────┘    │  │  [When needed  ▼] req      │   │
│  │  ┌──────────────────────┐    │  │  [Notes       (textarea)]  │   │
│  │  │ Email                │    │  │                            │   │
│  │  │ office@...           │    │  │  [SEND REQUEST]            │   │
│  │  └──────────────────────┘    │  │  Privacy note (body-sm)    │   │
│  │  ┌──────────────────────┐    │  └────────────────────────────┘   │
│  │  │ Office               │    │                                   │
│  │  │ Dripping Springs, TX │    │                                   │
│  │  │ By appointment       │    │                                   │
│  │  └──────────────────────┘    │                                   │
│  └──────────────────────────────┘                                   │
├──────────────────────────────────────────────────────────────────────┤
│  FOOTER — navy-900                                                   │
└──────────────────────────────────────────────────────────────────────┘
```

#### 375px Mobile

```
┌──────────────────────────────┐
│  NAV Logo         ☰  ☎      │
├──────────────────────────────┤
│  HERO bone-50                │
│  [EYEBROW]                   │
│  H1 Playfair 2.25rem         │
│  Body                        │
├──────────────────────────────┤
│  CONTACT METHODS — bone-100  │
│  ┌──────────────────────────┐│
│  │ Phone + hours            ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │ Emergency text           ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │ Email                    ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │ Office location          ││
│  └──────────────────────────┘│
├──────────────────────────────┤
│  FORM — bone-50              │
│  H2 "Request a Free Quote"   │
│  [Name field]                │
│  [Phone field]               │
│  [Email field]               │
│  [Service address]           │
│  [Service type ▼]            │
│  [When needed ▼]             │
│  [Notes textarea]            │
│  [SEND REQUEST] full-width   │
│  Privacy note                │
├──────────────────────────────┤
│  FOOTER navy-900             │
│  ┌──────────┐ ┌────────────┐ │
│  │ CALL NOW │ │  GET QUOTE │ │
│  └──────────┘ └────────────┘ │
└──────────────────────────────┘
```

### 2.2 Layout Specs

- Desktop: 2-column layout inside a `<section>`. Left column (40%) = contact methods; right column (60%) = form.
- On mobile, contact methods render above the form (in bone-100 bg band), form below (in bone-50 bg).
- Form wrapper: bone-50 card, `--shadow-md`, `--radius-lg`, padding 2rem desktop / 1.5rem mobile.
- Contact method cards: bone-50 fill, terracotta-600 left-border 4px, `--radius-sm`, padding 1rem.
- Each field: full-width input, bone-50 bg, `--radius-sm` border, 1px border `--color-gray-200`; focus ring terracotta-600 2px.
- Submit button: terracotta-600 fill, full-width, bone-50 text, `--radius-md`.

### 2.3 Typography Specs

| Element | Token | Family | Color |
|---|---|---|---|
| Hero H1 | `--text-display-lg` | Playfair | `--color-navy-900` |
| Contact method label | `--text-heading-md` | Playfair | `--color-navy-900` |
| Contact method value | `--text-body-md` | Inter | `--color-terracotta-600` (phone) / `--color-charcoal-900` |
| Contact method note | `--text-body-sm` | Inter | `--color-gray-600` |
| Form H2 | `--text-display-lg` | Playfair | `--color-navy-900` |
| Form subhead | `--text-body-sm` | Inter | `--color-gray-600` |
| Field labels | `--text-body-md` | Inter | `--color-charcoal-900` |
| Field input text | `--text-body-md` | Inter | `--color-charcoal-900` |
| Submit button | `--text-body-md` uppercase | Inter | `--color-bone-50` |
| Privacy note | `--text-body-sm` | Inter | `--color-gray-600` |

### 2.4 Color Specs

| Element | Background | Text | Border/Accent |
|---|---|---|---|
| Hero | `--color-bone-50` | `--color-navy-900` | `--color-terracotta-600` (eyebrow) |
| Contact methods (mobile band) | `--color-bone-100` | `--color-charcoal-900` | `--color-terracotta-600` (card border) |
| Contact method cards | `--color-bone-50` | varies | `--color-terracotta-600` (left border) |
| Form | `--color-bone-50` | `--color-charcoal-900` | `--color-gray-200` (inputs) |
| Submit button | `--color-terracotta-600` | `--color-bone-50` | hover: `--color-terracotta-800` |

### 2.5 Content Mapping

```
data/content.yaml → contact.*
  contact.hero.eyebrow            → hero eyebrow
  contact.hero.headline           → hero H1
  contact.hero.body               → hero body
  contact.contact_methods[]       → contact method cards (label, value, href, note)
  contact.form.heading            → form H2
  contact.form.subhead            → form subhead
  contact.form.fields[]           → field definitions (name, label, type, required, options)
  contact.form.submit_label       → submit button text
  contact.form.privacy_note       → privacy note below submit
```

### 2.6 Interaction Specs

- Form: native HTML5 validation on `required` fields. `aria-describedby` error messages per input on failure.
- Phone `<a href="tel:+15129560047">` opens native dialer on mobile.
- Email `<a href="mailto:...">` opens mail client.
- Emergency SMS `<a href="sms:+15129560047">` opens SMS app on mobile.
- `<select>` dropdowns: Inter body-md, charcoal-900 text, chevron icon via CSS.
- Submit: disabled state if required fields empty (visual only — client-side enhancement); loading state `aria-busy="true"` on submit.

### 2.7 Mobile Behavior

- Contact methods as a horizontal 2×2 grid at 375px; single column if viewport under 360px.
- Form fields full-width, minimum height 44px per field (touch target compliance).
- `<textarea>` min-height 80px.

### 2.8 Accessibility Specs

- All `<input>`, `<select>`, `<textarea>` have associated `<label for="">`.
- Required fields: `aria-required="true"` + visible asterisk in label.
- Error messages: `role="alert"` + `aria-live="polite"`, associated via `aria-describedby`.
- Form `<fieldset>` optional: not required since fields flow linearly, but group service-type + urgency selects in a `<fieldset>` with `<legend>` for clarity.
- Submit button: `type="submit"`, not `type="button"`.

### 2.9 Trust Signal Placement

- Contact method cards display TCEQ Licensed + Insured as inline text in the office card: "TCEQ Licensed · Insured" under the address.
- Emergency availability visible at the top of the contact methods stack.
- Privacy note below the form submit button directly addresses Character trust.

### 2.10 Competitor Gap Exploitation

4 of 5 competitors have embedded forms; AJ currently has none. This blueprint's form captures leads who will not call — competitor data shows forms are the most-missing feature on AJ's current site (`trust-analysis.md §3 MUST — embedded contact form, 4/5 competitors`). The addition of phone + emergency text + email in a single visible grid is something only C5 Action Septic approaches, but C5 has no emergency text call-out. The "emergency text, 24/7" method card is a first-mover trust element on the contact page itself.

### 2.11 Schema Markup Spec

No page-specific schema beyond the global `LocalBusiness` emitted in `head.html`. Contact page does not need `ContactPoint` schema unless Google explicitly prompts for it — the `telephone` field in `LocalBusiness` on the homepage already satisfies structured data for calls.

---

---

## 3. Services Index

**Layout:** `layouts/services/list.html`
**Data:** `data/content.yaml` → `services_index.*` + `services.items[]`; also reads from `data/services/*.yaml` for card short descriptions

### 3.1 ASCII Wireframes

#### 1440px Desktop

```
┌──────────────────────────────────────────────────────────────────────┐
│  NAV                                                                 │
├──────────────────────────────────────────────────────────────────────┤
│  HERO — bone-50 bg                                                   │
│  [EYEBROW: "Services"]                                               │
│  H1: "Five focused services. One meter that keeps us honest."        │
│  Body paragraph                                                      │
├──────────────────────────────────────────────────────────────────────┤
│  SERVICE CARDS — bone-100 bg                                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                          │
│  │ icon(top)│  │ icon(top)│  │ icon(top)│                          │
│  │ Septic   │  │ Grease   │  │ Beverage │                          │
│  │ Pumping  │  │ Trap     │  │ Industry │                          │
│  │ H3 name  │  │ H3 name  │  │ H3 name  │                          │
│  │ 1–2 sent │  │ 1–2 sent │  │ 1–2 sent │                          │
│  │ Learn →  │  │ Learn →  │  │ Learn →  │                          │
│  └──────────┘  └──────────┘  └──────────┘                          │
│  ┌──────────┐  ┌──────────┐                                         │
│  │ Real Est │  │ Emergency│                                         │
│  │ Inspect. │  │ Pumping  │                                         │
│  │ (same)   │  │ (same)   │                                         │
│  └──────────┘  └──────────┘                                         │
│         3-col row 1 / 2-col row 2 (3+2 = 5)                        │
├──────────────────────────────────────────────────────────────────────┤
│  PROOF-OF-PUMPAGE CALLOUT — navy-700 bg                              │
│  Short "why we measure every job" blurb + link to /how-we-work/     │
├──────────────────────────────────────────────────────────────────────┤
│  CTA BANNER — navy-900 bg                                            │
│  FOOTER — navy-900 bg                                                │
└──────────────────────────────────────────────────────────────────────┘
```

#### 375px Mobile

```
┌──────────────────────────────┐
│  NAV                         │
├──────────────────────────────┤
│  HERO bone-50                │
│  [EYEBROW] H1 Playfair       │
│  Body                        │
├──────────────────────────────┤
│  CARDS — bone-100            │
│  ┌──────────────────────────┐│
│  │ Service card 1           ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │ Service card 2           ││
│  └──────────────────────────┘│
│  (5 cards, 1 per row)        │
├──────────────────────────────┤
│  CALLOUT navy-700            │
│  Proof-of-pumpage blurb      │
│  [Read how it works →]       │
├──────────────────────────────┤
│  CTA BANNER navy-900         │
│  FOOTER navy-900             │
└──────────────────────────────┘
```

### 3.2 Layout Specs

- Cards: 3-column desktop (with 2-card second row), 2-column tablet, 1-column mobile.
- Card: bone-50 fill, `--shadow-sm`, `--radius-lg`, navy-700 icon, hover `--shadow-md` + cursor pointer on whole card.
- Icon: SVG 32px, navy-700.
- Proof-of-pumpage callout: navy-700 bg, full-width strip, bone-50 text, max 2 sentences + terracotta-600 link.

### 3.3 Typography Specs

H1 = `--text-display-lg`, Playfair, navy-900. Card H3 = `--text-heading-lg`, Playfair, navy-900. Card body = `--text-body-sm`, Inter, gray-600. Link = `--text-body-sm`, Inter, terracotta-600.

### 3.4 Color Specs

Hero bone-50. Cards bone-100 section bg, bone-50 card fill. Callout strip navy-700. CTA Banner navy-900.

### 3.5 Content Mapping

```
data/content.yaml → services_index.hero.*
data/content.yaml → services.items[] (slug, name, short, icon, cta)
data/services/[slug].yaml → hero.headline (used as card subtitle if short is insufficient)
```

### 3.6 Interaction Specs

Whole service card is a `<a>` link to `/services/[slug]/`. Hover: `--shadow-md`. No JavaScript required.

### 3.7 Mobile Behavior

1-column card stack. Cards full-width. Hero H1 drops to 2.25rem.

### 3.8 Accessibility Specs

- `<ul>` of `<li>` for service cards. Each card `<article>` with `<h3>`.
- Whole-card link: `<a href="...">` wraps the card; `aria-label="[Service Name] — Learn more"`.
- Decorative icons: `aria-hidden="true"`.

### 3.9 Trust Signal Placement

Proof-of-pumpage callout strip is the trust signal on this page. Every service implicitly benefits from it being on the same page.

### 3.10 Competitor Gap Exploitation

0 competitors have a proof-of-pumpage callout on their services index. All 5 competitors have plain card grids with no cross-page differentiation message. This strip converts a commodity grid into a branded trust moment.

### 3.11 Schema Markup Spec

`ItemList` of 5 `Service` items, pointing to each service detail page. No full JSON-LD example needed here — the individual service pages carry the primary `Service` schema.

---

---

## 4. Service Detail (Template)

**Layout:** `layouts/services/single.html`
**Data:** `data/services/[slug].yaml`
**Instances:** 5 (septic-tank-pumping · grease-trap-pumping · beverage-industry-waste · real-estate-inspections · emergency-pumping)

### 4.1 ASCII Wireframes

#### 1440px Desktop

```
┌──────────────────────────────────────────────────────────────────────┐
│  NAV                                                                 │
├──────────────────────────────────────────────────────────────────────┤
│  HERO — bone-50 bg                                                   │
│  [EYEBROW: audience tag — "Residential & Commercial"]                │
│  H1: service headline                                                │
│  Body: 2–3 sentence positioning                                      │
│  [PRIMARY CTA]  [Secondary: phone]                                  │
├──────────────────────────────────────────────────────────────────────┤
│  WHAT WE DO — bone-100 bg                                            │
│  ┌──────────────────────────────┐  ┌───────────────────────────┐   │
│  │  H2 + intro paragraph        │  │  Bulleted spec list       │   │
│  │  (left, ~50%)                │  │  (right, ~50%)            │   │
│  │                              │  │  • Bullet 1               │   │
│  │                              │  │  • Bullet 2               │   │
│  │                              │  │  • Bullet 3               │   │
│  └──────────────────────────────┘  └───────────────────────────┘   │
├──────────────────────────────────────────────────────────────────────┤
│  CONDITIONAL BLOCK — navy-700 bg (compliance / context)             │
│  (Grease Trap: compliance section · Beverage: commercial process)   │
│  (Real Estate: pre-listing context · Emergency: urgency strip)      │
│  (Septic: when_to_pump block + estimator link)                       │
├──────────────────────────────────────────────────────────────────────┤
│  PROCESS — bone-50 bg (process_ref: true)                           │
│  Shared 5-step component (same as homepage process section)         │
│  (Skip this section if process_ref: false in YAML)                  │
├──────────────────────────────────────────────────────────────────────┤
│  FAQ ACCORDION — bone-100 bg                                         │
│  H2: "Common questions about [service name]"                         │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │  Q1 ▼  (collapsed by default)                                │   │
│  │  Q2 ▼                                                        │   │
│  │  Q3 ▼                                                        │   │
│  │  Q4 ▼                                                        │   │
│  └──────────────────────────────────────────────────────────────┘   │
├──────────────────────────────────────────────────────────────────────┤
│  RELATED SERVICES — bone-50 bg                                       │
│  H2: "You might also need"                                           │
│  2-card grid (max 2 related services per detail page)               │
├──────────────────────────────────────────────────────────────────────┤
│  CTA BANNER — navy-900 bg                                            │
│  FOOTER — navy-900 bg                                                │
└──────────────────────────────────────────────────────────────────────┘
```

#### 375px Mobile

```
┌──────────────────────────────┐
│  NAV                         │
├──────────────────────────────┤
│  HERO bone-50                │
│  [EYEBROW] H1 Playfair       │
│  Body                        │
│  [CTA] full-width            │
│  [Phone] text link           │
├──────────────────────────────┤
│  WHAT WE DO — bone-100       │
│  H2 + intro                  │
│  • Bullets stacked           │
├──────────────────────────────┤
│  CONDITIONAL BLOCK navy-700  │
│  Context-specific content    │
├──────────────────────────────┤
│  PROCESS — bone-50           │
│  Vertical step stack         │
│  01 ─ 02 ─ 03 ─ 04 ─ 05    │
│  (vertical on mobile)        │
├──────────────────────────────┤
│  FAQ — bone-100              │
│  Accordion items (full-w)    │
├──────────────────────────────┤
│  RELATED — bone-50           │
│  2 cards stacked             │
├──────────────────────────────┤
│  CTA BANNER navy-900         │
│  FOOTER navy-900             │
└──────────────────────────────┘
```

### 4.2 Layout Specs

- Hero: bone-50, same structure as interior pages hero. No hero photo on service detail (avoids stock photo trap). Generous padding creates breathing room.
- What We Do: 2-column on desktop (prose left, bullets right). Single column on mobile (prose then bullets).
- Conditional block: dark navy-700 section. Content driven by which YAML keys are present:
  - `compliance` key → renders compliance section (grease trap, real estate)
  - `when_to_pump` key → renders pump-timing block (septic pumping)
  - `audiences_served` key → renders audience table (grease trap, beverage)
  - No conditional key present → section is skipped
- Process: `process_ref: true` in YAML → shared partial `partials/sections/service-process.html`; renders the 5-step process from `content.yaml → process.*`. `process_ref: false` → omit.
- FAQ accordion: vanilla JS. `<details>`/`<summary>` HTML-first, no JS dependency.
- Related services: 2-column card grid desktop, stacked mobile. Cross-referenced from `related[]` slugs in YAML.

### 4.3 Typography Specs

Same as city page typography table for corresponding elements. Hero H1 = `--text-display-lg`, Playfair. What We Do H2 = `--text-display-lg`. Bullets = `--text-body-md`, Inter. FAQ question = `--text-heading-md`, Playfair, navy-900. FAQ answer = `--text-body-md`, Inter, charcoal-900.

### 4.4 Color Specs

Hero bone-50 → What We Do bone-100 → Conditional navy-700 → Process bone-50 → FAQ bone-100 → Related bone-50 → CTA navy-900. Passes no-3-consecutive rule.

### 4.5 Content Mapping

```
data/services/[slug].yaml
  name, audience, meta_title, meta_description
  hero.eyebrow, hero.headline, hero.body
  what_we_do.heading, what_we_do.body, what_we_do.bullets[]
  compliance.* (optional — grease trap, real estate)
  when_to_pump.* (optional — septic pumping)
  audiences_served.* (optional — grease trap, beverage)
  process_ref (boolean)
  faqs[].question, faqs[].answer
  related[] → cross-ref data/services/[slug].yaml name + short
  cta.primary, cta.primary_href, cta.secondary, cta.secondary_href

data/content.yaml → process.* (when process_ref = true)
```

### 4.6 Interaction Specs

- FAQ accordion: `<details open>` for first item only (reveals most common question without JS); rest collapsed. `<summary>` is the clickable toggle.
- Hover on service card: `--shadow-md`, cursor pointer.
- All CTAs: same pattern as global.

### 4.7 Mobile Behavior

Hero H1 drops to 2.25rem. Process steps become vertical 01→05 timeline. FAQ accordions full-width. Related cards stack vertically.

### 4.8 Accessibility Specs

- `<details>` / `<summary>` accordion is natively accessible. No ARIA `role="button"` needed.
- Bullet lists: `<ul>` with `<li>`. Terracotta bullet via CSS `::before` (not unicode glyph).
- Process (if rendered): each step has `<article>` or `<li>` with step number as `aria-label`.
- All icons: `aria-hidden="true"`.

### 4.9 Trust Signal Placement

- Hero body mentions TCEQ or licensed/insured naturally for the top 2 services (septic pumping, grease trap).
- Conditional dark section includes compliance language (Risk Reduction trust signal) for grease trap and real estate inspection services.
- Footer trust line is the final credential reinforcement on every page.

### 4.10 Competitor Gap Exploitation

No competitor has:
- Per-service FAQ schema (FAQPage type)
- Process walkthrough on service pages (CLAUDE.md §15: process_ref links back to the homepage section)
- Proof-of-pumpage tied to a specific service (only AJ has gallon meter; its mention in every septic service description is a repeated first-mover differentiator)

From `competitive-analysis.md §5`: "Process / what-to-expect page — no competitor builds this."

### 4.11 Schema Markup Spec

**Type:** `Service` + `FAQPage` on same page.

**Concrete JSON-LD Example — Septic Tank Pumping:**

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Septic Tank Pumping",
      "description": "Gallon-metered septic tank pumping for residential and commercial properties in the Texas Hill Country. TCEQ licensed. Every load documented.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "AJ Liquid Waste Haulers, LLC",
        "telephone": "+15129560047",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dripping Springs",
          "addressRegion": "TX"
        }
      },
      "areaServed": [
        "Dripping Springs, TX",
        "Austin, TX",
        "Kyle, TX",
        "New Braunfels, TX",
        "Driftwood, TX"
      ],
      "url": "https://ajliquidwastehaulers.com/services/septic-tank-pumping/"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does it take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Thirty to ninety minutes for most residential jobs. Buried access or unusual tank configurations can push it longer."
          }
        },
        {
          "@type": "Question",
          "name": "Will you tear up my yard?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We try hard not to. Our trucks have longer hose runs than most, so we can usually reach from the drive. When we have to cross lawn, we protect it."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to be home?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Preferred but not required. If the tank is accessible and gates are unlocked, we can pump and send you photos plus the meter reading after."
          }
        },
        {
          "@type": "Question",
          "name": "What if you find something wrong?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We tell you. We're not a repair company — we won't sell you a new drain field. We'll document what we saw and recommend who to call if you need a repair."
          }
        }
      ]
    }
  ]
}
```

**Emergency Pumping variation:** `Service` schema adds `"availableChannel": { "@type": "ServiceChannel", "availableLanguage": "en", "serviceUrl": "sms:+15129560047" }`.

**Missing optional field behavior:**
| Field | Behavior |
|---|---|
| `compliance` key missing | Conditional block skipped entirely |
| `process_ref: false` | Process section skipped |
| `audiences_served` missing | Skip audience table |
| `related[]` fewer than 2 items | Render available cards; no empty placeholder |
| Hero photo unavailable | bone-50 bg only; no image needed on service detail |

---

---

## 5. FAQ

**Layout:** `layouts/faq/single.html`
**Data:** `data/content.yaml` → `faq.*`

### 5.1 ASCII Wireframes

#### 1440px Desktop

```
┌──────────────────────────────────────────────────────────────────────┐
│  NAV                                                                 │
├──────────────────────────────────────────────────────────────────────┤
│  HERO — bone-50 bg                                                   │
│  [EYEBROW: "FAQ"]                                                    │
│  H1: "What people actually ask us."                                  │
│  Body: 1 sentence about source of questions                          │
├──────────────────────────────────────────────────────────────────────┤
│  FAQ ACCORDION — bone-50 bg                                          │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │  H2: "Septic Tank Pumping" (category heading)                │   │
│  │  ── terracotta rule/dot ──                                   │   │
│  │                                                              │   │
│  │  ┌──────────────────────────────────────────────────────┐    │   │
│  │  │  Q: How often does a septic tank need to be pumped?  │ ▼  │   │
│  │  └──────────────────────────────────────────────────────┘    │   │
│  │  ┌──────────────────────────────────────────────────────┐    │   │
│  │  │  Q: Can you pump a tank you can't see?               │ ▼  │   │
│  │  └──────────────────────────────────────────────────────┘    │   │
│  │  (etc. — 4 questions per category)                            │   │
│  │                                                              │   │
│  │  H2: "Grease Traps & Commercial"                             │   │
│  │  ── terracotta rule/dot ──                                   │   │
│  │  (3 questions)                                               │   │
│  │                                                              │   │
│  │  H2: "Emergency Service"                                     │   │
│  │  (2 questions)                                               │   │
│  │                                                              │   │
│  │  H2: "Pricing & Scheduling"                                  │   │
│  │  (3 questions)                                               │   │
│  └──────────────────────────────────────────────────────────────┘   │
├──────────────────────────────────────────────────────────────────────┤
│  CTA BANNER — navy-900 bg                                            │
│  FOOTER — navy-900 bg                                                │
└──────────────────────────────────────────────────────────────────────┘
```

#### 375px Mobile

```
┌──────────────────────────────┐
│  NAV                         │
├──────────────────────────────┤
│  HERO bone-50                │
│  [EYEBROW] H1 Playfair       │
│  Body 1-sentence             │
├──────────────────────────────┤
│  FAQ ACCORDION — bone-50     │
│  H2 Category heading         │
│  ── rule/dot ──              │
│  ┌──────────────────────────┐│
│  │ Q ▼ (collapsed)          ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │ Q ▼ (collapsed)          ││
│  └──────────────────────────┘│
│  H2 next category            │
│  ── rule/dot ──              │
│  (same pattern)              │
├──────────────────────────────┤
│  CTA BANNER navy-900         │
│  FOOTER navy-900             │
└──────────────────────────────┘
```

### 5.2 Layout Specs

- Single-column accordion in a max-width 800px centered container.
- Category H2 headers are section markers, not interactive elements.
- `<details>`/`<summary>` for each question. No JavaScript required; enhanced behavior optional.
- Terracotta rule/dot motif below each category H2 (brand shape from §7).
- Section padding: 80px block desktop / 48px mobile.

### 5.3 Typography Specs

H1 `--text-display-lg` Playfair navy-900. Category H2 `--text-heading-lg` Playfair navy-900. Question `<summary>` `--text-heading-md` Playfair navy-900. Answer `--text-body-md` Inter charcoal-900.

### 5.4 Color Specs

Full page: bone-50 bg. `<details>` border: `--color-gray-200`. Open `<details>` bg: `--color-bone-100`. Category heading rule: terracotta-600.

### 5.5 Content Mapping

```
data/content.yaml → faq.*
  faq.hero.eyebrow, faq.hero.headline, faq.hero.body
  faq.categories[].heading         → category H2
  faq.categories[].items[].question → <summary> text
  faq.categories[].items[].answer   → <details> body text
```

### 5.6 Interaction Specs

- First question in first category: `<details open>` by default.
- All others: closed. User expands individually.
- Chevron icon on `<summary>`: rotates 180° on open via CSS `details[open] summary .chevron { transform: rotate(180deg); }`. `prefers-reduced-motion` disables rotation.

### 5.7 Mobile Behavior

Full-width accordion. No layout changes — already single-column.

### 5.8 Accessibility Specs

- `<details>`/`<summary>` is natively keyboard-accessible (Enter/Space to toggle).
- Category H2 ids used as `aria-labelledby` on the group `<section>`.
- `<details>` `open` attribute = expanded state; no ARIA needed beyond native semantics.

### 5.9 Trust Signal Placement

FAQ answers naturally deploy trust signals:
- Grease trap FAQ: Austin 90-day rule + AJ's compliance documentation → Risk Reduction
- Pricing FAQ: gallon-meter billing → Character
- Emergency FAQ: response time expectation setting → Character
- Septic FAQ: proof-of-pumpage explanation → Competence + Risk Reduction

### 5.10 Competitor Gap Exploitation

Zero competitors have a standalone FAQ page with `FAQPage` JSON-LD schema. The FAQ nav link already exists in AJ's nav. This is the most direct first-mover opportunity: the only FAQ page in the entire competitive set. Google's FAQ rich results will surface answers in SERPs directly, generating no-click impressions with AJ's brand name on questions like "how often septic pumping" and "Austin grease trap rule."

Source: `page-type-manifest.md §1` — "FAQ: 0/5 standalone. AJ nav link exists. First-mover advantage."

### 5.11 Schema Markup Spec

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How often does a septic tank need to be pumped?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TCEQ recommends every 3–5 years for most households. A 4-person family with a 1,000-gallon tank is closer to every 2.6 years per TCEQ's own table. Bigger family, garbage disposal, water softener tied into the tank — all shorten the interval."
      }
    },
    {
      "@type": "Question",
      "name": "How often do I have to pump my grease trap?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Inside Austin city limits, every 90 days is the rule — or sooner if grease and solids hit 50% of the wetted height. Fines run up to $2,000 per violation."
      }
    }
  ]
}
```

All questions across all 4 categories feed into `mainEntity[]`. Every `Question` / `Answer` pair maps directly from `faq.categories[].items[]` in content.yaml.

---

---

## 6. Reviews

**Layout:** `layouts/reviews/single.html` (dedicated — not `_default/single.html`)
**Data:** `data/content.yaml` → `reviews.*`

### 6.1 ASCII Wireframes

#### 1440px Desktop

```
┌──────────────────────────────────────────────────────────────────────┐
│  NAV                                                                 │
├──────────────────────────────────────────────────────────────────────┤
│  HERO — bone-50 bg                                                   │
│  [EYEBROW: "Reviews"]                                                │
│  H1: "Every quote on this page is real."                             │
│  Body: source disclosure + Google link                               │
├──────────────────────────────────────────────────────────────────────┤
│  REVIEWS GRID — bone-100 bg (or empty state if items: [])           │
│                                                                      │
│  IF items populated:                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │
│  │ ★★★★★        │  │ ★★★★★        │  │ ★★★★★        │              │
│  │ "Quote text  │  │ "Quote text  │  │ "Quote text  │              │
│  │  in Inter    │  │  in Inter    │  │  in Inter    │              │
│  │  body-lg"    │  │  body-lg"    │  │  body-lg"    │              │
│  │ — Name L., D.│  │ — Name L., D.│  │ — Name L., D.│              │
│  │   Date/Google│  │   Date/Google│  │   Date/Google│              │
│  └──────────────┘  └──────────────┘  └──────────────┘              │
│  (max 3 per row; up to 12 total in a 4-row grid)                    │
│                                                                      │
│  IF items empty:                                                     │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │  "We're building our review library now. Every review here   │   │
│  │   will be a real Google review. In the meantime, read what   │   │
│  │   our customers say on Google."                              │   │
│  │                                                              │   │
│  │  [READ REVIEWS ON GOOGLE ↗]                                  │   │
│  └──────────────────────────────────────────────────────────────┘   │
├──────────────────────────────────────────────────────────────────────┤
│  WRITE A REVIEW CTA — bone-50 bg                                     │
│  "Had a good experience? It helps more than you'd expect." + button  │
├──────────────────────────────────────────────────────────────────────┤
│  CTA BANNER — navy-900 bg                                            │
│  FOOTER — navy-900 bg                                                │
└──────────────────────────────────────────────────────────────────────┘
```

#### 375px Mobile

Single-column review cards. Empty state renders centered. Write-a-review CTA full-width button.

### 6.2 Layout Specs

- Review cards: 3-column desktop, 2-column tablet, 1-column mobile.
- Card: bone-50 fill, `--shadow-sm`, `--radius-xl`, padding 1.5rem. Large opening quote mark in terracotta-600 at top of card.
- Stars: amber-500 filled star glyphs (Unicode ★ via aria-label `rating: 5 out of 5 stars`).
- Attribution: Inter body-sm, gray-600. First name + last initial only.
- Empty state: centered, max-width 480px, gray-600 prose, terracotta-600 button linking to Google Business Profile.

### 6.3 Typography Specs

Card quote: `--text-body-lg`, Inter, charcoal-900. Attribution: `--text-body-sm`, Inter, gray-600. Stars: amber-500.

### 6.4 Color Specs

bone-100 section bg. Cards bone-50. Stars amber-500. Quote mark terracotta-600. Attribution gray-600.

### 6.5 Content Mapping

```
data/content.yaml → reviews.*
  reviews.hero.*, reviews.items[]
  reviews.google_cta, reviews.google_href
  reviews.write_cta
```

### 6.6 Interaction Specs

"Read reviews on Google" and "Write a Review" open in new tab (`target="_blank" rel="noopener noreferrer"`).

### 6.7 Mobile Behavior

1-column card stack. Each card full-width.

### 6.8 Accessibility Specs

Stars: `<span aria-label="Rated 5 out of 5 stars">★★★★★</span>`. Review cards: `<article>` inside `<ul>`. Empty state: `role="status"` on the empty-state div.

### 6.9 Trust Signal Placement

This entire page is the Social Proof trust signal (§12b item 7). Attribution (first name + last initial + date + source) satisfies the Social Proof trust requirements. Review dates visible — no competitor shows dates (trust-analysis.md §NICE).

### 6.10 Competitor Gap Exploitation

2 of 5 competitors have dedicated reviews pages. Neither shows review dates. AJ's page explicitly states "Every quote on this page is real" and discloses the source (Google) — a transparency play no competitor attempts. Review recency (dates visible) is a NICE/first-mover trust signal that directly addresses the market gap identified in trust-analysis.md §5.

### 6.11 Schema Markup Spec

Once `reviews.items[]` is populated: `AggregateRating` within the `LocalBusiness` schema on the homepage.

Individual review cards: no per-card `Review` schema until real Google reviews are mirrored and verified. Do not fabricate `@type: Review` schema.

---

---

## 7. Gallery

**Layout:** `layouts/gallery/single.html`
**Data:** `data/content.yaml` → `gallery.*`

### 7.1 ASCII Wireframes

#### 1440px Desktop

```
┌──────────────────────────────────────────────────────────────────────┐
│  NAV                                                                 │
├──────────────────────────────────────────────────────────────────────┤
│  HERO — bone-50 bg                                                   │
│  [EYEBROW: "Gallery"]                                                │
│  H1: "Real trucks. Real jobs. No stock."                             │
│  Body: 1 sentence                                                    │
├──────────────────────────────────────────────────────────────────────┤
│  GALLERY GRID — bone-100 bg (or empty state)                        │
│                                                                      │
│  IF items populated:                                                 │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                              │
│  │ img  │ │ img  │ │ img  │ │ img  │  4-column masonry-style       │
│  └──────┘ └──────┘ └──────┘ └──────┘  (CSS columns, not grid)     │
│  (Each image: aspect-ratio 4/3, radius-md, shadow-sm)               │
│                                                                      │
│  IF items empty:                                                     │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │  [camera icon, terracotta-600, 64px]                         │   │
│  │  "We'll add photos here as we shoot them."                   │   │
│  │  "Everything on this page is from our own fleet and          │   │
│  │   customers' sites, used with permission."                   │   │
│  │  [CHECK BACK SOON]  (ghost button, navy-700)                 │   │
│  └──────────────────────────────────────────────────────────────┘   │
├──────────────────────────────────────────────────────────────────────┤
│  CTA BANNER — navy-900 bg                                            │
│  FOOTER — navy-900 bg                                                │
└──────────────────────────────────────────────────────────────────────┘
```

#### 375px Mobile

2-column image grid. Empty state renders centered, full-width.

### 7.2 Layout Specs

- Populated state: CSS `columns: 4` (desktop), `columns: 2` (mobile). Not CSS Grid. Column-based layout creates natural staggered heights without masonry JS.
- Images: `--radius-md`, `--shadow-sm`. Alt text per image mandatory.
- Empty state: centered, max-width 480px, terracotta-600 camera icon (SVG, `aria-hidden="true"`), gray-600 prose, navy-700 ghost button.
- Ghost button for empty state (not terracotta) — because there is nothing to "quote" yet; this is informational, not a conversion moment.

### 7.3 Typography Specs

Hero H1 `--text-display-lg` Playfair navy-900. Empty state prose `--text-body-md` Inter gray-600.

### 7.4 Color Specs

Hero bone-50. Gallery section bone-100. Empty state: bone-100 bg, gray-600 text.

### 7.5 Content Mapping

```
data/content.yaml → gallery.*
  gallery.hero.*, gallery.items[]
  (items are image objects: src, alt, caption)
```

### 7.6 Interaction Specs

Populated state: images are plain `<img>` tags. No lightbox in v1. Add lightbox in v2 when photo library is populated.

Empty state: "Check Back Soon" button is a disabled/non-linked ghost button or links to `/contact/` with label adjusted to "Schedule a Job" — the action the gallery page should eventually drive.

### 7.7 Mobile Behavior

2-column grid on mobile. Empty state: centered, full-width.

### 7.8 Accessibility Specs

- Each `<img>` requires descriptive `alt`. No `alt=""` except decorative divider images.
- `<figure>` + `<figcaption>` pattern for captioned images.
- Empty state camera icon: `aria-hidden="true"`.

### 7.9 Trust Signal Placement

Gallery itself is a Competence trust signal (fleet photography substantiates the gallon-meter claim visually — CLAUDE.md §12b SHOULD #9). The empty state is transparent about its own state — this honesty IS a trust signal.

### 7.10 Competitor Gap Exploitation

2 of 5 competitors have a gallery (C1 Hill Country, C3 Superior). Neither documents before/after shots explicitly. AJ's gallery, once populated with authentic gallon-meter photos and truck shots, directly addresses the Competence trust gap and the specific before/after engagement lift (+31% per trust-analysis.md §SHOULD).

### 7.11 Schema Markup Spec

`ImageGallery` schema on this page once populated. No schema on empty state page to avoid generating errors in Rich Results Test.

---

---

## 8. How We Work

**Layout:** `layouts/page/single.html`
**Data:** `data/content.yaml` → `how_we_work.*`

### 8.1 ASCII Wireframes

#### 1440px Desktop

```
┌──────────────────────────────────────────────────────────────────────┐
│  NAV                                                                 │
├──────────────────────────────────────────────────────────────────────┤
│  HERO — bone-50 bg                                                   │
│  [EYEBROW: "How We Work"]                                            │
│  H1: "You pay for gallons. Not guesses."                             │
│  Body: 2–3 sentences introducing the gallon meter concept           │
├──────────────────────────────────────────────────────────────────────┤
│  SECTIONS — alternating bone-50 / bone-100                          │
│                                                                      │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │  H2: "What a gallon meter is"                                │   │
│  │  Body paragraph — Inter body-lg, charcoal-900                │   │
│  └──────────────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │  H2: "What it means for your invoice"    [navy-700 bg]        │   │
│  │  Body — bone-50 text                                         │   │
│  └──────────────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │  H2: "Why every other company eyeballs it"                   │   │
│  │  Body                                                        │   │
│  └──────────────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │  H2: "What proof you can ask for"         [bone-100 bg]       │   │
│  │  Body                                                        │   │
│  │  ┌─────────────────────────────────────────┐                │   │
│  │  │  Proof items: meter photo / manifest /   │                │   │
│  │  │  invoice line — as a 3-item icon row     │                │   │
│  │  └─────────────────────────────────────────┘                │   │
│  └──────────────────────────────────────────────────────────────┘   │
├──────────────────────────────────────────────────────────────────────┤
│  CTA BANNER — navy-900 bg                                            │
│  FOOTER — navy-900 bg                                                │
└──────────────────────────────────────────────────────────────────────┘
```

#### 375px Mobile

Single-column section stack. "What proof you can ask for" proof items stack vertically (not a 3-column icon row).

### 8.2 Layout Specs

- 4 content sections from `how_we_work.sections[]`. Section 2 ("What it means for your invoice") renders on navy-700 bg for visual contrast and emphasis.
- Max prose width: 720px centered.
- "What proof you can ask for" section: 3-item inline row (meter readout icon + manifest icon + invoice icon) on desktop; vertical stack on mobile.
- Section padding: 80px block desktop / 48px mobile.

### 8.3 Typography Specs

H1 display-lg Playfair navy-900. Section H2 heading-lg Playfair navy-900 (bone-50 on dark section). Body body-lg Inter (lead prose) or body-md (subsequent sections).

### 8.4 Color Specs

Section 1 bone-50. Section 2 navy-700 (dark emphasis). Sections 3–4 alternating bone-50 / bone-100. CTA navy-900.

### 8.5 Content Mapping

```
data/content.yaml → how_we_work.*
  how_we_work.hero.eyebrow, headline, body
  how_we_work.sections[].heading → section H2
  how_we_work.sections[].body   → section body prose
  how_we_work.cta, how_we_work.cta_href
```

### 8.6–8.7 Interaction + Mobile Behavior

No interactive elements beyond the CTA. Mobile: sections stack full-width. Section 2 (dark) renders full-bleed navy-700 on mobile with adequate padding.

### 8.8 Accessibility Specs

Sections labeled with `aria-labelledby` pointing to section H2 ids. Proof icons `aria-hidden="true"`.

### 8.9 Trust Signal Placement

This page IS the primary Competence + Character trust signal. Every sentence is a trust deployment. The "Why every other company eyeballs it" section explicitly contrasts AJ with competitors — a confidence signal that no competitor can replicate on their own site.

### 8.10 Competitor Gap Exploitation

Zero competitors have a proof-of-pumpage page. This is the highest-value first-mover page in the entire site. `competitive-analysis.md §5`: "Proof-of-pumpage explanation page — no competitor can match or replicate this claim easily." AJ's gallon meter + this page = a trust signal that cannot be acquired by any competitor without buying the same hardware.

### 8.11 Schema Markup Spec

No unique schema beyond the global `LocalBusiness`. Could add `WebPage` with `about` referencing the `LocalBusiness` and `keywords` for proof-of-pumpage content, but this is optional. Rich Results Test will pass without it.

---

---

## 9. What to Expect

**Layout:** `layouts/page/single.html`
**Data:** `data/content.yaml` → `what_to_expect.*`

### 9.1 ASCII Wireframes

#### 1440px Desktop

```
┌──────────────────────────────────────────────────────────────────────┐
│  NAV                                                                 │
├──────────────────────────────────────────────────────────────────────┤
│  HERO — bone-50 bg                                                   │
│  [EYEBROW: "What to Expect"]                                         │
│  H1: "From pulling in the drive to hauling off the load."            │
│  Body: framing paragraph                                             │
├──────────────────────────────────────────────────────────────────────┤
│  5-STEP PROCESS — bone-50 bg                                         │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │  01 ──────── 02 ──────── 03 ──────── 04 ──────── 05          │   │
│  │  Title       Title       Title       Title       Title        │   │
│  │  Body        Body        Body        Body        Body         │   │
│  │  (Horizontal on desktop — numbered nodes, connecting line)   │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  Step 03: "Gallon meter on, pumping starts at zero" visually        │
│  called out with terracotta-600 step node color (differs from       │
│  the other 4 which are navy-700)                                     │
├──────────────────────────────────────────────────────────────────────┤
│  WHAT'S NORMAL / WHAT TO ASK — bone-100 bg                          │
│  2-col: "What's normal" list | "Good questions to ask" list         │
├──────────────────────────────────────────────────────────────────────┤
│  CTA BANNER — navy-900 bg                                            │
│  FOOTER — navy-900 bg                                                │
└──────────────────────────────────────────────────────────────────────┘
```

#### 375px Mobile

Steps become a vertical numbered list (01 → 05, each step a card). Step 03 still visually highlighted with terracotta accent.

### 9.2 Layout Specs

- Step 03 is the gallon-meter step — its node/circle is terracotta-600 (not navy-700) to visually landmark the proof-of-pumpage moment in the service timeline.
- Desktop: horizontal 5-step timeline with connecting line (CSS `::before` pseudo-element on the `<ol>`). No parallax.
- Mobile: `<ol>` with `<li>` per step, displayed vertically as numbered cards.
- "What's normal / good questions" section: 2-col list on desktop, stacked on mobile.

### 9.3–9.5 Typography, Color, Content Mapping

Typography follows the standard interior page pattern. Step numbers: `--text-display-xl` / 4.5rem, Playfair, gray-200 (large, decorative, behind the step content). Step title: `--text-heading-lg` Playfair navy-900. Step body: `--text-body-md` Inter charcoal-900.

Content: `what_to_expect.hero.*`, `what_to_expect.steps[]`, `what_to_expect.cta`.

### 9.6–9.11 Interaction, Mobile, Accessibility, Trust, Competitor Gap, Schema

No interactive elements. Mobile: vertical step stack. Accessibility: `<ol>` for numbered steps, each `<li>` has visually hidden step label "Step N:". Trust: Fear-reduction signal (Character trust category — explaining the visit reduces pre-call anxiety, TCEQ citation in step 05). Competitor gap: zero competitors have this page. Schema: no unique schema; `WebPage` with `breadcrumb` BreadcrumbList.

---

---

## 10. Septic Pumping Cost

**Layout:** `layouts/page/single.html`
**Data:** `data/content.yaml` → `septic_pumping_cost.*`

### 10.1 ASCII Wireframes

#### 1440px Desktop

```
┌──────────────────────────────────────────────────────────────────────┐
│  NAV                                                                 │
├──────────────────────────────────────────────────────────────────────┤
│  HERO — bone-50 bg                                                   │
│  [EYEBROW: "Pricing Guide"]                                          │
│  H1: "What septic pumping actually costs around here."               │
│  Body: no-rate-card disclosure + honesty framing                     │
├──────────────────────────────────────────────────────────────────────┤
│  4 CONTENT SECTIONS — alternating bg                                 │
│  "The main drivers" — bone-100 bg                                    │
│  "Why our bill is different" — navy-700 bg (dark emphasis)          │
│  "Red flags in a septic quote" — bone-50 bg                         │
│  "How to get a real number" — bone-100 bg                           │
├──────────────────────────────────────────────────────────────────────┤
│  CTA BANNER — navy-900 bg                                            │
│  FOOTER — navy-900 bg                                                │
└──────────────────────────────────────────────────────────────────────┘
```

### 10.2 Layout Specs

"Red flags" section: render as a bullet list of 4–5 items inside the bone-50 section. Each bullet item terracotta-600 `✗` icon — a visual contrast to the `✓` used in the city pages typical-jobs section (negative signal vs. positive). "Why our bill is different" on navy-700 for emphasis: this is the gallon-meter competitive differentiation paragraph.

### 10.3–10.11 Full Specs

Follow the standard `page/single.html` pattern. Content: `septic_pumping_cost.sections[].heading` and `.body`. CTA: "Get a Real Quote" → `/contact/`. Trust signal: the "Red flags" section is a Risk Reduction signal (CLAUDE.md §12b) — it teaches the customer how to verify quality, which implicitly positions AJ as the only provider that passes all red-flag tests (metered billing, licensed, insured, manifest provided). Competitor gap: zero competitors have a pricing guide page. Schema: no unique schema. This page targets decision-stage searchers; a `WebPage` schema with `keywords` helps crawl intent classification.

---

---

## 11. Drought & Septic

**Layout:** `layouts/page/single.html`
**Data:** `data/content.yaml` → `drought_and_septic.*`

### 11.1 ASCII Wireframes

#### 1440px Desktop

```
┌──────────────────────────────────────────────────────────────────────┐
│  NAV                                                                 │
├──────────────────────────────────────────────────────────────────────┤
│  HERO — bone-50 bg                                                   │
│  [EYEBROW: "Hill Country Guide"]                                     │
│  H1: "44 months of drought, and your drain field is paying           │
│        attention."                                                   │
│  Body: Barton Springs aquifer + Stage 3 context                     │
├──────────────────────────────────────────────────────────────────────┤
│  4 CONTENT SECTIONS                                                  │
│  "What drought does underground" — bone-100                          │
│  "Why failures cluster in dry periods" — navy-700 (emphasis)        │
│  "What to watch for" — bone-50                                      │
│  "What helps" — bone-100                                             │
├──────────────────────────────────────────────────────────────────────┤
│  CTA BANNER — navy-900                                               │
│  FOOTER — navy-900                                                   │
└──────────────────────────────────────────────────────────────────────┘
```

### 11.2 Layout Specs

"What to watch for" section: render as a bullet list of 4 items with terracotta-600 `⚠` warning icon per item (CSS, not emoji). "What helps" section: numbered list of actionable steps.

### 11.3–11.11 Full Specs

Standard `page/single.html` pattern. This page is a Competence trust signal (CLAUDE.md §12b): AJ's localized drought knowledge — specific to Barton Springs Edwards Aquifer, Stage 3 drought, Hays County drain-field compaction — is something no competitor can replicate without rewriting their own content from scratch. Competitor gap: zero competitors connect drought to septic. Schema: `Article` type with `author` = `LocalBusiness` for E-E-A-T crawl authority. This is the primary educational content SEO asset.

---

---

## 12. Grease Trap Compliance

**Layout:** `layouts/page/single.html`
**Data:** `data/content.yaml` → `grease_trap_compliance.*`

### 12.1 ASCII Wireframes

#### 1440px Desktop

```
┌──────────────────────────────────────────────────────────────────────┐
│  NAV                                                                 │
├──────────────────────────────────────────────────────────────────────┤
│  HERO — bone-50 bg                                                   │
│  [EYEBROW: "Restaurant Operators"]                                   │
│  H1: "Austin's 90-day rule, in plain English."                       │
│  Body: Austin Water FOG mandate summary + fine amount                │
├──────────────────────────────────────────────────────────────────────┤
│  4 CONTENT SECTIONS                                                  │
│  "What the 90-day rule actually says" — bone-100                     │
│  "What you have to document" — navy-700 bg                          │
│  "How AJ handles it" — bone-50 (featuring AJ's specific process)    │
│  "What happens if you fall behind" — bone-100                        │
├──────────────────────────────────────────────────────────────────────┤
│  CTA BANNER — navy-900 (CTA: "Get on a 90-Day Schedule")            │
│  FOOTER — navy-900                                                   │
└──────────────────────────────────────────────────────────────────────┘
```

### 12.2 Layout Specs

"What you have to document" on navy-700 background makes the documentation checklist visually prominent — this is the primary fear-reduction moment (restaurant owners fear inspector visits). Render the 4 documentation items as a bone-50 checklist with `✓` marks inside the dark section.

"How AJ handles it": the 3-step AJ process (90-day schedule → overnight pump → leave printed record) rendered as a mini 3-step inline process strip, distinguishing this from the compliance-explanation sections above and below it.

### 12.3–12.11 Full Specs

Standard `page/single.html`. CTA variant: "Get on a 90-Day Schedule" → `/contact/`. Trust: Character + Risk Reduction (Austin Code Chapter 15-5 citation, $2,000 fine callout). Competitor gap: zero competitors have a grease trap compliance guide page. This is the primary Commercial/Restaurant audience trust surface. Schema: `Article` with `about` linking to `Service` schema for grease trap pumping. Keyword targets: "Austin grease trap compliance," "90-day grease trap Austin," "restaurant grease trap schedule Austin."

---

---

## 13. Service Area Hub

**Layout:** `layouts/service-area/list.html`
**Data:** `data/content.yaml` → `service_area_hub.*` + `service_area.primary_cities[]`

### 13.1 ASCII Wireframes

#### 1440px Desktop

```
┌──────────────────────────────────────────────────────────────────────┐
│  NAV                                                                 │
├──────────────────────────────────────────────────────────────────────┤
│  HERO — bone-50 bg                                                   │
│  [EYEBROW: "Where We Work"]                                          │
│  H1: "Hays, Travis, and Comal counties. The Hill Country triangle."  │
│  Body: 40-mile radius framing + "click your city" instruction        │
├──────────────────────────────────────────────────────────────────────┤
│  MAP + CITY GRID — bone-100 bg                                       │
│  ┌────────────────────────────┐  ┌─────────────────────────────┐   │
│  │  STATIC SVG MAP            │  │  PRIMARY CITIES             │   │
│  │  (Hays/Travis/Comal bounds)│  │  ┌──────────────────────┐   │   │
│  │  Cities labeled on map     │  │  │ Dripping Springs     │   │   │
│  │  Subtle topo line pattern  │  │  │ Hays County  →       │   │   │
│  │  No Google Maps iframe     │  │  └──────────────────────┘   │   │
│  │                            │  │  ┌──────────────────────┐   │   │
│  │                            │  │  │ Austin               │   │   │
│  │                            │  │  │ Travis County →      │   │   │
│  │                            │  │  └──────────────────────┘   │   │
│  │                            │  │  ┌──────────────────────┐   │   │
│  │                            │  │  │ Kyle                 │   │   │
│  │                            │  │  │ Hays County →        │   │   │
│  │                            │  │  └──────────────────────┘   │   │
│  │                            │  │  ┌──────────────────────┐   │   │
│  │                            │  │  │ New Braunfels        │   │   │
│  │                            │  │  │ Comal County →       │   │   │
│  │                            │  │  └──────────────────────┘   │   │
│  │                            │  │  ┌──────────────────────┐   │   │
│  │                            │  │  │ Driftwood            │   │   │
│  │                            │  │  │ Hays County →        │   │   │
│  │                            │  │  └──────────────────────┘   │   │
│  └────────────────────────────┘  └─────────────────────────────┘   │
│                                                                      │
│  SECONDARY CITIES — bone-100 (same section)                         │
│  Also serving: Wimberley · Buda · San Marcos · Spicewood ·          │
│  Johnson City · Canyon Lake                                          │
├──────────────────────────────────────────────────────────────────────┤
│  ZIP CHECK WIDGET — bone-50 bg                                       │
│  "Check your ZIP code:"  [78620 ________] [CHECK]                   │
│  Result appears inline below input                                   │
├──────────────────────────────────────────────────────────────────────┤
│  CTA BANNER — navy-900 bg                                            │
│  FOOTER — navy-900 bg                                                │
└──────────────────────────────────────────────────────────────────────┘
```

#### 375px Mobile

```
┌──────────────────────────────┐
│  NAV                         │
├──────────────────────────────┤
│  HERO bone-50                │
│  H1 Playfair                 │
│  Body                        │
├──────────────────────────────┤
│  SVG MAP — bone-100          │
│  (map full-width, stacked    │
│   above city cards)          │
│                              │
│  ┌──────────────────────────┐│
│  │ Dripping Springs         ││
│  │ Hays County →            ││
│  └──────────────────────────┘│
│  ┌──────────────────────────┐│
│  │ Austin                   ││
│  │ Travis County →          ││
│  └──────────────────────────┘│
│  (5 city cards, single col)  │
│                              │
│  Also serving: comma list    │
├──────────────────────────────┤
│  ZIP CHECK — bone-50         │
│  Label                       │
│  [Input] [CHECK] full-width  │
│  Result inline               │
├──────────────────────────────┤
│  CTA BANNER navy-900         │
│  FOOTER navy-900             │
└──────────────────────────────┘
```

### 13.2 Layout Specs

- Map + City Grid: 2-column on desktop (map ~45%, city grid ~55%). Single column on mobile (map above cities).
- SVG Map: inline SVG, static. No Google Maps iframe. No Leaflet. Hays, Travis, and Comal county outlines; 5 primary city labels; subtle background topo-line pattern via CSS `repeating-linear-gradient` — thin gray-200 diagonal lines.
- City cards: bone-50 fill, `--shadow-sm`, `--radius-lg`, navy-500 left-border 4px. City name (Playfair heading-lg), county name (Inter body-sm, gray-600), arrow link (→, terracotta-600).
- Whole card is a `<a>` linking to `/service-area/[slug]/`.
- Secondary cities: gray-600 prose, no cards, no links (no pages exist for them).
- ZIP widget: single `<input type="text" pattern="[0-9]{5}">` + `<button>`. Result rendered in a `<div role="status" aria-live="polite">` below the input — no page reload.

### 13.3 Typography Specs

H1 display-lg Playfair navy-900. City name heading-lg Playfair navy-900. County name body-sm Inter gray-600. Secondary cities body-sm Inter gray-600. ZIP widget label body-md Inter charcoal-900. ZIP result body-md Inter (terracotta-600 for in-service; gray-600 for out-of-service).

### 13.4 Color Specs

Hero bone-50. Map + city grid bone-100. ZIP widget bone-50. CTA navy-900.

### 13.5 Content Mapping

```
data/content.yaml → service_area_hub.hero.*
data/content.yaml → service_area.primary_cities[] (name, slug, county)
data/content.yaml → service_area.secondary_cities[] (plain text list)
data/content.yaml → service_area.zip_widget_label, zip_widget_hint
data/content.yaml → service_area.zip_in_service_message
data/content.yaml → service_area.zip_out_of_service_message
```

ZIP code check logic: static array of known ZIP codes per served area in `estimator.js` or a separate `zip-check.js`. No server-side required. If ZIP not in array, render out-of-service message.

### 13.6 Interaction Specs

- City cards: whole card is a link. Hover `--shadow-md`, cursor pointer.
- ZIP widget: on "Check" button click (or Enter in input), JS evaluates ZIP against the in-service array and injects result string into the `role="status"` div.
- `aria-live="polite"` on result div ensures screen readers announce the result without forcing focus.

### 13.7 Mobile Behavior

Map scales to full-width; SVG viewBox preserves aspect ratio. City cards single column. ZIP input + button stack vertically (each full-width). Secondary cities wrap as a comma-separated inline list.

### 13.8 Accessibility Specs

- SVG map: `<title>` inside the SVG with "Map of AJ Liquid Waste Haulers service area — Hays, Travis, and Comal counties, Texas". `<desc>` with city list as fallback text. `role="img"` on the `<svg>` element.
- City cards `<ul>` of `<li><a>` structure. `aria-label="Septic service in [City], [County]"` on each link.
- ZIP input: `<label for="zip-input">`. `aria-describedby="zip-result"` on the input.
- ZIP result: `<div id="zip-result" role="status" aria-live="polite" aria-atomic="true">`.

### 13.9 Trust Signal Placement

This page is primarily Local SEO infrastructure (city pages linked from here). Trust signals: the county listing per city card signals geographic knowledge; the secondary cities list signals coverage breadth; TCEQ Licensed + Insured in footer trust line (all pages).

### 13.10 Competitor Gap Exploitation

3 of 5 competitors have service area hub pages linking to city pages. C4 A+ Septic's hub links 41 city pages. AJ's hub links 5 cities — but with more genuine local specificity per city than A+'s mass-produced pages. The ZIP widget is a first-mover interactive element: no competitor has one (`competitive-analysis.md §2` — "trust strip / stats bar vacuum = opportunity"; same logic applies to interactive service area check).

### 13.11 Schema Markup Spec

`LocalBusiness` with `areaServed` as an array of all 5 cities (extended version of the city-page schema):

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "AJ Liquid Waste Haulers, LLC",
  "telephone": "+15129560047",
  "url": "https://ajliquidwastehaulers.com",
  "areaServed": [
    { "@type": "Place", "name": "Dripping Springs", "containedInPlace": { "@type": "Place", "name": "Hays County, TX" } },
    { "@type": "Place", "name": "Austin", "containedInPlace": { "@type": "Place", "name": "Travis County, TX" } },
    { "@type": "Place", "name": "Kyle", "containedInPlace": { "@type": "Place", "name": "Hays County, TX" } },
    { "@type": "Place", "name": "New Braunfels", "containedInPlace": { "@type": "Place", "name": "Comal County, TX" } },
    { "@type": "Place", "name": "Driftwood", "containedInPlace": { "@type": "Place", "name": "Hays County, TX" } }
  ]
}
```

`BreadcrumbList`:
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ajliquidwastehaulers.com" },
    { "@type": "ListItem", "position": 2, "name": "Service Area", "item": "https://ajliquidwastehaulers.com/service-area/" }
  ]
}
```

---

## Cross-Page Notes

### Shared `page/single.html` Layout

Pages 8 (How We Work), 9 (What to Expect), 10 (Septic Pumping Cost), 11 (Drought & Septic), and 12 (Grease Trap Compliance) all use `layouts/page/single.html`. This template handles:

1. Hero section (eyebrow + H1 + body from `*.hero.*` keys)
2. N content sections from `*.sections[]` with alternating bone-50 / bone-100 backgrounds; one section may receive navy-700 if the YAML key `dark: true` is set on that section object
3. CTA block at bottom (from `*.cta` and `*.cta_href`)
4. Global nav + footer + mobile CTA bar from shared partials

The template makes no assumptions about the number of sections or their content type — it iterates whatever `*.sections[]` array is provided.

### Content Voice Gate (§10e check for all pages)

Before marking any page blueprint "done" in Stage 6:
- [ ] Read-aloud test: sounds like a person
- [ ] Burstiness scan: no 3+ same-length sentences in a row
- [ ] Banned phrase scan: zero matches from §10b
- [ ] Specificity check: every claim has a number, cert, local detail, or fact
- [ ] Stance check: expresses a point of view
- [ ] Contraction check: natural contractions present
- [ ] Punctuation audit: max 2 em dashes per section, no semicolons

### G10b Compliance (BLOCKER)

All interior pages listed here use dedicated layouts (not `_default/single.html` or `_default/list.html`). Pull ALL text from data files. Have a CTA. Have schema. Verified against the layout path specified per blueprint.

| Page | Layout | Data Source | Has CTA | Has Schema |
|---|---|---|---|---|
| About | `layouts/about/single.html` | `content.yaml → about.*` | Yes | LocalBusiness + Person |
| Contact | `layouts/contact/single.html` | `content.yaml → contact.*` | Yes (form = CTA) | LocalBusiness |
| Services Index | `layouts/services/list.html` | `content.yaml → services.*` | Yes | ItemList |
| Service Detail | `layouts/services/single.html` | `data/services/[slug].yaml` | Yes | Service + FAQPage |
| FAQ | `layouts/faq/single.html` | `content.yaml → faq.*` | Yes | FAQPage |
| Reviews | `layouts/reviews/single.html` | `content.yaml → reviews.*` | Yes | (AggregateRating when live) |
| Gallery | `layouts/gallery/single.html` | `content.yaml → gallery.*` | Yes | (ImageGallery when populated) |
| How We Work | `layouts/page/single.html` | `content.yaml → how_we_work.*` | Yes | WebPage |
| What to Expect | `layouts/page/single.html` | `content.yaml → what_to_expect.*` | Yes | WebPage |
| Septic Cost | `layouts/page/single.html` | `content.yaml → septic_pumping_cost.*` | Yes | WebPage |
| Drought & Septic | `layouts/page/single.html` | `content.yaml → drought_and_septic.*` | Yes | Article |
| Grease Compliance | `layouts/page/single.html` | `content.yaml → grease_trap_compliance.*` | Yes | Article |
| Service Area Hub | `layouts/service-area/list.html` | `content.yaml → service_area_hub.*` | Yes | LocalBusiness |
| City Pages (×5) | `layouts/service-area/single.html` | `data/locations/cities/[slug].yaml` | Yes | LocalBusiness + areaServed |
