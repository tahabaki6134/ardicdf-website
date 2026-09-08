export type Industry = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  alt: string;
  applications: { title: string; description: string }[];
  checklist: string[];
};

export const industries: Industry[] = [
  {
    slug: "retail-brand-activations",
    title: "Retail & brand activation fabrication",
    shortTitle: "Retail & brand activations",
    description:
      "Custom product replicas, sculptural displays and branded objects for window displays, launches, pop-ups and experiential campaigns.",
    image: "/projects/portfolio/commercial-brand-installations/molds-composite-production-10.jpeg",
    alt: "Cosmetic bottle display props from the Ardıç portfolio",
    applications: [
      {
        title: "Beauty & fragrance displays",
        description:
          "Explore enlarged packaging, bottle-shaped props, sculptural plinths and launch installations using your approved product geometry and artwork."
      },
      {
        title: "Food & beverage replicas",
        description:
          "Develop oversized food forms, packaging displays and photographic focal points for campaigns and retail environments."
      },
      {
        title: "Agency production support",
        description:
          "Bring a concept, campaign deadline and rollout plan. We can review fabrication, repeat quantities and packing as one brief; white-label arrangements can be discussed."
      }
    ],
    checklist: [
      "Brand guidelines, artwork and product references",
      "Locations, display duration and quantity per location",
      "Customer interaction, finish samples and approved colours",
      "Delivery sequence, installation access and reuse plans"
    ]
  },
  {
    slug: "events-exhibitions",
    title: "Event & exhibition fabrication",
    shortTitle: "Events & exhibitions",
    description:
      "Scenic environments, statement props and modular display elements for concerts, exhibitions, launches and touring experiences.",
    image:
      "/works/modular-artificial-rock-concert-environment/concert-rock-environment-full-stage.jpeg",
    alt: "Artificial-rock scenic environment in a completed concert setting",
    applications: [
      {
        title: "Concert & live-event scenery",
        description:
          "Translate scenic drawings into a proposed production route for rockwork, sculptural stage elements and large scenic surfaces."
      },
      {
        title: "Exhibition focal points",
        description:
          "Consider oversized objects, dimensional logos and product demonstration models that can be integrated into a stand contractor’s build."
      },
      {
        title: "Reusable campaign elements",
        description:
          "Plan split lines, access, packing and repeated handling early when a display will travel between events."
      }
    ],
    checklist: [
      "Venue plans and the event opening date",
      "Load-in windows, access doors and handling equipment",
      "Maximum transport sizes and repeated-use requirements",
      "Venue material documentation, engineering and fixing requirements"
    ]
  },
  {
    slug: "museums-themed-attractions",
    title: "Museum & themed attraction fabrication",
    shortTitle: "Museums & themed attractions",
    description:
      "Sculptural characters, artificial landscapes and themed architectural elements for visitor environments and interpretation projects.",
    image: "/services/sculpture-elephant-front.jpeg",
    alt: "Ornamental elephant-head sculpture with detailed surface relief",
    applications: [
      {
        title: "Themed landscapes",
        description:
          "Explore artificial rockwork, scenic terrain and organic forms coordinated with the surrounding exhibit design."
      },
      {
        title: "Characters & interpretive models",
        description:
          "Develop animal forms, sculptural figures and enlarged models from curator-approved references. Accuracy and visitor interaction belong in the initial brief."
      },
      {
        title: "Immersive architectural details",
        description:
          "Combine columns, arches, ornamental reliefs and scenic surfaces into a coordinated fabrication package."
      }
    ],
    checklist: [
      "Visitor journey, approved references and interpretation goals",
      "Viewing distance, touch access and maintenance needs",
      "Indoor or outdoor conditions and expected service life",
      "Lighting, AV interfaces, fixing details and project standards"
    ]
  },
  {
    slug: "hospitality-architectural-decor",
    title: "Hospitality & architectural decor fabrication",
    shortTitle: "Hospitality & architectural decor",
    description:
      "Custom decorative forms for hotels, restaurants, retail interiors and architectural projects, coordinated around the designer’s geometry and finish intent.",
    image:
      "/projects/portfolio/historical-thematic-environments/historical-thematic-environments-04.jpeg",
    alt: "Paired classical decorative columns with a stone-effect finish",
    applications: [
      {
        title: "Architectural ornament",
        description:
          "Review custom columns, decorative arches, cornices and relief panels as a coordinated set of profiles and surface finishes."
      },
      {
        title: "Sculptural interior features",
        description:
          "Explore statement sculptures, ornamental wall features and shaped display elements for reception areas and hospitality spaces."
      },
      {
        title: "Bespoke furniture forms",
        description:
          "Bring a sculptural furniture concept for a feasibility review covering geometry, substrate, finish and intended use. Functional requirements need to be agreed before production."
      }
    ],
    checklist: [
      "Architectural drawings, survey information and tolerances",
      "Finish samples and adjacent material references",
      "Support structure, fixing interfaces and access",
      "Cleaning, touch exposure and project material requirements"
    ]
  },
  {
    slug: "film-television",
    title: "Film, television & set fabrication",
    shortTitle: "Film & television",
    description:
      "Discuss scenic pieces, sculptural props and architectural set elements with a fabrication team working across CNC, sculpting, composites and finishing.",
    image: "/projects/portfolio/commercial-brand-installations/sculptures-characters-14.jpeg",
    alt: "Sculpted burger display prop in a fabrication workshop",
    applications: [
      {
        title: "Camera-facing props",
        description:
          "Explore enlarged objects, product replicas and sculptural forms around the required shot, distance and finish."
      },
      {
        title: "Scenic & architectural pieces",
        description:
          "Review artificial rock forms, themed surfaces, columns and ornament for integration into an art department’s set design."
      },
      {
        title: "Repeat props & variants",
        description:
          "For repeated shapes or alternative finishes, discuss whether a mold-based route fits the geometry, quantity and production schedule."
      }
    ],
    checklist: [
      "Art department drawings and visual references",
      "Camera distance, lighting and visible faces",
      "Handling, performer interaction and duplicate requirements",
      "Shoot dates, confidentiality and set access"
    ]
  },
  {
    slug: "prototypes-display-models",
    title: "Prototype & display model fabrication",
    shortTitle: "Prototypes & display models",
    description:
      "Review physical form studies, presentation models and custom shells using CNC machining, large-format 3D printing and multi-material fabrication.",
    image:
      "/projects/portfolio/historical-thematic-environments/historical-thematic-environments-04.jpeg",
    alt: "Repeated fabricated forms illustrating geometry and surface finish development",
    applications: [
      {
        title: "Full-scale form studies",
        description:
          "Evaluate proportions and appearance with a physical model before committing to a final production route."
      },
      {
        title: "Simulator & demonstrator shells",
        description:
          "Explore non-functional exterior shells, exhibition demonstrators and presentation housings. Mechanical, electrical and certified performance requirements need separate scope agreement."
      },
      {
        title: "Patterns, molds & repeat parts",
        description:
          "Discuss master patterns and mold development where the geometry, finish and planned quantities justify a repeat-production process."
      }
    ],
    checklist: [
      "CAD format, geometry, scale and revision status",
      "Visual model or functional part: define the intended use",
      "Critical dimensions, tolerances and mating interfaces",
      "Quantity, surface finish and any required testing"
    ]
  }
];

export function getIndustry(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}
