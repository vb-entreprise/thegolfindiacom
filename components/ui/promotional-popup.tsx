'use client';

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Gift, Percent } from "lucide-react";
import Link from "next/link";

export function PromotionalPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Only show on homepage
    if (pathname !== '/' && pathname !== '') {
      return;
    }

    // Check if user has already seen the popup
    const hasSeenPopup = localStorage.getItem('promotional_popup_seen');
    const popupDismissedTime = localStorage.getItem('promotional_popup_dismissed_time');
    
    // Show popup if:
    // 1. User hasn't seen it, OR
    // 2. It's been more than 24 hours since last dismissal (optional - you can remove this if you want it to show only once)
    const shouldShow = !hasSeenPopup || 
      (popupDismissedTime && Date.now() - parseInt(popupDismissedTime) > 24 * 60 * 60 * 1000);
    
    if (shouldShow) {
      // Delay showing popup after 5 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('promotional_popup_seen', 'true');
    localStorage.setItem('promotional_popup_dismissed_time', Date.now().toString());
  };

  const handleGetOffer = () => {
    localStorage.setItem('promotional_popup_seen', 'true');
    setIsOpen(false);
    // Optionally scroll to tours or contact page
    window.location.href = '/tours';
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden border-0 bg-gradient-to-br from-[#0F4C3A] via-[#1A6B54] to-[#2D8A6F]">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 z-50 rounded-full p-2 bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5 text-white" />
        </button>

        {/* Content */}
        <div className="relative">
          {/* Decorative Elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#D4AF37]/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          
          <div className="relative p-8 text-center">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-[#D4AF37] rounded-full blur-xl opacity-50 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] p-6 rounded-full shadow-2xl">
                  <Gift className="h-12 w-12 text-white" />
                </div>
              </div>
            </div>

            {/* Title */}
            <DialogTitle className="text-3xl font-bold text-white mb-3">
              Special Launch Offer!
            </DialogTitle>

            {/* Discount Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Percent className="h-5 w-5 text-[#D4AF37]" />
              <span className="text-xl font-bold text-white">20% OFF</span>
            </div>

            {/* Description */}
            <DialogDescription className="text-white/90 text-lg mb-6 space-y-2">
              <p className="font-semibold">
                For our first 20 customers only!
              </p>
              <p className="text-base">
                Book any golf tour package and get an exclusive 20% discount on your booking.
              </p>
              <p className="text-sm text-white/80 mt-4">
                Limited time offer - Don't miss out!
              </p>
            </DialogDescription>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleGetOffer}
                variant="gold"
                size="lg"
                className="group shadow-xl"
              >
                Claim Your Discount
                <Gift className="ml-2 h-5 w-5 text-[#0F4C3A] group-hover:scale-110 transition-transform" />
              </Button>
              <Button
                onClick={handleClose}
                variant="glassmorphism"
                size="lg"
                className="border-white/30"
              >
                Maybe Later
              </Button>
            </div>

            {/* Fine Print */}
            <p className="text-xs text-white/60 mt-6">
              *Offer valid for first 20 bookings. Terms and conditions apply.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

