import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white py-16 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
          <p className="text-lg text-gray-600 mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p className="text-gray-600">
            Please read these terms of service carefully before using our website and booking our services.
          </p>
        </div>

        {/* Content Sections */}
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Agreement to Terms */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing or using our website, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our website or use our services.
            </p>
          </section>

          {/* Booking and Cancellation */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Booking and Cancellation Policy</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                All bookings are subject to availability and confirmation. Payment terms and cancellation policies are as follows:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Full payment is required to confirm your booking</li>
                <li>Cancellations made 30 days or more before the tour start date receive a full refund minus processing fees</li>
                <li>Cancellations made 15-29 days before the tour start date receive a 50% refund</li>
                <li>Cancellations made less than 15 days before the tour start date are non-refundable</li>
                <li>All cancellation requests must be made in writing</li>
              </ul>
            </div>
          </section>

          {/* User Responsibilities */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                When using our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Provide accurate and complete information during booking</li>
                <li>Comply with local laws and regulations</li>
                <li>Respect golf course rules and etiquette</li>
                <li>Maintain appropriate travel insurance coverage</li>
                <li>Arrive on time for scheduled activities</li>
              </ul>
            </div>
          </section>

          {/* Liability and Disclaimer */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Liability and Disclaimer</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                While we strive to provide accurate information and quality services:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>We are not liable for any injuries or accidents during tours</li>
                <li>Weather-related cancellations are subject to our standard cancellation policy</li>
                <li>We reserve the right to modify itineraries due to circumstances beyond our control</li>
                <li>Photos and descriptions are for illustration purposes only</li>
              </ul>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
            <p className="text-gray-600">
              All content on this website, including text, images, logos, and designs, is our property and protected by copyright laws. You may not use, reproduce, or distribute our content without explicit permission.
            </p>
          </section>

          {/* Payment and Pricing */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Payment and Pricing</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                Our payment and pricing terms include:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>All prices are in the displayed currency and subject to change</li>
                <li>Payments are processed through secure payment gateways</li>
                <li>Additional fees may apply for special requests or modifications</li>
                <li>Group discounts are subject to availability and terms</li>
              </ul>
            </div>
          </section>

          {/* Modifications */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Modifications to Terms</h2>
            <p className="text-gray-600">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services following any changes indicates your acceptance of the modified terms.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
            <p className="text-gray-600 mb-6">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2 text-gray-600">
                             <p>Email: thegolfindia@gmail.com</p>
                              <p>Phone: +91 8799395926</p>
              <p>Address: 123 Golf Street, Hanoi, Vietnam</p>
            </div>
          </section>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-8">
            <Button variant="gold" asChild>
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">
                Return Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
} 