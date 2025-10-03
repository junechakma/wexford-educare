"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams";
import { TextGenerateEffect } from "@/components/ui/aceternity/text-generate-effect";
import { Meteors } from "@/components/ui/aceternity/meteors";
import { BookOpen, Clock, Award } from "lucide-react";
import { coursesData } from "@/data/courses-data";

const categories = [
  { id: "all", label: "All Courses", value: "all" },
  { id: "bachelor-courses", label: "Bachelor Courses", value: "bachelor-courses" },
  { id: "certhe", label: "CertHE", value: "certhe" },
  { id: "hnd-courses", label: "HND Courses", value: "hnd-courses" },
  { id: "master-courses", label: "Master Courses", value: "master-courses" },
  { id: "top-up-courses", label: "Top-Up Courses", value: "top-up-courses" },
];

export default function Courses() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredCourses =
    activeFilter === "all"
      ? coursesData
      : coursesData.filter((course) => course.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Beams */}
      <section className="relative bg-secondary py-16 md:py-24 overflow-hidden">
        <BackgroundBeams className="absolute inset-0" />
        <div className="container mx-auto px-4 relative z-10">
          <TextGenerateEffect
            words="Our Courses"
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          />
          <div className="flex items-center gap-2 text-white/80">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-primary">Courses</span>
          </div>
        </div>
        <Meteors number={20} />
      </section>

      {/* Courses Introduction */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Discover Your Path to Success
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Explore our wide range of courses designed to help you achieve your
            academic and career goals. From foundation years to postgraduate
            programs, we offer comprehensive education solutions tailored to
            your needs.
          </p>
        </div>
      </section>

      {/* Course Filters */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">
                <span className="text-secondary">Filter by </span>
                <span className="text-primary">Category</span>
              </h3>
              <p className="text-gray-600">Choose a category to explore our courses</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.value)}
                  className={`group relative px-4 py-4 rounded-xl font-semibold transition-all duration-300 border-2 ${
                    activeFilter === category.value
                      ? "bg-gradient-to-br from-primary to-primary/80 text-white border-primary shadow-lg shadow-primary/30 scale-105"
                      : "bg-white text-gray-700 border-gray-200 hover:border-primary/50 hover:shadow-md hover:scale-102"
                  }`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activeFilter === category.value
                        ? "bg-white/20"
                        : "bg-primary/10 group-hover:bg-primary/20"
                    }`}>
                      <BookOpen className={`w-5 h-5 ${
                        activeFilter === category.value
                          ? "text-white"
                          : "text-primary"
                      }`} />
                    </div>
                    <span className="text-sm text-center leading-tight">{category.label}</span>
                  </div>
                  {activeFilter === category.value && (
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rotate-45" />
                  )}
                </button>
              ))}
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Showing <span className="font-semibold text-primary">{filteredCourses.length}</span> course{filteredCourses.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="bg-white hover:shadow-xl border border-gray-100 rounded-xl overflow-hidden transition-shadow">
                <div className="w-full h-48 relative">
                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                    {course.level}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-4 line-clamp-2 min-h-[3.5rem]">
                    {course.title}
                  </h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm">Duration: {course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-sm capitalize">
                        {course.category.replace("-", " ")}
                      </span>
                    </div>
                  </div>

                  <Link
                    href={`/courses/${course.slug}`}
                    className="block w-full bg-secondary hover:bg-primary text-white text-center py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
                  >
                    Learn More
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-600 mb-2">
                No Courses Found
              </h3>
              <p className="text-gray-500">
                Try selecting a different category to see available courses.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-secondary relative overflow-hidden">
        <BackgroundBeams className="absolute inset-0" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Get in touch with our education consultants today and let us help
            you find the perfect course for your future.
          </p>
          <Link
            href="/contact-us"
            className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Contact Us Today
          </Link>
        </div>
        <Meteors number={15} />
      </section>
    </div>
  );
}
