"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { WavyBackground } from "./ui/wavy-background";
import { TextGenerateEffect } from "./ui/text-generate-effect";
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

export function AceternityHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleSlideChange((currentSlide + 1) % slides.length);
    }, 8000);
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
    <WavyBackground
      className="min-h-[600px] flex items-center justify-center"
      containerClassName="min-h-[600px]"
      colors={["#1e293b", "#334155", "#d4af37", "#f4d03f", "#1e3a8a"]}
      waveWidth={80}
      backgroundFill="rgba(255,255,255,0.98)"
      blur={12}
      speed="slow"
      waveOpacity={0.3}
    >
      <div className="w-full px-4 py-20">
        <div className="relative w-full">
          <div className="min-h-[400px] relative w-full overflow-hidden">
            {slides.map((slide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: index === currentSlide ? 1 : 0,
                  x: index === currentSlide ? 0 : index < currentSlide ? -100 : 100,
                  display: index === currentSlide ? 'block' : 'none',
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 w-full"
                style={{
                  pointerEvents: index === currentSlide ? 'auto' : 'none',
                }}
              >
                <div className="max-w-6xl mx-auto text-center px-4">
                  <TextGenerateEffect
                    words={slide.heading}
                    className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-navy)] via-[var(--color-navy-light)] to-[var(--color-gold)]"
                    duration={0.8}
                    staggerDelay={0.1}
                  />

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed max-w-4xl mx-auto"
                  >
                    {slide.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="flex gap-4 justify-center flex-wrap"
                  >
                    {slide.ctas.map((cta, ctaIndex) => (
                      <Link
                        key={ctaIndex}
                        href={cta.href}
                        className={`group relative px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 overflow-hidden ${
                          ctaIndex === 0
                            ? "bg-gradient-to-r from-[var(--color-navy)] to-[var(--color-gold)] text-white hover:shadow-2xl hover:scale-105"
                            : "bg-white text-[var(--color-navy)] border-2 border-[var(--color-navy)] hover:bg-[var(--color-navy)] hover:text-white hover:shadow-xl"
                        }`}
                      >
                        <span className="relative z-10">{cta.text}</span>
                        {ctaIndex === 0 && (
                          <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-navy)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        )}
                      </Link>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-16">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              disabled={isTransitioning}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? "bg-[var(--color-gold)] w-12 h-3 shadow-lg"
                  : "bg-gray-300 hover:bg-gray-400 w-3 h-3"
              } ${isTransitioning ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </WavyBackground>
  );
}
