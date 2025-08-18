'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getFeaturedTours } from "@/lib/tours";
import { Price } from "@/components/ui/price";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function FeaturedTours() {
  const tours = getFeaturedTours();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6">Featured Golf Tours</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the best of global golf with our handpicked selection of premium golf tours curated by The Golf India — where world-class courses meet unforgettable travel.
          </p>
        </motion.div>

        {/* Tours Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {tours.map((tour) => (
            <motion.div key={tour.id} variants={item}>
              <Card className="group h-full hover:shadow-xl transition-shadow duration-300">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={tour.imageSrc}
                    alt={tour.imageAlt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge 
                    className="absolute top-4 right-4 bg-[#D4AF37]"
                  >
                    Featured
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-5 h-5 text-[#D4AF37]" />
                    <span className="font-semibold">{tour.rating}</span>
                    <span className="text-gray-500">({tour.reviewCount > 0 ? `${tour.reviewCount} reviews` : 'No reviews yet'})</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#0F4C3A] transition-colors">
                    {tour.name}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {tour.shortDescription}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-5 h-5 mr-2" />
                      {tour.duration} Days
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-5 h-5 mr-2" />
                      {tour.location}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Starting from</p>
                      <p className="text-2xl font-bold text-[#0F4C3A]">
                        <Price amount={tour.price} currency={tour.currency} />
                      </p>
                      <p className="text-xs text-gray-500">per person</p>
                    </div>
                    <Button 
                      variant="gold"
                      className="shadow-lg"
                      asChild
                    >
                      <Link href={`/tours/${tour.slug}`}>
                        View Tour
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button 
            variant="outline" 
            size="lg"
            className="min-w-[200px]"
            asChild
          >
            <Link href="/tours">
              View All Tours
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}