import Image from "next/image";
import Link from "next/link";
import { CTA_COPY } from "@/lib/site";
import { serviceInquiryLink } from "@/lib/whatsapp";

interface PackageCardProps {
  title: string;
  description: string;
  image: string;
  highlights: string[];
  href?: string;
}

export function PackageCard({ title, description, image, highlights, href }: PackageCardProps) {
  const linkHref = href ?? serviceInquiryLink(title);
  const isExternal = !href;

  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[0_24px_80px_rgba(217,138,163,0.15)]">
      <div className="relative aspect-[3/2] w-full overflow-hidden">
        <Image
          src={image}
          alt={`${title} package visual`}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-6 px-8 pb-8 pt-6 text-left">
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold uppercase tracking-[0.25em] text-accent">
            {title}
          </h3>
          <p className="text-sm text-muted/80 md:text-base">{description}</p>
        </div>
        <ul className="space-y-2 text-sm text-muted/80">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="pt-2">
          <Link
            href={linkHref}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="inline-flex items-center justify-center rounded-full border border-border px-8 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-ink transition hover:border-accent hover:bg-accent hover:text-white"
          >
            {CTA_COPY.more}
          </Link>
        </div>
      </div>
    </article>
  );
}
