# ARDIÇ website audit — 4 November 2026

Scope: the six language editions of `www.ardicdf.com` in this repository. This change is prepared for a preview branch. New photographs will be supplied separately.

## Findings and changes

- Industry detail pages previously displayed application examples and a brief checklist only in English. All six sectors now include two localized application examples and three preparation items in every language.
- Four concise homepage cards help visitors start from their intended application: brand activations, modular decor, sculptural interiors and themed environments. The cards use existing sector routes and the established visual style.
- The homepage “All projects” action now opens the full portfolio rather than scrolling to three featured projects.
- The optional enquiry section now exposes target delivery date, use and setting, and budget. These fields already existed in the request model, validation and email pipeline. No pricing, lead-time or availability promises have been added.
- The reception and concert-rockwork introductions explain their fabrication context more directly. No unverified client names, dimensions, material specifications or certifications have been added.
- The sitemap records the content update. The rendered-page checker now expects 258 localized pages, including the six existing gallery pages.

## Trend research and practical relevance

The following sources informed application choices, rather than claims about completed work:

- [VML: The Future 100, experiential trends](https://www.vml.com/insight/the-future-100-2026-experiential-trends): physical brand experiences and immersive spaces support the brand-activation and themed-space routes.
- [JLL: Global design trends](https://www.jll.com/en-us/insights/market-outlook/global-design-trends): tactile environments and adaptable design support earlier discussions of finish samples, modular construction and reuse. Reuse is a planning topic, not a sustainability certification.
- [Webflow: Web design trends 2026](https://webflow.com/blog/web-design-trends-2026): distinctive visual identity supports keeping the site's typography and palette while clarifying navigation.
- [Google Search: AI features and website guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide): specific, useful project information supports fuller case studies. Search visibility and AI citations are not guaranteed.

## Next photography pass

For each project, request an overall view, one detail and a production or installation view. Add verified dimensions, material/finish, destination and project scope when records are supplied. Keep concept images and completed project evidence clearly identified.

## Verification

Passed for this change: `pnpm exec tsc --noEmit`, all 38 Node tests, `pnpm build` (264 generated outputs), and `python scripts/check-rendered-pages.py` (258 localized HTML pages). The rendered checks cover language and RTL, one H1, canonicals, reciprocal language alternates, internal links, anchors and image paths. The multilingual test covers sector content completeness and forwarding/HTML escaping of the newly exposed enquiry fields using mocked providers.

Preview review and real form delivery with configured Turnstile and Resend services remain required before a production release. Automated tests do not send live email. The separate `.com.tr` project is outside this change.
