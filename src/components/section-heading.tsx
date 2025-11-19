import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
  description?: string;
  animate?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  description,
  align = "center",
  className,
  animate = true,
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        animate && "fade-up",
        className
      )}
    >
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-muted/70">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">{title}</h2>
      {subtitle ? (
        <p className="max-w-2xl text-sm text-muted/80 md:text-base">{subtitle}</p>
      ) : null}
      {description ? (
        <p className="max-w-3xl text-xs uppercase tracking-[0.3em] text-muted/60">{description}</p>
      ) : null}
    </header>
  );
}
