"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send, Check, Globe, Heart } from "lucide-react";
import { siteConfig } from "@/lib/constants";

function ContactContent() {
  const searchParams = useSearchParams();
  const suggestionType = searchParams.get('type');

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: suggestionType === 'suggestion' ? "Golf Destination Suggestion" : "",
    message: suggestionType === 'suggestion' ? "I'd like to suggest the following golf destination:\n\nDestination Name:\nCountry/Region:\nPreferred Golf Courses:\nAccommodation Preferences:\nSpecial Requirements:\n\nPlease provide any additional details about your dream golf destination:" : "",
    submitted: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          subject: formState.subject,
          message: formState.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setFormState(prev => ({ ...prev, submitted: true }));
    } catch (error) {
      console.error('Error submitting form:', error);
      // You could add error state handling here
      alert('Failed to submit form. Please try again.');
    }
  };

  return (
    <>
      
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 bg-[#0F4C3A]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {suggestionType === 'suggestion' ? 'Suggest a Golf Destination' : 'Contact The Golf India'}
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            {suggestionType === 'suggestion' 
              ? 'Have a dream golf destination in mind? We\'d love to hear your suggestions and help make your golf travel dreams a reality.'
              : 'Join us in making golf a force for good. Whether you\'re interested in participating in our tournaments, supporting our initiatives, or learning more about our impact, we\'re here to help.'
            }
          </p>
        </div>
      </section>
      
      {/* Contact Form & Info Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">
                {suggestionType === 'suggestion' ? 'Destination Suggestion' : 'Get Involved'}
              </h2>
              
              {formState.submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="bg-green-100 p-4 rounded-full">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-800">Thank You!</h3>
                  <p className="text-green-700">
                    {suggestionType === 'suggestion' 
                      ? 'Thank you for your destination suggestion! We\'ll review it and get back to you within 24 hours.'
                      : 'Your message has been received. We appreciate your interest in making a difference through golf.'
                    }
                  </p>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => setFormState((prev) => ({ 
                      name: "", 
                      email: "", 
                      phone: "", 
                      subject: suggestionType === 'suggestion' ? "Golf Destination Suggestion" : "",
                      message: suggestionType === 'suggestion' ? "I'd like to suggest the following golf destination:\n\nDestination Name:\nCountry/Region:\nPreferred Golf Courses:\nAccommodation Preferences:\nSpecial Requirements:\n\nPlease provide any additional details about your dream golf destination:" : "",
                      submitted: false 
                    }))}
                    className="mt-4 group"
                  >
                    Send Another Message
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <Input 
                        id="name" 
                        value={formState.name}
                        onChange={(e) => setFormState((prev) => ({ ...prev, name: e.target.value }))}
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={formState.email}
                        onChange={(e) => setFormState((prev) => ({ ...prev, email: e.target.value }))}
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        value={formState.phone}
                        onChange={(e) => setFormState((prev) => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <Input 
                        id="subject" 
                        value={formState.subject}
                        onChange={(e) => setFormState((prev) => ({ ...prev, subject: e.target.value }))}
                        required 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea 
                      id="message" 
                      rows={5} 
                      value={formState.message}
                      onChange={(e) => setFormState((prev) => ({ ...prev, message: e.target.value }))}
                      required 
                    />
                  </div>
                  
                  <Button type="submit" variant="green" size="lg" className="w-full group">
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" /> Send Message
                  </Button>
                </form>
              )}
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-[#0F4C3A]/10 p-3 rounded-full mr-4">
                    <Globe className="h-6 w-6 text-[#0F4C3A]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Visit Our Website</h3>
                    <p className="text-muted-foreground">
                      Learn more about our mission and impact
                    </p>
                    <a href="https://thegolfindia.com" target="_blank" rel="noopener noreferrer" className="text-[#0F4C3A] font-medium hover:underline mt-1 block">
                      thegolfindia.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#0F4C3A]/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-[#0F4C3A]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email Us</h3>
                    <p className="text-muted-foreground">
                      For partnerships, donations, or general inquiries
                    </p>
                    <a href="mailto:thegolfindia@gmail.com" className="text-[#0F4C3A] font-medium hover:underline mt-1 block">
thegolfindia@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#0F4C3A]/10 p-3 rounded-full mr-4">
                    <Heart className="h-6 w-6 text-[#0F4C3A]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Support Our Cause</h3>
                    <p className="text-muted-foreground">
                      Make a difference in the lives of caddies and their families through our initiatives
                    </p>
                    <div className="mt-2 space-y-2">
                      <div className="text-gray-700">• Caddie Welfare Fund</div>
                      <div className="text-gray-700">• Child Education Support</div>
                      <div className="text-gray-700">• Medical Emergency Aid</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="font-bold text-lg mb-4">Common Questions</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">How can I join a golf tour with The Golf India?</h4>
                    <p className="text-muted-foreground">
                      Our tournaments are open to all golf enthusiasts. Register through our website or contact us directly for upcoming events.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">How are donations utilized?</h4>
                    <p className="text-muted-foreground">
                      100% of donations go directly to our initiatives supporting caddies and their families through education, healthcare, and welfare programs.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Can businesses collaborate with The Golf India?</h4>
                    <p className="text-muted-foreground">
                      Yes! We welcome partnerships with organizations that share our vision of using golf as a force for good. Contact us to discuss collaboration opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="h-[400px] relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2196.741107685738!2d-2.7993950481562374!3d56.34218583494435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488650981912f9fb%3A0x5526fe4b9a9554f9!2sThe%20Old%20Course%20at%20St%20Andrews%20Links!5e0!3m2!1sen!2sus!4v1649259268437!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="GolfJourneys Office Location"
        ></iframe>
      </section>
      
      
    </>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div />}> 
      <ContactContent />
    </Suspense>
  );
}
