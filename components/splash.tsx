"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { media } from "@/lib/media";

const HOLD_MS = 800;
const FADE_MS = 400;

type SplashPhase = "hold" | "fade" | "done";

function overlayOpacity(phase: SplashPhase): number {
  switch (phase) {
    case "hold":
      return 1;
    case "fade":
      return 0;
    case "done":
      return 0;
    default: {
      const _exhaustive: never = phase;
      return _exhaustive;
    }
  }
}

export function Splash() {
  const [phase, setPhase] = useState<SplashPhase>("hold");

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      const doneTimer = window.setTimeout(() => {
        setPhase("done");
      }, 0);
      return () => window.clearTimeout(doneTimer);
    }

    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";

    const fadeTimer = window.setTimeout(() => {
      setPhase("fade");
    }, HOLD_MS);

    const doneTimer = window.setTimeout(() => {
      root.style.overflow = previousOverflow;
      setPhase("done");
    }, HOLD_MS + FADE_MS);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(doneTimer);
      root.style.overflow = previousOverflow;
    };
  }, []);

  if (phase === "done") {
    return null;
  }

  return (
    <div
      data-splash={phase}
      aria-hidden="true"
      className="splash-overlay"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 80,
        display: "grid",
        placeItems: "center",
        background: "#0A0C0F",
        opacity: overlayOpacity(phase),
        transition: `opacity ${FADE_MS}ms ease`,
        pointerEvents: phase === "fade" ? "none" : "auto",
      }}
    >
      <Image
        src={media.markArc}
        alt=""
        width={256}
        height={256}
        loading="eager"
        fetchPriority="high"
        unoptimized
        className="h-auto w-[7.5rem] md:w-[8.75rem]"
      />
    </div>
  );
}
