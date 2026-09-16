import Image from "next/image";
import { media } from "@/lib/media";

export function Mark({ className }: { className?: string }) {
  return (
    <Image
      src={media.markArc}
      alt=""
      width={256}
      height={256}
      className={className}
      aria-hidden="true"
      unoptimized
    />
  );
}
