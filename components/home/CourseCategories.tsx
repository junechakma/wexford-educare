"use client";

import Image from "next/image";

const categories = [
  {
    title: "HND",
    image: "/images/4-692x1024.jpg",
    description:
      "A practical qualification after A-levels for direct career entry or degree progression.",
    duration: "2 years",
  },
  {
    title: "Top-Up Degree",
    image: "/images/3-692x1024.jpg",
    description:
      "Upgrade your HND or foundation degree to a full Bachelor's in just one year.",
    duration: "1 year",
  },
  {
    title: "Bachelor's Degree",
    image: "/images/2-692x1024.jpg",
    description: "Launch your career with an undergraduate degree.",
    duration: "4 years",
  },
  {
    title: "Master's Degree",
    image: "/images/happy-mixed-race-female-student-celebrating-gradua-2025-04-22-02-53-48-utc-min-681x1024.jpg",
    description:
      "Advance your career and specialize in your field with a postgraduate qualification.",
    duration: "1–2 years",
  },
];

export function CourseCategories() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">
            Course Categories
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)]/80 via-transparent to-transparent z-10" />
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-secondary text-primary px-4 py-2 rounded-full text-sm font-semibold z-20">
                  {category.duration}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-secondary">
                  {category.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
