"use client";

import { useState } from "react";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { galleryCollections } from "@/data/content";
import { STOCK_PHOTOS } from "@/lib/site";
import { Lightbox } from "@/components/lightbox";

export default function GalleryPage() {
  const [activeMedia, setActiveMedia] = useState<{
    src: string;
    alt: string;
    isVideo?: boolean;
    videoUrl?: string;
  } | null>(null);
  const [activeCollection, setActiveCollection] = useState<string>("All");

  const filterLabels = ["All", ...galleryCollections.map((collection) => collection.title)];
  const visibleCollections =
    activeCollection === "All"
      ? galleryCollections
      : galleryCollections.filter((collection) => collection.title === activeCollection);

  const mediaCount = galleryCollections.reduce((acc, collection) => acc + collection.items.length, 0);
  const videoCount = galleryCollections.reduce(
    (acc, collection) => acc + collection.items.filter((item) => item.isVideo).length,
    0
  );

  const galleryStats = [
    { label: "Curated collections", value: galleryCollections.length.toString() },
    { label: "Images & reels", value: mediaCount.toString() },
    { label: "Video features", value: videoCount.toString() },
  ];

  return (
    <div className="bg-gradient-to-b from-[#fff7fb] via-white to-[#fffaf5] text-ink">
      <PageHero
        eyebrow="Portfolio"
        title="Gallery"
        subtitle="A glimpse into our recent glam transformations, bridal moments, and editorial artistry."
        image={STOCK_PHOTOS.galleryVideoPoster}
        overlayStrength="soft"
      />
      <Container className="space-y-12 py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">
          <SectionHeading
            eyebrow="Our Portfolio"
            title="Makeup & Hair Stories"
            subtitle="See how our clients shine—swipe inspiration for your upcoming celebration, photoshoot, or training."
            description="Filter by category or browse everything to find looks that match your mood board."
          />
          <div className="rounded-3xl border border-border/70 bg-white/80 p-6 shadow-[0_24px_60px_rgba(217,138,163,0.12)]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted/70">Gallery stats</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {galleryStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-gradient-to-br from-[#fde4ee] via-white to-white px-4 py-3 text-center">
                  <p className="text-2xl font-semibold text-accent">{stat.value}</p>
                  <p className="text-[0.65rem] uppercase tracking-[0.35em] text-muted/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-muted/70">
          {filterLabels.map((label) => (
            <button
              key={label}
              type="button"
              onClick={() => setActiveCollection(label)}
              className={`rounded-full border px-4 py-2 backdrop-blur transition ${
                activeCollection === label
                  ? "border-transparent bg-gradient-to-r from-accent to-[#fd9bbf] text-white shadow-[0_18px_40px_rgba(217,138,163,0.35)]"
                  : "border-border/60 bg-white/70 text-ink hover:border-accent hover:text-accent"
              }`}
              aria-pressed={activeCollection === label}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="space-y-16">
          {visibleCollections.map((collection) => (
            <section key={collection.title} className="space-y-6">
              <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-muted/60">Collection</p>
                  <h3 className="font-display text-3xl tracking-[0.25em] text-ink md:text-4xl">{collection.title}</h3>
                </div>
                <p className="text-sm text-muted/70">
                  {collection.items.length} looks • {collection.items.filter((item) => item.isVideo).length} videos
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {collection.items.map((item, index) => (
                  <button
                    key={`${collection.title}-${item.src}-${item.isVideo ? "video" : "image"}-${index}`}
                    type="button"
                    onClick={() => setActiveMedia(item)}
                    className="group relative overflow-hidden rounded-[32px] border border-border/70 bg-white/90 shadow-[0_24px_60px_rgba(217,138,163,0.16)] transition hover:-translate-y-1"
                    aria-label={`Open ${collection.title} media: ${item.alt}`}
                  >
                    <div className="relative aspect-square w-full overflow-hidden">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent opacity-0 transition group-hover:opacity-100" />
                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-4 py-3 text-[0.65rem] uppercase tracking-[0.35em] text-white">
                      <span>{item.label ?? collection.title}</span>
                      {item.isVideo ? <span className="rounded-full bg-white/30 px-2 py-1 text-[0.55rem]">Video</span> : null}
                    </div>
                  </button>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
      <Lightbox
        open={Boolean(activeMedia)}
        src={activeMedia?.src ?? ""}
        alt={activeMedia?.alt ?? ""}
        isVideo={activeMedia?.isVideo}
        videoUrl={activeMedia?.videoUrl}
        onClose={() => setActiveMedia(null)}
      />
    </div>
  );
}
