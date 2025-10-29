'use client';

import { motion } from "framer-motion";
import { PageTransition } from "@/components/ui/page-transition";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy, 
  MapPin, 
  Users, 
  Star, 
  Award, 
  Heart,
  ArrowRight,
  CheckCircle,
  Globe,
  Shield,
  Mail,
  ExternalLink
} from "lucide-react";
import Link from "next/link";



const features = [
  {
    title: "Elite Golf Courses",
    description: "Play at some of the world's most iconic and challenging courses, crafted by legendary golf architects and set in breathtaking locations.",
    icon: Trophy,
    color: "bg-gradient-to-br from-[#0F4C3A] to-[#1A6B54]",
  },
  {
    title: "Luxury Stays",
    description: "Relax in handpicked 5-star resorts and boutique hotels that redefine comfort, style, and hospitality.",
    icon: Star,
    color: "bg-gradient-to-br from-[#D4AF37] to-[#C19B25]",
  },
  {
    title: "Cultural Immersion",
    description: "Enrich your journey with unique local experiences, traditions, and flavors — carefully woven between your rounds of golf.",
    icon: Globe,
    color: "bg-gradient-to-br from-[#138808] to-[#0F6B06]",
  },
  {
    title: "Dedicated Service",
    description: "Enjoy end-to-end support from our expert team, ensuring a seamless, personalized, and stress-free travel experience.",
    icon: Shield,
    color: "bg-gradient-to-br from-[#FF9933] to-[#E67E22]",
  },
];

const values = [
  {
    title: "Excellence",
    description: "We aim for perfection in every detail — from planning to play — to deliver an unforgettable golf journey.",
    icon: Award,
  },
  {
    title: "Authenticity",
    description: "We believe in real connections — offering experiences that reflect the true spirit of every destination.",
    icon: Heart,
  },
  {
    title: "Innovation",
    description: "We continuously evolve — bringing fresh ideas, smart solutions, and cutting-edge experiences to modern golf travel.",
    icon: Star,
  },
];



