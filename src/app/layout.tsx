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
  description: "Bridging the gap between AP coursework and clinical medicine.",
  icons: {
    icon: "/icon.svg",
  },
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
