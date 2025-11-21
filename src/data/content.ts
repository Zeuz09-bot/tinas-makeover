import { BRAND, STOCK_PHOTOS } from "@/lib/site";

export interface GalleryMediaItem {
  src: string;
  alt: string;
  isVideo?: boolean;
  videoUrl?: string;
  label?: string;
}

export interface ServiceDetail {
  slug: string;
  category: "makeup" | "hair";
  title: string;
  heroImage: string;
  summary: string;
  description: string[];
  highlights: string[];
  includes: string[];
  gallery: GalleryMediaItem[];
}

const createImageEntries = (basePath: string, files: string[], altPrefix: string): GalleryMediaItem[] =>
  files.map((file, index) => ({
    src: `${basePath}${file}`,
    alt: `${altPrefix} ${index + 1}`,
  }));

const createVideoEntries = (
  items: { poster: string; video: string; alt: string; label?: string }[]
): GalleryMediaItem[] =>
  items.map(({ poster, video, alt, label }) => ({
    src: poster,
    alt,
    label,
    isVideo: true,
    videoUrl: video,
  }));

const bridalMakeupGallery: GalleryMediaItem[] = [
  ...createImageEntries(
    "/images/queen-b/bridal/",
    [
      "IMG_0231.jpg",
      "IMG_0232.jpg",
      "IMG_0422.JPG",
      "IMG_0457.jpg",
      "IMG_0459.jpg",
      "IMG_0460.jpg",
      "IMG_0469.jpg",
      "IMG_9271.jpg",
      "ZHK-2.jpg",
      "ZHK-4.jpg",
      "weddings (1).jpg",
      "weddings (2).jpg",
      "weddings (3).jpg",
      "weddings (4).JPG",
      "weddings (5).jpg",
      "weddings (6).jpg",
      "weddings (7).jpg",
      "weddings (8).jpg",
      "weddings (9).jpg",
      "weddings (10).jpg",
      "weddings_(1).jpg",
      "weddings_(2).jpg",
    ],
    "Bridal glam look"
  ),
];

const eventGlamGallery: GalleryMediaItem[] = [
  ...createImageEntries(
    "/images/queen-b/birthdays/",
    [
      "IMG_0418.jpg",
      "IMG_0461.jpg",
      "IMG_0463.jpg",
      "IMG_0465.jpg",
      "IMG_6829.jpg",
      "IMG_8234.jpg",
      "IMG_8264.jpg",
      "IMG_8267.jpg",
      "birthdays (1).jpg",
      "birthdays (2).jpg",
      "birthdays (3).jpg",
      "birthdays (4).jpg",
      "birthdays (5).jpg",
      "birthdays (6).jpg",
      "birthdays (7).jpg",
      "birthdays (8).jpg",
      "birthdays_(1).jpg",
      "birthdays_(2).jpg",
      "birthdays_(3).jpg",
      "birthdays_(4).jpg",
    ],
    "Birthday glam moment"
  ),
];

const photoShootGallery: GalleryMediaItem[] = [
  ...createImageEntries(
    "/images/queen-b/photoshoot/",
    [
      "PHOTO SHOOT (1).jpg",
      "PHOTO SHOOT (2).jpg",
      "PHOTO SHOOT (3).jpg",
    ],
    "Editorial photoshoot capture"
  ),
];

const specialOccasionsGallery: GalleryMediaItem[] = [
  ...createImageEntries(
    "/images/queen-b/special-occasions/",
    [
      "320925BF-50C3-45DA-A4EF-8F9EA4CD00A0.JPG",
      "IMG_0454.jpg",
      "IMG_0455.jpg",
      "IMG_0926.jpg",
      "IMG_0927.jpg",
      "IMG_0928.jpg",
      "IMG_0929.jpg",
      "SPECIAL OCASSIONS (1).JPG",
      "SPECIAL OCASSIONS (2).jpg",
      "SPECIAL OCASSIONS (3).jpg",
      "SPECIAL OCASSIONS (4).jpg",
      "SPECIAL OCASSIONS (5).jpg",
      "SPECIAL OCASSIONS (6).jpg",
      "SPECIAL OCASSIONS (7).jpg",
      "SPECIAL_OCASSIONS_(1).jpg",
    ],
    "Special occasions glam"
  ),
];

