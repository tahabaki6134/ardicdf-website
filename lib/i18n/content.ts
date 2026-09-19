import tr from "./messages/content-tr.json";
import en from "./messages/content-en.json";
import de from "./messages/content-de.json";
import fr from "./messages/content-fr.json";
import ru from "./messages/content-ru.json";
import ar from "./messages/content-ar.json";
import delivery from "./messages/delivery.json";
import type { Locale } from "./locales";
export type Copy = { title: string; description: string };
export type ProjectCopy = Copy & { details?: string[]; facts?: { label: string; value: string }[]; gallery?: { alt: string; caption: string }[]; note?: string };
export type Content = { projects: Record<string, ProjectCopy>; archives: Record<string, { title: string }>; industries: Record<string, Copy>; concepts: Record<string, Copy>; team: { name: string; initials: string; photo: string | null; role: string }[] };
const content: Record<Locale, Content> = { tr, en, de, fr, ru, ar };
export function localizedContent(locale: Locale): Content {
  const base = content[locale];
  return { ...base, projects: { ...base.projects, "sculptural-reception-interior": delivery[locale].project } };
}
