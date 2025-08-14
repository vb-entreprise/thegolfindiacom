'use client';

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Star, Search, Filter, Users, Clock, Zap, Crown, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";

// Mock packages data
const packagesData = [
  {
    id: 1,
    name: "Luxury Vietnam Golf Escape",
    location: "Ho Chi Minh City & Da Nang",
    duration: 7,
    price: 3200,
    rating: 4.9,
    reviewCount: 124,
    category: "luxury",
    type: "premium",
    imageSrc: "/images/home/hero-golf.jpg",
    imageAlt: "Luxury Golf Package",
    shortDescription: "Experience Vietnam's finest golf courses with luxury accommodations and VIP treatment.",
    highlights: ["5-star hotels", "Championship courses", "Private transfers", "Gourmet dining"]
  },
  {
    id: 2,
    name: "Adventure Golf Explorer",
    location: "North Vietnam",
    duration: 5,
    price: 1800,
    rating: 4.7,
    reviewCount: 89,
    category: "adventure",
    type: "standard",
    imageSrc: "/images/destinations/vietnam-1.jpg",
    imageAlt: "Adventure Golf Package",
    shortDescription: "Combine golf with cultural exploration and outdoor adventures in stunning North Vietnam.",
    highlights: ["Cultural tours", "Mountain courses", "Local experiences", "Group activities"]
  },
  {
    id: 3,
    name: "Family Golf Getaway",
    location: "Central Vietnam",
    duration: 6,
    price: 2400,
    rating: 4.8,
    reviewCount: 156,
    category: "family",
    type: "standard",
    imageSrc: "/images/destinations/vietnam-2.jpg",
    imageAlt: "Family Golf Package",
    shortDescription: "Perfect family vacation combining golf for adults with fun activities for everyone.",
    highlights: ["Family-friendly resorts", "Kids activities", "Beach access", "Flexible schedules"]
  },
  {
    id: 4,
    name: "Corporate Golf Tournament",
    location: "Multiple Locations",
    duration: 4,
    price: 2800,
    rating: 4.6,
    reviewCount: 72,
    category: "corporate",
    type: "premium",
    imageSrc: "/images/home/hero-golf.jpg",
    imageAlt: "Corporate Golf Package",
    shortDescription: "Professional golf tournaments and team building experiences for corporate groups.",
    highlights: ["Tournament format", "Team building", "Professional coaching", "Awards ceremony"]
  },
  {
    id: 5,
    name: "Couples Golf Romance",
    location: "Central Coast",
    duration: 8,
    price: 3800,
    rating: 4.9,
    reviewCount: 98,
    category: "couples",
    type: "luxury",
    imageSrc: "/images/destinations/vietnam-3.jpg",
    imageAlt: "Couples Golf Package",
    shortDescription: "Romantic golf getaway with spa treatments and intimate dining experiences.",
    highlights: ["Couples spa", "Private dinners", "Romantic settings", "Exclusive courses"]
  },
  {
    id: 6,
    name: "Wellness Golf Retreat",
    location: "Da Lat Highlands",
    duration: 10,
    price: 4200,
    rating: 4.8,
    reviewCount: 67,
    category: "wellness",
    type: "luxury",
    imageSrc: "/images/destinations/vietnam-1.jpg",
    imageAlt: "Wellness Golf Package",
    shortDescription: "Combine golf with wellness activities in the serene highlands of Da Lat.",
    highlights: ["Yoga sessions", "Meditation", "Healthy cuisine", "Nature walks"]
  }
];

