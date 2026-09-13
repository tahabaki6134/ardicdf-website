export type Project = {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  description: string;
  details: string[];
  facts?: { label: string; value: string }[];
  briefChecklist: string[];
  industries: string[];
  services: { label: string; href: string }[];
};

// These entries use existing portfolio photographs. Do not add dimensions,
// client names, materials or delivery claims without a verified project record.
export const projects: Project[] = [
  {
    id: "modular-artificial-rock-concert-environment",
    title: "Modular rock concert environment",
    category: "Scenic environments",
    image:
      "/works/modular-artificial-rock-concert-environment/concert-rock-environment-arena-overview.jpeg",
    alt: "Arena performance with a long artificial-rock scenic environment around the stage",
    description:
      "An artificial-rock concert environment, developed as transportable EPS scenic modules and assembled for the completed performance setting.",
    details: [
      "Modular rock forms connect into a continuous stage landscape.",
      "The case study follows workshop production through to the completed arena setting."
    ],
    briefChecklist: [
      "Stage plan, access routes and maximum module sizes",
      "Performer interaction and venue requirements",
      "Installation window, touring plans and destination"
    ],
    industries: ["events-exhibitions", "museums-themed-attractions", "film-television"],
    services: [{ label: "Scenic fabrication", href: "/services/scenic-fabrication" }]
  },
  {
    id: "cosmetic-bottle-display-props",
    facts: [{"label": "Work shown", "value": "Oversized product-shaped display objects"}, {"label": "Visible finish", "value": "Coloured surfaces and applied brand graphics"}, {"label": "Components", "value": "Bottle profiles, caps and display details"}],
    title: "Cosmetic bottle display props",
    category: "Brand & retail props",
    image: "/projects/portfolio/commercial-brand-installations/molds-composite-production-10.jpeg",
    alt: "Oversized cosmetic bottle props with shaped caps, coloured surfaces and printed graphics",
    description:
      "Product-shaped display props that turn familiar cosmetic packaging into a physical focal point for a branded setting.",
    details: [
      "Bottle profiles, cap details and applied graphics establish recognisable product forms.",
      "The portfolio photograph brings together several shapes and colour treatments."
    ],
    briefChecklist: [
      "Packaging drawings or a sample, plus approved brand artwork",
      "Display dimensions, viewing distance and quantity",
      "Indoor or outdoor use, handling and mounting requirements"
    ],
    industries: ["retail-brand-activations", "events-exhibitions"],
    services: [
      { label: "Composites & molds", href: "/services/composite-fabrication" },
      { label: "CNC foam machining", href: "/services/cnc-foam-polyurethane-machining" }
    ]
  },
  {
    id: "giant-burger-display-prop",
    facts: [{"label": "Work shown", "value": "Oversized sculptural food display"}, {"label": "Detail", "value": "Individually shaped ingredient layers"}, {"label": "Visible finish", "value": "Textured and coloured surfaces"}],
    title: "Giant burger display prop",
    category: "Brand & retail props",
    image: "/projects/portfolio/commercial-brand-installations/sculptures-characters-14.jpeg",
    alt: "Large sculpted burger prop in the workshop with individually shaped ingredient layers",
    description:
      "A sculptural food display with distinct ingredient layers, textured surfaces and a recognisable oversized silhouette.",
    details: [
      "Separate ingredient forms build depth and detail across the assembled object.",
      "The workshop photograph shows the painted surface treatment and the overall composition."
    ],
    briefChecklist: [
      "Product references and the intended display size",
      "Whether visitors can touch or interact with the object",
      "Display duration, transport route and fixing method"
    ],
    industries: ["retail-brand-activations", "events-exhibitions", "film-television"],
    services: [{ label: "Scenic fabrication", href: "/services/scenic-fabrication" }]
  },
  {
    id: "classical-decorative-columns",
    facts: [{"label": "Work shown", "value": "A pair of decorative architectural columns"}, {"label": "Detail", "value": "Fluted shafts, scroll capitals and bases"}, {"label": "Visible finish", "value": "Coordinated stone-effect surface"}],
    title: "Classical decorative columns",
    category: "Architectural decor",
    image:
      "/projects/portfolio/historical-thematic-environments/historical-thematic-environments-04.jpeg",
    alt: "Two stone-effect decorative columns with fluted shafts and scroll-shaped capitals in a workshop yard",
    description:
      "Decorative columns combining fluted shafts, scroll capitals and a coordinated stone-effect finish.",
    details: [
      "The paired columns use repeated architectural details and a consistent surface treatment.",
      "Fluting, capital ornament and base profiles create the classical appearance."
    ],
    briefChecklist: [
      "Overall height, diameter and architectural drawings",
      "Decorative role, interfaces and fixing requirements",
      "Finish references, quantity and installation setting"
    ],
    industries: [
      "hospitality-architectural-decor",
      "museums-themed-attractions",
      "film-television"
    ],
    services: [
      { label: "Themed environment fabrication", href: "/services/themed-environment-fabrication" }
    ]
  },
  {
    id: "ornamental-elephant-sculpture",
    facts: [{"label": "Work shown", "value": "Ornamental elephant-head sculpture"}, {"label": "Detail", "value": "Relief decoration and curved tusks"}, {"label": "Visible finish", "value": "White sculptural surface"}],
    title: "Ornamental elephant sculpture",
    category: "Sculpture & characters",
    image: "/services/sculpture-elephant-front.jpeg",
    alt: "White elephant-head sculpture with ornate surface relief and prominent curved tusks",
    description:
      "An ornamental animal-head sculpture that combines a strong silhouette with patterned relief and sculptural tusks.",
    details: [
      "The light surface makes the carved-style decoration and layered forms visible.",
      "The head and tusks form a distinctive decorative focal point for an interior setting."
    ],
    briefChecklist: [
      "Reference artwork, desired scale and viewing angles",
      "Wall or support information and available installation space",
      "Surface finish, lighting and visitor access"
    ],
    industries: ["museums-themed-attractions", "hospitality-architectural-decor"],
    services: [{ label: "Custom fabrication capabilities", href: "/fabrication" }]
  },
  {
    id: "decorative-entrance-arch",
    facts: [{"label": "Work shown", "value": "Custom ornamental storefront surround"}, {"label": "Detail", "value": "Shaped arch profile and decorative relief"}, {"label": "Stage shown", "value": "Site installation"}],
    title: "Decorative entrance arch",
    category: "Architectural decor",
    image:
      "/projects/portfolio/commercial-brand-installations/historical-thematic-environments-25.jpeg",
    alt: "Installation of a white ornamental entrance arch against a dark storefront",
    description:
      "A shaped architectural surround that gives a storefront entrance a distinctive ornamental profile.",
    details: [
      "The installation photograph shows the decorative arch being positioned at the entrance.",
      "A light finish highlights the curved profile against the darker facade."
    ],
    briefChecklist: [
      "Measured facade drawings and clear entrance dimensions",
      "Existing structure, fixing interfaces and access constraints",
      "Exposure conditions, finish reference and installation sequence"
    ],
    industries: ["hospitality-architectural-decor", "retail-brand-activations"],
    services: [
      { label: "Themed environment fabrication", href: "/services/themed-environment-fabrication" }
    ]
  }
];

export function getProject(id: string) {
  return projects.find((project) => project.id === id);
}

export function projectHref(project: Pick<Project, "id">) {
  return `/works/${project.id}`;
}

export const MAX_SELECTED_PROJECTS = 6;

export function parseSelectedProjects(value: unknown): string[] {
  const candidates =
    typeof value === "string" ? value.split(",") : Array.isArray(value) ? value : [];
  return Array.from(
    new Set(candidates.filter((id): id is string => typeof id === "string" && !!getProject(id)))
  ).slice(0, MAX_SELECTED_PROJECTS);
}

export function enquiryHref(ids: string[] = [], industry?: string) {
  const params = new URLSearchParams();
  const selected = parseSelectedProjects(ids);
  if (selected.length) params.set("selected", selected.join(","));
  if (industry) params.set("industry", industry);
  return `/contact${params.size ? `?${params}` : ""}`;
}
