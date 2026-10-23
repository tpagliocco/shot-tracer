# CPO / CDO portfolio

Personal portfolio for a Chief Product Officer / Chief Digital Officer. Next.js (App Router), TypeScript, Tailwind CSS, static export.

> **All content is sample content.** Names, employers, figures, quotes and links in `src/data` are fictional placeholders. Replace them before publishing. Do not publish a quote or a metric you cannot stand behind.

## Goal

A recruiter, client or peer should understand who you are, see proof of your work and be able to contact you in under 60 seconds.

User flow: Home, scan proof, open a project, read a case study, check Recruiter view, contact. Every page ends with a next step.

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run check      # typecheck + lint + production build
npm run build      # static site written to ./out
npm start          # serve ./out locally on :3000
```

Requires Node 18.18 or newer.

## Pages

| Route | Job |
| --- | --- |
| `/` | Hero, proof strip (logos and counting stats), 3 featured projects, skills graph showpiece, about teaser, contact CTA |
| `/projects/` | Filterable grid (type, status) |
| `/projects/[slug]/` | Problem, my role, approach, decisions, result, links |
| `/case-studies/` and `/case-studies/[slug]/` | Deep dives, each with a step to step flow strip |
| `/career/` | Timeline |
| `/career/recruiter-view/` | One page: summary, experience, credentials, skills, CV download, print layout |
| `/about/` | Story, values, how I work |
| `/contact/` | Email (with copy button), LinkedIn, GitHub, downloadable contact card |
| `/now/`, `/recommendations/` | Optional pages |

Global: sticky header with a highlighted Recruiter view button, footer with the same links, skip to content link, theme toggle.

## Editing content (no component changes needed)

Everything a visitor reads lives in `src/data`.

| File | What it controls |
| --- | --- |
| `site.ts` | Name, title, email, phone, LinkedIn, GitHub, nav, footer links, site URL |
| `home.ts` | Hero copy, logos, stats, about teaser, showpiece heading |
| `projects.ts` | Projects. Add an object and a page and card appear. `featured: true` puts it on Home (first 3) |
| `caseStudies.ts` | Case studies and their `flow` steps |
| `career.ts` | Summary, roles, credentials, skill groups (timeline and recruiter view) |
| `skills.ts` | Domains and skills in the interactive graph, linked to project slugs |
| `about.ts`, `now.ts`, `recommendations.ts` | Those pages |
| `nextSteps.ts` | The closing call to action on each page |
| `types.ts` | Shapes of the data. TypeScript will flag a missing field |

Project types and statuses used by the filters are read from the data, so a new type shows up as a new filter chip automatically (add it to the `ProjectType` union in `types.ts` first).

### CV and contact card

- **Contact card**: `/contact-card.vcf` is generated at build time from `site.ts` and the latest role in `career.ts`. Nothing to maintain.
- **CV PDF**: `public/cv.pdf` is printed from the Recruiter view page, so it always matches the site. After editing content run:

  ```bash
  npm run build && npm run cv
  npm run build   # rebuild so the new PDF is copied into ./out
  ```

  `npm run cv` needs a Chromium (it uses `playwright-core`; set `CHROMIUM_PATH` if it is not auto-detected). Alternatively replace `public/cv.pdf` with your own file.
- **Favicon**: `src/app/icon.svg` holds the initials. Edit it.

## Design system

- **Dark first**, light toggle in the header. The choice is saved in `localStorage` (`theme`). With no saved choice the site follows the system setting. A tiny inline script sets the theme before first paint, so there is no flash.
- **Palette** (tokens in `src/app/globals.css`, exposed to Tailwind in `tailwind.config.ts`): background `#070E1C`, slightly lighter navy surfaces, off white text, muted blue grey secondary text, one teal accent for links, active states and badges. The light theme uses a darker teal so contrast still passes.
- **Shape**: 16 to 20px card radius, hairline borders at 8% white, soft shadows only.
- **Type**: system sans serif stack (no font download, faster and nothing to license).

