import type { ReactNode } from "react";
import { CtaLink } from "@/components/cta-link";
import { siteCopy } from "@/lib/copy";

function SectionShell({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-white/5">
      <div className="mx-auto max-w-[90rem] px-6 py-24 md:px-10 md:py-36">
        {children}
      </div>
    </section>
  );
}

function Label({ children }: { children: ReactNode }) {
  return (
    <p className="text-[11px] tracking-[0.22em] text-mist uppercase">
      {children}
    </p>
  );
}

export function OfferSection() {
  const { offer } = siteCopy;

  return (
    <SectionShell id={offer.id}>
      <h2 className="max-w-4xl text-[clamp(2.25rem,5.5vw,4.75rem)] leading-[1.02] font-normal tracking-[-0.04em] text-signal">
        {offer.headline}
      </h2>
      <p className="mt-10 max-w-2xl text-lg leading-relaxed text-mist md:text-xl">
        {offer.body}
      </p>
      <ul className="mt-14 max-w-xl space-y-5 text-signal">
        {offer.bullets.map((bullet) => (
          <li key={bullet} className="border-l border-cyan pl-5">
            {bullet}
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}

export function TracksSection() {
  const { tracks } = siteCopy;
  const columns = [tracks.newTenant, tracks.currentTenant] as const;

  return (
    <SectionShell id={tracks.id}>
      <h2 className="max-w-4xl text-[clamp(2.25rem,5.5vw,4.75rem)] leading-[1.02] font-normal tracking-[-0.04em] text-signal">
        {tracks.headline}
      </h2>
      <div className="mt-16 grid gap-14 md:grid-cols-2 md:gap-20">
        {columns.map((column) => (
          <div key={column.label} className="max-w-md">
            <Label>{column.label}</Label>
            <p className="mt-4 text-xl leading-relaxed text-signal md:text-2xl">
              {column.body}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-16 max-w-xl">
        <Label>{tracks.both.label}</Label>
        <p className="tabular mt-4 text-xl text-signal">{tracks.both.body}</p>
      </div>
    </SectionShell>
  );
}

export function ScopeSection() {
  const { scope } = siteCopy;

  return (
    <SectionShell id={scope.id}>
      <h2 className="tabular max-w-5xl text-[clamp(2.25rem,5.5vw,4.75rem)] leading-[1.02] font-normal tracking-[-0.04em] text-signal">
        {scope.headline}
      </h2>
      <div className="mt-16 grid gap-14 md:grid-cols-2 md:gap-20">
        <div className="max-w-xl">
          <Label>{scope.included.label}</Label>
          <p className="tabular mt-4 text-lg leading-relaxed text-mist">
            {scope.included.body}
          </p>
        </div>
        <div className="max-w-xl">
          <Label>{scope.notIncluded.label}</Label>
          <p className="mt-4 text-lg leading-relaxed text-mist">
            {scope.notIncluded.body}
          </p>
        </div>
      </div>
      <p className="mt-16 text-sm tracking-[0.04em] text-mist">{scope.proof}</p>
    </SectionShell>
  );
}

export function AudienceSection() {
  const { audience } = siteCopy;
  const blocks = [
    audience.forWhom,
    audience.alsoFor,
    audience.notYearOne,
  ] as const;

  return (
    <SectionShell id={audience.id}>
      <h2 className="max-w-4xl text-[clamp(2.25rem,5.5vw,4.75rem)] leading-[1.02] font-normal tracking-[-0.04em] text-signal">
        {audience.headline}
      </h2>
      <div className="mt-16 grid gap-14 md:grid-cols-3 md:gap-16">
        {blocks.map((block) => (
          <div key={block.label} className="max-w-md">
            <Label>{block.label}</Label>
            <p className="mt-4 text-lg leading-relaxed text-mist">{block.body}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

export function FinalCta() {
  const { cta } = siteCopy;

  return (
    <SectionShell id={cta.id}>
      <h2 className="max-w-4xl text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.02] font-normal tracking-[-0.04em] text-signal">
        {cta.headline}
      </h2>
      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-mist md:text-xl">
        {cta.body}
      </p>
      <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
        <CtaLink cta={cta.primary} tone="primary" />
        <CtaLink cta={cta.secondary} tone="secondary" />
      </div>
      <p className="mt-10 text-sm text-mist">{cta.microcopy}</p>
    </SectionShell>
  );
}
