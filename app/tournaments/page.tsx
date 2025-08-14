import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Trophy, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const upcomingTournaments = [
  {
    id: 1,
    slug: "luxury-north-vietnam-golf-cruise",
    title: "Luxury North Vietnam Golf & Cruise Experience",
    date: "March 15, 2024",
    location: "Hanoi – Halong Bay, Vietnam",
    participants: "120 players",
    registrationFee: "$1,699",
    status: "Registration Open",
    description: "Experience world-class golf in North Vietnam's lush countryside, cruise through the legendary Halong Bay, and enjoy seamless service, comfort, and culture.",
    impact: "Premium golf experience with luxury cruise",
  },
  {
    id: 2,
    slug: "north-vietnam-golf-retreat",
    title: "North Vietnam Golf Retreat & Day Cruise Escape",
    date: "April 5, 2024",
    location: "Hanoi – Ha Long Bay, Vietnam",
    participants: "96 players",
    registrationFee: "$1,598",
    status: "Early Bird Open",
    description: "A balanced blend of golf, relaxation, and cultural discovery in Vietnam's stunning north. Perfect for leisure golfers seeking top courses and UNESCO beauty.",
    impact: "Golf and cultural immersion experience",
  },
  {
    id: 3,
    slug: "central-vietnam-heritage-golf",
    title: "Central Vietnam Heritage & Golf Experience",
    date: "May 12, 2024",
    location: "Da Nang – Hoi An, Vietnam",
    participants: "80 players",
    registrationFee: "$1,937",
    status: "Coming Soon",
    description: "Tee off on Vietnam's most iconic coastal golf courses, explore ancient Hoi An, and relax in style across Da Nang's lush green hills and beaches.",
    impact: "Championship golf with cultural heritage",
  },
];

const pastTournaments = [
  {
    id: 4,
    slug: "southern-vietnam-golf-mekong",
    title: "Southern Vietnam Golf & Mekong River Cruise",
    date: "December 10, 2023",
    location: "Ho Chi Minh City – Mekong Delta, Vietnam",
    participants: "108 players",
    amountRaised: "$1,606",
    impact: "Golf and river cruise adventure",
  }
];

export default function TournamentsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#0F4C3A] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Golf for Good</h1>
          <p className="text-xl md:text-2xl max-w-2xl mb-8">
            Join our purpose-driven tournaments and make every swing count towards supporting our caddie community.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="gold" size="lg">
              Register Now
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Tournaments */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Upcoming Tournaments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingTournaments.map((tournament) => (
              <Card key={tournament.id} className="overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{tournament.title}</h3>
                    <Badge variant="secondary" className="bg-[#0F4C3A] text-white">
                      {tournament.status}
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-4">{tournament.description}</p>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-5 h-5 mr-2" />
                      {tournament.date}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-5 h-5 mr-2" />
                      {tournament.location}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-5 h-5 mr-2" />
                      {tournament.participants}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Trophy className="w-5 h-5 mr-2 text-[#D4AF37]" />
                      {tournament.impact}
                    </div>
                  </div>
                  <div className="mt-6 space-y-4">
                    <p className="text-lg font-semibold">Registration Fee: {tournament.registrationFee}</p>
                    <div className="flex gap-3">
                      <Button className="flex-1" variant="gold">
                        Register Now
                      </Button>
                      <Button 
                        variant="outline" 
                        className="flex-1"
                        asChild
                      >
                        <Link href={`/tournaments/${tournament.slug}`}>
                          View Details
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Tournaments */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Past Tournaments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastTournaments.map((tournament) => (
              <Card key={tournament.id} className="p-6">
                <h3 className="text-xl font-semibold mb-4">{tournament.title}</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2" />
                    {tournament.date}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    {tournament.location}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-5 h-5 mr-2" />
                    {tournament.participants}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2" />
                    Amount Raised: {tournament.amountRaised}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Trophy className="w-5 h-5 mr-2 text-[#D4AF37]" />
                    {tournament.impact}
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full mt-4"
                  asChild
                >
                  <Link href={`/tournaments/${tournament.slug}`}>
                    View Details
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our upcoming tournaments and be part of a movement that's changing lives through golf.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="gold" size="xl" className="group">
              Register for a Tournament
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="group">
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
} 