const makeupTrainingGallery: GalleryMediaItem[] = [
  ...createVideoEntries([
    {
      poster: "/images/queen-b/home.webp",
      video: "/images/queen-b/tutorials/3c61f08bfb1c46af891d5e80ae65744f.MP4",
      alt: "Training tutorial 1",
      label: "Training Tutorial",
    },
    {
      poster: "/images/queen-b/home.webp",
      video: "/images/queen-b/tutorials/4a186712b8124107a712e3b7f8770b13.MP4",
      alt: "Training tutorial 2",
      label: "Training Tutorial",
    },
    {
      poster: "/images/queen-b/home.webp",
      video: "/images/queen-b/tutorials/TUTORIALS (1).MP4",
      alt: "Training tutorial 3",
      label: "Training Tutorial",
    },
    {
      poster: "/images/queen-b/home.webp",
      video: "/images/queen-b/tutorials/TUTORIALS (1).mov",
      alt: "Training tutorial 4",
      label: "Training Tutorial",
    },
    {
      poster: "/images/queen-b/home.webp",
      video: "/images/queen-b/tutorials/TUTORIALS (2).MP4",
      alt: "Training tutorial 5",
      label: "Training Tutorial",
    },
    {
      poster: "/images/queen-b/home.webp",
      video: "/images/queen-b/tutorials/TUTORIALS (3).MP4",
      alt: "Training tutorial 6",
      label: "Training Tutorial",
    },
    {
      poster: "/images/queen-b/home.webp",
      video: "/images/queen-b/tutorials/RPReplay_Final1763318148.mov",
      alt: "Training tutorial 7",
      label: "Training Tutorial",
    },
    {
      poster: "/images/queen-b/home.webp",
      video: "/images/queen-b/tutorials/c8c13f9fe7854b1295db30706dbd429c.MP4",
      alt: "Training tutorial 8",
      label: "Training Tutorial",
    },
  ]),
];

