import { getTourGalleryImages } from "@/lib/utils";
import { TournamentGallery } from "@/components/tournaments/tournament-gallery";

// This generates the static paths at build time
export async function generateStaticParams() {
  // Return the tournament slugs that should be pre-rendered
  return [
    { slug: "vietnam" },
    { slug: "central-coast" },
    { slug: "central-heritage" },
    { slug: "luxury-north" },
    { slug: "north-retreat" },
    { slug: "southern-mekong" },
  ];
}

interface TournamentPageProps {
  params: Promise<{
    slug: string;
  }>;
}

interface TournamentImage {
  src: string;
  alt: string;
  category: "accommodation" | "golf-courses";
  label: string;
}

export default async function TournamentPage({ params }: TournamentPageProps) {
  const { slug } = await params;
  const images = getTourGalleryImages(slug);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#0F4C3A] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Tournament Details</h1>
          <p className="text-xl md:text-2xl max-w-2xl mb-8">
            Explore our world-class golf courses and luxury accommodations.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <TournamentGallery 
        images={images} 
        title="Tournament Venues & Accommodations" 
      />
    </main>
  );
} 