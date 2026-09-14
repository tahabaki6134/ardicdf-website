import { manufacturingMethods, type MethodCopy } from "../manufacturing";
import de from "./messages/methods-de.json";
import fr from "./messages/methods-fr.json";
import ru from "./messages/methods-ru.json";
import ar from "./messages/methods-ar.json";
import cnc from "./messages/cnc.json";
import type { Locale } from "./locales";
const translated: Record<string, Record<string, MethodCopy>> = { de, fr, ru, ar };
export const methodIds = [...manufacturingMethods.map(m => m.id), "cnc"];
export function methodCopy(locale: Locale, id: string): MethodCopy {
  if (id === "cnc") return cnc[locale];
  const method = manufacturingMethods.find(m => m.id === id);
  if (!method) throw new Error(`Unknown manufacturing method: ${id}`);
  if (locale === "tr" || locale === "en") return method.copy[locale];
  const copy = translated[locale]?.[id];
  if (!copy) throw new Error(`Missing ${locale} content for ${id}`);
  return copy;
}
