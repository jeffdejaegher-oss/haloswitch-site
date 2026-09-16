import Image from "next/image";
import { CtaLink } from "@/components/cta-link";
import { siteCopy } from "@/lib/copy";
import { media } from "@/lib/media";

export function Hero() {
  const { hero } = siteCopy;

  return (
    <section
      id="top"
      className="relative isolate min-h-svh overflow-hidden bg-void"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={media.heroMobile}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover md:hidden"
        />
        <Image
          src={media.heroDesktop}
          alt=""
          fill
          priority
          sizes="100vw"
          className="hidden object-cover md:block"
        />
        <video
          className="absolute inset-0 hidden h-full w-full object-cover motion-safe:md:block"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={media.heroDesktop}
          width={1920}
          height={1080}
        >
          <source src={media.heroLoop} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/75 to-void/10 md:via-void/55 md:to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-svh max-w-[90rem] flex-col justify-end px-6 pb-16 pt-28 md:justify-center md:px-10 md:pb-24 md:pt-20">
        <div className="max-w-3xl">
          <p className="text-[11px] tracking-[0.28em] text-mist uppercase">
            {hero.eyebrow}
          </p>
          <h1 className="mt-6 text-[clamp(3.25rem,9vw,7.25rem)] leading-[0.92] font-normal tracking-[-0.045em] text-signal">
            {hero.headline}
          </h1>
          <p className="mt-8 max-w-xl text-xl text-signal md:text-2xl">
            {hero.subhead}
          </p>
          <p className="tabular mt-5 text-sm text-mist md:text-base">
            {hero.proof}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <CtaLink cta={hero.primary} tone="primary" />
            <CtaLink cta={hero.secondary} tone="secondary" />
          </div>
        </div>
      </div>
    </section>
  );
}
