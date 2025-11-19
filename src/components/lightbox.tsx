"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";

interface LightboxProps {
  open: boolean;
  src: string;
  alt: string;
  onClose: () => void;
  isVideo?: boolean;
  videoUrl?: string;
}

export function Lightbox({ open, src, alt, onClose, isVideo, videoUrl }: LightboxProps) {
  const closeOnEsc = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (!open) return undefined;
    document.addEventListener("keydown", closeOnEsc);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", closeOnEsc);
      document.body.style.overflow = previous;
    };
  }, [closeOnEsc, open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/40 p-6 backdrop-blur"
      onClick={onClose}
    >
      <div
        className="relative max-h-full max-w-5xl overflow-hidden rounded-3xl border border-border bg-white shadow-[0_30px_80px_rgba(217,138,163,0.2)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/90 text-ink shadow"
          onClick={onClose}
          aria-label="Close lightbox"
        >
          ×
        </button>
        {isVideo && videoUrl ? (
          <video
            src={videoUrl}
            controls
            autoPlay
            loop
            className="h-full w-full bg-black object-contain"
            poster={src}
          />
        ) : (
          <Image src={src} alt={alt} width={1280} height={720} className="h-full w-full object-contain" />
        )}
      </div>
    </div>
  );
}
