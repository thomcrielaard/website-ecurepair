# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # next lint (extends next/core-web-vitals)
```

There is no test suite configured in this project.

## Repo layout

This directory (`website-ecurepair`) is one of three sibling projects under a single git repo rooted one level up (`website-ecurepair/` parent folder, remote `thomcrielaard/website-ecurepair`):

- `website-ecurepair/` — this Next.js frontend
- `website-ecurepair-strapi/` — the Strapi CMS backend that this frontend fetches all content from (products, brands, news, searchbar data, vacation banner, etc. — see its `src/api/*` content types)
- `scripts/` — misc standalone scripts (e.g. `chatgpt-prompt.txt`)

Commits made from this working directory affect the shared parent repo, so `git status`/`git log` here will show changes from the sibling folders too.

## Architecture

**Mid-migration from Pages Router to App Router.** Per commit `1ba6fae` ("transferred everything except API and search to app router"), all page routes now live under `app/(default)/*` and `app/(transparent)/*`, but two things intentionally remain on the Pages Router:

- `pages/api/*` — API routes (`contact.js`, `repair.js`), since App Router route handlers weren't adopted for these
- `pages/onderdelen/zoeken/[page].js` — the parts search results page (uses `getServerSideProps`)

Because of this split, `pages/_app.js` still exists solely to export a hardcoded `API_URL` constant (`https://strapi.ecurepair.nl`) that many components under `app/` and `components/` import via `import { API_URL } from "@/pages/_app"` — even though `app/` pages themselves generally read `process.env.NEXT_PUBLIC_API_URL` directly. When touching API base URL logic, check both call sites.

Two route groups under `app/`:
- `(default)` — standard layout with the solid navbar background
- `(transparent)` — used by the homepage (`app/(transparent)/page.js`), renders `<Navbar transparent />`

Both layouts independently import the same global styles/Navbar/Footer/CookieBanner/GoogleAnalytics — they are not composed from a shared root layout.

**Data source**: all product/content data comes from the Strapi backend (`strapi.ecurepair.nl` in production). Fetches typically use Strapi's REST query syntax directly (`filters[...]`, `populate[...]`, `fields[...]`, `pagination[...]`) built up via `URLSearchParams` (see `app/(default)/onderdelen/[number]/page.js`) or plain query strings via `axios` (older Pages Router code, e.g. `pages/onderdelen/zoeken/[page].js`, `components/layout/Navbar.js`).

**Sitemaps**: dynamically generated, not static files.
- `app/sitemap.xml/route.js` — sitemap index, computes how many product sitemap chunks are needed (10,000 products/chunk) by querying Strapi's product count
- `app/sitemaps/products/[id]/route.js` and `app/sitemaps/static.xml/route.js` — the actual sitemap chunks
- `next-sitemap.config.js` also exists (build-time `next-sitemap` postbuild) but was noted as removed from the build in commit `2b7c70b` — check whether it's actually wired into `package.json` before assuming it runs
- `next.config.js` has a rewrite so `/sitemaps/products/:id.xml` resolves to the `[id]` route handler

**Product pages** (`app/(default)/onderdelen/[number]/page.js`) normalize the `onderdeelnummer` route param by double-decoding it (handles double-encoded `%2520` cases from external links) before querying Strapi.

**Styling** is a mix of two systems, not fully migrated to one:
- Tailwind CSS v4 (`@import "tailwindcss"` + `@theme` block in `styles/globals.css`, config lives in CSS, not a `tailwind.config.js`) — newer components (`Container`, `Logo`, cards, `TextLink`) use Tailwind utility classes directly
- SCSS modules under `styles/**/*.module.scss`, one per component, imported as `styles` — most existing components still use this pattern
- `styles/Colors.js` and `styles/Breakpoints.js` are plain JS constants used both in inline styles/logic and mirrored in the Tailwind `@theme` block (e.g. `--color-red` == `Colors.RED`) — keep these in sync if changing brand colors or breakpoints
- Custom fonts (`lato`, `poppins`) are declared via `@font-face` in `globals.css`, not `next/font`, despite `@next/font` being a dependency

**Client vs server components**: components using hooks, `axios` client fetches, or browser APIs are marked `"use client"` (e.g. `Navbar.js`, `ItemCards.js`, `ContactForm.js`). `Navbar.js` has a `// TODO: Fix` comment above its `"use client"` directive — it fetches vacation-banner state client-side via `axios` rather than server-rendering it, which is a known-suboptimal state per that TODO.

**Locale**: `next.config.js` sets `i18n: { locales: ["nl"], defaultLocale: "nl" }` — this is a Dutch-only site (all copy, form labels, and route segments are in Dutch).

**Images**: `next/image` throughout, with `remotePatterns` allowing Strapi's media host, Instagram CDN, and localhost. Missing product images fall back to `/uploads/no_image_available_260ccf02f5.png` served from the Strapi backend.

**Path alias**: `@/*` maps to the project root (`jsconfig.json`), so imports like `@/components/...`, `@/styles/...`, `@/services/...`, `@/pages/_app` all resolve from repo root.
