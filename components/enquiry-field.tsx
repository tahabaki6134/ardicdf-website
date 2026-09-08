"use client";

import {
  type Enquiry,
  type EnquiryErrors,
  type EnquiryField as FieldName,
  fieldLabels,
  fieldLimits,
  requiredFields
} from "@/lib/enquiry";

type Props = {
  name: FieldName;
  form: Enquiry;
  errors: EnquiryErrors;
  onChange: (name: FieldName, value: string) => void;
  options?: (string | { value: string; label: string })[];
  multiline?: boolean;
  type?: "text" | "email" | "tel" | "date" | "url";
  placeholder?: string;
  hint?: string;
  autoComplete?: string;
};

export function EnquiryField({
  name,
  form,
  errors,
  onChange,
  options,
  multiline,
  type = "text",
  placeholder,
  hint,
  autoComplete
}: Props) {
  const required = requiredFields.includes(name);
  const inputProps = {
    id: name,
    name,
    value: form[name],
    required,
    "aria-invalid": !!errors[name],
    "aria-describedby":
      [hint && `${name}-hint`, errors[name] && `${name}-error`].filter(Boolean).join(" ") ||
      undefined,
    onChange: (
      event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => onChange(name, event.target.value),
    className: `field${errors[name] ? " border-red-700" : ""}`
  };
  return (
    <div className="min-w-0">
      <label htmlFor={name} className="mb-2 block text-sm font-semibold">
        {fieldLabels[name]}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      {options ? (
        <select {...inputProps}>
          <option value="">{placeholder || "Choose an option"}</option>
          {options.map((option) => {
            const value = typeof option === "string" ? option : option.value;
            return (
              <option key={value} value={value}>
                {typeof option === "string" ? option : option.label}
              </option>
            );
          })}
        </select>
      ) : multiline ? (
        <textarea
          {...inputProps}
          rows={5}
          maxLength={fieldLimits[name]}
          placeholder={placeholder}
        />
      ) : (
        <input
          {...inputProps}
          type={type}
          maxLength={fieldLimits[name]}
          placeholder={placeholder}
          autoComplete={autoComplete}
        />
      )}
      {hint && (
        <p id={`${name}-hint`} className="mt-2 text-sm leading-6 text-ink/70">
          {hint}
        </p>
      )}
      {errors[name] && (
        <p id={`${name}-error`} className="mt-2 text-sm text-red-800">
          {errors[name]}
        </p>
      )}
    </div>
  );
}
