"use client";

import { useState } from "react";
import Link from "next/link";
import { CardContainer, CardBody, CardItem } from "@/components/ui/aceternity/3d-card";
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams";
import { TextGenerateEffect } from "@/components/ui/aceternity/text-generate-effect";
import { Meteors } from "@/components/ui/aceternity/meteors";
import { MapPin, Phone, Mail, Clock, Building2, Send } from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({
        type: "success",
        message:
          "Thank you for contacting us! We will get back to you shortly.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: "129 Mile End Road, London, E1 4BG, United Kingdom",
      link: "https://maps.google.com/?q=129+Mile+End+Road+London+E1+4BG",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "020 8089 4489",
      subContent: "+44 7437 402307",
      link: "tel:02080894489",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "info@blossomeducare.co.uk",
      link: "mailto:info@blossomeducare.co.uk",
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Monday – Friday",
      subContent: "9:30 AM – 5:30 PM",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Beams */}
      <section className="relative bg-secondary py-16 md:py-24 overflow-hidden">
        <BackgroundBeams className="absolute inset-0" />
        <div className="container mx-auto px-4 relative z-10">
          <TextGenerateEffect
            words="Contact Us"
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          />
          <div className="flex items-center gap-2 text-white/80">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-primary">Contact Us</span>
          </div>
        </div>
        <Meteors number={20} />
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Get In Touch With Us
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Have questions about studying in the UK? Our expert team is here to
            help you every step of the way. Reach out to us and let&apos;s start
            your educational journey together.
          </p>
        </div>
      </section>

      {/* Contact Info Cards - Redesigned in Grid */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
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
                      className="text-lg font-bold text-secondary mb-3 text-center"
                    >
                      {info.title}
                    </CardItem>
                    <CardItem
                      translateZ="30"
                      className="text-gray-600 text-center text-sm leading-relaxed"
                    >
                      {info.link ? (
                        <a
                          href={info.link}
                          className="hover:text-primary transition-colors"
                          target={info.link.startsWith("http") ? "_blank" : undefined}
                          rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {info.content}
                        </a>
                      ) : (
                        <span>{info.content}</span>
                      )}
                      {info.subContent && (
                        <>
                          <br />
                          <span className="text-gray-500">{info.subContent}</span>
                        </>
                      )}
                    </CardItem>
                  </CardBody>
                </CardContainer>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content: Form and Map Side by Side */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-start">
            {/* Contact Form */}
            <CardContainer containerClassName="py-0">
              <CardBody className="bg-white relative group/card hover:shadow-2xl w-full rounded-xl p-8 md:p-10 border-0">
                <CardItem
                  translateZ="50"
                  className="text-2xl md:text-3xl font-bold text-secondary mb-2"
                >
                  Send Us a Message
                </CardItem>
                <CardItem
                  translateZ="40"
                  className="text-gray-600 mb-8"
                >
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </CardItem>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <CardItem translateZ="40">
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                        placeholder="John Doe"
                      />
                    </CardItem>

                    <CardItem translateZ="40">
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                        placeholder="john@example.com"
                      />
                    </CardItem>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <CardItem translateZ="40">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        pattern="[0-9()#&+*\-=.]+"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                        placeholder="+44 123 456 7890"
                      />
                    </CardItem>

                    <CardItem translateZ="40">
                      <label
                        htmlFor="subject"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                        placeholder="Course Inquiry"
                      />
                    </CardItem>
                  </div>

                  <CardItem translateZ="40">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none outline-none"
                      placeholder="Tell us about your educational goals and how we can help..."
                    />
                  </CardItem>

                  {submitStatus.type && (
                    <CardItem translateZ="40">
                      <div
                        className={`p-4 rounded-lg flex items-center gap-3 ${
                          submitStatus.type === "success"
                            ? "bg-green-50 text-green-800 border border-green-200"
                            : "bg-red-50 text-red-800 border border-red-200"
                        }`}
                      >
                        <span className="font-medium">{submitStatus.message}</span>
                      </div>
                    </CardItem>
                  )}

                  <CardItem translateZ="50" className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-secondary hover:bg-primary text-white py-4 rounded-lg font-semibold text-base transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </CardItem>
                </form>
              </CardBody>
            </CardContainer>

            {/* Map and Company Info */}
            <div className="space-y-8">
              {/* Google Map */}
              <CardContainer containerClassName="py-0">
                <CardBody className="relative group/card hover:shadow-2xl w-full rounded-xl overflow-hidden border-0">
                  <CardItem translateZ="50" className="w-full h-[400px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.6446447334!2d-0.04234492337341774!3d51.52202597181665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d52e7f7c9e7%3A0x9e4e6b7c6c6c6c6c!2s129%20Mile%20End%20Rd%2C%20London%20E1%204BG%2C%20UK!5e0!3m2!1sen!2sus!4v1635000000000!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>

              {/* Company Number Card */}
              <CardContainer containerClassName="py-0">
                <CardBody className="bg-gradient-to-br from-secondary to-secondary/90 relative group/card hover:shadow-2xl w-full rounded-xl p-8 border-0">
                  <CardItem
                    translateZ="50"
                    className="flex items-center gap-4 mb-4"
                  >
                    <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Building2 className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <CardItem
                        translateZ="40"
                        className="text-white/80 text-sm font-medium"
                      >
                        Registered Company
                      </CardItem>
                      <CardItem
                        translateZ="40"
                        className="text-white text-xl font-bold"
                      >
                        Company No: 13810286
                      </CardItem>
                    </div>
                  </CardItem>
                  <CardItem
                    translateZ="30"
                    className="text-white/70 text-sm leading-relaxed"
                  >
                    Wexford Educare is a registered education consultancy in the
                    United Kingdom, committed to providing quality educational
                    guidance and support services.
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-secondary relative overflow-hidden">
        <BackgroundBeams className="absolute inset-0" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Begin Your Educational Journey?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Our dedicated team of education consultants is ready to guide you
            through every step of your application process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply-now"
              className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Apply Now
            </Link>
            <Link
              href="/courses"
              className="inline-block bg-white hover:bg-gray-100 text-secondary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              View Courses
            </Link>
          </div>
        </div>
        <Meteors number={15} />
      </section>
    </div>
  );
}
