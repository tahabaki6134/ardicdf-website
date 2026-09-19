import tr from "./messages/tr.json";
import en from "./messages/en.json";
import de from "./messages/de.json";
import fr from "./messages/fr.json";
import ru from "./messages/ru.json";
import ar from "./messages/ar.json";
import delivery from "./messages/delivery.json";
import type { Locale } from "./locales";
export type Dictionary = typeof en & typeof delivery.en.interface;
const dictionaries: Record<Locale, Dictionary> = {
  tr: { ...tr, ...delivery.tr.interface }, en: { ...en, ...delivery.en.interface },
  de: { ...de, ...delivery.de.interface }, fr: { ...fr, ...delivery.fr.interface },
  ru: { ...ru, ...delivery.ru.interface }, ar: { ...ar, ...delivery.ar.interface }
};
export function dictionary(locale: Locale): Dictionary { return dictionaries[locale]; }
