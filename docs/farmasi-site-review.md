# FARMASI portfolio update · 19 September 2026

## Scope
Only ardicdf.com and tahabaki6134/ardicdf-website are changed. The independent Turkish domestic-market site ardicdf.com.tr and its repository are untouched. Unrelated image edits in the original checkout were excluded by working in a clean worktree.

## Changes
- Two supplied JPEG originals appear in a FARMASI project gallery in all six languages, with individual captions and alt text. The sailboats lead the home page; previous concert, columns, cosmetics and other projects remain accessible.
- Enquiry selection includes the new project and shares the existing contact endpoint.
- Footer language links retain equivalent pages.
- Project social previews use project-specific images.
- The contact verification widget overflowed at a 320px viewport. Cloudflare's official compact size fits within the form without disabling verification: https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/widget-configurations/
- The floating WhatsApp control now has a recognisable contact icon and a minimum 48px touch target.
- The sitemap includes the new page in all six languages. No domains, subscriptions, hosting changes or paid services were added.

## Verification and interruption
Before the environment disconnected, the implementation passed its production build, 23 tests, an audit of 246 rendered pages, and HTTP/legacy-redirect checks. Existing Arabic mobile layout and the contact-widget overflow were inspected in the browser.

The connection failed during the third JPEG upload. Source changes were recovered from the reviewed patches and unchanged main revision 77603d556f72e6be39dd034c6ef642a14513290d using the repository connector. Two original image blobs were recoverable; the boxed-product JPEG was not uploaded successfully. Its reference was excluded to avoid a broken image. Add it when the original attachment is accessible again, along with its six translated captions, and update the gallery-count test.

The user explicitly requested publication followed by live review, superseding the older README pre-release email gate for this update. This does not waive protected branch requirements, authentication or verification. No real enquiry or test email was sent. The current offline environment prevents repeating interactive mobile checks until it reconnects; deployment builds and public pages can still be checked.
