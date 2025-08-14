import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-white py-16 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-6">Cookie Policy</h1>
          <p className="text-lg text-gray-600 mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p className="text-gray-600">
            This Cookie Policy explains how we use cookies and similar tracking technologies on our website.
          </p>
        </div>

        {/* Content Sections */}
        <div className="max-w-3xl mx-auto space-y-12">
          {/* What are Cookies */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">What are Cookies?</h2>
            <p className="text-gray-600 mb-4">
              Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Remembering your preferences and settings</li>
              <li>Understanding how you use our website</li>
              <li>Improving our services based on your behavior</li>
              <li>Providing you with personalized content and recommendations</li>
            </ul>
          </section>

          {/* Types of Cookies */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">Essential Cookies</h3>
                <p className="text-gray-600">
                  These cookies are necessary for the website to function properly. They enable basic functions like page navigation, secure areas access, and booking functionality.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Performance Cookies</h3>
                <p className="text-gray-600">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Functionality Cookies</h3>
                <p className="text-gray-600">
                  These cookies allow the website to remember choices you make (such as your preferred currency or language) and provide enhanced features.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Marketing Cookies</h3>
                <p className="text-gray-600">
                  These cookies track your visit across our website and help us deliver more relevant advertising content. They may be set by us or our advertising partners.
                </p>
              </div>
            </div>
          </section>

          {/* Cookie Management */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Managing Your Cookie Preferences</h2>
            <p className="text-gray-600 mb-4">
              You can control and/or delete cookies as you wish. You can delete all cookies that are already on your device and you can set most browsers to prevent them from being placed.
            </p>
            <p className="text-gray-600 mb-6">
              To modify your cookie settings, you can:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Adjust your browser settings to manage cookies</li>
              <li>Use private/incognito browsing mode</li>
              <li>Clear your browser cache and cookies</li>
              <li>Use our cookie preference center to customize your settings</li>
            </ul>
          </section>

          {/* Updates to Policy */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
            <p className="text-gray-600">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for operational, legal, or regulatory reasons. We encourage you to periodically review this page for the latest information on our cookie practices.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about our use of cookies, please contact us:
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