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
      className="fixed bottom-4 right-4 z-40 inline-flex h-12 w-12 items-center justify-center border border-bronze/70 bg-ink/95 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-porcelain shadow-soft backdrop-blur transition duration-300 hover:border-bronze hover:bg-bronze hover:text-ink focus:outline-none focus:ring-2 focus:ring-bronze focus:ring-offset-2 focus:ring-offset-porcelain sm:bottom-6 sm:right-6 sm:h-auto sm:w-auto sm:px-5 sm:py-4"
    >
      <span className="sm:hidden" aria-hidden="true">
        WA
      </span>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
