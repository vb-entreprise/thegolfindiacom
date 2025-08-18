import { HeroSection } from "@/components/home/hero-section";
import { FeaturedTours } from "@/components/home/featured-tours";
import { FeaturedDestinations } from "@/components/home/featured-destinations";
import { AboutSection } from "@/components/home/about-section";
import { CommunitySpotlight } from "@/components/home/community-spotlight";
import { Newsletter } from "@/components/home/newsletter";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <CommunitySpotlight />
      <FeaturedTours />
      <FeaturedDestinations />
      <Newsletter />
    </main>
  );
} 