"use client";

import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams";
import { TextGenerateEffect } from "@/components/ui/aceternity/text-generate-effect";
import { Meteors } from "@/components/ui/aceternity/meteors";
import { Home, Info, BookOpen, GraduationCap, Phone, FileText, HelpCircle, MessageSquare, Map } from "lucide-react";

export default function Sitemap() {
  const sitemapSections = [
    {
      title: "Main Pages",
      icon: <Home className="w-5 h-5" />,
      links: [
        { name: "Home", url: "/" },
        { name: "About Us", url: "/about-us" },
        { name: "Contact Us", url: "/contact-us" },
      ]
    },
    {
      title: "Courses & Services",
      icon: <BookOpen className="w-5 h-5" />,
      links: [
        { name: "All Courses", url: "/courses" },
        { name: "Apply Now", url: "/apply-now" },
        { name: "Guidance", url: "/guidance" },
      ]
    },
    {
      title: "Support & Help",
      icon: <HelpCircle className="w-5 h-5" />,
      links: [
        { name: "FAQs", url: "/faqs" },
        { name: "Complaints", url: "/complaints" },
      ]
    },
    {
      title: "Legal & Policies",
      icon: <FileText className="w-5 h-5" />,
      links: [
        { name: "Terms & Conditions", url: "/terms-conditions" },
        { name: "Privacy Policy", url: "/privacy-policy" },
        { name: "Cookies Policy", url: "/cookies-policy" },
      ]
    },
    {
      title: "Administration",
      icon: <GraduationCap className="w-5 h-5" />,
      links: [
        { name: "Administration Panel", url: "/admin" },
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-secondary py-16 md:py-24 overflow-hidden">
        <BackgroundBeams className="absolute inset-0" />
        <div className="container mx-auto px-4 relative z-10">
          <TextGenerateEffect
            words="Sitemap"
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          />
          <div className="flex items-center gap-2 text-white/80">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-primary">Sitemap</span>
          </div>
        </div>
        <Meteors number={20} />
      </section>

      {/* Sitemap Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Map className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
              Website Navigation
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Find all the pages and resources available on our website. Click any link below to navigate directly to that page.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sitemapSections.map((section, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-bold text-secondary">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.url}
                        className="text-gray-700 hover:text-primary transition-colors flex items-center gap-2 py-1"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 bg-gradient-to-br from-secondary to-secondary/90 text-white p-8 rounded-xl text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
              <Phone className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Need Help Finding Something?</h3>
            <p className="mb-6 text-white/90 max-w-2xl mx-auto">
              Can&apos;t find what you&apos;re looking for? Our team is here to help you navigate our services.
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Quick Links Grid */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="/"
              className="p-4 bg-gray-50 hover:bg-primary/5 border-2 border-gray-200 hover:border-primary/30 rounded-lg text-center transition-all group"
            >
              <Home className="w-6 h-6 mx-auto mb-2 text-gray-600 group-hover:text-primary transition-colors" />
              <span className="text-sm font-semibold text-gray-700 group-hover:text-primary transition-colors">
                Home
              </span>
            </Link>

            <Link
              href="/courses"
              className="p-4 bg-gray-50 hover:bg-primary/5 border-2 border-gray-200 hover:border-primary/30 rounded-lg text-center transition-all group"
            >
              <BookOpen className="w-6 h-6 mx-auto mb-2 text-gray-600 group-hover:text-primary transition-colors" />
              <span className="text-sm font-semibold text-gray-700 group-hover:text-primary transition-colors">
                Courses
              </span>
            </Link>

            <Link
              href="/about-us"
              className="p-4 bg-gray-50 hover:bg-primary/5 border-2 border-gray-200 hover:border-primary/30 rounded-lg text-center transition-all group"
            >
              <Info className="w-6 h-6 mx-auto mb-2 text-gray-600 group-hover:text-primary transition-colors" />
              <span className="text-sm font-semibold text-gray-700 group-hover:text-primary transition-colors">
                About Us
              </span>
            </Link>

            <Link
              href="/contact-us"
              className="p-4 bg-gray-50 hover:bg-primary/5 border-2 border-gray-200 hover:border-primary/30 rounded-lg text-center transition-all group"
            >
              <MessageSquare className="w-6 h-6 mx-auto mb-2 text-gray-600 group-hover:text-primary transition-colors" />
              <span className="text-sm font-semibold text-gray-700 group-hover:text-primary transition-colors">
                Contact
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
