"use client";

import Image from "next/image";
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
  Calendar,
  UserCheck,
  CheckCircle,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Tabs, { TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import InfoGrid from "@/components/ui/info-grid";
import LoanTable from "@/components/ui/loan-table";

// Data imports
import { guidanceContent } from "@/data/guidance-content";
import { universityData } from "@/data/university-data";



export default function Guidance() {
  // Map illustrations to features and services
  const featureIllustrations = [
    "/images/illustrations/undraw_education_3vwh.svg",
    "/images/illustrations/undraw_reading-a-book_4cap.svg",
    "/images/illustrations/undraw_team-spirit_18vw.svg",
    "/images/illustrations/undraw_savings_uwjn.svg"
  ];
  const features = guidanceContent.features.map((feature, idx) => ({
    ...feature,
    illustration: featureIllustrations[idx],
  }));

  const serviceIllustrations = [
    "/images/illustrations/undraw_active-support_v6g0.svg",
    "/images/illustrations/undraw_schedule_ry1w.svg",
    "/images/illustrations/undraw_wallet_diag.svg",
    "/images/illustrations/undraw_building_burz.svg"
  ];
  const services = guidanceContent.services.map((service, idx) => ({
    ...service,
    illustration: serviceIllustrations[idx],
  }));


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-secondary py-16 md:py-24 overflow-hidden">
        <BackgroundBeams className="absolute inset-0" />
        <div className="container mx-auto px-4 relative z-10">
          <TextGenerateEffect
            words="Guidance"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          />
          <div className="flex items-center gap-2 text-sm sm:text-base text-white/80 mb-4 sm:mb-6">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-primary">Guidance</span>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl">
            Your comprehensive guide to studying in the UK. Learn about our
            services, course offerings, and how we can help you achieve your
            educational goals.
          </p>
        </div>
        <Meteors number={20} />
      </section>

      {/* Wexford Educare Overview */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              <span className="text-secondary">Blossom </span>
              <span className="text-primary">Educare</span>
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
              Comprehensive Guide for Executives
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-5xl mx-auto px-4">
              Navigating university admissions and student finance with expert guidance. Empowering clients to achieve their educational aspirations across the UK.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              return (
                <CardContainer key={index} containerClassName="py-0 h-full">
                  <CardBody className="bg-white relative group/card hover:shadow-2xl hover:shadow-primary/[0.1] border-2 border-gray-200 hover:border-primary/30 transition-colors w-full h-full rounded-xl p-3 sm:p-4 md:p-6 flex flex-col items-center min-h-[220px] sm:min-h-[240px] md:min-h-[280px]">
                    <CardItem
                      translateZ="50"
                      className="mb-2 sm:mb-3 md:mb-4 relative w-full h-20 sm:h-24 md:h-32"
                    >
                      <Image
                        src={feature.illustration}
                        alt={feature.title}
                        fill
                        className="object-contain"
                      />
                    </CardItem>
                    <CardItem
                      translateZ="40"
                      className="text-sm sm:text-base md:text-lg font-bold text-secondary mb-1 sm:mb-2 text-center"
                    >
                      {feature.title}
                    </CardItem>
                    <CardItem
                      translateZ="30"
                      className="text-gray-600 text-xs sm:text-sm leading-relaxed text-center"
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

      {/* Company Overview */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-center">
            <span className="text-secondary">Company </span>
            <span className="text-primary">Overview</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-center mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto px-4">
            Wexford Educare is a leading education consultancy dedicated to making higher education accessible by assisting clients with university admissions and securing student finance. We operate across four major UK cities and partner with top-tier universities to offer comprehensive educational pathways.
          </p>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-5 sm:p-6 md:p-8 border-0 shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                      <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary mb-3 sm:mb-4">Our Mission</h3>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                      To guide clients through the application process, ensuring they meet entry requirements and secure funding to pursue their educational goals.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                      <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary mb-3 sm:mb-4">Website & Locations</h3>
                    <div className="space-y-3 sm:space-y-4">
                      <div>
                        <p className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Website</p>
                        <a
                          href="https://wexfordeducare.co.uk"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 text-base sm:text-lg font-semibold hover:underline transition-colors inline-flex items-center gap-2 break-all"
                        >
                          wexfordeducare.co.uk
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>

                      <div>
                        <p className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2 sm:mb-3">Operating Locations</p>
                        <div className="grid grid-cols-2 gap-2 sm:gap-3">
                          {["London", "Leeds", "Manchester", "Birmingham"].map((city, idx) => (
                            <div key={idx} className="flex items-center gap-2 bg-white/60 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2">
                              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-secondary flex-shrink-0" />
                              <span className="text-gray-700 font-medium text-xs sm:text-sm">{city}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12">
            <span className="text-secondary">Our </span>
            <span className="text-primary">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              return (
                <CardContainer key={index} containerClassName="py-0 h-full">
                  <CardBody className="bg-white relative group/card hover:shadow-2xl hover:shadow-primary/[0.1] border-2 border-gray-200 hover:border-primary/30 transition-colors w-full h-full rounded-xl p-5 sm:p-6 md:p-8 flex flex-col items-center min-h-[280px] sm:min-h-[300px]">
                    <CardItem translateZ="50" className="mb-3 sm:mb-4 relative w-full h-32 sm:h-40">
                      <Image
                        src={service.illustration}
                        alt={service.title}
                        fill
                        className="object-contain"
                      />
                    </CardItem>
                    <CardItem
                      translateZ="40"
                      className="text-lg sm:text-xl font-bold text-secondary mb-2 sm:mb-3 text-center"
                    >
                      {service.title}
                    </CardItem>
                    <CardItem
                      translateZ="30"
                      className="text-gray-600 text-sm sm:text-base leading-relaxed text-center"
                    >
                      {service.description}
                    </CardItem>
                  </CardBody>
                </CardContainer>
              );
            })}
          </div>
        </div>
      </section>

      {/* Target Audience & Eligibility */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12">
            <span className="text-secondary">Our Target Audience & </span>
            <span className="text-primary">Eligibility</span>
          </h2>

          {/* Who We Help */}
          <div className="mb-8 sm:mb-10 md:mb-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary mb-6 sm:mb-8 text-center">
              Who We Help:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <Card className="mb-4 flex flex-col items-start h-full md:min-h-[260px] lg:min-h-[320px]">
                  <CardHeader>
                    <CardTitle className="text-base sm:text-lg md:text-xl">Who We Help</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 sm:space-y-3">
                      {[
                        { title: "British Citizens", icon: UserCheck },
                        { title: "EU Nationals with settled or pre-settled status", icon: UserCheck },
                        { title: "Ages 18-60 (flexible for 60+)", icon: UserCheck },
                        { title: "Individuals with Refugee Status", icon: UserCheck },
                      ].map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <div key={idx} className="flex items-center gap-3 sm:gap-4">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                            </div>
                            <div className="text-xs sm:text-sm font-medium text-secondary">{item.title}</div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="mb-4 flex flex-col items-start h-full md:min-h-[260px] lg:min-h-[320px]">
                  <CardHeader>
                    <CardTitle className="text-base sm:text-lg md:text-xl">Key Eligibility Points</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                      {[
                        {
                          title: "Flexible Qualifications",
                          description: "Prior qualifications optional - work experience pathways offered.",
                          icon: BookOpen,
                        },
                        {
                          title: "Residency Requirement",
                          description: "Three-year UK residency pre-course (excluding temporary absences like holidays).",
                          icon: MapPin,
                        },
                        {
                          title: "No Age Limit",
                          description: "No upper age limit for tuition fee loans or grants.",
                          icon: Calendar,
                        },
                      ].map((point, index) => {
                        const Icon = point.icon;
                        return (
                          <div key={index} className="flex flex-col items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-white/50 rounded-lg">
                            <div className="flex items-center gap-2 sm:gap-3">
                              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                              </div>
                              <div className="text-xs sm:text-sm font-semibold text-secondary">{point.title}</div>
                            </div>
                            <div className="text-xs sm:text-sm text-gray-700">{point.description}</div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* University Locations */}
      <section className="py-10 sm:py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8">
            <span className="text-secondary">Universities & </span>
            <span className="text-primary">Locations</span>
          </h2>

          <Tabs defaultValue="anglia">
            <TabsList className="justify-center mb-4 sm:mb-6 flex-wrap gap-1 sm:gap-2">
              {universityData.map((uni) => (
                <TabsTrigger key={uni.id} value={uni.id}>
                  {uni.shortName}
                </TabsTrigger>
              ))}
            </TabsList>

            {universityData.map((uni) => (
              <TabsContent key={uni.id} value={uni.id}>
                {/* University Name Header */}
                <div className="mb-6 rounded-md bg-white p-4 shadow-sm border">
                  <div className="flex items-center gap-3 text-gray-700">
                    <GraduationCap className="w-6 h-6 text-primary" />
                    <span className="font-bold text-lg">{uni.name}</span>
                  </div>
                </div>

                {/* Courses Offered */}
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-primary" />
                      Courses Offered
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {/* Foundation Courses */}
                      {uni.courses.foundation && (
                        <div>
                          <h3 className="text-lg font-bold text-gray-700 mb-3">
                            {uni.id === 'sunderland' ? 'Foundation Courses (2 Years - FdA)' : 'Undergraduate Courses with Foundation Year (4 Years)'}
                          </h3>
                          <ul className="list-disc pl-6 text-gray-600 space-y-2 text-sm">
                            {uni.courses.foundation.map((course, idx) => (
                              <li key={idx}>{course}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Standard Courses */}
                      {uni.courses.standard && (
                        <div>
                          <h3 className="text-lg font-bold text-gray-700 mb-3">
                            Undergraduate Degree (Standard 3 Years)
                          </h3>
                          <ul className="list-disc pl-6 text-gray-600 space-y-2 text-sm">
                            {uni.courses.standard.map((course, idx) => (
                              <li key={idx}>{course}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Top-Up Courses */}
                      {uni.courses.topUp && (
                        <div>
                          <h3 className="text-lg font-bold text-gray-700 mb-3">
                            Top-Up Courses (1 Year)
                          </h3>
                          <ul className="list-disc pl-6 text-gray-600 space-y-2 text-sm">
                            {uni.courses.topUp.map((course, idx) => (
                              <li key={idx}>{course}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* HND Courses */}
                      {uni.courses.hnd && (
                        <div>
                          <h3 className="text-lg font-bold text-gray-700 mb-3">
                            HND (2 Years)
                          </h3>
                          <ul className="list-disc pl-6 text-gray-600 space-y-2 text-sm">
                            {uni.courses.hnd.map((course, idx) => (
                              <li key={idx}>{course}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Postgraduate Courses */}
                      {uni.courses.postgraduate && (
                        <div>
                          <h3 className="text-lg font-bold text-gray-700 mb-3">
                            Postgraduate Courses (1 Year)
                          </h3>
                          <ul className="list-disc pl-6 text-gray-600 space-y-2 text-sm">
                            {uni.courses.postgraduate.map((course, idx) => (
                              <li key={idx}>{course}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* LSC Campus-specific courses */}
                      {uni.courses.london && (
                        <div>
                          <h3 className="text-lg font-bold text-gray-700 mb-3">📍 London Campus</h3>
                          <ul className="list-disc pl-6 text-gray-600 space-y-2 text-sm">
                            {uni.courses.london.map((course, idx) => (
                              <li key={idx}>{course}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {uni.courses.birmingham && (
                        <div>
                          <h3 className="text-lg font-bold text-gray-700 mb-3">📍 Birmingham Campus</h3>
                          <ul className="list-disc pl-6 text-gray-600 space-y-2 text-sm">
                            {uni.courses.birmingham.map((course, idx) => (
                              <li key={idx}>{course}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {uni.courses.manchester && (
                        <div>
                          <h3 className="text-lg font-bold text-gray-700 mb-3">📍 Manchester Campus</h3>
                          <ul className="list-disc pl-6 text-gray-600 space-y-2 text-sm">
                            {uni.courses.manchester.map((course, idx) => (
                              <li key={idx}>{course}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Note for GBS */}
                    {uni.note && (
                      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <p className="text-sm text-gray-700">
                          <strong className="text-secondary">Note:</strong> {uni.note}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Campus Locations */}
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      Campus Locations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {uni.locations.map((location, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-gray-700">
                          <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">{location}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Entry Requirements */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      Entry Requirements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {Object.entries(uni.requirements).map(([key, value], idx) => (
                        <div key={idx} className="p-3 bg-gray-50 rounded-lg">
                          <h4 className="font-semibold text-secondary mb-2 text-sm capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}:
                          </h4>
                          <p className="text-sm text-gray-700">{value}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Generel Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8">
            <span className="text-secondary">General Course </span>
            <span className="text-primary">Information</span>
          </h2>

          <InfoGrid
            items={[
              { title: "Foundation Degree (4 Yrs)", subtitle: "Includes foundation year + 3-year degree." },
              { title: "Standard Degree (3 Yrs)", subtitle: "Direct entry. Generally higher entry requirements." },
              { title: "CertHE (1 Yr)", subtitle: "Certificate of Higher Education with flexible entry." },
              { title: "Top-Up Courses (1 Yr)", subtitle: "Allows HND holders to upgrade to a full Honours degree." },
              { title: "Postgraduate (1 Yr)", subtitle: "Master's degrees like MBAs, MSc, LLM." },
              { title: "HND (2 Yrs)", subtitle: "Higher National Diploma. Vocational pathways." },
            ]}
            className="mb-8 sm:mb-10 md:mb-12"
          />

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6">
            <span className="text-secondary">Tuition Fee </span>
            <span className="text-primary">Loans</span>
          </h2>
          <div className="mb-8 sm:mb-10 md:mb-12">
            <LoanTable
              headers={["Course Type", "Max Amount", "Details"]}
              rows={[
                { col1: "Full-time Standard", col2: "£9,535", col3: "Paid to university" },
                { col1: "Accelerated Degree", col2: "£11,440", col3: "Intensive programs" },
                { col1: "Foundation Year (classroom)", col2: "£5,760", col3: "Business, social sciences" },
                { col1: "Foundation Year (practical)", col2: "£9,535", col3: "Science, engineering, arts" },
                { col1: "Part-time", col2: "£7,145", col3: "Min 25% of full-time" },
              ]}
            />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6">
            <span className="text-secondary">Maintenance Loans </span>
            <span className="text-primary">(Living Costs)</span>
          </h2>
          <div>
            <LoanTable
              headers={["Living Situation", "Max Amount", "Details"]}
              rows={[
                  { col1: "Students 60+", col2: (
                    <a
                      href="https://www.gov.uk/government/publications/student-loans-a-guide-to-terms-and-conditions/student-loans-a-guide-to-terms-and-conditions-2025-to-2026"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
                    >
                      See the government guidance for student loans (2025–26)
                    </a>
                  ), col3: "Means-tested" },
                  { col1: "Living with parents", col2: (
                    <a
                      href="https://www.gov.uk/government/publications/student-loans-a-guide-to-terms-and-conditions/student-loans-a-guide-to-terms-and-conditions-2025-to-2026"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
                    >
                      See the government guidance for student loans (2025–26)
                    </a>
                  ), col3: "Means-tested" },
                  { col1: "Away (outside London)", col2: (
                    <a
                      href="https://www.gov.uk/government/publications/student-loans-a-guide-to-terms-and-conditions/student-loans-a-guide-to-terms-and-conditions-2025-to-2026"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
                    >
                      See the government guidance for student loans (2025–26)
                    </a>
                  ), col3: "Means-tested" },
                  { col1: "Away (in London)", col2: (
                    <a
                      href="https://www.gov.uk/government/publications/student-loans-a-guide-to-terms-and-conditions/student-loans-a-guide-to-terms-and-conditions-2025-to-2026"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
                    >
                      See the government guidance for student loans (2025–26)
                    </a>
                  ), col3: "Means-tested" },
                  { col1: "Studying abroad", col2: (
                    <a
                      href="https://www.gov.uk/government/publications/student-loans-a-guide-to-terms-and-conditions/student-loans-a-guide-to-terms-and-conditions-2025-to-2026"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
                    >
                      See the government guidance for student loans (2025–26)
                    </a>
                  ), col3: "Part of UK course" },
                ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
