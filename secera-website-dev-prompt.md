# SECERA Website — Frontend Development Prompt

Copy everything below into your AI coding tool (Claude Code, Cursor, v0, etc.) or hand it to a developer as a creative/technical brief.

---

## ROLE

Act as an expert frontend developer and UI/UX designer. Build a premium, high-trust corporate website for **SECERA**, a cybersecurity services company specializing in VAPT, application security, cloud security, compliance, and risk assessment.

---

## BRAND FOUNDATION

**Logo:** Use the uploaded SECERA wordmark exactly as provided — do not redraw, recolor, or distort it. It reads "SEC" in dark navy on a light background block, and "ERA" in white/light-blue on a solid dark-navy block, giving a two-tone "shield split" effect. Use this logo:
- Full color version on light/white backgrounds (header default state).
- Provide a white-only / knockout version for use on dark-navy sections and the footer (recreate as an SVG monochrome variant if needed).
- Maintain clear space around the logo equal to the height of the "S". Never place it on busy imagery without a solid or gradient scrim behind it.

**Strict color palette (only these three, no exceptions):**
| Role | Color | Suggested Hex |
|---|---|---|
| Dark Blue (primary/dominant) | Navy | `#0A0A6E` – `#050540` range (match logo navy) |
| Light Blue (accent/CTA highlight) | Sky/Electric Blue | `#4FA8FF` – `#6FC3FF` range |
| White (base/contrast/negative space) | Pure/off-white | `#FFFFFF` / `#F5F6F8` |

