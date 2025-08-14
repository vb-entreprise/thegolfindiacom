import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Users, GraduationCap, Stethoscope, Gift } from "lucide-react";
import { DonationForm } from "@/components/donate/donation-form";

const impactMetrics = [
  {
    amount: "$12",
    impact: "Provides a day's meals for 2 caddies",
    icon: Users,
  },
  {
    amount: "$60",
    impact: "Funds one month of education for a caddie's child",
    icon: GraduationCap,
  },
  {
    amount: "$120",
    impact: "Covers medical emergency support for a caddie family",
    icon: Stethoscope,
  },
  {
    amount: "$300",
    impact: "Supports Diwali bonuses for 5 caddies",
    icon: Gift,
  },
];

export default function DonatePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#0F4C3A] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Make a Difference</h1>
            <p className="text-xl mb-8">
              Your donation helps support caddies and their families through education, healthcare, and welfare initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Donation Form */}
            <DonationForm />

            {/* Impact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Your Impact</h2>
                <div className="grid gap-6">
                  {impactMetrics.map((metric, index) => (
                    <Card key={index} className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-[#0F4C3A]/10">
                          <metric.icon className="w-6 h-6 text-[#0F4C3A]" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-1">{metric.amount}</h3>
                          <p className="text-gray-600">{metric.impact}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="p-6 bg-[#0F4C3A] text-white">
                <h3 className="text-xl font-bold mb-4">Why Donate?</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-[#D4AF37]" />
                    <span>100% of donations go directly to caddie welfare</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-[#D4AF37]" />
                    <span>Supporting over 500 caddie families</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <GraduationCap className="w-5 h-5 text-[#D4AF37]" />
                    <span>Funding education for caddie children</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Stethoscope className="w-5 h-5 text-[#D4AF37]" />
                    <span>Providing medical emergency support</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Giving Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Consider Monthly Giving</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of regular donors and help us provide sustained support to our caddie community.
          </p>
          <Button variant="outline" size="lg" className="border-[#0F4C3A] text-[#0F4C3A] hover:bg-[#0F4C3A] hover:text-white">
            Learn More About Monthly Giving
          </Button>
        </div>
      </section>
    </div>
  );
} 
