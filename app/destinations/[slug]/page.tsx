import { Button } from "@/components/ui/button";
import { ArrowRight, Check, MapPin, Phone } from "lucide-react";
import { getDestinationBySlug, getAllDestinations } from "@/lib/destinations";
import { getToursByCountry } from "@/lib/tours";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Destination } from "@/lib/types";
import { TourCard } from "@/components/ui/tour-card";

export async function generateStaticParams() {
  const destinations = await getAllDestinations();
  return destinations.map((destination) => ({
    slug: destination.slug,
  }));
}

interface DestinationPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DestinationPage({ params }: DestinationPageProps) {
  const { slug } = await params;
  const destination = await getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  const relatedTours = await getToursByCountry(destination.country);

  return (
    <>
      {/* Hero Section */}
      <section 
        className="pt-32 pb-16 md:pb-24 bg-cover bg-center relative"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${destination.imageSrc})` 
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-center">
            {destination.name}
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto text-lg text-center">
            {destination.description}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">About {destination.name}</h2>
              <div className="prose max-w-none">
                <p>{destination.description}</p>
                
                {/* Featured Courses Preview */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Featured Golf Courses</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {destination.featuredCourses.map((course, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-[#0F4C3A] mr-2 flex-shrink-0 mt-1" />
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Location Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-[#0F4C3A] mr-2" />
                    <span>{destination.country}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Golf Facilities</h4>
                    <p className="text-gray-600">
                      {destination.featuredCourses.length} Championship Courses
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Courses */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destination.featuredCourses.map((course, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <h3 className="font-bold text-xl mb-2">{course}</h3>
                <p className="text-muted-foreground text-sm">
                  Experience world-class golf at this prestigious venue
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Related Tours */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Available Tours in {destination.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-[#0F4C3A]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Experience {destination.name}?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our golf travel experts to start planning your perfect golf getaway
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="xl" className="group" asChild>
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="glassmorphism" size="xl" className="group" asChild>
              <Link href="/tours">
                View All Tours <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}