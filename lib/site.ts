/** GitHub Pages project-site path for https://<owner>.github.io/haloswitch-site/ */
export const PROJECT_PAGES_BASE_PATH = "/haloswitch-site";

export const siteOrigin =
  process.env.NEXT_PUBLIC_SITE_ORIGIN ??
  "https://jeffdejaegher-oss.github.io";

export const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

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
