import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Agency Growth Engine — SEO Revenue Recovery para Agencias y E-commerce",
  description:
    "Detecta qué páginas están perdiendo tráfico, genera automáticamente con IA el plan para arreglarlas, y mide en dinero real cuánto revenue recuperó cada arreglo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-blue-100 selection:text-blue-950`}
      >
        {children}
      </body>
    </html>
  );
}

