import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Analytics } from "@vercel/analytics/react";
import NextTopLoader from "nextjs-toploader";

import { cn } from "@/lib/utils";

import { ThemeProvider } from "@/components/theme-provider";
import { ToastContainer } from "react-toastify";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "myBookShelf",
  description:
    "Une plateforme de gestion de livres où les utilisateurs peuvent rechercher des livres, les ajouter à leurs favoris, consulter les détails, et organiser leurs collections de manière intuitive.",
  keywords: [
    "gestion de livres",
    "dashboard livres",
    "Google Books API",
    "recherche de livres",
    "livres favoris",
    "catégories de livres",
    "détails des livres",
    "organisation de livres",
  ],
  icons: {
    icon: "/logo.svg",
  },
  alternates: {
    canonical: new URL("https://mybookshelf-six.vercel.app/"),
  },
  metadataBase: new URL("https://mybookshelf-six.vercel.app/"),
  authors: { name: "Boris Picard" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://mybookshelf-six.vercel.app/",
    title: "myBookShelf",
    description:
      "Organisez et gérez vos livres préférés avec notre interface intuitive.",
  },
  robots: "index, follow",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("min-h-screen font-sans antialiased", fontSans.variable)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Analytics />
          <NextTopLoader
            color="#F97316"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            zIndex={1600}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          />
          {children}
          <ToastContainer />
        </ThemeProvider>
      </body>
    </html>
  );
}
