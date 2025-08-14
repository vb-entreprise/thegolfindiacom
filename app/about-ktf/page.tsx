"use client";

import { motion } from "framer-motion";
import { ExternalLink, Clock, Heart, Users, Gift, Target, Star, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutKTFPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 bg-[#0F4C3A]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Karma Time Foundation (KTF)</h1>
          <p className="text-2xl font-semibold text-[#D4AF37] mb-6">Where Time Becomes a Force for Good</p>
          <p className="text-gray-300 max-w-4xl mx-auto text-lg">
            Karma Time Foundation (KTF) is a social impact initiative built on a simple belief: Your time holds value — not just for you, but for the world.
          </p>
          <p className="text-gray-300 max-w-4xl mx-auto text-lg mt-4">
            KTF introduces the concept of Time Currency, encouraging individuals to make meaningful use of their time by contributing to their communities. In return, they earn TVUs (Time Value Units) — a digital record of their good deeds, which can be redeemed within the KTF network.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center p-6">
                  <CardContent className="pt-6">
                    <div className="bg-[#0F4C3A]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="h-8 w-8 text-[#0F4C3A]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">🕒 Earn TVUs</h3>
                    <p className="text-muted-foreground">
                      by volunteering, helping others, or participating in positive community actions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6">
                  <CardContent className="pt-6">
                    <div className="bg-[#0F4C3A]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Gift className="h-8 w-8 text-[#0F4C3A]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">🔁 Use TVUs</h3>
                    <p className="text-muted-foreground">
                      to get discounts from partner brands or trade services within the KTF community.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6">
                  <CardContent className="pt-6">
                    <div className="bg-[#0F4C3A]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="h-8 w-8 text-[#0F4C3A]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">🌱 Grow Your Impact</h3>
                    <p className="text-muted-foreground">
                      by tracking your contribution and seeing the difference your time makes.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* How KTF Creates Change Through Golf */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold text-center mb-12">How KTF Creates Change Through Golf</h2>
              <p className="text-lg text-center text-muted-foreground mb-12 max-w-4xl mx-auto">
                As the foundation behind The Golf India, KTF uses golf tourism as a platform to raise awareness, generate support, and directly fund its charitable programs. Every golf tour we organize carries a purpose.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="p-6">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-[#0F4C3A]/10 p-3 rounded-full mr-4">
                        <Heart className="h-6 w-6 text-[#0F4C3A]" />
                      </div>
                      <h3 className="text-xl font-bold">💼 Caddie Welfare Program</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Through our events, KTF supports golf caddies and their families with:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-[#0F4C3A] mr-2">•</span>
                        Emergency medical assistance
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#0F4C3A] mr-2">•</span>
                        Full sponsorship for a child's first year of school
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#0F4C3A] mr-2">•</span>
                        Annual Diwali gifts for those not using other benefits
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#0F4C3A] mr-2">•</span>
                        Welfare enrollment for just ₹100/month
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-[#0F4C3A]/10 p-3 rounded-full mr-4">
                        <Trophy className="h-6 w-6 text-[#0F4C3A]" />
                      </div>
                      <h3 className="text-xl font-bold">🏌️ Purpose-Driven Events</h3>
                    </div>
                    <p className="text-muted-foreground">
                      A percentage of every tournament fee is directed toward KTF programs, allowing players to travel and contribute at the same time.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Why It Matters */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-center mb-8">Why It Matters</h2>
              <div className="bg-[#0F4C3A]/5 rounded-xl p-8 text-center">
                <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                  At The Golf India, we don't just organize world-class golf experiences — we help people turn their passion into impact. With every trip, tee-off, and trophy, we're also building a more empathetic, inclusive future.
                </p>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-4">👉 Want to dive deeper into our mission?</h3>
              <Button 
                variant="green" 
                size="lg" 
                className="group"
                asChild
              >
                <a 
                  href="https://karmatimefoundation.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  Visit karmatimefoundation.org
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 