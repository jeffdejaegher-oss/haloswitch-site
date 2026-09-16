/** Canonical public origin. Override with NEXT_PUBLIC_SITE_ORIGIN if needed. */
export const siteOrigin =
  process.env.NEXT_PUBLIC_SITE_ORIGIN ?? "https://www.haloswitch.com";

/** Empty at domain root. Override with NEXT_PUBLIC_BASE_PATH only for a project-path preview. */
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
