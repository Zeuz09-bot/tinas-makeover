import Image from "next/image";
import Link from "next/link";
import { bookNowLink } from "@/lib/whatsapp";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { ContactForm } from "@/components/contact-form";
import { ProductCard } from "@/components/product-card";
import { BRAND, CTA_COPY, STOCK_PHOTOS } from "@/lib/site";
import { brandNarrative, productItems } from "@/data/content";

const services = [
  {
    title: "Makeup",
    description:
      "Custom glam for weddings, everyday glow, photoshoots, and trainings—always tailored to your vision.",
    image: STOCK_PHOTOS.makeupPalette,
    href: "/makeup",
  },
  {
    title: "Hair",
    description:
      "Bridal installs, revamps, and luxe wig artistry to match your style, dress, and celebration.",
    image: STOCK_PHOTOS.hairModel,
    href: "/hair",
  },
];

const heroHighlights = [
  "Bridal & editorial artistry",
  "Soft, skin-loving finishes",
  "Concierge WhatsApp care",
];

const heroStats = [
  { label: "Brides & muses", value: "500+" },
  { label: "Destination glam trips", value: "35" },
  { label: "Classes hosted", value: "120" },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <ProductsShowcase />
      <Highlights />
      <ContactSection />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#fff5f8] via-white to-[#fff8fb]">
      <div className="absolute inset-0">
        <Image
          src={STOCK_PHOTOS.heroDesktop}
          alt={`${BRAND.name} makeup artist applying lipstick`}
          fill
          className="hidden object-cover opacity-60 md:block"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 1200px, 1600px"
        />
        <Image
          src={STOCK_PHOTOS.heroMobile}
          alt={`${BRAND.name} makeup hero mobile`}
          fill
          className="object-cover opacity-60 md:hidden"
          priority
          sizes="(max-width: 768px) 100vw, 768px"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#f8dce8]/95 via-[#fff7fb]/75 to-white" />
      </div>
      <span className="pointer-events-none absolute -left-16 top-24 hidden h-72 w-72 rounded-full bg-accent/30 blur-3xl md:block" aria-hidden />
      <span className="pointer-events-none absolute -right-10 bottom-10 hidden h-60 w-60 rounded-full bg-[#f9d6a4]/40 blur-3xl md:block" aria-hidden />
      <Container className="relative z-10 flex min-h-[80vh] items-center justify-center py-16 text-ink">
        <div className="flex max-w-3xl flex-col items-center gap-6 text-center">
          <h1 className="font-display text-4xl tracking-[0.3em] text-ink md:text-6xl">Tina&apos;s Makeover</h1>
          <div className="mt-4 flex items-center justify-center gap-4">
            <Link
              href={bookNowLink}
              className="inline-flex items-center justify-center rounded-full bg-accent px-10 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-accent-soft hover:text-ink"
              target="_blank"
              rel="noopener noreferrer"
            >
              {CTA_COPY.bookNow}
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center rounded-full border border-border px-10 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-ink transition hover:border-accent hover:bg-accent hover:text-white"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Services() {
  return (
    <section className="bg-white/80 py-20">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Services We Offer"
          title="Makeup & Hair Excellence"
          subtitle={brandNarrative}
          description="Signature experiences tailored to weddings, red carpets, and everyday muses."
          className="text-center"
        />
        <div className="grid gap-10 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function Highlights() {
  return (
    <section className="bg-accent-soft/40 py-24">
      <Container className="flex flex-col items-center gap-10 text-center text-ink">
        <SectionHeading
          title={`Why ${BRAND.name}`}
          subtitle="From red-carpet makeup to luxurious bridal hair installs, our artists deliver bespoke looks with premium products, detail-driven techniques, and exceptional client care."
          description="Calm artistry, concierge communication, and timeless finishes on every booking."
        />
        <div className="grid gap-6 text-sm text-muted/80 md:grid-cols-3">
          {[
            "Concierge WhatsApp support before & after your appointment.",
            "Premium, skin-loving products matched to every undertone.",
            "Artists available worldwide for destination glam squads.",
          ].map((item) => (
            <p key={item} className="rounded-3xl border border-border/80 bg-white/60 p-6">
              {item}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProductsShowcase() {
  return (
    <section className="bg-white py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Signature Products"
          title="Hair Boutique Favourites"
          subtitle="Shop our curated edit of luxury wigs, styling kits, and accessories. Reserve yours and we’ll arrange pick-up or delivery via WhatsApp."
        />
        <div className="flex justify-center mb-16 md:mb-8">
          <div className="relative mx-auto w-full max-w-sm">
            <span className="pointer-events-none absolute -left-6 top-6 hidden h-24 w-24 rounded-[32px] bg-accent/30 blur-2xl md:block" aria-hidden />
            <div className="rounded-[36px] border border-white/70 bg-white/80 p-6 shadow-[0_30px_90px_rgba(217,122,166,0.25)] backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted/60">Artist moodboard</p>
              <div className="relative mt-4 aspect-[3/4] w-full overflow-hidden rounded-[28px]">
                <Image
                  src={STOCK_PHOTOS.eventGlam}
                  alt="Editorial glam showcase"
                  fill
                  sizes="(max-width: 768px) 80vw, 400px"
                  className="object-cover"
                />
              </div>
              <div className="mt-5 flex items-center justify-between text-[0.65rem] uppercase tracking-[0.4em] text-muted/70">
                <span>Queen B Studio</span>
                <span>Since &rsquo;15</span>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-6 hidden w-52 rounded-[28px] border border-accent/30 bg-white/90 p-4 shadow-[0_18px_50px_rgba(249,214,164,0.4)] md:block">
              <p className="text-sm font-semibold text-accent">“Still obsessed with my bridal glam!”</p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-muted/70">– Tee Bride</p>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-r from-white via-white to-accent-soft/30 p-6">
          <div className="flex gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none]">
            {productItems.map((product) => (
              <ProductCard key={product.slug} {...product} />
            ))}
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-full border border-border px-10 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-ink transition hover:border-accent hover:bg-accent hover:text-white"
          >
            Explore Boutique
          </Link>
          <Link
            href={bookNowLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-accent px-10 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-accent-soft hover:text-ink"
          >
            Reserve via WhatsApp
          </Link>
        </div>
      </Container>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="bg-gradient-to-b from-accent-soft/30 to-white py-24">
      <Container className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div className="space-y-6">
          <SectionHeading
            align="left"
            eyebrow="Let's Personalize Your Glam"
            title="Request a Bespoke Session"
            subtitle="Share your dream look and we’ll follow up on WhatsApp with availability, pricing, and prep tips."
            className="items-start text-left"
          />
          <p className="text-sm text-muted/80">
            Tell us about your event, preferred services, and any inspiration photos. Our concierge team replies quickly to
            secure your date.
          </p>
          <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em] text-muted/70">
            <span className="rounded-full border border-border px-4 py-2">Bridal Parties</span>
            <span className="rounded-full border border-border px-4 py-2">Editorial Shoots</span>
            <span className="rounded-full border border-border px-4 py-2">Trainings & Classes</span>
          </div>
        </div>
        <div className="rounded-3xl border border-border bg-white/90 p-8 shadow-[0_24px_70px_rgba(217,122,166,0.2)]">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
