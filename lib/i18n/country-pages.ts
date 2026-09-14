import type { Locale } from "./locales";
export type CountryPage = { locale: Locale; country: string; title: string; description: string; paragraphs: string[]; evidence: string[] };
// Publish a country page only when it adds verified, country-specific information.
// Examples of evidence: an approved delivery scope or a published project record.
// No placeholder country pages, invented offices or automatic country-to-language mapping.
export const countryPages: CountryPage[] = [];
