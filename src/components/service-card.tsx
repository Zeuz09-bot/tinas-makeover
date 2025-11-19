import Image from "next/image";
import Link from "next/link";
import { serviceInquiryLink } from "@/lib/whatsapp";
import { CTA_COPY } from "@/lib/site";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  href?: string;
}

export function ServiceCard({ title, description, image, href }: ServiceCardProps) {
  const internalHref = href ?? serviceInquiryLink(title);
  const isExternal = !href;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-card shadow-[0_24px_60px_rgba(217,138,163,0.15)] transition hover:-translate-y-1 hover:shadow-[0_32px_70px_rgba(217,122,166,0.25)]">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={image}
          alt={`${title} service visual`}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(min-width: 768px) 40vw, 100vw"
          priority={false}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
      </div>
      <div className="flex flex-1 flex-col gap-4 px-8 pb-8 pt-6 text-center">
        <h3 className="text-xl font-semibold uppercase tracking-[0.3em] text-accent">{title}</h3>
        <p className="text-sm leading-relaxed text-muted/80">{description}</p>
        <div className="pt-2">
          <Link
            href={internalHref}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="inline-flex items-center justify-center rounded-full border border-border px-8 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-ink transition hover:border-accent hover:bg-accent hover:text-white"
            aria-label={`${CTA_COPY.more} about ${title}`}
          >
            {CTA_COPY.more}
          </Link>
        </div>
      </div>
    </article>
  );
}