const bridalHairGallery: GalleryMediaItem[] = [
  ...createImageEntries(
    "/images/queen-b/hair-installation/",
    [
      "BRIDAL HAIR INSTALLATION (1).jpg",
      "HAIR INSTALLATION (1).PNG",
      "HAIR INSTALLATION (1).jpg",
      "HAIR INSTALLATION (2).jpg",
      "HAIR INSTALLATION (3).jpg",
      "HAIR_INSTALLATION_(1).jpg",
      "IMG_0420.PNG",
      "IMG_0421.jpg",
      "IMG_0928.jpg",
    ],
    "Bridal hair installation"
  ),
  ...createVideoEntries([
    {
      poster: "/images/queen-b/hair-installation/IMG_0421.jpg",
      video: "/images/queen-b/hair-installation/091d425f8167410eae2508753cbfde79.MOV",
      alt: "Bridal install clip 1",
    },
    {
      poster: "/images/queen-b/hair-installation/IMG_0421.jpg",
      video: "/images/queen-b/hair-installation/9c1cec86aec64cf29a449a5099759634.MOV",
      alt: "Bridal install clip 2",
    },
    {
      poster: "/images/queen-b/hair-installation/IMG_0421.jpg",
      video: "/images/queen-b/hair-installation/BRIDAL HAIR INSTALLATION (1).mov",
      alt: "Bridal install clip 3",
    },
    {
      poster: "/images/queen-b/hair-installation/IMG_0421.jpg",
      video: "/images/queen-b/hair-installation/BRIDAL HAIR INSTALLATION (2).mov",
      alt: "Bridal install clip 4",
    },
    {
      poster: "/images/queen-b/hair-installation/IMG_0421.jpg",
      video: "/images/queen-b/hair-installation/HAIR INSTALLATION (1).MOV",
      alt: "Bridal install clip 5",
    },
    {
      poster: "/images/queen-b/hair-installation/IMG_0421.jpg",
      video: "/images/queen-b/hair-installation/HAIR INSTALLATION (2).MOV",
      alt: "Bridal install clip 6",
    },
    {
      poster: "/images/queen-b/hair-installation/IMG_0421.jpg",
      video: "/images/queen-b/hair-installation/HAIR INSTALLATION (3).MOV",
      alt: "Bridal install clip 7",
    },
    {
      poster: "/images/queen-b/hair-installation/IMG_0421.jpg",
      video: "/images/queen-b/hair-installation/HAIR INSTALLATION (4).MOV",
      alt: "Bridal install clip 8",
    },
    {
      poster: "/images/queen-b/hair-installation/IMG_0421.jpg",
      video: "/images/queen-b/hair-installation/HAIR INSTALLATION (5).mov",
      alt: "Bridal install clip 9",
    },
    {
      poster: "/images/queen-b/hair-installation/IMG_0421.jpg",
      video: "/images/queen-b/hair-installation/HAIR INSTALLATION (6).MOV",
      alt: "Bridal install clip 10",
    },
    {
      poster: "/images/queen-b/hair-installation/IMG_0421.jpg",
      video: "/images/queen-b/hair-installation/HAIR INSTALLATION (7).mov",
      alt: "Bridal install clip 11",
    },
    {
      poster: "/images/queen-b/hair-installation/IMG_0421.jpg",
      video: "/images/queen-b/hair-installation/HAIR INSTALLATION (8).mov",
      alt: "Bridal install clip 12",
    },
    {
      poster: "/images/queen-b/hair-installation/IMG_0421.jpg",
      video: "/images/queen-b/hair-installation/HAIR INSTALLATION (9).mov",
      alt: "Bridal install clip 13",
    },
    {
      poster: "/images/queen-b/hair-installation/IMG_0421.jpg",
      video: "/images/queen-b/hair-installation/d451497445a7457480f0f9ebf64d76fc.MOV",
      alt: "Bridal install clip 14",
    },
  ]),
];

const hairRevampGallery: GalleryMediaItem[] = [
  ...createImageEntries(
    "/images/queen-b/hair-revamping/",
    ["HAIR REVAMP (1).jpg", "HAIR REVAMP (2).jpg"],
    "Hair revamp result"
  ),
  ...createVideoEntries([
    {
      poster: "/images/queen-b/hair-revamping/HAIR REVAMP (1).jpg",
      video: "/images/queen-b/hair-revamping/HAIR REVAMP (1).MOV",
      alt: "Hair revamp process 1",
    },
    {
      poster: "/images/queen-b/hair-revamping/HAIR REVAMP (2).jpg",
      video: "/images/queen-b/hair-revamping/HAIR REVAMP (2).MOV",
      alt: "Hair revamp process 2",
    },
    {
      poster: "/images/queen-b/hair-revamping/HAIR REVAMP (1).jpg",
      video: "/images/queen-b/hair-revamping/HAIR REVAMP (3).MOV",
      alt: "Hair revamp process 3",
    },
  ]),
];

const wiggingColoringGallery: GalleryMediaItem[] = [
  ...createImageEntries(
    "/images/queen-b/hair/",
    [
      "HAIR (1).jpg",
      "HAIR (2).jpg",
      "HAIR (3).jpg",
      "HAIR (4).jpg",
      "HAIR (5).jpg",
      "HAIR (6).jpg",
      "IMG_1034.jpg",
      "IMG_1036.jpg",
      "IMG_1040.jpg",
      "IMG_1044.jpg",
      "IMG_1051.jpg",
      "IMG_6949.jpg",
    ],
    "Wigging & coloring detail"
  ),
  ...createVideoEntries([
    {
      poster: "/images/queen-b/hair/IMG_1044.jpg",
      video: "/images/queen-b/hair/315305c8071c45f3b4d0b6e8fd47598e.MOV",
      alt: "Color melt transformation 1",
    },
    {
      poster: "/images/queen-b/hair/IMG_1044.jpg",
      video: "/images/queen-b/hair/950bb325491e498ba3c608bbacfe2521.MOV",
      alt: "Color melt transformation 2",
    },
  ]),
];

