import type { Metadata } from "next";
import { Inter, Manrope, Cabin, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { UIProvider } from "@/context/UIContext";
import { ProgressProvider } from "@/context/ProgressContext";
import { LiquidFilter } from "@/components/LiquidFilter";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const cabin = Cabin({
  subsets: ["latin"],
  variable: "--font-cabin",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  title: "AP Lab",
  description: "For the love of learning. Over 30 subjects, always free. The highest prep quality with immersive interactive labs and comprehensive exams.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-144.png", sizes: "144x144", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" }
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" }
    ]
  },
  openGraph: {
    title: "AP Lab",
    description: "For the love of learning. Over 30 subjects, always free. The highest prep quality with immersive interactive labs and comprehensive exams.",
    url: "https://theaplab.org",
    siteName: "AP Lab",
    images: [
      {
        url: "https://theaplab.org/images/abstract-showcase.png",
        width: 1024,
        height: 409,
        alt: "AP Lab - Website Logo Preview",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AP Lab",
    description: "For the love of learning. Over 30 subjects, always free. The highest prep quality with immersive interactive labs and comprehensive exams.",
    images: ["https://theaplab.org/images/abstract-showcase.png"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable} ${cabin.variable} ${instrumentSerif.variable} font-inter antialiased`}>
        <LiquidFilter />
        <AuthProvider>
          <ProgressProvider>
            <UIProvider>
              {children}
            </UIProvider>
          </ProgressProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
