export const brand = {
  name: "ARDIÇ DESIGN & FABRICATION",
  shortName: "ARDIÇ",
  tagline: "Built to Be Remembered.",
  phone: "+90 543 626 89 69",
  location: "Karadeniz Caddesi No:131, Ferhatpaşa, Ataşehir, Istanbul, Turkey"
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/works", label: "Works" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/fabrication", label: "Fabrication" },
  { href: "/live", label: "Live", mobileLabel: "Live Atelier", footerLabel: "Live Atelier" },
  { href: "/contact", label: "Contact" }
];

export const services = [
  {
    title: "Brand Installations",
    description:
      "Retail, hospitality, and event installations developed from concept and design through fabrication, finishing, assembly, and site delivery."
  },
  {
    title: "Architectural Decor",
    description:
      "Custom interior and exterior elements, CNC-carved details, columns, reliefs, surfaces, and architectural features produced to project requirements."
  },
  {
    title: "Sculptures & Artworks",
    description:
      "Statement works, character forms, artistic objects, and public-facing pieces shaped through sculpture, coating, painting, and finishing."
  },
  {
    title: "Thematic Spaces",
    description:
      "Narrative-driven environments for commercial, cultural, and leisure destinations, built with scenic fabrication and installation coordination."
  }
];

export const heroSlides = [
  {
    image: "/home/hero-roman-heritage.jpeg",
    alt: "Roman columns, ancient stone tablets, and warm historical lighting",
    label: "Historical Environments"
  },
  {
    image: "/home/brand-story-lobby.jpeg",
    alt: "Dark premium lobby with natural rock forms and Ardic wall branding",
    label: "Built to Be Remembered"
  },
  {
    image: "/home/production-columns.png",
    alt: "White Corinthian column production and sculptural fabrication details",
    label: "Fabrication Workshop"
  },
  {
    image: "/home/featured-entrance-gate.png",
    alt: "Monumental entrance gate architectural fabrication project",
    label: "Architectural Environments"
  },
  {
    image: "/home/featured-vintage-vehicle.png",
    alt: "Vintage black rental vehicle custom experience object",
    label: "Fantasy & Experience Spaces"
  },
  {
    image: "/home/featured-burger-sculpture.png",
    alt: "Giant burger sculpture for commercial brand experience",
    label: "Commercial Sculptures"
  }
];

export const works = [
  {
    title: "Monumental Architectural Fabrication",
    type: "Architectural Environments",
    number: "Project 01",
    image: "/home/featured-entrance-gate.png"
  },
  {
    title: "Custom Experience Objects",
    type: "Fantasy & Experience Spaces",
    number: "Project 02",
    image: "/home/featured-vintage-vehicle.png"
  },
  {
    title: "Commercial Sculptures & Brand Experiences",
    type: "Commercial & Thematic Interiors",
    number: "Project 03",
    image: "/home/featured-burger-sculpture.png"
  }
];

export type PortfolioImage =
  | string
  | {
      src: string;
      alt: string;
      title?: string;
      description?: string;
    };

export const getPortfolioImageSrc = (image: PortfolioImage) =>
  typeof image === "string" ? image : image.src;

export const getPortfolioImageAlt = (image: PortfolioImage, fallback: string) =>
  typeof image === "string" ? fallback : image.alt;

const portfolioImage = (path: string) => path;

const portfolioImageSet = (slug: string, count: number) =>
  Array.from(
    { length: count },
    (_, index) => `/projects/portfolio/${slug}/${slug}-${`${index + 1}`.padStart(2, "0")}.jpeg`
  );

type PortfolioCategoryInput = {
  title: string;
  slug: string;
  description: string;
  shortDescription?: string;
  href: string;
  introHeading: string;
  intro: string[];
  images: PortfolioImage[];
  coverImage?: string;
  coverImages?: PortfolioImage[];
  coverPosition?: string;
  alt?: string;
  featured?: boolean;
  published?: boolean;
};

