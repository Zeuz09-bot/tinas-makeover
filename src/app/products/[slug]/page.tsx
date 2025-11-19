import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { HighlightPills } from "@/components/highlight-pills";
import { PageHero } from "@/components/page-hero";
import { BRAND } from "@/lib/site";
import { composeWhatsAppLink } from "@/lib/whatsapp";
import { productItems } from "@/data/content";

interface ProductPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return productItems.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = productItems.find((item) => item.slug === params.slug);
  if (!product) {
    return {};
  }

  return {
    title: `${product.title} | Tinas Makeover Boutique`,
    description: product.description,
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = productItems.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  const whatsappLink = composeWhatsAppLink(
    `Hello ${BRAND.name}, I'd love to reserve the ${product.title}. Could you share availability and delivery options?`
  );

  return (
    <div className="bg-background text-ink">
      <PageHero
        title={product.title}
        subtitle={product.description}
        image={product.image}
      >
        <Link
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-border bg-white/90 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-ink transition hover:border-accent hover:bg-accent hover:text-white"
        >
          Order Now
        </Link>
      </PageHero>
      <Container className="space-y-16 py-16 md:py-20">
        <section className="grid gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-start">
          <div className="space-y-6 text-sm text-muted/80 md:text-base">
            <SectionHeading
              align="left"
              eyebrow="Why you'll love it"
              title="Product Highlights"
              subtitle="Curated for feminine muses who love effortless luxury and lasting quality."
              className="items-start text-left"
            />
            <HighlightPills items={product.features} />
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-border px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-ink transition hover:border-accent hover:bg-accent hover:text-white"
            >
              Order Now
            </Link>
          </div>
          <aside className="space-y-6 rounded-3xl border border-border bg-white/85 p-8 shadow-[0_24px_60px_rgba(217,122,166,0.12)]">
            <h2 className="font-display text-lg font-semibold uppercase tracking-[0.25em] text-accent">Care & Styling Notes</h2>
            <p>
              Maintain salon-fresh shine by storing in the included satin bag and hydrating weekly with leave-in conditioner. We’re happy to walk you through styling routines over WhatsApp or in-person at the studio.
            </p>
            <div className="rounded-2xl border border-border bg-white/80 p-5 text-sm text-muted/80">
              <p className="font-semibold uppercase tracking-[0.3em] text-muted/60">Need assistance?</p>
              <p className="mt-2">
                Share your preferred length, texture, or color inspiration and our team will curate additional options just for you.
              </p>
            </div>
          </aside>
        </section>
        <section className="space-y-8">
          <SectionHeading
            eyebrow="Gallery"
            title="A closer look"
            subtitle="Swipe through the texture, finish, and styling versatility of this piece."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {product.gallery.map((media) => (
              <div key={media.src} className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-white">
                <Image
                  src={media.src}
                  alt={media.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw"
                />
              </div>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
