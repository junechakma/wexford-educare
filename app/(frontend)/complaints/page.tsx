"use client";

import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams";
import { TextGenerateEffect } from "@/components/ui/aceternity/text-generate-effect";
import { Meteors } from "@/components/ui/aceternity/meteors";
import { Mail, Phone, MapPin, FileText, Clock, CheckCircle2 } from "lucide-react";

export default function Complaints() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-secondary py-16 md:py-24 overflow-hidden">
        <BackgroundBeams className="absolute inset-0" />
        <div className="container mx-auto px-4 relative z-10">
          <TextGenerateEffect
            words="Complaints Procedure"
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          />
          <div className="flex items-center gap-2 text-white/80">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-primary">Complaints</span>
          </div>
        </div>
        <Meteors number={20} />
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
              Our Commitment to You
            </h2>
            <p className="text-gray-700 mb-8">
              At Wexford Educare, we are committed to providing excellent service to all our students. However, we understand that there may be occasions when you feel our service has not met your expectations. We take all complaints seriously and aim to resolve them promptly and fairly.
            </p>

            {/* Complaints Process */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-xl mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-secondary mb-6 flex items-center gap-3">
                <FileText className="w-6 h-6 text-primary" />
                How to Make a Complaint
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary mb-2">Informal Resolution</h4>
                    <p className="text-gray-700">
                      We encourage you to first raise your concern directly with the staff member or consultant you have been working with. Many issues can be resolved quickly through direct communication.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary mb-2">Formal Complaint</h4>
                    <p className="text-gray-700">
                      If the issue is not resolved informally, or you prefer to make a formal complaint, please submit your complaint in writing. Include your name, contact details, a clear description of the issue, when it occurred, and what resolution you are seeking.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary mb-2">Acknowledgement</h4>
                    <p className="text-gray-700">
                      We will acknowledge receipt of your complaint within 2 working days and provide you with a reference number.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold text-primary">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary mb-2">Investigation</h4>
                    <p className="text-gray-700">
                      We will thoroughly investigate your complaint and aim to provide a full response within 10 working days. If we need more time, we will keep you informed of our progress.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold text-primary">5</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary mb-2">Resolution</h4>
                    <p className="text-gray-700">
                      Our response will explain our findings, the actions we have taken or will take, and any steps to prevent similar issues in the future.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What to Include */}
            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              What to Include in Your Complaint
            </h3>
            <p className="text-gray-700 mb-4">To help us handle your complaint efficiently, please provide:</p>
            <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
              <li>Your full name and contact details</li>
              <li>Your student reference number (if applicable)</li>
              <li>A clear description of the issue or concern</li>
              <li>The date(s) when the issue occurred</li>
              <li>Names of any staff members involved</li>
              <li>Any supporting documents or evidence</li>
              <li>What outcome or resolution you are seeking</li>
            </ul>

            {/* Timescales */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 flex items-center gap-3">
                <Clock className="w-6 h-6 text-primary" />
                Our Response Timescales
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Acknowledgement:</strong> Within 2 working days</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Full Response:</strong> Within 10 working days</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Complex Cases:</strong> Up to 20 working days (we will keep you updated)</span>
                </li>
              </ul>
            </div>

            {/* Further Steps */}
            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 mt-8">
              If You&apos;re Not Satisfied
            </h3>
            <p className="text-gray-700 mb-6">
              If you are not satisfied with our response, you can request a review by our senior management team. Please clearly explain why you remain dissatisfied and what further action you would like us to take. We will review your case and provide a final response within 15 working days.
            </p>

            {/* Contact Information */}
            <div className="bg-secondary text-white p-8 rounded-xl mt-12">
              <h3 className="text-xl md:text-2xl font-bold mb-6">How to Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 flex-shrink-0 text-primary mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a
                      href="mailto:info@wexfordeducare.com"
                      className="text-white/90 hover:text-primary transition-colors"
                    >
                      info@wexfordeducare.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 flex-shrink-0 text-primary mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <a
                      href="tel:+442033759568"
                      className="text-white/90 hover:text-primary transition-colors"
                    >
                      +44 20 3375 9568
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 flex-shrink-0 text-primary mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Address</p>
                    <p className="text-white/90">
                      129 Mile End Road<br />
                      London, E1 4BG<br />
                      United Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 flex-shrink-0 text-primary mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Office Hours</p>
                    <p className="text-white/90">
                      Monday – Friday: 9:30 AM – 5:30 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Protection */}
            <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded">
              <h4 className="font-bold text-secondary mb-2">Data Protection</h4>
              <p className="text-gray-700 text-sm">
                All complaints are handled in accordance with our Privacy Policy and data protection regulations. We will only use your personal information to investigate and respond to your complaint.
              </p>
            </div>

            <p className="text-gray-600 text-sm mt-8">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
