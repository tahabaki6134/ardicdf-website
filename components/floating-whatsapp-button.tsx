const whatsappUrl =
  "https://wa.me/905436268969?text=Hello%20Ardic%2C%20I%20would%20like%20to%20discuss%20a%20design%20and%20fabrication%20project";

export function FloatingWhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact Ardic Design and Fabrication on WhatsApp"
      data-track-location="floating"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border border-bronze/70 bg-porcelain text-ink shadow-[0_18px_55px_rgba(17,17,17,0.28)] transition duration-300 hover:-translate-y-0.5 hover:border-bronze hover:bg-bronze hover:text-porcelain focus:outline-none focus:ring-2 focus:ring-bronze focus:ring-offset-2 focus:ring-offset-porcelain sm:bottom-7 sm:right-7 sm:h-auto sm:w-auto sm:gap-3 sm:rounded-full sm:px-6 sm:py-4"
    >
      <span
        aria-hidden="true"
        className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-current/35"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.4 8.4 0 0 1-12.5 7.3L3 20l1.4-5A8.4 8.4 0 1 1 21 11.5Z" />
          <path d="M9.5 8.5c.2 2.7 1.7 4.5 4.4 5.4" />
        </svg>
      </span>
      <span className="hidden text-xs font-bold uppercase tracking-[0.2em] sm:inline">
        WhatsApp
      </span>
    </a>
  );
}
