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

export const portfolioCategories = [
  {
    title: "Commercial & Thematic Interiors",
    description: "Immersive interior environments shaped for branded, leisure, and public-facing spaces."
  },
  {
    title: "Safari Experiences",
    description: "Atmospheric habitat settings and visitor experiences built around narrative and material realism."
  },
  {
    title: "Sculptures & Characters",
    description: "Custom figures, scenic objects, and sculptural works produced for memorable spatial storytelling."
  },
  {
    title: "Artificial Rock & Water Features",
    description: "Textured rockwork and water-driven environments crafted for durable architectural impact."
  },
  {
    title: "Historical & Topographic Environments",
    description: "Cultural, historical, and terrain-based environments developed with spatial depth and precision."
  },
  {
    title: "CNC Fabrication",
    description: "Digitally fabricated components, patterns, and forms prepared for custom production workflows."
  },
  {
    title: "Mold & Production Systems",
    description: "Repeatable mold, casting, and production systems designed for controlled fabrication output."
  }
].map((category, index) => ({
  ...category,
  number: `${index + 1}`.padStart(2, "0"),
  slug: category.title
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
