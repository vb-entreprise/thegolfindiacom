"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Users, Heart, HandHeart, Star, Check } from "lucide-react";

export default function VolunteerPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    availability: "",
    experience: "",
    interests: "",
    message: "",
    submitted: false,
  });

  const volunteerRoles = [
    {
      title: "Tournament Operations",
      description: "Help with event setup, registration, scoring, and logistics during tournaments.",
      commitment: "Full tournament days",
      icon: Calendar,
    },
    {
      title: "Player Services",
      description: "Assist with player registration, hospitality, and general support during events.",
      commitment: "Flexible shifts",
      icon: Users,
    },
    {
      title: "Community Outreach",
      description: "Support our initiatives for caddies and their families through various programs.",
      commitment: "Weekly/Monthly basis",
      icon: Heart,
    },
    {
      title: "Event Planning",
      description: "Join our team in planning and organizing upcoming tournaments and events.",
      commitment: "Regular meetings",
      icon: Star,
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/volunteer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          city: formState.city,
          availability: formState.availability,
          experience: formState.experience,
          interests: formState.interests,
          message: formState.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setFormState(prev => ({ ...prev, submitted: true }));
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try again.');
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 bg-[#0F4C3A]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Volunteer With Us</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Join our community of passionate volunteers who help make our tournaments 
            successful while supporting a great cause.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-[#0F4C3A]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-[#0F4C3A]" />
              </div>
              <div className="text-3xl font-bold text-[#0F4C3A] mb-2">12+</div>
              <p className="text-gray-600">Tournaments per year</p>
            </div>
            <div className="text-center">
              <div className="bg-[#0F4C3A]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HandHeart className="h-8 w-8 text-[#0F4C3A]" />
              </div>
              <div className="text-3xl font-bold text-[#0F4C3A] mb-2">500+</div>
              <p className="text-gray-600">Volunteer hours contributed</p>
            </div>
            <div className="text-center">
              <div className="bg-[#0F4C3A]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-[#0F4C3A]" />
              </div>
              <div className="text-3xl font-bold text-[#0F4C3A] mb-2">100+</div>
              <p className="text-gray-600">Active volunteers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Volunteer Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {volunteerRoles.map((role, index) => (
              <Card key={index} className="relative">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#0F4C3A]/10 p-3 rounded-full">
                      <role.icon className="h-6 w-6 text-[#0F4C3A]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{role.title}</h3>
                      <p className="text-muted-foreground mb-4">{role.description}</p>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        {role.commitment}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Volunteer Benefits</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="flex items-start">
              <div className="bg-[#0F4C3A]/10 p-2 rounded-full mr-4 mt-1">
                <Check className="h-5 w-5 text-[#0F4C3A]" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Free Tournament Access</h3>
                <p className="text-muted-foreground">
                  Experience premium golf events up close while making a difference.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-[#0F4C3A]/10 p-2 rounded-full mr-4 mt-1">
                <Check className="h-5 w-5 text-[#0F4C3A]" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Exclusive Merchandise</h3>
                <p className="text-muted-foreground">
                  Receive official The Golf India volunteer gear and tournament merchandise.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-[#0F4C3A]/10 p-2 rounded-full mr-4 mt-1">
                <Check className="h-5 w-5 text-[#0F4C3A]" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Networking Opportunities</h3>
                <p className="text-muted-foreground">
                  Connect with golf industry professionals and like-minded volunteers.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-[#0F4C3A]/10 p-2 rounded-full mr-4 mt-1">
                <Check className="h-5 w-5 text-[#0F4C3A]" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Recognition Program</h3>
                <p className="text-muted-foreground">
                  Earn recognition for your contributions and dedication to the cause.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Join Our Team</h2>
            
            {formState.submitted ? (
              <Card className="p-8 text-center">
                <CardContent>
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                  <p className="text-muted-foreground mb-6">
                    We've received your volunteer application. Our team will review it and 
                    get back to you within 48 hours with next steps.
                  </p>
                  <Button variant="outline" onClick={() => setFormState(prev => ({ ...prev, submitted: false }))}>
                    Submit Another Application
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      value={formState.name}
                      onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
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
                      onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState(prev => ({ ...prev, phone: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium mb-2">
                      City <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="city"
                      value={formState.city}
                      onChange={(e) => setFormState(prev => ({ ...prev, city: e.target.value }))}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="availability" className="block text-sm font-medium mb-2">
                    Availability <span className="text-red-500">*</span>
                  </label>
                  <Select
                    value={formState.availability}
                    onValueChange={(value) => setFormState(prev => ({ ...prev, availability: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weekdays">Weekdays</SelectItem>
                      <SelectItem value="weekends">Weekends</SelectItem>
                      <SelectItem value="both">Both Weekdays & Weekends</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="interests" className="block text-sm font-medium mb-2">
                    Areas of Interest <span className="text-red-500">*</span>
                  </label>
                  <Select
                    value={formState.interests}
                    onValueChange={(value) => setFormState(prev => ({ ...prev, interests: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your preferred role" />
                    </SelectTrigger>
                    <SelectContent>
                      {volunteerRoles.map((role, index) => (
                        <SelectItem key={index} value={role.title}>
                          {role.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium mb-2">
                    Golf Experience
                  </label>
                  <Select
                    value={formState.experience}
                    onValueChange={(value) => setFormState(prev => ({ ...prev, experience: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">No experience</SelectItem>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Why do you want to volunteer?
                  </label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Tell us about your motivation to volunteer and any relevant experience..."
                  />
                </div>

                <Button type="submit" variant="green" className="w-full">
                  Submit Application
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
} 