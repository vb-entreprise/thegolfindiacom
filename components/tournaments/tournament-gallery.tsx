"use client";

import { useState } from "react";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

interface TournamentImage {
  src: string;
  alt: string;
  category: "accommodation" | "golf-courses";
  label: string;
}

interface TournamentGalleryProps {
  images: TournamentImage[];
  title: string;
}

export function TournamentGallery({ images, title }: TournamentGalleryProps) {
  const accommodationImages = images.filter(img => img.category === "accommodation");
  const golfImages = images.filter(img => img.category === "golf-courses");

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">{title}</h2>
        
        <Tabs defaultValue="golf-courses" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="golf-courses">Golf Courses</TabsTrigger>
            <TabsTrigger value="accommodation">Accommodation</TabsTrigger>
          </TabsList>

          <TabsContent value="golf-courses">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {golfImages.map((image, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{image.label}</h3>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="accommodation">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {accommodationImages.map((image, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{image.label}</h3>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
} 