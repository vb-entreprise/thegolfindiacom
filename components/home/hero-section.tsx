'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedGolfBall } from "@/components/ui/animated-golf-ball";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0F4C3A] to-[#1A6B54] overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-white rounded-full blur-3xl" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-white rounded-full blur-3xl" />
      </div>

      {/* Golf ball pattern */}
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-5">
        {Array.from({ length: 64 }).map((_, i) => (
          <div key={i} className="border border-white rounded-full m-4" />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-32 relative">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated golf ball */}
          <div className="flex justify-center mb-8">
            <AnimatedGolfBall />
          </div>

          {/* Hero content */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Golfing for a Cause:
            <span className="block text-[#D4AF37]">Tee Up Change</span>
          </motion.h1>

          <motion.p 
            className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Purpose-driven itineraries that pair unforgettable courses with tangible local change.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              href="/tours"
              className="inline-flex h-14 items-center justify-center rounded-md bg-[#D4AF37] px-10 text-lg font-semibold text-white transition-all hover:bg-[#C19B25] hover:scale-105 hover:shadow-lg"
            >
              Explore Tours
            </Link>
            <Link 
              href="/contact"
              className="inline-flex h-14 items-center justify-center rounded-md px-10 text-lg font-semibold text-white transition-all border-2 border-white hover:bg-white hover:text-[#0F4C3A] hover:scale-105"
            >
              Contact Us
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1,
              delay: 1,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <div className="w-6 h-10 border-2 border-white rounded-full p-1">
              <div className="w-1 h-2 bg-white rounded-full mx-auto animate-bounce" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}