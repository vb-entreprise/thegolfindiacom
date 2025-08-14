'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Phone, Mail, Calendar, ArrowRight, Star, Trophy, Users } from "lucide-react";

const features = [
  {
    icon: Trophy,
    title: "Expert Guidance",
    description: "Professional golf tour planning and local expertise"
  },
  {
    icon: Star,
    title: "Premium Experience",
    description: "Luxury accommodations and world-class golf courses"
  },
  {
    icon: Users,
    title: "Personalized Service",
    description: "Tailored itineraries for your perfect golf adventure"
  }
];

export function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0F4C3A] to-[#1A6B54] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-white rounded-full blur-3xl" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-white rounded-full blur-3xl" />
        <div className="absolute w-64 h-64 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#D4AF37] rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div 
            className="text-white"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-medium">Ready to Book Your Golf Adventure?</span>
            </motion.div>

            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Start Your Vietnam
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F4D03F]">
                Golf Journey Today
              </span>
            </motion.h2>

            <motion.p 
              className="text-xl text-gray-200 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Join thousands of golfers who have experienced the perfect blend of world-class golf and authentic Vietnamese culture. Let us create your dream golf vacation.
            </motion.p>

            {/* Features */}
            <motion.div 
              className="space-y-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{feature.title}</h4>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact info */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 text-white">
                <Phone className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-lg font-semibold">+91 8799395926</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <Mail className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-lg font-semibold">thegolfindia@gmail.com</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - CTA Card */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="w-full max-w-md bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl">
              <CardContent className="p-8">
                <motion.div 
                  className="text-center mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Get Your Free Quote
                  </h3>
                  <p className="text-gray-300">
                    Tell us about your dream golf vacation
                  </p>
                </motion.div>

                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Link href="/tours" className="block">
                    <Button 
                      variant="gold"
                      size="lg"
                      className="w-full group"
                    >
                      Browse Golf Tours
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>

                  <Link href="/contact" className="block">
                    <Button 
                      variant="glassmorphism" 
                      size="lg"
                      className="w-full group"
                    >
                      Contact Our Experts
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>

                  <Link href="/destinations" className="block">
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="w-full border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white group"
                    >
                      Explore Destinations
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </motion.div>

                {/* Trust indicators */}
                <motion.div 
                  className="mt-8 pt-6 border-t border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center">
                    <div className="flex justify-center gap-1 mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-[#D4AF37]" fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-300">
                      Trusted by 1000+ golfers worldwide
                    </p>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Bottom stats */}
        <motion.div 
          className="grid md:grid-cols-4 gap-8 mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-white">
            <div className="text-3xl font-bold mb-2">15+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="text-white">
            <div className="text-3xl font-bold mb-2">50+</div>
            <div className="text-gray-300">Golf Courses</div>
          </div>
          <div className="text-white">
            <div className="text-3xl font-bold mb-2">1000+</div>
            <div className="text-gray-300">Happy Golfers</div>
          </div>
          <div className="text-white">
            <div className="text-3xl font-bold mb-2">98%</div>
            <div className="text-gray-300">Satisfaction Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 