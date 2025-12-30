import { Suspense } from "react";
import dynamic from "next/dynamic";
import { HeroSection } from "@/components/home/hero-section";
import { AboutSection } from "@/components/home/about-section";
import { FeaturedDestinations } from "@/components/home/featured-destinations";
import { PromotionalPopup } from "@/components/ui/promotional-popup";

// Lazy load heavy client components only
const FeaturedTours = dynamic(() => import("@/components/home/featured-tours").then(mod => ({ default: mod.FeaturedTours })), {
  loading: () => <div className="py-16 animate-pulse"><div className="h-96 bg-gray-200 rounded"></div></div>
});

const CommunitySpotlight = dynamic(() => import("@/components/home/community-spotlight").then(mod => ({ default: mod.CommunitySpotlight })), {
  loading: () => <div className="py-16 animate-pulse"><div className="h-96 bg-gray-200 rounded"></div></div>
});

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <Suspense fallback={<div className="py-16 animate-pulse"><div className="h-96 bg-gray-200 rounded"></div></div>}>
        <CommunitySpotlight />
      </Suspense>
      <Suspense fallback={<div className="py-16 animate-pulse"><div className="h-96 bg-gray-200 rounded"></div></div>}>
        <FeaturedTours />
      </Suspense>
      <FeaturedDestinations />
      <PromotionalPopup />
    </main>
  );
} 