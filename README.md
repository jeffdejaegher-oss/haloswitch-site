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

There is no custom workflow under `.github/workflows`. The previous
`Deploy GitHub Pages` workflow published a Next.js static export; it was
removed after an empty artifact replaced the marketing home. GitHub’s
built-in `pages-build-deployment` may still exist until Pages is
unpublished. It cannot be disabled without admin.

Do not delete or archive this repository unless Pages-off still fails.
