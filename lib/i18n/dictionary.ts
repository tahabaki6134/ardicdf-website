import tr from "./messages/tr.json";
import en from "./messages/en.json";
import de from "./messages/de.json";
import fr from "./messages/fr.json";
import ru from "./messages/ru.json";
import ar from "./messages/ar.json";
import type { Locale } from "./locales";
export type Dictionary = typeof en;
const dictionaries: Record<Locale, Dictionary> = { tr, en, de, fr, ru, ar };
export function dictionary(locale: Locale): Dictionary { return dictionaries[locale]; }
