import type { Metadata } from "next";
import { Bebas_Neue, Fraunces, Nunito } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { SkipLink } from "@/components/SkipLink";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { seo, site } from "@/content/site";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: seo.title,
    template: `%s | ${site.name}`,
  },
  description: seo.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  openGraph: {
    title: seo.title,
    description: seo.description,
    locale: seo.locale,
    type: "website",
    images: ["/images/logo.png"],
  },
  twitter: {
    card: "summary",
    title: seo.title,
    description: seo.description,
  },
  robots: { index: true, follow: true },
  icons: { icon: "/images/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${bebas.variable} ${nunito.variable} ${fraunces.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <JsonLd />
        <SkipLink />
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
