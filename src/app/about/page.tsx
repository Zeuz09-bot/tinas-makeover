import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { aboutNarrative, founderSpotlight } from "@/data/content";
import { CTA_COPY, STOCK_PHOTOS } from "@/lib/site";
import { bookNowLink } from "@/lib/whatsapp";

export default function AboutPage() {
  return (
    <div className="bg-background text-ink">
      <PageHero
        title={aboutNarrative.headline}
        subtitle="Timeless elegance, premium artistry, and a client-first experience in every service."
        image={STOCK_PHOTOS.salonInterior}
      />
      <Container className="space-y-20 py-16 md:py-20">
        <SectionHeading
          title="Our Story"
          subtitle="We believe beauty should feel effortless yet unforgettable. From first consultation to finishing touches, every experience at Tinas Makeover is curated with care."
        />
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div className="space-y-6 text-sm text-muted/80 md:text-base">
            <p>{aboutNarrative.story}</p>
            <p>{aboutNarrative.mission}</p>
            <p>{aboutNarrative.promise}</p>
            <Link
              href={bookNowLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-border px-8 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-ink transition hover:border-accent hover:bg-accent hover:text-white"
            >
              {CTA_COPY.bookNow}
            </Link>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-white shadow-[0_24px_60px_rgba(217,138,163,0.15)]">
            <Image
              src={founderSpotlight.image}
              alt={`Portrait of ${founderSpotlight.name}`}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <section className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-muted/70">Meet the Founder</h3>
            <p className="text-2xl font-semibold tracking-[0.15em] text-accent md:text-3xl md:tracking-[0.2em] lg:text-4xl lg:tracking-[0.25em] md:whitespace-nowrap">
              {founderSpotlight.name}
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-muted/50">{founderSpotlight.role}</p>
            <p className="text-sm text-muted/80 md:text-base">{founderSpotlight.bio}</p>
          </div>
          <div className="space-y-6 rounded-3xl border border-border bg-white/85 p-8 text-sm text-muted/80 md:text-base shadow-[0_24px_60px_rgba(217,138,163,0.12)]">
            <p>
              “At Tinas Makeover, we celebrate individuality. Every look is designed to amplify your personality and
              the story you want to tell.”
            </p>
            <p>
              Our artists are champions of innovation and inclusivity, offering consultations, trainings, and curated
              glam experiences tailored to your needs.
            </p>
            <p>
              Whether it’s an intimate ceremony or an editorial campaign, we deliver with precision, flair, and
              professionalism.
            </p>
          </div>
        </section>
      </Container>
    </div>
  );
}
