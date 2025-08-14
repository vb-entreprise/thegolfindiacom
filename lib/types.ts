export interface Destination {
  id: string;
  name: string;
  slug: string;
  country: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  featuredCourses: string[];
  mapLocation: {
    lat: number;
    lng: number;
  };
}

export interface Tour {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  duration: number;
  price: number;
  currency: string;
  location: string;
  country: string;
  rating: number;
  reviewCount: number;
  featured: boolean;
  imageSrc: string;
  imageAlt: string;
  gallery: {
    src: string;
    alt: string;
  }[];
  highlights: string[];
  includes: string[];
  excludes: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    accommodation: string;
    starRating?: number;
  }[];
  mapLocation: {
    lat: number;
    lng: number;
  };
} 