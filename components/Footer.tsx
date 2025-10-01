import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1 text-purple-400" />
                <p className="text-gray-300">
                  129 Mile End Road, London, E1 4BG, United Kingdom
                </p>
              </div>
              <div className="flex gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-purple-400" />
                <div className="space-y-1">
                  <Link
                    href="tel:02080894489"
                    className="block text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    02080894489
                  </Link>
                  <Link
                    href="tel:+447437402307"
                    className="block text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    WhatsApp: +447437402307
                  </Link>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-purple-400" />
                <Link
                  href="mailto:info@blossomeducare.co.uk"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  info@blossomeducare.co.uk
                </Link>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 flex-shrink-0 mt-1 text-purple-400" />
                <div>
                  <p className="text-gray-300">Monday – Friday:</p>
                  <p className="text-gray-300">9:30 AM – 5:30 PM</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Company Number: 13810286
              </p>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Useful Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-conditions"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies-policy"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Cookies Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/admin"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Administration Panel
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Access */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Access</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/courses"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/apply-now"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Apply Now
                </Link>
              </li>
              <li>
                <Link
                  href="/complaints"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Complaints
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Accreditations */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Accreditations & Customer Trust
            </h3>
            <div className="space-y-6">
              <div className="relative w-full h-20">
                <Image
                  src="/images/cropped-blossom-logo-removebg.png"
                  alt="Blossom Educare"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <div className="flex gap-4">
                <div className="relative w-24 h-16 bg-white rounded p-2">
                  <Image
                    src="/images/british.webp"
                    alt="British Council"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-24 h-16 bg-white rounded p-2">
                  <Image
                    src="/images/ico.webp"
                    alt="ICO"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2020 - 2025 Blossom Educare | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
