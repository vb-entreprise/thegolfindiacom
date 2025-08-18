import { Destination } from './types';

const destinationsData: Destination[] = [
  {
    id: "1",
    name: "Vietnam",
    slug: "vietnam",
    country: "Vietnam",
    description: "Discover world-class golf amidst Vietnam's stunning landscapes, from the scenic Halong Bay to the lush countryside around Hanoi. Experience championship courses paired with rich cultural heritage.",
    imageSrc: "/images/tournaments/vietnam/central-heritage/golden-bridge.jpg",
    imageAlt: "Golden Bridge (Cau Vang) in Da Nang, Vietnam - Iconic pedestrian bridge held by giant stone hands",
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
  {
    id: "2",
    name: "United Kingdom",
    slug: "uk",
    country: "UK",
    description: "Experience the birthplace of golf with world-renowned courses from the historic links of Scotland to the prestigious clubs of England. Discover the rich heritage and tradition of golf in the United Kingdom.",
    imageSrc: "/images/destinations/uk/london.jpg",
    imageAlt: "Iconic London skyline with Big Ben and the River Thames",
    featuredCourses: [
      "St Andrews Old Course",
      "Royal Troon Golf Club",
      "Carnoustie Golf Links",
      "Muirfield Golf Club"
    ],
    mapLocation: {
      lat: 55.9533,
      lng: -3.1883
    }
  },
  {
    id: "3",
    name: "India",
    slug: "india",
    country: "India",
    description: "Experience golf in the diverse landscapes of India, from the lush greens of the Himalayas to the coastal courses of Goa. Discover championship golf courses combined with rich cultural heritage and luxury accommodations.",
    imageSrc: "/images/destinations/india/india-golf.png",
    imageAlt: "Golf course in India with traditional architecture and scenic views",
    featuredCourses: [
      "DLF Golf Club",
      "Royal Calcutta Golf Club",
      "Bombay Presidency Golf Club",
      "Delhi Golf Club"
    ],
    mapLocation: {
      lat: 20.5937,
      lng: 78.9629
    }
  },
  {
    id: "4",
    name: "Thailand",
    slug: "thailand",
    country: "Thailand",
    description: "Discover tropical golf paradise in Thailand with world-class courses set against stunning beaches and lush landscapes. Experience championship golf combined with Thai hospitality and cultural richness.",
    imageSrc: "/images/destinations/thailand/thailand-golf.jpg",
    imageAlt: "Tropical golf course in Thailand with palm trees and scenic views",
    featuredCourses: [
      "Blue Canyon Country Club",
      "Siam Country Club",
      "Alpine Golf Club",
      "Thai Country Club"
    ],
    mapLocation: {
      lat: 15.8700,
      lng: 100.9925
    }
  },
  {
    id: "5",
    name: "Canada",
    slug: "canada",
    country: "Canada",
    description: "Experience world-class golf in Canada's stunning landscapes, from the majestic Rocky Mountains to the pristine lakes of Ontario. Discover championship courses set against breathtaking natural beauty and enjoy Canadian hospitality.",
    imageSrc: "/images/destinations/canada/cn-tower.jpg",
    imageAlt: "CN Tower in Toronto, Canada - Iconic landmark and symbol of Canadian innovation",
    featuredCourses: [
      "Banff Springs Golf Club",
      "Jasper Park Lodge Golf Club",
      "Cabot Cliffs Golf Course",
      "St. George's Golf and Country Club"
    ],
    mapLocation: {
      lat: 56.1304,
      lng: -106.3468
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