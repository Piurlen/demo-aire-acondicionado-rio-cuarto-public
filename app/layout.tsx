import type { Metadata } from "next";
import "./globals.css";

const description =
  "Servicio técnico de aire acondicionado en Río Cuarto, Córdoba. Consultas directas por WhatsApp o teléfono.";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Fabián Fuentes | Servicio técnico de aire acondicionado en Río Cuarto",
  description,
  keywords: [
    "aire acondicionado Río Cuarto",
    "servicio técnico aire acondicionado",
    "climatización Río Cuarto",
    "Córdoba",
  ],
  openGraph: {
    title: "Fabián Fuentes | Climatización profesional en Río Cuarto",
    description,
    locale: "es_AR",
    type: "website",
    images: [{ url: "/images/hero-technician.png", width: 2048, height: 960, alt: "Técnico revisando un aire acondicionado split" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR">
      <body>{children}</body>
    </html>
  );
}
