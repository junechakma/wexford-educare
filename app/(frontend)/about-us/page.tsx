"use client";

import Image from "next/image";
import Link from "next/link";
import { CardContainer, CardBody, CardItem } from "@/components/ui/aceternity/3d-card";
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams";
import { TextGenerateEffect } from "@/components/ui/aceternity/text-generate-effect";
import { Meteors } from "@/components/ui/aceternity/meteors";
import { AnimatedTestimonials } from "@/components/ui/aceternity/animated-testimonials";

export default function AboutUs() {
  const whyChooseUsItems = [
    {
      illustration: "/images/illustrations/undraw_personal-info_yzls.svg",
      title: "Tailored Guidance",
      description:
        "Every student is unique. We provide personalised solutions based on your background and career goals.",
    },
    {
      illustration: "/images/illustrations/undraw_teamwork_8val.svg",
      title: "Expert Team",
      description:
        "Our professionals understand the UK education system and stay updated with the latest trends.",
    },
    {
      illustration: "/images/illustrations/undraw_certificate_cqps.svg",
      title: "Student Services",
      description:
        "From applications to course selection, we make your education journey simple and stress-free.",
    },
    {
      illustration: "/images/illustrations/undraw_success-factors_i417.svg",
      title: "Proven Success",
      description:
        "We've helped countless students achieve their academic dreams.",
    },
    {
      illustration: "/images/illustrations/undraw_active-support_v6g0.svg",
      title: "Ongoing Support",
      description:
        "From your first consultation to graduation, we guide you.",
    },
    {
      illustration: "/images/illustrations/undraw_finance_m6vw.svg",
      title: "Free Consultancy",
      description:
        "We charge no fees for admissions support or government funding.",
    },
  ];

  const teamTestimonials = [
    {
      name: "MD Zahid Hasan Akhand",
      designation: "Managing Director",
      src: "/images/aboutus/jahid-bha.jpg",
      quote: "Leading Wexford Educare with a vision to make quality education accessible to every student aspiring to study in the UK.",
    },
    {
      name: "Mahmud Hasan Sefat",
      designation: "Head of Operations",
      src: "/images/aboutus/hanif-bhai.jpg",
      quote: "Ensuring seamless operations and exceptional service delivery to help students achieve their educational dreams.",
    },
    {
      name: "MD Ariful Hossain Shohrab",
      designation: "Head of HR and Admin",
      src: "/images/aboutus/sohrab-bhai.jpg",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-secondary">About </span>
            <span className="text-primary">Wexford </span>
            <span className="text-primary">Educare</span>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-secondary">Why Choose </span>
            <span className="text-primary">Us</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {whyChooseUsItems.map((item, index) => {
              return (
                <CardContainer key={index} containerClassName="py-0 h-full">
                  <CardBody className="bg-white relative group/card hover:shadow-2xl hover:shadow-primary/[0.1] border-2 border-gray-200 hover:border-primary/30 transition-colors w-full h-full rounded-xl p-6 flex flex-col items-center min-h-[320px]">
                    <CardItem
                      translateZ="50"
                      className="mb-4 relative w-full h-40"
                    >
                      <Image
                        src={item.illustration}
                        alt={item.title}
                        fill
                        className="object-contain"
                      />
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
            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl border-2 border-primary/20">
              <Image
                src="/images/aboutus/confident-businesspeople-standing-in-office-2025-04-04-20-28-40-utc-min-2048x1365.jpg"
                alt="Our Vision"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/40 to-transparent" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-secondary">Our </span>
                <span className="text-primary">Vision</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our vision is to be the world&apos;s most trusted education
                consultancy, known for bridging the gap between students and
                their dream institutions. We envision a future where every
                student, regardless of their background, can access quality
                education and contribute positively to society.
              </p>
              <div className="flex items-start gap-4 p-4 bg-primary/10 rounded-lg border-l-4 border-primary">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-1">Our Goal</h3>
                  <p className="text-sm text-gray-600">Empowering students worldwide to achieve their educational dreams</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-secondary">Our </span>
                <span className="text-primary">Mission</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The mission of <strong>Wexford Educare</strong> is to empower
                students to achieve their academic and professional goals. We
                provide dedicated, personalized support from initial course
                selection to securing financial aid. By making higher education
                accessible and attainable, we strive to create an inclusive
                environment where every student can thrive.
              </p>
              <div className="flex items-start gap-4 p-4 bg-secondary/10 rounded-lg border-l-4 border-secondary">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-1">Our Commitment</h3>
                  <p className="text-sm text-gray-600">Providing end-to-end support for every student's journey</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl border-2 border-secondary/20 order-1 lg:order-2">
              <Image
                src="/images/aboutus/male-and-female-business-people-in-a-meeting-at-a-2025-04-05-07-23-57-utc-min-2048x1365.jpg"
                alt="Our Mission"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section with Animated Testimonials */}
      <section className="py-16 md:py-20 bg-secondary relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="text-white">Meet Our </span>
            <span className="text-primary">Team</span>
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
