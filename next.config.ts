import type { NextConfig } from "next";
import { PROJECT_PAGES_BASE_PATH } from "./lib/site";

function normalizeBasePath(value: string): string {
  if (!value || value === "/") {
    return "";
  }

  return value.endsWith("/") ? value.slice(0, -1) : value;
}

function resolveBasePath(): string {
  if (process.env.NEXT_PUBLIC_BASE_PATH !== undefined) {
    return normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH);
  }

  // `next dev` stays at `/`. Production builds match the GitHub Pages project URL.
  if (process.env.NODE_ENV === "development") {
    return "";
  }

  return PROJECT_PAGES_BASE_PATH;
}

const basePath = resolveBasePath();
process.env.NEXT_PUBLIC_BASE_PATH = basePath;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(basePath
    ? {
        basePath,
        assetPrefix: basePath,
      }
    : {}),
};

export default nextConfig;