## Interaction and motion

| Effect | Where | Notes |
| --- | --- | --- |
| Spotlight card | `SpotlightCard.tsx`, `.spot` in `globals.css` | Pointer position drives `--x` and `--y`. A radial mask lights the border and a glow, and a veil dims content outside the spotlight. On touch, a tap lights the card for about 2 seconds |
| Lift and arrow nudge | `.spot`, `.arrow` | 2px lift on hover or focus, arrows move 4px right |
| Scroll reveal | `Reveal.tsx` | Fade up 20px, staggered with `delay`, triggers once |
| Stat counters | `Counter.tsx` | Counts up when visible. Screen readers get the final value immediately |
| Showpiece | `SkillsGraph.tsx` | Interactive skills graph. Select a domain by click, tap, hover or keyboard to see skills and related projects |

`prefers-reduced-motion: reduce` switches all of the above off: no reveal, no counting, no lift, no spotlight, no arrow nudge, no dashed line animation. Content is shown in its final state.

## Accessibility

Skip to content link, one `h1` per page with no skipped heading levels, visible focus rings, 44px touch targets on buttons and chips, cards are one tab stop (stretched link), filter chips use `aria-pressed`, result count is announced politely, graph nodes are focusable buttons with the same content repeated as text, `aria-current` on active navigation.

## Quality results

Measured on the production export (`out/`) with Lighthouse 12 and axe-core 4 in headless Chromium:

| Check | Result |
| --- | --- |
| Lighthouse accessibility (6 page types, mobile and desktop) | 100 on all 12 runs (target 95) |
| Lighthouse performance, mobile (simulated slow 4G, 4x CPU) | 99 to 100 (target 90) |
| Lighthouse performance, desktop | 100 |
| Lighthouse best practices and SEO | 100 |
| Cumulative layout shift | 0 |
| axe-core WCAG 2.1 A and AA and best practice, dark and light, 12 pages | 0 violations |
| Horizontal overflow at 360, 768, 1440 px, 12 pages | None |
| Shared JavaScript on first load | about 103 kB |

Lighthouse ran with a light system preference, axe ran in both themes. Numbers will change if you add heavy content such as large images, so re-run before launch.

To re-run Lighthouse yourself: `npm run build && npm start`, then `npx lighthouse http://localhost:3000 --view`.

## Deploying

The site is a plain static folder (`out/`), so any static host works: Azure Static Web Apps, Netlify, Vercel, Cloudflare Pages, S3 and CloudFront, GitHub Pages.

- Set `NEXT_PUBLIC_SITE_URL` to the final URL (used for the sitemap, robots.txt, canonical metadata and structured data).
- Hosting under a sub-path (for example GitHub Pages project sites)? Set `NEXT_PUBLIC_BASE_PATH=/your-repo` at build time. Links, assets and downloads respect it.
- `trailingSlash` is on, so every route is a folder with an `index.html`, which works on hosts that do not rewrite URLs.
- Security headers (CSP, HSTS) are set at the host, not in code. The theme script is inline; if you enforce a strict CSP, allow it with a hash or nonce.
- No cookies, no analytics, no third-party requests, no forms. If you add analytics or a contact form, update your privacy notice.

## Project structure

```
src/
  app/            routes, layout, global styles, sitemap, robots, contact-card.vcf route
  components/     UI building blocks (Header, SpotlightCard, Reveal, Counter, SkillsGraph ...)
  data/           all content and its types
  lib/utils.ts    base path helper
scripts/build-cv.mjs   prints the recruiter view to public/cv.pdf
public/cv.pdf          generated CV
```

## Known limits

- Content is placeholder. Logos are text wordmarks; swap in SVGs if you hold the rights.
- The project filter state is not in the URL, so a filtered view cannot be shared as a link.
- There is no contact form by design (static export, no data collection). Email, LinkedIn and the contact card are the channels.
