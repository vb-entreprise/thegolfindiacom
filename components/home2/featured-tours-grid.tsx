'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, MapPin, Star, Clock, Users, ArrowRight } from "lucide-react";
import { Price } from "@/components/ui/price";
import Link from "next/link";
import Image from "next/image";
import { getFeaturedTours } from "@/lib/tours";
import { useState, useRef } from "react";

export function FeaturedToursGrid() {
  const featuredTours = getFeaturedTours();
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToTour = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.offsetWidth;
      container.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  const nextTour = () => {
    const newIndex = (activeIndex + 1) % featuredTours.length;
    scrollToTour(newIndex);
  };

  const prevTour = () => {
    const newIndex = (activeIndex - 1 + featuredTours.length) % featuredTours.length;
    scrollToTour(newIndex);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Section Header */}
      <div className="container mx-auto px-4 mb-12 relative z-10">
        <div className="text-center">
          <Badge className="mb-6 bg-[#D4AF37] text-black border-0 px-6 py-2 text-sm font-semibold">
            Curated Experiences
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Featured Golf Tours
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our handpicked selection of premium golf experiences across Vietnam's most stunning destinations
          </p>
        </div>
      </div>

      {/* Tours Timeline */}
      <div className="relative">
                 {/* Navigation Controls */}
         <button
           onClick={prevTour}
           className="absolute top-1/2 left-4 z-50 transform -translate-y-1/2 w-16 h-16 rounded-full bg-white text-gray-900 hover:bg-gray-100 shadow-2xl flex items-center justify-center transition-all duration-300 border-0"
           style={{ 
             opacity: 1, 
             visibility: 'visible',
             display: 'flex',
             position: 'absolute',
             backgroundColor: '#ffffff',
             color: '#111827',
             zIndex: 50
           }}
         >
           <ChevronLeft className="w-7 h-7" />
         </button>
         <button
           onClick={nextTour}
           className="absolute top-1/2 right-4 z-50 transform -translate-y-1/2 w-16 h-16 rounded-full bg-white text-gray-900 hover:bg-gray-100 shadow-2xl flex items-center justify-center transition-all duration-300 border-0"
           style={{ 
             opacity: 1, 
             visibility: 'visible',
             display: 'flex',
             position: 'absolute',
             backgroundColor: '#ffffff',
             color: '#111827',
             zIndex: 50
           }}
         >
           <ChevronRight className="w-7 h-7" />
         </button>

        {/* Horizontal Scrolling Container */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-hidden scroll-smooth"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {featuredTours.map((tour, index) => (
            <motion.div
              key={tour.id}
              className="min-w-full px-4"
              style={{ scrollSnapAlign: 'start' }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="relative overflow-hidden h-[70vh] group bg-black/20 border-white/10">
                {/* Hero Image */}
                <div className="absolute inset-0">
                                                       <Image
                    src={tour.imageSrc}
                    alt={tour.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12">
                  <div className="max-w-2xl">
                    {/* Tour Badges */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      <Badge className="bg-[#D4AF37] text-black border-0 px-4 py-2">
                        {tour.duration} Days
                      </Badge>
                      {tour.featured && (
                        <Badge className="bg-red-500 text-white border-0 px-4 py-2">
                          Featured
                        </Badge>
                      )}
                      <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
                        <Star className="w-4 h-4 text-[#D4AF37]" fill="currentColor" />
                        <span className="font-bold text-[#0F4C3A] text-sm">{tour.rating}</span>
                      </div>
                    </div>

                    {/* Tour Title */}
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                      {tour.name}
                    </h3>

                    {/* Tour Description */}
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                      {tour.shortDescription}
                    </p>

                    {/* Tour Details */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                      <div className="flex items-center gap-2 text-gray-300">
                        <MapPin className="w-5 h-5 text-[#D4AF37]" />
                        <span className="text-sm font-medium">{tour.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <Clock className="w-5 h-5 text-[#D4AF37]" />
                        <span className="text-sm font-medium">{tour.duration} days</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <Users className="w-5 h-5 text-[#D4AF37]" />
                        <span className="text-sm font-medium">Small group</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <Star className="w-5 h-5 text-[#D4AF37]" />
                        <span className="text-sm font-medium">{tour.rating > 0 ? tour.rating : 'New'} ({tour.reviewCount > 0 ? tour.reviewCount : 'No reviews'})</span>
                      </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                      <div>
                        <p className="text-sm text-gray-400 mb-1">Starting from</p>
                        <p className="text-3xl font-bold text-white">
                          <Price amount={tour.price} currency={tour.currency} />
                        </p>
                        <p className="text-xs text-gray-400">per person</p>
                      </div>
                      <Button 
                        className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] hover:from-[#B8941F] hover:to-[#9A7A1A] text-black font-semibold px-8 py-3 text-lg"
                        asChild
                      >
                        <Link href={`/tours/${tour.slug}`}>
                          Explore Tour
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Tour Number Indicator */}
                <div className="absolute top-8 left-8 z-20">
                  <div className="text-6xl font-bold text-white/20">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-8 gap-3">
          {featuredTours.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToTour(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'w-12 bg-[#D4AF37]' 
                  : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

             {/* View All Tours CTA */}
       <div className="container mx-auto px-4 mt-16 text-center">
         <Button 
           variant="glassmorphism"
           size="xl"
           className="group"
           asChild
         >
           <Link href="/tours">
             View All Tours
             <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
           </Link>
         </Button>
       </div>
    </section>
  );
} 