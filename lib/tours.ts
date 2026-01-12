import { Tour } from './types';
import { getTourGalleryImages } from './utils';

const toursData: Tour[] = [
  {
    id: "1",
    name: "Luxury North Vietnam Golf & Cruise Experience",
    slug: "luxury-north-vietnam-golf-cruise",
    description: "Experience world-class golf in North Vietnam's lush countryside, cruise through the legendary Halong Bay, and enjoy seamless service, comfort, and culture. This exclusive 6-day journey combines premium golf at four championship courses with a luxury overnight cruise in UNESCO-listed Halong Bay.",
    shortDescription: "World-class golf and luxury cruise experience in North Vietnam.",
    duration: 6,
    price: 1416,
    currency: "$",
    location: "Hanoi – Halong Bay",
    country: "Vietnam",
    rating: 0,
    reviewCount: 0,
    featured: true,
    imageSrc: "/images/tournaments/vietnam/luxury-north/hero.jpg",
    imageAlt: "Stunning view of Halong Bay with traditional boats and limestone karsts",
    gallery: getTourGalleryImages("luxury-north-vietnam-golf-cruise"),
    highlights: [
      "Play at the breathtaking FLC Halong Golf Club, overlooking UNESCO waters",
      "Enjoy a round at BRG Legend Hill Golf, designed by Jack Nicklaus",
      "Challenge yourself at BRG Kings Island Golf Resort's championship course",
      "Experience the scenic Sky Lake Golf & Resort in Hanoi",
      "Stay at the luxurious APRICOT HOTEL and SILK PATH Hotel",
      "Cruise through Halong Bay aboard the deluxe Peony and Indochine Cruises",
      "Explore Hanoi's historic Old Quarter and vibrant street life",
      "Option for spa treatments, local cultural shows, and fine dining"
    ],
    includes: [
      "5 nights in 5-star luxury hotels & 4-star premium cruise cabins",
      "4 rounds of golf at championship courses",
      "Daily breakfast & 2 lunches, 1 dinner",
      "Private Halong Bay overnight cruise",
      "Local expert golf & tour guide",
      "Airport & intercity transfers (private A/C coach)"
    ],
    excludes: [
      "Flights to/from Vietnam",
      "Travel insurance",
      "Visa fees for Vietnam",
      "Tips for guide and driver",
      "Personal expenses (laundry, drinks, etc.)",
      "Optional massage or add-on excursions"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival – Hanoi",
        description: "Airport pick-up by private transfer. Check-in at APRICOT HOTEL, welcome dinner optional.",
        accommodation: "APRICOT HOTEL",
        starRating: 5
      },
      {
        day: 2,
        title: "Golf at Sky Lake",
        description: "Breakfast at hotel. Morning round at Sky Lake Golf & Resort Ha Noi. Free evening for local exploration.",
        accommodation: "APRICOT HOTEL",
        starRating: 5
      },
      {
        day: 3,
        title: "Golf + Transfer to Ha Long",
        description: "Breakfast and transfer to Ha Long. Play at FLC Halong Golf Club. Optional Vietnamese massage.",
        accommodation: "FLC Ha Long Bay Golf Club & Luxury Resort",
        starRating: 5
      },
      {
        day: 4,
        title: "Halong Bay Cruise",
        description: "Board Peony Cruise for overnight experience. Enjoy kayaking, sunset deck views, and Vietnamese lunch/dinner on board.",
        accommodation: "Peony Cruise - Deluxe Balcony Cabin",
        starRating: 4
      },
      {
        day: 5,
        title: "Golf at BRG Legend Hill + Return",
        description: "Morning round at BRG Legend Hill Golf Course. Afternoon at BRG Kings Island Golf Resort. Return to Hanoi for farewell dinner.",
        accommodation: "SILK PATH Hotel",
        starRating: 4
      },
      {
        day: 6,
        title: "Departure",
        description: "Breakfast and transfer to airport.",
        accommodation: "N/A"
      }
    ],
    mapLocation: {
      lat: 21.0285,
      lng: 105.8542
    }
  },
  {
    id: "2",
    name: "North Vietnam Golf Retreat & Day Cruise Escape",
    slug: "north-vietnam-golf-retreat",
    description: "A balanced blend of golf, relaxation, and cultural discovery in Vietnam's stunning north. Perfect for leisure golfers seeking top courses and UNESCO beauty in a shorter format. Experience championship golf courses, luxury accommodations, and the natural wonder of Halong Bay.",
    shortDescription: "Premium golf experience with day cruise in North Vietnam.",
    duration: 6,
    price: 1332,
    currency: "$",
    location: "Hanoi – Ha Long Bay",
    country: "Vietnam",
    rating: 0,
    reviewCount: 0,
    featured: true,
    imageSrc: "/images/tournaments/vietnam/north-retreat/hero.jpg",
    imageAlt: "Scenic view of a golf course with mountains in the background",
    gallery: getTourGalleryImages("north-vietnam-golf-retreat"),
    highlights: [
      "Play at the breathtaking FLC Halong Golf Club, overlooking UNESCO waters",
      "Challenge yourself at BRG Kings Island Golf Resort's championship course",
      "Experience the scenic Sky Lake Golf & Resort in Hanoi",
      "Stay at the luxurious APRICOT HOTEL and SILK PATH Hotel",
      "Enjoy a day cruise aboard the premium Amethyst Cruise",
      "Explore Hanoi's colonial charm, street markets, and cuisine",
      "Optional massage and fine dining experiences"
    ],
    includes: [
      "5 nights in 5-star premium accommodations",
      "3 rounds of golf at top-rated courses",
      "Daily breakfast + 1 lunch",
      "Halong Bay day cruise with onboard lunch",
      "Airport transfers and private intercity transport",
      "Local English-speaking golf & tour guide"
    ],
    excludes: [
      "International & domestic flights",
      "Visa fees for Vietnam",
      "Personal expenses (laundry, beverages, shopping)",
      "Tips for guide and driver",
      "Travel insurance (mandatory)",
      "Optional activities (e.g., massage, private dinners)"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival – Hanoi",
        description: "Arrival at Noi Bai International Airport. Private transfer to APRICOT HOTEL. Check-in and relax.",
        accommodation: "APRICOT HOTEL",
        starRating: 5
      },
      {
        day: 2,
        title: "Golf at Sky Lake",
        description: "Breakfast at hotel. Morning round at Sky Lake Golf & Resort Ha Noi. Evening at leisure.",
        accommodation: "APRICOT HOTEL",
        starRating: 5
      },
      {
        day: 3,
        title: "FLC Halong Golf",
        description: "Breakfast and drive to Ha Long. Golf at FLC Halong Golf Club. Optional massage or city walk.",
        accommodation: "SILK PATH Hotel",
        starRating: 4
      },
      {
        day: 4,
        title: "Halong Bay Cruise",
        description: "Morning check-out. Day cruise on Amethyst Cruise with seafood lunch onboard. Return to Hanoi in the evening.",
        accommodation: "SILK PATH Hotel",
        starRating: 4
      },
      {
        day: 5,
        title: "Golf at Kings Island",
        description: "Early breakfast. Golf at BRG Kings Island Golf Resort. Farewell dinner (optional).",
        accommodation: "SILK PATH Hotel",
        starRating: 4
      },
      {
        day: 6,
        title: "Departure",
        description: "Breakfast at hotel. Transfer to Hanoi Airport for departure.",
        accommodation: "N/A"
      }
    ],
    mapLocation: {
      lat: 21.0285,
      lng: 105.8542
    }
  },
  {
    id: "3",
    name: "Central Vietnam Heritage & Golf Experience",
    slug: "central-vietnam-heritage-golf",
    description: "Tee off on Vietnam's most iconic coastal golf courses, explore ancient Hoi An, and relax in style across Da Nang's lush green hills and beaches. A premium golf-meets-culture experience combining world-class golf with UNESCO heritage sites and coastal beauty.",
    shortDescription: "Championship golf and cultural exploration in Central Vietnam.",
    duration: 7,
    price: 1614,
    currency: "$",
    location: "Da Nang – Hoi An",
    country: "Vietnam",
    rating: 0,
    reviewCount: 0,
    featured: true,
    imageSrc: "/images/tournaments/vietnam/central-heritage/hero.jpg",
    imageAlt: "Scenic coastal golf course with ocean views in Da Nang",
    gallery: getTourGalleryImages("central-vietnam-heritage-golf"),
    highlights: [
      "Golf at Montgomerie Links, a top-rated coastal course",
      "Tee off at Ba Na Hills Golf Club, nestled in Vietnam's scenic highlands",
      "Visit the iconic Golden Bridge at Ba Na Hills",
      "Round at Hoiana Shores, Vietnam's newest championship course",
      "Final game at Legend Danang Golf Resort, along the East Sea",
      "Explore Marble Mountain and UNESCO-listed Hoi An Old Town",
      "Optional lantern cruise, fine dining, or spa experience in Hoi An"
    ],
    includes: [
      "6 nights in 5-star and 4-star riverside or coastal hotels",
      "4 rounds of championship golf",
      "Daily breakfast & 1 lunch",
      "All transfers via private A/C vehicle",
      "English-speaking local guide",
      "Guided cultural tour in Hoi An"
    ],
    excludes: [
      "International airfare",
      "Visa to enter Vietnam",
      "Optional sightseeing & personal expenses",
      "Tips & gratuities",
      "Travel insurance (mandatory)",
      "Beverages, laundry, or massage services"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival – Da Nang",
        description: "Airport pickup and check-in at hotel. Leisure evening to unwind at beach or explore Da Nang city.",
        accommodation: "Meliá Vinpearl Da Nang Riverfront",
        starRating: 5
      },
      {
        day: 2,
        title: "Montgomerie Links",
        description: "Breakfast at hotel. Morning golf round at Montgomerie Links Vietnam. Free evening.",
        accommodation: "Meliá Vinpearl Da Nang Riverfront",
        starRating: 5
      },
      {
        day: 3,
        title: "Ba Na Hills Golf",
        description: "Early breakfast. Golf at Ba Na Hills Golf Club. Visit the iconic Golden Bridge and nearby hills. Enjoy included lunch. Return to hotel.",
        accommodation: "Meliá Vinpearl Da Nang Riverfront",
        starRating: 5
      },
      {
        day: 4,
        title: "Cultural Day – Hoi An",
        description: "Visit Marble Mountains, transfer to Hoi An. Walking tour of Hoi An Ancient Town. Optional cultural performance or fine dining experience.",
        accommodation: "Laluna Hoi An Riverside Hotel & Spa",
        starRating: 4
      },
      {
        day: 5,
        title: "Hoiana Shores Golf",
        description: "Tee-off at the coastal Hoiana Shores Golf Club. Sunset at the beach or explore night market in Hoi An.",
        accommodation: "Laluna Hoi An Riverside Hotel & Spa",
        starRating: 4
      },
      {
        day: 6,
        title: "Legend Danang Golf",
        description: "Final round at Legend Danang Golf Resort. Optional massage or beach relaxation.",
        accommodation: "Laluna Hoi An Riverside Hotel & Spa",
        starRating: 4
      },
      {
        day: 7,
        title: "Departure",
        description: "Breakfast and private transfer to Da Nang airport.",
        accommodation: "N/A"
      }
    ],
    mapLocation: {
      lat: 16.0544,
      lng: 108.2022
    }
  },
  {
    id: "4",
    name: "Southern Vietnam Golf & Mekong Experience",
    slug: "southern-vietnam-golf-mekong",
    description: "Discover the vibrant spirit of Ho Chi Minh City while playing at Vietnam's premier golf courses, followed by a serene Mekong Delta cruise. This journey combines urban excitement, world-class golf, and the timeless charm of the Mekong Delta.",
    shortDescription: "Urban golf and Mekong Delta exploration in Southern Vietnam.",
    duration: 5,
    price: 1248,
    currency: "$",
    location: "Ho Chi Minh City – Mekong Delta",
    country: "Vietnam",
    rating: 0,
    reviewCount: 0,
    featured: true,
    imageSrc: "/images/tournaments/vietnam/southern-mekong/hero.jpg",
    imageAlt: "Scenic view of a golf course in Ho Chi Minh City",
    gallery: getTourGalleryImages("southern-vietnam-golf-mekong"),
    highlights: [
      "Tee off at Tan Son Nhat Golf Course, right in the heart of Saigon",
      "Play at Vietnam Golf & Country Club, a favorite among pros",
      "Enjoy a 2-day Mekong Eyes river cruise through floating markets",
      "Visit Can Tho's vibrant riverside community",
      "Full-day cultural tour of Black Virgin Mountain & Cu Chi",
      "Explore Saigon's colonial architecture, nightlife, and cuisine"
    ],
    includes: [
      "6 nights at 5-star hotel + 4-star deluxe cruise cabin",
      "2 rounds of golf at premier Southern courses",
      "Daily breakfast, 3 lunches & 2 dinners",
      "2-day Mekong Eyes cruise with onboard stay",
      "Airport pickup, private intercity transport",
      "Local English-speaking tour & golf guide"
    ],
    excludes: [
      "International flights",
      "Visa costs",
      "Alcohol, beverages, and personal spending",
      "Tips to guides and drivers",
      "Additional activities not listed",
      "Mandatory travel insurance"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival – Ho Chi Minh City",
        description: "Airport pick-up and hotel transfer. Check-in at Hotel Majestic Sai Gon. Free evening to explore District 1.",
        accommodation: "Hotel Majestic Sai Gon",
        starRating: 5
      },
      {
        day: 2,
        title: "Tan Son Nhat Golf",
        description: "Breakfast at hotel. Tee-off at Tan Son Nhat Golf Course. Post-game free time or optional massage.",
        accommodation: "Hotel Majestic Sai Gon",
        starRating: 5
      },
      {
        day: 3,
        title: "Mekong Eyes Cruise",
        description: "Drive to Mekong Delta. Board Mekong Eyes for 1-night river cruise. Enjoy lunch & dinner on board.",
        accommodation: "Mekong Eyes Cruise",
        starRating: 4
      },
      {
        day: 4,
        title: "Can Tho Floating Market – Return",
        description: "Explore Can Tho floating market. Return to Saigon by afternoon. Check-in at hotel and relax.",
        accommodation: "Hotel Majestic Sai Gon",
        starRating: 5
      },
      {
        day: 5,
        title: "Golf at Vietnam Golf Country Club",
        description: "Breakfast. Play at Vietnam Golf & Country Club. Evening free for city exploration.",
        accommodation: "Hotel Majestic Sai Gon",
        starRating: 5
      },
      {
        day: 6,
        title: "Black Virgin Mountain Tour",
        description: "Full-day cultural tour. Visit Ba Den Mountain, temples, and local villages. Return by evening.",
        accommodation: "Hotel Majestic Sai Gon",
        starRating: 5
      },
      {
        day: 7,
        title: "Departure",
        description: "Breakfast and private transfer to airport.",
        accommodation: "N/A"
      }
    ],
    mapLocation: {
      lat: 10.8231,
      lng: 106.6297
    }
  },
  {
    id: "5",
    name: "Ahmedabad Golf & Leisure Experience",
    slug: "ahmedabad-golf-leisure-experience",
    description: "Discover Gujarat's finest golf experience, blending luxury, sport, and heritage. Play across three championship courses — Kalhaar Blues & Greens, Kensville Golf & Country Club, and Glade One Golf Club — while staying at elegant golf resorts and the premier Crowne Plaza Ahmedabad City Centre. Enjoy curated transfers, authentic cuisine, leisure options, and seamless service.",
    shortDescription: "Experience Gujarat's finest golf across three championship courses with luxury accommodations.",
    duration: 7,
    price: 730,
    currency: "$",
    location: "Ahmedabad, Gujarat",
    country: "India",
    rating: 0,
    reviewCount: 0,
    featured: true,
    imageSrc: "/images/tournaments/india/ahemdabad/hero.jpg",
    imageAlt: "Championship golf course in Ahmedabad with luxury resort facilities",
    gallery: getTourGalleryImages("ahmedabad-golf-leisure-experience"),
    highlights: [
      "Play at Kalhaar Blues & Greens Golf Resort, a championship course",
      "Enjoy a round at Kensville Golf & Country Club",
      "Tee off at Glade One Golf Club's modern facilities",
      "Stay at luxurious Kalhaar Blues & Greens Golf Resort",
      "Experience premium hospitality at Crowne Plaza Ahmedabad City Centre",
      "Visit Nalsarovar Bird Sanctuary, a UNESCO wetland site",
      "Explore Ahmedabad's historic sites including Adalaj Stepwell",
      "Optional city tours and cultural experiences"
    ],
    includes: [
      "6 Nights luxury stay with breakfast (Kalhaar Blues & Greens, Club Mahindra Kensville, Crowne Plaza Ahmedabad)",
      "4 rounds of golf at championship courses (2×Kalhaar, 1×Kensville, 1×Glade One) with caddie & cart",
      "Daily breakfast + club lunches as per itinerary",
      "Airport, inter-hotel & golf course transfers in AC vehicle",
      "Sightseeing to Nalsarovar Bird Sanctuary + optional city tours",
      "10% Karma Time Foundation concierge support service charge"
    ],
    excludes: [
      "Flights to/from Ahmedabad",
      "Travel insurance",
      "Visa fees (if applicable)",
      "Tips for guide and driver",
      "Personal expenses (laundry, drinks, shopping, etc.)",
      "Extra golf rounds (available at $48 – $67 per round)",
      "Optional premium restaurant dining and spa services"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Relaxation at Kalhaar",
        description: "Arrive in Ahmedabad and transfer to Kalhaar Blues & Greens Golf Resort. Check in, attend a short orientation session, and unwind with resort facilities.",
        accommodation: "Kalhaar Blues & Greens Golf Resort",
        starRating: 5
      },
      {
        day: 2,
        title: "Golf at Kalhaar & Transfer to Kensville",
        description: "Morning tee-off at Kalhaar (18 holes). Lunch at the clubhouse. Drive to Kensville Golf & Country Club, check in at Club Mahindra Kensville Resort.",
        accommodation: "Club Mahindra Kensville Resort",
        starRating: 4
      },
      {
        day: 3,
        title: "Golf at Kensville & Nalsarovar Excursion",
        description: "Enjoy a morning round at Kensville followed by lunch at the club. Afternoon visit to Nalsarovar Bird Sanctuary, a UNESCO wetland site. Evening return to Kalhaar Resort for dinner.",
        accommodation: "Kalhaar Blues & Greens Golf Resort",
        starRating: 5
      },
      {
        day: 4,
        title: "Kalhaar Golf & Transfer to Ahmedabad City",
        description: "Early golf round at Kalhaar followed by lunch at the club. Later transfer to the city and check in at Crowne Plaza Ahmedabad City Centre. Optional: Visit the historic Adalaj Stepwell & dine at a premium restaurant.",
        accommodation: "Crowne Plaza Ahmedabad City Centre",
        starRating: 5
      },
      {
        day: 5,
        title: "Relaxation & City Exploration",
        description: "Free day for relaxation or shopping at Law Garden, Sabarmati Riverfront walks, and cultural visits. Optional sightseeing can include Sabarmati Ashram or Heritage Walk of Ahmedabad.",
        accommodation: "Crowne Plaza Ahmedabad City Centre",
        starRating: 5
      },
      {
        day: 6,
        title: "Golf at Glade One & Leisure Evening",
        description: "Morning tee-off at Glade One Golf Club (2×9 holes). Lunch at the clubhouse. Evening free for fine dining or spa.",
        accommodation: "Crowne Plaza Ahmedabad City Centre",
        starRating: 5
      },
      {
        day: 7,
        title: "Departure",
        description: "Breakfast and check-out. Private transfer to Ahmedabad Airport or Railway Station.",
        accommodation: "N/A"
      }
    ],
    mapLocation: {
      lat: 23.0225,
      lng: 72.5714
    }
  },
  {
    id: "6",
    name: "Bangkok Golf Experience",
    slug: "bangkok-golf-experience",
    description: "Discover Thailand's capital city while playing at world-class golf courses. Experience the perfect blend of urban excitement and championship golf in Bangkok, featuring top-rated courses and luxury accommodations.",
    shortDescription: "Championship golf in Thailand's vibrant capital city.",
    duration: 5,
    price: 850,
    currency: "$",
    location: "Bangkok",
    country: "Thailand",
    rating: 0,
    reviewCount: 0,
    featured: true,
    imageSrc: "/images/destinations/thailand/thailand-golf.jpg",
    imageAlt: "Golf course in Bangkok, Thailand with modern city skyline",
    gallery: getTourGalleryImages("bangkok-golf-experience"),
    highlights: [
      "Play at Alpine Golf Club, one of Thailand's premier courses",
      "Tee off at Thai Country Club, host of international tournaments",
      "Experience the championship layout at Royal Gems Golf City",
      "Stay at luxury hotels in the heart of Bangkok",
      "Explore vibrant street markets and world-class dining",
      "Visit iconic temples and cultural landmarks",
      "Enjoy traditional Thai spa treatments"
    ],
    includes: [
      "4 nights in 5-star luxury hotels",
      "3 rounds of golf at championship courses",
      "Daily breakfast",
      "Airport transfers and golf course transportation",
      "Local English-speaking golf guide",
      "Golf cart and caddie fees"
    ],
    excludes: [
      "International flights",
      "Visa fees (if applicable)",
      "Personal expenses",
      "Tips for guide and caddies",
      "Travel insurance",
      "Optional activities and spa treatments"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival – Bangkok",
        description: "Airport pickup and transfer to hotel. Check-in and welcome briefing. Evening at leisure to explore the city.",
        accommodation: "5-Star Luxury Hotel",
        starRating: 5
      },
      {
        day: 2,
        title: "Golf at Alpine Golf Club",
        description: "Breakfast at hotel. Morning round at Alpine Golf Club. Afternoon free for city exploration or spa treatment.",
        accommodation: "5-Star Luxury Hotel",
        starRating: 5
      },
      {
        day: 3,
        title: "Golf at Thai Country Club",
        description: "Early breakfast. Golf at Thai Country Club, one of Thailand's most prestigious courses. Evening free for dining and nightlife.",
        accommodation: "5-Star Luxury Hotel",
        starRating: 5
      },
      {
        day: 4,
        title: "Golf at Royal Gems Golf City",
        description: "Final round at Royal Gems Golf City. Afternoon cultural tour or shopping. Farewell dinner (optional).",
        accommodation: "5-Star Luxury Hotel",
        starRating: 5
      },
      {
        day: 5,
        title: "Departure",
        description: "Breakfast and check-out. Transfer to airport for departure.",
        accommodation: "N/A"
      }
    ],
    mapLocation: {
      lat: 13.7563,
      lng: 100.5018
    }
  },
  {
    id: "7",
    name: "Phuket Golf Paradise",
    slug: "phuket-golf-paradise",
    description: "Combine world-class golf with tropical paradise in Phuket. Play at stunning coastal courses while enjoying pristine beaches, luxury resorts, and the vibrant island atmosphere of Thailand's premier beach destination.",
    shortDescription: "Tropical golf experience on Thailand's most beautiful island.",
    duration: 6,
    price: 1200,
    currency: "$",
    location: "Phuket",
    country: "Thailand",
    rating: 0,
    reviewCount: 0,
    featured: true,
    imageSrc: "/images/destinations/thailand/thailand-golf.jpg",
    imageAlt: "Coastal golf course in Phuket with ocean views and palm trees",
    gallery: getTourGalleryImages("phuket-golf-paradise"),
    highlights: [
      "Play at Blue Canyon Country Club, host of multiple international tournaments",
      "Tee off at Red Mountain Golf Club with stunning mountain views",
      "Experience Laguna Phuket Golf Club's championship layout",
      "Stay at luxury beachfront resorts",
      "Enjoy pristine beaches and crystal-clear waters",
      "Explore Phuket's vibrant nightlife and dining scene",
      "Optional island hopping and water sports"
    ],
    includes: [
      "5 nights in 5-star beachfront resorts",
      "4 rounds of golf at premier courses",
      "Daily breakfast",
      "Airport transfers and golf course transportation",
      "Local English-speaking golf guide",
      "Golf cart and caddie fees"
    ],
    excludes: [
      "International flights",
      "Visa fees (if applicable)",
      "Personal expenses",
      "Tips for guide and caddies",
      "Travel insurance",
      "Optional activities and excursions"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival – Phuket",
        description: "Airport pickup and transfer to beachfront resort. Check-in and welcome briefing. Evening at leisure.",
        accommodation: "5-Star Beachfront Resort",
        starRating: 5
      },
      {
        day: 2,
        title: "Golf at Blue Canyon Country Club",
        description: "Breakfast at resort. Morning round at Blue Canyon Country Club. Afternoon beach time or spa treatment.",
        accommodation: "5-Star Beachfront Resort",
        starRating: 5
      },
      {
        day: 3,
        title: "Golf at Red Mountain Golf Club",
        description: "Early breakfast. Golf at Red Mountain Golf Club with spectacular views. Afternoon free for beach activities.",
        accommodation: "5-Star Beachfront Resort",
        starRating: 5
      },
      {
        day: 4,
        title: "Golf at Laguna Phuket",
        description: "Golf at Laguna Phuket Golf Club. Afternoon island exploration or water sports. Evening dining at resort.",
        accommodation: "5-Star Beachfront Resort",
        starRating: 5
      },
      {
        day: 5,
        title: "Free Day or Additional Golf",
        description: "Free day for relaxation, beach activities, or optional additional golf round. Optional island hopping tour.",
        accommodation: "5-Star Beachfront Resort",
        starRating: 5
      },
      {
        day: 6,
        title: "Departure",
        description: "Breakfast and check-out. Transfer to Phuket Airport for departure.",
        accommodation: "N/A"
      }
    ],
    mapLocation: {
      lat: 7.8804,
      lng: 98.3923
    }
  },
  {
    id: "8",
    name: "Hua Hin Golf & Beach Retreat",
    slug: "hua-hin-golf-beach-retreat",
    description: "Experience Thailand's premier golf destination in Hua Hin, where championship courses meet pristine beaches. Enjoy world-class golf, royal heritage, and luxury resort living in this charming coastal town.",
    shortDescription: "Championship golf and beach relaxation in Hua Hin.",
    duration: 5,
    price: 950,
    currency: "$",
    location: "Hua Hin",
    country: "Thailand",
    rating: 0,
    reviewCount: 0,
    featured: true,
    imageSrc: "/images/destinations/thailand/thailand-golf.jpg",
    imageAlt: "Golf course in Hua Hin with ocean and mountain views",
    gallery: getTourGalleryImages("hua-hin-golf-beach-retreat"),
    highlights: [
      "Play at Black Mountain Golf Club, one of Asia's top courses",
      "Tee off at Banyan Golf Club with stunning ocean views",
      "Experience Royal Hua Hin Golf Course, Thailand's oldest course",
      "Stay at luxury beachfront resorts",
      "Enjoy Hua Hin's beautiful beaches and royal palaces",
      "Explore local markets and authentic Thai cuisine",
      "Optional spa treatments and cultural tours"
    ],
    includes: [
      "4 nights in 5-star beachfront resorts",
      "3 rounds of golf at championship courses",
      "Daily breakfast",
      "Airport transfers and golf course transportation",
      "Local English-speaking golf guide",
      "Golf cart and caddie fees"
    ],
    excludes: [
      "International flights",
      "Visa fees (if applicable)",
      "Personal expenses",
      "Tips for guide and caddies",
      "Travel insurance",
      "Optional activities and spa treatments"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival – Hua Hin",
        description: "Airport pickup and transfer to beachfront resort. Check-in and welcome briefing. Evening at leisure.",
        accommodation: "5-Star Beachfront Resort",
        starRating: 5
      },
      {
        day: 2,
        title: "Golf at Black Mountain Golf Club",
        description: "Breakfast at resort. Morning round at Black Mountain Golf Club. Afternoon beach time or resort activities.",
        accommodation: "5-Star Beachfront Resort",
        starRating: 5
      },
      {
        day: 3,
        title: "Golf at Banyan Golf Club",
        description: "Early breakfast. Golf at Banyan Golf Club with ocean views. Afternoon cultural tour or spa treatment.",
        accommodation: "5-Star Beachfront Resort",
        starRating: 5
      },
      {
        day: 4,
        title: "Golf at Royal Hua Hin",
        description: "Final round at Royal Hua Hin Golf Course. Afternoon free for beach activities or shopping. Farewell dinner.",
        accommodation: "5-Star Beachfront Resort",
        starRating: 5
      },
      {
        day: 5,
        title: "Departure",
        description: "Breakfast and check-out. Transfer to airport for departure.",
        accommodation: "N/A"
      }
    ],
    mapLocation: {
      lat: 12.5684,
      lng: 99.9577
    }
  },
  {
    id: "9",
    name: "Pattaya Golf & Entertainment",
    slug: "pattaya-golf-entertainment",
    description: "Combine championship golf with vibrant entertainment in Pattaya. Play at world-class courses during the day and enjoy the city's famous nightlife, beaches, and dining scene in the evenings.",
    shortDescription: "Golf and entertainment in Thailand's vibrant coastal city.",
    duration: 5,
    price: 900,
    currency: "$",
    location: "Pattaya",
    country: "Thailand",
    rating: 0,
    reviewCount: 0,
    featured: false,
    imageSrc: "/images/destinations/thailand/thailand-golf.jpg",
    imageAlt: "Golf course in Pattaya with coastal views",
    gallery: getTourGalleryImages("pattaya-golf-entertainment"),
    highlights: [
      "Play at Siam Country Club, host of LPGA tournaments",
      "Tee off at Laem Chabang International Country Club",
      "Experience Phoenix Gold Golf & Country Club",
      "Stay at luxury beachfront hotels",
      "Enjoy Pattaya's vibrant nightlife and entertainment",
      "Explore beautiful beaches and water activities",
      "Optional cultural shows and dining experiences"
    ],
    includes: [
      "4 nights in 5-star beachfront hotels",
      "3 rounds of golf at championship courses",
      "Daily breakfast",
      "Airport transfers and golf course transportation",
      "Local English-speaking golf guide",
      "Golf cart and caddie fees"
    ],
    excludes: [
      "International flights",
      "Visa fees (if applicable)",
      "Personal expenses",
      "Tips for guide and caddies",
      "Travel insurance",
      "Optional activities and entertainment"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival – Pattaya",
        description: "Airport pickup and transfer to beachfront hotel. Check-in and welcome briefing. Evening at leisure.",
        accommodation: "5-Star Beachfront Hotel",
        starRating: 5
      },
      {
        day: 2,
        title: "Golf at Siam Country Club",
        description: "Breakfast at hotel. Morning round at Siam Country Club. Afternoon beach time or city exploration.",
        accommodation: "5-Star Beachfront Hotel",
        starRating: 5
      },
      {
        day: 3,
        title: "Golf at Laem Chabang",
        description: "Early breakfast. Golf at Laem Chabang International Country Club. Evening free for entertainment and dining.",
        accommodation: "5-Star Beachfront Hotel",
        starRating: 5
      },
      {
        day: 4,
        title: "Golf at Phoenix Gold",
        description: "Final round at Phoenix Gold Golf & Country Club. Afternoon free for activities. Farewell dinner (optional).",
        accommodation: "5-Star Beachfront Hotel",
        starRating: 5
      },
      {
        day: 5,
        title: "Departure",
        description: "Breakfast and check-out. Transfer to airport for departure.",
        accommodation: "N/A"
      }
    ],
    mapLocation: {
      lat: 12.9236,
      lng: 100.8825
    }
  },
  
];

// Function to get all tours
export async function getAllTours(): Promise<Tour[]> {
  return toursData;
}

// Function to get featured tours
export function getFeaturedTours(): Tour[] {
  return toursData.filter(tour => tour.featured);
}

// Function to get tour by slug
export async function getTourBySlug(slug: string): Promise<Tour | null> {
  return toursData.find(tour => tour.slug === slug) || null;
}

// Function to get tours by country
export function getToursByCountry(country: string): Tour[] {
  return toursData.filter(tour => tour.country === country);
}

// Function to get tours
export function getTours(): Tour[] {
  return toursData;
}