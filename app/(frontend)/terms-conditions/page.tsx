"use client";

import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams";
import { TextGenerateEffect } from "@/components/ui/aceternity/text-generate-effect";
import { Meteors } from "@/components/ui/aceternity/meteors";

export default function TermsConditions() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-secondary py-16 md:py-24 overflow-hidden">
        <BackgroundBeams className="absolute inset-0" />
        <div className="container mx-auto px-4 relative z-10">
          <TextGenerateEffect
            words="Terms & Conditions"
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          />
          <div className="flex items-center gap-2 text-white/80">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-primary">Terms & Conditions</span>
          </div>
        </div>
        <Meteors number={20} />
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              This website at wexfordeducare.com (the &ldquo;Website&rdquo; or the &ldquo;site&rdquo;) is solely owned and operated by Wexford Educare. Before using our website, you are requested to take a few moments to read our terms and conditions carefully. These terms are considered as agreement between you, the user(s) of Wexford Educare (hereinafter referred to as &ldquo;You&rdquo;, &ldquo;Your&rdquo;, or &ldquo;User&rdquo;) and Wexford Educare (hereinafter referred to as &ldquo;We&rdquo;, &ldquo;Our&rdquo;, &ldquo;Us&rdquo;, or &ldquo;wexfordeducare.com&rdquo;).
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              Acceptance of Terms
            </h3>
            <p className="text-gray-700 mb-6">
              By accessing our website – wexfordeducare.com, you are deemed to have accepted all the terms and conditions listed below, and you are bound by these terms till you access our website. If you do not agree to the terms and conditions for this website, please refrain from using the website or using any of its services.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              Use of the Website
            </h3>
            <p className="text-gray-700 mb-6">
              You are not allowed to use our website for any commercial purposes without our prior written consent. All rights of this website are owned by Wexford Educare, you are prohibited to copy, save, or commercially use any content of this website without Wexford Educare&apos;s written permission.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              Use of Services
            </h3>
            <p className="text-gray-700 mb-6">
              You agree to use our services for lawful purposes and in compliance with these terms and any applicable laws and regulations. You will not engage in any activity that may disrupt or interfere with the proper functioning of our services.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              Services Offered
            </h3>
            <p className="text-gray-700 mb-6">
              Wexford Educare offers educational consultancy services related to higher education in the UK. Our services are designed to advise and support students who are looking for opportunities related to higher education and career.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              Eligibility
            </h3>
            <p className="text-gray-700 mb-6">
              To use our services, you must be at least 18 years old or be able to enter into agreements legally in your jurisdiction. You represent and warrant that you meet these requirements in order to use our services.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              Personal Information
            </h3>
            <p className="text-gray-700 mb-6">
              We understand the significance of protecting your privacy. To know how we use and manage the information you provide while you are using our services, read our Privacy Policy. Following our privacy policy, we collect and handle user&apos;s personal information. By using our services, you consent to the collection, use, and sharing of your information as described in our Privacy Policy.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              Intellectual Property
            </h3>
            <p className="text-gray-700 mb-6">
              Our website and its entire content, features, and functionality, including but not limited to all information, software, text, displays, images, video, and audio, are owned and protected by Wexford Educare, usage of them is limited to Wexford Educare authority only. You are not permitted to use, reproduce, or distribute any of the aforementioned content without written permission from Wexford Educare.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              Limitation of Liability
            </h3>
            <p className="text-gray-700 mb-6">
              Although we make every effort to offer accurate and trustworthy information, we cannot guarantee the accuracy, completeness, or reliability of provided information. We will not be liable for any damages, whether direct, indirect, incidental, special, or consequential, resulting from the use of our website or any information, or services acquired through our website.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              Governing Law
            </h3>
            <p className="text-gray-700 mb-6">
              These terms and conditions shall be governed by and construed in accordance with UK laws.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              Changes to the Site Disclaimer
            </h3>
            <p className="text-gray-700 mb-6">
              We reserve the right to revise the site disclaimer from time to time. In this case, we will notify you about the updated site disclaimer via our website and social media platforms. If you do not wish to accept the revised site disclaimer, you are requested to refrain from using our website.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              Fraudulent Use of Website
            </h3>
            <p className="text-gray-700 mb-6">
              If our website is used fraudulently by user(s), we reserve the right to recover service costs, relevant fees, damages caused to Wexford Educare and legal expenses from user(s). We reserve the right to instigate legal proceedings against such user(s) for fraudulent use of the site and any other unlawful acts in breach of these terms and conditions.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              External Materials
            </h3>
            <p className="text-gray-700 mb-6">
              The website may include links to external (mostly third-party) websites which are not under our control, we do not monitor or endorse them. Therefore, we cannot be responsible for these websites and cannot provide any warranty for them.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              Your Submissions and Unsolicited Communications
            </h3>
            <p className="text-gray-700 mb-6">
              We will consider any unsolicited communication or material you send to us via email or another method, or via our website or social media channels, including but not limited to data, questions or answers, comments, suggestions, or the like, as non-proprietary and non-confidential. By sending unsolicited communications to us, you automatically grant us to use the information for any purpose, including but not limited to reproduction, disclosure, transmission, publication, broadcast and posting, or developing, and promoting products.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              Indemnification
            </h3>
            <p className="text-gray-700 mb-6">
              You agree to indemnify and hold Wexford Educare harmless from any claims, losses, damages, liabilities, costs, or expenses arising from your use of our services or violation of these terms.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              Termination
            </h3>
            <p className="text-gray-700 mb-6">
              If you violate these terms or engage in activities that may harm our platform or reputation, we reserve the right to suspend or terminate your access to our services at any time without prior notice. Following termination, you may be restricted from using our website or the services.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              Contact Us
            </h3>
            <p className="text-gray-700 mb-4">
              For any queries regarding these terms and conditions, or any improvement suggestions or complaints, feel free to contact us:
            </p>
            <ul className="list-none text-gray-700 mb-6 space-y-2">
              <li><strong>Email:</strong> info@wexfordeducare.com</li>
              <li><strong>Phone:</strong> +44 20 3375 9568</li>
              <li><strong>Address:</strong> 129 Mile End Road, London, E1 4BG, United Kingdom</li>
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
