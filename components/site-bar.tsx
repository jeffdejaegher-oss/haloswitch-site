import { CtaLink } from "@/components/cta-link";
import { Mark } from "@/components/mark";
import { siteCopy } from "@/lib/copy";

export function SiteBar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="flex h-16 items-center justify-between px-6 md:h-20 md:px-10">
        <a href="#top" className="flex items-center gap-3 text-signal">
          <Mark className="h-7 w-7 shrink-0 text-signal" />
          <span className="whitespace-nowrap text-[12px] tracking-[0.16em] uppercase md:text-[13px] md:tracking-[0.22em]">
            {siteCopy.brand}
          </span>
        </a>
        <div className="hidden md:block">
          <CtaLink cta={siteCopy.hero.primary} tone="primary" />
        </div>
      </div>
    </header>
  );
}
