import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy information for Ardıç Design & Fabrication project enquiries, contact details, WhatsApp communication, and submitted project information.",
  alternates: {
    canonical: "/privacy"
  },
  openGraph: {
    title: "Privacy Policy",
    description:
      "How Ardıç Design & Fabrication uses project enquiry information to respond to client requests.",
    url: "/privacy"
  }
};

const collectedData = [
  "name",
  "email address",
  "phone or WhatsApp number",
  "company name",
  "project type",
  "project location",
  "project size or scope",
  "project message or brief"
];

export default function PrivacyPage() {
  return (
    <main>
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
            Privacy Policy
          </p>
          <h1 className="mt-8 max-w-3xl font-display text-5xl leading-[1.02] text-ink md:text-7xl">
            Project enquiry information is used only to respond to your request.
          </h1>
          <p className="mt-8 text-lg leading-9 text-ink/65">
            Ardıç Design & Fabrication collects only the information needed to understand and
            respond to project enquiries. We do not sell submitted enquiry information or use it
            for unrelated marketing systems.
          </p>

          <div className="mt-14 grid gap-px bg-ink/10">
            <section className="bg-porcelain p-7 md:p-9">
              <h2 className="font-display text-3xl leading-tight text-ink">
                Information We Receive
              </h2>
              <p className="mt-5 leading-8 text-ink/65">
                When you submit the project enquiry form, contact us by email, call us, or continue
                through WhatsApp, we may receive:
              </p>
              <ul className="mt-6 grid gap-3 text-ink/70 sm:grid-cols-2">
                {collectedData.map((item) => (
                  <li key={item} className="border-l border-bronze pl-4 capitalize">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-porcelain p-7 md:p-9">
              <h2 className="font-display text-3xl leading-tight text-ink">
                How We Use It
              </h2>
              <p className="mt-5 leading-8 text-ink/65">
                We use enquiry information to review your project request, understand the required
                design and fabrication scope, contact you about the next steps, and coordinate
                project discussions when appropriate.
              </p>
            </section>

            <section className="bg-porcelain p-7 md:p-9">
              <h2 className="font-display text-3xl leading-tight text-ink">
                Communication Channels
              </h2>
              <p className="mt-5 leading-8 text-ink/65">
                If you contact us by phone, email, or WhatsApp, communication may continue through
                the channel you choose. WhatsApp conversations are also subject to WhatsApp&apos;s own
                privacy practices.
              </p>
            </section>

            <section className="bg-porcelain p-7 md:p-9">
              <h2 className="font-display text-3xl leading-tight text-ink">
                Contact
              </h2>
              <p className="mt-5 leading-8 text-ink/65">
                For privacy questions or to request removal of enquiry information, contact us at{" "}
                <Link
                  href="mailto:taaha.baaki@gmail.com"
                  className="font-semibold text-bronze transition hover:text-ink"
                >
                  taaha.baaki@gmail.com
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
