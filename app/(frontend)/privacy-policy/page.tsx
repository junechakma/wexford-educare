"use client";

import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams";
import { TextGenerateEffect } from "@/components/ui/aceternity/text-generate-effect";
import { Meteors } from "@/components/ui/aceternity/meteors";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-secondary py-16 md:py-24 overflow-hidden">
        <BackgroundBeams className="absolute inset-0" />
        <div className="container mx-auto px-4 relative z-10">
          <TextGenerateEffect
            words="Privacy Policy"
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          />
          <div className="flex items-center gap-2 text-white/80">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-primary">Privacy Policy</span>
          </div>
        </div>
        <Meteors number={20} />
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-4">
              <strong>Effective Date:</strong> January 2025
            </p>
            <p className="text-gray-700 mb-6">
              <strong>Address:</strong> 129 Mile End Road, London, E1 4BG, United Kingdom
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
              About Us
            </h2>
            <p className="text-gray-700 mb-4">
              <strong>Who We Are:</strong> Wexford Educare is a UK educational consultancy that helps students apply to universities. We operate across London and surrounding areas.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>What We Do:</strong> We help eligible students (British citizens, EU citizens, and people with settlement status) apply to UK universities and secure funding.
            </p>
            <p className="text-gray-700 mb-6">
              <strong>Contact Information:</strong>
            </p>
            <ul className="list-none text-gray-700 mb-8 space-y-2">
              <li><strong>General Email:</strong> info@wexfordeducare.com</li>
              <li><strong>Privacy Questions:</strong> privacy@wexfordeducare.com</li>
              <li><strong>Phone:</strong> +44 20 3375 9568</li>
              <li><strong>Address:</strong> 129 Mile End Road, London, E1 4BG</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6 mt-8">
              Information We Collect
            </h2>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4">
              When You First Contact Us (Website/Facebook Forms)
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Your name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>City/location</li>
              <li>Immigration status (British citizen, EU settled status, etc.) – This is sensitive data and receives special protection</li>
              <li>Course interests</li>
              <li>Best time to contact you</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              If You Decide to Apply Through Us
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>CV and work history</li>
              <li>Educational qualifications and certificates</li>
              <li>Passport copy (temporarily – deleted after use)</li>
              <li>Immigration sharecode (if applicable)</li>
              <li>Proof of address</li>
              <li>Any other documents needed for your university application</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              In Our Student Management System
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Basic contact details</li>
              <li>Application progress updates</li>
              <li>University responses</li>
              <li>Simple analytics about our service (anonymized)</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              How We Collect Information
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Website forms on wexfordeducare.com</li>
              <li>Facebook lead ads (privacy policy link included in all forms)</li>
              <li>Phone calls when we contact you</li>
              <li>WhatsApp and email when you send us documents</li>
              <li>Universities when they update us on your application status</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6 mt-8">
              Legal Basis for Processing Your Data
            </h2>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4">
              For Initial Contact and Marketing
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Consent:</strong> You agree when filling our forms and can withdraw anytime</li>
              <li><strong>Legitimate Interest:</strong> Following up on your education enquiry</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              For University Applications
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Contract:</strong> Providing the consultancy service you requested</li>
              <li><strong>Legal Obligation:</strong> Meeting university and immigration requirements</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              For Immigration Status (Sensitive Data)
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Explicit Consent:</strong> You specifically agree to share this information</li>
              <li><strong>Necessary for Contract:</strong> Required to determine your eligibility for courses and funding</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6 mt-8">
              How We Use Your Information
            </h2>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4">
              Initial Process
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Contact you after you fill our forms</li>
              <li>Assess your eligibility for courses and funding</li>
              <li>Provide advice about suitable universities and programs</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              If You Proceed with Our Service
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Prepare your applications to universities</li>
              <li>Submit applications on your behalf</li>
              <li>Track progress and keep you updated</li>
              <li>Provide ongoing support throughout the process</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              Business Operations
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Keep records of our service to you</li>
              <li>Improve our service using anonymized data</li>
              <li>Comply with legal requirements</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6 mt-8">
              Who We Share Your Data With
            </h2>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4">
              Universities and Colleges
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>We share your application documents with universities you&apos;re applying to</li>
              <li>This includes all documents you provide us (CV, qualifications, etc.)</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              Government Bodies (When Required)
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Student finance organizations for funding applications</li>
              <li>Immigration authorities if legally required</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              Our Service Providers
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Student management system (secure UK-based system)</li>
              <li>Email services for communications</li>
              <li>WhatsApp Business for document sharing</li>
            </ul>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
              <h4 className="font-bold text-secondary mb-2">We DO NOT:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Sell your data to anyone</li>
                <li>Share with marketing companies</li>
                <li>Give data to other education agencies</li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6 mt-8">
              Data Security
            </h2>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4">
              How We Protect Your Data
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Secure passwords and restricted access to our systems</li>
              <li>Encrypted storage for sensitive documents</li>
              <li>Staff training on data protection</li>
              <li>Regular deletion of documents we no longer need</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              Document Handling
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Passport copies are deleted immediately after university submission</li>
              <li>WhatsApp messages with documents are deleted after processing</li>
              <li>Email attachments are securely stored then deleted when no longer needed</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              If Something Goes Wrong
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>We have procedures to detect and respond to data breaches</li>
              <li>We&apos;ll notify you and the ICO if required by law</li>
              <li>We regularly backup data securely to prevent loss</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6 mt-8">
              Data Retention Periods
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-3">
              <li><strong>Initial enquiry details:</strong> We keep this information for 2 years to follow up with you and maintain business records</li>
              <li><strong>Application documents:</strong> We retain these for 1 year after our service ends to meet legal requirements and resolve any disputes</li>
              <li><strong>Passport copies:</strong> These are deleted immediately after university admission for security best practice</li>
              <li><strong>Marketing preferences:</strong> We keep these until you opt out to respect your communication preferences</li>
            </ul>
            <p className="text-gray-700 mb-6">
              <strong>Secure Deletion:</strong> When retention periods end, we securely delete all data so it cannot be recovered.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6 mt-8">
              Your Rights
            </h2>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4">
              What You Can Do
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Access your data:</strong> Request a copy of information we hold about you</li>
              <li><strong>Correct mistakes:</strong> Ask us to fix incorrect or incomplete information</li>
              <li><strong>Delete your data:</strong> Request deletion (with some exceptions for legal requirements)</li>
              <li><strong>Stop marketing:</strong> Opt out of promotional communications anytime</li>
              <li><strong>Object to processing:</strong> Ask us to stop using your data for certain purposes</li>
              <li><strong>Data portability:</strong> Receive your data in a standard format to take elsewhere</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              How to Exercise Your Rights
            </h3>
            <ul className="list-none text-gray-700 mb-6 space-y-2">
              <li><strong>Email:</strong> privacy@wexfordeducare.com</li>
              <li><strong>Phone:</strong> +44 20 3375 9568</li>
              <li><strong>Post:</strong> Data Protection Officer, Wexford Educare, 129 Mile End Road, London, E1 4BG</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              We Will
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Respond within 1 month (usually much faster)</li>
              <li>Provide information free of charge</li>
              <li>Ask for ID to protect your privacy</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              If You&apos;re Not Happy
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Contact us first:</strong> We want to resolve any concerns</li>
              <li><strong>Contact the ICO:</strong> The UK data protection authority at ico.org.uk or 0303 123 1113</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6 mt-8">
              Cookies and Website Tracking
            </h2>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4">
              What We Use
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Essential cookies:</strong> To make our website work properly</li>
              <li><strong>Analytics cookies:</strong> To understand how people use our site (Google Analytics)</li>
              <li><strong>Facebook tracking:</strong> To measure our advertising effectiveness</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              Your Control
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>You can control cookies through your browser settings</li>
              <li>Our website will ask permission for non-essential cookies</li>
              <li>You can opt out of analytics and advertising cookies anytime</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6 mt-8">
              International Transfers
            </h2>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4">
              Current Situation
            </h3>
            <p className="text-gray-700 mb-4">We primarily work in the UK, but may need to transfer data:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>To universities in other countries if you apply there</li>
              <li>To cloud services that store data securely in approved countries</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              How We Protect You
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Only transfer to countries with adequate data protection</li>
              <li>Use legal contracts with extra protection clauses</li>
              <li>Always inform you before any international transfer</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6 mt-8">
              Special Protections
            </h2>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4">
              If You&apos;re Under 18
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>We may need parental consent for some activities</li>
              <li>We take extra care with children&apos;s data</li>
              <li>We follow UK safeguarding requirements</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              Immigration Status Data
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>This is sensitive personal data under UK law</li>
              <li>We store it separately with extra security</li>
              <li>We only use it to assess your eligibility for courses and funding</li>
              <li>You can ask us to delete it anytime (subject to legal requirements)</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              WhatsApp and Email Security
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>We use WhatsApp Business with enhanced security</li>
              <li>Email communications are via secure email providers</li>
              <li>We regularly delete messages containing documents</li>
              <li>We advise you to avoid sending sensitive documents unless necessary</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6 mt-8">
              Facebook Lead Ads Compliance
            </h2>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4">
              What We Do
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Include a direct link to this privacy policy in all Facebook lead forms</li>
              <li>Only collect information necessary for our service</li>
              <li>Get your consent before contacting you</li>
              <li>You can opt out anytime</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              Your Rights
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Facebook and we are both responsible for protecting your data from lead ads</li>
              <li>You have the same rights for Facebook data as for data collected directly</li>
              <li>You can request deletion from both Facebook and us</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6 mt-8">
              University Partnership Compliance
            </h2>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4">
              Quality Standards
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>We follow UK education agent quality standards</li>
              <li>We comply with partner university data protection requirements</li>
              <li>We maintain professional standards and ethical practices</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              When We Apply for You
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>We only share information necessary for your application</li>
              <li>We get your consent before submitting to each university</li>
              <li>We keep you informed of all communications</li>
              <li>We maintain confidentiality throughout the process</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6 mt-8">
              Changes to This Policy
            </h2>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4">
              When We Update
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Legal requirements change</li>
              <li>Our services change</li>
              <li>Technology changes</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              How We Tell You
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Email to all registered users for major changes</li>
              <li>Notice on our website for minor updates</li>
              <li>Always post the latest version at wexfordeducare.com</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6 mt-8">
              Legal Information
            </h2>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4">
              Laws We Follow
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>UK General Data Protection Regulation (UK GDPR)</li>
              <li>Data Protection Act 2018</li>
              <li>Privacy and Electronic Communications Regulations</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              This Policy
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Effective from January 2025</li>
              <li>Reviewed annually</li>
              <li>Approved by Wexford Educare management</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6 mt-8">
              Quick Reference Guide
            </h2>
            <ul className="list-none text-gray-700 mb-8 space-y-2">
              <li><strong>Privacy Questions:</strong> privacy@wexfordeducare.com</li>
              <li><strong>Opt Out of Marketing:</strong> Click unsubscribe in any email or contact us</li>
              <li><strong>Request Your Data:</strong> Email privacy@wexfordeducare.com with ID</li>
              <li><strong>Make a Complaint:</strong> First contact us, then ICO at ico.org.uk if needed</li>
              <li><strong>Delete Your Data:</strong> Email privacy@wexfordeducare.com (some legal exceptions apply)</li>
            </ul>

            <p className="text-gray-600 text-sm mt-8">
              <strong>Last Updated:</strong> January 2025 | <strong>Next Review:</strong> January 2026
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
