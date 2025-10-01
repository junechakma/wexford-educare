"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Users,
  Award,
  TrendingUp,
  Headphones,
  DollarSign,
} from "lucide-react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/aceternity/3d-card";
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams";
import { TextGenerateEffect } from "@/components/ui/aceternity/text-generate-effect";
import { Meteors } from "@/components/ui/aceternity/meteors";
import { AnimatedTestimonials } from "@/components/ui/aceternity/animated-testimonials";

export default function AboutUs() {
  const whyChooseUsItems = [
    {
      icon: Heart,
      title: "Tailored Guidance",
      description:
        "Every student is unique. We provide personalised solutions based on your background and career goals.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Our professionals understand the UK education system and stay updated with the latest trends.",
    },
    {
      icon: Award,
      title: "Student Services",
      description:
        "From applications to course selection, we make your education journey simple and stress-free.",
    },
    {
      icon: TrendingUp,
      title: "Proven Success",
      description:
        "We've helped countless students achieve their academic dreams.",
    },
    {
      icon: Headphones,
      title: "Ongoing Support",
      description:
        "From your first consultation to graduation, we guide you.",
    },
    {
      icon: DollarSign,
      title: "Free Consultancy",
      description:
        "We charge no fees for admissions support or government funding.",
    },
  ];

  const teamTestimonials = [
    {
      name: "MD Zahid Hasan Akhand",
      designation: "Managing Director",
      src: "/images/team-1.jpg",
      quote: "Leading Wexford Educare with a vision to make quality education accessible to every student aspiring to study in the UK.",
    },
    {
      name: "Mahmud Hasan Sefat",
      designation: "Head of Operations",
      src: "/images/team-2.jpg",
      quote: "Ensuring seamless operations and exceptional service delivery to help students achieve their educational dreams.",
    },
    {
      name: "MD Ariful Hossain Shohrab",
      designation: "Head of HR and Admin",
      src: "/images/team-3.jpg",
      quote: "Building a strong team dedicated to supporting students throughout their educational journey.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Beams */}
      <section className="relative bg-secondary py-16 md:py-24 overflow-hidden">
        <BackgroundBeams className="absolute inset-0" />
        <div className="container mx-auto px-4 relative z-10">
          <TextGenerateEffect
            words="About Us"
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          />
          <div className="flex items-center gap-2 text-white/80">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-primary">About Us</span>
          </div>
        </div>
        <Meteors number={20} />
      </section>

      {/* About Wexford Educare Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            About Wexford Educare
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Wexford Educare</strong> is a London-based education
            consultancy firm. Since its inception, the company has rapidly
            earned a reputation as a trusted partner for students pursuing
            academic opportunities both in the UK and abroad. We provide
            tailored support for local, EU, and international students, offering
            end-to-end services that cover every stage of the journey—from
            navigating applications and securing student finance to making
            informed decisions about their educational pathways.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section with 3D Cards */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {whyChooseUsItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <CardContainer key={index} containerClassName="py-0">
                  <CardBody className="bg-white relative group/card hover:shadow-2xl border border-gray-100 w-full h-full rounded-xl p-6">
                    <CardItem
                      translateZ="50"
                      className="mb-4 flex justify-center"
                    >
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </CardItem>
                    <CardItem
                      translateZ="60"
                      className="text-xl font-bold text-secondary mb-3 text-center"
                    >
                      {item.title}
                    </CardItem>
                    <CardItem
                      translateZ="40"
                      className="text-gray-600 leading-relaxed text-center text-sm"
                    >
                      {item.description}
                    </CardItem>
                  </CardBody>
                </CardContainer>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto">
            <CardContainer containerClassName="py-0">
              <CardBody className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
                <CardItem translateZ="100" className="w-full h-full">
                  <Image
                    src="/images/vision.jpg"
                    alt="Our Vision"
                    fill
                    className="object-cover"
                    priority
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our vision is to be the world&apos;s most trusted education
                consultancy, known for bridging the gap between students and
                their dream institutions. We envision a future where every
                student, regardless of their background, can access quality
                education and contribute positively to society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The mission of <strong>Wexford Educare</strong> is to empower
                students to achieve their academic and professional goals. We
                provide dedicated, personalized support from initial course
                selection to securing financial aid. By making higher education
                accessible and attainable, we strive to create an inclusive
                environment where every student can thrive.
              </p>
            </div>
            <CardContainer containerClassName="py-0" className="order-1 lg:order-2">
              <CardBody className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
                <CardItem translateZ="100" className="w-full h-full">
                  <Image
                    src="/images/mission.jpg"
                    alt="Our Mission"
                    fill
                    className="object-cover"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section with Animated Testimonials */}
      <section className="py-16 md:py-20 bg-secondary relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Meet Our Team
          </h2>
          <AnimatedTestimonials
            testimonials={teamTestimonials}
            autoplay={true}
            className="max-w-6xl"
          />
        </div>
      </section>
    </div>
  );
}
