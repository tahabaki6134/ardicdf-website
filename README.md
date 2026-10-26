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

- `lib/projects.ts` defines eight curated portfolio examples, including the supplied FARMASI Boss Trip visuals and the retouched sculptural reception photographs. Project URLs remain stable across all six languages; the original concert rockwork case study keeps its URL.
- `lib/industries.ts` defines six sector pages and prospective applications. These applications are not claims of completed commissions.
- `lib/planning.ts` supplies the planning guide and its matching FAQ structured data.
- Visitors can filter work, select up to six examples, share a selection link and carry it into the short enquiry form.
- Only public portfolio IDs are stored in session storage or share links. Personal and project form text stays in page memory until submission.
- Visitors can attach up to six PDF/JPG/PNG/WebP files (4 MB total, decimal bytes); larger CAD files use a share-link field. Files use multipart upload to avoid base64 request overhead and stay below the hosting limit. The API bounds streamed requests at 4.3 MB, validates files, and retains compatibility with older JSON clients. Validated file bytes are attached only to the team notification. Optional delivery/event date and budget (including currency) fields are sent with the team notification and shown in the success summary. Oversized files get a specific explanation and a direct path to the share-link field; no originals are silently compressed. There is no instant pricing calculator.
- Keep all existing gallery and service URLs. Update `app/sitemap.ts` when publishing substantive content changes.

Do not invent client names, dimensions, lead times, certifications or materials when extending the portfolio. Add these details only when verified project records are available. New project/sector pages have page-specific metadata and structured data; search or AI recommendations are not guaranteed.

## Gallery

The main menu and homepage link to `/en/gallery` (and the five other language editions). `lib/photo-gallery.ts` collects all published project, archive and concept images in a single lazy-loaded grid. Byte-identical legacy copies are mapped in `lib/gallery-image-aliases.json`; reused concept covers retain their concept label. Visitors can search the gallery and filter by category or by production photographs versus design concepts. The viewer links to the corresponding project or archive and carries verified project references into the enquiry. Concept images remain explicitly labelled and never become completed-project selections.

The image viewer supports keyboard navigation within the filtered results, restores focus when closed, and provides a watermarked JPEG download. The browser renders an iridescent central ARDIÇ mark and a footer into the downloaded pixels, preserving aspect ratio and limiting the long edge to 4096 pixels. Original assets stay unchanged. This is a branded download feature, not DRM: public original files and screenshots cannot be prevented.

## Checks

Run `pnpm lint`, `node --test tests/*.test.cjs` and `pnpm build`.

Tests exercise the actual contact route against mocked providers, including the former Seoul/SEO false-positive, invalid input, HTML escaping, verification failure, notification failure, optional confirmation failure and selection validation. They also check curated asset paths.

Before releasing on the production branch, review the preview and verify real form delivery with the hosting project's configured Turnstile and Resend credentials. A passing local build does not verify those external service settings.

## Multilingual preview

Six editions share the existing project. The root opens in English at `/en`; Turkish pages use `/tr` and its subpaths. Legacy unprefixed international addresses redirect to `/en`, while explicitly Turkish manufacturing slugs redirect to `/tr`. The separate `.com.tr` website is unchanged. German, French, Russian and Arabic use language paths. Both language menus preserve validated comparison and enquiry selections. See [the rollout guide](docs/multilingual-rollout.md) for content editing and enquiry configuration. The public preview review screen is `/review.html`.
