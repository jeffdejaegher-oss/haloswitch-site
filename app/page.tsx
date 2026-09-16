import { Hero } from "@/components/hero";
import {
  AudienceSection,
  FinalCta,
  OfferSection,
  ScopeSection,
  TracksSection,
} from "@/components/sections";
import { SiteBar } from "@/components/site-bar";
import { siteCopy } from "@/lib/copy";

export default function Home() {
  return (
    <>
      <SiteBar />
      <main>
        <Hero />
        <OfferSection />
        <TracksSection />
        <ScopeSection />
        <AudienceSection />
        <FinalCta />
      </main>
      <footer className="border-t border-white/5">
        <div className="mx-auto flex max-w-[90rem] flex-col gap-3 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
          <p className="text-[13px] tracking-[0.22em] text-mist uppercase">
            {siteCopy.brand}
          </p>
          <p className="text-sm text-mist">{siteCopy.cta.microcopy}</p>
        </div>
      </footer>
    </>
  );
}
