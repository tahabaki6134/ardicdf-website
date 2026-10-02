import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://epslam.com"),
  title: "EPSLAM | 2D & 3D EPS Strafor Üretimi İstanbul",
  description: "İstanbul Ferhatpaşa'da 2D ve 3D EPS strafor modelleme, rölyef, mimari dekorasyon, söve ve proje bazlı özel üretim.",
  keywords: ["strafor kesim istanbul","3d strafor modelleme","eps üretim","strafor rölyef","strafor dekor","eps söve","strafor heykel"],
  openGraph: {
    title: "EPSLAM | EPS ile Özel Üretim",
    description: "2D & 3D EPS modelleme, rölyef, mimari dekorasyon ve özel üretim.",
    url: "https://epslam.com",
    siteName: "EPSLAM",
    locale: "tr_TR",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="tr"><body>{children}</body></html>;
}
