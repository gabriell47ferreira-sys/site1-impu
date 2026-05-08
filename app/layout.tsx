import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Impulsione — Sua empresa no topo do Google Maps",
  description: "Posicionamento estratégico no Google Maps. Mais visibilidade, mais chamadas, mais vendas — sem depender de anúncios.",
  keywords: "Google Maps, SEO local, posicionamento Google Maps, mais clientes",
  openGraph: {
    title: "Impulsione — Sua empresa no topo do Google Maps",
    description: "Posicionamento estratégico no Google Maps. Mais visibilidade, mais chamadas, mais vendas.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
