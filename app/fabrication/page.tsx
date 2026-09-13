import { WorkshopPage } from "@/components/workshop-page";
import { manufacturingMetadata } from "@/lib/manufacturing-meta";
export const metadata = manufacturingMetadata("Fabrication Workshop · Design to Installation", "CNC, composites, epoxy casting, 3D printing and woodworking in our Istanbul workshop. Complete furniture and facade fabrication through installation.", { en: "/fabrication", tr: "/fabrication" }, "en");
export default function FabricationPage() { return <WorkshopPage />; }
