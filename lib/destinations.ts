import { Destination } from './types';

const destinationsData: Destination[] = [
  {
    id: "1",
    name: "Vietnam",
    slug: "vietnam",
    country: "Vietnam",
    description: "Discover world-class golf amidst Vietnam's stunning landscapes, from the scenic Halong Bay to the lush countryside around Hanoi. Experience championship courses paired with rich cultural heritage.",
    imageSrc: "https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg",
    imageAlt: "Stunning view of Halong Bay with traditional boats and limestone karsts",
    featuredCourses: [
      "Skylake Golf Club",
      "FLC Ha Long Golf Club",
      "BRG Legend Hill Golf",
      "Kings Island Golf Resort"
    ],
    mapLocation: {
      lat: 21.0285,
      lng: 105.8542
    }
  },
  
];

// Function to get all destinations
export async function getAllDestinations(): Promise<Destination[]> {
  return destinationsData;
}

// Function to get destination by slug
export async function getDestinationBySlug(slug: string): Promise<Destination | null> {
  return destinationsData.find(destination => destination.slug === slug) || null;
}

// Function to get destinations by country
export function getDestinationsByCountry(country: string): Destination[] {
  return destinationsData.filter(destination => destination.country === country);
}