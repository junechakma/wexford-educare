"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const slides = [
  {
    heading: "Ready to Succeed in Your Studies?",
    description:
      "Unlock your potential with our personalized support and expert guidance. We're here to help local, EU, and international students thrive on their educational journey.",
    ctas: [
      { text: "Explore Courses", href: "/courses" },
      { text: "Apply Now", href: "/apply-now" },
    ],
    image: "/images/homepage/hero-scaled.jpg",
  },
  {
    heading: "Your Career Starts Here.",
    description:
      "Blossom Educare connects you with the right courses to achieve your professional ambitions.",
    ctas: [{ text: "Find Your Course", href: "/courses" }],
    image: "/images/homepage/african-american-student-smiles-sincerely-while-si-2025-01-09-22-07-27-utc-min-scaled.jpg",
  },
  {
    heading: "Secure Your Admission to a UK University",
    description:
      "Ready to study in the UK? Our expert consultants are here to help students from all backgrounds achieve their goals. Begin your application with our support.",
    ctas: [{ text: "APPLY NOW", href: "/apply-now" }],
    image: "/images/homepage/water-of-leith-walkway-in-edimburgh-city.jpg",
  },
];

export function AceternityHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSlideChange = (index: number) => {
    if (isTransitioning || index === currentSlide) return;

    setIsTransitioning(true);
    setCurrentSlide(index);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="relative w-full min-h-[600px] overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;

        return (
          <motion.div
            key={`bg-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: isActive ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
            style={{ pointerEvents: 'none' }}
          >
            <Image
              src={slide.image}
              alt={slide.heading}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        );
      })}

      {/* Content */}
      <div className="relative w-full py-20 min-h-[600px]">
        <div className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
          {slides.map((slide, index) => {
            const isActive = index === currentSlide;
            const isPrev = index < currentSlide;

            return (
              <motion.div
                key={`slide-${index}`}
                initial={{ x: 100, opacity: 0 }}
                animate={{
                  x: isActive ? 0 : isPrev ? -100 : 100,
                  opacity: isActive ? 1 : 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className={`absolute inset-0 w-full flex items-center justify-center ${
                  isActive ? 'z-10' : 'z-0'
                }`}
                style={{
                  pointerEvents: isActive ? 'auto' : 'none',
                }}
              >
              <div className="container mx-auto text-center px-4 w-full">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight drop-shadow-lg">
                  {slide.heading}
                </h1>

                <p className="text-lg md:text-xl lg:text-2xl text-white mb-10 leading-relaxed max-w-4xl mx-auto drop-shadow-md">
                  {slide.description}
                </p>

                  <div className="flex gap-4 justify-center flex-wrap">
                    {slide.ctas.map((cta, ctaIndex) => (
                      <Link
                        key={ctaIndex}
                        href={cta.href}
                        className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
                          ctaIndex === 0
                            ? "bg-secondary text-primary hover:shadow-2xl hover:scale-105"
                            : "bg-white text-secondary border-2 border-secondary hover:bg-secondary hover:text-primary hover:shadow-xl"
                        }`}
                      >
                        {cta.text}
                      </Link>
                    ))}
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              disabled={isTransitioning}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? "bg-primary w-12 h-3 shadow-lg"
                  : "bg-white/70 hover:bg-white w-3 h-3"
              } ${isTransitioning ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
