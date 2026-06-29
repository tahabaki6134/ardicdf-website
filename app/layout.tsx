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
      alternateName: "Ardıç Mimarlık",
      url: siteUrl,
      logo: `${siteUrl}/logo.svg`,
      description:
        "Ardıç Design & Fabrication is an EPSLAM company creating themed environments, sculptural fabrication, architectural decor, CNC and EPS/XPS foam production for international projects.",
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
        streetAddress: "Karadeniz Caddesi No:131",
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
        "Themed environments",
        "Sculptural fabrication",
        "Architectural decor",
        "Brand installations",
        "CNC fabrication",
        "EPS and XPS foam fabrication",
        "Mold manufacturing",
        "Polyester casting",
        "Finishing and installation"
      ],
      description:
        "Integrated design, CNC production, EPS/XPS processing, sculpture, mold production, polyester casting, finishing, painting, assembly, and installation under one roof."
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
    "Ardıç Design & Fabrication is an EPSLAM company creating themed environments, sculptural fabrication, architectural decor, CNC and EPS/XPS foam production for international projects.",
  keywords: [
    "design and fabrication studio",
    "themed environments",
    "sculptural fabrication",
    "architectural decor",
    "CNC fabrication",
    "EPS foam fabrication",
    "XPS foam fabrication",
    "brand installations",
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
      "Design and fabrication studio for themed environments, sculptural works, architectural decor, CNC/EPS/XPS production, and international project delivery.",
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
      "Themed environments, sculptural fabrication, architectural decor, and CNC/EPS/XPS production for memorable built experiences.",
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
