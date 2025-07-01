import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

export const metadata: Metadata = {
  title: "WapyCloud – Création de sites internet & applications web cloud",
  description: "WapyCloud est une agence spécialisée dans la création de sites internet et d'applications web performantes, évolutives et sécurisées, entièrement hébergées dans le cloud. Lancez votre solution digitale sur mesure, clé en main et accessible depuis partout.",
  keywords: [
    "création site internet",
    "développement web",
    "application web cloud",
    "hébergement cloud",
    "agence web",
    "site web moderne",
    "solution SaaS",
    "site vitrine",
    "application sur mesure",
    "WapyCloud"
  ],
  authors: [{ name: "WapyCloud", url: "https://wapycloud.com" }],
  creator: "WapyCloud",
  publisher: "WapyCloud",
  metadataBase: new URL("https://wapycloud.com"),
  alternates: {
    canonical: "https://wapycloud.com",
  },
  openGraph: {
    title: "WapyCloud – Création de sites internet & applications web cloud",
    description: "Créez votre site ou application web sur mesure avec WapyCloud. Performances, sécurité, hébergement cloud et accompagnement personnalisé.",
    url: "https://wapycloud.com",
    siteName: "WapyCloud",
    images: [
      {
        url: "https://wapycloud.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aperçu du site WapyCloud – création site et application cloud",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WapyCloud – Création de sites et applications web cloud",
    description: "Développement web sur mesure, hébergement cloud, site vitrine ou SaaS : découvrez les solutions WapyCloud.",
    images: ["https://wapycloud.com/og-image.jpg"],
    site: "@WapyCloud",
    creator: "@WapyCloud",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head/>
      <body className="relative w-full min-h-screen flex flex-col overflow-x-hidden font-primary bg-body-background">
        <Navbar />
        <main className="flex-1 overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
