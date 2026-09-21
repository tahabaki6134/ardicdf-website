# Indexing audit — 21 September 2026

Scope: the international `https://www.ardicdf.com` site. Production baseline: `224feb97f099a604ec589e2377dc79deca41a30a`.

## Live findings

- The current sitemap contains 246 unique, canonical URLs.
- All 246 were fetched from production. Every URL returned HTTP 200 without redirecting, matched its declared canonical, included an HTML language, and had no `noindex`/`none` directive in its robots metadata or `X-Robots-Tag` header.
- The public root deliberately redirects to `/en`. The root is not in the current sitemap; Turkish home is `/tr` and existing Turkish inner addresses remain available.
- Project selection pages deliberately use `noindex` and are excluded from the sitemap. The public layout preview also deliberately uses `noindex` and is excluded from the sitemap. These are not service or project portfolio pages.

These HTTP findings establish the current website configuration, not Google's actual index status or historical crawl results.

## Correction

`/review.html` was both disallowed in production `robots.txt` and marked `noindex` in its HTML and HTTP header. The disallow prevented crawlers from reading the exclusion directive. Remove only that production disallow so crawlers can read the existing `noindex`; retain the noindex metadata/header, API disallow and preview-deployment restrictions.

Google's guidance: https://developers.google.com/search/docs/crawling-indexing/block-indexing

## Validation

- New regression test checks all 246 sitemap URLs against page metadata, canonical routes, alternate destinations and middleware, plus utility-page noindex and preview restrictions.
- Production build, TypeScript and lint completed successfully.
- HTTP checks passed for English entry, Turkish addresses, Arabic layout attributes, legacy redirects, localized 404s and the crawlable preview page's noindex header.
- `python scripts/check-indexability.py --output /tmp/ardic-indexability.json` reproduced the live sitemap audit with zero failures. The script can also point at a local production server using `--base`.

## Search Console follow-up

The two 20 September notifications report “Page with redirect” and “Excluded by noindex”. They do not list affected URLs. The account's report still requires a successful Google sign-in; authentication was not completed in the review browser. No Search Console validation or sitemap submission has been claimed or performed.

After access is available, inspect the actual affected URLs and crawl dates. Keep intentional redirects and utility-page exclusions. Correct any unexpected affected content URLs, confirm the submitted sitemap uses the current canonical address, and request the appropriate recrawl/validation only after inspecting the report.
