import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Currency functions removed - now using USD only

export function getTourGalleryImages(tourSlug: string) {
  // Map the tour slug to the correct folder name
  const getFolderName = (slug: string) => {
    const mapping: { [key: string]: string } = {
      'luxury-north-vietnam-golf-cruise': 'luxury-north',
      'north-vietnam-golf-retreat': 'north-retreat',
      'central-vietnam-heritage-golf': 'central-heritage',
      'southern-vietnam-golf-mekong': 'southern-mekong'
    };
    return mapping[slug] || slug.split('-').slice(0, 2).join('-');
  };

  const folderName = getFolderName(tourSlug);
  const tourPath = `tournaments/vietnam/${folderName}`;
  
  interface TourImage {
    src: string;
    alt: string;
    category: "accommodation" | "golf-courses" | "landmarks";
    label: string;
  }

  let accommodationImages: TourImage[] = [];
  let golfImages: TourImage[] = [];
  let landmarkImages: TourImage[] = [];

  // Handle different tournament packages
  switch (folderName) {
    case 'central-coast':
      accommodationImages = [
        { 
          src: `/images/${tourPath}/accommodation/FLC Luxury Resort Quy Nhon Double 1.jpg`,
          alt: "FLC Luxury Resort Quy Nhon Double Room",
          category: "accommodation",
          label: "FLC Luxury Resort Quy Nhon"
        },
        { 
          src: `/images/${tourPath}/accommodation/FLC Luxury Resort Quy Nhon Double 2.jpg`,
          alt: "FLC Luxury Resort Quy Nhon Double Room",
          category: "accommodation",
          label: "FLC Luxury Resort Quy Nhon"
        },
        { 
          src: `/images/${tourPath}/accommodation/Vinpearl Resort Nha Trang Twin 1.jpg`,
          alt: "Vinpearl Resort Nha Trang Twin Room",
          category: "accommodation",
          label: "Vinpearl Resort Nha Trang"
        },
        { 
          src: `/images/${tourPath}/accommodation/Vinpearl Resort Nha Trang Twin 2.jpg`,
          alt: "Vinpearl Resort Nha Trang Twin Room",
          category: "accommodation",
          label: "Vinpearl Resort Nha Trang"
        }
      ];

      golfImages = [
        {
          src: `/images/${tourPath}/golf-courses/FLC Quy Nhon Golf Links 1.jpg`,
          alt: "FLC Quy Nhon Golf Links",
          category: "golf-courses",
          label: "FLC Quy Nhon Golf Links"
        },
        {
          src: `/images/${tourPath}/golf-courses/FLC Quy Nhon Golf Links 2.jpg`,
          alt: "FLC Quy Nhon Golf Links",
          category: "golf-courses",
          label: "FLC Quy Nhon Golf Links"
        },
        {
          src: `/images/${tourPath}/golf-courses/KN Golf Links Cam Ranh 1.jpg`,
          alt: "KN Golf Links Cam Ranh",
          category: "golf-courses",
          label: "KN Golf Links Cam Ranh"
        },
        {
          src: `/images/${tourPath}/golf-courses/KN Golf Links Cam Ranh 2.jpg`,
          alt: "KN Golf Links Cam Ranh",
          category: "golf-courses",
          label: "KN Golf Links Cam Ranh"
        },
        {
          src: `/images/${tourPath}/golf-courses/Vinpearl Golf Nha Trang 1.jpg`,
          alt: "Vinpearl Golf Nha Trang",
          category: "golf-courses",
          label: "Vinpearl Golf Nha Trang"
        },
        {
          src: `/images/${tourPath}/golf-courses/Vinpearl Golf Nha Trang 2.jpg`,
          alt: "Vinpearl Golf Nha Trang",
          category: "golf-courses",
          label: "Vinpearl Golf Nha Trang"
        }
      ];
      break;

    case 'luxury-north':
      accommodationImages = [
        { 
          src: `/images/${tourPath}/accommodation/SILK PATH Hotel Deluxe Double Room 1.JPG`,
          alt: "SILK PATH Hotel Deluxe Double Room",
          category: "accommodation",
          label: "SILK PATH Hotel Deluxe Double Room"
        },
        { 
          src: `/images/${tourPath}/accommodation/SILK PATH Hotel Deluxe Double Room 2.JPG`,
          alt: "SILK PATH Hotel Deluxe Double Room",
          category: "accommodation",
          label: "SILK PATH Hotel Deluxe Double Room"
        },
        { 
          src: `/images/${tourPath}/accommodation/SILK PATH Hotel Deluxe Twin Room 1.jpg`,
          alt: "SILK PATH Hotel Deluxe Twin Room",
          category: "accommodation",
          label: "SILK PATH Hotel Deluxe Twin Room"
        },
        { 
          src: `/images/${tourPath}/accommodation/SILK PATH Hotel Deluxe Twin Room 2.jpg`,
          alt: "SILK PATH Hotel Deluxe Twin Room",
          category: "accommodation",
          label: "SILK PATH Hotel Deluxe Twin Room"
        }
      ];

      // Add APRICOT HOTEL images
      accommodationImages.push(
        {
          src: `/images/${tourPath}/accommodation/APRICOT HOTEL Sketch Twin Bed 1.jpg`,
          alt: "APRICOT HOTEL Sketch Twin Bed",
          category: "accommodation",
          label: "APRICOT HOTEL Sketch Twin Bed"
        },
        {
          src: `/images/${tourPath}/accommodation/APRICOT HOTEL Sketch Twin Bed 2.jpg`,
          alt: "APRICOT HOTEL Sketch Twin Bed",
          category: "accommodation",
          label: "APRICOT HOTEL Sketch Twin Bed"
        },
        {
          src: `/images/${tourPath}/accommodation/APRICOT HOTEL Sketch Double Bed 1.jpg`,
          alt: "APRICOT HOTEL Sketch Double Bed",
          category: "accommodation",
          label: "APRICOT HOTEL Sketch Double Bed"
        },
        {
          src: `/images/${tourPath}/accommodation/APRICOT HOTEL Sketch Double Bed 2.jpg`,
          alt: "APRICOT HOTEL Sketch Double Bed",
          category: "accommodation",
          label: "APRICOT HOTEL Sketch Double Bed"
        }
      );

      golfImages = [
        {
          src: `/images/${tourPath}/golf-courses/BRG Kings Island Golf Resort 1.jpg`,
          alt: "BRG Kings Island Golf Resort",
          category: "golf-courses",
          label: "BRG Kings Island Golf Resort"
        },
        {
          src: `/images/${tourPath}/golf-courses/BRG Kings Island Golf Resort 2.jpg`,
          alt: "BRG Kings Island Golf Resort",
          category: "golf-courses",
          label: "BRG Kings Island Golf Resort"
        },
        {
          src: `/images/${tourPath}/golf-courses/BRG Kings Island Golf Resort 3.jpg`,
          alt: "BRG Kings Island Golf Resort",
          category: "golf-courses",
          label: "BRG Kings Island Golf Resort"
        },
        {
          src: `/images/${tourPath}/golf-courses/FLC Halong Golf Club 1.jpg`,
          alt: "FLC Halong Golf Club",
          category: "golf-courses",
          label: "FLC Halong Golf Club"
        },
        {
          src: `/images/${tourPath}/golf-courses/FLC Halong Golf Club 2.jpg`,
          alt: "FLC Halong Golf Club",
          category: "golf-courses",
          label: "FLC Halong Golf Club"
        },
        {
          src: `/images/${tourPath}/golf-courses/FLC Halong Golf Club 3.jpg`,
          alt: "FLC Halong Golf Club",
          category: "golf-courses",
          label: "FLC Halong Golf Club"
        },
        {
          src: `/images/${tourPath}/golf-courses/Sky Lake Golf & Resort Ha Noi 1.png`,
          alt: "Sky Lake Golf & Resort Ha Noi",
          category: "golf-courses",
          label: "Sky Lake Golf & Resort Ha Noi"
        },
        {
          src: `/images/${tourPath}/golf-courses/Sky Lake Golf & Resort Ha Noi 2.jpg`,
          alt: "Sky Lake Golf & Resort Ha Noi",
          category: "golf-courses",
          label: "Sky Lake Golf & Resort Ha Noi"
        },
        {
          src: `/images/${tourPath}/golf-courses/Sky Lake Golf & Resort Ha Noi 3.jpg`,
          alt: "Sky Lake Golf & Resort Ha Noi",
          category: "golf-courses",
          label: "Sky Lake Golf & Resort Ha Noi"
        }
      ];
      break;

    case 'north-retreat':
      accommodationImages = [
        { 
          src: `/images/${tourPath}/accommodation/SILK PATH Hotel Deluxe Double Room 1.JPG`,
          alt: "SILK PATH Hotel Deluxe Double Room",
          category: "accommodation",
          label: "SILK PATH Hotel Deluxe Double Room"
        },
        { 
          src: `/images/${tourPath}/accommodation/SILK PATH Hotel Deluxe Double Room 2.JPG`,
          alt: "SILK PATH Hotel Deluxe Double Room",
          category: "accommodation",
          label: "SILK PATH Hotel Deluxe Double Room"
        },
        { 
          src: `/images/${tourPath}/accommodation/SILK PATH Hotel Deluxe Twin Room 1.jpg`,
          alt: "SILK PATH Hotel Deluxe Twin Room",
          category: "accommodation",
          label: "SILK PATH Hotel Deluxe Twin Room"
        },
        { 
          src: `/images/${tourPath}/accommodation/SILK PATH Hotel Deluxe Twin Room 2.jpg`,
          alt: "SILK PATH Hotel Deluxe Twin Room",
          category: "accommodation",
          label: "SILK PATH Hotel Deluxe Twin Room"
        }
      ];

      // Add Amethyst Cruise images
      for (let i = 1; i <= 7; i++) {
        accommodationImages.push({
          src: `/images/${tourPath}/accommodation/Amethyst Cruise ${i}.jpg`,
          alt: "Amethyst Cruise",
          category: "accommodation",
          label: "Amethyst Cruise"
        });
      }

      // Add APRICOT HOTEL images
      accommodationImages.push(
        {
          src: `/images/${tourPath}/accommodation/APRICOT HOTEL Sketch Twin Bed 1.jpg`,
          alt: "APRICOT HOTEL Sketch Twin Bed",
          category: "accommodation",
          label: "APRICOT HOTEL Sketch Twin Bed"
        },
        {
          src: `/images/${tourPath}/accommodation/APRICOT HOTEL Sketch Twin Bed 2.jpg`,
          alt: "APRICOT HOTEL Sketch Twin Bed",
          category: "accommodation",
          label: "APRICOT HOTEL Sketch Twin Bed"
        },
        {
          src: `/images/${tourPath}/accommodation/APRICOT HOTEL Sketch Double Bed 1.jpg`,
          alt: "APRICOT HOTEL Sketch Double Bed",
          category: "accommodation",
          label: "APRICOT HOTEL Sketch Double Bed"
        },
        {
          src: `/images/${tourPath}/accommodation/APRICOT HOTEL Sketch Double Bed 2.jpg`,
          alt: "APRICOT HOTEL Sketch Double Bed",
          category: "accommodation",
          label: "APRICOT HOTEL Sketch Double Bed"
        }
      );

      golfImages = [
        {
          src: `/images/${tourPath}/golf-courses/BRG Kings Island Golf Resort 1.jpg`,
          alt: "BRG Kings Island Golf Resort",
          category: "golf-courses",
          label: "BRG Kings Island Golf Resort"
        },
        {
          src: `/images/${tourPath}/golf-courses/BRG Kings Island Golf Resort 2.jpg`,
          alt: "BRG Kings Island Golf Resort",
          category: "golf-courses",
          label: "BRG Kings Island Golf Resort"
        },
        {
          src: `/images/${tourPath}/golf-courses/BRG Kings Island Golf Resort 3.jpg`,
          alt: "BRG Kings Island Golf Resort",
          category: "golf-courses",
          label: "BRG Kings Island Golf Resort"
        },
        {
          src: `/images/${tourPath}/golf-courses/FLC Halong Golf Club 1.jpg`,
          alt: "FLC Halong Golf Club",
          category: "golf-courses",
          label: "FLC Halong Golf Club"
        },
        {
          src: `/images/${tourPath}/golf-courses/FLC Halong Golf Club 2.jpg`,
          alt: "FLC Halong Golf Club",
          category: "golf-courses",
          label: "FLC Halong Golf Club"
        },
        {
          src: `/images/${tourPath}/golf-courses/FLC Halong Golf Club 3.jpg`,
          alt: "FLC Halong Golf Club",
          category: "golf-courses",
          label: "FLC Halong Golf Club"
        },
        {
          src: `/images/${tourPath}/golf-courses/Sky Lake Golf & Resort Ha Noi 1.png`,
          alt: "Sky Lake Golf & Resort Ha Noi",
          category: "golf-courses",
          label: "Sky Lake Golf & Resort Ha Noi"
        },
        {
          src: `/images/${tourPath}/golf-courses/Sky Lake Golf & Resort Ha Noi 2.jpg`,
          alt: "Sky Lake Golf & Resort Ha Noi",
          category: "golf-courses",
          label: "Sky Lake Golf & Resort Ha Noi"
        },
        {
          src: `/images/${tourPath}/golf-courses/Sky Lake Golf & Resort Ha Noi 3.jpg`,
          alt: "Sky Lake Golf & Resort Ha Noi",
          category: "golf-courses",
          label: "Sky Lake Golf & Resort Ha Noi"
        }
      ];
      break;

    case 'central-heritage':
      accommodationImages = [
        { 
          src: `/images/${tourPath}/accommodation/Da Nang Coastal Hotel King 1.jpg`,
          alt: "Da Nang Coastal Hotel King Room",
          category: "accommodation",
          label: "Da Nang Coastal Hotel"
        },
        { 
          src: `/images/${tourPath}/accommodation/Da Nang Coastal Hotel King 2.jpg`,
          alt: "Da Nang Coastal Hotel King Room",
          category: "accommodation",
          label: "Da Nang Coastal Hotel"
        },
        { 
          src: `/images/${tourPath}/accommodation/Da Nang Coastal Hotel Twin 1.jpg`,
          alt: "Da Nang Coastal Hotel Twin Room",
          category: "accommodation",
          label: "Da Nang Coastal Hotel"
        },
        { 
          src: `/images/${tourPath}/accommodation/Laluna Hoi An Riverside Hotel & Spa Double 1.jpg`,
          alt: "Laluna Hoi An Riverside Hotel & Spa Double Room",
          category: "accommodation",
          label: "Laluna Hoi An Riverside Hotel & Spa"
        },
        { 
          src: `/images/${tourPath}/accommodation/Laluna Hoi An Riverside Hotel & Spa Double 2.jpg`,
          alt: "Laluna Hoi An Riverside Hotel & Spa Double Room",
          category: "accommodation",
          label: "Laluna Hoi An Riverside Hotel & Spa"
        },
        { 
          src: `/images/${tourPath}/accommodation/Laluna Hoi An Riverside Hotel & Spa Double 3.jpg`,
          alt: "Laluna Hoi An Riverside Hotel & Spa Double Room",
          category: "accommodation",
          label: "Laluna Hoi An Riverside Hotel & Spa"
        },
        { 
          src: `/images/${tourPath}/accommodation/Laluna Hoi An Riverside Hotel & Spa Twin 1.jpg`,
          alt: "Laluna Hoi An Riverside Hotel & Spa Twin Room",
          category: "accommodation",
          label: "Laluna Hoi An Riverside Hotel & Spa"
        },
        { 
          src: `/images/${tourPath}/accommodation/Laluna Hoi An Riverside Hotel & Spa Twin 2.jpg`,
          alt: "Laluna Hoi An Riverside Hotel & Spa Twin Room",
          category: "accommodation",
          label: "Laluna Hoi An Riverside Hotel & Spa"
        },
        { 
          src: `/images/${tourPath}/accommodation/Laluna Hoi An Riverside Hotel & Spa Twin 3.jpg`,
          alt: "Laluna Hoi An Riverside Hotel & Spa Twin Room",
          category: "accommodation",
          label: "Laluna Hoi An Riverside Hotel & Spa"
        }
      ];

      golfImages = [
        {
          src: `/images/${tourPath}/golf-courses/Ba Na Hills Golf Club 1.jpg`,
          alt: "Ba Na Hills Golf Club",
          category: "golf-courses",
          label: "Ba Na Hills Golf Club"
        },
        {
          src: `/images/${tourPath}/golf-courses/Ba Na Hills Golf Club 2.jpg`,
          alt: "Ba Na Hills Golf Club",
          category: "golf-courses",
          label: "Ba Na Hills Golf Club"
        },
        {
          src: `/images/${tourPath}/golf-courses/Ba Na Hills Golf Club 3.jpg`,
          alt: "Ba Na Hills Golf Club",
          category: "golf-courses",
          label: "Ba Na Hills Golf Club"
        },
        {
          src: `/images/${tourPath}/golf-courses/Ba Na Hills Golf Club 4.jpg`,
          alt: "Ba Na Hills Golf Club",
          category: "golf-courses",
          label: "Ba Na Hills Golf Club"
        },
        {
          src: `/images/${tourPath}/golf-courses/Hoiana Shores Golf Club 1.jpg`,
          alt: "Hoiana Shores Golf Club",
          category: "golf-courses",
          label: "Hoiana Shores Golf Club"
        },
        {
          src: `/images/${tourPath}/golf-courses/Hoiana Shores Golf Club 2.jpg`,
          alt: "Hoiana Shores Golf Club",
          category: "golf-courses",
          label: "Hoiana Shores Golf Club"
        },
        {
          src: `/images/${tourPath}/golf-courses/Hoiana Shores Golf Club 3.jpg`,
          alt: "Hoiana Shores Golf Club",
          category: "golf-courses",
          label: "Hoiana Shores Golf Club"
        },
        {
          src: `/images/${tourPath}/golf-courses/Legend Danang Golf Resort 1.jpg`,
          alt: "Legend Danang Golf Resort",
          category: "golf-courses",
          label: "Legend Danang Golf Resort"
        },
        {
          src: `/images/${tourPath}/golf-courses/Legend Danang Golf Resort 2.jpg`,
          alt: "Legend Danang Golf Resort",
          category: "golf-courses",
          label: "Legend Danang Golf Resort"
        },
        {
          src: `/images/${tourPath}/golf-courses/Legend Danang Golf Resort 3.jpg`,
          alt: "Legend Danang Golf Resort",
          category: "golf-courses",
          label: "Legend Danang Golf Resort"
        },
        {
          src: `/images/${tourPath}/golf-courses/Legend Danang Golf Resort 4.jpg`,
          alt: "Legend Danang Golf Resort",
          category: "golf-courses",
          label: "Legend Danang Golf Resort"
        },
        {
          src: `/images/${tourPath}/golf-courses/Montgomerie Links Vietnam 1.jpeg`,
          alt: "Montgomerie Links Vietnam",
          category: "golf-courses",
          label: "Montgomerie Links Vietnam"
        },
        {
          src: `/images/${tourPath}/golf-courses/Montgomerie Links Vietnam 2.jpg`,
          alt: "Montgomerie Links Vietnam",
          category: "golf-courses",
          label: "Montgomerie Links Vietnam"
        },
        {
          src: `/images/${tourPath}/golf-courses/Montgomerie Links Vietnam 3.jpg`,
          alt: "Montgomerie Links Vietnam",
          category: "golf-courses",
          label: "Montgomerie Links Vietnam"
        }
      ];

      landmarkImages = [
        {
          src: `/images/${tourPath}/golden-bridge.jpg`,
          alt: "Golden Bridge at Ba Na Hills",
          category: "landmarks",
          label: "Golden Bridge"
        }
      ];
      break;

    case 'southern-mekong':
      accommodationImages = [
        { 
          src: `/images/${tourPath}/accommodation/Alagon D Antique Hotel & Spa King 1.jpg`,
          alt: "Alagon D'Antique Hotel & Spa King Room",
          category: "accommodation",
          label: "Alagon D'Antique Hotel & Spa"
        },
        { 
          src: `/images/${tourPath}/accommodation/Alagon D Antique Hotel & Spa King 2.jpg`,
          alt: "Alagon D'Antique Hotel & Spa King Room",
          category: "accommodation",
          label: "Alagon D'Antique Hotel & Spa"
        },
        { 
          src: `/images/${tourPath}/accommodation/Alagon D Antique Hotel & Spa King 3.jpg`,
          alt: "Alagon D'Antique Hotel & Spa King Room",
          category: "accommodation",
          label: "Alagon D'Antique Hotel & Spa"
        },
        { 
          src: `/images/${tourPath}/accommodation/Alagon D Antique Hotel & Spa Twin 1.jpg`,
          alt: "Alagon D'Antique Hotel & Spa Twin Room",
          category: "accommodation",
          label: "Alagon D'Antique Hotel & Spa"
        },
        { 
          src: `/images/${tourPath}/accommodation/Alagon D Antique Hotel & Spa Twin 2.jpg`,
          alt: "Alagon D'Antique Hotel & Spa Twin Room",
          category: "accommodation",
          label: "Alagon D'Antique Hotel & Spa"
        },
        { 
          src: `/images/${tourPath}/accommodation/Alagon D Antique Hotel & Spa Twin 3.jpg`,
          alt: "Alagon D'Antique Hotel & Spa Twin Room",
          category: "accommodation",
          label: "Alagon D'Antique Hotel & Spa"
        },
        { 
          src: `/images/${tourPath}/accommodation/Mekong Eyes Cruise 1.jpg`,
          alt: "Mekong Eyes Cruise",
          category: "accommodation",
          label: "Mekong Eyes Cruise"
        },
        { 
          src: `/images/${tourPath}/accommodation/Mekong Eyes Cruise 2.jpg`,
          alt: "Mekong Eyes Cruise",
          category: "accommodation",
          label: "Mekong Eyes Cruise"
        },
        { 
          src: `/images/${tourPath}/accommodation/Mekong Eyes Cruise 3.jpg`,
          alt: "Mekong Eyes Cruise",
          category: "accommodation",
          label: "Mekong Eyes Cruise"
        },
        { 
          src: `/images/${tourPath}/accommodation/Mekong Eyes Cruise 4.jpg`,
          alt: "Mekong Eyes Cruise",
          category: "accommodation",
          label: "Mekong Eyes Cruise"
        }
      ];

      golfImages = [
        {
          src: `/images/${tourPath}/golf-courses/Tan Son Nhat Golf Course 1.jpg`,
          alt: "Tan Son Nhat Golf Course",
          category: "golf-courses",
          label: "Tan Son Nhat Golf Course"
        },
        {
          src: `/images/${tourPath}/golf-courses/Tan Son Nhat Golf Course 2.jpg`,
          alt: "Tan Son Nhat Golf Course",
          category: "golf-courses",
          label: "Tan Son Nhat Golf Course"
        },
        {
          src: `/images/${tourPath}/golf-courses/Tan Son Nhat Golf Course 3.jpg`,
          alt: "Tan Son Nhat Golf Course",
          category: "golf-courses",
          label: "Tan Son Nhat Golf Course"
        },
        {
          src: `/images/${tourPath}/golf-courses/Tan Son Nhat Golf Course 4.jpg`,
          alt: "Tan Son Nhat Golf Course",
          category: "golf-courses",
          label: "Tan Son Nhat Golf Course"
        },
        {
          src: `/images/${tourPath}/golf-courses/Vietnam Golf & Country Club 1.jpeg`,
          alt: "Vietnam Golf & Country Club",
          category: "golf-courses",
          label: "Vietnam Golf & Country Club"
        },
        {
          src: `/images/${tourPath}/golf-courses/Vietnam Golf & Country Club 2.jpg`,
          alt: "Vietnam Golf & Country Club",
          category: "golf-courses",
          label: "Vietnam Golf & Country Club"
        },
        {
          src: `/images/${tourPath}/golf-courses/Vietnam Golf & Country Club 3.jpg`,
          alt: "Vietnam Golf & Country Club",
          category: "golf-courses",
          label: "Vietnam Golf & Country Club"
        },
        {
          src: `/images/${tourPath}/golf-courses/Vietnam Golf & Country Club 4.jpg`,
          alt: "Vietnam Golf & Country Club",
          category: "golf-courses",
          label: "Vietnam Golf & Country Club"
        }
      ];
      break;
  }

  return [...accommodationImages, ...golfImages, ...landmarkImages];
}
