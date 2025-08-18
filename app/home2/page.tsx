import { ModernHeroSection } from "@/components/home2/modern-hero-section";
import { InteractiveStats } from "@/components/home2/interactive-stats";
import { MissionSection } from "@/components/home2/mission-section";
import { FeaturedToursGrid } from "@/components/home2/featured-tours-grid";
import { DestinationsShowcase } from "@/components/home2/destinations-showcase";
import { TestimonialsCarousel } from "@/components/home2/testimonials-carousel";
import { InteractiveMap } from "@/components/home2/interactive-map";
import { CallToAction } from "@/components/home2/call-to-action";

export default function Home2() {
  return (
    <>
      <ModernHeroSection />
      <InteractiveStats />
      <MissionSection />
      <FeaturedToursGrid />
      <DestinationsShowcase />
      <TestimonialsCarousel />
      <InteractiveMap />
      <CallToAction />
    </>
  );
} 