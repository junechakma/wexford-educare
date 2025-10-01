"use client";

import { useState } from "react";
import Link from "next/link";
import { CardContainer, CardBody, CardItem } from "@/components/ui/aceternity/3d-card";
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams";
import { TextGenerateEffect } from "@/components/ui/aceternity/text-generate-effect";
import { Meteors } from "@/components/ui/aceternity/meteors";
import { Send, CheckCircle2 } from "lucide-react";

export default function ApplyNow() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    campus: "",
    status: "",
    course: "",
    bestTime: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const campuses = [
    "London",
    "Birmingham",
    "Manchester",
    "Leeds",
    "Leicester",
    "Nottingham",
    "Derby",
    "Northampton",
    "Others",
  ];

  const statuses = [
    "British",
    "Settlement/ ILR",
    "Pre-Settlement",
    "Refugee",
  ];

  const courses = [
    "Business Management",
    "Health & Social Care",
    "Computing",
    "Accounting and Finance",
    "Construction Management",
    "Project Management",
    "Law",
    "Psychology",
    "Digital Marketing",
    "Other",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
          "Your application has been submitted successfully! Our team will contact you soon.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        campus: "",
        status: "",
        course: "",
        bestTime: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Beams */}
      <section className="relative bg-secondary py-16 md:py-24 overflow-hidden">
        <BackgroundBeams className="absolute inset-0" />
        <div className="container mx-auto px-4 relative z-10">
          <TextGenerateEffect
            words="Apply Now"
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          />
          <div className="flex items-center gap-2 text-white/80">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-primary">Apply Now</span>
          </div>
        </div>
        <Meteors number={20} />
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Start Your Journey Today
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Find out if you qualify to study in the UK and access government
            funding by completing the form below. If you&apos;re eligible, one of our
            consultants will contact you to explain the process and guide you
            through the next steps.
          </p>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <CardContainer containerClassName="py-0">
              <CardBody className="bg-white relative group/card hover:shadow-2xl w-full rounded-xl p-8 md:p-12 border-0 shadow-lg">
                <CardItem
                  translateZ="50"
                  className="text-2xl md:text-3xl font-bold text-secondary mb-2"
                >
                  Application Form
                </CardItem>
                <CardItem
                  translateZ="40"
                  className="text-gray-600 mb-10"
                >
                  Complete all required fields below to submit your application.
                </CardItem>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <CardItem translateZ="40">
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Your Full Name *
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
                        Your Email Address *
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

                  {/* Phone Number */}
                  <CardItem translateZ="40">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Your Phone Number *
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

                  {/* Campus and Status */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <CardItem translateZ="40">
                      <label
                        htmlFor="campus"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Which Campus Are You Preferred? *
                      </label>
                      <select
                        id="campus"
                        name="campus"
                        value={formData.campus}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none bg-white"
                      >
                        <option value="">Select Campus</option>
                        {campuses.map((campus) => (
                          <option key={campus} value={campus}>
                            {campus}
                          </option>
                        ))}
                      </select>
                    </CardItem>

                    <CardItem translateZ="40">
                      <label
                        htmlFor="status"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Your Current Status in UK? *
                      </label>
                      <select
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none bg-white"
                      >
                        <option value="">Select Status</option>
                        {statuses.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    </CardItem>
                  </div>

                  {/* Course */}
                  <CardItem translateZ="40">
                    <label
                      htmlFor="course"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Which course are you interested in? *
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none bg-white"
                    >
                      <option value="">Select Course</option>
                      {courses.map((course) => (
                        <option key={course} value={course}>
                          {course}
                        </option>
                      ))}
                    </select>
                  </CardItem>

                  {/* Best Time to Call */}
                  <CardItem translateZ="40">
                    <label
                      htmlFor="bestTime"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      What is the best time to call you?
                    </label>
                    <input
                      type="text"
                      id="bestTime"
                      name="bestTime"
                      value={formData.bestTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                      placeholder="eg. Tomorrow 9AM - 11AM"
                    />
                  </CardItem>

                  {/* Message */}
                  <CardItem translateZ="40">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Enter your message (If any)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none outline-none"
                      placeholder="Tell us more about your educational goals..."
                    />
                  </CardItem>

                  {/* Success Message */}
                  {submitStatus.type && (
                    <CardItem translateZ="40">
                      <div
                        className={`p-5 rounded-lg flex items-start gap-4 ${
                          submitStatus.type === "success"
                            ? "bg-green-50 text-green-800 border border-green-200"
                            : "bg-red-50 text-red-800 border border-red-200"
                        }`}
                      >
                        {submitStatus.type === "success" && (
                          <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                        )}
                        <span className="font-medium">{submitStatus.message}</span>
                      </div>
                    </CardItem>
                  )}

                  {/* Submit Button */}
                  <CardItem translateZ="50" className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-secondary hover:bg-primary text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Submit Application
                        </>
                      )}
                    </button>
                  </CardItem>
                </form>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </section>

      {/* Why Apply Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
            Why Apply With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Free Consultation",
                description:
                  "Get expert guidance on course selection and application process at no cost.",
              },
              {
                title: "Government Funding",
                description:
                  "We help you access available government funding and financial support options.",
              },
              {
                title: "End-to-End Support",
                description:
                  "From application to enrollment, we support you throughout your educational journey.",
              },
            ].map((item, index) => (
              <CardContainer key={index} containerClassName="py-0">
                <CardBody className="bg-white relative group/card hover:shadow-2xl w-full h-full rounded-xl p-8 border-0 shadow-md">
                  <CardItem
                    translateZ="50"
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4"
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </CardItem>
                  <CardItem
                    translateZ="40"
                    className="text-xl font-bold text-secondary mb-3"
                  >
                    {item.title}
                  </CardItem>
                  <CardItem
                    translateZ="30"
                    className="text-gray-600 leading-relaxed"
                  >
                    {item.description}
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-secondary relative overflow-hidden">
        <BackgroundBeams className="absolute inset-0" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Have Questions?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Our team is here to help. Contact us for any questions about the
            application process or course offerings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Contact Us
            </Link>
            <Link
              href="/courses"
              className="inline-block bg-white hover:bg-gray-100 text-secondary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Browse Courses
            </Link>
          </div>
        </div>
        <Meteors number={15} />
      </section>
    </div>
  );
}
