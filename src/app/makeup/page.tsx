import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { PackageCard } from "@/components/package-card";
import { HighlightPills } from "@/components/highlight-pills";
import { CTA_COPY, STOCK_PHOTOS } from "@/lib/site";
import { makeupHighlights, makeupNarratives, makeupPackages } from "@/data/content";
import { bookNowLink } from "@/lib/whatsapp";

export default function MakeupPage() {
  return (
    <div className="bg-background text-ink">
      <PageHero
        title="Makeup Services"
        subtitle="Premium glam tailored for weddings, events, photoshoots, and bespoke trainings."
        image={STOCK_PHOTOS.heroDesktop}
      />
      <Container className="py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div className="space-y-10">
            <SectionHeading
              align="left"
              eyebrow="Signature Looks"
              title="Curated Glam Packages"
              subtitle="Select from our expertly crafted services designed to deliver show-stopping results for every occasion."
              className="items-start text-left"
            />
            <div className="space-y-8 rounded-3xl border border-border bg-white/80 p-8 text-sm text-muted/80 md:text-base shadow-[0_20px_60px_rgba(217,138,163,0.12)]">
              <div className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Bridal Makeup</h3>
                <p>{makeupNarratives.bridal}</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Casual Makeup</h3>
                <p>{makeupNarratives.casual}</p>
              </div>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              {makeupPackages.map((pkg) => (
                <PackageCard key={pkg.title} {...pkg} />
              ))}
            </div>
          </div>
          <aside className="space-y-8 rounded-3xl border border-border bg-white/80 p-8 shadow-[0_20px_60px_rgba(217,138,163,0.12)]">
            <SectionHeading
              align="left"
              eyebrow="Why clients trust us"
              title="Makeup Highlights"
              subtitle="Every look is thoughtfully planned with attention to complexion, lighting, and longevity."
              className="items-start text-left"
            />
            <HighlightPills items={makeupHighlights} />
            <p className="text-sm text-muted/80">
              Need something more customized? Send us your mood board and we’ll craft a bespoke glam plan.
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
