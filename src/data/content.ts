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
      "9C195688-E296-43A3-ACFC-29BD3D5A6E2F.HEIC",
      "CFB1A762-ED6F-4782-B9C8-A54EDA0B00A2.HEIC",
      "IMG_0231.jpg",
      "IMG_0232.jpg",
      "IMG_0422.JPG",
      "IMG_0459.jpg",
      "IMG_0469.jpg",
      "IMG_9271.jpg",
      "ZHK-2.jpg",
      "ZHK-4.jpg",
    ],
    "Bridal glam look"
  ),
  ...createVideoEntries([
    {
      poster: "/images/queen-b/bridal/IMG_0231.jpg",
      video: "/images/queen-b/tutorials/4a186712b8124107a712e3b7f8770b13.MP4",
      alt: "Bridal tutorial behind the scenes",
    },
  ]),
];

const eventGlamGallery: GalleryMediaItem[] = [
  ...createImageEntries(
    "/images/queen-b/birthdays/",
    [
      "Facetune_28-08-2025-16-23-49.HEIC",
      "IMG_0418.jpg",
      "IMG_0461.jpg",
      "IMG_0463.jpg",
      "IMG_0465.jpg",
      "IMG_6829.jpg",
      "IMG_7379.HEIC",
      "IMG_8073.HEIC",
      "IMG_8074.HEIC",
      "IMG_8234.jpg",
      "IMG_8264.jpg",
      "IMG_8267.jpg",
    ],
    "Birthday glam moment"
  ),
  ...createVideoEntries([
    {
      poster: "/images/queen-b/birthdays/IMG_6829.jpg",
      video: "/images/queen-b/tutorials/3c61f08bfb1c46af891d5e80ae65744f.MP4",
      alt: "Event glam tutorial clip",
    },
  ]),
];

const photoShootGallery: GalleryMediaItem[] = [
  ...createImageEntries(
    "/images/queen-b/special-occasions/",
    [
      "320925BF-50C3-45DA-A4EF-8F9EA4CD00A0.JPG",
      "IMG_0443.heic",
      "IMG_0454.jpg",
      "IMG_0455.jpg",
      "IMG_0926.jpg",
      "IMG_0927.jpg",
      "IMG_0928.jpg",
      "IMG_0929.jpg",
    ],
    "Editorial glam capture"
  ),
  ...createVideoEntries([
    {
      poster: "/images/queen-b/special-occasions/IMG_0926.jpg",
      video: "/images/queen-b/tutorials/RPReplay_Final1763318148.mov",
      alt: "Photoshoot behind the scenes reel",
    },
  ]),
];

const makeupTrainingGallery: GalleryMediaItem[] = [
  ...createImageEntries(
    "/images/queen-b/hair-installation/",
    ["IMG_0420.PNG", "IMG_0421.jpg", "558CCCAE-E21F-4216-A8EC-64A7FAD502C8.HEIC"],
    "Training session highlight"
  ),
  ...createVideoEntries([
    {
      poster: "/images/queen-b/hair-installation/IMG_0420.PNG",
      video: "/images/queen-b/tutorials/c8c13f9fe7854b1295db30706dbd429c.MP4",
      alt: "Hands-on masterclass clip",
    },
  ]),
];

const bridalHairGallery: GalleryMediaItem[] = [
  ...createImageEntries(
    "/images/queen-b/bridal/",
    ["IMG_0457.jpg", "IMG_0460.jpg"],
    "Bridal hair prep"
  ),
  ...createImageEntries(
    "/images/queen-b/hair-installation/",
    ["IMG_0928.jpg"],
    "Install in progress"
  ),
  ...createVideoEntries([
    {
      poster: "/images/queen-b/hair-installation/IMG_0421.jpg",
      video: "/images/queen-b/hair-installation/091d425f8167410eae2508753cbfde79.MOV",
      alt: "Bridal install walk-through",
    },
    {
      poster: "/images/queen-b/hair-installation/IMG_0421.jpg",
      video: "/images/queen-b/hair-installation/9c1cec86aec64cf29a449a5099759634.MOV",
      alt: "Seamless install demo",
    },
    {
      poster: "/images/queen-b/hair-installation/IMG_0421.jpg",
      video: "/images/queen-b/hair-installation/d451497445a7457480f0f9ebf64d76fc.MOV",
      alt: "Finishing veil placement",
    },
  ]),
];

