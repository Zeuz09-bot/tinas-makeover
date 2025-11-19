import Image from "next/image";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  image: string;
  children?: ReactNode;
  align?: "center" | "left";
  overlayStrength?: "soft" | "strong";
  priority?: boolean;
  sizes?: string;
}

export function PageHero({
  title,
  subtitle,
  eyebrow,
  image,
  children,
  align = "center",
  overlayStrength = "strong",
  priority = true,
  sizes = "(min-width: 1200px) 1200px, 100vw",
}: PageHeroProps) {
  const textAlignment = align === "center" ? "items-center text-center" : "items-start text-left";
  const overlayClass =
    overlayStrength === "soft"
      ? "from-[#fef2f5]/80 via-[#fff9f6]/60"
      : "from-[#fce7dd]/95 via-[#fef5f1]/75";

  return (
    <section className="relative isolate flex min-h-[60vh] items-center justify-center overflow-hidden bg-background py-16 md:py-24">
      <Image
        src={image}
        alt={title}
        fill
        priority={priority}
        sizes={sizes}
        className="absolute inset-0 object-cover opacity-70"
      />
      <div className={cn("absolute inset-0 bg-gradient-to-t", overlayClass)} />
      <div className={cn("relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 text-ink", textAlignment, "fade-up")}
        role="presentation"
      >
        <div className="space-y-3">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-muted/70 md:text-sm">{eyebrow}</p>
          ) : null}
          <h1 className="font-display text-3xl font-semibold tracking-[0.25em] md:text-5xl">{title}</h1>
          {subtitle ? (
            <p className="max-w-2xl text-sm text-muted/80 md:text-base">{subtitle}</p>
          ) : null}
        </div>
        {children ? <div className="flex flex-wrap gap-4" aria-label="Hero actions">{children}</div> : null}
      </div>
    </section>
  );
}
