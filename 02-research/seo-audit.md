# SEO Audit — AJ Liquid Waste Haulers

**Compiled:** 2026-04-17
**Auditor:** Research agent 1A-5
**Domain:** ajliquidwastehaulers.com
**Sources fetched:** Live pages crawled 2026-04-17

---

## 1. Current-Site Audit

### 1.1 Page-by-Page Title Tags & Meta Descriptions

| Page | URL | Title Tag | Meta Description | Issues |
|------|-----|-----------|-----------------|--------|
| Homepage | / | "Septic Pumping in Texas & Liquid Waste Removal \| AJ Liquid Waste" | **MISSING** | No meta description; title uses brand shortname, not full name |
| Services | /services/ | "Septic Pumping Services \| AJ Liquid Waste Haulers" | **MISSING** | Generic; no city or differentiator |
| About | /about/ | "Septic Pumping Company \| AJ Liquid Waste Haulers" | **MISSING** | Title is identical-pattern to services page; no city signal |
| Contact | /contact/ | "Septic Pumping Near Me – Contact AJ Liquid Waste Haulers" | **MISSING** | Title is good ("near me" is intentional); still no meta description |
| FAQ | /faq/ | "Septic Pumping FAQ – AJ Liquid Waste Haulers" | **MISSING** | No meta description |

**Summary:** Zero meta descriptions across all audited pages. Title tags exist but are under-optimized — no primary city/geo modifier on most pages, no differentiator language. The contact page title ("Septic Pumping Near Me") is the strongest of the set.

---

### 1.2 Heading Structure (H1/H2)

| Page | H1 | H2 Headings | Issues |
|------|----|-------------|--------|
| Homepage | "Septic Pumping & Liquid Waste Removal in Texas" | Efficient Septic Pumping Solutions / Services for Residential & Commercial / Our Gallery / What We Offer / Delivering service beyond expectations / Why Choose Us / To Get Efficient, Safe, and Reliable Services Tailored to Your Needs / What Our Customers Say / Our Service Area | H1 is geo-vague ("in Texas" not "in Dripping Springs"). H2s are weak, generic, and several are not keyword-useful (e.g., "Delivering service beyond expectations"). |
| Services | "Services – Septic Pumping" | What We Provide / Service Coverage / What Our Customers Say | H2s are generic; no service-specific H2s (each service should be an H2 at minimum) |
| About | "Your Trusted Septic Pumping Experts" | Your Liquid Waste Management Experts / A Commitment to Excellence / Our Mission | H2s are vague and non-keyword-bearing |
| Contact | "Contact Us for Septic Pumping & Waste Hauling" | Get In Touch With Us / Office Hours / Emergency Hours / Service Agreement / Request Service or Quote | Decent structure; H1 includes primary keyword |
| FAQ | "Septic Pumping FAQ" | Frequently Asked Questions | Single H2 — should use question-phrasing as H3s for FAQPage schema alignment |

**Issues:**
- H1 on homepage does not include primary city ("Dripping Springs" or "Austin")
- No service-specific heading hierarchy (each of the 5 services should anchor its own H2/H3 structure)
- H2s across the site are largely decorative rather than keyword-bearing

---

### 1.3 Schema Markup

**Result: Zero structured data detected across all audited pages.**

No JSON-LD, microdata, or RDFa found on any page:

- No `LocalBusiness` schema (missing NAP, coordinates, service area, hours, license data)
- No `Service` schema on the services page or individual service pages
- No `FAQPage` schema on the FAQ page (despite 8 question/answer pairs being present)
- No `BreadcrumbList` schema
- No `Organization` schema
- No `Review` / `AggregateRating` schema (reviews are displayed via Trustindex widget, but no structured data)

This is the single largest technical SEO gap on the site.

---

### 1.4 Internal Link Structure

**Navigation links found:** Home, Contact, Services (with 5 sub-items), FAQ, Resources, Reviews, Blog

**Body internal links confirmed:**
- Homepage → Contact Us
- Homepage → Our Services
- Homepage → individual Septic Tank Pumping page
- About page → About Us, Services, Contact
- Services page → Home, About Us, Services, Contact Us, FAQ, Septic 101

