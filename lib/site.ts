/** GitHub Pages project-site path for https://<owner>.github.io/haloswitch-site/ */
export const PROJECT_PAGES_BASE_PATH = "/haloswitch-site";

/** Host origin. Combined with `siteBasePath` this is the github.io project URL. */
export const siteOrigin =
  process.env.NEXT_PUBLIC_SITE_ORIGIN ??
  "https://jeffdejaegher-oss.github.io";

/** Empty in `next dev`. Production / Pages builds use `/haloswitch-site`. */
export const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Canonical / OG base for the live project Pages URL. */
export const siteCanonicalPath = siteBasePath ? `${siteBasePath}/` : "/";

export function withBasePath(path: string): string {
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("mailto:") ||
    path.startsWith("#") ||
    path.startsWith("data:")
  ) {
    return path;
  }

  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteBasePath}${normalized}`;
}