export default function PackagesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedDuration, setSelectedDuration] = useState("all");

  const filteredPackages = useMemo(() => {
    return packagesData.filter(pkg => {
      const matchesSearch = pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           pkg.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           pkg.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === "all" || pkg.category === selectedCategory;
      const matchesType = selectedType === "all" || pkg.type === selectedType;
      const matchesDuration = selectedDuration === "all" || 
                             (selectedDuration === "short" && pkg.duration <= 5) ||
                             (selectedDuration === "medium" && pkg.duration > 5 && pkg.duration <= 7) ||
                             (selectedDuration === "long" && pkg.duration > 7);
      
      return matchesSearch && matchesCategory && matchesType && matchesDuration;
    });
  }, [searchTerm, selectedCategory, selectedType, selectedDuration]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "luxury": return <Crown className="w-5 h-5" />;
      case "adventure": return <Zap className="w-5 h-5" />;
      case "family": return <Users className="w-5 h-5" />;
      case "couples": return <Heart className="w-5 h-5" />;
      case "wellness": return <Star className="w-5 h-5" />;
      default: return <Star className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#0F4C3A] to-[#1A6B54] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-[#D4AF37] text-black border-0 px-4 py-2 text-sm font-semibold">
              Tailored Experiences
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#D4AF37] to-white bg-clip-text text-transparent">
              Golf Packages
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Choose from our carefully crafted golf packages designed to match your style, preferences, and travel goals.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search packages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="luxury">Luxury</SelectItem>
                <SelectItem value="adventure">Adventure</SelectItem>
                <SelectItem value="family">Family</SelectItem>
                <SelectItem value="couples">Couples</SelectItem>
                <SelectItem value="corporate">Corporate</SelectItem>
                <SelectItem value="wellness">Wellness</SelectItem>
              </SelectContent>
            </Select>

            {/* Type Filter */}
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="standard">Standard</SelectItem>
                <SelectItem value="premium">Premium</SelectItem>
                <SelectItem value="luxury">Luxury</SelectItem>
              </SelectContent>
            </Select>

            {/* Duration Filter */}
            <Select value={selectedDuration} onValueChange={setSelectedDuration}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Durations</SelectItem>
                <SelectItem value="short">Short (1-5 days)</SelectItem>
                <SelectItem value="medium">Medium (6-7 days)</SelectItem>
                <SelectItem value="long">Long (8+ days)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Results Count */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-sm text-gray-600">
              {filteredPackages.length} packages found
            </p>
          </div>
        </div>

        {/* Featured Categories Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#0F4C3A]">Popular Package Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { key: "luxury", label: "Luxury", icon: Crown, count: packagesData.filter(p => p.category === "luxury").length, color: "from-yellow-400 to-yellow-600" },
              { key: "adventure", label: "Adventure", icon: Zap, count: packagesData.filter(p => p.category === "adventure").length, color: "from-orange-400 to-red-500" },
              { key: "family", label: "Family", icon: Users, count: packagesData.filter(p => p.category === "family").length, color: "from-blue-400 to-blue-600" },
              { key: "couples", label: "Couples", icon: Heart, count: packagesData.filter(p => p.category === "couples").length, color: "from-pink-400 to-rose-500" },
              { key: "corporate", label: "Corporate", icon: Users, count: packagesData.filter(p => p.category === "corporate").length, color: "from-gray-400 to-gray-600" },
              { key: "wellness", label: "Wellness", icon: Star, count: packagesData.filter(p => p.category === "wellness").length, color: "from-green-400 to-emerald-500" }
            ].map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                  selectedCategory === cat.key 
                    ? 'bg-gradient-to-br ' + cat.color + ' text-white shadow-lg' 
                    : 'bg-white hover:shadow-md border border-gray-200'
                }`}
              >
                <div className="flex flex-col items-center">
                  <cat.icon className={`w-8 h-8 mb-2 ${selectedCategory === cat.key ? 'text-white' : 'text-[#0F4C3A]'}`} />
                  <span className={`font-semibold text-sm ${selectedCategory === cat.key ? 'text-white' : 'text-gray-700'}`}>
                    {cat.label}
                  </span>
                  <span className={`text-xs ${selectedCategory === cat.key ? 'text-white/80' : 'text-gray-500'}`}>
                    {cat.count} packages
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Packages Grid */}
        {filteredPackages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="hover:-translate-y-1 transition-transform duration-300"
              >
                <Card className="overflow-hidden h-full group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50/30">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={pkg.imageSrc}
                      alt={pkg.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black border-0 flex items-center gap-2 px-3 py-1.5 shadow-lg">
                        {getCategoryIcon(pkg.category)}
                        {pkg.category.charAt(0).toUpperCase() + pkg.category.slice(1)}
                      </Badge>
                    </div>
                    
                    {/* Type Badge */}
                    {pkg.type === 'luxury' && (
                      <div className="absolute top-4 left-4 mt-12">
                        <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 px-2 py-1 text-xs shadow-lg">
                          PREMIUM
                        </Badge>
                      </div>
                    )}
                    
                    {/* Rating */}
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                        <Star className="w-4 h-4 text-[#D4AF37]" fill="currentColor" />
                        <span className="font-bold text-[#0F4C3A] text-sm">{pkg.rating}</span>
                        <span className="text-gray-500 text-xs">({pkg.reviewCount})</span>
                      </div>
                    </div>

                    {/* Duration */}
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-black/70 text-white border-0 backdrop-blur-sm px-3 py-1.5 shadow-lg">
                        <Clock className="w-3 h-3 mr-1" />
                        {pkg.duration} Days
                      </Badge>
                    </div>

                    {/* Price Badge */}
                    <div className="absolute bottom-4 right-4">
                      <div className="bg-[#0F4C3A]/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full shadow-lg">
                        <span className="text-xs">From</span>
                        <span className="font-bold ml-1">${pkg.price.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col bg-gradient-to-br from-white via-white to-gray-50/50">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold group-hover:text-[#0F4C3A] transition-colors leading-tight">
                          {pkg.name}
                        </h3>
                        {pkg.type === 'luxury' && (
                          <Crown className="w-5 h-5 text-[#D4AF37] flex-shrink-0 ml-2" />
                        )}
                      </div>

                      <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                        {pkg.shortDescription}
                      </p>

                      {/* Package Details */}
                      <div className="grid grid-cols-1 gap-3 mb-4">
                        <div className="flex items-center gap-2 text-gray-600">
                          <div className="w-8 h-8 rounded-full bg-[#0F4C3A]/10 flex items-center justify-center">
                            <MapPin className="w-4 h-4 text-[#0F4C3A]" />
                          </div>
                          <span className="text-sm font-medium">{pkg.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <div className="w-8 h-8 rounded-full bg-[#0F4C3A]/10 flex items-center justify-center">
                            <Users className="w-4 h-4 text-[#0F4C3A]" />
                          </div>
                          <span className="text-sm font-medium">{pkg.reviewCount} reviews • {pkg.rating}★</span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                          <Star className="w-4 h-4 text-[#D4AF37] mr-2" />
                          What's Included:
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {pkg.highlights.slice(0, 4).map((highlight, index) => (
                            <div key={index} className="flex items-center text-xs text-gray-600">
                              <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mr-2"></div>
                              {highlight}
                            </div>
                          ))}
                        </div>
                        {pkg.highlights.length > 4 && (
                          <p className="text-xs text-[#0F4C3A] mt-2 font-medium">
                            +{pkg.highlights.length - 4} more features
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Starting from</p>
                          <div className="flex items-baseline">
                            <span className="text-2xl font-bold text-[#0F4C3A]">
                              ${pkg.price.toLocaleString()}
                            </span>
                            <span className="text-sm text-gray-500 ml-1">per person</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center text-xs text-gray-500 mb-1">
                            <Calendar className="w-3 h-3 mr-1" />
                            {pkg.duration} days
                          </div>
                          <p className="text-xs text-[#0F4C3A] font-medium">Best Price Guarantee</p>
                        </div>
                      </div>
                      <Button 
                        variant="green"
                        size="lg"
                        className="w-full group"
                        asChild
                      >
                        <Link href={`/packages/${pkg.id}`}>
                          View Package Details
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No packages found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search criteria or filters to find what you're looking for.
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setSelectedType("all");
                  setSelectedDuration("all");
                }}
                variant="outline"
                size="lg"
                className="group"
              >
                Clear Filters
                <Filter className="w-4 h-4 ml-2 group-hover:rotate-180 transition-transform" />
              </Button>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-br from-[#0F4C3A] to-[#1A6B54] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute w-96 h-96 -top-48 -right-48 bg-white rounded-full blur-3xl" />
            <div className="absolute w-64 h-64 -bottom-32 -left-32 bg-[#D4AF37] rounded-full blur-2xl" />
          </div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-sm font-medium">Personalized Service</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Can't Find Your Perfect Package?
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Let our golf travel experts create a custom package tailored to your preferences, budget, and dream destinations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="gold"
                size="xl"
                className="group"
                asChild
              >
                <Link href="/contact">
                  Get Custom Package
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                variant="glassmorphism"
                size="xl"
                className="group"
                asChild
              >
                <Link href="/tours">
                  Browse Tours
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center justify-center gap-8 mt-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-sm text-gray-300">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">4.9★</div>
                <div className="text-sm text-gray-300">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-gray-300">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 