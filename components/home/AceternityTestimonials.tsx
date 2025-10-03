"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    quote: "Thanks to Wexford Educare, I was able to navigate the complex application process with ease. Their personalized support and dedication to my success were truly remarkable. I couldn't have done it without them.",
    name: "Habibul Basar",
    designation: "Student",
    src: "/images/homepage/testimonial.jpg",
  },
  {
    quote: "I was worried about how to manage my work and studies, but Wexford Educare's flexible schedules and comprehensive support made it possible.",
    name: "Maradon Radu",
    designation: "Student",
    src: "/images/homepage/testimonial.jpg",
  },
  {
    quote: "I am so grateful for Wexford Educare's support in my university application process. They made it stress-free.",
    name: "Awais Hussain Khan",
    designation: "Student",
    src: "/images/homepage/testimonial.jpg",
  },
  {
    quote: "Applying from another country felt overwhelming. Wexford Educare handled everything, from finding the right university to helping me understand the visa requirements. Their team is knowledgeable and incredibly patient.",
    name: "Fatima Ahmed",
    designation: "CEO",
    src: "/images/homepage/testimonial.jpg",
  },
  {
    quote: "As a parent, I was worried about my daughter's application. The team at Wexford Educare was professional, transparent, and kept us informed at every step. We couldn't be happier with the outcome.",
    name: "Mrs. S. Rahman",
    designation: "Student",
    src: "/images/homepage/testimonial.jpg",
  },
  {
    quote: "Professional, efficient, and genuinely caring. The best educational consultants you could ask for. They don't just find you a university; they find you the right university.",
    name: "Michael Adebayo",
    designation: "Student",
    src: "/images/homepage/testimonial.jpg",
  },
];

export function AceternityTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 768) setItemsPerView(2);
      else if (window.innerWidth < 1024) setItemsPerView(3);
      else setItemsPerView(4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const visibleTestimonials = [];
  for (let i = 0; i < itemsPerView; i++) {
    visibleTestimonials.push(testimonials[(currentIndex + i) % testimonials.length]);
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-secondary">Student&apos;s </span>
            <span className="text-primary">Reviews</span>
          </h2>
          <p className="text-xl text-gray-600">
            What our students say about us
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary/5 to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-primary/20 hover:border-primary/50 flex flex-col relative overflow-hidden h-80"
              >
                {/* Decorative quote icon */}
                <div className="absolute top-4 right-4 text-primary/10 text-6xl font-serif leading-none">
                  &quot;
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 flex-grow text-sm relative z-10">
                  {testimonial.quote}
                </p>

                <div className="flex items-center gap-3 pt-4 border-t-2 border-primary/20">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/30 flex-shrink-0">
                    <Image
                      src={testimonial.src}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-bold text-secondary text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-primary font-medium text-xs">{testimonial.designation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-gray-300 hover:bg-gray-400 w-2"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
