"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Habibul Basar",
    role: "Student",
    text: "Thanks to Wexford Educare, I was able to navigate the complex application process with ease. Their personalized support and dedication to my success were truly remarkable. I couldn't have done it without them.",
    image: "/images/placeholder.png",
  },
  {
    name: "Maradon Radu",
    role: "Student",
    text: "I was worried about how to manage my work and studies, but Wexford Educare's flexible schedules and comprehensive support made it possible.",
    image: "/images/placeholder.png",
  },
  {
    name: "Awais Hussain Khan",
    role: "Student",
    text: "I am so grateful for Wexford Educare's support in my university application process. They made it stress-free.",
    image: "/images/placeholder.png",
  },
  {
    name: "Fatima Ahmed",
    role: "CEO",
    text: "Applying from another country felt overwhelming. Wexford Educare handled everything, from finding the right university to helping me understand the visa requirements. Their team is knowledgeable and incredibly patient.",
    image: "/images/placeholder.png",
  },
  {
    name: "Mrs. S. Rahman",
    role: "Student",
    text: "As a parent, I was worried about my daughter's application. The team at Wexford Educare was professional, transparent, and kept us informed at every step. We couldn't be happier with the outcome.",
    image: "/images/placeholder.png",
  },
  {
    name: "Michael Adebayo",
    role: "Student",
    text: "Professional, efficient, and genuinely caring. The best educational consultants you could ask for. They don't just find you a university; they find you the right university.",
    image: "/images/placeholder.png",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + itemsPerView) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [itemsPerView]);

  const visibleTestimonials = [];
  for (let i = 0; i < itemsPerView; i++) {
    visibleTestimonials.push(
      testimonials[(currentIndex + i) % testimonials.length]
    );
  }

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - itemsPerView + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + itemsPerView) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1e293b]">
            Testimonials
          </h2>
          <p className="text-xl text-gray-600">
            What our students say about us
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <Quote className="w-12 h-12 text-[#d4af37] mb-4 opacity-50" />
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-[#1e293b] to-[#d4af37]">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1e293b]">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-[#1e293b] to-[#d4af37] text-white hover:shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
              aria-label="Previous testimonials"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-[#1e293b] to-[#d4af37] text-white hover:shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
              aria-label="Next testimonials"
            >
              →
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from(
              { length: Math.ceil(testimonials.length / itemsPerView) },
              (_, i) => i
            ).map((index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * itemsPerView)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / itemsPerView) === index
                    ? "bg-[#d4af37] w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial group ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
