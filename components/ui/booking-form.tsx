"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { ArrowRight } from "lucide-react";

export function BookingForm() {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    numberOfPeople: "",
    specialRequirements: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const bookingData = {
      ...formData,
      startDate: startDate ? format(startDate, "yyyy-MM-dd") : null,
      endDate: endDate ? format(endDate, "yyyy-MM-dd") : null,
    };

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit booking');
      }

      // Clear form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        numberOfPeople: "",
        specialRequirements: "",
      });
      setStartDate(undefined);
      setEndDate(undefined);

      alert("Thank you for your booking request! We will contact you shortly.");
    } catch (error) {
      console.error("Error submitting booking:", error);
      alert("There was an error submitting your booking. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Card className="w-full max-w-2xl mx-auto border-0 shadow-none">
      <CardHeader className="pb-6 px-0 sm:px-0">
        <CardTitle className="text-2xl sm:text-3xl font-bold text-center text-[#0F4C3A] leading-tight">
          Book Your Golf Tour
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0 sm:px-0">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#0F4C3A] mb-3">Personal Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="h-12 text-base"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="h-12 text-base"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium">WhatsApp Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+[Country Code] [Phone Number]"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="h-12 text-base"
                />
                <p className="text-xs text-gray-500 leading-relaxed">
                  Please include your country code (e.g., +1 for US, +44 for UK, +84 for Vietnam)
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="numberOfPeople" className="text-sm font-medium">Number of People *</Label>
                <Input
                  id="numberOfPeople"
                  name="numberOfPeople"
                  type="number"
                  min="1"
                  placeholder="Enter number of people"
                  required
                  value={formData.numberOfPeople}
                  onChange={handleInputChange}
                  className="h-12 text-base"
                />
              </div>
            </div>
          </div>

          {/* Date Selection */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#0F4C3A] mb-3">Select Your Dates</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-sm font-medium">Start Date *</Label>
                <div className="border rounded-lg p-2 bg-white">
                  <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={setStartDate}
                    className="w-full"
                    disabled={(date) =>
                      date < new Date() || (endDate ? date > endDate : false)
                    }
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">End Date *</Label>
                <div className="border rounded-lg p-2 bg-white">
                  <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={setEndDate}
                    className="w-full"
                    disabled={(date) =>
                      date < new Date() || (startDate ? date < startDate : false)
                    }
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Special Requirements */}
          <div className="space-y-2">
            <Label htmlFor="specialRequirements" className="text-sm font-medium">Special Requirements</Label>
            <Textarea
              id="specialRequirements"
              name="specialRequirements"
              placeholder="Any special requirements or requests? (Optional)"
              value={formData.specialRequirements}
              onChange={handleInputChange}
              className="min-h-[100px] text-base resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button 
              type="submit" 
              variant="green"
              size="default"
              className="w-full h-14 text-lg font-semibold group"
              disabled={isSubmitting || !startDate || !endDate}
            >
              {isSubmitting ? "Submitting..." : "Submit Booking Request"}
              {!isSubmitting && <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
} 