# AJ Liquid Waste Haulers

Hugo website for AJ Liquid Waste Haulers, LLC — family-owned septic and liquid waste hauler in Dripping Springs, TX.

**Live site:** https://aj-waste-haulers.pages.dev

## Stack

- **Generator:** Hugo (extended) 0.159.1+
- **Styling:** Vanilla CSS with custom properties (Earthen Luxe palette)
- **JS:** Vanilla — no frameworks
- **Deployment:** Cloudflare Pages

## Build

```bash
cd site
hugo --minify --gc
# output: site/public/
```

## Local dev

```bash
cd site
hugo serve --disableFastRender
# http://localhost:1313
```

## Cloudflare Pages configuration

| Setting | Value |
|---|---|
| Framework preset | Hugo |
| Build command | `cd site && hugo --minify --gc` |
| Build output directory | `site/public` |
| Root directory | `/` |
| Environment variable | `HUGO_VERSION=0.159.1` |

## Project structure

```
.
├── site/                        # Hugo project
│   ├── content/                 # page frontmatter
│   ├── data/                    # content.yaml + services + cities
│   ├── layouts/                 # templates + section partials
│   ├── assets/                  # CSS + JS (Hugo pipeline)
│   ├── static/                  # favicons, fonts, robots
│   ├── hugo.toml
│   ├── CLAUDE.md                # design system + gate checks
│   └── CHANGELOG.md
├── 01-knowledge-base/           # internal context docs
├── 02-research/                 # research artifacts
├── 03-design/                   # pattern library + blueprints
└── build-report.html            # build session report
```

## Deliverable

23 HTML pages: homepage, 5 service detail pages, 5 city service-area pages, About, Contact, FAQ, Reviews, Gallery, How We Work, What to Expect, Pricing Guide, Drought & Septic, Grease Trap Compliance, Services index, Service Area hub.

- Schema on every page (LocalBusiness, Service, FAQPage, AboutPage, Person)
- Pumping-frequency estimator (TCEQ table)
- ZIP service-area widget
- Mobile sticky CTA bar
- WCAG AA accessibility baseline
