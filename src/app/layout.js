import { Mitr } from "next/font/google";
import "./globals.css";

const mitr = Mitr({
  variable: "--font-mitr",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Fluxon Digital",
  description: "Innovation Powered by Technology!",
  openGraph: {
    title: "Fluxon Digital",
    description: "Innovation Powered by Technology!",
    url: "https://fluxondigital.com.br/", // troque pela sua URL real
    siteName: "Fluxon Digital",
    images: [
      {
        url: "https://fluxondigital.com.br/og-image.png", // salve esta imagem em /public
        width: 1200,
        height: 630,
        alt: "Imagem de destaque da Fluxon Digital",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${mitr.variable} antialiased `}>{children}</body>
    </html>
  );
}
