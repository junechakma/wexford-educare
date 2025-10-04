"use client";

import Image from "next/image";

const categories = [
  {
    title: "Master's Degree",
    image: "/images/homepage/happy-mixed-race-female-student-celebrating-gradua.jpg",
    description:
      "Advance your career and specialize in your field with a postgraduate qualification.",
    duration: "1–2 years",
  },
  {
    title: "HND",
    image: "/images/homepage/course-categories1.jpg",
    description:
      "A practical qualification after A-levels for direct career entry or degree progression.",
    duration: "2 years",
  },
  {
    title: "Top-Up Degree",
    image: "/images/homepage/course-categories2.jpg",
    description:
      "Upgrade your HND or foundation degree to a full Bachelor's in just one year.",
    duration: "1 year",
  },
  {
    title: "Bachelor's Degree",
    image: "/images/homepage/course-categories3.jpg",
    description: "Launch your career with an undergraduate degree.",
    duration: "4 years",
  },
];

export function CourseCategories() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-secondary">Course </span>
            <span className="text-primary">Categories</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/30"
            >
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-1 w-12 bg-primary rounded-full" />
                    <span className="text-secondary text-xs font-semibold bg-white px-3 py-1 rounded-full">
                      {category.duration}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {category.title}
                  </h3>
                  <p className="text-white leading-relaxed text-sm">
                    {category.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
