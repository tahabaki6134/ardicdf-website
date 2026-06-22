import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL("https://ardicdf-website.vercel.app"),
  title: `${brand.name} | ${brand.tagline}`,
  description:
    "Architectural luxury design and fabrication studio creating brand installations, decor, sculptures, artworks, and thematic spaces.",
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
      "Premium architectural design and fabrication for brand installations, decor, sculptures, artworks, and thematic spaces.",
    type: "website",
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
      "Premium architectural design and fabrication for memorable spaces and objects.",
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
