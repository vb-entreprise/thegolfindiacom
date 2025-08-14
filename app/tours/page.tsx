'use client';

import { getTours } from "@/lib/tours";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, Star, Search, Filter, Grid, List, Users, Clock, ArrowRight } from "lucide-react";
import { Price } from "@/components/ui/price";
import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";

export default function ToursPage() {
  const tours = getTours();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedDuration, setSelectedDuration] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredTours = useMemo(() => {
    const getRegionForTour = (tour: any): "north" | "central" | "south" | "all" => {
      const slugLower = (tour.slug ?? "").toLowerCase();
      if (slugLower.includes("north")) return "north";
      if (slugLower.includes("central")) return "central";
      if (slugLower.includes("south") || slugLower.includes("southern")) return "south";

      const locationLower = (tour.location ?? "").toLowerCase();
      if (locationLower.includes("hanoi") || locationLower.includes("ha long")) return "north";
      if (locationLower.includes("da nang") || locationLower.includes("hoi an")) return "central";
      if (locationLower.includes("ho chi minh") || locationLower.includes("mekong")) return "south";
      return "all";
    };

    return tours.filter(tour => {
      const matchesSearch = tour.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           tour.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           tour.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesRegion = selectedRegion === "all" || getRegionForTour(tour) === selectedRegion;
      
      const matchesDuration = selectedDuration === "all" || 
                             (selectedDuration === "short" && tour.duration <= 5) ||
                             (selectedDuration === "medium" && tour.duration > 5 && tour.duration <= 7) ||
                             (selectedDuration === "long" && tour.duration > 7);
      
      return matchesSearch && matchesRegion && matchesDuration;
    });
  }, [tours, searchTerm, selectedRegion, selectedDuration]);

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
              Premium Golf Experiences
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#D4AF37] to-white bg-clip-text text-transparent">
              Golf Tours & Packages
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Discover Vietnam's most exclusive golf destinations with our carefully curated collection of premium tours and packages.
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
                placeholder="Search tours..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
              />
            </div>

            {/* Region Filter */}
            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Select Region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Regions</SelectItem>
                <SelectItem value="north">North Vietnam</SelectItem>
                <SelectItem value="central">Central Vietnam</SelectItem>
                <SelectItem value="south">South Vietnam</SelectItem>
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

            {/* View Mode Toggle */}
            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "green" : "outline"}
                size="default"
                onClick={() => setViewMode("grid")}
                className="flex-1"
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "green" : "outline"}
                size="default"
                onClick={() => setViewMode("list")}
                className="flex-1"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-sm text-gray-600">
              Showing {filteredTours.length} of {tours.length} tours
            </p>
          </div>
        </div>

        {/* Tours Grid/List */}
        {filteredTours.length > 0 ? (
          <div 
            className={viewMode === "grid" 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "space-y-6"
            }
          >
            {filteredTours.map((tour) => (
              <div 
                key={tour.id}
                className="hover:-translate-y-1 transition-transform duration-300"
              >
                <Card className={`overflow-hidden h-full group hover:shadow-2xl transition-all duration-300 ${
                  viewMode === "list" ? "flex" : ""
                }`}>
                  {/* Image */}
                  <div className={`relative overflow-hidden ${
                    viewMode === "list" ? "w-1/3 h-64" : "h-64"
                  }`}>
                    <Image
                      src={tour.imageSrc}
                      alt={tour.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Floating Badges */}
                    <div className="absolute top-4 left-4 space-y-2">
                      <Badge className="bg-[#D4AF37] text-black border-0">
                        {tour.duration} Days
                      </Badge>
                      {tour.featured && (
                        <Badge className="bg-red-500 text-white border-0">
                          Featured
                        </Badge>
                      )}
                    </div>
                    
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                        <Star className="w-4 h-4 text-[#D4AF37]" fill="currentColor" />
                        <span className="font-bold text-[#0F4C3A] text-sm">{tour.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-6 flex flex-col ${
                    viewMode === "list" ? "w-2/3" : ""
                  }`}>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-[#0F4C3A] transition-colors">
                        {tour.name}
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {tour.shortDescription}
                      </p>

                      {/* Tour Details */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="w-4 h-4 text-[#0F4C3A]" />
                          <span className="text-sm">{tour.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="w-4 h-4 text-[#0F4C3A]" />
                          <span className="text-sm">{tour.duration} days</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Users className="w-4 h-4 text-[#0F4C3A]" />
                          <span className="text-sm">Small group</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Star className="w-4 h-4 text-[#0F4C3A]" />
                          <span className="text-sm">{tour.rating} ({tour.reviewCount})</span>
                        </div>
                      </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <p className="text-sm text-gray-500">Starting from</p>
                        <p className="text-2xl font-bold text-[#0F4C3A]">
                          <Price amount={tour.price} currency={tour.currency} />
                        </p>
                        <p className="text-xs text-gray-500">per person</p>
                      </div>
                      <Button 
                        variant="green"
                        size="lg"
                        className="group"
                        asChild
                      >
                        <Link href={`/tours/${tour.slug}`}>
                          View Details
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
              <h3 className="text-xl font-semibold mb-2">No tours found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search criteria or filters to find what you're looking for.
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedRegion("all");
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
      </div>
    </div>
  );
}