export interface ServicePackage {
  title: string;
  description: string;
  image: string;
  highlights: string[];
  href: string;
}

export const makeupPackages: ServicePackage[] = [
  {
    title: "Weddings",
    description: "Bridal makeup artistry for timeless ceremonies and destination celebrations.",
    image: STOCK_PHOTOS.bridalBouquet,
    highlights: ["Touch-up kit included", "Custom skin prep & finish", "Vendor-aligned timelines"],
    href: "/services/bridal-makeup",
  },
  {
    title: "Birthdays",
    description: "Glamorous birthday looks tailored to your theme and outfit styling.",
    image: STOCK_PHOTOS.eventGlam,
    highlights: ["Editorial-inspired finishes", "Camera-ready glow", "Flexible on-site service"],
    href: "/services/event-glam",
  },
  {
    title: "Special Occasions",
    description: "Elevated glam for dinners, red-carpet moments, graduations, and intimate celebrations.",
    image: "/images/queen-b/special-occasions/320925BF-50C3-45DA-A4EF-8F9EA4CD00A0.JPG",
    highlights: [
      "Soft or statement glam tailored to your event",
      "Looks that photograph beautifully in any lighting",
      "Flexible timing to fit your celebration schedule",
    ],
    href: "/services/special-occasions",
  },
  {
    title: "Photo Shoots",
    description: "Studio lighting-ready makeup for campaigns, commercials, and creatives.",
    image: STOCK_PHOTOS.glamCloseup,
    highlights: ["Long-wear formulations", "Wardrobe-coordinated palettes", "On-set touch-ups"],
    href: "/services/photoshoot-glam",
  },
  {
    title: "Trainings",
    description: "Hands-on classes and mentorship for aspiring makeup professionals.",
    image: STOCK_PHOTOS.trainingSession,
    highlights: ["Pro kit guidance", "Look-and-learn demos", "Certification available"],
    href: "/services/makeup-training",
  },
];

export const hairPackages: ServicePackage[] = [
  {
    title: "Bridal Hair Installation",
    description: "Romantic bridal installs, veil placement, and statement accessories.",
    image: STOCK_PHOTOS.bridalHairDetail,
    highlights: ["Custom styling plan", "Secure all-day hold", "Veil & accessory fitting"],
    href: "/services/bridal-hair-install",
  },
  {
    title: "Hair Revamping",
    description: "Restore volume, shine, and bounce with professional revamp treatments.",
    image: STOCK_PHOTOS.hairModel,
    highlights: ["Hydration therapy", "Cut & reshape", "Polished blowout finish"],
    href: "/services/hair-revamp",
  },
  {
    title: "Wigging & Coloring",
    description: "Precision wig customization, coloring, and maintenance services.",
    image: STOCK_PHOTOS.wigStyling,
    highlights: ["Glueless installs", "Balayage & highlights", "Protective styling"],
    href: "/services/wigging-coloring",
  },
  {
    title: "Hair Products Available",
    description: "Explore our curated boutique of ready-to-wear units, closures, and luxury wigs.",
    image: "/images/queen-b/hair-product-available/20''BOUNCY UNIT.jpg",
    highlights: [
      "Hand-picked premium hair pieces",
      "Limited boutique collections",
      "Order via WhatsApp for pickup or delivery",
    ],
    href: "/products",
  },
];

export const makeupHighlights = [
  "Personalized glam blueprints",
  "Premium, photo-ready products",
  "Flexible on-location styling",
];

