import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { PackageCard } from "@/components/package-card";
import { HighlightPills } from "@/components/highlight-pills";
import { CTA_COPY, STOCK_PHOTOS } from "@/lib/site";
import { hairHighlights, hairPackages } from "@/data/content";
import { bookNowLink } from "@/lib/whatsapp";

export default function HairPage() {
  return (
    <div className="bg-background text-ink">
      <PageHero
        title="Hair Services"
        subtitle="Custom bridal installs, wig artistry, coloring, and revamp treatments tailored to your style."
        image={STOCK_PHOTOS.hairModel}
      />
      <Container className="py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div className="space-y-10">
            <SectionHeading
              align="left"
              eyebrow="Artistry & Care"
              title="Transformative Hair Packages"
              subtitle="Our stylists specialize in creating luxe, long-lasting looks with healthy-hair-first techniques."
              className="items-start text-left"
            />
            <div className="grid gap-8 lg:grid-cols-2">
              {hairPackages.map((pkg) => (
                <PackageCard key={pkg.title} {...pkg} />
              ))}
            </div>
          </div>
          <aside className="space-y-8 rounded-3xl border border-border bg-white/80 p-8 shadow-[0_20px_60px_rgba(217,138,163,0.12)]">
            <SectionHeading
              align="left"
              eyebrow="Why clients glow"
              title="Hair Highlights"
              subtitle="Experience craftsmanship that balances elegance, durability, and hair health."
              className="items-start text-left"
            />
            <HighlightPills items={hairHighlights} />
            <p className="text-sm text-muted/80">
              Let us craft a signature look—from natural glam to visionary couture—for your next milestone.
            </p>
            <Link
              href={bookNowLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-border px-8 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-ink transition hover:border-accent hover:bg-accent hover:text-white"
            >
              {CTA_COPY.bookNow}
            </Link>
          </aside>
        </div>
      </Container>
    </div>
  );
}
