"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Menu, X, Search } from "lucide-react";

export function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Homepage", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Courses", href: "/courses" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "Guidance", href: "/guidance" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-3 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Social Media */}
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/blossomEducare"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="hover:text-purple-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>

            {/* Contact Info */}
            <div className="flex gap-6 text-sm">
              <Link
                href="tel:+447437402307"
                className="hover:text-purple-400 transition-colors"
              >
                +447437402307
              </Link>
              <span className="text-gray-500">|</span>
              <Link
                href="mailto:info@blossomeducare.co.uk"
                className="hover:text-purple-400 transition-colors"
              >
                info@blossomeducare.co.uk
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`transition-all duration-300 ${
          isSticky
            ? "fixed top-0 left-0 right-0 bg-white shadow-lg z-50"
            : "bg-white"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative w-16 h-16">
                <Image
                  src="/images/cropped-blossom-logo-removebg.png"
                  alt="Blossom Educare"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              <button
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5 text-gray-700" />
              </button>

              <Link
                href="/apply-now"
                className="hidden md:block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Apply Now
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <nav className="lg:hidden pb-4 border-t">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-3 text-gray-700 hover:text-purple-600 hover:bg-gray-50 px-4 rounded transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/apply-now"
                className="block mt-4 mx-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Apply Now
              </Link>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
