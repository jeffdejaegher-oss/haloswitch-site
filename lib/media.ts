import { withBasePath } from "@/lib/site";

export const media = {
  heroDesktop: withBasePath("/media/haloswitch-hero-desktop-space-1920x1080.jpg"),
  heroMobile: withBasePath("/media/haloswitch-hero-mobile-space-1080x1350.jpg"),
  heroLoop: withBasePath("/media/haloswitch-loop-switch-on-16x9.mp4"),
  og: withBasePath("/media/haloswitch-og-space-1200x630.jpg"),
  favicon: withBasePath("/media/favicon.svg"),
} as const;
