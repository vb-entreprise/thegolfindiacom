"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, navigationLinks } from "@/lib/constants";


export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full border-b bg-[#0F4C3A] text-white transition-all duration-200 ${
      mounted && isScrolled ? "shadow-lg" : ""
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3" onClick={() => setIsOpen(false)}>
            <div className="relative h-14 w-14">
              <Image
                src={siteConfig.logoLight}
                alt={siteConfig.name}
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold">{siteConfig.name}</span>
          </Link>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="glassmorphism" 
              size="default"
              className="group"
              asChild
            >
              <Link href="/contact">
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mounted && isOpen && (
          <div className="md:hidden border-t border-white/10 py-4 animate-in slide-in-from-top-2">
            <nav className="flex flex-col space-y-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-white/90 hover:text-white transition-colors px-2 py-2 hover:bg-white/10 rounded-md"
                >
                  {link.label}
                </Link>
              ))}
              <Button 
                variant="glassmorphism" 
                size="default"
                className="group w-full mt-2"
                asChild
              >
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Contact Us
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}