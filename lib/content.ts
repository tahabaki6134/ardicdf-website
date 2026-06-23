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

export const portfolioProjects = [
  {
    title: "Fantasy Mushroom Houses",
    category: "Fantasy & Experience Spaces",
    description:
      "Custom themed fantasy structures produced through CNC fabrication, sculpting, coating, painting, and installation workflows.",
    images: [
      "/projects/fantasy-mushroom-houses-01.jpeg",
      "/projects/fantasy-mushroom-houses-02.jpeg",
      "/projects/fantasy-mushroom-houses-03.jpeg"
    ]
  },
  {
    title: "Roman Heritage Elements",
    category: "Historical & Cultural Environments",
    description:
      "Architectural heritage reproductions including Roman columns, carved inscriptions, and historical environment elements manufactured for themed cultural spaces.",
    images: [
      "/projects/roman-heritage-elements-01.jpeg",
      "/projects/roman-heritage-elements-02.jpeg",
      "/projects/roman-heritage-elements-03.jpeg",
      "/projects/roman-heritage-elements-04.jpeg",
      "/projects/roman-heritage-elements-05.jpeg",
      "/projects/roman-heritage-elements-06.jpeg"
    ]
  },
  {
    title: "Fabrication Showcase",
    category: "Fabrication & Production",
    description:
      "In-house CNC production, sculptural fabrication, finishing, coating, painting, and assembly processes executed under one roof.",
    images: [
      "/projects/fabrication-showcase-01.jpeg",
      "/projects/fabrication-showcase-02.jpeg",
      "/projects/fabrication-showcase-03.jpeg",
      "/projects/fabrication-showcase-04.jpeg",
      "/projects/fabrication-showcase-05.jpeg",
      "/projects/fabrication-showcase-06.jpeg"
    ]
  }
].map((project, index) => ({
  ...project,
  number: `Project ${`${index + 1}`.padStart(2, "0")}`
}));

