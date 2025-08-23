'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Calendar, MapPin, Check, ArrowRight, Clock, Users, Phone, Mail, MessageCircle, Award, Shield } from "lucide-react";
import { Price } from "@/components/ui/price";
import Image from "next/image";
import Link from "next/link";
import { Tour } from "@/lib/types";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { BookingForm } from "@/components/ui/booking-form";
import { GalleryFilter } from "@/components/ui/gallery-filter";
import { StarRating } from "@/components/ui/star-rating";

interface TourDetailsProps {
  tour: Tour;
}

export function TourDetails({ tour }: TourDetailsProps) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Transform gallery images to include category and label
  const galleryImages = tour.gallery.map(image => ({
    ...image,
    // Extract the category from the image path and ensure it's the correct type
    category: image.src.includes("/accommodation/") ? 
      "accommodation" as const : 
      image.src.includes("/golf-courses/") ?
      "golf-courses" as const :
      "landmarks" as const,
    // Extract the label from the filename (remove extension and replace hyphens with spaces)
    label: image.src.split("/").pop()?.split(".")[0].replace(/-/g, " ") || "",
  }));

  return (
    <>
      {/* Hero Section */}
      <section 
        className="pt-32 pb-20 md:pb-28 bg-cover bg-center relative overflow-hidden"
        style={{ 
          backgroundImage: `linear-gradient(135deg, rgba(15, 76, 58, 0.8), rgba(26, 107, 84, 0.6)), url(${tour.imageSrc})` 
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute w-96 h-96 -top-48 -right-48 bg-[#D4AF37] rounded-full blur-3xl animate-pulse" />
          <div className="absolute w-64 h-64 -bottom-32 -left-32 bg-white rounded-full blur-2xl animate-pulse" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-6">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-200">
                <Link href="/tours" className="hover:text-white transition-colors">Tours</Link>
                <span>/</span>
                <span className="text-[#D4AF37]">{tour.name}</span>
              </div>
            </nav>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#D4AF37] to-white bg-clip-text text-transparent">
              {tour.name}
            </h1>
            
            {/* Description */}
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
              {tour.description}
            </p>

                         {/* Key Stats */}
             <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
               <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                 <Clock className="w-4 h-4 text-[#D4AF37]" />
                 <span className="text-sm font-medium">{tour.duration} Days</span>
               </div>
               <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                 <MapPin className="w-4 h-4 text-[#D4AF37]" />
                 <span className="text-sm font-medium">{tour.location}</span>
               </div>
               <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                 <Star className="w-4 h-4 text-[#D4AF37]" fill="currentColor" />
                 <span className="text-sm font-medium">{tour.rating > 0 ? `${tour.rating}/5` : 'New'} ({tour.reviewCount > 0 ? `${tour.reviewCount} reviews` : 'No reviews yet'})</span>
               </div>
               <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                 <Users className="w-4 h-4 text-[#D4AF37]" />
                 <span className="text-sm font-medium">Group Tour</span>
               </div>
             </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                             <Button 
                 variant="gold"
                 size="xl"
                 className="group"
                 onClick={() => setIsBookingOpen(true)}
               >
                 Book This Experience
                 <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
               </Button>
               <Button 
                 variant="glassmorphism"
                 size="xl"
                 className="group"
                 asChild
               >
                 <Link href="/contact">
                   Get Custom Package
                   <MessageCircle className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                 </Link>
               </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Tour Overview */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#0F4C3A] to-[#1A6B54] flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                                     <h2 className="text-3xl font-bold text-[#0F4C3A]">Experience Overview</h2>
                </div>
                
                <div className="prose max-w-none mb-8">
                  <p className="text-lg text-gray-700 leading-relaxed">{tour.description}</p>
                </div>
                
                {/* Enhanced Tour Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#0F4C3A]/5 to-[#1A6B54]/5 rounded-xl border border-[#0F4C3A]/10">
                    <div className="w-10 h-10 rounded-full bg-[#0F4C3A]/10 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-[#0F4C3A]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Duration</p>
                      <p className="font-bold text-[#0F4C3A]">{tour.duration} Days</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#0F4C3A]/5 to-[#1A6B54]/5 rounded-xl border border-[#0F4C3A]/10">
                    <div className="w-10 h-10 rounded-full bg-[#0F4C3A]/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[#0F4C3A]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Location</p>
                      <p className="font-bold text-[#0F4C3A]">{tour.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#D4AF37]/5 to-[#F4D03F]/5 rounded-xl border border-[#D4AF37]/10">
                    <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                      <Star className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Rating</p>
                      <p className="font-bold text-[#D4AF37]">{tour.rating > 0 ? `${tour.rating}/5` : 'New'} ({tour.reviewCount > 0 ? `${tour.reviewCount} reviews` : 'No reviews yet'})</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#0F4C3A]/5 to-[#1A6B54]/5 rounded-xl border border-[#0F4C3A]/10">
                    <div className="w-10 h-10 rounded-full bg-[#0F4C3A]/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-[#0F4C3A]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Group Size</p>
                      <p className="font-bold text-[#0F4C3A]">Small Group</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Itinerary */}
              {tour.itinerary && (
                <div className="bg-white rounded-2xl shadow-xl p-8 border-0">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="text-3xl font-bold text-[#0F4C3A]">Day-by-Day Itinerary</h3>
                  </div>
                  
                  <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0F4C3A] via-[#D4AF37] to-[#0F4C3A]"></div>
                    
                    <div className="space-y-8">
                      {tour.itinerary.map((day, index) => (
                        <div key={index} className="relative flex gap-6">
                          {/* Timeline Node */}
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#0F4C3A] to-[#1A6B54] rounded-full flex items-center justify-center text-white font-bold text-sm z-10 border-4 border-white shadow-lg">
                            {day.day}
                          </div>
                          
                          {/* Content Card */}
                          <div className="flex-1 bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                            <h4 className="font-bold text-xl mb-3 text-[#0F4C3A]">
                              Day {day.day}: {day.title}
                            </h4>
                            <p className="text-gray-700 leading-relaxed mb-4">{day.description}</p>
                            
                            {day.accommodation && (
                              <div className="flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-200">
                                <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                                  <Award className="w-4 h-4 text-[#D4AF37]" />
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-gray-700">
                                    <span className="text-[#0F4C3A] font-semibold">Accommodation:</span> {day.accommodation}
                                  </p>
                                  {day.starRating && (
                                    <div className="mt-1">
                                      <StarRating rating={day.starRating} size="sm" />
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Enhanced Gallery */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border-0">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#0F4C3A]">Photo Gallery</h3>
                </div>
                <GalleryFilter images={galleryImages} />
              </div>

              {/* Customer Reviews */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border-0">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#0F4C3A]">What Our Guests Say</h3>
                </div>
                
                <div className="text-center py-8">
                  <p className="text-gray-600 mb-4">Be the first to review this tour!</p>
                  <Button variant="outline" size="lg" className="group">
                    Write a Review
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                
                <div className="text-center mt-8">
                  <Button variant="outline" size="lg" className="group">
                    Write the First Review
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>

              {/* Related Tours */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border-0">
                <div className="flex items-center gap-3 mb-8">
                                     <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center">
                     <Star className="w-6 h-6 text-white" />
                   </div>
                                     <h3 className="text-3xl font-bold text-[#0F4C3A]">You Might Also Like</h3>
                 </div>
                 
                 <div className="text-center">
                   <p className="text-gray-600 mb-6">Discover more amazing experiences and destinations</p>
                   <Button variant="green" size="lg" className="group" asChild>
                     <Link href="/tours">
                       Browse All Experiences
                       <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                     </Link>
                   </Button>
                 </div>
              </div>
            </div>

            {/* Enhanced Sidebar */}
            <div className="space-y-6">
              {/* Main Booking Card */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-0 sticky top-24">
                {/* Header with Gradient */}
                <div className="bg-gradient-to-r from-[#0F4C3A] to-[#1A6B54] p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                                          <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      <Star className="w-4 h-4 text-[#D4AF37]" fill="currentColor" />
                      <span className="font-bold text-sm">{tour.rating > 0 ? tour.rating : 'New'}</span>
                      <span className="text-white/80 text-xs">({tour.reviewCount > 0 ? tour.reviewCount : 'No reviews'})</span>
                    </div>
                    </div>
                    <Badge className="bg-[#D4AF37] text-black border-0 font-semibold">{tour.country}</Badge>
                  </div>
                  
                  {/* Price Display */}
                  <div className="text-center">
                    <p className="text-white/80 text-sm mb-1">Starting from</p>
                    <div className="flex items-baseline justify-center gap-2">
                      <Price 
                        amount={tour.price}
                        currency={tour.currency}
                        className="text-3xl font-bold text-white"
                      />
                      <span className="text-white/80 text-sm">per person</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-2 text-xs text-white/70">
                      <Shield className="w-3 h-3" />
                      <span>Best Price Guarantee</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Quick Contact Options */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <Button variant="outline" size="sm" className="group" asChild>
                      <Link href="tel:+918799395926">
                        <Phone className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                        Call Now
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" className="group" asChild>
                      <Link href="mailto:thegolfindia@gmail.com">
                        <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                        Email Us
                      </Link>
                    </Button>
                  </div>

                  {/* Main CTA Buttons */}
                  <div className="space-y-3 mb-6">
                    <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
                      <DialogTrigger asChild>
                                               <Button variant="green" size="lg" className="w-full group">
                           Book This Experience
                           <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                         </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto p-4 sm:p-6">
                        <DialogTitle className="sr-only">Book Your Golf Tour</DialogTitle>
                        <BookingForm />
                      </DialogContent>
                    </Dialog>
                    
                                         <Button variant="outline" size="lg" className="w-full group" asChild>
                       <Link href="/contact">
                         Get Custom Package
                         <MessageCircle className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                       </Link>
                     </Button>
                  </div>

                  {/* Trust Indicators */}
                  <div className="grid grid-cols-3 gap-2 mb-6 p-3 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-lg font-bold text-[#0F4C3A]">24/7</div>
                      <div className="text-xs text-gray-600">Support</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-[#0F4C3A]">Free</div>
                      <div className="text-xs text-gray-600">Cancellation</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-[#0F4C3A]">Secure</div>
                      <div className="text-xs text-gray-600">Payment</div>
                    </div>
                  </div>

                                     {/* Experience Highlights */}
                   <div className="mb-6">
                     <h4 className="font-bold text-lg mb-4 flex items-center text-[#0F4C3A]">
                       <Award className="w-5 h-5 mr-2 text-[#D4AF37]" />
                       Experience Highlights
                     </h4>
                    <ul className="space-y-3">
                      {tour.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-[#0F4C3A]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-[#0F4C3A]" />
                          </div>
                          <span className="text-gray-700 text-sm leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Includes */}
                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-3 flex items-center text-[#0F4C3A]">
                      <Check className="w-5 h-5 mr-2 text-green-500" />
                      What's Included
                    </h4>
                    <ul className="space-y-2">
                      {tour.includes.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Excludes */}
                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-3 flex items-center text-[#0F4C3A]">
                      <span className="w-5 h-5 mr-2 text-red-500 flex items-center justify-center">×</span>
                      Not Included
                    </h4>
                    <ul className="space-y-2">
                      {tour.excludes.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5 flex items-center justify-center text-xs">×</span>
                          <span className="text-sm text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Help Text */}
                                     <div className="text-center text-sm text-gray-500 border-t pt-4">
                     <p>Questions about this experience?</p>
                     <Link href="/contact" className="text-[#0F4C3A] hover:underline font-medium">
                       Contact our travel experts
                     </Link>
                   </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>
    </>
  );
} 