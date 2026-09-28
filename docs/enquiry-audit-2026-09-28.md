# Enquiry audit — 28 September 2026

Both public homepages opened during the audit. The `.com` site opens in English; `.com.tr` remains Turkish. The production commit inspected was `4ce92f8355cffe9f8c701af09ce42c0536de7601`.

## Confirmed problem

The independent domestic site's "Türkçe teklif formunu aç" link still pointed to `https://www.ardicdf.com/contact#brief`. Since the international routing update, this redirects to English. The companion change in `tahabaki6134/ardicdf-website-tr` points directly to `/tr/contact`, preserving method and project selections.

## Changes here

- A direct call link appears above the enquiry form. The optional callback/WhatsApp number is visible without opening extra project details.
- Client submission has a 60-second upper bound and does not automatically retry. A timeout or lost connection is explicitly an **unconfirmed** delivery, since the server may already have accepted it. Form entries remain in memory.
- Email, WhatsApp and phone alternatives appear alongside submission, with localized recovery text in all six languages.
- An incomplete security check has a specific prompt. Existing verification remains required; it is not bypassed.
- Existing analytics can distinguish validation, verification, response, network and timeout failures. Only language, stage and status are included. Server delivery errors log stage and provider HTTP status without enquiry text, email addresses, attachments or verification tokens.

## Evidence and limits

34 automated checks passed, including stalled requests, provider rejection, lost connections, false-success prevention and the existing six-language routing/notification checks. Email and verification providers are mocked in these tests. Both repositories completed production builds. Local HTTP rendering confirmed all six contact pages, Arabic RTL and the domestic handoff with selected methods and project preserved.

The latest website RFQ found in the connected mailbox was dated 17 September. Direct business correspondence to the studio address arrived on 25 September. Neither observation establishes website traffic or the origin of those correspondents.

Vercel analytics and runtime logs required sign-in. The public form required an interactive Cloudflare security check, which was not completed during this audit. No real enquiry or email was sent. Current inbox delivery, provider quota, traffic changes and Search Console's affected URLs therefore remain unverified. This work does not establish the cause of the decline in enquiries, or a change in ChatGPT recommendations.

No domains, subscriptions, hosting or email-provider settings were purchased or changed.
