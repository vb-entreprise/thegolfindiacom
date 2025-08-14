'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export function DonationForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Card className="p-8">
      <h2 className="text-2xl font-bold mb-6">Support Our Cause</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Amount Selection */}
        <div className="space-y-4">
          <Label>Select Amount</Label>
          <RadioGroup defaultValue="1000" className="grid grid-cols-2 gap-4">
            <div>
              <RadioGroupItem value="1000" id="amount-1000" className="peer sr-only" />
              <Label
                htmlFor="amount-1000"
                className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-[#D4AF37] peer-data-[state=checked]:bg-[#0F4C3A] peer-data-[state=checked]:text-white [&:has([data-state=checked])]:border-primary cursor-pointer"
              >
                <span className="text-xl font-bold">$12</span>
                <span className="text-sm">Basic Support</span>
              </Label>
            </div>
            <div>
              <RadioGroupItem value="5000" id="amount-5000" className="peer sr-only" />
              <Label
                htmlFor="amount-5000"
                className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-[#D4AF37] peer-data-[state=checked]:bg-[#0F4C3A] peer-data-[state=checked]:text-white [&:has([data-state=checked])]:border-primary cursor-pointer"
              >
                <span className="text-xl font-bold">$60</span>
                <span className="text-sm">Education Support</span>
              </Label>
            </div>
            <div>
              <RadioGroupItem value="10000" id="amount-10000" className="peer sr-only" />
              <Label
                htmlFor="amount-10000"
                className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-[#D4AF37] peer-data-[state=checked]:bg-[#0F4C3A] peer-data-[state=checked]:text-white [&:has([data-state=checked])]:border-primary cursor-pointer"
              >
                <span className="text-xl font-bold">$120</span>
                <span className="text-sm">Medical Support</span>
              </Label>
            </div>
            <div>
              <RadioGroupItem value="custom" id="amount-custom" className="peer sr-only" />
              <Label
                htmlFor="amount-custom"
                className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-[#D4AF37] peer-data-[state=checked]:bg-[#0F4C3A] peer-data-[state=checked]:text-white [&:has([data-state=checked])]:border-primary cursor-pointer"
              >
                <span className="text-xl font-bold">Custom</span>
                <span className="text-sm">Choose Amount</span>
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Custom Amount */}
        <div className="space-y-2">
          <Label htmlFor="custom-amount">Custom Amount ($)</Label>
          <Input
            id="custom-amount"
            type="number"
            placeholder="Enter amount"
            className="text-lg"
          />
        </div>

        {/* Personal Information */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="John" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Doe" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="+91 98765 43210" required />
          </div>
        </div>

        {/* Payment Method */}
        <div className="space-y-4">
          <Label>Payment Method</Label>
          <RadioGroup defaultValue="upi" className="flex gap-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="upi" id="upi" />
              <Label htmlFor="upi">UPI</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="card" id="card" />
              <Label htmlFor="card">Card</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="netbanking" id="netbanking" />
              <Label htmlFor="netbanking">Net Banking</Label>
            </div>
          </RadioGroup>
        </div>

        <Button type="submit" variant="gold" className="w-full text-lg py-6">
          Donate Now
        </Button>

        <p className="text-sm text-gray-500 text-center">
          Your donation is eligible for tax deduction under 80G
        </p>
      </form>
    </Card>
  );
} 