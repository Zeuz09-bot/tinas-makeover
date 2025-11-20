import Link from "next/link";
import type { ReactElement } from "react";
import { bookNowLink, whatsappDisplayNumber } from "@/lib/whatsapp";
import { BRAND, CONTACT, SOCIAL_GROUPS } from "@/lib/site";
import { Container } from "@/components/container";

const iconMap: Record<string, ReactElement> = {
  instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 4.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm6.25-.88a.88.88 0 1 0 .88.88.88.88 0 0 0-.88-.88Zm-6.25 2.38A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5Z"
        fill="currentColor"
      />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M13 9h3V5h-3c-2.2 0-4 1.8-4 4v3H6v4h3v7h4v-7h3l1-4h-4V9c0-.6.4-1 1-1Z"
        fill="currentColor"
      />
    </svg>
  ),
  tiktok: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M21 7.5c-1.9 0-3.6-.6-4.9-1.7v8.1c0 3.7-3 6.6-6.6 6.6S3 17.6 3 14s3-6.6 6.6-6.6c.3 0 .6 0 .9.1v4a2.7 2.7 0 0 0-.9-.2 2.6 2.6 0 1 0 2.6 2.6V2h3.8a5.6 5.6 0 0 0 5.6 5.5Z"
        fill="currentColor"
      />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M12 2a9.7 9.7 0 0 0-8.3 14.7L3 22l5.5-1.5A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1 1-1.7 1-1.8.2-4.6-.4-7-2.7-2.6-2.5-3.1-5.4-2.8-7.2.1-.7.5-1.4 1.1-1.6.3-.1.7-.2 1.2.2s1.6 2.1 1.8 2.4.3.5.2.8-.5 1-1 1.5c-.2.2-.4.4-.2.8s1 1.7 2.3 2.7 2.3 1.2 2.6 1.3.6 0 .8-.2c.3-.3 1-.9 1.2-1.2s.5-.3.8-.2 2 1 2.3 1.2.5.2.6.3.2.7 0 1.3Z"
        fill="currentColor"
      />
    </svg>
  ),
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-white/90 py-12 text-muted/80 backdrop-blur">
      <Container className="flex flex-col gap-10 text-center md:grid md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.8fr)_minmax(0,1.2fr)] md:items-start md:text-left">
        <div className="space-y-4">
          <p className="text-sm font-semibold tracking-[0.35em] text-ink">
            {BRAND.name.toUpperCase()}
          </p>
          <div className="text-xs leading-relaxed text-muted/70 md:text-sm">
            <p>{CONTACT.address}</p>
            <p>{CONTACT.hours.weekdays}</p>
            <p>{CONTACT.hours.sunday}</p>
          </div>
          <p className="text-xs text-muted/60 md:text-sm">Available worldwide for destination glam.</p>
        </div>
        <div className="space-y-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted/70">Connect With Us</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-1 md:grid-cols-2">
              {SOCIAL_GROUPS.map((group) => (
                <div
                  key={group.key}
                  className="space-y-2 text-xs text-muted/80 text-center md:text-left"
                >
                  <p className="font-semibold uppercase tracking-[0.25em] text-muted/70">
                    {group.brand}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                    {group.links.map((item) => (
                      <Link
                        key={`${group.key}-${item.label}`}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink transition hover:border-accent hover:bg-accent hover:text-white"
                        aria-label={`${group.brand} on ${item.label}`}
                      >
                        {iconMap[item.icon ?? "instagram"]}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-xs text-muted/70 md:text-sm">
            <p>
              <span className="uppercase tracking-[0.3em] text-muted/50">WhatsApp</span> {whatsappDisplayNumber}
            </p>
            <p>
              <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-accent">
                {CONTACT.email}
              </a>
            </p>
          </div>
        </div>
        <div className="space-y-4 text-xs text-muted/60 md:text-right">
          <p>Monitored inbox for collaborations and press.</p>
          <p>{new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
