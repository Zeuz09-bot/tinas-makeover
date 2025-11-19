"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";
import { BRAND, NAV_ITEMS, CTA_COPY } from "@/lib/site";
import { bookNowLink } from "@/lib/whatsapp";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const lastPathRef = useRef(pathname);
  const isBoutiqueRoute = pathname?.startsWith("/products");
  const logoSrc = isBoutiqueRoute ? BRAND.logoBoutique : BRAND.logoDefault;
  const leftLogoHref = isBoutiqueRoute ? "/products" : "/";
  const rightLogoHref = "/products";
  const logoAltText = `${BRAND.name} logo`;

  const renderLogo = (href: string, ariaLabel: string, className?: string) => {
    if (!logoSrc) {
      return (
        <Link href={href} className={cn("text-sm font-semibold uppercase tracking-[0.4em] text-ink", className)}>
          {BRAND.name.toUpperCase()}
        </Link>
      );
    }

    return (
      <Link
        href={href}
        className={cn(
          "relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-border bg-white/80 shadow-sm transition hover:border-accent hover:shadow-md",
          className
        )}
      >
        <Image src={logoSrc} alt={logoAltText} fill sizes="48px" className="object-cover" />
        <span className="sr-only">{ariaLabel}</span>
      </Link>
    );
  };

  useEffect(() => {
    if (open) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }
    return undefined;
  }, [open]);

  useEffect(() => {
    if (!open) {
      lastPathRef.current = pathname;
      return undefined;
    }

    if (pathname !== lastPathRef.current) {
      const frame = requestAnimationFrame(() => setOpen(false));
      lastPathRef.current = pathname;
      return () => cancelAnimationFrame(frame);
    }

    return undefined;
  }, [pathname, open]);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-white/85 backdrop-blur-xl">
        <Container className="flex items-center justify-between gap-6 py-4">
          <div className="flex items-center gap-3">
            {renderLogo(leftLogoHref, `${BRAND.name} home link`)}
          </div>
          <nav className="hidden items-center gap-8 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-muted/80 md:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-ink",
                  pathname === item.href && "text-accent"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={bookNowLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-5 py-2 text-xs tracking-[0.35em] text-ink transition hover:border-accent hover:bg-accent hover:text-white"
            >
              {CTA_COPY.bookNow}
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            {renderLogo(rightLogoHref, "Hair boutique link", "hidden sm:flex")}
            <button
              type="button"
              onClick={toggleMenu}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-ink transition hover:border-accent hover:text-accent md:hidden"
              aria-label={open ? "Close navigation" : "Open navigation"}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              <span className="sr-only">Toggle navigation</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {open ? (
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </Container>
      </header>
      <div
        className={cn(
          "fixed inset-0 z-40 bg-ink/20 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        aria-hidden
        onClick={closeMenu}
      />
      <nav
        id="mobile-nav"
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-72 flex-col bg-white px-6 py-12 shadow-[-24px_0_60px_rgba(58,36,33,0.15)] transition-transform duration-300 md:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="mb-8 flex items-center justify-between">
          <p className="text-xs font-semibold tracking-[0.35em] text-muted/70">{BRAND.name.toUpperCase()}</p>
          <button type="button" onClick={closeMenu} aria-label="Close menu" className="rounded-full border border-border p-2 text-ink transition hover:border-accent hover:text-accent">
            ✕
          </button>
        </div>
        <ul className="flex flex-col gap-6 text-base font-medium tracking-[0.2em] text-ink/80">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="block uppercase" onClick={closeMenu}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={bookNowLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-ink transition hover:border-accent hover:bg-accent hover:text-white"
          onClick={closeMenu}
        >
          {CTA_COPY.bookNow}
        </Link>
      </nav>
    </>
  );
}
