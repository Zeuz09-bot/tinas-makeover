import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  slug: string;
  title: string;
  description: string;
  image: string;
  className?: string;
  linkLabel?: string;
}

export function ProductCard({ slug, title, description, image, className, linkLabel = "Order Now" }: ProductCardProps) {
  return (
    <article
      className={cn(
        "group flex min-w-[260px] max-w-sm flex-1 shrink-0 flex-col overflow-hidden rounded-3xl border border-border/70 bg-card shadow-[0_16px_50px_rgba(217,122,166,0.18)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(217,122,166,0.25)]",
        className
      )}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, 80vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
      </div>
      <div className="flex flex-1 flex-col gap-4 px-6 py-6 text-ink">
        <p className="font-display text-lg font-semibold uppercase tracking-[0.25em] text-accent">{title}</p>
        <p className="text-sm text-muted/80 line-clamp-3">{description}</p>
        <div className="pt-2">
          <Link
            href={`/products/${slug}`}
            className="inline-flex items-center justify-center rounded-full border border-border px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-ink transition hover:border-accent hover:bg-accent hover:text-white"
            aria-label={`${linkLabel} - ${title}`}
          >
            {linkLabel}
          </Link>
        </div>
      </div>
    </article>
  );
}
