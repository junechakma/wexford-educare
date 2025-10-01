"use client";

import { AnimatedTestimonials, Testimonial } from "@/components/ui/animated-testimonials";

const testimonials: Testimonial[] = [
  {
    quote: "Thanks to Wexford Educare, I was able to navigate the complex application process with ease. Their personalized support and dedication to my success were truly remarkable. I couldn't have done it without them.",
    name: "Habibul Basar",
    designation: "Student",
    src: "/images/placeholder.png",
  },
  {
    quote: "I was worried about how to manage my work and studies, but Wexford Educare's flexible schedules and comprehensive support made it possible.",
    name: "Maradon Radu",
    designation: "Student",
    src: "/images/placeholder.png",
  },
  {
    quote: "I am so grateful for Wexford Educare's support in my university application process. They made it stress-free.",
    name: "Awais Hussain Khan",
    designation: "Student",
    src: "/images/placeholder.png",
  },
  {
    quote: "Applying from another country felt overwhelming. Wexford Educare handled everything, from finding the right university to helping me understand the visa requirements. Their team is knowledgeable and incredibly patient.",
    name: "Fatima Ahmed",
    designation: "CEO",
    src: "/images/placeholder.png",
  },
  {
    quote: "As a parent, I was worried about my daughter's application. The team at Wexford Educare was professional, transparent, and kept us informed at every step. We couldn't be happier with the outcome.",
    name: "Mrs. S. Rahman",
    designation: "Student",
    src: "/images/placeholder.png",
  },
  {
    quote: "Professional, efficient, and genuinely caring. The best educational consultants you could ask for. They don't just find you a university; they find you the right university.",
    name: "Michael Adebayo",
    designation: "Student",
    src: "/images/placeholder.png",
  },
];

export function AceternityTestimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-navy">
            Testimonials
          </h2>
          <p className="text-xl text-gray-600">
            What our students say about us
          </p>
        </div>

        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  );
}
