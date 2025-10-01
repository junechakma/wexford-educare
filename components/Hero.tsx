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
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleSlideChange((currentSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleSlideChange = (index: number) => {
    if (isTransitioning || index === currentSlide) return;

    setIsTransitioning(true);
    setCurrentSlide(index);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 700);
  };

  return (
    <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-blue-100 overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      <div className="w-full px-4 py-20">
        <div className="relative w-full">
          {/* Fixed height container to prevent layout shift - Full width */}
          <div className="min-h-[400px] relative w-full overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 w-full transition-all duration-700 ease-in-out ${
                  index === currentSlide
                    ? "opacity-100 translate-x-0 z-10"
                    : index < currentSlide
                    ? "opacity-0 -translate-x-full z-0"
                    : "opacity-0 translate-x-full z-0"
                }`}
                style={{
                  pointerEvents: index === currentSlide ? 'auto' : 'none',
                }}
              >
                <div className="max-w-6xl mx-auto text-center px-4">
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-navy)] via-[var(--color-navy-light)] to-[var(--color-gold)]">
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
                            ? "bg-gradient-to-r from-[var(--color-navy)] to-[var(--color-gold)] text-white hover:shadow-xl hover:scale-105"
                            : "bg-white text-[var(--color-navy)] border-2 border-[var(--color-navy)] hover:bg-[var(--color-navy)] hover:text-white hover:shadow-xl"
                        }`}
                      >
                        {cta.text}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              disabled={isTransitioning}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? "bg-[var(--color-gold)] w-8 h-3"
                  : "bg-gray-300 hover:bg-gray-400 w-3 h-3"
              } ${isTransitioning ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
