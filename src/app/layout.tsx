import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { MetaPixel } from "@/components/analytics/MetaPixel";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nocadernin.com.br"),
  title: "No Cadernin — Sistema de gestão pra loja pequena por R$4,99/mês",
  description:
    "Pare de anotar venda no caderno. Controle vendas, estoque, vendedores e metas pelo celular. Calcula lucro automático. R$4,99/mês, sem fidelidade.",
  openGraph: {
    title: "No Cadernin — Saia do caderno e venda com cabeça",
    description:
      "Sistema de gestão mobile-first por R$4,99/mês. Controle vendas, estoque, lucro e equipe.",
    images: ["/images/og-image.png"],
    locale: "pt_BR",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${manrope.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-brand-bg text-brand-fg font-sans">
        {children}
        <Analytics />
        <GoogleAnalytics id={process.env.NEXT_PUBLIC_GA_ID ?? ""} />
        <MetaPixel id={process.env.NEXT_PUBLIC_META_PIXEL_ID ?? ""} />
      </body>
    </html>
  );
}
