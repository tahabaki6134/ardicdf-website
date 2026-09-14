import { fieldLimits, requiredFields, type Enquiry, type EnquiryField } from "../enquiry";
import { countryCodes } from "./countries";
import type { Dictionary } from "./dictionary";
export function validateLocalized(form: Enquiry, t: Dictionary, requireCountry = true) {
  const errors: Partial<Record<EnquiryField, string>> = {};
  for (const key of Object.keys(fieldLimits) as EnquiryField[]) {
    const value = form[key].trim();
    if ((requiredFields.includes(key) || (requireCountry && key === "country")) && !value) errors[key] = t.error_required;
    else if (value.length > fieldLimits[key]) errors[key] = t.error_length;
    else if (key === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) errors[key] = t.error_email;
    else if (key === "country" && requireCountry && !countryCodes.includes(value)) errors[key] = t.country_choose;
    else if (key === "referenceLink" && value) {
      try { const url = new URL(value); if (!["http:", "https:"].includes(url.protocol) || url.username || url.password) errors[key] = t.error_link; }
      catch { errors[key] = t.error_link; }
    }
  }
  return errors;
}
