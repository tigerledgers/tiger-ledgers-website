
# Tigerhedgers — Single-Page Financial Services Site

A polished, SEO-friendly single-page site for **Tigerhedgers**, built on the project's TanStack Start + Vite stack (adapted from the Next.js spec — same structure, same content, same validation, just TanStack file conventions).

## Brand & Design
- **Logo:** Uploaded Tiger Ledgers mark, used as the brand mark next to the wordmark "Tigerhedgers".
- **Palette:** Deep navy `#0A1628` primary, gold/amber `#C9932A` accent, warm off-white background, white surfaces — financial authority, not fintech-bright.
- **Type:** Playfair Display for headings (elegant, editorial), DM Sans for body — loaded via Google Fonts in the root.
- **Motion:** Subtle fade/slide-up on scroll for sections, smooth-scroll anchor navigation, gentle hover lifts on cards.
- **Layout:** Mobile-first, fully responsive, generous whitespace, rounded-xl cards, soft shadows.

## Page Structure (one route, smooth-scroll sections)
Single home page composing these sections in order, each with an anchor `id`:

1. **Header** — Sticky translucent navbar, logo + "Tigerhedgers" wordmark, nav links (Services, Focus Areas, Partnerships, About, Contact), gold CTA "Schedule a Consultation". Mobile hamburger using shadcn Sheet.
2. **Hero** `#hero` — Auto-rotating banner (3 curated finance Unsplash photos: handshake, charts, advisor + client), 5s interval, fade transition. Each slide has headline, one-line subtext, and gold CTA.
3. **Services** `#services` — "Our Services" heading + 5 cards in a responsive grid with Lucide icons:
   - Accounting (BookOpen)
   - Payroll & Expenses (Wallet)
   - Tax Filing (FileText)
   - Accounting Software Implementation (Settings2)
   - Fractional CFO (Briefcase)
4. **Focus Areas** `#focus-areas` — "Who We Serve", 4 horizontal icon-left cards: Small Business, eCommerce, Freelancers & Contractors, SaaS & Software Startups.
5. **Partnerships** `#partnerships` — "Partnership Services", 3 cards: CPA Outsourcing, Data Migration & Software Implementation, AI Enablement.
6. **About Us** `#about` — "About Us" with 2 founder cards (Girish Bendodker, Prashant), short bio placeholder, LinkedIn icon button (link `#` until provided).
7. **Contact** `#contact` — Two-column: left has address/email/US + IN phone with country prefixes; right has validated form (Name, Email, Phone optional, Service of Interest select, Message) using react-hook-form + Zod. On submit shows a success toast (no backend yet — wired to a no-op handler ready for an endpoint).
8. **Footer** — Wordmark, repeat nav links, copyright "© 2025 Tigerhedgers. All rights reserved."

## Code Architecture
- `src/routes/index.tsx` — composes all sections (replaces placeholder).
- `src/routes/__root.tsx` — adds Google Fonts links, brand meta tags (title, description, og), Toaster.
- `src/components/layout/` — `Header.tsx`, `Footer.tsx`.
- `src/components/sections/` — one file per section (HeroSection, ServicesSection, FocusAreasSection, PartnershipsSection, AboutUsSection, ContactSection).
- `src/components/common/` — `SectionWrapper.tsx` (consistent padding + scroll-reveal), `CTAButton.tsx`, `NavLink.tsx`.
- `src/constants/siteData.ts` — **all** copy, nav items, services, focus areas, partnerships, team, contact details. No hardcoded strings in JSX.
- `src/lib/validations/contactSchema.ts` — Zod schema exactly as spec'd.
- `src/types/index.ts` — shared TS interfaces (Service, FocusArea, TeamMember, NavLink, etc.).
- `src/styles.css` — extend theme tokens with navy/gold semantic colors and font families (no hardcoded colors in components).
- Tiger Ledgers logo copied to `src/assets/logo.jpg` and imported as an ES module.

## Dependencies to add
- `react-hook-form`, `@hookform/resolvers`, `zod` (for the contact form).
- `framer-motion` (lightweight scroll-reveal + hero crossfade).

## Notes on the original spec
- **Stack:** Project is TanStack Start + Vite, not Next.js — folder layout maps cleanly (`src/routes` for `app/`, `src/components` unchanged). Functionality, content, and validation are identical.
- **Husky / commitlint / lint-staged:** Skipped — git hooks aren't installable in this environment. Happy to add the config files if you want them committed for local use later.
- **Brand name vs logo:** Using "Tigerhedgers" wordmark as specified, paired with the Tiger Ledgers logo mark you uploaded.
