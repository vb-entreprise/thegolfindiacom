"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";
import { 
  ArrowRight, 
  Calendar as CalendarIcon, 
  User, 
  Mail, 
  Phone, 
  Users,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { startOfDay, isBefore, isAfter, isSameDay } from "date-fns";
import { cn } from "@/lib/utils";

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  numberOfPeople?: string;
  startDate?: string;
  endDate?: string;
}

export function BookingForm() {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [startMonth, setStartMonth] = useState<Date>(new Date());
  const [endMonth, setEndMonth] = useState<Date>(new Date());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    numberOfPeople: "",
    specialRequirements: "",
  });

  const today = startOfDay(new Date());

  // Handle start date selection
  const handleStartDateSelect = (date: Date | undefined) => {
    if (!date) {
      setStartDate(undefined);
      setErrors(prev => ({ ...prev, startDate: undefined }));
      return;
    }
    
    const selectedDate = startOfDay(date);
    setStartDate(selectedDate);
    setErrors(prev => ({ ...prev, startDate: undefined }));
    
    // If end date is before or equal to the new start date, reset end date
    if (endDate && (isBefore(endDate, selectedDate) || isSameDay(endDate, selectedDate))) {
      setEndDate(undefined);
      setErrors(prev => ({ ...prev, endDate: undefined }));
      // Set end month to show the month after start date
      const nextMonth = new Date(selectedDate);
      nextMonth.setMonth(nextMonth.getMonth() + 1);
      setEndMonth(nextMonth);
    } else if (endDate && isAfter(endDate, selectedDate)) {
      setEndMonth(endDate);
    } else {
      const nextMonth = new Date(selectedDate);
      nextMonth.setMonth(nextMonth.getMonth() + 1);
      setEndMonth(nextMonth);
    }
  };

  // Handle end date selection
  const handleEndDateSelect = (date: Date | undefined) => {
    if (!date) {
      setEndDate(undefined);
      setErrors(prev => ({ ...prev, endDate: undefined }));
      return;
    }
    setEndDate(startOfDay(date));
    setErrors(prev => ({ ...prev, endDate: undefined }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "WhatsApp number is required";
    } else if (!formData.phone.startsWith("+")) {
      newErrors.phone = "Please include country code (e.g., +1, +44)";
    }

    if (!formData.numberOfPeople.trim()) {
      newErrors.numberOfPeople = "Number of people is required";
    } else if (parseInt(formData.numberOfPeople) < 1) {
      newErrors.numberOfPeople = "Please enter at least 1 person";
    }

    if (!startDate) {
      newErrors.startDate = "Start date is required";
    }

    if (!endDate) {
      newErrors.endDate = "End date is required";
    } else if (startDate && (isBefore(endDate, startDate) || isSameDay(endDate, startDate))) {
      newErrors.endDate = "End date must be after start date";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setIsSuccess(false);
    
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
        throw new Error(data.error || `HTTP error! status: ${response.status}`);
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
      setStartMonth(new Date());
      setEndMonth(new Date());
      setErrors({});
      setIsSuccess(true);

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Error submitting booking:", error);
      
      if (error instanceof Error) {
        if (error.message.includes('Failed to fetch')) {
          setErrors({ name: "Network error. Please check your connection and try again." });
        } else {
          setErrors({ name: error.message });
        }
      }
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
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50/50 overflow-hidden">
        <CardContent className="p-0">
          {/* Success Message */}
          {isSuccess && (
            <div className="bg-green-50 border-l-4 border-green-500 p-4 m-6 rounded-r-lg flex items-center gap-3 animate-in slide-in-from-top">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
              <div>
                <p className="text-green-800 font-medium">Booking request submitted successfully!</p>
                <p className="text-green-700 text-sm mt-1">We will contact you shortly to confirm your booking.</p>
              </div>
            </div>
          )}

          {/* Error Message */}
          {errors.name && errors.name.includes("error") && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 m-6 rounded-r-lg flex items-center gap-3">
              <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
              <p className="text-red-800 text-sm">{errors.name}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="p-6 md:p-8 lg:p-10">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F4C3A] mb-2">
                Book Your Golf Tour
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                Fill in the details below and we'll get back to you soon
              </p>
            </div>

            <div className="space-y-8">
              {/* Personal Information Section */}
              <div className="space-y-5">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-10 w-10 rounded-full bg-[#0F4C3A]/10 flex items-center justify-center">
                    <User className="h-5 w-5 text-[#0F4C3A]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0F4C3A]">Personal Information</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={cn(
                        "h-12 text-base transition-all",
                        errors.name && "border-red-500 focus-visible:ring-red-500"
                      )}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={cn(
                        "h-12 text-base transition-all",
                        errors.email && "border-red-500 focus-visible:ring-red-500"
                      )}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* WhatsApp Number */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      WhatsApp Number *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 234 567 8900"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={cn(
                        "h-12 text-base transition-all",
                        errors.phone && "border-red-500 focus-visible:ring-red-500"
                      )}
                    />
                    <p className="text-xs text-gray-500">
                      Include country code (e.g., +1 for US, +44 for UK, +91 for India)
                    </p>
                    {errors.phone && (
                      <p className="text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Number of People */}
                  <div className="space-y-2">
                    <Label htmlFor="numberOfPeople" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Number of People *
                    </Label>
                    <Input
                      id="numberOfPeople"
                      name="numberOfPeople"
                      type="number"
                      min="1"
                      placeholder="2"
                      value={formData.numberOfPeople}
                      onChange={handleInputChange}
                      className={cn(
                        "h-12 text-base transition-all",
                        errors.numberOfPeople && "border-red-500 focus-visible:ring-red-500"
                      )}
                    />
                    {errors.numberOfPeople && (
                      <p className="text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.numberOfPeople}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Date Selection Section */}
              <div className="space-y-5">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-10 w-10 rounded-full bg-[#0F4C3A]/10 flex items-center justify-center">
                    <CalendarIcon className="h-5 w-5 text-[#0F4C3A]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0F4C3A]">Select Your Dates</h3>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                  {/* Start Date */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-gray-700">
                      Start Date *
                    </Label>
                    <div className={cn(
                      "border border-gray-300 rounded-lg p-5 bg-white shadow-lg transition-all min-w-[320px]",
                      errors.startDate ? "border-red-500" : "hover:border-[#0F4C3A]/40"
                    )}>
                      <Calendar
                        mode="single"
                        selected={startDate}
                        onSelect={handleStartDateSelect}
                        month={startMonth}
                        onMonthChange={setStartMonth}
                        className="w-full"
                        classNames={{
                          months: "flex flex-col space-y-4",
                          month: "space-y-4",
                          caption: "flex justify-between pt-1 pb-3 relative items-center px-1",
                          caption_label: "text-lg font-semibold text-gray-900",
                          nav: "flex items-center gap-1",
                          nav_button: "h-8 w-8 p-0 border border-gray-300 rounded hover:bg-gray-100",
                          nav_button_previous: "absolute left-1",
                          nav_button_next: "absolute right-1",
                          table: "w-full border-collapse mt-2",
                          head_row: "flex mb-2",
                          head_cell: "text-gray-600 w-10 h-10 font-semibold text-sm flex items-center justify-center",
                          row: "flex w-full mb-1",
                          cell: "h-10 w-10 text-center text-sm p-0 relative flex items-center justify-center",
                          day: "h-10 w-10 p-0 font-normal rounded hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 transition-colors",
                          day_selected: "bg-[#0F4C3A] text-white hover:bg-[#0F4C3A] hover:text-white focus:bg-[#0F4C3A] focus:text-white font-semibold",
                          day_today: "bg-blue-100 text-blue-900 font-semibold ring-2 ring-blue-300",
                          day_disabled: "text-gray-300 opacity-40 cursor-not-allowed hover:bg-transparent",
                          day_outside: "text-gray-400 opacity-60",
                        }}
                        disabled={(date) => {
                          const dateToCheck = startOfDay(date);
                          if (isBefore(dateToCheck, today)) return true;
                          if (endDate && isAfter(dateToCheck, endDate)) return true;
                          return false;
                        }}
                        fromDate={today}
                        toDate={endDate || undefined}
                      />
                      {startDate && (
                        <div className="mt-4 pt-3 border-t border-gray-200">
                          <p className="text-xs text-gray-500 mb-1">Selected:</p>
                          <p className="text-sm font-semibold text-[#0F4C3A]">
                            {format(startDate, "EEEE, MMMM d, yyyy")}
                          </p>
                        </div>
                      )}
                    </div>
                    {errors.startDate && (
                      <p className="text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.startDate}
                      </p>
                    )}
                  </div>

                  {/* End Date */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-gray-700">
                      End Date *
                    </Label>
                    <div className={cn(
                      "border border-gray-300 rounded-lg p-5 bg-white shadow-lg transition-all min-w-[320px]",
                      errors.endDate ? "border-red-500" : "hover:border-[#0F4C3A]/40"
                    )}>
                      <Calendar
                        mode="single"
                        selected={endDate}
                        onSelect={handleEndDateSelect}
                        month={endMonth}
                        onMonthChange={setEndMonth}
                        className="w-full"
                        classNames={{
                          months: "flex flex-col space-y-4",
                          month: "space-y-4",
                          caption: "flex justify-between pt-1 pb-3 relative items-center px-1",
                          caption_label: "text-lg font-semibold text-gray-900",
                          nav: "flex items-center gap-1",
                          nav_button: "h-8 w-8 p-0 border border-gray-300 rounded hover:bg-gray-100",
                          nav_button_previous: "absolute left-1",
                          nav_button_next: "absolute right-1",
                          table: "w-full border-collapse mt-2",
                          head_row: "flex mb-2",
                          head_cell: "text-gray-600 w-10 h-10 font-semibold text-sm flex items-center justify-center",
                          row: "flex w-full mb-1",
                          cell: "h-10 w-10 text-center text-sm p-0 relative flex items-center justify-center",
                          day: "h-10 w-10 p-0 font-normal rounded hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 transition-colors",
                          day_selected: "bg-[#0F4C3A] text-white hover:bg-[#0F4C3A] hover:text-white focus:bg-[#0F4C3A] focus:text-white font-semibold",
                          day_today: "bg-blue-100 text-blue-900 font-semibold ring-2 ring-blue-300",
                          day_disabled: "text-gray-300 opacity-40 cursor-not-allowed hover:bg-transparent",
                          day_outside: "text-gray-400 opacity-60",
                        }}
                        disabled={(date) => {
                          const dateToCheck = startOfDay(date);
                          if (isBefore(dateToCheck, today)) return true;
                          if (startDate && (isBefore(dateToCheck, startDate) || isSameDay(dateToCheck, startDate))) {
                            return true;
                          }
                          return false;
                        }}
                        fromDate={startDate || today}
                      />
                      {endDate && (
                        <div className="mt-4 pt-3 border-t border-gray-200">
                          <p className="text-xs text-gray-500 mb-1">Selected:</p>
                          <p className="text-sm font-semibold text-[#0F4C3A]">
                            {format(endDate, "EEEE, MMMM d, yyyy")}
                          </p>
                        </div>
                      )}
                    </div>
                    {errors.endDate && (
                      <p className="text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.endDate}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Special Requirements */}
              <div className="space-y-3">
                <Label htmlFor="specialRequirements" className="text-sm font-medium text-gray-700">
                  Special Requirements or Requests
                  <span className="text-gray-400 font-normal ml-2">(Optional)</span>
                </Label>
                <Textarea
                  id="specialRequirements"
                  name="specialRequirements"
                  placeholder="Any dietary restrictions, accessibility needs, or special requests you'd like us to know about..."
                  value={formData.specialRequirements}
                  onChange={handleInputChange}
                  className="min-h-[120px] text-base resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button 
                  type="submit" 
                  variant="green"
                  size="default"
                  className="w-full h-14 text-base md:text-lg font-semibold group relative overflow-hidden shadow-lg hover:shadow-xl transition-all"
                  disabled={isSubmitting}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Booking Request
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
