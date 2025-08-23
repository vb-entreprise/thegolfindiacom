'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnimatedGolfBall } from "@/components/ui/animated-golf-ball";
import { siteConfig } from "@/lib/constants";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Golf Tours", href: "/tours" },
    { name: "Tournaments", href: "/tournaments" },
    { name: "Destinations", href: "/destinations" },
  ],
  support: [
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
};

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Youtube", icon: Youtube, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-[#0F4C3A] text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Newsletter Section */}
        <motion.div 
          className="relative mb-16 p-8 rounded-2xl bg-[#1A6B54] overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute w-96 h-96 -top-48 -right-48 bg-white rounded-full blur-3xl" />
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">Join Our Newsletter</h3>
              <p className="text-gray-200">Stay updated with our latest golf tours and exclusive offers.</p>
            </div>
            <div className="flex-1 w-full md:w-auto">
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                />
                <Button variant="gold" size="lg" className="group">
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="inline-block mb-6">
              <Image
                src={siteConfig.logo}
                alt={siteConfig.name}
                width={200}
                height={70}
                className="h-14 w-auto"
                priority
              />
            </Link>
            <p className="text-gray-300 mb-6">
              Experience world-class golf across Asia's most stunning landscapes. Championship courses, luxury accommodations, and unforgettable cultural experiences.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div 
              key={category}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="text-lg font-semibold capitalize">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-[#D4AF37] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="text-gray-300 text-sm">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href={`tel:+91${siteConfig.contact.phone}`} className="flex items-center text-gray-300 hover:text-[#D4AF37] transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              +91 {siteConfig.contact.phone}
            </Link>
            <Link href={`mailto:${siteConfig.contact.email}`} className="flex items-center text-gray-300 hover:text-[#D4AF37] transition-colors">
              <Mail className="w-4 h-4 mr-2" />
              {siteConfig.contact.email}
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}