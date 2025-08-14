"use client";

import { Tour } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Calendar, Users, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Price } from "@/components/ui/price";

interface TourCardProps {
  tour: Tour;
  variant?: "default" | "compact";
}

export function TourCard({ tour, variant = "default" }: TourCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-shadow">
      <div className="relative h-48">
        <Image
          src={tour.imageSrc}
          alt={tour.imageAlt}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-1" />
            {tour.duration} Days
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="h-4 w-4 mr-1" />
            Small Group
          </div>
        </div>
        <h3 className="font-bold text-xl mb-2">{tour.name}</h3>
        {variant === "default" && (
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {tour.shortDescription}
          </p>
        )}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-[#0F4C3A]">
              <Price amount={tour.price} currency={tour.currency} />
            </span>
            <span className="text-sm text-muted-foreground ml-1">per person</span>
          </div>
          <Button variant="outline" size="default" className="group" asChild>
            <Link href={`/tours/${tour.slug}`}>
              View Details <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
} 