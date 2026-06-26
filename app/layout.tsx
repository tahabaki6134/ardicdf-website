import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL("https://ardicdf.com"),
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
