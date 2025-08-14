import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import { PerformanceMonitor } from "@/components/ui/performance-monitor";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "Golf Vietnam Tours - Premium Golf Tours & Tournaments",
  description: "Experience world-class golf across Vietnam's most stunning landscapes. Championship courses, luxury accommodations, and unforgettable cultural experiences.",
  other: {
    'viewport': 'width=device-width, initial-scale=1, maximum-scale=5',
  },
  icons: {
    icon: "/images/logo/Icon%20Transperant.png",
    shortcut: "/images/logo/Icon%20Transperant.png",
    apple: "/images/logo/Icon%20Transperant.png",
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
        </Providers>
        <Analytics />
        <PerformanceMonitor />
      </body>
    </html>
  );
}