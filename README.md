# haloswitch-site (unpublished)

This public repository used to serve the old Halo Switch marketing site at
`https://jeffdejaegher-oss.github.io/haloswitch-site/`.

Metis2 replaced that site. Marketing HTML, Next.js export source, and assets
were removed so GitHub Pages no longer publishes that copy.

## GitHub Pages setting (needs a repo admin)

The Pages REST API (`DELETE /repos/jeffdejaegher-oss/haloswitch-site/pages`)
returns **403 Resource not accessible by integration** for the Cursor GitHub
App token. Same for `PUT` Pages settings and disabling Actions workflows.

A repo **admin** should finish the takedown:

1. Open https://github.com/jeffdejaegher-oss/haloswitch-site/settings/pages
2. Turn GitHub Pages **off** (Unpublish / Remove site)
3. Do not re-enable Pages for this repo

This repo previously published via a custom Actions workflow
(`.github/workflows/deploy-pages.yml`) that built a Next.js static export.
That workflow and the marketing source were removed. A one-shot empty Pages
deploy replaces the last marketing artifact so the live URL does not keep
serving the old home until Unpublish takes effect.

Do not delete or archive this repository unless Pages-off still fails.
