import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { Toaster } from "sonner"
import WhatsAppCTA from "@/components/whatsapp-cta";
import { Footer } from "@/components/footer";

const geistSans = Geist( {
  variable: "--font-geist-sans",
  subsets: [ "latin" ],
} );

const geistMono = Geist_Mono( {
  variable: "--font-geist-mono",
  subsets: [ "latin" ],
} );

export const metadata: Metadata = {
  title: "Tu Imagen Lab",
  description: "Laboratorio Dental Digital - Prótesis con diseños a la medida",
};

export default function RootLayout ( {
  children,
}: Readonly<{
  children: React.ReactNode;
}> )
{
  return (
    <html lang="es" className="h-full">
      <body
        className={ `flex flex-col h-full ${ geistSans.variable } ${ geistMono.variable } antialiased` }
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Toaster />
        <WhatsAppCTA />
        <Footer />
      </body>
      
    </html>
  );
}
