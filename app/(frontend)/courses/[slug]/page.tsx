import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams";
import { TextGenerateEffect } from "@/components/ui/aceternity/text-generate-effect";
import { Meteors } from "@/components/ui/aceternity/meteors";
import {
  Clock,
  Award,
  CheckCircle,
  BookOpen,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { coursesData } from "@/data/courses-data";

export function generateStaticParams() {
  return coursesData.map((course) => ({
    slug: course.slug,
  }));
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = coursesData.find((c) => c.slug === params.slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-secondary py-16 md:py-24 overflow-hidden">
        <BackgroundBeams className="absolute inset-0" />
        <div className="container mx-auto px-4 relative z-10">
          <TextGenerateEffect
            words={course.title}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          />
          <div className="flex items-center gap-2 text-white/80 mb-6">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/courses"
              className="hover:text-primary transition-colors"
            >
              Courses
            </Link>
            <span>/</span>
            <span className="text-primary">{course.title}</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-white">{course.duration}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-white">{course.level}</span>
            </div>
          </div>
        </div>
        <Meteors number={20} />
      </section>

      {/* Course Image */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Course Overview
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {course.description}
          </p>
        </div>
      </section>

      {/* Why Choose This Program */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 text-center">
            Why Choose This Program?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {course.whyChoose.map((reason, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{reason}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Curriculum */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
              Program Curriculum
            </h2>
          </div>
          <div className="space-y-6">
            {course.curriculum.map((year, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4">
                  {year.year}
                </h3>
                <ul className="space-y-3">
                  {year.modules.map((module, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{module}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
              Your Future Career 💼
            </h2>
          </div>
          <p className="text-lg text-gray-700 mb-6">
            Graduates are equipped with the skills and knowledge to pursue a
            wide range of exciting career opportunities:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {course.careerPaths.map((career, index) => (
              <Card
                key={index}
                className="p-5 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="font-semibold text-gray-800">{career}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
              Admission Requirements
            </h2>
          </div>
          <div className="space-y-6">
            {course.admissionRequirements.map((req, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-4">
                  {req.title}
                </h3>
                <ul className="space-y-3">
                  {req.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      {course.additionalInfo && course.additionalInfo.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
              Additional Information
            </h2>
            <div className="space-y-6">
              {course.additionalInfo.map((info, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-3">
                    {info.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{info.content}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-secondary relative overflow-hidden">
        <BackgroundBeams className="absolute inset-0" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Your Journey with Blossom Educare
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Ready to take the first step? The expert team at Blossom Educare is
            here to provide personalized support and guide you through the
            application process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply-now"
              className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Apply Now
            </Link>
            <Link
              href="mailto:info@blossomeducare.co.uk"
              className="inline-block bg-white hover:bg-gray-100 text-secondary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Email for Free Consultation
            </Link>
          </div>
        </div>
        <Meteors number={15} />
      </section>
    </div>
  );
}