Rules:
- No black, no gray tints, no gradients outside the navy→light-blue family, no secondary brand colors — ever.
- Dark navy = dominant background for hero, mega-menu, footer, and section dividers (mirrors ultraviolette.com's confident dark canvas).
- Light blue = reserved for interactive states, links, icons, stat highlights, hover glows, and primary CTA accents — never used as a large background flood.
- White = body copy on dark sections, base background on light sections, and card surfaces.
- Maintain strong contrast (WCAG AA minimum) for all text/background pairings.

---

## UI/UX DIRECTION — Reference: ultraviolette.com

Study and adapt (**not copy verbatim, and do not change the color combination specified above**) the following interaction and layout patterns from ultraviolette.com, reinterpreted for a B2B cybersecurity brand:

1. **Full-bleed, cinematic hero** — large bold headline (2–3 lines, tight leading, heavy weight), a short supporting line, one primary CTA ("Request Security Assessment") and one secondary CTA. Subtle animated background: slow-moving grid/circuit-line pattern or particle mesh in navy/light-blue instead of a motorcycle/product shot.
2. **Mega navigation menu** — on hover/click of "SERVICES", open a full-width dark-navy panel showing the six service pillars as columns with their sub-items listed underneath, plus a small icon per pillar. Smooth fade/slide-down transition (~250–350ms ease-out). "INDUSTRIES" and "RESOURCES" get similar (simpler) dropdown panels.
3. **Stat/metric callout blocks** — large numeric statistics in light-blue on navy (e.g., "500+ Assessments Delivered", "150+ Critical Vulnerabilities Found Monthly", "24/7 Threat Monitoring") styled like Ultraviolette's "323 KMS / 100000 KM" spec blocks.
4. **Alternating light/dark sections** — sections alternate between white and navy backgrounds as the user scrolls, each with generous vertical padding (120–160px desktop) for a premium, unhurried pace.
5. **Horizontal scroll / carousel modules** — for case studies, industries served, and testimonials, similar to Ultraviolette's global-expansion and vehicle carousels, with left/right arrow controls and a subtle drag-to-scroll on desktop.
6. **Scroll-triggered reveal animations** — fade-up + slight scale-in on section entry (IntersectionObserver-based), sticky/pinned sections for the "Our Methodology" step-through, and a subtle parallax on hero background elements.
7. **Bold, condensed, uppercase display typography** for headlines (mirroring Ultraviolette's aggressive type scale), paired with a clean, highly legible sans-serif for body copy.
8. **Confident, minimal footer** with 4–5 link columns (Services, Industries, Resources, Company, Legal), large closing tagline, social icons, and contact line — dark navy background, white/light-blue text.
9. **Micro-interactions**: light-blue underline/glow on link hover, button fill-swap on hover (outline → filled), animated cursor-following glow on hero CTA (optional, desktop only).

---

## SITE ARCHITECTURE (Silo Structure)

Implement this exact information architecture with clean, SEO-friendly URLs (e.g., `/services/vapt-penetration-testing/web-application-penetration-testing`):

```
HOME  (/)

SERVICES  (/services)
├── VAPT & Penetration Testing  (/services/vapt-penetration-testing)
│   ├── Web Application Penetration Testing
│   ├── Network Penetration Testing
│   ├── External Penetration Testing
│   └── Internal Penetration Testing
├── Application & Product Security  (/services/application-product-security)
│   ├── Application Security Testing
│   ├── API Security Testing
│   ├── Mobile Application Security Testing
│   ├── Secure Code Review
│   └── Product Security Assessment
├── Cloud & Infrastructure Security  (/services/cloud-infrastructure-security)
│   ├── Cloud Security Assessment
│   ├── Infrastructure Security Assessment
│   ├── Security Configuration Review
│   └── Security Hardening
├── Cybersecurity Compliance  (/services/cybersecurity-compliance)
│   ├── PCI DSS Compliance
│   ├── ISO 27001
│   └── SOC 2
├── Cyber Risk Assessment  (/services/cyber-risk-assessment)
│   ├── Cybersecurity Risk Assessment
│   ├── Third-Party Risk Assessment
│   ├── Security Architecture Review
│   └── Vulnerability Management
├── DevSecOps Security  (/services/devsecops-security)
└── Data Protection  (/services/data-protection)

INDUSTRIES  (/industries)
├── Fintech Cybersecurity
├── Payment Security
├── SaaS Cybersecurity
├── Ecommerce Cybersecurity
├── Startup Cybersecurity
├── Product Company Security
└── Enterprise Cybersecurity

RESOURCES  (/resources)
├── Blog  (/resources/blog)
│   ├── VAPT & Penetration Testing
│   ├── Application, API & Product Security
│   ├── Cloud & Infrastructure Security
│   ├── Compliance & Regulations
│   ├── Cyber Risk Management
│   ├── Industry Cybersecurity
│   ├── Vulnerability Research
│   └── DevSecOps & Secure Development
├── Security Guides
├── Case Studies
├── Security Insights
├── Security Checklists
├── Reports & Research
└── Webinars / Events

COMPANY  (/company)
├── About SECERA
├── Our Methodology
├── Our Expertise
├── Security Standards
├── Partners / Certifications
└── Careers

CONTACT  (/contact)

REQUEST SECURITY ASSESSMENT  (/request-assessment)  — treated as the site-wide primary CTA/conversion page, linked from every header and most section CTAs.
```

Each silo pillar page must:
- Interlink downward to its own child pages only (true silo — minimize cross-linking between unrelated silos except via a generic "Related Services" module).
- Include a breadcrumb trail (Home > Services > VAPT & Penetration Testing > Web Application Penetration Testing).
- Follow one consistent page template per level (Pillar template, Sub-service template, Blog category template, Blog post template).

---

## PAGE-LEVEL REQUIREMENTS

### Homepage
1. Sticky header: logo left, nav center/right, "Request Security Assessment" light-blue filled button far right.
2. Hero with headline, subtext, dual CTAs, animated navy/light-blue background motif.
3. Trust bar — logos or stat strip ("X assessments delivered", "X industries served", "X years experience").
4. Services overview — 6–7 cards (one per SERVICES pillar) with icon, title, 1-line description, arrow-link.
5. "Our Methodology" preview — numbered step section (Recon → Assess → Exploit → Report → Remediate → Re-test), sticky-scroll or horizontal stepper.
6. Industries served — horizontal scroll carousel of industry cards.
7. Case studies / testimonials carousel.
8. Resources teaser — 3 latest blog posts.
9. Final CTA banner (full-width navy, light-blue accent button) — "Request a Security Assessment."
10. Footer per spec above.

### Services Pillar Page
Hero → intro copy → sub-service grid (cards linking to each sub-service page) → methodology snapshot → related case study → CTA banner.

### Sub-Service Page
Hero → what-it-is → who-it's-for → our process (numbered) → deliverables list → FAQ accordion → CTA.

### Industry Page
Hero (industry-specific risk framing) → relevant services (auto-pulled from Services silo) → compliance relevant to that industry → case study → CTA.

### Blog / Resources
Category grid → filterable post list → post template (author, read time, table of contents sidebar, share icons) → related posts.

### Company Pages
About: mission, story, leadership. Methodology: visual step-through. Expertise: certifications (CEH, OSCP, CISSP, etc. — placeholder badges). Standards: framework logos (OWASP, NIST, ISO). Careers: open roles list + culture section.

### Contact / Request Assessment
Split layout: left = form (Name, Company, Email, Phone, Service Interested In, Message), right = trust content (response time, confidentiality note, direct contact info). Form fields styled with light-blue focus states on white cards over navy background, or vice versa.

---

## COMPONENT LIBRARY TO BUILD

- Sticky header + mega-menu (as described)
- Mobile nav (full-screen navy overlay, accordion for silo children)
- Primary button (filled light-blue, navy text) / Secondary button (outline white/light-blue)
- Section header module (eyebrow label + headline + optional subtext)
- Service/Industry card (icon, title, description, hover lift + light-blue border glow)
- Stat block component
- Stepper/timeline component (methodology)
- Carousel component (industries, testimonials, case studies)
- Accordion (FAQ)
- Blog card + blog post layout with sidebar
- CTA banner (full-bleed, navy bg, centered content)
- Footer (multi-column)
- Breadcrumb component

---

## TECHNICAL SPECIFICATION

- **Stack:** React (Next.js recommended for routing/SEO) + Tailwind CSS, or plain HTML/CSS/JS if the tool requires a single-file build — use CSS custom properties for the three brand colors so theming stays centralized.
- **Typography:** One condensed/bold display font for headings (e.g., a geometric sans like "Space Grotesk", "Archivo", or "Inter Tight"), one clean body font (e.g., "Inter" or "Manrope"). Load via system-safe fallback if no internet fonts available.
- **Animations:** CSS transitions + IntersectionObserver for scroll reveals; keep all motion under 400ms, ease-out; respect `prefers-reduced-motion`.
- **Responsiveness:** Mobile-first, breakpoints at 480 / 768 / 1024 / 1440. Mega-menu collapses to accordion on mobile.
- **Accessibility:** Semantic HTML, ARIA labels on nav/menu/accordion, visible focus states in light-blue, alt text on all imagery, minimum AA contrast.
- **Performance:** Lazy-load below-fold images/carousels, optimize SVG logo, avoid layout shift on font load.
- **SEO:** Unique title/meta description per silo page, breadcrumb schema, Organization + Service schema markup, clean semantic heading hierarchy (one H1 per page).

---

## DELIVERABLE

Produce a fully responsive, production-ready multi-page (or route-based single-page-app) website implementing the above — homepage plus at least one fully built example of each template type (Services pillar, Sub-service, Industry, Blog listing + post, Company page, Contact/Request Assessment) — using **only** the SECERA logo and the dark-navy / light-blue / white palette, with UI/UX rhythm inspired by ultraviolette.com's bold typography, alternating dark/light sections, mega-menu, stat callouts, and scroll-driven motion — reinterpreted for a professional cybersecurity audience (no automotive imagery, no color deviation).
