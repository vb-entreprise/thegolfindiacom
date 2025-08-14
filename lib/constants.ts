// Site configuration
export const siteConfig = {
  name: "The Golf India",
  description: "Experience world-class golf tours and tournaments across Asia's most beautiful destinations.",
  url: "https://thegolfindia.com",
  ogImage: "/images/og-image.jpg",
  logo: "/images/logo/Transperant%20BG.png", // Main logo
  logoLight: "/images/logo/Transperant%20BG.png", // Light version for dark backgrounds
  links: {
    twitter: "https://twitter.com/thegolfindia",
    instagram: "https://instagram.com/thegolfindia",
    facebook: "https://facebook.com/thegolfindia",
  },
  contact: {
    email: "thegolfindia@gmail.com",
    phone: "8799395926",
    website: "thegolfindia.com"
  }
};

// Navigation
export const navigationLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "About KTF",
    href: "/about-ktf",
  },
  {
    label: "Destinations",
    href: "/destinations",
  },
  {
    label: "Tours",
    href: "/tours",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

// Footer links
export const footerLinks = [
  {
    title: "About The Golf India",
    links: [
      { title: "Our Story", href: "/about" },
      { title: "About KTF", href: "/about-ktf" },
      { title: "Our Impact", href: "/about#impact" },
      { title: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { title: "Tours", href: "/tours" },
      { title: "Make a Donation", href: "/donate" },
      { title: "Volunteer", href: "/volunteer" },
    ],
  },
  {
    title: "Legal",
    links: [
      { title: "Terms of Service", href: "/terms" },
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Cookie Policy", href: "/cookies" },
    ],
  },
];

// Image paths configuration
export const imagePaths = {
  home: {
    hero: "/images/home/hero.jpg",
    about: "/images/home/about.jpg",
    testimonials: "/images/home/testimonials.jpg",
    newsletter: "/images/home/newsletter.jpg",
  },
  about: {
    ourStory: "/images/about/our-story.jpg",
    team: "/images/about/team.jpg",
    vision: "/images/about/vision.jpg",
  },
  destinations: {
    banner: "/images/destinations/banner.jpg",
    // Individual destination images will be loaded dynamically
  },
  tournaments: {
    vietnam: {
      banner: "/images/tournaments/vietnam/banner.jpg",
      packages: {
        // Example structure for tournament packages
        "package-1": "/images/tournaments/vietnam/package-1/",
        "package-2": "/images/tournaments/vietnam/package-2/",
      }
    },
    // Add more tournament locations as needed
  },
  contact: {
    banner: "/images/contact/banner.jpg",
    office: "/images/contact/office.jpg",
  }
};