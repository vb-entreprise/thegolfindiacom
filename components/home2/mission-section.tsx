'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Shield, User, Calendar, Heart, ArrowRight } from "lucide-react";
import Image from "next/image";

const initiatives = [
  {
    id: 1,
    title: "Caddie Support Program",
    description: "Offers financial help for medical emergencies for registered caddies.",
    icon: Shield,
    color: "bg-[#0F4C3A]/10",
    iconColor: "text-[#0F4C3A]"
  },
  {
    id: 2,
    title: "Education First",
    description: "Covers the first school year fees for a caddie's first-born child.",
    icon: User,
    color: "bg-[#0F4C3A]/10",
    iconColor: "text-[#0F4C3A]"
  },
  {
    id: 3,
    title: "Global Events",
    description: "Features exclusive golf tournaments and purpose-driven events throughout the year.",
    icon: Calendar,
    color: "bg-[#0F4C3A]/10",
    iconColor: "text-[#0F4C3A]"
  },
  {
    id: 4,
    title: "Festival Recognition",
    description: "Provides special Diwali gifts for eligible caddies without claims in the year.",
    icon: Heart,
    color: "bg-[#0F4C3A]/10",
    iconColor: "text-[#0F4C3A]"
  }
];

export function MissionSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0F4C3A]">
                Meaningful Golf Journeys with a Global Impact
              </h2>
            </motion.div>

            <motion.p
              className="text-muted-foreground mb-6 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Our tournaments are more than just competitions - they're about building a better future in partnership with the <strong>Karma Time Foundation</strong>. Our tours combine top-tier golf experiences with real-world support for caddies.
            </motion.p>

            {/* Initiatives Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {initiatives.map((initiative, index) => (
                <motion.div
                  key={initiative.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start">
                    <div className={`${initiative.color} p-3 rounded-full mr-4`}>
                      <initiative.icon className={`h-6 w-6 ${initiative.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-[#0F4C3A]">
                        {initiative.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {initiative.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Button variant="green" size="lg" className="group" asChild>
                <Link href="/about">
                  Learn More About Our Mission
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <Image
                src="/images/tournaments/vietnam/central-heritage/hero.jpg"
                alt="Scenic golf course with lush green fairways and misty mountains"
                fill
                className="object-cover scale-105 md:scale-100"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              
              {/* Karma Time Foundation label */}
              <div className="absolute top-5 left-5">
                <Badge className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-[#0F4C3A] shadow">
                  Karma Time Foundation
                </Badge>
              </div>

              {/* Quote overlay */}
              <div className="absolute bottom-6 left-6 right-6 md:right-10 p-5 md:p-6 bg-white/95 dark:bg-gray-900/80 border border-black/5 rounded-xl backdrop-blur supports-[backdrop-filter]:bg-white/75">
                <p className="font-semibold text-base md:text-lg text-[#0F4C3A]">
                  "We believe golf builds communities — and we're using that power to uplift lives."
                </p>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mt-2">
                  — Team The Golf India
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
