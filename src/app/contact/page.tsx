import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { CTA_COPY, CONTACT, SOCIAL_GROUPS, STOCK_PHOTOS } from "@/lib/site";
import { bookNowLink, whatsappDisplayNumber } from "@/lib/whatsapp";

export default function ContactPage() {
  return (
    <div className="bg-background text-ink">
      <PageHero
        title="Contact Us"
        subtitle="We respond within minutes during studio hours. Tap below to book a glam session or ask a question."
        image={STOCK_PHOTOS.contactAgent}
      />
      <Container className="space-y-16 py-16 md:py-20">
        <SectionHeading
          title="We’re here to help"
          subtitle="Reach out via WhatsApp, email, or visit our studio in Ikare Akoko, Ondo State. We’ll craft the perfect glam plan for your event."
        />
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6 rounded-3xl border border-border bg-white/85 p-8 shadow-[0_24px_60px_rgba(217,138,163,0.12)]">
            <h3 className="text-lg font-semibold uppercase tracking-[0.3em] text-accent">WhatsApp</h3>
            <p className="text-sm text-muted/80">Tap below to chat with us directly on WhatsApp.</p>
            <Link
              href={bookNowLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-border px-8 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-ink transition hover:border-accent hover:bg-accent hover:text-white"
            >
              Chat on WhatsApp
            </Link>
            <p className="text-xs uppercase tracking-[0.3em] text-muted/50">Number</p>
            <p className="text-sm text-muted/80">{whatsappDisplayNumber}</p>
          </div>
          <div className="space-y-6 rounded-3xl border border-border bg-white/85 p-8 shadow-[0_24px_60px_rgba(217,138,163,0.12)]">
            <h3 className="text-lg font-semibold uppercase tracking-[0.3em] text-accent">Email & Hours</h3>
            <div className="space-y-4 text-sm text-muted/80">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted/50">Email</p>
                <a href={`mailto:${CONTACT.email}`} className="text-ink transition hover:text-accent">
                  {CONTACT.email}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted/50">Hours</p>
                <p>{CONTACT.hours.weekdays}</p>
                <p>{CONTACT.hours.sunday}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted/50">Studio</p>
                <p>{CONTACT.address}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {SOCIAL_GROUPS.map((group) => (
            <div
              key={group.key}
              className="space-y-4 rounded-3xl border border-border bg-white/85 p-8 text-sm text-muted/80 shadow-[0_24px_60px_rgba(217,138,163,0.12)]"
            >
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-muted/70">{group.brand}</h3>
              <div className="flex flex-wrap gap-2 text-[0.7rem] uppercase tracking-[0.25em] text-ink">
                {group.links.map((link) => (
                  <Link
                    key={`${group.key}-${link.label}`}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-border px-4 py-2 transition hover:border-accent hover:bg-accent hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-3xl border border-border bg-white/80 p-8 text-center text-sm text-muted/80 shadow-[0_24px_60px_rgba(217,138,163,0.12)]">
          <p>
            Prefer an in-person consultation? Schedule a salon walk-through and we’ll curate a lookbook tailored to
            your celebration.
          </p>
          <Link
            href={bookNowLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-full border border-border px-8 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-ink transition hover:border-accent hover:bg-accent hover:text-white"
          >
            {CTA_COPY.bookNow}
          </Link>
        </div>
      </Container>
    </div>
  );
}
