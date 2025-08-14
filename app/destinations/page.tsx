import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";
import { getAllDestinations } from "@/lib/destinations";
import Image from "next/image";
import Link from "next/link";

export default async function DestinationsPage() {
  const destinations = await getAllDestinations();

  // Function to check if a destination is coming soon
  const isComingSoon = (name: string) => {
    return false; // No destinations are coming soon now
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 bg-[#0F4C3A]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Golf Destinations</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Discover the world's finest golf destinations, from the historic links of Scotland 
            to the sun-soaked courses of the Mediterranean.
          </p>
        </div>
      </section>
      
      {/* Destinations Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <Link 
                href={`/destinations/${destination.slug}`} 
                key={destination.id}
                className="group relative overflow-hidden rounded-xl h-[400px] flex items-end shadow-md hover:shadow-xl transition-all"
              >
                {isComingSoon(destination.name) && (
                  <div className="absolute top-6 right-6 z-20">
                    <span className="bg-[#D4AF37] text-black px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                      Coming Soon
                    </span>
                  </div>
                )}
                <Image
                  src={destination.imageSrc}
                  alt={destination.imageAlt}
                  fill
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                
                <div className="relative p-8 text-white z-10 w-full">
                  <div className="flex items-center mb-3">
                    <MapPin className="h-5 w-5 text-[#D4AF37]" />
                    <span className="ml-2 text-sm font-medium">{destination.country}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{destination.name}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-2 group-hover:line-clamp-none transition-all">
                    {destination.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-[#D4AF37]">Featured Courses:</h4>
                    <ul className="text-sm space-y-1">
                      {destination.featuredCourses.slice(0, 3).map((course, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-1 h-1 bg-[#D4AF37] rounded-full mr-2"></span>
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button 
                    variant="glassmorphism" 
                    size="default" 
                    className="mt-4 group"
                  >
                    Explore Destination <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Golf Adventure?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our golf travel experts are here to help you create the perfect itinerary for your next golfing holiday.
          </p>
          <Button variant="green" size="xl" className="group" asChild>
            <Link href="/contact">
              Contact Us <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
