export const brand = {
  name: "ARDIÇ DESIGN & FABRICATION",
  shortName: "ARDIÇ",
  tagline: "Built to Be Remembered.",
  phone: "+90 543 626 89 69",
  location: "Karadeniz Caddesi No:131, Ferhatpaşa, Ataşehir, Istanbul, Türkiye"
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/works", label: "Works" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/fabrication", label: "Fabrication" },
  { href: "/contact", label: "Contact" }
];

export const services = [
  {
    title: "Brand Installations",
    description:
      "Immersive retail, hospitality, and event environments built with architectural presence and durable detailing."
  },
  {
    title: "Architectural Decor",
    description:
      "Custom interior and exterior features, wall systems, metal accents, and spatial objects for memorable places."
  },
  {
    title: "Sculptures & Artworks",
    description:
      "Statement works, public art, collectible pieces, and bespoke forms developed from concept to final finish."
  },
  {
    title: "Thematic Spaces",
    description:
      "Narrative-driven spaces for commercial, cultural, and leisure destinations where atmosphere is the brief."
  }
];

export const works = [
  {
    title: "Thematic Character Sculptures",
    type: "Theme Parks & Entertainment",
    number: "Project 01",
    image: "/projects/thematic-character-sculptures.jpeg"
  },
  {
    title: "Retail Display Installations",
    type: "Brand Experience & Fabrication",
    number: "Project 02",
    image: "/projects/retail-display-installations.jpeg"
  }
];

const portfolioImageSet = (slug: string, count: number) =>
  Array.from(
    { length: count },
    (_, index) => `/projects/portfolio/${slug}/${slug}-${`${index + 1}`.padStart(2, "0")}.jpeg`
  );

export const portfolioCategories = [
  {
    title: "Safari Experiences",
    slug: "safari-experiences",
    description:
      "Animal-inspired scenic elements and immersive visitor experiences built for destination environments.",
    href: "/works/safari-experiences",
    introHeading: "Immersive wildlife-inspired environments shaped for visitor engagement.",
    intro: [
      "Safari Experiences brings together animal figures, scenic elements, and visitor-facing installations designed to create atmosphere, movement, and memory.",
      "The gallery includes fabricated animals, landscape accents, and themed destination pieces produced through sculptural and production workflows."
    ],
    images: portfolioImageSet("safari-experiences", 9)
  },
  {
    title: "Sculptures & Characters",
    slug: "sculptures-characters",
    description:
      "Custom character figures, sculptural objects, props, and themed forms produced for memorable spaces.",
    href: "/works/sculptures-characters",
    introHeading: "Character work and sculptural objects with strong visual identity.",
    intro: [
      "Sculptures & Characters covers standalone figures, mascots, decorative objects, and special props built for themed environments, retail moments, and entertainment spaces.",
      "Each piece is treated as a physical storytelling object, moving from shaping and fabrication through surface detail and finishing."
    ],
    images: portfolioImageSet("sculptures-characters", 14)
  },
  {
    title: "Artificial Rock & Organic Forms",
    slug: "artificial-rock-organic-forms",
    description:
      "Artificial rockwork, organic scenic forms, fantasy structures, and nature-inspired fabricated elements.",
    href: "/works/artificial-rock-organic-forms",
    introHeading: "Organic scenic forms produced with texture, scale, and atmosphere.",
    intro: [
      "Artificial Rock & Organic Forms includes scenic rock surfaces, fantasy mushroom houses, carved reliefs, and organic structures shaped for themed environments.",
      "The work combines sculptural modeling, coatings, textures, and fabrication logic to create durable natural and fantasy forms."
    ],
    images: portfolioImageSet("artificial-rock-organic-forms", 10)
  },
  {
    title: "Historical & Thematic Environments",
    slug: "historical-thematic-environments",
    description:
      "Heritage-inspired columns, inscriptions, arches, facade elements, and themed architectural environments.",
    href: "/works/historical-thematic-environments",
    introHeading: "Cultural and thematic environments translated into built detail.",
    intro: [
      "Historical & Thematic Environments gathers Roman columns, carved inscriptions, tiled arches, facade pieces, and heritage-inspired spatial elements.",
      "These works combine reference-driven design, CNC production, hand finishing, and scenic installation for cultural and destination settings."
    ],
    images: portfolioImageSet("historical-thematic-environments", 28)
  },
  {
    title: "CNC Manufacturing Processes",
    slug: "cnc-manufacturing-processes",
    description:
      "Production-stage images showing CNC-cut forms, foam models, relief components, and fabrication workflows.",
    href: "/works/cnc-manufacturing-processes",
    introHeading: "Digital production workflows for complex physical forms.",
    intro: [
      "CNC Manufacturing Processes documents the workshop stages behind large scenic forms, decorative pieces, and shaped components.",
      "The gallery highlights machining, foam work, component preparation, and production logic before finishing and installation."
    ],
    images: portfolioImageSet("cnc-manufacturing-processes", 12)
  },
  {
    title: "Molds & Composite Production",
    slug: "molds-composite-production",
    description:
      "Mold-making, coating, composite shaping, and repeatable production systems for sculptural fabrication.",
    href: "/works/molds-composite-production",
    introHeading: "Repeatable production systems for custom sculptural and scenic output.",
    intro: [
      "Molds & Composite Production shows the practical fabrication stages used to turn shaped references into repeatable, durable parts.",
      "These images document composite-ready forms, coated surfaces, molded pieces, and production details that support larger installations."
    ],
    images: portfolioImageSet("molds-composite-production", 10)
  },
  {
    title: "Commercial & Brand Installations",
    slug: "commercial-brand-installations",
    description:
      "Retail displays, branded environments, product replicas, storefront moments, and commercial installations.",
    href: "/works/commercial-brand-installations",
    introHeading: "Brand environments and commercial objects built for visibility and impact.",
    intro: [
      "Commercial & Brand Installations includes retail displays, cosmetics-focused objects, storefront pieces, and commercial interiors produced for public-facing experiences.",
      "The work balances brand visibility, fabrication quality, and durable execution across display, decor, and installation formats."
    ],
    images: portfolioImageSet("commercial-brand-installations", 12)
  }
].map((category, index) => ({
  ...category,
  number: `${index + 1}`.padStart(2, "0"),
  coverImage: category.images[0],
  imageCount: category.images.length
}));

export const capabilities = [
  "Metal fabrication",
  "CNC routing",
  "Woodwork and joinery",
  "Composite forms",
  "Surface finishing",
  "Installation planning"
];
