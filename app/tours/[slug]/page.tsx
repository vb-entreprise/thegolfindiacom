import { getTourBySlug, getAllTours } from "@/lib/tours";
import { notFound } from "next/navigation";
import { TourDetails } from "./tour-details";

// This generates the static paths at build time
export async function generateStaticParams() {
  const tours = await getAllTours();
  return tours.map((tour) => ({
    slug: tour.slug,
  }));
}

interface TourPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function TourPage({ params }: TourPageProps) {
  const { slug } = await params;
  const tour = await getTourBySlug(slug);

  if (!tour) {
    notFound();
  }

  return <TourDetails tour={tour} />;
}