import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { ConversionTracking } from "@/components/conversion-tracking";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingWhatsAppButton } from "@/components/floating-whatsapp-button";
import { brand } from "@/lib/content";

const siteUrl = "https://www.ardicdf.com";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Ardıç Design & Fabrication",
      url: siteUrl,
      logo: `${siteUrl}/logo.svg`,
      description:
        "Ardıç Design & Fabrication is an Istanbul-based international custom fabrication company within EPSLAM, producing themed environments and scenic installations through CNC EPS/XPS and polyurethane machining and casting, fiberglass/GRP and carbon fiber composites, polyester molds, large-format 3D printing, sculpture, woodworking, prototypes, and multi-material production.",
      parentOrganization: {
        "@type": "Organization",
        name: "EPSLAM"
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+905436268969",
        contactType: "project enquiries",
        areaServed: "Worldwide",
        availableLanguage: ["English", "Turkish"]
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      name: "Ardıç Design & Fabrication",
      url: siteUrl,
      image: `${siteUrl}/og-image.png`,
      telephone: "+905436268969",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Karadeniz Caddesi No:131, Ferhatpaşa",
        addressLocality: "Ataşehir",
        addressRegion: "Istanbul",
        addressCountry: "TR"
      },
      parentOrganization: {
        "@id": `${siteUrl}/#organization`
      }
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#services`,
      name: "Design and Fabrication Services",
      provider: {
        "@id": `${siteUrl}/#organization`
      },
      areaServed: "Worldwide",
      serviceType: [
        "Themed environment fabrication",
        "Scenic fabrication",
        "Large-scale props",
        "CNC foam machining",
        "EPS / XPS CNC machining",
        "Polyurethane machining and casting",
        "Composite fabrication",
        "Mold making",
        "Fiberglass / GRP fabrication",
        "Polyester molding and casting",
        "Carbon fiber lamination",
        "Large-format 3D printing",
        "Prototype fabrication",
        "Sculpture fabrication",
        "Custom wood fabrication",
        "Multi-material fabrication"
      ],
      description:
        "An integrated workflow for digital development, CNC and additive production, polyurethane and composite fabrication, mold making, sculpture, woodworking, finishing, painting, assembly, and project preparation."
    }
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brand.name} | ${brand.tagline}`,
    template: `%s | ${brand.name}`
  },
  description:
    "Ardıç Design & Fabrication is an Istanbul-based international custom fabrication company working across CNC machining, composites, molds, large-format 3D printing, scenic production, sculpture, polyurethane and multi-material fabrication.",
  keywords: [
    "international fabrication",
    "custom fabrication",
    "CNC foam machining",
    "EPS XPS machining",
    "composite fabrication",
    "mold making",
    "large-format 3D printing",
    "scenic fabrication",
    "themed environment fabrication",
    "prototype fabrication",
    "Ardıç Design & Fabrication",
    "EPSLAM"
  ],
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-64x64.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon-128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/favicon-256x256.png", sizes: "256x256", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [{ url: "/favicon-256x256.png", sizes: "256x256", type: "image/png" }]
  },
  openGraph: {
    title: `${brand.name} | ${brand.tagline}`,
    description:
      "International custom fabrication from Istanbul across CNC machining, composites, molds, large-format 3D printing, scenic production, sculpture, polyurethane, and multi-material projects.",
    type: "website",
    url: "/",
    siteName: brand.name,
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${brand.name} logo`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} | ${brand.tagline}`,
    description:
      "International custom fabrication across CNC machining, composites, molds, large-format 3D printing, scenic production, sculpture, and multi-material projects.",
    images: ["/og-image.png"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Header />
        {children}
        <Footer />
        <FloatingWhatsAppButton />
        <ConversionTracking />
        <Analytics />
      </body>
    </html>
  );
}