const portfolioCategoryData: PortfolioCategoryInput[] = [
  {
    title: "Safari Experiences",
    slug: "safari-experiences",
    description:
      "Animal-inspired scenic elements and immersive visitor experiences built for destination environments.",
    shortDescription:
      "Animal-inspired scenic elements and immersive visitor experiences built for destination environments.",
    href: "/works/safari-experiences",
    introHeading: "Immersive wildlife-inspired environments shaped for visitor engagement.",
    intro: [
      "Safari Experiences brings together animal figures, scenic elements, and visitor-facing installations designed to create atmosphere, movement, and memory.",
      "The gallery includes fabricated animals, landscape accents, and themed destination pieces produced through sculptural and production workflows."
    ],
    images: portfolioImageSet("safari-experiences", 9),
    coverImages: [
      portfolioImage("/projects/portfolio/safari-experiences/safari-experiences-03.jpeg"),
      portfolioImage("/projects/portfolio/safari-experiences/safari-experiences-04.jpeg"),
      portfolioImage("/projects/portfolio/safari-experiences/safari-experiences-07.jpeg"),
      portfolioImage("/projects/portfolio/safari-experiences/safari-experiences-09.jpeg")
    ],
    coverPosition: "50% 45%",
    alt: "Safari experience portfolio category cover image",
    featured: true,
    published: true
  },
  {
    title: "Sculptures & Characters",
    slug: "sculptures-characters",
    description:
      "Custom character figures, sculptural objects, props, and themed forms produced for memorable spaces.",
    shortDescription:
      "Custom character figures, sculptural objects, props, and themed forms produced for memorable spaces.",
    coverImage: "/services/sculpture-elephant-front.jpeg",
    coverPosition: "50% 35%",
    alt: "Large-scale sculptural character and artwork cover image",
    href: "/works/sculptures-characters",
    introHeading: "Character work and sculptural objects with strong visual identity.",
    intro: [
      "Sculptures & Characters covers standalone figures, mascots, decorative objects, and special props built for themed environments, retail moments, and entertainment spaces.",
      "Each piece is treated as a physical storytelling object, moving from shaping and fabrication through surface detail and finishing."
    ],
    images: portfolioImageSet("sculptures-characters", 14),
    coverImages: [
      portfolioImage("/projects/portfolio/sculptures-characters/sculptures-characters-01.jpeg"),
      portfolioImage("/projects/portfolio/sculptures-characters/sculptures-characters-02.jpeg"),
      portfolioImage("/projects/portfolio/sculptures-characters/sculptures-characters-04.jpeg"),
      portfolioImage("/projects/portfolio/sculptures-characters/sculptures-characters-09.jpeg"),
      portfolioImage("/projects/portfolio/sculptures-characters/sculptures-characters-14.jpeg")
    ],
    featured: true,
    published: true
  },
  {
    title: "Artificial Rock & Organic Forms",
    slug: "artificial-rock-organic-forms",
    description:
      "Artificial rockwork, organic scenic forms, fantasy structures, and nature-inspired fabricated elements.",
    shortDescription:
      "Artificial rockwork, organic scenic forms, fantasy structures, and nature-inspired fabricated elements.",
    href: "/works/artificial-rock-organic-forms",
    introHeading: "Organic scenic forms produced with texture, scale, and atmosphere.",
    intro: [
      "Artificial Rock & Organic Forms includes scenic rock surfaces, fantasy mushroom houses, carved reliefs, and organic structures shaped for themed environments.",
      "The work combines sculptural modeling, coatings, textures, and fabrication logic to create durable natural and fantasy forms."
    ],
    images: [
      ...portfolioImageSet("artificial-rock-organic-forms", 10),
      {
        src: "/projects/portfolio/artificial-rock-organic-forms/organic-stone-feature-lounge-interior-01.png",
        alt: "Organic stone wall feature with warm backlighting in a premium lounge interior",
        title: "Organic Stone Lounge Feature",
        description:
          "A refined interior feature using an irregular stone-like form as a sculptural focal point."
      }
    ],
    coverImages: [
      {
        src: "/projects/portfolio/artificial-rock-organic-forms/organic-stone-feature-lounge-interior-01.png",
        alt: "Organic stone wall feature with warm backlighting in a premium lounge interior"
      },
      portfolioImage("/projects/portfolio/artificial-rock-organic-forms/artificial-rock-organic-forms-04.jpeg"),
      portfolioImage("/projects/portfolio/artificial-rock-organic-forms/artificial-rock-organic-forms-05.jpeg"),
      portfolioImage("/projects/portfolio/artificial-rock-organic-forms/artificial-rock-organic-forms-06.jpeg"),
      portfolioImage("/projects/portfolio/artificial-rock-organic-forms/artificial-rock-organic-forms-02.jpeg")
    ],
    coverPosition: "50% 50%",
    alt: "Artificial rock and organic forms portfolio category cover image",
    featured: true,
    published: true
  },
  {
    title: "Historical & Thematic Environments",
    slug: "historical-thematic-environments",
    description:
      "Heritage-inspired columns, inscriptions, arches, facade elements, and themed architectural environments.",
    shortDescription:
      "Heritage-inspired columns, inscriptions, arches, facade elements, and themed architectural environments.",
    coverImage: "/services/architectural-decor-relief.jpeg",
    coverPosition: "50% 45%",
    alt: "Decorative architectural and thematic environment cover image",
    href: "/works/historical-thematic-environments",
    introHeading: "Cultural and thematic environments translated into built detail.",
    intro: [
      "Historical & Thematic Environments gathers Roman columns, carved inscriptions, tiled arches, facade pieces, and heritage-inspired spatial elements.",
      "These works combine reference-driven design, CNC production, hand finishing, and scenic installation for cultural and destination settings."
    ],
    images: [
      ...portfolioImageSet("historical-thematic-environments", 28),
      {
        src: "/projects/portfolio/historical-thematic-environments/white-ornamental-architectural-arch-production-01.png",
        alt: "White ornamental architectural arch element produced for a thematic interior",
        title: "Ornamental Architectural Arch",
        description:
          "A large-scale decorative arch form prepared as a sculptural architectural element."
      },
      {
        src: "/projects/portfolio/historical-thematic-environments/eagle-relief-wall-with-decorative-columns-01.png",
        alt: "Eagle relief wall with decorative columns for a classical thematic interior",
        title: "Eagle Relief Wall",
        description:
          "A classical relief composition with sculpted columns, mountain scenery, and an eagle motif."
      },
      {
        src: "/projects/portfolio/historical-thematic-environments/ornamental-white-column-shaft-relief-01.png",
        alt: "Ornamental white column shaft with carved relief details for a thematic interior",
        title: "Ornamental Column Shaft",
        description:
          "A tall decorative column component with carved relief bands and a twisted central shaft."
      },
      {
        src: "/projects/portfolio/historical-thematic-environments/green-marble-twisted-column-form-01.png",
        alt: "Green marble-effect twisted column form produced as a decorative architectural element",
        title: "Green Twisted Column Form",
        description:
          "A sculptural twisted column form finished with a polished green stone-effect surface."
      },
      {
        src: "/projects/portfolio/historical-thematic-environments/decorative-white-column-capital-01.png",
        alt: "Decorative white column capital with classical leaf ornamentation",
        title: "Decorative Column Capital",
        description:
          "A classical column capital form with raised ornamental leaf detailing for architectural decor."
      },
      {
        src: "/projects/portfolio/historical-thematic-environments/classical-white-tiered-fountain-01.png",
        alt: "Classical white tiered fountain form produced as a decorative architectural object",
        title: "Classical Tiered Fountain",
        description:
          "A white three-tier fountain form produced for decorative architectural and thematic settings."
      },
      {
        src: "/projects/portfolio/historical-thematic-environments/classical-white-tiered-fountain-02.png",
        alt: "Tall white classical tiered fountain with shell-like bowl details",
        title: "Tall Classical Fountain",
        description:
          "A taller fountain variation with stacked shell-like bowls and classical decorative proportions."
      },
      {
        src: "/projects/portfolio/historical-thematic-environments/spiral-white-decorative-vase-01.png",
        alt: "White spiral decorative vase form produced for architectural display",
        title: "Spiral Decorative Vase",
        description:
          "A large white vase form with subtle spiral fluting for refined decorative environments."
      },
      {
        src: "/projects/portfolio/historical-thematic-environments/fluted-white-sculptural-vase-01.png",
        alt: "Tall white fluted sculptural vase with vertical ribbed geometry",
        title: "Fluted Sculptural Vase",
        description:
          "A tall sculptural vase form with vertical fluting and a narrow waist profile."
      },
      {
        src: "/projects/portfolio/historical-thematic-environments/classical-white-decorative-urn-01.png",
        alt: "Classical white decorative urn form with rounded body and flared neck",
        title: "Classical Decorative Urn",
        description:
          "A classical urn-like display form with a rounded body and flared upper neck."
      },
      {
        src: "/projects/portfolio/historical-thematic-environments/classical-white-baluster-vase-01.png",
        alt: "White baluster vase form with classical rounded profile",
        title: "Classical Baluster Vase",
        description:
          "A white baluster-style decorative vase form with a textured sculptural surface."
      }
    ],
    coverImages: [
      {
        src: "/projects/portfolio/historical-thematic-environments/eagle-relief-wall-with-decorative-columns-01.png",
        alt: "Eagle relief wall with decorative columns for a classical thematic interior"
      },
      {
        src: "/projects/portfolio/historical-thematic-environments/ornamental-white-column-shaft-relief-01.png",
        alt: "Ornamental white column shaft with carved relief details for a thematic interior"
      },
      {
        src: "/projects/portfolio/historical-thematic-environments/decorative-white-column-capital-01.png",
        alt: "Decorative white column capital with classical leaf ornamentation"
      },
      {
        src: "/projects/portfolio/historical-thematic-environments/green-marble-twisted-column-form-01.png",
        alt: "Green marble-effect twisted column form produced as a decorative architectural element"
      },
      portfolioImage("/projects/portfolio/historical-thematic-environments/historical-thematic-environments-04.jpeg"),
      portfolioImage("/projects/portfolio/historical-thematic-environments/historical-thematic-environments-08.jpeg"),
      portfolioImage("/projects/portfolio/historical-thematic-environments/historical-thematic-environments-10.jpeg"),
      portfolioImage("/projects/portfolio/historical-thematic-environments/historical-thematic-environments-28.jpeg")
    ],
    featured: true,
    published: true
  },
  {
    title: "CNC Manufacturing Processes",
    slug: "cnc-manufacturing-processes",
    description:
      "Production-stage images showing CNC-cut forms, foam models, relief components, and fabrication workflows.",
    shortDescription:
      "Production-stage images showing CNC-cut forms, foam models, relief components, and fabrication workflows.",
    href: "/works/cnc-manufacturing-processes",
    introHeading: "Digital production workflows for complex physical forms.",
    intro: [
      "CNC Manufacturing Processes documents the workshop stages behind large scenic forms, decorative pieces, and shaped components.",
      "The gallery highlights machining, foam work, component preparation, and production logic before finishing and installation."
    ],
    images: portfolioImageSet("cnc-manufacturing-processes", 12),
    coverImages: [
      portfolioImage("/projects/portfolio/cnc-manufacturing-processes/cnc-manufacturing-processes-01.jpeg"),
      portfolioImage("/projects/portfolio/cnc-manufacturing-processes/cnc-manufacturing-processes-02.jpeg"),
      portfolioImage("/projects/portfolio/cnc-manufacturing-processes/cnc-manufacturing-processes-04.jpeg"),
      portfolioImage("/projects/portfolio/cnc-manufacturing-processes/cnc-manufacturing-processes-07.jpeg"),
      portfolioImage("/projects/portfolio/cnc-manufacturing-processes/cnc-manufacturing-processes-09.jpeg")
    ],
    coverPosition: "50% 50%",
    alt: "CNC manufacturing process portfolio category cover image",
    featured: true,
    published: true
  },
  {
    title: "Molds & Composite Production",
    slug: "molds-composite-production",
    description:
      "Mold-making, coating, composite shaping, and repeatable production systems for sculptural fabrication.",
    shortDescription:
      "Mold systems, composite production, polyester casting, and repeatable fabrication workflows for custom forms.",
    href: "/works/molds-composite-production",
    introHeading: "Repeatable production systems for custom sculptural and scenic output.",
    intro: [
      "Molds & Composite Production shows the practical fabrication stages used to turn shaped references into repeatable, durable parts.",
      "These images document composite-ready forms, coated surfaces, molded pieces, and production details that support larger installations."
    ],
    images: portfolioImageSet("molds-composite-production", 10),
    coverImages: [
      portfolioImage("/projects/portfolio/molds-composite-production/molds-composite-production-01.jpeg"),
      portfolioImage("/projects/portfolio/molds-composite-production/molds-composite-production-04.jpeg"),
      portfolioImage("/projects/portfolio/molds-composite-production/molds-composite-production-05.jpeg"),
      portfolioImage("/projects/portfolio/molds-composite-production/molds-composite-production-07.jpeg"),
      portfolioImage("/projects/portfolio/molds-composite-production/molds-composite-production-10.jpeg")
    ],
    coverPosition: "50% 50%",
    alt: "Molds and composite production portfolio category cover image",
    featured: true,
    published: true
  },
  {
    title: "Commercial & Brand Installations",
    slug: "commercial-brand-installations",
    description:
      "Retail displays, branded environments, product replicas, storefront moments, and commercial installations.",
    shortDescription:
      "Retail displays, promotional objects, commercial fixtures, and branded fabrication built for visual impact.",
    coverImage: "/services/brand-nyx-bottle.jpeg",
    coverPosition: "50% 45%",
    alt: "Commercial brand installation portfolio category cover image",
    href: "/works/commercial-brand-installations",
    introHeading: "Brand environments and commercial objects built for visibility and impact.",
    intro: [
      "Commercial & Brand Installations includes retail displays, cosmetics-focused objects, storefront pieces, and commercial interiors produced for public-facing experiences.",
      "The work balances brand visibility, fabrication quality, and durable execution across display, decor, and installation formats."
    ],
    images: [
      ...portfolioImageSet("commercial-brand-installations", 12),
      {
        src: "/projects/portfolio/commercial-brand-installations/ardic-branded-spherical-reception-display-01.png",
        alt: "Large spherical reception display object in an Ardic branded premium lobby",
        title: "Branded Spherical Reception Display",
        description:
          "A polished sculptural display object developed as a striking branded lobby centerpiece."
      },
      {
        src: "/projects/portfolio/commercial-brand-installations/oversized-green-tennis-ball-display-01.png",
        alt: "Oversized green tennis ball display objects arranged in an outdoor production area",
        title: "Oversized Tennis Ball Display Objects",
        description:
          "Large-scale sports-themed display objects produced for a commercial presentation environment."
      },
      {
        src: "/projects/portfolio/commercial-brand-installations/illuminated-sculptural-wings-brand-installation-01.png",
        alt: "Illuminated sculptural red wings installed as a commercial interior feature wall",
        title: "Illuminated Sculptural Wings",
        description:
          "A dramatic wall-mounted sculptural installation designed for a high-impact commercial interior."
      },
      {
        src: "/projects/portfolio/commercial-brand-installations/giant-burger-display-object-01.png",
        alt: "Giant burger sculpture produced as a commercial brand display object",
        title: "Giant Burger Display Object",
        description:
          "A realistic oversized burger object fabricated for promotional and retail presentation."
      }
    ],
    coverImages: [
      {
        src: "/projects/portfolio/commercial-brand-installations/ardic-branded-spherical-reception-display-01.png",
        alt: "Large spherical reception display object in an Ardic branded premium lobby"
      },
      portfolioImage("/projects/portfolio/commercial-brand-installations/commercial-brand-installations-01.jpeg"),
      portfolioImage("/projects/portfolio/commercial-brand-installations/commercial-brand-installations-06.jpeg"),
      {
        src: "/projects/portfolio/commercial-brand-installations/illuminated-sculptural-wings-brand-installation-01.png",
        alt: "Illuminated sculptural red wings installed as a commercial interior feature wall"
      },
      {
        src: "/projects/portfolio/commercial-brand-installations/oversized-green-tennis-ball-display-01.png",
        alt: "Oversized green tennis ball display objects arranged in an outdoor production area"
      }
    ],
    featured: true,
    published: true
  }
];

export const portfolioCategories = portfolioCategoryData.map((category, index) => ({
  ...category,
  number: `${index + 1}`.padStart(2, "0"),
  coverImage: category.coverImage ?? getPortfolioImageSrc(category.images[0]),
  coverImages: (category.coverImages ?? [category.coverImage ?? category.images[0]]).map((image, imageIndex) => ({
    src: getPortfolioImageSrc(image),
    alt: getPortfolioImageAlt(image, category.alt ?? `${category.title} cover image ${imageIndex + 1}`)
  })),
  coverPosition: category.coverPosition ?? "50% 50%",
  alt: category.alt ?? `${category.title} portfolio category cover image`,
  imageCount: category.images.length
}));

export const capabilities = [
  "CNC fabrication",
  "EPS / XPS processing",
  "Sculpture production",
  "Mold systems",
  "Polyester casting",
  "Finishing and installation"
];
