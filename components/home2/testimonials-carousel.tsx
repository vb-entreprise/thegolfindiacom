'use client';

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Michael Johnson",
    location: "United States",
    rating: 5,
    text: "Absolutely incredible golf experience in Vietnam! The courses were pristine, the accommodations luxurious, and the cultural experiences unforgettable. Highly recommend!",
    avatar: "MJ",
    tour: "Central Heritage Golf Tour"
  },
  {
    id: 2,
    name: "Sarah Williams",
    location: "Australia",
    rating: 5,
    text: "The luxury north tour exceeded all expectations. World-class golf courses with stunning mountain views, and the service was impeccable throughout.",
    avatar: "SW",
    tour: "Luxury North Golf Experience"
  },
  {
    id: 3,
    name: "David Chen",
    location: "Singapore",
    rating: 5,
    text: "Perfect blend of golf and culture. The Mekong Delta tour offered unique experiences both on and off the course. Will definitely return!",
    avatar: "DC",
    tour: "Southern Mekong Golf Adventure"
  },
  {
    id: 4,
    name: "Emma Thompson",
    location: "United Kingdom",
    rating: 5,
    text: "The North Retreat tour was exactly what we needed - peaceful golf in beautiful surroundings with excellent local guides. Truly memorable experience.",
    avatar: "ET",
    tour: "North Retreat Golf Package"
  },
  {
    id: 5,
    name: "Robert Martinez",
    location: "Canada",
    rating: 5,
    text: "Outstanding service from start to finish. The golf courses were challenging yet enjoyable, and the cultural activities added so much value to the trip.",
    avatar: "RM",
    tour: "Central Heritage Golf Tour"
  }
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#0F4C3A] to-[#1A6B54] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-white rounded-full blur-3xl" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Golfers Say
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Don't just take our word for it - hear from golfers who've experienced Vietnam's finest courses
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-96 overflow-hidden rounded-2xl">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full h-full"
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 h-full flex flex-col justify-center">
                <div className="text-center">
                  {/* Quote icon */}
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] rounded-full flex items-center justify-center mx-auto mb-6"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <Quote className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Testimonial text */}
                  <motion.p 
                    className="text-lg text-white mb-8 leading-relaxed max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    "{testimonials[currentIndex].text}"
                  </motion.p>

                  {/* Author info */}
                  <motion.div 
                    className="flex items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <Avatar className="w-12 h-12 border-2 border-[#D4AF37]">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-gradient-to-r from-[#0F4C3A] to-[#1A6B54] text-white font-semibold">
                        {testimonials[currentIndex].avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <h4 className="font-semibold text-white">{testimonials[currentIndex].name}</h4>
                      <p className="text-gray-300 text-sm">{testimonials[currentIndex].location}</p>
                      <p className="text-[#D4AF37] text-sm font-medium">{testimonials[currentIndex].tour}</p>
                    </div>
                  </motion.div>

                  {/* Rating */}
                  <motion.div 
                    className="flex justify-center gap-1 mt-4"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#D4AF37]" fill="currentColor" />
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation buttons */}
          <motion.button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
            onClick={() => paginate(-1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
            onClick={() => paginate(1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-[#D4AF37]' : 'bg-white/30'
                }`}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center text-white">
            <div className="text-3xl font-bold mb-2">98%</div>
            <div className="text-gray-300">Satisfaction Rate</div>
          </div>
          <div className="text-center text-white">
            <div className="text-3xl font-bold mb-2">1000+</div>
            <div className="text-gray-300">Happy Golfers</div>
          </div>
          <div className="text-center text-white">
            <div className="text-3xl font-bold mb-2">4.9/5</div>
            <div className="text-gray-300">Average Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 