export const hairHighlights = [
  "Bridal specialists & wig artisans",
  "Healthy hair-first techniques",
  "Luxury extensions & accessories",
];

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "bridal-makeup",
    category: "makeup",
    title: "Bridal Makeup Experience",
    heroImage: STOCK_PHOTOS.bridalBouquet,
    summary:
      "Create a long-lasting, elegant, and timeless glow for your wedding day with luxe skin prep, bespoke palettes, and calm artistry on set.",
    description: [
      "Hello Tee Brides, we create a long-lasting, elegant, and timeless look for your wedding day, emphasizing flawless skin and customized features to match your style, dress, and theme.",
      "We invite every bride to share how she wants to look and feel. From your morning preparations to the final dance, our products are selected to stay radiant through emotional moments, dancing, and Lagos weather—always camera-ready without flashback.",
      "You will look the best you’ve ever looked and enjoy every minute with us. Watching our brides shine from within with happiness and confidence is our favorite part of the celebration.",
    ],
    highlights: [
      "Personal consultation & trial session",
      "HD, long-wear, camera-ready finish",
      "Luxury touch-up kit for the day",
    ],
    includes: [
      "Pre-wedding beauty consultation",
      "Custom skincare prep & color matching",
      "Bridal party add-ons available",
      "Timeline coordination with your planner",
    ],
    gallery: bridalMakeupGallery,
  },
  {
    slug: "event-glam",
    category: "makeup",
    title: "Event & Birthday Glam",
    heroImage: STOCK_PHOTOS.eventGlam,
    summary:
      "Statement looks for birthdays, red carpet moments, and celebrations where you want to steal the spotlight without losing yourself.",
    description: [
      "Our event glam blends radiant skin finishes with defined eyes and lips that photograph beautifully under any lighting.",
      "We keep the conversation collaborative, weaving your outfit, accessories, and mood board into a polished, feminine look that lasts all night.",
      "Maintain studio-fresh shine by storing in the included satin bag and hydrating weekly with leave-in conditioner. As a professional team, we’re happy to walk you through styling routines over WhatsApp or in-person at the studio.",
    ],
    highlights: [
      "Editorial-inspired techniques",
      "Touch-up guidance for the evening",
      "On-location styling available",
    ],
    includes: [
      "Detailed skin prep & priming",
      "Custom eye and lip combinations",
      "Optional glitter & statement accents",
    ],
    gallery: eventGlamGallery,
  },
  {
    slug: "special-occasions",
    category: "makeup",
    title: "Special Occasions Glam",
    heroImage: "/images/queen-b/special-occasions/320925BF-50C3-45DA-A4EF-8F9EA4CD00A0.JPG",
    summary:
      "Elevated glam for dinners, graduations, red-carpet events, and intimate celebrations where you want to feel unforgettable.",
    description: [
      "From soft, romantic glam to bold, camera-ready looks, we design your makeup around the mood, dress code, and venue of your special occasion.",
      "We pay close attention to undertones, lighting conditions, and how long you need your look to last so you stay confident from first photo to final toast.",
    ],
    highlights: [
      "Looks tailored to your outfit and event vibe",
      "Long-wear, comfortable finishes",
      "Options for subtle or statement detail work",
    ],
    includes: [
      "Event-focused skin prep and priming",
      "Custom eye, lip, and complexion design",
      "Touch-up guidance for the rest of your celebration",
    ],
    gallery: specialOccasionsGallery,
  },
  {
    slug: "photoshoot-glam",
    category: "makeup",
    title: "Photo Shoot Beauty",
    heroImage: STOCK_PHOTOS.glamCloseup,
    summary:
      "Studio lighting-ready makeup for campaigns, commercials, and editorial concepts that need dimension and durability.",
    description: [
      "We collaborate with creative directors and photographers to deliver looks that hold up under HD lenses, continuous lighting, and quick changes.",
      "Expect complexion-perfecting techniques, camera-proof textures, and on-set touch-ups to keep the vision consistent across frames.",
    ],
    highlights: [
      "Wardrobe-coordinated palettes",
      "On-set standby for touch-ups",
      "Flawless complexion and sculpting",
    ],
    includes: [
      "Pre-shoot concept alignment",
      "Full makeup application & revisions",
      "Optional hair styling add-on",
    ],
    gallery: photoShootGallery,
  },
  {
    slug: "makeup-training",
    category: "makeup",
    title: "Makeup Trainings & Masterclasses",
    heroImage: STOCK_PHOTOS.trainingSession,
    summary:
      "Hands-on mentorship for aspiring artists who want to refine technique, build premium kits, and grow a thriving beauty brand.",
    description: [
      "Our trainings combine theory, demos, and supervised practice so you can build confidence across bridal, editorial, and everyday looks.",
      "We focus on business readiness too—pricing, client experience, and kit curation that sets you apart.",
    ],
    highlights: [
      "Look-and-learn & practical sessions",
      "Personalized feedback on technique",
      "Certification on completion",
    ],
    includes: [
      "Comprehensive curriculum materials",
      "Product knowledge & kit building",
      "Business and branding modules",
    ],
    gallery: makeupTrainingGallery,
  },
  {
    slug: "bridal-hair-install",
    category: "hair",
    title: "Bridal Hair Installation",
    heroImage: STOCK_PHOTOS.bridalHairDetail,
    summary:
      "Romantic installs, veil placement, and accessory styling that stay picture-perfect from vows to after-party.",
    description: [
      "We design a custom hair blueprint that celebrates your dress neckline, face shape, and wedding theme.",
      "From protective prep to final spritz, every step ensures longevity, comfort, and effortless movement.",
    ],
    highlights: [
      "Secure, lightweight installs",
      "Veil & accessory fitting",
      "On-site stylist support",
    ],
    includes: [
      "Consultation & trial styling",
      "Installation on wedding morning",
      "Emergency touch-up kit",
    ],
    gallery: bridalHairGallery,
  },
  {
    slug: "hair-revamp",
    category: "hair",
    title: "Hair Revamp & Restoration",
    heroImage: STOCK_PHOTOS.hairModel,
    summary:
      "Transform tired wigs and extensions with shine-boosting treatments, reshaping, and polished finishing.",
    description: [
      "We detox, deep-condition, and re-style your units or natural hair for renewed softness and volume.",
      "Expect precise trims, fresh curls or sleek finishes, and protective sealing for lasting wear.",
    ],
    highlights: [
      "Hydration & gloss therapy",
      "Cut and reshape included",
      "Thermal finishing tailored to you",
    ],
    includes: [
      "Clarifying cleanse & treatment",
      "Customized styling",
      "Post-care instructions",
    ],
    gallery: hairRevampGallery,
  },
  {
    slug: "wigging-coloring",
    category: "hair",
    title: "Wigging & Luxe Coloring",
    heroImage: STOCK_PHOTOS.wigStyling,
    summary:
      "Precision wig customization, balayage coloring, and maintenance routines for show-stopping crowns.",
    description: [
      "We tailor lace wigs to melt flawlessly with your skin tone, adjust densities, and tint knots for invisible installs.",
      "Choose from soft glam hues to bold color blocking—our coloring methods keep fibre integrity intact.",
    ],
    highlights: [
      "Glueless, breathable installs",
      "Balayage & tonal customization",
      "Protective wig maintenance plan",
    ],
    includes: [
      "Lace customization & plucking",
      "Color consultation & mixing",
      "Take-home care guide",
    ],
    gallery: wiggingColoringGallery,
  },
];

