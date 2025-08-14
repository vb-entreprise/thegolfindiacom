"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to subscribe. Please try again.');
    }
  };

  return (
    <section className="py-16 bg-[#D4AF37]/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with the Latest Golf Tours</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter to receive exclusive offers, new tour announcements, and expert golf travel tips.
          </p>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 flex items-center justify-center space-x-4">
              <div className="bg-green-100 p-2 rounded-full">
                <Check className="h-6 w-6 text-green-600" />
              </div>
              <p className="text-green-800 font-medium">
                Thank you for subscribing! We'll be in touch with our latest golf travel updates.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" variant="green" size="lg" className="group">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          )}

          <p className="text-sm text-muted-foreground mt-4">
            By subscribing, you agree to our <Link href="/privacy" className="underline hover:text-[#0F4C3A]">privacy policy</Link>. 
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  );
}