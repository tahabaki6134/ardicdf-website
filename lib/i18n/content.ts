import tr from "./messages/content-tr.json";
import en from "./messages/content-en.json";
import de from "./messages/content-de.json";
import fr from "./messages/content-fr.json";
import ru from "./messages/content-ru.json";
import ar from "./messages/content-ar.json";
import type { Locale } from "./locales";
export type Copy = { title: string; description: string };
export type Content = { projects: Record<string, Copy>; archives: Record<string, { title: string }>; industries: Record<string, Copy>; concepts: Record<string, Copy>; team: { name: string; initials: string; photo: string | null; role: string }[] };
const content: Record<Locale, Content> = { tr, en, de, fr, ru, ar };
export function localizedContent(locale: Locale) { return content[locale]; }