const formatGalleryItems = (services: ServiceDetail[]) =>
  services.flatMap((service) =>
    service.gallery.map((media) => ({
      ...media,
      alt: media.alt || `${service.title} inspiration`,
      label: service.title,
    }))
  );

const standaloneVideoGallery: GalleryMediaItem[] = createVideoEntries([
  {
    poster: STOCK_PHOTOS.galleryVideoPoster,
    video: "/images/queen-b/gallery/videos/GALLERY (1).MP4",
    alt: "Studio gallery video 1",
    label: "Gallery Video",
  },
  {
    poster: STOCK_PHOTOS.galleryVideoPoster,
    video: "/images/queen-b/gallery/videos/GALLERY (2).MP4",
    alt: "Studio gallery video 2",
    label: "Gallery Video",
  },
  {
    poster: STOCK_PHOTOS.galleryVideoPoster,
    video: "/images/queen-b/gallery/videos/GALLERY (3).MP4",
    alt: "Studio gallery video 3",
    label: "Gallery Video",
  },
  {
    poster: STOCK_PHOTOS.galleryVideoPoster,
    video: "/images/queen-b/gallery/videos/GALLERY (4).MP4",
    alt: "Studio gallery video 4",
    label: "Gallery Video",
  },
  {
    poster: STOCK_PHOTOS.galleryVideoPoster,
    video: "/images/queen-b/gallery/videos/GALLERY (5).MP4",
    alt: "Studio gallery video 5",
    label: "Gallery Video",
  },
  {
    poster: STOCK_PHOTOS.galleryVideoPoster,
    video: "/images/queen-b/gallery/videos/14cb673227e64712afafda5b5fd560cb.MP4",
    alt: "Studio gallery video 6",
    label: "Gallery Video",
  },
  {
    poster: STOCK_PHOTOS.galleryVideoPoster,
    video: "/images/queen-b/gallery/videos/46a4bdf601e747ee9609c228f9829d86.MP4",
    alt: "Studio gallery video 7",
    label: "Gallery Video",
  },
  {
    poster: STOCK_PHOTOS.galleryVideoPoster,
    video: "/images/queen-b/gallery/videos/7f702216434e4ae2b76e3b8cca8673f1.MP4",
    alt: "Studio gallery video 8",
    label: "Gallery Video",
  },
  {
    poster: STOCK_PHOTOS.galleryVideoPoster,
    video: "/images/queen-b/gallery/videos/dddae93b3c5445a4a8be927c482a016e.MP4",
    alt: "Studio gallery video 9",
    label: "Gallery Video",
  },
  {
    poster: STOCK_PHOTOS.galleryVideoPoster,
    video: "/images/queen-b/gallery/videos/e1d71dd4c0b946ceae08a531f507157e.MP4",
    alt: "Studio gallery video 10",
    label: "Gallery Video",
  },
]);

