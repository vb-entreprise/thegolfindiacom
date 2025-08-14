import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white py-16 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-lg text-gray-600 mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p className="text-gray-600">
            Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.
          </p>
        </div>

        {/* Content Sections */}
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">Personal Information</h3>
                <p className="text-gray-600 mb-3">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Name and contact information</li>
                  <li>Payment details</li>
                  <li>Travel preferences and requirements</li>
                  <li>Passport or ID information for booking</li>
                  <li>Golf handicap and club membership details</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Automatically Collected Information</h3>
                <p className="text-gray-600 mb-3">
                  When you visit our website, we automatically collect:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Device information</li>
                  <li>IP address and location data</li>
                  <li>Browser type and settings</li>
                  <li>Website usage data</li>
                  <li>Cookies and similar technologies</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Process your bookings and payments</li>
              <li>Communicate with you about your tours</li>
              <li>Personalize your experience</li>
              <li>Improve our services</li>
              <li>Send promotional materials (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Information Sharing and Disclosure</h2>
            <p className="text-gray-600 mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Golf courses and accommodation providers</li>
              <li>Payment processors</li>
              <li>Transportation services</li>
              <li>Legal authorities when required</li>
            </ul>
            <p className="text-gray-600 mt-4">
              We do not sell your personal information to third parties.
            </p>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate security measures to protect your information:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Encryption of sensitive data</li>
              <li>Secure payment processing</li>
              <li>Regular security assessments</li>
              <li>Limited staff access to personal data</li>
            </ul>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
            <p className="text-gray-600 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Data portability</li>
            </ul>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Cookies and Tracking</h2>
            <p className="text-gray-600 mb-4">
              We use cookies and similar tracking technologies. For more information, please read our{' '}
              <Link href="/cookies" className="text-[#0F4C3A] hover:underline">
                Cookie Policy
              </Link>.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Children's Privacy</h2>
            <p className="text-gray-600">
              Our services are not intended for children under 13. We do not knowingly collect or maintain information from children under 13.
            </p>
          </section>

          {/* Changes to Policy */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Changes to This Policy</h2>
            <p className="text-gray-600">
              We may update this Privacy Policy periodically. We will notify you of any material changes by posting the new policy on this page.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
            <p className="text-gray-600 mb-6">
              If you have questions about this Privacy Policy, please contact us:
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