const hairRevampGallery: GalleryMediaItem[] = [
  ...createImageEntries(
    "/images/queen-b/hair/",
    ["IMG_1036.jpg", "IMG_1040.jpg", "IMG_1051.jpg", "IMG_6949.jpg"],
    "Hair revamp result"
  ),
  ...createVideoEntries([
    {
      poster: "/images/queen-b/hair/IMG_1036.jpg",
      video: "/images/queen-b/hair/315305c8071c45f3b4d0b6e8fd47598e.MOV",
      alt: "Revamp process video",
    },
  ]),
];

const wiggingColoringGallery: GalleryMediaItem[] = [
  ...createImageEntries(
    "/images/queen-b/hair/",
    ["IMG_1034.jpg", "IMG_1044.jpg"],
    "Wigging & coloring detail"
  ),
  ...createImageEntries(
    "/images/queen-b/hair-installation/",
    ["IMG_0421.jpg"],
    "Lace customization"
  ),
  ...createVideoEntries([
    {
      poster: "/images/queen-b/hair/IMG_1044.jpg",
      video: "/images/queen-b/hair/950bb325491e498ba3c608bbacfe2521.MOV",
      alt: "Color melt transformation",
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
    slug: "body-wave-lace-wig",
    title: "Luxury Body Wave Lace Wig (18\")",
    description:
      "Pre-plucked HD lace wig with soft body wave texture for effortless feminine glam. Lightweight, breathable, and ready to wear with minimal styling.",
    image: STOCK_PHOTOS.hairModel,
    features: [
      "100% human hair with natural density",
      "Pre-bleached knots and elastic band",
      "Includes satin storage bag & care guide",
    ],
    gallery: [
      { src: STOCK_PHOTOS.hairModel, alt: "Body wave lace wig" },
      { src: STOCK_PHOTOS.bridalHairDetail, alt: "Soft waves detail" },
    ],
  },
  {
    slug: "silk-press-care-kit",
    title: "Silk Press Maintenance Kit",
    description:
      "Studio-formulated cleansing, conditioning, and finishing trio that keeps your silk press glossy between appointments.",
    image: STOCK_PHOTOS.hairColoring,
    features: [
      "Sulphate-free cleansing shampoo",
      "Moisture-rich smoothing mask",
      "Thermal protectant finishing serum",
    ],
    gallery: [
      { src: STOCK_PHOTOS.hairColoring, alt: "Silk press maintenance products" },
      { src: STOCK_PHOTOS.wigStyling, alt: "Stylist applying serum" },
    ],
  },
  {
    slug: "glueless-luxury-closure",
    title: "Glueless Luxury Closure Wig (14\")",
    description:
      "Everyday-ready bob unit with invisible closure finish. Comes pre-styled with soft curls and adjustable straps for a secure fit.",
    image: STOCK_PHOTOS.wigStyling,
    features: [
      "Cut, styled, and ready to wear",
      "Breathable mesh construction",
      "Free tightening and refresh within 30 days",
    ],
    gallery: [
      { src: STOCK_PHOTOS.wigStyling, alt: "Glueless closure wig" },
      { src: STOCK_PHOTOS.hairModel, alt: "Polished bob style" },
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
  name: "Tina Okafor",
  role: "Founder & Lead Artist",
  image: STOCK_PHOTOS.founderPortrait,
  bio: "Passionate about empowering women through beauty, Tina has built a reputation for creating stunning, personalized looks that celebrate each client's unique features and style.",
};
