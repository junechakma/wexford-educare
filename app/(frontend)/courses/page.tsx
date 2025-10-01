"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CardContainer, CardBody, CardItem } from "@/components/ui/aceternity/3d-card";
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams";
import { TextGenerateEffect } from "@/components/ui/aceternity/text-generate-effect";
import { Meteors } from "@/components/ui/aceternity/meteors";
import { BookOpen, Clock, Award } from "lucide-react";

interface Course {
  id: string;
  title: string;
  category: string;
  duration: string;
  level: string;
  image: string;
  slug: string;
}

const courses: Course[] = [
  {
    id: "1",
    title: "BA (Hons) Business Management and Marketing with Foundation Year",
    category: "bachelor-courses",
    duration: "4 Years",
    level: "Undergraduate",
    image: "/images/courses/business-management.jpg",
    slug: "ba-hons-business-management-and-marketing-with-foundation-year",
  },
  {
    id: "2",
    title: "BSc (Hons) Computing with Integrated Foundation Year",
    category: "bachelor-courses",
    duration: "4 Years",
    level: "Undergraduate",
    image: "/images/courses/computing.jpg",
    slug: "bsc-hons-computing-with-integrated-foundation-year",
  },
  {
    id: "3",
    title: "MBA – International",
    category: "master-courses",
    duration: "1-2 Years",
    level: "Postgraduate",
    image: "/images/courses/mba.jpg",
    slug: "mba-international",
  },
  {
    id: "4",
    title: "BA (Hons) Health and Social Care with Foundation Year",
    category: "bachelor-courses",
    duration: "4 Years",
    level: "Undergraduate",
    image: "/images/courses/health-social-care.jpg",
    slug: "ba-hons-health-and-social-care-with-foundation-year",
  },
  {
    id: "5",
    title: "BSc (Hons) Accounting and Finance with Foundation Year",
    category: "bachelor-courses",
    duration: "4 Years",
    level: "Undergraduate",
    image: "/images/courses/accounting-finance.jpg",
    slug: "bsc-hons-accounting-and-finance-with-foundation-year",
  },
  {
    id: "6",
    title: "BSc (Hons) Business Management with Foundation Year",
    category: "bachelor-courses",
    duration: "4 Years",
    level: "Undergraduate",
    image: "/images/courses/business-management-2.jpg",
    slug: "bsc-hons-business-management-with-foundation-year",
  },
  {
    id: "7",
    title: "HND Business Management",
    category: "hnd-courses",
    duration: "2 Years",
    level: "Diploma",
    image: "/images/courses/hnd-business.jpg",
    slug: "hnd-business-management",
  },
  {
    id: "8",
    title: "HND Computing",
    category: "hnd-courses",
    duration: "2 Years",
    level: "Diploma",
    image: "/images/courses/hnd-computing.jpg",
    slug: "hnd-computing",
  },
  {
    id: "9",
    title: "BA (Hons) Business Management Top-Up",
    category: "top-up-courses",
    duration: "1 Year",
    level: "Undergraduate",
    image: "/images/courses/business-topup.jpg",
    slug: "ba-hons-business-management-top-up",
  },
  {
    id: "10",
    title: "BSc (Hons) Computing Top-Up",
    category: "top-up-courses",
    duration: "1 Year",
    level: "Undergraduate",
    image: "/images/courses/computing-topup.jpg",
    slug: "bsc-hons-computing-top-up",
  },
  {
    id: "11",
    title: "MSc International Business Management",
    category: "master-courses",
    duration: "1 Year",
    level: "Postgraduate",
    image: "/images/courses/msc-business.jpg",
    slug: "msc-international-business-management",
  },
  {
    id: "12",
    title: "HND Health and Social Care",
    category: "hnd-courses",
    duration: "2 Years",
    level: "Diploma",
    image: "/images/courses/hnd-health.jpg",
    slug: "hnd-health-and-social-care",
  },
];

const categories = [
  { id: "all", label: "All Courses", value: "all" },
  { id: "bachelor-courses", label: "Bachelor Courses", value: "bachelor-courses" },
  { id: "hnd-courses", label: "HND Courses", value: "hnd-courses" },
  { id: "master-courses", label: "Master Courses", value: "master-courses" },
  { id: "top-up-courses", label: "Top-Up Courses", value: "top-up-courses" },
];

export default function Courses() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredCourses =
    activeFilter === "all"
      ? courses
      : courses.filter((course) => course.category === activeFilter);

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
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.value)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.value
                    ? "bg-primary text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100 hover:shadow-md"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredCourses.map((course) => (
              <CardContainer key={course.id} containerClassName="py-0">
                <CardBody className="bg-white relative group/card hover:shadow-2xl border border-gray-100 w-full h-full rounded-xl overflow-hidden">
                  <CardItem translateZ="100" className="w-full h-48 relative">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/images/placeholder-course.jpg";
                      }}
                    />
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                      {course.level}
                    </div>
                  </CardItem>

                  <div className="p-6">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-secondary mb-4 line-clamp-2 min-h-[3.5rem]"
                    >
                      {course.title}
                    </CardItem>

                    <div className="space-y-3 mb-6">
                      <CardItem
                        translateZ="40"
                        className="flex items-center gap-2 text-gray-600"
                      >
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="text-sm">Duration: {course.duration}</span>
                      </CardItem>
                      <CardItem
                        translateZ="40"
                        className="flex items-center gap-2 text-gray-600"
                      >
                        <Award className="w-4 h-4 text-primary" />
                        <span className="text-sm capitalize">
                          {course.category.replace("-", " ")}
                        </span>
                      </CardItem>
                    </div>

                    <CardItem translateZ="60" className="w-full">
                      <Link
                        href={`/courses/${course.slug}`}
                        className="block w-full bg-secondary hover:bg-primary text-white text-center py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
                      >
                        Learn More
                      </Link>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
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
