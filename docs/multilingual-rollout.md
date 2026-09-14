# Multilingual site — review and rollout

The existing `ardicdf-website` Next.js/Vercel project now contains six language editions. No domain purchase, translation API, paid package or hosting migration is needed by this implementation.

## Address policy

- Turkish: unprefixed paths on `https://www.ardicdf.com`, including `/contact`, `/works`, `/imalat/karbon-fiber` and `/karsilastir`.
- Other languages: `/en`, `/de`, `/fr`, `/ru`, `/ar`, with matching page identities beneath them. Next.js normalizes trailing slashes.
- `/tr` is an internal rendering prefix, excluded from public links and the sitemap. Its pages carry the unprefixed Turkish canonical URL. Do not add a redirect on this internal render target: it can loop when a hosting proxy follows a middleware rewrite.
- Existing English-only `/manufacturing/...` and `/compare` addresses redirect to their `/en/...` versions. Legacy service articles redirect to the relevant manufacturing or application page. Shared old paths retain their subject with Turkish as the default; English counterparts remain under `/en`.
- `/live` remains removed and redirects to the workshop. `/references` redirects to projects.
- The user clarified on 2026-09-14 that `.com.tr` must remain an independent Turkish website for the domestic market. Do not redirect its pages, sitemap or robots to `.com`, and do not change the domestic site's content or contact setup as part of international-site work. The former companion redirect was reversed. The six-language international site remains on `.com`.
- There is no IP/country-based language redirect. Country and language are independent. `x-default` points to English; each ordinary page has six reciprocal language alternatives.

## Content ownership

`lib/i18n/messages/{locale}.json` contains translated interface and general page copy. `content-{locale}.json` contains project, archive, application, concept and team text. `methods-*.json` adds the four new technical translations while the existing Turkish and English technical descriptions are retained from `lib/manufacturing.ts`. `cnc.json` adds a dedicated CNC method in all six languages. Images are the existing project assets. Process illustrations are labelled as illustrations.

To add a language, add its dictionaries and technical copy, register it in `locales.ts`, and include it in the typed content loaders. Routing, language switching, canonical links and sitemap entries use the same page registry. Missing content fails validation rather than silently falling back to English.

Country-specific pages are supported through `country-pages.ts`, for example an Arabic page with country `QA` becomes `/ar/qa`. The registry is intentionally empty. Add a page only with actual destination-specific scope, delivery information or approved project references, and record the evidence. The language selector falls back to a language homepage if a country page has no translated counterpart. Do not invent local offices, companies, clients, logistics commitments or case studies.

## Enquiries

All six editions submit to the existing same-origin `/api/contact` endpoint and the existing team recipient. Language and ISO country code accompany the brief, dimensions, destination, selected examples and attachments. The customer confirmation and all displayed validation/server errors are localized; Arabic confirmation HTML has `dir=rtl`.

Public enquiry settings remain `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY`, `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, and optionally `CONTACT_NOTIFICATION_EMAIL`. Preview hostnames require permitted Turnstile configuration to submit real forms. No credential has been copied into source, and no external verification or email protection has been removed. The form displays a direct-contact fallback if configuration is unavailable.

Files remain limited to 3 PDF/JPG/PNG/WebP attachments, 2 MB combined. They are checked on the server and sent only to the team, never to a public image store or in the customer confirmation. Public example IDs can remain in session storage; form text, country and personal contact fields are not added to language-switch URLs.

## Review

`/review.html` displays the real site in a resizable frame with language/page selectors and 390/768/1280 px presets. It is an unlinked, noindex review tool, not a customer navigation page. It submits to the real configured endpoint if a reviewer sends a form.

Checks: `node --test tests/contact.test.cjs tests/attachments.test.cjs tests/multilingual.test.cjs`, `pnpm build`, then `python scripts/check-rendered-pages.py`. Review the responsive frame, keyboard navigation, Arabic layout and compare→enquiry→language switch in the deployment preview. Mocked tests cannot prove real email delivery. Retain the existing README release gate for configured delivery verification before merging to production.

No additional service was purchased. Actual usage remains subject to the existing hosting and email account limits; account billing settings were not changed.
