import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight, Globe, MessageSquare } from "lucide-react";
import { getAllDestinations } from "@/lib/destinations";
import Image from "next/image";
import Link from "next/link";

export default async function DestinationsPage() {
  const destinations = await getAllDestinations();

  // Function to check if a destination is coming soon
  const isComingSoon = (name: string) => {
    return ["United Kingdom", "India", "Thailand", "Canada"].includes(name);
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
            {destinations.map((destination) => {
              const comingSoon = isComingSoon(destination.name);
              
              if (comingSoon) {
                return (
                  <div 
                    key={destination.id}
                    className="group relative overflow-hidden rounded-xl h-[400px] flex items-end shadow-md transition-all cursor-not-allowed"
                  >
                    <div className="absolute top-6 right-6 z-20">
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
                        Coming Soon <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                );
              } else {
                return (
                  <Link 
                    href={`/destinations/${destination.slug}`} 
                    key={destination.id}
                    className="group relative overflow-hidden rounded-xl h-[400px] flex items-end shadow-md hover:shadow-xl transition-all"
                  >
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
                );
              }
            })}
          </div>
        </div>
      </section>
      
      {/* Suggestion Card Section */}
      <section className="py-16 bg-gradient-to-br from-[#0F4C3A] to-[#1A6B54]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4AF37] rounded-full mb-6">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Want to Visit Other Places?
                </h2>
                <p className="text-gray-200 text-lg max-w-2xl mx-auto">
                  Have a dream golf destination in mind? We'd love to hear your suggestions!
                  Help us expand our golf travel offerings by sharing your favorite courses and locations.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Share Your Dream Destination</h3>
                      <p className="text-gray-300 text-sm">Tell us about the golf courses and locations you'd love to visit</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Tell Us Your Preferences</h3>
                      <p className="text-gray-300 text-sm">Share your accommodation, dining, and activity preferences</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">We'll Create Your Itinerary</h3>
                      <p className="text-gray-300 text-sm">Our experts will design a custom golf travel experience just for you</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="text-center mb-6">
                    <MessageSquare className="h-8 w-8 text-[#D4AF37] mx-auto mb-3" />
                    <h3 className="text-xl font-semibold text-white mb-2">Send Your Suggestion</h3>
                    <p className="text-gray-300 text-sm">We'll get back to you within 24 hours</p>
                  </div>
                  <Button
                    variant="glassmorphism"
                    size="lg"
                    className="w-full group bg-[#D4AF37] hover:bg-[#B8941F] text-white border-0"
                    asChild
                  >
                    <Link href="/contact?type=suggestion">
                      Suggest a Destination <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <p className="text-center text-gray-300 text-xs mt-4">
                    Or email us directly at <span className="text-[#D4AF37]">suggestions@golftravel.com</span>
                  </p>
                </div>
              </div>
            </div>
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
