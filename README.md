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

The production build is a static export (`output: "export"`) for the custom domain root. `next build` writes `out/` with no `basePath`. `npm run dev` and `npm run preview` both serve at `/`.

Canonical origin is `https://www.haloswitch.com` (`NEXT_PUBLIC_SITE_ORIGIN`). Override `NEXT_PUBLIC_BASE_PATH` only if you need a project-path preview.

**Enable Pages (once):** Settings → Pages → Source: GitHub Actions.

**Expected URL** after Jeff adds the Pages custom domain in Settings:

`https://www.haloswitch.com/`

This repo does not attach the domain or change DNS. Until the custom domain is added, the old github.io project path will not match a root export (asset URLs are `/…`, not `/haloswitch-site/…`). GitHub Pages redirects `*.github.io/<repo>/` to the custom domain after it is attached.

Private Pages visibility needs GitHub Pro or Team; people with repo read access can open it.

Agents must not merge to `main`. Pull requests only upload a `pages-preview` artifact — they do not publish the live site.
