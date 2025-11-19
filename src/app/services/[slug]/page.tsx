import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { HighlightPills } from "@/components/highlight-pills";
import { PageHero } from "@/components/page-hero";
import { BRAND, CTA_COPY } from "@/lib/site";
import { composeWhatsAppLink } from "@/lib/whatsapp";
import { serviceDetails } from "@/data/content";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceDetails.find((item) => item.slug === slug);
  if (!service) {
    return {};
  }

  return {
    title: `${service.title} | Tinas Makeover`,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = serviceDetails.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const whatsappLink = composeWhatsAppLink(
    `Hello ${BRAND.name}, I'm interested in your ${service.title}. Could you share availability and investment details?`
  );

  return (
    <div className="bg-background text-ink">
      <PageHero title={service.title} subtitle={service.summary} image={service.heroImage} />
      <Container className="space-y-16 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div className="space-y-6 text-sm text-muted/80 md:text-base">
            {service.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-border px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-ink transition hover:border-accent hover:bg-accent hover:text-white"
            >
              {CTA_COPY.bookNow}
            </Link>
          </div>
          <aside className="space-y-8 rounded-3xl border border-border bg-white/85 p-8 shadow-[0_24px_60px_rgba(217,122,166,0.12)]">
            <SectionHeading
              align="left"
              eyebrow="What you'll love"
              title="Highlights"
              subtitle="Every detail is choreographed to keep you flawless from first look to final photo."
              className="items-start text-left"
            />
            <HighlightPills items={service.highlights} />
            <div className="space-y-3 text-sm text-muted/80">
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-muted/60">Your experience includes</h3>
              <ul className="space-y-2">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Moodboard"
            title="Gallery Inspiration"
            subtitle="Snapshots of the luxe artistry, textures, and finishing touches our clients adore."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.gallery.map((media) => (
              <div key={media.src} className="relative overflow-hidden rounded-3xl border border-border bg-white">
                {media.isVideo && media.videoUrl ? (
                  <video
                    className="h-full w-full object-cover"
                    controls
                    playsInline
                    poster={media.src}
                  >
                    <source src={media.videoUrl} />
                    Your browser does not support embedded videos.
                  </video>
                ) : (
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src={media.src}
                      alt={media.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
