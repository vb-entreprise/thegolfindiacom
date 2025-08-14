'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { MapPin, Star, ArrowRight } from "lucide-react";

const mapDestinations = [
  {
    id: 1,
    name: "Hanoi & North",
    description: "Capital city golf with mountain views",
    courses: 8,
    rating: 4.8,
    position: { top: "15%", left: "25%" },
    color: "from-[#3498DB] to-[#5DADE2]",
    slug: "hanoi-north"
  },
  {
    id: 2,
    name: "Halong Bay",
    description: "Coastal golf with stunning bay views",
    courses: 4,
    rating: 4.9,
    position: { top: "25%", left: "35%" },
    color: "from-[#27AE60] to-[#58D68D]",
    slug: "halong-bay"
  },
  {
    id: 3,
    name: "Central Heritage",
    description: "Ancient cities and championship courses",
    courses: 12,
    rating: 4.7,
    position: { top: "45%", left: "45%" },
    color: "from-[#E74C3C] to-[#EC7063]",
    slug: "central-heritage"
  },
  {
    id: 4,
    name: "Ho Chi Minh City",
    description: "Modern golf in Vietnam's largest city",
    courses: 10,
    rating: 4.6,
    position: { top: "70%", left: "40%" },
    color: "from-[#F39C12] to-[#F7DC6F]",
    slug: "ho-chi-minh-city"
  },
  {
    id: 5,
    name: "Mekong Delta",
    description: "Tropical golf paradise",
    courses: 6,
    rating: 4.5,
    position: { top: "80%", left: "50%" },
    color: "from-[#9B59B6] to-[#BB8FCE]",
    slug: "mekong-delta"
  }
];

export function InteractiveMap() {
  const [hoveredDestination, setHoveredDestination] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F4C3A] mb-4">
            Vietnam Golf Map
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore golf destinations across Vietnam's diverse landscapes
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Map */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-gradient-to-br from-[#0F4C3A]/10 to-[#1A6B54]/10 rounded-2xl p-8 border-2 border-[#0F4C3A]/20">
              {/* Vietnam outline */}
              <div className="w-full h-96 bg-gradient-to-br from-[#0F4C3A]/5 to-[#1A6B54]/5 rounded-xl relative overflow-hidden">
                {/* Map background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute w-32 h-32 -top-16 -left-16 bg-[#D4AF37] rounded-full blur-2xl" />
                  <div className="absolute w-24 h-24 top-1/2 left-1/4 bg-[#3498DB] rounded-full blur-xl" />
                  <div className="absolute w-20 h-20 bottom-1/4 right-1/4 bg-[#E74C3C] rounded-full blur-lg" />
                </div>

                {/* Destination markers */}
                {mapDestinations.map((destination) => (
                  <motion.div
                    key={destination.id}
                    className="absolute cursor-pointer group"
                    style={destination.position}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: destination.id * 0.1 }}
                    viewport={{ once: true }}
                    onHoverStart={() => setHoveredDestination(destination.id)}
                    onHoverEnd={() => setHoveredDestination(null)}
                    whileHover={{ scale: 1.2 }}
                  >
                    {/* Marker */}
                    <motion.div
                      className={`w-6 h-6 bg-gradient-to-br ${destination.color} rounded-full border-2 border-white shadow-lg relative`}
                      animate={{
                        scale: hoveredDestination === destination.id ? [1, 1.3, 1] : 1,
                      }}
                      transition={{ duration: 1, repeat: hoveredDestination === destination.id ? Infinity : 0 }}
                    >
                      <MapPin className="w-4 h-4 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </motion.div>

                    {/* Pulse effect */}
                    {hoveredDestination === destination.id && (
                      <motion.div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] rounded-full opacity-30"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: [0, 2], opacity: [0.5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    )}

                    {/* Connection lines */}
                    {destination.id < mapDestinations.length && (
                      <motion.div
                        className="absolute top-3 left-3 w-px h-20 bg-gradient-to-b from-[#0F4C3A] to-transparent"
                        initial={{ height: 0 }}
                        whileInView={{ height: "5rem" }}
                        transition={{ duration: 1, delay: destination.id * 0.2 }}
                        viewport={{ once: true }}
                      />
                    )}
                  </motion.div>
                ))}

                {/* Floating golf balls */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-white rounded-full opacity-60"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Destination Details */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#0F4C3A] mb-6">
              Popular Golf Regions
            </h3>
            
            {mapDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredDestination(destination.id)}
                onHoverEnd={() => setHoveredDestination(null)}
              >
                <Card className={`border-2 transition-all duration-300 hover:shadow-lg ${
                  hoveredDestination === destination.id 
                    ? 'border-[#D4AF37] shadow-lg' 
                    : 'border-gray-200'
                }`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`w-4 h-4 bg-gradient-to-br ${destination.color} rounded-full`} />
                          <h4 className="font-semibold text-[#0F4C3A] text-lg">
                            {destination.name}
                          </h4>
                        </div>
                        <p className="text-gray-600 mb-3">{destination.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>{destination.courses} golf courses</span>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-[#D4AF37]" fill="currentColor" />
                            <span>{destination.rating}</span>
                          </div>
                        </div>
                      </div>
                      <motion.div
                        className="w-8 h-8 bg-gradient-to-r from-[#0F4C3A] to-[#1A6B54] rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* CTA */}
            <motion.div 
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/destinations">
                <Button 
                  className="w-full bg-gradient-to-r from-[#0F4C3A] to-[#1A6B54] hover:from-[#1A6B54] hover:to-[#2D8A6F] text-white border-0 font-semibold"
                >
                  Explore All Destinations
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 