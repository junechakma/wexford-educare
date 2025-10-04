import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import { Particles } from "@/components/ui/particles";

export function Footer() {
  return (
    <footer className="bg-secondary text-white relative overflow-hidden">
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color="#dcb685"
        size={0.5}
      />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1 text-primary" />
                <p className="text-gray-300">
                  129 Mile End Road, London, E1 4BG, United Kingdom
                </p>
              </div>
              <div className="flex gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-primary" />
                <div className="space-y-1">
                  <Link
                    href="tel:+442033759568"
                    className="block text-gray-300 hover:text-primary transition-colors"
                  >
                    +44 20 3375 9568
                  </Link>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-primary" />
                <Link
                  href="mailto:info@wexfordeducare.com"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  info@wexfordeducare.com
                </Link>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 flex-shrink-0 mt-1 text-primary" />
                <div>
                  <p className="text-gray-300">Monday – Friday:</p>
                  <p className="text-gray-300">9:30 AM – 5:30 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary">Useful Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-conditions"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies-policy"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Cookies Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/login"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Administration Panel
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Access */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary">Quick Access</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/courses"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/apply-now"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Apply Now
                </Link>
              </li>
              <li>
                <Link
                  href="/complaints"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Complaints
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary">
              Wexford Educare
            </h3>
            <Link href="/" className="block relative w-full h-20 cursor-pointer mb-6">
              <Image
                src="/WObg-Wexford Education Long.png"
                alt="Wexford Educare"
                fill
                className="object-contain object-left hover:opacity-80 transition-opacity"
              />
            </Link>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="relative h-16 w-full">
                <Image
                  src="/images/footer/british.webp"
                  alt="British Council"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <div className="relative h-16 w-full">
                <Image
                  src="/images/footer/ico.webp"
                  alt="ICO Registered"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © 2025-26 Wexford Educare All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61581656609879"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.instagram.com/wexford_educare?igsh=d3BsYzFvazNnNTdn&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
