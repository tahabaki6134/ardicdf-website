import { getMethod } from "@/lib/manufacturing";
import type { Metadata } from "next";
import { ContactPageContent } from "@/components/contact-page-content";
import { ContactForm } from "@/components/contact-form";
import { getIndustry } from "@/lib/industries";
import { parseSelectedProjects } from "@/lib/projects";

const pageTitle = "Request a Quote | International Custom Fabrication | Ardıç";
const pageDescription =
  "Request custom fabrication in Istanbul: epoxy casting, composites, CNC, complete furniture and facade elements. Share your design, production and installation scope.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: "/contact"
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/contact",
    type: "website",
    images: [
      {
        url: "/home/production-columns.png",
        alt: "Ardıç custom fabrication and sculptural production in Istanbul"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/home/production-columns.png"]
  }
};

export default function ContactPage({
  searchParams
}: {
  searchParams: { selected?: string | string[]; industry?: string | string[]; method?: string | string[]; alternative?: string | string[] };
}) {
  const initialSelected =
    searchParams.selected === undefined ? null : parseSelectedProjects(searchParams.selected);
  const initialIndustry =
    typeof searchParams.industry === "string" && getIndustry(searchParams.industry)
      ? searchParams.industry
      : "";
  const initialMethod = typeof searchParams.method === "string" && getMethod(searchParams.method) ? searchParams.method : "";
  const initialAlternative = typeof searchParams.alternative === "string" && getMethod(searchParams.alternative) && searchParams.alternative !== initialMethod ? searchParams.alternative : "";
  return <ContactPageContent><ContactForm key={`${initialMethod}:${initialAlternative}:${initialIndustry}:${initialSelected?.join(",") ?? "session"}`} initialSelected={initialSelected} initialIndustry={initialIndustry} initialMethod={initialMethod} initialAlternative={initialAlternative} /></ContactPageContent>;
}
