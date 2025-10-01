"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    heading: "Ready to Succeed in Your Studies?",
    description:
      "Unlock your potential with our personalized support and expert guidance. We're here to help local, EU, and international students thrive on their educational journey.",
    ctas: [
      { text: "Explore Courses", href: "/courses" },
      { text: "Apply Now", href: "/apply-now" },
    ],
  },
  {
    heading: "Your Career Starts Here.",
    description:
      "Wexford Educare connects you with the right courses to achieve your professional ambitions.",
    ctas: [{ text: "Find Your Course", href: "/courses" }],
  },
  {
    heading: "Secure Your Admission to a UK University",
    description:
      "Ready to study in the UK? Our expert consultants are here to help students from all backgrounds achieve their goals. Begin your application with our support.",
    ctas: [{ text: "APPLY NOW", href: "/apply-now" }],
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-blue-100 overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                index === currentSlide
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 absolute translate-y-4 pointer-events-none"
              }`}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#1e293b] via-[#334155] to-[#d4af37]">
                {slide.heading}
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                {slide.description}
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                {slide.ctas.map((cta, ctaIndex) => (
                  <Link
                    key={ctaIndex}
                    href={cta.href}
                    className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
                      ctaIndex === 0
                        ? "bg-gradient-to-r from-[#1e293b] to-[#d4af37] text-white hover:shadow-xl hover:scale-105"
                        : "bg-white text-[#1e293b] border-2 border-[#1e293b] hover:bg-[#1e293b] hover:text-white hover:shadow-xl"
                    }`}
                  >
                    {cta.text}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-[#d4af37] w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
