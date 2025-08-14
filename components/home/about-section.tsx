import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, Award, Calendar, Heart } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meaningful Golf Journeys with a Global Impact</h2>
            
            <p className="text-muted-foreground mb-6 text-lg">
              At The Golf India, every tournament is more than just a competition — it's a step toward building a better future. In partnership with Karma Time Foundation, our tours combine top-tier golf experiences with real-world support for caddies, the unsung champions of the game.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="bg-[#0F4C3A]/10 p-3 rounded-full mr-4">
                  <Shield className="h-6 w-6 text-[#0F4C3A]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Caddie Support Program</h3>
                  <p className="text-muted-foreground text-sm">
                    Financial help for medical emergencies for registered caddies
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#0F4C3A]/10 p-3 rounded-full mr-4">
                  <Award className="h-6 w-6 text-[#0F4C3A]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Education First</h3>
                  <p className="text-muted-foreground text-sm">
                    We cover the first school year fees for a caddie's first-born child
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#0F4C3A]/10 p-3 rounded-full mr-4">
                  <Calendar className="h-6 w-6 text-[#0F4C3A]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Global Events</h3>
                  <p className="text-muted-foreground text-sm">
                    Exclusive golf tournaments and purpose-driven events throughout the year
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#0F4C3A]/10 p-3 rounded-full mr-4">
                  <Heart className="h-6 w-6 text-[#0F4C3A]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Festival Recognition</h3>
                  <p className="text-muted-foreground text-sm">
                    Special Diwali gifts for eligible caddies without claims in the year
                  </p>
                </div>
              </div>
            </div>
            
            <Button variant="green" size="lg" asChild>
              <Link href="/about">Learn More About Our Mission</Link>
            </Button>
          </div>
          
          {/* Right Image */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
            <Image
              src="/images/tournaments/vietnam/central-heritage/hero.jpg"
              alt="Players walking a scenic championship course at sunset"
              width={1200}
              height={800}
              className="object-cover w-full h-full scale-105 md:scale-100"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
            <div className="absolute top-5 left-5">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-[#0F4C3A] shadow">Karma Time Foundation</span>
            </div>
            <div className="absolute bottom-6 left-6 right-6 md:right-10 p-5 md:p-6 bg-white/95 dark:bg-gray-900/80 border border-black/5 rounded-xl backdrop-blur supports-[backdrop-filter]:bg-white/75">
              <p className="font-semibold text-base md:text-lg text-[#0F4C3A]">
                "We believe golf builds communities — and we're using that power to uplift lives."
              </p>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mt-2">
                — Team The Golf India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}