export const portfolioCategories = [
  {
    title: "Commercial & Thematic Interiors",
    slug: "commercial-thematic-interiors",
    description:
      "Immersive themed environments crafted for hospitality, entertainment, retail, and destination experiences.",
    href: "/works/commercial-thematic-interiors",
    introHeading: "Built environments with atmosphere, story, and commercial presence.",
    intro: [
      "We design and fabricate immersive commercial environments that transform spaces into memorable experiences. From themed restaurants and hospitality venues to visitor attractions, retail concepts, and entertainment destinations, each project is developed through a seamless integration of design, fabrication, and on-site execution.",
      "Our work combines architectural thinking, sculptural craftsmanship, custom production, and material expertise to create environments that engage visitors and strengthen brand identity. Whether the objective is storytelling, atmosphere, or commercial impact, every project is tailored to its context and built with long-term durability in mind.",
      "Selected projects showcase our ability to deliver complete environments, from concept development and technical detailing to fabrication, installation, and final execution."
    ]
  },
  {
    title: "Safari Experiences",
    slug: "safari-experiences",
    description:
      "Immersive safari-inspired environments built around storytelling, habitat realism, and memorable visitor experiences.",
    href: "/works/safari-experiences",
    introHeading: "Narrative habitats shaped for memorable visitor journeys.",
    intro: [
      "Ardıç Design & Fabrication creates safari-themed environments that combine narrative, craftsmanship, and immersive design. From animal-inspired installations and habitat structures to complete visitor experiences, each project is developed to transport audiences into a believable and engaging setting.",
      "Our approach blends sculptural fabrication, themed construction, artificial landscapes, and custom detailing to create environments that feel authentic, durable, and memorable. Whether for hospitality venues, attractions, educational spaces, or entertainment destinations, every safari project is designed to deliver atmosphere and emotional impact.",
      "Selected projects demonstrate our ability to transform concepts into fully realized environments that enrich visitor engagement and strengthen destination identity."
    ]
  },
  {
    title: "Sculptures & Characters",
    slug: "sculptures-characters",
    description:
      "Custom sculptures, character figures, and large-scale themed objects crafted through design and fabrication.",
    href: "/works/sculptures-characters",
    introHeading: "Sculptural work with presence, personality, and durable craft.",
    intro: [
      "Our sculpture and character projects combine artistic vision with advanced fabrication methods. From iconic mascots and themed figures to custom decorative objects and public installations, we create sculptural works that capture attention and reinforce storytelling.",
      "Using digital modeling, CNC production, hand-finishing techniques, and custom fabrication workflows, we deliver durable and visually impactful pieces tailored to each project's requirements.",
      "Selected projects highlight our ability to produce unique sculptural elements ranging from intimate decorative features to large-scale landmark installations."
    ]
  },
  {
    title: "Artificial Rock & Water Features",
    slug: "artificial-rock-water-features",
    description:
      "Artificial landscapes, rock formations, and water features designed for immersive environments.",
    href: "/works/artificial-rock-water-features",
    introHeading: "Natural forms recreated for atmospheric built environments.",
    intro: [
      "Ardıç designs and fabricates artificial rock formations, waterfalls, scenic landscapes, and themed natural environments for hospitality, entertainment, and public projects. Each installation is developed to achieve realistic textures, structural durability, and long-term performance.",
      "Our expertise combines sculptural craftsmanship, material engineering, and fabrication technology to recreate natural forms while meeting project-specific functional requirements.",
      "Selected projects showcase custom-built environments that blend visual authenticity with practical construction solutions."
    ]
  },
  {
    title: "Historical & Topographic Environments",
    slug: "historical-topographic-environments",
    description:
      "Heritage-inspired environments shaped through cultural narratives, terrain forms, and architectural storytelling.",
    href: "/works/historical-topographic-environments",
    introHeading: "Cultural atmosphere translated into spatial experience.",
    intro: [
      "We create historical, cultural, and topographic environments that evoke identity, atmosphere, and place. From heritage-inspired architectural settings and stone-textured surfaces to terrain models and themed environments, each project is developed with a strong focus on authenticity and spatial experience.",
      "By combining design research, fabrication expertise, and material craftsmanship, we deliver environments that communicate cultural narratives while maintaining contemporary construction standards.",
      "Selected projects reflect our ability to transform historical inspiration into immersive built experiences."
    ]
  },
  {
    title: "CNC Fabrication",
    slug: "cnc-fabrication",
    description:
      "Precision CNC production for large-scale forms, prototypes, molds, and architectural elements.",
    href: "/works/cnc-fabrication",
    introHeading: "Digital production for complex forms and precise fabrication.",
    intro: [
      "Our CNC fabrication capabilities support the production of complex forms, prototypes, decorative elements, sculptural components, and large-scale custom projects. Advanced digital workflows allow us to translate design concepts into accurate physical outputs with efficiency and consistency.",
      "Through foam machining, model production, and precision cutting technologies, we provide fabrication solutions that accelerate project delivery while maintaining high quality standards.",
      "Selected projects demonstrate how digital manufacturing enables innovative design and scalable production."
    ]
  },
  {
    title: "Mold & Production Systems",
    slug: "mold-production-systems",
    description:
      "Mold-making and production systems developed for repeatable, efficient fabrication workflows.",
    href: "/works/mold-production-systems",
    introHeading: "Production systems built for repeatability, control, and scale.",
    intro: [
      "Ardıç develops mold systems and production workflows that support both custom fabrication and scalable manufacturing. From prototype development and mold preparation to repeatable production processes, our work focuses on precision, efficiency, and long-term reliability.",
      "By integrating digital fabrication, material expertise, and practical production knowledge, we create systems that reduce complexity while improving consistency across projects.",
      "Selected projects highlight our capability to build production-ready solutions that support both unique commissions and repeatable product lines."
    ]
  }
].map((category, index) => ({
  ...category,
  number: `${index + 1}`.padStart(2, "0"),
  slug:
    category.slug ??
    category.title
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
}));

export const capabilities = [
  "Metal fabrication",
  "CNC routing",
  "Woodwork and joinery",
  "Composite forms",
  "Surface finishing",
  "Installation planning"
];
