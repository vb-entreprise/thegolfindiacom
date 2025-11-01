import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-day-picker/dist/style.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/toaster";
import { Analytics, PerformanceMonitor } from "@/components/layout/client-components";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { siteConfig } from "@/lib/constants";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: `${siteConfig.name} - Premium Golf Tours & Tournaments`,
  description: "Experience world-class golf tours and tournaments across Asia's most beautiful destinations. Championship courses, luxury accommodations, and unforgettable cultural experiences.",
  other: {
    'viewport': 'width=device-width, initial-scale=1, maximum-scale=5',
  },
  icons: {
    icon: "/images/logo/Icon Transperant.png",
    shortcut: "/images/logo/Icon Transperant.png",
    apple: "/images/logo/Icon Transperant.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
          <ScrollToTop />
        </Providers>
        <Analytics />
        <PerformanceMonitor />
      </body>
    </html>
  );
}