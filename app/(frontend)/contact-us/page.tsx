"use client";

import { useState } from "react";
import Link from "next/link";
import { CardContainer, CardBody, CardItem } from "@/components/ui/aceternity/3d-card";
import { Card } from "@/components/ui/card";
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
      title: "Address",
      content: "129 Mile End Road, London, E1 4BG, United Kingdom",
      link: "https://maps.google.com/?q=129+Mile+End+Road+London+E1+4BG",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "02080894489",
      subContent: "+447437402307",
      link: "tel:02080894489",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@blossomeducare.co.uk",
      link: "mailto:info@blossomeducare.co.uk",
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Monday – Friday: 9:30 AM – 5:30 PM",
    },
    {
      icon: Building2,
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

      {/* Contact Info Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-base font-bold text-secondary">{info.title}</h3>
                    <div className="text-sm text-gray-600">
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
                          <span className="text-gray-500 text-xs">{info.subContent}</span>
                        </>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content: Form and Map Side by Side */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Contact Form */}
            <Card className="w-full rounded-xl p-8 md:p-10 bg-white shadow-lg flex flex-col">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-2">Send Us a Message</h2>
                <p className="text-gray-600">Fill out the form below and we&apos;ll get back to you soon.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 flex-1 flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
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
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
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
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
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
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                      placeholder="Course Inquiry"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={8}
                    className="w-full h-full min-h-[200px] px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none outline-none"
                    placeholder="Tell us about your educational goals and how we can help..."
                  />
                </div>

                {submitStatus.type && (
                  <div className={`p-4 rounded-lg flex items-center gap-3 ${submitStatus.type === "success" ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"}`}>
                    <span className="font-medium">{submitStatus.message}</span>
                  </div>
                )}

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-secondary text-white py-4 rounded-lg font-semibold text-base transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
                </div>
              </form>
            </Card>

            {/* Google Map */}
            <Card className="w-full rounded-xl overflow-hidden shadow-lg p-0 flex flex-col">
              <div className="p-6 bg-gradient-to-r from-primary to-secondary">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                  <MapPin className="w-8 h-8" />
                  Find Us
                </h2>
              </div>
              <div className="flex-1 min-h-[600px] lg:min-h-0">
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
