import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Notification from "@/components/layout/Notification";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fotearte",
  description: "Más que una escuela de fotografía: Un espacio donde tu creatividad florece. Cursos dinámicos y una comunidad apasionada, ¡Haz clic y únete hoy mismo!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.className} antialiased scroll-smooth`}>
        <Header />
        {children}
        <Notification />
        <Footer />
      </body>
    </html>
  );
}