export const galleryCollections: Array<{
  title: string;
  items: GalleryMediaItem[];
}> = [
  {
    title: "All Services",
    items: formatGalleryItems(serviceDetails),
  },
  {
    title: "Makeup Services",
    items: formatGalleryItems(serviceDetails.filter((service) => service.category === "makeup")),
  },
  {
    title: "Hair Services",
    items: formatGalleryItems(serviceDetails.filter((service) => service.category === "hair")),
  },
  {
    title: "Videos",
    items: [
      ...formatGalleryItems(serviceDetails).filter((item) => item.isVideo),
      ...standaloneVideoGallery,
    ],
  },
  ...serviceDetails.map((service) => ({
    title: service.title,
    items: service.gallery,
  })),
];

export interface ProductItem {
  slug: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  gallery: GalleryMediaItem[];
}

export const productItems: ProductItem[] = [
  {
    slug: "20-bouncy-unit",
    title: "20\" Bouncy Unit",
    description:
      "20-inch bouncy luxury unit perfect for everyday glam and special occasions.",
    image: "/images/queen-b/hair-product-available/20''BOUNCY UNIT.jpg",
    features: [
      "Soft, bouncy texture with premium volume",
      "Pre-styled for easy wear",
      "Ideal for birthdays, events, and everyday looks",
    ],
    gallery: [
      { src: "/images/queen-b/hair-product-available/20''BOUNCY UNIT.jpg", alt: "20\" Bouncy Unit" },
    ],
  },
  {
    slug: "5-by-3-bouncy-wig",
    title: "5x3 Bouncy Wig",
    description:
      "Hand-picked bouncy wig with full density for statement glam and soft movement.",
    image: "/images/queen-b/hair-product-available/5 BY 3 BOUNCY WIG.jpg",
    features: [
      "Balanced volume for everyday or event wear",
      "Comfortable fit for long hours",
      "Perfect for soft, feminine glam",
    ],
    gallery: [
      { src: "/images/queen-b/hair-product-available/5 BY 3 BOUNCY WIG.jpg", alt: "5x3 Bouncy Wig" },
    ],
  },
  {
    slug: "5x5-sod-virgin-3tone-pixxy-wig-16",
    title: "5x5 SOD Virgin 3-Tone Pixxy Wig 16\"",
    description:
      "Luxury 3-tone pixxy wig in 16 inches with a soft, feminine finish.",
    image:
      "/images/queen-b/hair-product-available/5X5 SOD VIRGIN 3TONE PIXXY WIG 16'' (1).jpg",
    features: [
      "Soft blend of three complementary tones",
      "5x5 closure for a natural-looking part",
      "Ideal for clients who love color with subtle dimension",
    ],
    gallery: [
      {
        src: "/images/queen-b/hair-product-available/5X5 SOD VIRGIN 3TONE PIXXY WIG 16'' (1).jpg",
        alt: "5x5 SOD Virgin 3-Tone Pixxy Wig 16\"",
      },
    ],
  },
  {
    slug: "sod-phillipine-lux-unit",
    title: "SOD Phillipine Lux Unit",
    description:
      "Very full Phillipine Lux unit with dark root chestnut tones for rich, luxe glam.",
    image:
      "/images/queen-b/hair-product-available/SOD PHILLIPINE LUX UNIT IN DARK ROOT CHENSNUT HAIR, VERY FULL, FACTORY MADE.jpg",
    features: [
      "Full density for high-impact silhouettes",
      "Dark root chestnut blend for depth",
      "Factory-made finish for consistent quality",
    ],
    gallery: [
      {
        src: "/images/queen-b/hair-product-available/SOD PHILLIPINE LUX UNIT IN DARK ROOT CHENSNUT HAIR, VERY FULL, FACTORY MADE.jpg",
        alt: "SOD Phillipine Lux Unit",
      },
    ],
  },
];

