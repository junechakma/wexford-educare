"use client";

import Link from "next/link";
import { CardContainer, CardBody, CardItem } from "@/components/ui/aceternity/3d-card";
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams";
import { TextGenerateEffect } from "@/components/ui/aceternity/text-generate-effect";
import { Meteors } from "@/components/ui/aceternity/meteors";
import {
  GraduationCap,
  Building2,
  BookOpen,
  MapPin,
  CheckCircle,
  Users,
  DollarSign,
  Headphones,
  Calendar,
  UserCheck,
} from "lucide-react";

export default function Guidance() {
  const features = [
    {
      icon: GraduationCap,
      title: "University Access",
      description: "Access to top-tier universities across the UK.",
    },
    {
      icon: BookOpen,
      title: "Diverse Courses",
      description: "Wide range of undergraduate and postgraduate programs.",
    },
    {
      icon: Users,
      title: "Personalized Support",
      description: "One-on-one guidance throughout your educational journey.",
    },
    {
      icon: DollarSign,
      title: "Finance Expertise",
      description: "Expert assistance with student finance and funding options.",
    },
  ];

  const eligibilityCriteria = [
    {
      icon: UserCheck,
      title: "UK Residents",
      description: "British citizens and permanent residents (Settlement/ILR)",
    },
    {
      icon: UserCheck,
      title: "Pre-Settlement Status",
      description: "EU citizens with pre-settlement or settled status",
    },
    {
      icon: UserCheck,
      title: "International Students",
      description: "Students from around the world seeking UK education",
    },
    {
      icon: UserCheck,
      title: "Refugees",
      description: "Individuals with refugee status or humanitarian protection",
    },
  ];

  const services = [
    {
      icon: Headphones,
      title: "Application Support",
      description:
        "Complete guidance through the university application process, from initial consultation to final submission.",
    },
    {
      icon: Calendar,
      title: "Course Selection",
      description:
        "Expert advice on choosing the right course based on your career goals and academic background.",
    },
    {
      icon: DollarSign,
      title: "Finance Assistance",
      description:
        "Help with securing student finance, government funding, and understanding financial options.",
    },
    {
      icon: Building2,
      title: "University Partnerships",
      description:
        "Direct partnerships with leading universities across London, Birmingham, Manchester, and more.",
    },
  ];

  const campusLocations = [
    "London",
    "Birmingham",
    "Manchester",
    "Leeds",
    "Leicester",
    "Nottingham",
    "Derby",
    "Northampton",
  ];

  const courseCategories = [
    {
      title: "Business & Management",
      courses: [
        "BSc (Hons) Business Management",
        "BSc (Hons) International Business Management",
        "BSc (Hons) Business and Marketing",
        "BSc (Hons) Business and Human Resource Management",
        "BSc (Hons) Business and Law",
      ],
    },
    {
      title: "Health & Social Care",
      courses: [
        "BSc (Hons) Health and Social Care",
        "BSc (Hons) Psychology",
        "BSc (Hons) Mental Health and Wellbeing",
        "BSc (Hons) Public Health",
      ],
    },
    {
      title: "Finance & Accounting",
      courses: [
        "BSc (Hons) Finance and Accounting",
        "BSc (Hons) Business and Healthcare Management",
      ],
    },
    {
      title: "Computing & Technology",
      courses: ["BSc (Hons) Computing"],
    },
    {
      title: "Postgraduate Programs",
      courses: [
        "MBA International",
        "MBA Health and Social Care",
        "MSc International Marketing",
        "MSc International Project Management",
      ],
    },
  ];

  const entryRequirements = [
    "Valid Passport",
    "Proof of Address",
    "Share Code (for non-British applicants)",
    "Home Office Travel Document (for refugees)",
    "Updated CV",
    "Level 3 Qualifications (60-120 credits) or equivalent",
    "Relevant work experience (minimum 1 year for some courses)",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-secondary py-16 md:py-24 overflow-hidden">
        <BackgroundBeams className="absolute inset-0" />
        <div className="container mx-auto px-4 relative z-10">
          <TextGenerateEffect
            words="Guidance"
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          />
          <div className="flex items-center gap-2 text-white/80 mb-6">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-primary">Guidance</span>
          </div>
          <p className="text-lg text-white/90 max-w-2xl">
            Your comprehensive guide to studying in the UK. Learn about our
            services, course offerings, and how we can help you achieve your
            educational goals.
          </p>
        </div>
        <Meteors number={20} />
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 text-center">
            Company Overview
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center mb-12">
            Wexford Educare is a leading education consultancy dedicated to
            making higher education accessible by assisting clients with
            university admissions and securing student finance. We operate
            across four major UK cities and partner with top-tier universities
            to offer comprehensive educational pathways.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <CardContainer key={index} containerClassName="py-0">
                  <CardBody className="bg-white relative group/card hover:shadow-2xl w-full h-full rounded-xl p-6 border-0 shadow-md">
                    <CardItem
                      translateZ="50"
                      className="flex justify-center mb-4"
                    >
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </CardItem>
                    <CardItem
                      translateZ="40"
                      className="text-lg font-bold text-secondary mb-2 text-center"
                    >
                      {feature.title}
                    </CardItem>
                    <CardItem
                      translateZ="30"
                      className="text-gray-600 text-sm leading-relaxed text-center"
                    >
                      {feature.description}
                    </CardItem>
                  </CardBody>
                </CardContainer>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            To guide clients through the application process, ensuring they meet
            entry requirements and secure funding to pursue their educational
            goals. We are committed to providing personalized support every step
            of the way.
          </p>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <CardContainer key={index} containerClassName="py-0">
                  <CardBody className="bg-white relative group/card hover:shadow-2xl w-full h-full rounded-xl p-8 border-0 shadow-md">
                    <div className="flex gap-4">
                      <CardItem translateZ="50" className="flex-shrink-0">
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                      </CardItem>
                      <div className="flex-1">
                        <CardItem
                          translateZ="40"
                          className="text-xl font-bold text-secondary mb-3"
                        >
                          {service.title}
                        </CardItem>
                        <CardItem
                          translateZ="30"
                          className="text-gray-600 leading-relaxed"
                        >
                          {service.description}
                        </CardItem>
                      </div>
                    </div>
                  </CardBody>
                </CardContainer>
              );
            })}
          </div>
        </div>
      </section>

      {/* Target Audience & Eligibility */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
            Our Target Audience & Eligibility
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {eligibilityCriteria.map((criteria, index) => {
              const Icon = criteria.icon;
              return (
                <CardContainer key={index} containerClassName="py-0">
                  <CardBody className="bg-white relative group/card hover:shadow-2xl w-full h-full rounded-xl p-6 border-0 shadow-md">
                    <CardItem
                      translateZ="50"
                      className="flex justify-center mb-4"
                    >
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                        <Icon className="w-8 h-8 text-green-600" />
                      </div>
                    </CardItem>
                    <CardItem
                      translateZ="40"
                      className="text-lg font-bold text-secondary mb-2 text-center"
                    >
                      {criteria.title}
                    </CardItem>
                    <CardItem
                      translateZ="30"
                      className="text-gray-600 text-sm leading-relaxed text-center"
                    >
                      {criteria.description}
                    </CardItem>
                  </CardBody>
                </CardContainer>
              );
            })}
          </div>
        </div>
      </section>

      {/* Campus Locations */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-6">
            Campus Locations
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12">
            We partner with universities in major cities across the UK
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {campusLocations.map((location, index) => (
              <CardContainer key={index} containerClassName="py-0">
                <CardBody className="bg-white relative group/card hover:shadow-xl w-full rounded-lg p-4 border-0 shadow-md">
                  <CardItem
                    translateZ="40"
                    className="flex items-center justify-center gap-2"
                  >
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-secondary">
                      {location}
                    </span>
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Offered */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
            Courses Offered
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courseCategories.map((category, index) => (
              <CardContainer key={index} containerClassName="py-0">
                <CardBody className="bg-white relative group/card hover:shadow-2xl w-full h-full rounded-xl p-8 border-0 shadow-md">
                  <CardItem
                    translateZ="50"
                    className="flex items-center gap-3 mb-6"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary">
                      {category.title}
                    </h3>
                  </CardItem>
                  <CardItem translateZ="40" className="space-y-3">
                    {category.courses.map((course, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{course}</span>
                      </div>
                    ))}
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </section>

      {/* Entry Requirements */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
            Entry Requirements
          </h2>
          <CardContainer containerClassName="py-0">
            <CardBody className="bg-white relative group/card hover:shadow-2xl w-full rounded-xl p-8 md:p-10 border-0 shadow-lg">
              <CardItem translateZ="40" className="space-y-4">
                {entryRequirements.map((requirement, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                  >
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed">
                      {requirement}
                    </span>
                  </div>
                ))}
              </CardItem>
              <CardItem translateZ="30" className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-gray-700">
                  <strong className="text-secondary">Note:</strong> Requirements
                  may vary depending on the course and university. Work experience
                  requirements apply to certain programs. Contact us for specific
                  course requirements.
                </p>
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-secondary relative overflow-hidden">
        <BackgroundBeams className="absolute inset-0" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Educational Journey?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Our expert team is here to guide you through every step of the
            application process. Get in touch today to learn more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply-now"
              className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Apply Now
            </Link>
            <Link
              href="/contact-us"
              className="inline-block bg-white hover:bg-gray-100 text-secondary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <Meteors number={15} />
      </section>
    </div>
  );
}
