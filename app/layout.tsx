import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: `${brand.name} | ${brand.tagline}`,
  description:
    "Architectural luxury design and fabrication studio creating brand installations, decor, sculptures, artworks, and thematic spaces."
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
