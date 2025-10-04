"use client";

import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams";
import { TextGenerateEffect } from "@/components/ui/aceternity/text-generate-effect";
import { Meteors } from "@/components/ui/aceternity/meteors";

export default function CookiesPolicy() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-secondary py-16 md:py-24 overflow-hidden">
        <BackgroundBeams className="absolute inset-0" />
        <div className="container mx-auto px-4 relative z-10">
          <TextGenerateEffect
            words="Cookies Policy"
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          />
          <div className="flex items-center gap-2 text-white/80">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-primary">Cookies Policy</span>
          </div>
        </div>
        <Meteors number={20} />
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Welcome to the official website of Wexford Educare (https://wexfordeducare.com). This Cookie Policy explains how we use cookies and similar technologies to recognize you when you visit our website, what these technologies are, and your rights to control our use of them.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              1. What are cookies?
            </h3>
            <p className="text-gray-700 mb-6">
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              2. How we use cookies
            </h3>
            <p className="text-gray-700 mb-4">We use cookies to:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Ensure the website functions properly</li>
              <li>Enhance your browsing experience</li>
              <li>Understand how you use our site</li>
              <li>Improve our services and content</li>
              <li>Provide relevant information and support</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              3. Types of cookies we use
            </h3>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-bold text-secondary mb-3">a. Essential cookies</h4>
              <p className="text-gray-700">
                These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually set in response to actions made by you, such as setting your privacy preferences or filling in forms.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-bold text-secondary mb-3">b. Performance and analytics cookies</h4>
              <p className="text-gray-700">
                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. We use tools like Google Analytics to track website usage and performance.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-bold text-secondary mb-3">c. Functionality cookies</h4>
              <p className="text-gray-700">
                These cookies allow the website to remember choices you make (such as your language or region) and provide enhanced, more personalized features.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-bold text-secondary mb-3">d. Targeting or advertising cookies</h4>
              <p className="text-gray-700">
                We may use these cookies to deliver content that is more relevant to you and your interests. They may also be used to limit the number of times you see an advertisement.
              </p>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              4. Third-party cookies
            </h3>
            <p className="text-gray-700 mb-6">
              Some cookies may be set by third-party services that appear on our pages. These third parties may collect data about your online activities over time and across different websites.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              5. Managing cookies
            </h3>
            <p className="text-gray-700 mb-4">
              You can control and manage cookies in various ways. Most browsers allow you to:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>View what cookies are stored</li>
              <li>Delete cookies</li>
              <li>Block cookies from being set</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Please note that disabling cookies may affect the functionality of our website. To manage your cookie preferences, you can usually find these settings in your browser&apos;s &ldquo;Options&rdquo; or &ldquo;Preferences&rdquo; menu.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              6. Changes to this cookie policy
            </h3>
            <p className="text-gray-700 mb-6">
              We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our services. When we do, we will revise the &ldquo;Last Updated&rdquo; date at the top of this page.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              7. Contact us
            </h3>
            <p className="text-gray-700 mb-4">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
            </p>
            <ul className="list-none text-gray-700 mb-6 space-y-2">
              <li><strong>Wexford Educare</strong></li>
              <li>129 Mile End Road, London, E1 4BG, United Kingdom</li>
              <li><strong>Email:</strong> info@wexfordeducare.com</li>
              <li><strong>Phone:</strong> +44 20 3375 9568</li>
            </ul>

            <p className="text-gray-600 text-sm mt-8">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
