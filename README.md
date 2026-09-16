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

The production build is a static export (`output: "export"`) for a github.io project site. `next build` writes `out/` with `basePath` `/haloswitch-site`. `npm run dev` stays at `/`. `npm run preview` serves the export at `/haloswitch-site/`.

**Enable Pages (once):** Settings → Pages → Source: GitHub Actions.

**Expected URL** after the site is public-to-collaborators:

`https://jeffdejaegher-oss.github.io/haloswitch-site/`

Private Pages visibility needs GitHub Pro or Team; people with repo read access can open it. No custom domain.

**Merge order**

1. Merge PR #1 (landing) to `main`
2. Retarget and merge PR #2 (space-frame media)
3. Retarget and merge the Pages workflow PR
4. The next push to `main` deploys Pages

Agents must not merge to `main`. Pull requests only upload a `pages-preview` artifact — they do not publish the live site.
