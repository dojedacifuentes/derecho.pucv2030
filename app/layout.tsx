import type { Metadata, Viewport } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "@/styles/globals.css";
import TopBar from "@/components/TopBar";
import SideNav from "@/components/SideNav";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Escuela de Derecho PUCV 2030 · Informe estratégico",
  description:
    "Capacidades institucionales para formar abogados en la era de la inteligencia artificial. Informe estratégico interactivo para la Dirección de la Escuela de Derecho PUCV.",
  authors: [{ name: "Diego Ojeda Cifuentes" }],
  keywords: ["Derecho", "Inteligencia Artificial", "PUCV", "DIAT", "LegalTech", "Educación jurídica"],
};

export const viewport: Viewport = {
  themeColor: "#08090c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <ScrollProgress />
        <TopBar />
        <SideNav />
        <main>{children}</main>
      </body>
    </html>
  );
}
