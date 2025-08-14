"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type GalleryImage = {
  src: string;
  alt: string;
  category: "accommodation" | "golf-courses";
  label: string;
};

type GalleryFilterProps = {
  images: GalleryImage[];
  className?: string;
};

export function GalleryFilter({ images, className }: GalleryFilterProps) {
  const [filter, setFilter] = useState<"all" | "accommodation" | "golf-courses">("all");

  const filteredImages = images.filter(
    (image) => filter === "all" || image.category === filter
  );

  return (
    <div className={cn("space-y-6", className)}>
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Button
          variant={filter === "all" ? "default" : "outline"}
          onClick={() => setFilter("all")}
          className={cn(
            "bg-[#0F4C3A] text-white",
            filter === "all" ? "" : "hover:bg-[#0F4C3A]/10"
          )}
        >
          All
        </Button>
        <Button
          variant={filter === "accommodation" ? "default" : "outline"}
          onClick={() => setFilter("accommodation")}
          className={cn(
            filter === "accommodation" ? "bg-[#0F4C3A] text-white" : "hover:bg-[#0F4C3A]/10"
          )}
        >
          Accommodation
        </Button>
        <Button
          variant={filter === "golf-courses" ? "default" : "outline"}
          onClick={() => setFilter("golf-courses")}
          className={cn(
            filter === "golf-courses" ? "bg-[#0F4C3A] text-white" : "hover:bg-[#0F4C3A]/10"
          )}
        >
          Golf Courses
        </Button>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image, index) => (
          <div key={index} className="group relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <div className="w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              {/* Category Badge */}
              <Badge 
                className="absolute top-4 right-4 bg-[#0F4C3A] text-white"
                variant="secondary"
              >
                {image.category === "accommodation" ? "Accommodation" : "Golf Course"}
              </Badge>
              {/* Image Label */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                <p className="text-sm font-medium">{image.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredImages.length === 0 && (
        <p className="text-center text-gray-500">
          No images found for the selected filter.
        </p>
      )}
    </div>
  );
} 