export const initialEnquiry = {
  fullName: "",
  company: "",
  companyWebsite: "",
  email: "",
  phone: "",
  country: "",
  projectType: "",
  industry: "",
  intendedUse: "",
  projectLocation: "",
  approximateDimensions: "",
  quantity: "",
  targetDeliveryDate: "",
  materialPreference: "",
  targetFinish: "",
  installationSupport: "",
  budgetRange: "",
  confidentiality: "",
  referenceLink: "",
  message: ""
};
export type Enquiry = typeof initialEnquiry;
export type EnquiryField = keyof Enquiry;
export type EnquiryErrors = Partial<Record<EnquiryField, string>>;

export const fieldLimits: Record<EnquiryField, number> = {
  fullName: 120,
  company: 160,
  companyWebsite: 200,
  email: 254,
  phone: 80,
  country: 100,
  projectType: 120,
  industry: 100,
  intendedUse: 160,
  projectLocation: 180,
  approximateDimensions: 160,
  quantity: 80,
  targetDeliveryDate: 40,
  materialPreference: 300,
  targetFinish: 300,
  installationSupport: 120,
  budgetRange: 80,
  confidentiality: 120,
  referenceLink: 1000,
  message: 3000
};

export const fieldLabels: Record<EnquiryField, string> = {
  fullName: "Full name",
  company: "Company / studio",
  companyWebsite: "Company website",
  email: "Email",
  phone: "Phone / WhatsApp",
  country: "Your country",
  projectType: "Project type",
  industry: "Sector",
  intendedUse: "Use & setting",
  projectLocation: "Project destination",
  approximateDimensions: "Approximate dimensions",
  quantity: "Quantity",
  targetDeliveryDate: "Target delivery date",
  materialPreference: "Material / process preference",
  targetFinish: "Target finish",
  installationSupport: "Delivery / site support",
  budgetRange: "Target budget",
  confidentiality: "Confidentiality",
  referenceLink: "Drawing / model / reference link",
  message: "Project brief"
};

export const enquirySteps: { title: string; fields: EnquiryField[] }[] = [
  { title: "Your project", fields: ["projectType", "industry", "message"] },
  {
    title: "Size & setting",
    fields: [
      "intendedUse",
      "approximateDimensions",
      "quantity",
      "projectLocation",
      "targetDeliveryDate",
      "installationSupport"
    ]
  },
  {
    title: "Finish & files",
    fields: [
      "materialPreference",
      "targetFinish",
      "budgetRange",
      "confidentiality",
      "referenceLink"
    ]
  },
  { title: "Review & send", fields: ["fullName", "company", "email", "country", "phone"] }
];

export const projectTypes = [
  "Scenic Fabrication / Large-Scale Props",
  "Brand Activation / Exhibition",
  "Themed Environment Fabrication",
  "Architectural Decor",
  "Sculpture / Character Production",
  "Artificial Rock / Organic Forms",
  "CNC Foam / EPS / XPS Machining",
  "Polyurethane Machining / Casting",
  "Composite Fabrication / Mold Making",
  "Fiberglass / GRP / Polyester",
  "Carbon Fiber Lamination",
  "Large-Format 3D Printing",
  "Molds / Masters / Plugs / Tooling",
  "Industrial Prototype / Product Development",
  "Wood Fabrication / CNC Woodworking",
  "UAV / USV Prototype Development",
  "Multi-Material Custom Fabrication",
  "Not sure yet — please advise",
  "Other"
];

export const budgetRanges = [
  "Not defined yet",
  "Under €5,000",
  "€5,000 – €15,000",
  "€15,000 – €30,000",
  "€30,000 – €75,000",
  "€75,000 – €150,000",
  "€150,000+",
  "Prefer to discuss privately"
];
export const installationOptions = [
  "Fabrication only",
  "Fabrication + delivery preparation",
  "Site assembly support may be required",
  "Installation may be required",
  "Not sure yet"
];
export const confidentialityOptions = [
  "Standard project enquiry",
  "Confidential project",
  "NDA required before detailed file exchange"
];
export const requiredFields: EnquiryField[] = ["fullName", "email", "projectType", "message"];

export function validateEnquiry(
  form: Enquiry,
  fields: EnquiryField[] = Object.keys(initialEnquiry) as EnquiryField[]
): EnquiryErrors {
  const errors: EnquiryErrors = {};
  for (const field of fields) {
    const value = form[field].trim();
    if (requiredFields.includes(field) && !value)
      errors[field] = `Please add ${fieldLabels[field].toLowerCase()}.`;
    else if (value.length > fieldLimits[field])
      errors[field] = `Please use ${fieldLimits[field]} characters or fewer.`;
    else if (field === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
      errors[field] = "Please enter a valid email address.";
    else if (field === "referenceLink" && value) {
      try {
        const url = new URL(value);
        if (!["https:", "http:"].includes(url.protocol) || url.username || url.password)
          errors[field] = "Use an http or https share link without account credentials.";
      } catch {
        errors[field] = "Please enter a complete share link beginning with https://.";
      }
    }
  }
  return errors;
}