export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/tournaments/vietnam/central-heritage/golf-courses/Ba Na Hills Golf Club 2.jpg"
              alt="Golf Course Background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0F4C3A]/80 to-[#1A6B54]/60"></div>
          </div>
          
          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 bg-[#D4AF37] hover:bg-[#C19B25] text-white border-0">
                <Trophy className="w-4 h-4 mr-2" />
                Premier Golf Tours
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Crafting{" "}
                <span className="text-[#D4AF37]">Extraordinary</span>
                <br />
                Golf Experiences with Purpose
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                At The Golf India, we go beyond the fairways. Our expertly curated tours unite the thrill of world-class golf with the power of social impact — offering unforgettable experiences while supporting the communities behind the game.
              </p>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Explore breathtaking destinations, stay in luxury, and be part of a mission that makes every swing count.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[#D4AF37] hover:bg-[#C19B25] text-white px-8 py-3">
                  <Link href="/tours" className="flex items-center">
                    Explore Our Tours
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#0F4C3A] px-8 py-3">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>



        {/* Story Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-[#0F4C3A] mb-6">Our Story</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Born out of a deep love for golf and a commitment to meaningful travel, The Golf India has been curating unforgettable golf experiences for over a decade. What began as a simple idea — to bring golfers together through exceptional courses — has evolved into a global journey of sport, luxury, and purpose.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Our mission is to connect passionate golfers with the world's finest golf destinations, blending championship-level play with premium hospitality and culturally rich experiences.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Today, we're proud to be a trusted name in golf tourism, having introduced thousands of golfers to journeys that go far beyond the greens — creating memories, friendships, and impact along the way.
                </p>
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-[#138808]" />
                  <span className="text-gray-700 font-medium">Committed to excellence in global golf travel</span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/tournaments/vietnam/central-heritage/golf-courses/Legend Danang Golf Resort 3.jpg"
                    alt="Golf Course"
                    width={600}
                    height={400}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-gradient-to-br from-white via-[#0F4C3A]/3 to-[#D4AF37]/5 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute w-96 h-96 -top-48 -right-48 bg-[#0F4C3A] rounded-full blur-3xl"></div>
            <div className="absolute w-96 h-96 -bottom-48 -left-48 bg-[#D4AF37] rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-block mb-4"
              >
                <Badge className="bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/20 text-sm px-4 py-1.5 font-semibold">
                  Our Commitment
                </Badge>
              </motion.span>
              <h2 className="text-5xl md:text-6xl font-bold text-[#0F4C3A] mb-6 tracking-tight">
                Why Choose Us
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We bring together world-class golf, luxury travel, and purpose-driven experiences to create unforgettable journeys that go far beyond the game.
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm overflow-hidden relative h-full flex flex-col">
                    {/* Hover glow effect */}
                    <div className={`absolute inset-0 ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    
                    {/* Icon container with modern design */}
                    <div className={`relative ${feature.color} p-8 text-white overflow-hidden`}>
                      {/* Animated background pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute w-32 h-32 -top-16 -right-16 bg-white rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                        <div className="absolute w-24 h-24 -bottom-12 -left-12 bg-white rounded-full blur-xl group-hover:scale-125 transition-transform duration-700"></div>
                      </div>
                      
                      <motion.div
                        className="relative z-10"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <feature.icon className="w-14 h-14 mb-4 drop-shadow-lg" />
                      </motion.div>
                      <h3 className="text-2xl font-bold relative z-10">{feature.title}</h3>
                    </div>
                    
                    <CardContent className="p-8 flex-1 flex flex-col">
                      <p className="text-gray-700 leading-relaxed text-[15px] flex-1 group-hover:text-gray-900 transition-colors duration-300">
                        {feature.description}
                      </p>
                      
                      {/* Learn more indicator */}
                      <motion.div
                        className="mt-6 pt-6 border-t border-gray-100 group-hover:border-[#0F4C3A]/20 transition-colors duration-300"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center text-[#0F4C3A] font-medium text-sm">
                          <span className="mr-2 group-hover:mr-4 transition-all duration-300">Learn more</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-[#0F4C3A] mb-6">Our Values</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                These guiding principles shape every experience we create, ensuring meaningful, memorable, and world-class journeys for every golfer who travels with us.
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center group"
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
                    <CardContent className="p-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#D4AF37]/10 mb-6 group-hover:bg-[#D4AF37]/20 transition-colors">
                        <value.icon className="w-8 h-8 text-[#D4AF37]" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#0F4C3A] mb-4">{value.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Connect With Us Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-[#0F4C3A] mb-6">Connect With Us</h2>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="space-y-8">
                  {/* Website */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#0F4C3A] rounded-full flex items-center justify-center">
                      <ExternalLink className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0F4C3A] mb-2">Visit Our Website</h3>
                      <p className="text-gray-700 mb-2">Explore our tours, destinations, and golf experiences at</p>
                      <a href="https://thegolfindia.com" className="text-[#0F4C3A] font-semibold hover:underline">thegolfindia.com</a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#0F4C3A] rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0F4C3A] mb-2">Email Us</h3>
                      <p className="text-gray-700 mb-2">For bookings, partnerships, or general inquiries:</p>
                                              <a href="mailto:thegolfindia@gmail.com" className="text-[#0F4C3A] font-semibold hover:underline">thegolfindia@gmail.com</a>
                    </div>
                  </div>

                  {/* Golf Journey */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#0F4C3A] rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0F4C3A] mb-2">Plan Your Golf Journey</h3>
                      <p className="text-gray-700 mb-4">Let us help you create a personalized golf travel experience:</p>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-[#0F4C3A] rounded-full"></span>
                          Tailored Golf Tour Packages
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-[#0F4C3A] rounded-full"></span>
                          International Tournaments
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-[#0F4C3A] rounded-full"></span>
                          Group & Corporate Bookings
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Common Questions */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-[#0F4C3A] mb-8">Common Questions</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-[#0F4C3A] mb-2">How can I join a golf tour with The Golf India?</h4>
                    <p className="text-gray-700">You can browse our upcoming tours on the website and register directly, or get in touch with our team for a custom itinerary.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#0F4C3A] mb-2">Do you organize international golf events?</h4>
                    <p className="text-gray-700">Yes! We host curated golf events across iconic destinations globally, combining sport with luxury and cultural immersion.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#0F4C3A] mb-2">Can businesses collaborate with The Golf India?</h4>
                    <p className="text-gray-700">Absolutely. We welcome travel agencies, corporate groups, and sponsors to partner with us for premium golf experiences and brand activations.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#0F4C3A] to-[#1A6B54]">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience Vietnam Golf?</h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Join us for an unforgettable golf journey through Vietnam's most beautiful destinations. 
                Let us craft the perfect experience for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[#D4AF37] hover:bg-[#C19B25] text-white px-8 py-3">
                  <Link href="/tours" className="flex items-center">
                    Explore Tours
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#0F4C3A] px-8 py-3">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
