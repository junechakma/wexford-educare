"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const courses = [
  {
    category: "Bachelor Courses",
    image: "/images/business-people-office.jpg",
    title: "BA (Hons) Business Management and Marketing with Foundation Year",
    link: "/courses/ba-hons-business-management-and-marketing-with-foundation-year",
  },
  {
    category: "Bachelor Courses",
    image: "/images/robot-engineers.jpg",
    title: "BSc (Hons) Computing with Integrated Foundation Year",
    link: "/courses/bsc-hons-computing-with-integrated-foundation-year",
  },
  {
    category: "Master Courses",
    image: "/images/students-group.jpg",
    title: "MBA – International",
    link: "/courses/mba-international",
  },
];

export function TrendingCourses() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">
            Trending Courses in the UK
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <Link
              key={index}
              href={course.link}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)]/80 via-transparent to-transparent z-10" />
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-secondary text-primary px-4 py-2 rounded-full text-xs font-semibold z-20">
                  {course.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-secondary transition-colors line-clamp-2">
                  {course.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 rounded-full font-semibold transition-all duration-300 ${
                page === currentPage
                  ? "bg-secondary text-primary shadow-lg scale-110"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