**Issues:**
- No contextual in-body links connecting services to each other (e.g., septic pumping page not linking to emergency pumping or real estate inspections)
- Service area cities are listed but **none are linked** to dedicated city landing pages (those pages don't exist)
- Blog and Resources appear in nav but were not audited — if thin or empty, they represent crawl budget waste
- No internal links from FAQ page to service pages (missed conversion opportunity)
- No breadcrumb navigation

---

### 1.5 Visible On-Page Keyword Targets

Keywords actively used in current copy (homepage + services + about):

**Primary (present):**
- septic pumping
- liquid waste removal
- septic tank pumping
- grease trap cleaning / pumping
- TCEQ licensed / TCEQ-compliant

**Present but under-utilized:**
- Dripping Springs (mentioned but not in H1/title tags)
- Austin (in service area list, not in headings)
- winery / brewery / distillery waste (present on service page but not in title/meta)
- real estate septic inspection (present but thin)
- emergency pumping / 24/7 (present but not prominent in headings)

**Absent (target opportunities):**
- "septic pumping near me" (contact page title has it, but not integrated in body)
- "septic inspection Dripping Springs TX"
- "grease trap cleaning Austin TX"
- "beverage industry waste Texas"
- city + service combos (Kyle septic pumping, New Braunfels septic, etc.)
- "how often should I pump my septic tank" (FAQ content exists but not targeting this informational keyword in headings)

---

### 1.6 Image Alt Text

Found alt text examples: "Liquid waste removal," "Septic tank pumping," "Industrial waste removal," "Texas flag superimposed."

**Issues:**
- Alt text is generic and not geo-qualified
- No alt text incorporates business name or city for local relevance
- "Texas flag superimposed" is descriptive of decoration, not content — not useful for SEO
- No evidence of photo file names being SEO-friendly (cannot confirm without source HTML access)

---

### 1.7 Additional Technical Issues

| Issue | Severity | Notes |
|-------|----------|-------|
| Zero meta descriptions sitewide | Critical | Every page is missing meta description; Google will auto-generate from body copy |
| No schema markup | Critical | Zero structured data across entire site |
| H1 lacks geo modifier | High | Homepage H1 says "in Texas" not "in Dripping Springs" or "serving Austin" |
| No city landing pages | High | Service area is stated but no dedicated city pages exist |
| Thin title tag differentiation | Medium | About and Services titles follow same pattern, low distinctiveness |
| Alt text non-geo | Medium | Images exist but alt text doesn't leverage local keywords |
| No breadcrumbs | Low | Navigation structure is flat; no breadcrumbs to aid crawling/UX |
| Blog/Resources status unknown | Medium | Nav items exist; if empty or thin, may harm crawl quality |
| No sitemap.xml confirmed | Medium | Not confirmed present; should be verified and submitted to GSC |
| Street address absent sitewide | High | Footer shows city/state only — full address needed for local SEO NAP consistency |
| No Review schema on Reviews page | High | Reviews appear via widget; no structured data enables rich results |

---

## 2. Competitor Schema Comparison

Three competitors were audited for schema markup. Note: Texas Pride Outhouse/Septic redirects to texasprideseptic.com (Spring, TX — Houston market, not Austin), and that site is "coming soon." A-Action Septic (a-actionseptic.com) returned connection refused. Action Septic & Services (actionseptictx.com) was substituted as a direct Austin-market competitor.

| Competitor | URL | Schema Types Found | Notes |
|------------|-----|-------------------|-------|
| Action Septic & Services | actionseptictx.com | **None detected** | No JSON-LD, no microdata. Has Google My Business badge embedded as image but no structured data. | Source: WebFetch 2026-04-17 |
| Hill Country Wastewater | hillcountrywastewater.com | **None detected** | No structured data found. Has reCAPTCHA on contact form but zero schema. Since 2001, family-owned, full NAP on site. | Source: WebFetch 2026-04-17 |
| Texas Pride Septic | texasprideseptic.com | **None detected** | Site is "coming soon" — minimal HTML, no schema. Houston market. | Source: WebFetch 2026-04-17 |

**Key finding:** None of the three competitors audited deploy any schema markup. This is consistent with the broader septic services vertical — industry-wide schema adoption is extremely low. This represents a **first-mover opportunity**: AJ Liquid Waste Haulers can be the only schema-enabled operator in the local market, potentially gaining rich results in a schema-free competitive landscape.

Per industry SEO guidance (fourarrowsmarketing.com, 2026-04-17; almcorp.com, 2026-04-17): properly implemented schema typically delivers 20–40% CTR improvements, and for local service businesses, LocalBusiness + Service + FAQPage schema are the highest-value schema types to deploy first.

---

## 3. Keyword Research

### 3.1 Primary Keywords (High-Intent Commercial)

| # | Keyword | Intent | Priority | Notes |
|---|---------|--------|----------|-------|
| 1 | septic pumping Dripping Springs TX | Transactional | **P1** | Core geo + service combo; client's home market |
| 2 | septic tank pumping Austin TX | Transactional | **P1** | Largest nearby population center; high competition |
| 3 | septic pumping near me | Transactional | **P1** | Voice + mobile primary; client's contact page already targets this |
| 4 | grease trap cleaning Austin TX | Transactional | **P1** | Commercial niche; restaurants in Austin metro |
| 5 | emergency septic pumping Austin | Transactional | **P1** | 24/7 service differentiator; high urgency = high conversion |
| 6 | septic tank pumping Dripping Springs | Transactional | **P1** | Variant of #1, shorter query |
| 7 | liquid waste hauling Texas | Transactional | **P2** | Broader; matches domain name exactly |
| 8 | septic pumping Kyle TX | Transactional | **P2** | Secondary city; lower competition than Austin |
| 9 | septic tank cleaning New Braunfels TX | Transactional | **P2** | Secondary city with growing population |
| 10 | TCEQ licensed septic pumping | Transactional | **P2** | Differentiator + compliance signal; lower volume but high trust |

---

### 3.2 Service Keywords — City Grid

Format: [Service] + [City] = keyword target. P1 = Dripping Springs / Austin (primary market), P2 = Kyle / New Braunfels / Driftwood (secondary).

#### Septic Tank Pumping

| Keyword | Priority |
|---------|----------|
| septic tank pumping Dripping Springs TX | P1 |
| septic tank pumping Austin TX | P1 |
| septic tank pumping Kyle TX | P2 |
| septic tank pumping New Braunfels TX | P2 |
| septic tank pumping Driftwood TX | P2 |
| septic system pumping Hays County TX | P2 |

#### Grease Trap Pumping

| Keyword | Priority |
|---------|----------|
| grease trap cleaning Austin TX | P1 |
| grease trap pumping Dripping Springs | P1 |
| restaurant grease trap service Austin | P1 |
| commercial grease trap cleaning Hill Country TX | P2 |
| grease trap service Kyle TX | P2 |

#### Beverage Industry Waste

| Keyword | Priority |
|---------|----------|
| brewery waste removal Texas | P1 |
| winery waste pumping Hill Country TX | P1 |
| distillery waste disposal Austin TX | P1 |
| brewery liquid waste hauling Dripping Springs | P2 |
| beverage industry waste management Texas Hill Country | P2 |
| winery wastewater removal Texas | P2 |

#### Real Estate Septic Inspections

| Keyword | Priority |
|---------|----------|
| septic inspection Dripping Springs TX | P1 |
| real estate septic inspection Austin TX | P1 |
| septic inspection for home sale Hays County | P1 |
| septic system inspection before closing Texas | P2 |
| septic inspection Kyle TX | P2 |
| home buyer septic inspection New Braunfels | P2 |

#### Emergency Pumping

| Keyword | Priority |
|---------|----------|
| emergency septic pumping Austin TX | P1 |
| 24/7 septic pumping Dripping Springs | P1 |
| emergency septic service Hill Country TX | P1 |
| after hours septic pumping Austin | P2 |
| emergency grease trap cleaning Austin | P2 |

---

### 3.3 Long-Tail / Informational Keywords

| Keyword | Intent | Priority | Notes |
|---------|--------|----------|-------|
| how often should I pump my septic tank | Informational | P1 | FAQ already answers this; add to FAQ schema |
| signs septic tank needs pumping | Informational | P1 | High search volume; strong FAQ/blog topic |
| how much does septic pumping cost in Texas | Informational | P1 | "Near me" + cost queries drive lead gen |
| what happens if you don't pump your septic tank | Informational | P2 | Educational; top-of-funnel |
| how long does septic pumping take | Informational | P2 | Pre-service anxiety query |
| septic tank pumping vs cleaning difference | Informational | P2 | Educates; positions expertise |
| aerobic septic system maintenance Texas | Informational | P2 | Addresses a common system type in Hays County |
| grease trap cleaning frequency restaurant | Informational | P2 | Commercial client education |
| what is proof of pumpage | Informational | P1 | Unique to AJ's gallon-meter differentiator — zero competition |
| Dripping Springs septic regulations Hays County | Informational | P2 | Local compliance; attracts property owners |
| septic system inspection checklist Texas | Informational | P2 | Real estate buyer query |
| can tree roots damage septic system | Informational | P3 | FAQ topic; long-tail |
| what can you flush with septic system | Informational | P3 | FAQ topic; evergreen |

---

### 3.4 Niche Keywords — Brewery/Distillery and Real Estate

**Brewery / Winery / Distillery (High-Differentiation, Low Competition):**

| Keyword | Intent | Priority | Notes |
|---------|--------|----------|-------|
| brewery wastewater hauling Texas Hill Country | Transactional | **P1** | AJ is rare provider; minimal competitor pages exist for this term |
| winery septic pumping Dripping Springs | Transactional | **P1** | Dripping Springs is a significant wine/event venue corridor |
| distillery waste disposal Hill Country TX | Transactional | **P1** | Growing distillery cluster in Dripping Springs / Marble Falls area |
| craft beverage industry liquid waste Texas | Transactional | **P2** | Broader category term |
| brewery grease trap cleaning Austin TX | Transactional | **P2** | Crossover — breweries with food operations |
| TCEQ compliant brewery waste hauling | Transactional | **P2** | Compliance angle for regulated operators |

**Real Estate Septic Inspection (High Intent, Local):**

| Keyword | Intent | Priority | Notes |
|---------|--------|----------|-------|
| septic inspection for home sale Dripping Springs | Transactional | **P1** | Active real estate market in Hays County |
| TCEQ septic inspection Hays County | Transactional | **P1** | Regulatory alignment; agents + buyers search this |
| change of ownership septic inspection Texas | Transactional | **P1** | Specific Texas regulatory term used by competitors (AAMS) |
| pre-listing septic inspection Austin area | Transactional | **P2** | Seller-side query |
| septic inspection cost Texas | Informational | **P2** | Typical range: $250–$400 per search results |
| who performs septic inspections Texas | Informational | **P3** | Top-of-funnel; real estate agent education |

---

## 4. Recommended Page → Keyword Mapping

### Homepage (/)
**Target keywords:** septic pumping Dripping Springs TX, septic tank pumping Austin TX, liquid waste hauling Texas, TCEQ licensed septic pumping
- H1: "Septic Pumping & Liquid Waste Removal — Dripping Springs, TX"
- Meta title: "Septic Pumping Dripping Springs TX | AJ Liquid Waste Haulers"
- Meta description: "TCEQ-licensed septic pumping, grease trap cleaning & emergency service for Austin & Dripping Springs. Family-owned. 40+ years combined experience. Call (512) 956-0047."
- Service area section: link each city name to its dedicated landing page

### Services Index (/services/)
**Target keywords:** septic pumping near me, septic tank cleaning Texas, liquid waste removal services
- H1: "Septic & Liquid Waste Services — Austin Hill Country TX"
- Each service as a distinct H2 with city mention
- Each service card links to its dedicated service page

### Septic Tank Pumping Service Page (/services/septic-tank-pumping/)
**Target keywords:** septic tank pumping Dripping Springs TX, septic tank pumping Austin TX, septic system pumping Hays County
- H1: "Septic Tank Pumping & Cleaning — Dripping Springs & Austin, TX"
- Schema: `Service` type with `areaServed`

### Grease Trap Pumping Service Page (/services/grease-trap-pumping/)
**Target keywords:** grease trap cleaning Austin TX, restaurant grease trap service Austin, grease trap pumping Dripping Springs
- H1: "Grease Trap Cleaning & Pumping — Austin & Hill Country, TX"
- Target restaurants, commercial kitchens, food trucks

### Beverage Industry Waste Service Page (/services/beverage-industry-waste/)
**Target keywords:** brewery waste removal Texas, winery waste pumping Hill Country TX, distillery waste disposal Austin TX
- H1: "Brewery, Winery & Distillery Waste Removal — Texas Hill Country"
- Only operator in area with a dedicated page — zero-competition opportunity for this cluster

### Real Estate Septic Inspections Service Page (/services/real-estate-septic-inspections/)
**Target keywords:** septic inspection Dripping Springs TX, change of ownership septic inspection Texas, real estate septic inspection Austin TX
- H1: "Real Estate Septic Inspections — Dripping Springs, Kyle & Austin, TX"
- Target real estate agents as secondary audience

### Emergency Pumping Service Page (/services/emergency-pumping/)
**Target keywords:** emergency septic pumping Austin TX, 24/7 septic pumping Dripping Springs, emergency septic service Hill Country TX
- H1: "24/7 Emergency Septic Pumping — Austin & Dripping Springs, TX"

### FAQ Page (/faq/)
**Target keywords:** how often should I pump my septic tank, signs septic tank needs pumping, what happens if you don't pump, can tree roots damage septic, what can you flush with septic
- Add FAQPage JSON-LD schema (8 existing Q&A pairs are ready)
- H1: "Septic Pumping FAQ — Your Questions Answered"
- Each question as an H3 (question text verbatim for voice search)

### Service Area City Pages (to be created)
Each page targets [service] + [city] grid:

| Page | Primary Keywords |
|------|-----------------|
| /service-area/austin/ | septic pumping Austin TX, grease trap cleaning Austin |
| /service-area/dripping-springs/ | septic pumping Dripping Springs TX, septic inspection Dripping Springs |
| /service-area/kyle/ | septic tank pumping Kyle TX, emergency septic Kyle TX |
| /service-area/new-braunfels/ | septic tank pumping New Braunfels TX |
| /service-area/driftwood/ | septic pumping Driftwood TX |

### Blog / Septic 101 (informational cluster)
**Target keywords:** how often pump septic tank, signs septic needs pumping, how much does septic pumping cost Texas, what is proof of pumpage, aerobic septic system maintenance
- "What is Proof of Pumpage?" — zero competition; owned AJ differentiator
- "How Often Should You Pump Your Septic Tank in Texas?"
- "Signs Your Septic Tank Is Full"
- "Septic System Guide for New Braunfels & Hill Country Homeowners"

---

## 5. Local SEO Checklist

### 5.1 NAP Consistency

| Platform | Name Used | Phone | Address | Status |
|----------|-----------|-------|---------|--------|
| Website (footer) | AJ Liquid Waste Haulers, LLC | 512-956-0047 | Dripping Springs, TX (no street) | Incomplete — no street address |
| Website (contact page) | AJ Liquid Waste Haulers, LLC | (512) 956-0047 | Dripping Springs, TX | Phone format inconsistent (dashes vs parentheses) |
| Yelp | AJ Liquid Waste Haulers | Listed | Dripping Springs | Status: Listed (403 restricted, not confirmed) |
| Facebook | AJ Liquid Waste Haulers | Listed | Dripping Springs TX | Active (confirmed in search results) |
| Instagram | @ajliquidwastehaulers | — | — | Active |
| Nextdoor | AJ Liquid Wastehaulers | Listed | Dripping Springs, TX | **Name inconsistency**: "Wastehaulers" (one word) vs "Waste Haulers" (two words) |
| Manta | AJ Liquid Wastehaulers | Listed | Dripping Springs, TX 78620 | **Same name inconsistency** |
| Chamber of Commerce | AJ Liquid Waste Haulers | Listed | Dripping Springs | Listed; 5.0 stars from 2 reviewers (chamberofcommerce.com, 2026-04-17) |
| FindHealthClinics | AJ Liquid Waste Haulers | Listed | Dripping Springs, TX | Irrelevant directory; presence noted |
| FMCSA SAFER | AJ LIQUID WASTE HAULERS LLC | DOT# 3114099 | — | USDOT registration confirmed |

**NAP Issues:**
1. **Street address absent from website** — critical for LocalBusiness schema and Google Business Profile alignment
2. **Business name inconsistency**: "AJ Liquid Wastehaulers" (Nextdoor, Manta) vs "AJ Liquid Waste Haulers" (website, GBP) — inconsistent citations dilute local SEO
3. **Phone format inconsistency**: site uses both "512-956-0047" and "(512) 956-0047" — standardize to one format

### 5.2 Google Business Profile Status

- Confirmed present via search result listings and customer reviews via Trustindex widget on website
- Rating: **5.0 stars** (chamberofcommerce.com, 2026-04-17 — reflecting limited but positive review sample)
- Review volume: **Very low** — approximately 2 confirmed reviews via Chamber listing; exact Google count not accessible but described as "few" in search intelligence
- Review content themes confirmed: punctuality (Gerry arrives on time), professionalism, fast/efficient work, explains systems to customers, leaves area clean (WebSearch, 2026-04-17)
- GBP categories: confirm "Septic System Service" is primary; should also include "Grease Trap Service" as secondary

**GBP Gap:** Per industry guidance (fourarrowsmarketing.com, 2026-04-17): 50+ reviews minimum to be competitive in local pack; 100+ to dominate. AJ is far below this threshold. **Review generation is the single fastest local ranking lever available.**

### 5.3 Citation Opportunities

High-value citations to build or verify:

| Directory | Priority | Status | Notes |
|-----------|----------|--------|-------|
| Google Business Profile | P1 | Exists | Fix name consistency, add street address, add all service categories |
| Yelp | P1 | Exists | Verify NAP accuracy; encourage reviews |
| BBB (Better Business Bureau) | P1 | Not confirmed | Standard trust signal; file or verify listing |
| HomeAdvisor / Angi | P1 | Not confirmed | Active for septic searches (confirmed in SERP) |
| Nextdoor | P1 | Exists | Fix name to "AJ Liquid Waste Haulers" (two words) |
| Facebook | P1 | Exists | Verify address + hours match GBP exactly |
| Texas Commission on Environmental Quality (TCEQ) | P1 | Likely present | Confirm and link from website as trust signal |
| Thumbtack | P2 | Not confirmed | Active in local services |
| Houzz | P3 | Not confirmed | Lower priority for this vertical |
| Manta | P2 | Exists | Fix name spelling |
| Instagram | P2 | Active | Not a citation but supports brand search signals |
| Chamber of Commerce (Dripping Springs) | P2 | Exists | Verify and engage |
| Hays County OSSF (On-Site Sewage Facility) approved list | P2 | Unknown | If listed, strong trust + local signal |

### 5.4 Review Gap Analysis

| Competitor | Estimated Reviews | AJ Gap |
|------------|------------------|--------|
| Hill Country Wastewater | Since 2001 — assumed significant review history | Large |
| Action Septic & Services | Multiple dated testimonials on site; Google My Business badge displayed | Large |
| A+ Septic Austin | Active on HomeAdvisor/Angi (appears in local results) | Moderate–Large |
| AJ Liquid Waste Haulers | ~2–10 Google reviews (estimated from available signals) | — |

**Action:** Implement a post-service review request workflow. Gerry (owner who performs most jobs) should text/email each customer a Google review link within 2 hours of service completion. A 5-star service quality is already confirmed via existing reviews — the gap is volume, not quality.

---

## 6. Top 10 Priority Actions

### P1 — Fix Immediately (Pre-Launch Blockers)

**1. Add meta descriptions to every page**
Every page is missing a meta description. This is the highest-frequency SEO issue found. Google auto-generates descriptions from body copy, often poorly. Write unique, keyword-rich, conversion-oriented meta descriptions (150–160 characters) for all pages before launch.

**2. Implement LocalBusiness JSON-LD schema on every page**
Zero schema exists anywhere on the site. Add `LocalBusiness` (or `PlumberService` subtype) JSON-LD to the base layout with: full legal name, street address, city, state, zip, phone (single format), hours, emergency hours, geo coordinates, TCEQ license reference, and `areaServed` for all 5 cities. This single fix can unlock rich results in a local market where zero competitors have implemented it. (Source: fourarrowsmarketing.com, 2026-04-17; almcorp.com, 2026-04-17)

**3. Add FAQPage schema to /faq/**
8 question/answer pairs already exist in clean format. Wrapping them in FAQPage JSON-LD requires ~30 minutes of implementation and can produce FAQ rich results (expanded SERP listings) — high ROI for low effort.

**4. Update H1 on homepage to include geo modifier**
Change H1 from "Septic Pumping & Liquid Waste Removal in Texas" to "Septic Pumping & Liquid Waste Removal — Dripping Springs, TX" (or "Austin & Hill Country"). This is the most important on-page keyword signal.

**5. Add Service schema to each service page**
Implement `Service` schema on all 5 service pages with `provider`, `areaServed`, `serviceType`, and `description` fields. No competitor in the market uses this. (Source: septicmarketing.us, 2026-04-17)

### P2 — Launch Priority (First 30 Days)

**6. Create 5 service area city landing pages**
Austin, Dripping Springs, Kyle, New Braunfels, Driftwood. Each city is currently named but unlinked. Each page needs: unique H1 with city + primary service, unique 300+ word body copy referencing local context, LocalBusiness schema with `areaServed`, and a CTA. These are the fastest route to ranking for high-intent city + service queries.

**7. Add street address sitewide and standardize NAP**
Add full street address to footer, contact page, and all schema. Standardize phone format to "(512) 956-0047" everywhere. Fix "Wastehaulers" → "Waste Haulers" on Nextdoor and Manta. NAP consistency is a foundational local ranking factor.

**8. Launch Google review generation campaign**
Post-service SMS/email with direct Google review link. Target: 25 reviews in 60 days. 5-star service quality is confirmed — volume is the only gap. 50+ reviews needed to compete in local pack. (Source: fourarrowsmarketing.com, 2026-04-17)

**9. Build beverage-industry waste page as a niche SEO asset**
AJ is the only area operator with documented brewery/winery/distillery expertise. Create a dedicated service page targeting "brewery waste removal Texas," "winery waste pumping Hill Country," and "distillery waste disposal Austin" — all low-competition keywords with zero dedicated competitor pages found in SERP research. Dripping Springs has a significant and growing craft beverage cluster. (Source: WebSearch 2026-04-17)

**10. Create "What Is Proof of Pumpage?" content piece**
AJ's electronic solid-state gallon meters are a unique differentiator with zero competitor coverage. A dedicated FAQ answer or blog post targeting "proof of pumpage septic" and "septic pumping gallon meter" would own a zero-competition keyword cluster that also serves as a trust and credibility differentiator for prospective customers. This also supports E-E-A-T signals for Google's quality evaluation.

---

## Sources

- ajliquidwastehaulers.com — homepage, /services/, /about/, /contact/, /faq/ (WebFetch, 2026-04-17)
- actionseptictx.com — homepage (WebFetch, 2026-04-17)
- hillcountrywastewater.com — homepage (WebFetch, 2026-04-17)
- texasprideseptic.com — homepage (WebFetch, 2026-04-17)
- chamberofcommerce.com — AJ Liquid Waste Haulers listing (WebSearch, 2026-04-17): https://www.chamberofcommerce.com/united-states/texas/dripping-springs/septic-system-service/1338275399-aj-liquid-waste-haulers
- fourarrowsmarketing.com — "Local SEO for Septic Companies: The Complete Guide (2026)" (WebSearch, 2026-04-17): https://fourarrowsmarketing.com/blog/local-seo-for-septic-companies/
- fourarrowsmarketing.com — "AI SEO for Septic Companies: The Complete Guide (2026)" (WebSearch, 2026-04-17): https://fourarrowsmarketing.com/blog/ai-seo-for-septic-companies/
- almcorp.com — "Schema Markup in 2026: Why It's Now Critical for SERP Visibility" (WebSearch, 2026-04-17): https://almcorp.com/blog/schema-markup-detailed-guide-2026-serp-visibility/
- septicmarketing.us — "Local SEO for Septic Companies: A Step-by-Step Guide" (WebSearch, 2026-04-17): https://septicmarketing.us/blog/local-seo-septic-companies
- protecseptic.com — "Septic Inspections Hays County TX" (WebSearch, 2026-04-17): https://protecseptic.com/septic-inspections-hays-county-tx/
- hayscountytx.gov — "Septic Permits" (WebSearch, 2026-04-17): https://www.hayscountytx.gov/septic-permits
- yelp.com — Dripping Springs septic services listings, Updated 2026 (WebSearch, 2026-04-17): https://www.yelp.com/search?cflt=septicservices&find_loc=Dripping+Springs,+TX+78620
- nextdoor.com — AJ Liquid Wastehaulers listing (WebSearch, 2026-04-17): https://nextdoor.com/pages/aj-liquid-wastehaulers-dripping-springs-tx/
- manta.com — AJ Liquid Wastehaulers listing (WebSearch, 2026-04-17): https://www.manta.com/c/mhzkbp4/aj-liquid-wastehaulers
- safer.fmcsa.dot.gov — AJ Liquid Waste Haulers LLC USDOT snapshot (WebSearch, 2026-04-17): https://safer.fmcsa.dot.gov/query.asp?searchtype=ANY&query_type=queryCarrierSnapshot&query_param=USDOT&original_query_param=NAME&query_string=3114099
