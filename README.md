# Ardıç Design & Fabrication website

Next.js website for the fabrication portfolio and international project enquiries.

## Development

Install the existing lockfile with `pnpm install --frozen-lockfile`. Copy `.env.example` to `.env.local` and configure the verification and email services. Run `pnpm dev` for local development and `pnpm build` for the production build.

## Enquiry configuration

- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY` enable Cloudflare verification. The site key must permit the hostname being used.
- `RESEND_API_KEY` enables email delivery. Use a verified production sender in `RESEND_FROM_EMAIL`; the onboarding sender is only a setup fallback.
- `CONTACT_NOTIFICATION_EMAIL` optionally sets the team's recipient.
- `lib/contact-details.ts` defines the public studio address (`info@ardicdf.com`) used in contact links and structured data. This is independent of the enquiry notification recipient.
- Public environment variables are included at build time. Configure them on the hosting project before its build.

The endpoint reports success only after the team's notification has been accepted by the email provider. Failure of the separate customer confirmation is reported independently. No live email or verification calls are made by the automated tests.

## Content and visitor flow

- `lib/projects.ts` defines six curated portfolio examples using existing photographs. Five have new detail pages; the original concert rockwork case study keeps its URL.
- `lib/industries.ts` defines six sector pages and prospective applications. These applications are not claims of completed commissions.
- `lib/planning.ts` supplies the planning guide and its matching FAQ structured data.
- Visitors can filter work, select up to six examples, share a selection link and carry it into the four-step enquiry.
- Only public portfolio IDs are stored in session storage or share links. Personal and project form text stays in page memory until submission.
- File references use a share-link field; there is no direct file upload or instant pricing calculator.
- Keep all existing gallery and service URLs. Update `app/sitemap.ts` when publishing substantive content changes.

Do not invent client names, dimensions, lead times, certifications or materials when extending the portfolio. Add these details only when verified project records are available. New project/sector pages have page-specific metadata and structured data; search or AI recommendations are not guaranteed.

## Checks

Run `pnpm lint`, `node --test tests/contact.test.cjs` and `pnpm build`.

Tests exercise the actual contact route against mocked providers, including the former Seoul/SEO false-positive, invalid input, HTML escaping, verification failure, notification failure, optional confirmation failure and selection validation. They also check curated asset paths.

Before releasing on the production branch, review the preview and verify real form delivery with the hosting project's configured Turnstile and Resend credentials. A passing local build does not verify those external service settings.
