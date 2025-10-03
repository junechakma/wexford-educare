"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { coursesData } from "@/data/courses-data";

export function TrendingCourses() {
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 3;

  // Calculate pagination
  const totalCourses = coursesData.length;
  const totalPages = Math.ceil(totalCourses / coursesPerPage);
  const startIndex = (currentPage - 1) * coursesPerPage;
  const endIndex = startIndex + coursesPerPage;
  const currentCourses = coursesData.slice(startIndex, endIndex);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-secondary">Trending Courses </span>
            <span className="text-primary">in the UK</span>
          </h2>
          <p className="text-xl text-gray-600">
            Explore our most popular programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 max-w-7xl mx-auto">
          {currentCourses.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-primary/10 hover:border-primary/30"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={course.thumbnail}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />

                <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full text-xs font-semibold z-20 shadow-lg">
                  {course.level}
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-primary/5 to-white">
                <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors line-clamp-2 mb-3">
                  {course.title}
                </h3>
                <div className="flex items-center gap-2">
                  <div className="h-1 w-12 bg-primary rounded-full group-hover:w-full transition-all duration-300" />
                </div>
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
                  ? "bg-primary text-white shadow-lg scale-110"
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
