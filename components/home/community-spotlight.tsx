'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function CommunitySpotlight() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Eyebrow */}
          <motion.div 
            className="text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-[#D4AF37] text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
              Community Spotlight
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-[#0F4C3A]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Golf Society Play-Off: 50 Years of Friendship
          </motion.h2>

          {/* Subhead/Body */}
          <motion.p 
            className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Celebrating a milestone that began on the first day of university in 1975 and continues today. This foursome reminds us how golf forges lifelong bonds—and why our journeys give back to the communities that host the game.
          </motion.p>

          {/* Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Photo 1 */}
            <motion.div 
              className="group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/images/home/1.jpg"
                  alt="Friends since 1975 at the clubhouse"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">
                    Before the round—friends since 1975, still side-by-side.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Photo 2 */}
            <motion.div 
              className="group"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/images/home/2.jpg"
                  alt="Friends on the tee box after fifty years"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">
                    On the tee, fifty years on—and still swinging together.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Button 
              variant="green" 
              size="lg" 
              className="group"
              asChild
            >
              <Link href="/about">
                See Our Impact <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="group border-[#0F4C3A] text-[#0F4C3A] hover:bg-[#0F4C3A] hover:text-white"
              asChild
            >
              <Link href="/contact">
                Share Your Story <Heart className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
