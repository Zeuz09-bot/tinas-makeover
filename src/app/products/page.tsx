import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { HighlightPills } from "@/components/highlight-pills";
import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { productItems } from "@/data/content";
import { BRAND, CTA_COPY, STOCK_PHOTOS } from "@/lib/site";
import { bookNowLink, composeWhatsAppLink } from "@/lib/whatsapp";

const boutiqueHighlights = [
  "Curated by Tina for modern muses",
  "Premium lace and ethically sourced bundles",
  "WhatsApp concierge for fittings & delivery",
  "Complementary styling tips with every purchase",
];

export default function ProductsPage() {
  const brandLogos = [BRAND.logoPrimary, BRAND.logoSecondary].filter(Boolean) as string[];

  return (
    <div className="bg-background text-ink">
      <PageHero
        title="The Hair Boutique"
        subtitle="Discover our favourite wigs, care kits, and accessories. Message us to reserve yours and we’ll arrange pick-up or delivery."
        image={STOCK_PHOTOS.hairModel}
      >
        <>
          <Link
            href={bookNowLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-border bg-white/90 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-ink transition hover:border-accent hover:bg-accent hover:text-white"
          >
            {CTA_COPY.bookNow}
          </Link>
          {brandLogos.length ? (
            <div className="flex items-center gap-3 rounded-full border border-white/60 bg-white/30 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white">
              <span>Trusted Looks</span>
              {brandLogos.map((logo, index) => (
                <span key={logo} className="relative h-8 w-8 overflow-hidden rounded-full border border-white/80 bg-white/60">
                  <Image src={logo} alt={`${BRAND.name} logo variation ${index + 1}`} fill sizes="40px" className="object-cover" />
                </span>
              ))}
            </div>
          ) : null}
        </>
      </PageHero>
      <Container className="space-y-16 py-16 md:py-20">
        <section className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div className="space-y-6 text-sm text-muted/80 md:text-base">
            <SectionHeading
              align="left"
              eyebrow="Luxury Hair & Accessories"
              title="Curated with the Tee Touch"
              subtitle="Each piece in our boutique is hand-selected to blend seamlessly with our signature glam services."
              className="items-start text-left"
            />
            <p>
              We believe your hair should feel as remarkable as your makeup looks. From lace wigs that melt effortlessly to satin-lined accessories, every item reflects our commitment to quality and comfort.
            </p>
            <p>
              Need help picking the perfect length, texture, or maintenance routine? Send us a message and our concierge will guide you step-by-step.
            </p>
          </div>
          <aside className="space-y-6 rounded-3xl border border-border bg-white/85 p-8 shadow-[0_24px_60px_rgba(217,122,166,0.12)]">
            <SectionHeading
              align="left"
              eyebrow="Why Clients Love Our Boutique"
              title="Highlights"
              subtitle="Every order includes personalized tips and support to keep your investment looking luxe."
              className="items-start text-left"
            />
            <HighlightPills items={boutiqueHighlights} />
          </aside>
        </section>
        <section className="space-y-8">
          <SectionHeading
            eyebrow="Shop the Collection"
            title="Featured Products"
            subtitle="Swipe through our current best sellers. Tap to see details and send us a message to reserve."
          />
          <div className="flex flex-wrap gap-6">
            {productItems.map((product) => (
              <ProductCard
                key={product.slug}
                {...product}
                className="basis-full sm:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)]"
              />
            ))}
          </div>
        </section>
        <section className="space-y-6 rounded-3xl border border-border bg-white/90 p-10 text-center shadow-[0_24px_80px_rgba(217,138,163,0.18)]">
          <h2 className="font-display text-2xl font-semibold uppercase tracking-[0.3em]">More to Adore</h2>
          <p className="mx-auto max-w-2xl text-sm text-muted/80 md:text-base">
            Looking for something bespoke? We offer custom wig sourcing, coloring, and care packages tailored to your vision. Tell us what you have in mind and we’ll source or build your dream crown.
          </p>
          <Link
            href={composeWhatsAppLink(`Hello ${BRAND.name}, I’d love a custom hair order.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-accent-soft hover:text-ink"
          >
            Chat with Us
          </Link>
        </section>
      </Container>
    </div>
  );
}
