"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams";
import { TextGenerateEffect } from "@/components/ui/aceternity/text-generate-effect";
import { Meteors } from "@/components/ui/aceternity/meteors";
import { Send, MapPin } from "lucide-react";

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
      illustration: "/images/illustrations/undraw_map_cuix.svg",
      title: "Address",
      content: "129 Mile End Road, London, E1 4BG, United Kingdom",
      link: "https://maps.google.com/?q=129+Mile+End+Road+London+E1+4BG",
    },
    {
      illustration: "/images/illustrations/undraw_notifications_uvwd.svg",
      title: "Phone",
      content: "+44 20 3375 9568",
      // subContent: "+44 20 3375 9568",
      link: "tel:+44 20 3375 9568",
    },
    {
      illustration: "/images/illustrations/undraw_mail-sent_ujev.svg",
      title: "Email",
      content: "info@wexfordeducare.com",
      link: "mailto:info@wexfordeducare.com",
    },
    {
      illustration: "/images/illustrations/undraw_time-management_4ss6.svg",
      title: "Working Hours",
      content: "Monday – Friday: 9:30 AM – 5:30 PM",
    },
    {
      illustration: "/images/illustrations/undraw_business-decisions_3x2a.svg",
      title: "Company Number",
      content: "13810286",
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
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          />
          <div className="flex items-center gap-2 text-sm sm:text-base text-white/80">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-primary">Contact Us</span>
          </div>
        </div>
        <Meteors number={20} />
      </section>

      {/* Contact Info Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">
              <span className="text-secondary">Contact </span>
              <span className="text-primary">Information</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600">Get in touch with us through any of these channels</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
            {contactInfo.map((info, index) => {
              return (
                <Card key={index} className="group p-3 sm:p-4 md:p-6 hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-primary/30 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center space-y-2 sm:space-y-3 md:space-y-4">
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 p-2 sm:p-3 md:p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Image
                        src={info.illustration}
                        alt={info.title}
                        fill
                        className="object-contain p-1 sm:p-2 md:p-3"
                      />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm md:text-base font-bold text-secondary mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                        {info.title}
                      </h3>
                      <div className="text-xs sm:text-sm text-gray-600">
                        {info.link ? (
                          <a
                            href={info.link}
                            className="hover:text-primary transition-colors font-medium break-words"
                            target={info.link.startsWith("http") ? "_blank" : undefined}
                            rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                          >
                            {info.content}
                          </a>
                        ) : (
                          <span className="font-medium">{info.content}</span>
                        )}
                        {info.subContent && (
                          <>
                            <br />
                            <span className="text-gray-500 text-xs mt-1 inline-block">{info.subContent}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content: Form and Map Side by Side */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {/* Contact Form */}
            <Card className="w-full rounded-xl p-5 sm:p-8 md:p-10 bg-white shadow-lg flex flex-col">
              <div className="mb-5 sm:mb-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary mb-2">Send Us a Message</h2>
                <p className="text-sm sm:text-base text-gray-600">Fill out the form below and we&apos;ll get back to you soon.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 flex-1 flex flex-col">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      pattern="[0-9()#&+*\-=.]+"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                      placeholder="+44 123 456 7890"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                      placeholder="Course Inquiry"
                    />
                  </div>
                </div>

                <div className="flex-1 flex flex-col">
                  <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full flex-1 min-h-[150px] sm:min-h-[200px] px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none outline-none"
                    placeholder="Tell us about your educational goals and how we can help..."
                  />
                </div>

                {submitStatus.type && (
                  <div className={`p-3 sm:p-4 rounded-lg flex items-center gap-2 sm:gap-3 text-sm sm:text-base ${submitStatus.type === "success" ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"}`}>
                    <span className="font-medium">{submitStatus.message}</span>
                  </div>
                )}

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-secondary text-white py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span className="text-sm sm:text-base">Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-sm sm:text-base">Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </Card>

            {/* Google Map */}
            <Card className="w-full rounded-xl overflow-hidden shadow-lg p-0 flex flex-col">
              <div className="p-4 sm:p-6 bg-gradient-to-r from-primary to-secondary">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white flex items-center gap-2 sm:gap-3">
                  <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />
                  Find Us
                </h2>
              </div>
              <div className="flex-1 min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-0">
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
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary relative overflow-hidden">
        <BackgroundBeams className="absolute inset-0" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Begin Your Educational Journey?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Our dedicated team of education consultants is ready to guide you
            through every step of your application process.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link
              href="/apply-now"
              className="inline-block bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Apply Now
            </Link>
            <Link
              href="/courses"
              className="inline-block bg-white hover:bg-gray-100 text-secondary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
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
