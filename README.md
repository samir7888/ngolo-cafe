# Ngolo's Cafe & Bistro

Next.js 16 (App Router) + Tailwind CSS v4 + shadcn/ui-style components + Framer Motion.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## What the owner must confirm

Search the project for `TODO(owner)`. Everything lives in three files:

| File | What to edit |
| --- | --- |
| `src/lib/site.ts` | Phone number (still a placeholder), opening hours, exact map pin, domain. Facebook and TikTok links are real. |
| `src/lib/menu.ts` | Menu and prices, carried over from the earlier draft. Verify with the owner. |
| `src/lib/images.ts` | Photo paths. Copy the earlier draft's `img/` folder into `public/img/` (same file names). |

Set the real domain with an env var: `NEXT_PUBLIC_SITE_URL=https://example.com.np`

## Deploy

Push to GitHub and import into Vercel (free), or `npm run build` and host the output anywhere that runs Node.

## SEO included

Metadata and Open Graph, generated OG image, `sitemap.xml`, `robots.txt`, JSON-LD (`CafeOrCoffeeShop` with address, hours and geo, plus a `Menu` schema), semantic HTML, one `h1`, alt text on all images.
After launch: claim the Google Business Profile and link it to this site.

## Adding more shadcn components

`components.json` is included, so `npx shadcn@latest add <component>` works.
