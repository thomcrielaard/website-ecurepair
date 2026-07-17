# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev      # Start dev server (http://localhost:3000)
yarn build    # Production build
yarn start    # Serve production build
yarn lint     # next lint (extends next/core-web-vitals)
```

**Yarn is the package manager** — use `yarn add`/`yarn remove`, not npm. (A stale `package-lock.json` may still exist from earlier npm use; `yarn.lock` is authoritative.)

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

**Styling** is Tailwind CSS v4 only — the SCSS-module system has been fully removed (no `sass` dependency, no `.module.scss` files). Config lives in the `@theme` block in `styles/globals.css` (`@import "tailwindcss"`), not a `tailwind.config.js`. Conventions to follow:

- **Classes inline in JSX** — do not extract className strings into variables. The only accepted exceptions are prop-driven variant tables (e.g. the `SIZES` map in `components/text/Title.js`) and runtime `twMerge` compositions inside shared components.
- **Colors via classes, never via props or inline styles.** Shared components (`Button`, `Title`, `Text`, `TextLink`) set their own defaults (e.g. `text-gray`) and merge caller classes with `tailwind-merge` (`twMerge`), so a caller's `text-white`/`bg-red` cleanly overrides the default — no `!important` needed. `Title`/`Text`/`TextLink` deliberately have **no** `color` prop anymore. Inline `style` is reserved for genuinely runtime-computed values (e.g. the measured `maxHeight` in `ExpandableCards`, the width indicators in `Searchbar`) and for component-API props that aren't CSS (Hamburger's and react-loader-spinner's `color`/`backgroundColor`).
- **Custom theme tokens**: `text-red`, `bg-gray`, `text-darkgray`, `text-lightgray` (see `@theme`), plus `--breakpoint-xxs: 576px`. `styles/Colors.js` documents the hex→utility mapping in comments (LIGHTWHITE≈`gray-200`, MEDIUMWHITE≈`gray-400`); keep it in sync with `@theme`. `Colors.js` is now only used for non-CSS component props; `styles/Breakpoints.js` only for `next/image` `sizes` strings and `UseDimensions` comparisons.
- **Breakpoint mapping** used throughout the migration (old SCSS max-width mixins → Tailwind min-width variants): 576→`xxs:`, 768→`md:`, 992→`lg:`, 1200→`xl:`, 1400→`2xl:`. The 992/1200/1400 mappings are approximations (1024/1280/1536).
- **Fonts**: custom `lato`/`poppins` via `@font-face` in `globals.css` (not `next/font`); reference them with the labeled arbitrary syntax `font-[family-name:lato]` — a bare `font-[lato]` gets misclassified as a font-*weight* by `tailwind-merge` and silently dropped.
- **Icons**: use `react-icons` (mostly `fa6`) instead of custom SVGs; they render `fill="currentColor"`, so color them with `text-*` classes or let them inherit. Remaining custom SVGs: `Logo` (brand mark), `Clear` (CookieBanner), plus several unused dead files in `assets/svg/`.
- **Markdown-rendered content** (react-markdown output) can't receive Tailwind classes, so its typography lives as plain-CSS global classes in `globals.css`: `.content` (product descriptions) and `.news-content` (news articles).
- **Cascade-layer gotcha**: unlayered global CSS beats Tailwind utilities regardless of specificity. Global element resets belong in `@layer base` (see the `a { color: inherit }` rule in `globals.css`); `pagination.css` (ReactPaginate styling, targets its default `selected` class) is intentionally unlayered.

**Client vs server components**: components using hooks, `axios` client fetches, or browser APIs are marked `"use client"` (e.g. `Navbar.js`, `ItemCards.js`, `ContactForm.js`). `Navbar.js` has a `// TODO: Fix` comment above its `"use client"` directive — it fetches vacation-banner state client-side via `axios` rather than server-rendering it, which is a known-suboptimal state per that TODO.

**Locale**: `next.config.js` sets `i18n: { locales: ["nl"], defaultLocale: "nl" }` — this is a Dutch-only site (all copy, form labels, and route segments are in Dutch).

**Images**: `next/image` throughout, with `remotePatterns` allowing Strapi's media host, Instagram CDN, and localhost. Missing product images fall back to `/uploads/no_image_available_260ccf02f5.png` served from the Strapi backend.

**Path alias**: `@/*` maps to the project root (`jsconfig.json`), so imports like `@/components/...`, `@/styles/...`, `@/services/...`, `@/pages/_app` all resolve from repo root.
