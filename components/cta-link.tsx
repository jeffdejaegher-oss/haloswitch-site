import type { HashCta, MailtoCta } from "@/lib/copy";

type Cta = MailtoCta | HashCta;

type Tone = "primary" | "secondary";

export function CtaLink({ cta, tone }: { cta: Cta; tone: Tone }) {
  switch (tone) {
    case "primary":
      return (
        <a
          href={cta.href}
          className="inline-flex h-12 items-center justify-center bg-cyan px-7 text-[13px] tracking-[0.04em] text-void transition-colors hover:bg-cyan/90"
        >
          {cta.label}
        </a>
      );
    case "secondary":
      return (
        <a
          href={cta.href}
          className="inline-flex h-12 items-center text-[13px] tracking-[0.04em] text-signal transition-colors hover:text-cyan"
        >
          {cta.label}
        </a>
      );
    default: {
      const _exhaustive: never = tone;
      return _exhaustive;
    }
  }
}
