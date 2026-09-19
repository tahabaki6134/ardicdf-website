# FARMASI portfolio update · 19 September 2026

## Scope
Only ardicdf.com and tahabaki6134/ardicdf-website are changed. The independent Turkish domestic-market site ardicdf.com.tr and its repository are untouched. Unrelated image edits in the original checkout were excluded by working in a clean worktree.

## Changes
- All three supplied JPEG originals appear in a FARMASI project gallery in all six languages, with individual captions and alt text. The sailboats lead the home page; previous concert, columns, cosmetics and other projects remain accessible. The presentation-box original was recovered from the reattached file without altering its product or lettering.
- Project pages show the quote and reference-selection actions immediately below the introduction. Longer project details follow the gallery, bringing the images earlier in the page. The existing closing project-brief section is retained.
- Comparison pages offer a quote for both chosen processes immediately below the selectors as well as after the detailed table. Project and archive pages now highlight the Projects section in navigation.
- Enquiry selection includes the new project and shares the existing contact endpoint.
- Footer language links retain equivalent pages.
- Project social previews use project-specific images.
- The contact verification widget overflowed at a 320px viewport. Cloudflare's official compact size fits within the form without disabling verification: https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/widget-configurations/
- The floating WhatsApp control now has a recognisable contact icon and a minimum 48px touch target.
- The sitemap includes the new page in all six languages. No domains, subscriptions, hosting changes or paid services were added.

## Verification
The recovered three-image implementation passed the production build, all 23 tests, an audit of 246 rendered pages, and HTTP/legacy-redirect checks. The audit covers language and direction, headings, canonical URLs, reciprocal language alternates, internal links, anchors and image paths.

Interactive review resumed after the previous environment interruption. The live English comparison was inspected at 390px and the Arabic form at 320px using the responsive review page. Submitting the empty Arabic form displayed the localized required-field errors and focused an invalid field, without sending an enquiry. The review identified the excessive text before project images and the long scroll to quote actions addressed above.

The user explicitly requested publication followed by live review, superseding the older README pre-release email gate for this update. This does not waive protected branch requirements, authentication or verification. No real enquiry or test email was sent; final mailbox delivery is not claimed as verified.
