# Halo Switch

Single-page marketing site for Halo Switch. Next.js App Router and Tailwind.

Copy lives in `lib/copy.ts`. Media lives in `public/media`.

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## GitHub Pages

The production build is a static export (`output: "export"`) for a github.io project site. `next build` writes `out/` with `basePath` and `assetPrefix` `/haloswitch-site`. `npm run dev` stays at `/`. `npm run preview` serves the export at `/haloswitch-site/`.

Canonical origin is `https://jeffdejaegher-oss.github.io` (`NEXT_PUBLIC_SITE_ORIGIN`) plus `NEXT_PUBLIC_BASE_PATH` `/haloswitch-site` — the live URL is `https://jeffdejaegher-oss.github.io/haloswitch-site/`. This repo does not assume `www.haloswitch.com`.

**Enable Pages (once):** Settings → Pages → Source: GitHub Actions.

**Expected URL** after the site is public-to-collaborators:

`https://jeffdejaegher-oss.github.io/haloswitch-site/`

Private Pages visibility needs GitHub Pro or Team; people with repo read access can open it. No custom domain. No DNS.

Agents must not merge to `main`. Pull requests only upload a `pages-preview` artifact — they do not publish the live site.