export const brandNarrative =
  "As a professional makeup collective and hair studio, we specialize in crafting flawless, custom looks tailored to your unique style and personality—whether for weddings, special occasions, or everyday glam.";

export const makeupNarratives = {
  bridal:
    "Hello Tee Brides, we create a long-lasting, elegant, and timeless look for your wedding day, emphasizing flawless skin and customized features to match your style, dress, and theme. We invite every bride to share exactly how she wants to look and feel on her special day. Our products and techniques are selected to last through emotional moments, dancing, and unpredictable weather while looking beautiful in person and in photos without flashback. We will make you look the best you have ever looked, and you will enjoy spending the day with us. Seeing our brides shine with happiness and confidence is our favorite part of the job.",
  casual:
    "Our goal is to enhance natural features with a dewy, radiant skin finish and defined yet natural lashes and lips. This look comes together quickly, often in under 30 minutes, making it ideal for everyday wear. We aim to make you look like a polished version of yourself.",
};

export const aboutNarrative = {
  headline: `About ${BRAND.name}`,
  story:
    "As a professional makeup collective and hair studio, we specialize in crafting flawless, custom looks tailored to your unique style and personality—whether for weddings, special occasions, or everyday glam.",
  mission:
    "Every application is customized to your vision, whether you want clean, camera-ready looks or soft glam that feels timeless and elegant.",
  promise:
    "From bridal makeup to casual glow-ups, our team delivers artistry that lasts through every hug, dance floor moment, and camera flash.",
};

export const founderSpotlight = {
  name: "Justina Bisola Oladipo",
  role: "Founder & Lead Artist",
  image: STOCK_PHOTOS.founderPortrait,
  bio: "Passionate about empowering women through beauty, Tina has built a reputation for creating stunning, personalized looks that celebrate each client's unique features and style.",
};
