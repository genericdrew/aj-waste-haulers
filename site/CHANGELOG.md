# Changelog

## 2026-04-18 — v1.0.0 initial build

**Reason:** Initial rebuild of ajliquidwastehaulers.com on the build-framework workflow. Delivers a 25-page Hugo site, schema-instrumented, matching the design system in `CLAUDE.md`.

**Files changed (summary — full list in git history if repo is initialized):**
- `hugo.toml` — site config, baseURL, sitemap
- `assets/css/_tokens.css` — 13 color tokens (Earthen Luxe palette)
- `assets/css/main.css` — full stylesheet; zero raw hex (G08 clean), zero raw radius/shadow (G09 clean)
- `assets/js/site.js` — mobile nav, pumping-frequency estimator, ZIP service-area widget
- `layouts/_default/baseof.html` + `partials/` — head, header, footer, mobile-cta-bar, schema
- `layouts/partials/sections/*.html` — 9 homepage section partials (hero, trust-strip, audience-pathways, services, why-aj, process-estimator, testimonials, service-area, cta-banner)
- `layouts/index.html` — homepage (Composition Score 94.75 per CLAUDE.md §8)
- `layouts/about|contact|faq|reviews|gallery|page|services|service-area/` — dedicated interior layouts (G10b)
- `data/content.yaml`, `data/services/*.yaml`, `data/locations/cities/*.yaml` — all display copy
- `content/**/_index.md` + service/city stubs — Hugo content frontmatter only

**Gates passed:**
- G02 — 0 placeholder/lorem/TBD tokens in data
- G03 — trust strip has source comments; spans 4 of 4 trust categories
- G07 — all display strings from data files
- G08 — 0 raw hex in main.css
- G09 — 0 raw radius/shadow values
- G10 — every section has a real CTA
- G10b — every interior page uses a dedicated layout
- G13 — `hugo --minify --gc` builds 25 pages, 0 errors
- G14 — 0 banned phrases in content.yaml
- Composition Score 94.75 (target ≥80)

**Schema coverage:**
- Every page: `LocalBusiness` + `WebSite` (via common schema partial)
- Homepage: adds no additional (LocalBusiness is top-level)
- About: `AboutPage` → `LocalBusiness` → `Person` × 2 (founders)
- Service detail × 5: `Service` with `areaServed` = all cities
- FAQ: `FAQPage` with full question set
- City × 5: `LocalBusiness` with `areaServed = City` for each

---

## Known issues / pre-launch TODOs (require operator action)

1. **Fonts — currently Google CDN, spec wants self-hosted.** CLAUDE.md §2 + §11 ban CDN hotlink. v1 ships with `<link>` to fonts.googleapis.com for Playfair Display + Inter. Download WOFF2 subsets to `static/fonts/` and replace `head.html` link with `@font-face` declarations in `_tokens.css` before go-live.

2. **Gallon-meter photograph — currently SVG placeholder.** Why AJ section renders an illustrated meter gauge. Character Bible §5 requires a real close-cropped photograph of the gallon meter on an AJ truck. Replace `/images/why-aj-gallon-meter.jpg` and the inline SVG in `partials/sections/why-aj.html`.

3. **Hero background photograph — currently gradient only.** Needs an authentic Hill Country truck photograph at `/images/hero-truck-hillcountry.jpg`. CSS already targets it via `.hero__bg img`.

4. **TCEQ license number — pending client confirmation.** `data/content.yaml → trust_strip` currently displays "OSSF-Registered Hauler"; replace with exact TCEQ registration number from client records.

5. **Google Business Profile URL — pending.** `data/content.yaml → site.socials.google_business` and `testimonials.google_link` and `reviews.google_href` all empty. Populate when confirmed.

6. **Review count + star rating — pending.** Testimonials section renders an empty state; when real Google reviews are mirrored in, populate `data/content.yaml → testimonials.items[]` with named first-name + last-initial attribution.

7. **Street address — not published on current site.** If client wants an office address displayed, add to `data/content.yaml → site.address` and `footer`. Schema already handles `addressLocality` = Dripping Springs.

8. **Fleet / gallery photography — empty state.** `/gallery/` renders an intentional empty state until real photos exist.

9. **Form submission handler — `<form action="#">`.** Contact form currently posts to `#`. Wire to Formspree, Netlify Forms, or the client's preferred endpoint before launch.

10. **Hugo `.Site.Data` deprecation warning.** Build still succeeds on Hugo 0.159. Before Hugo 0.200+ upgrade, migrate references to `hugo.Data`.

---

## Stage-7 fixes applied (from Sonnet review 2026-04-18)

- `tel:` / `sms:` / `mailto:` hrefs now piped through `safeURL` — were rendering as `#ZgotmplZ` sitewide.
- Hardcoded strings "Services", "Frequently asked", "Call or request a quote", "Related services", "Top Service Areas", "Services we bring to X" moved into `data/content.yaml → ui` (G07).
- Testimonials empty-state conditional rewritten — broken `href="#"` and truncated sentence fixed.
- FAQ inner `<section>` → `<div>` with proper landmark hierarchy.
- About page schema refactored to `AboutPage` → `LocalBusiness` → `Person` per CLAUDE.md §17.
- Every city page has `meta_title` / `meta_description` front matter — titles no longer show the slug.
- New token `--color-amber-50` added for estimator overdue state — raw hex removed from `main.css`.
