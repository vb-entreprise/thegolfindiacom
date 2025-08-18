import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAllDestinations } from "@/lib/destinations";

export async function FeaturedDestinations() {
  const destinations = await getAllDestinations();
  // Filter to show only Vietnam as active destination
  const featuredDestinations = destinations.filter(dest => 
    dest.name === "Vietnam"
  );

  // Coming soon destinations
  const comingSoonDestinations = destinations.filter(dest => 
    dest.name === "United Kingdom" || 
    dest.name === "India" || 
    dest.name === "Thailand" ||
    dest.name === "Canada"
  );

  // Function to check if a destination is coming soon
  const isComingSoon = (name: string) => {
    return comingSoonDestinations.some(dest => dest.name === name);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Destinations</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our handpicked golf destinations, each offering unique courses and unforgettable experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Vietnam Destination */}
          {featuredDestinations.map((destination) => (
            <Link 
              href={`/destinations/${destination.slug}`} 
              key={destination.id}
              className="group relative overflow-hidden rounded-xl h-80 flex items-end shadow-md hover:shadow-xl transition-all"
            >
              <Image
                src={destination.imageSrc}
                alt={destination.imageAlt}
                width={500}
                height={700}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              
              <div className="relative p-6 text-white z-10">
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 text-[#D4AF37]" />
                  <span className="ml-1 text-sm font-medium">{destination.country}</span>
                </div>
                <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
                <p className="text-sm text-gray-300 mb-3 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {destination.featuredCourses.slice(0, 2).join(', ')}
                </p>
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span className="text-xs font-medium bg-white/20 px-2 py-1 rounded-full inline-flex items-center">
                    Explore <ArrowRight className="ml-1 h-3 w-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}

          {/* Coming Soon Destinations */}
          {comingSoonDestinations.map((destination) => (
            <div 
              key={destination.id}
              className="group relative overflow-hidden rounded-xl h-80 flex items-end shadow-md transition-all cursor-not-allowed"
            >
              <div className="absolute top-4 right-4 z-20">
                {/* Ribbon body */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-[#0F4C3A] to-[#1A6B54] text-white px-3 py-1.5 text-xs font-bold shadow-lg rounded-sm">
                    <div className="flex flex-col items-center leading-tight">
                      <span className="text-sm">COMING</span>
                      <span className="text-xs">SOON</span>
                    </div>
                  </div>
                  {/* Ribbon tail */}
                  <div className="absolute -bottom-1 right-0 w-0 h-0 border-l-4 border-l-transparent border-b-4 border-b-[#1A6B54]"></div>
                  {/* Ribbon shadow */}
                  <div className="absolute top-1 left-1 w-0 h-0 border-l-4 border-l-transparent border-b-4 border-b-black/20"></div>
                </div>
              </div>
              <Image
                src={destination.imageSrc}
                alt={destination.imageAlt}
                width={500}
                height={700}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              
              <div className="relative p-6 text-white z-10">
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 text-[#D4AF37]" />
                  <span className="ml-1 text-sm font-medium">{destination.country}</span>
                </div>
                <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
                <p className="text-sm text-gray-300 mb-3 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {destination.featuredCourses.slice(0, 2).join(', ')}
                </p>
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span className="text-xs font-medium bg-white/20 px-2 py-1 rounded-full inline-flex items-center">
                    Coming Soon <ArrowRight className="ml-1 h-3 w-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/destinations">
                View All Destinations <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="green" size="lg" asChild>
              <Link href="/contact?type=suggestion">
                Suggest Your Choice <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}