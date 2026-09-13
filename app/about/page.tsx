import { CompanyAbout } from "@/components/company-about";
import { manufacturingMetadata } from "@/lib/manufacturing-meta";
export const metadata = manufacturingMetadata("About ARDIÇ · Design & Fabrication Team", "Meet the Istanbul-based EPSLAM company and team behind ARDIÇ design, digital fabrication, sculpture and project delivery.", { en: "/about", tr: "/about" }, "en");
const team: Array<{
  name: string;
  initials: string;
  role: string;
  copy: string;
  photo?: string;
}> = [
  {
    name: "Yusuf Baki",
    initials: "YB",
    role: "Owner & Fabrication Director",
    copy: "Responsible for production strategy, workshop management, and large-scale project implementation."
  },
  {
    name: "Taha Baki",
    initials: "TB",
    role: "Architecture, Strategy & Project Development",
    copy: "Responsible for architectural direction, project strategy, business development, and client relations."
  },
  {
    name: "Şiba Baki",
    initials: "SB",
    role: "Interior Design & Presentation",
    copy: "Responsible for interior design, presentation development, and creative project storytelling."
  },
  {
    name: "Rasim Gül",
    initials: "RG",
    role: "Visual Arts Specialist",
    copy: "Expert in artistic detailing, visual development, and surface / finishing techniques."
  },
  {
    name: "Gençağa Dilli",
    initials: "GD",
    role: "Sculptor",
    copy: "Expert in sculpture design, character production, and organic form development."
  },
  {
    name: "Fatih Dilli",
    initials: "FD",
    role: "Painter",
    copy: "Specializes in artistic painting, advanced coloring techniques, and special effects.",
    photo: "/team/fatih-dilli.png"
  }
];


export default function AboutPage() { return <CompanyAbout team={team} />; }
