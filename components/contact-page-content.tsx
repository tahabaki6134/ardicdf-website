import Link from "next/link";
import type { ReactNode } from "react";
import { manufacturingLanguage as lang } from "@/lib/manufacturing-site";
import { contactEmail } from "@/lib/contact-details";

export function ContactPageContent({ children }: { children: ReactNode }) {
  const tr = lang === "tr";
  return <main className="page-shell">
    <div className="mb-7 max-w-3xl"><p className="eyebrow">{tr ? "Proje talebi" : "Project enquiry"}</p><h1 className="mt-3 font-display text-4xl leading-tight md:text-6xl">{tr ? "Ne üretmek istediğinizi paylaşın." : "Share what you want to build."}</h1><p className="mt-4 text-lg leading-8 text-ink/70">{tr ? "Tek parça veya komple proje. Bir açıklama, çizim ya da fotoğrafla başlayalım." : "An individual piece or a complete project. Start with a description, a drawing or a photo."}</p></div>
    <div className="grid items-start gap-8 lg:grid-cols-[1.5fr_0.75fr]">{children}<aside className="space-y-7 lg:sticky lg:top-28">
      <section className="border-t border-ink/20 pt-5"><h2 className="font-display text-2xl">{tr ? "Doğrudan ulaşın" : "Contact us directly"}</h2><a href={`mailto:${contactEmail}`} className="text-link mt-4 block break-words">{contactEmail}</a><a href="tel:+905436268969" className="mt-4 block">+90 543 626 89 69</a><a href="https://wa.me/905436268969" target="_blank" rel="noreferrer" className="text-link mt-4 inline-block">WhatsApp ↗</a><p className="mt-4 text-sm text-ink/65">{tr ? "Türkçe ve İngilizce iletişim." : "Enquiries in English or Turkish."}</p></section>
      <section className="border-t border-ink/20 pt-5"><h2 className="font-display text-2xl">{tr ? "Sonraki adım" : "What happens next"}</h2><p className="mt-4 leading-7 text-ink/70">{tr ? "Ekibimiz talebinizi inceler; kullanım, ölçü ve üretim kapsamını sizinle netleştirerek teklif hazırlar. Malzemeyi önceden seçmeniz gerekmez." : "Our team reviews your brief, clarifies the use, dimensions and scope with you, then prepares a quotation. You do not need to choose the material in advance."}</p><Link href="/services" className="text-link mt-4 inline-block">{tr ? "İmalat yöntemlerini inceleyin" : "Explore manufacturing methods"} →</Link></section>
      <section className="border-t border-ink/20 pt-5"><h2 className="font-display text-2xl">{tr ? "İstanbul atölyemiz" : "Our Istanbul workshop"}</h2><address className="mt-4 not-italic leading-7 text-ink/70">Karadeniz Caddesi No:131, Ferhatpaşa<br/>Ataşehir, İstanbul, Türkiye</address><a href="https://www.google.com/maps?q=Karadeniz%20Caddesi%20No%3A131%2C%20Ferhatpa%C5%9Fa%2C%20Ata%C5%9Fehir%2C%20Istanbul%2C%20Turkey" className="text-link mt-4 inline-block" target="_blank" rel="noreferrer">{tr ? "Haritada görün" : "View location"} ↗</a></section>
    </aside></div>
  </main>;
}
