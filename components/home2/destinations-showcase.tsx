'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, MapPin, Star } from "lucide-react";

const destinations = [
  {
    name: "Central Heritage",
    description: "Ancient cities and championship golf courses",
    image: "/images/destinations/central-heritage/hero.jpg",
    courses: 8,
    rating: 4.9,
    color: "from-[#E74C3C] to-[#EC7063]"
  },
  {
    name: "Luxury North",
    description: "Premium golf resorts and stunning landscapes",
    image: "/images/destinations/luxury-north/hero.jpg",
    courses: 12,
    rating: 4.8,
    color: "from-[#3498DB] to-[#5DADE2]"
  },
  {
    name: "North Retreat",
    description: "Serene golf experiences in northern Vietnam",
    image: "/images/destinations/north-retreat/hero.jpg",
    courses: 6,
    rating: 4.7,
    color: "from-[#27AE60] to-[#58D68D]"
  },
  {
    name: "Southern Mekong",
    description: "Tropical golf paradise in the Mekong Delta",
    image: "/images/destinations/southern-mekong/hero.jpg",
    courses: 10,
    rating: 4.6,
    color: "from-[#F39C12] to-[#F7DC6F]"
  }
];

export function DestinationsShowcase() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200]);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        style={{ y }}
      >
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-[#0F4C3A] rounded-full blur-3xl" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-[#D4AF37] rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F4C3A] mb-4">
            Explore Vietnam's Golf Destinations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From ancient heritage sites to modern luxury resorts, discover the perfect golf experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.name}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${destination.color} opacity-90`} />
              
              {/* Content overlay */}
              <div className="relative p-8 h-80 flex flex-col justify-between text-white">
                {/* Top section */}
                <div>
                  <motion.div
                    className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium">{destination.courses} Golf Courses</span>
                  </motion.div>

                  <motion.h3 
                    className="text-3xl font-bold mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                    viewport={{ once: true }}
                  >
                    {destination.name}
                  </motion.h3>

                  <motion.p 
                    className="text-lg text-white/90 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                  >
                    {destination.description}
                  </motion.p>
                </div>

                {/* Bottom section */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5" fill="currentColor" />
                    <span className="font-semibold">{destination.rating > 0 ? destination.rating : 'New'}</span>
                    <span className="text-white/80">({destination.courses > 0 ? `${destination.courses} reviews` : 'No reviews'})</span>
                  </div>

                  <motion.div
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                </div>

                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <Link href={`/destinations/${destination.name.toLowerCase().replace(' ', '-')}`}>
                    <Button 
                      size="lg"
                      className="bg-white text-[#0F4C3A] hover:bg-gray-100 border-0 font-semibold"
                    >
                      Explore Destination
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </motion.div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-[#0F4C3A] to-[#1A6B54] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Plan Your Golf Adventure?</h3>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Let our golf experts help you create the perfect itinerary for your Vietnam golf experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/destinations">
                <Button 
                  variant="secondary"
                  size="lg"
                  className="group"
                >
                  Browse All Destinations
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  variant="glassmorphism" 
                  size="lg"
                  className="group"
                >
                  Get Custom Quote
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 