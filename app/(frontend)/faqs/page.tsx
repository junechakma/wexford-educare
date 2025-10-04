"use client";

import Link from "next/link";
import { useState } from "react";
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams";
import { TextGenerateEffect } from "@/components/ui/aceternity/text-generate-effect";
import { Meteors } from "@/components/ui/aceternity/meteors";
import { ChevronDown } from "lucide-react";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      category: "General Questions",
      questions: [
        {
          question: "What is Wexford Educare?",
          answer: "Wexford Educare is a London-based education consultancy firm that provides tailored support for students pursuing academic opportunities in the UK and abroad. We offer end-to-end services including course selection, university applications, and student finance guidance."
        },
        {
          question: "Who can use your services?",
          answer: "Our services are available to local UK students, EU students, and international students who wish to study in the UK. We support students at all levels, from undergraduate to postgraduate programs."
        },
        {
          question: "Do you charge fees for your services?",
          answer: "We offer free consultancy for admissions support and government funding applications. However, some specialized services may have associated fees. Please contact us for detailed information about specific services."
        },
        {
          question: "How can I contact Wexford Educare?",
          answer: "You can reach us by email at info@wexfordeducare.com, call us at +44 20 3375 9568, or visit our office at 129 Mile End Road, London, E1 4BG, United Kingdom. Our office hours are Monday to Friday, 9:30 AM to 5:30 PM."
        }
      ]
    },
    {
      category: "Application Process",
      questions: [
        {
          question: "How do I start the application process?",
          answer: "Start by booking a free consultation with our team. We'll discuss your academic background, career goals, and course preferences. Then we'll guide you through each step of the application process, from selecting the right course to submitting your application."
        },
        {
          question: "What documents do I need for university applications?",
          answer: "Typically, you'll need academic transcripts, proof of English language proficiency (such as IELTS or TOEFL), personal statement, reference letters, passport copy, and CV. Specific requirements vary by university and course."
        },
        {
          question: "How long does the application process take?",
          answer: "The timeline varies depending on the course and institution. Generally, it takes 2-8 weeks to receive a decision after submitting a complete application. We recommend starting the process at least 6 months before your intended start date."
        },
        {
          question: "Can you help with UCAS applications?",
          answer: "Yes, we provide comprehensive support for UCAS applications, including guidance on course selection, personal statement writing, and tracking your application progress."
        }
      ]
    },
    {
      category: "Student Finance",
      questions: [
        {
          question: "Can you help me apply for student finance?",
          answer: "Absolutely! We provide free guidance on student finance applications, including tuition fee loans, maintenance loans, and other government funding options available to eligible students."
        },
        {
          question: "Am I eligible for student finance?",
          answer: "Eligibility depends on various factors including your residency status, the course you're applying for, and the institution. UK, EU, and some international students may be eligible. We can assess your eligibility during a consultation."
        },
        {
          question: "Are there scholarships available?",
          answer: "Yes, many universities offer scholarships and bursaries based on academic merit, financial need, or other criteria. We can help you identify and apply for relevant scholarship opportunities."
        },
        {
          question: "What is the difference between tuition fee loans and maintenance loans?",
          answer: "Tuition fee loans cover the cost of your course fees and are paid directly to your university. Maintenance loans help with living costs such as accommodation, food, and transportation, and are paid directly to you."
        }
      ]
    },
    {
      category: "Courses and Universities",
      questions: [
        {
          question: "How do I choose the right course?",
          answer: "We help you choose the right course by considering your interests, career goals, academic background, and future prospects. Our team provides personalized recommendations based on comprehensive assessments."
        },
        {
          question: "Which universities do you work with?",
          answer: "We work with a wide range of UK universities, including Russell Group institutions, modern universities, and specialist colleges. We'll help you find the best fit for your needs and qualifications."
        },
        {
          question: "Can I change my course after applying?",
          answer: "In some cases, yes. However, it depends on the university's policies and the stage of your application. We recommend finalizing your course choice before applying to avoid complications."
        },
        {
          question: "Do you offer guidance for postgraduate programs?",
          answer: "Yes, we provide comprehensive support for postgraduate applications, including Master's and PhD programs. We can help with research proposal writing, supervisor identification, and funding applications."
        }
      ]
    },
    {
      category: "International Students",
      questions: [
        {
          question: "Can international students use your services?",
          answer: "Yes, we support international students throughout their journey to study in the UK, including visa guidance, course selection, and settling in the UK."
        },
        {
          question: "Do you help with visa applications?",
          answer: "We provide guidance on the student visa application process and can direct you to authorized immigration advisors for detailed visa support."
        },
        {
          question: "What English language requirements do I need to meet?",
          answer: "Most universities require IELTS, TOEFL, or equivalent English language test scores. The required score varies by course and institution, typically ranging from IELTS 5.5 to 7.0. We can advise on specific requirements."
        },
        {
          question: "Can you help with accommodation?",
          answer: "While we don't directly provide accommodation, we can guide you on finding suitable student housing options, including university halls and private accommodation."
        }
      ]
    },
    {
      category: "After Application",
      questions: [
        {
          question: "What happens after I submit my application?",
          answer: "After submission, we'll track your application and keep you updated on its progress. Universities typically respond within 2-8 weeks. We'll help you understand any offers you receive and guide you through acceptance procedures."
        },
        {
          question: "What is a conditional offer?",
          answer: "A conditional offer means you've been accepted subject to meeting certain conditions, such as achieving specific grades or providing additional documents. We'll help you understand and fulfill these conditions."
        },
        {
          question: "Do you provide support after enrollment?",
          answer: "Yes, our support continues even after you enroll. We're here to help with any questions or challenges you may face during your academic journey."
        },
        {
          question: "Can I defer my course start date?",
          answer: "Many universities allow deferrals, but policies vary. We can help you communicate with the university and navigate the deferral process if needed."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-secondary py-16 md:py-24 overflow-hidden">
        <BackgroundBeams className="absolute inset-0" />
        <div className="container mx-auto px-4 relative z-10">
          <TextGenerateEffect
            words="Frequently Asked Questions"
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          />
          <div className="flex items-center gap-2 text-white/80">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-primary">FAQs</span>
          </div>
        </div>
        <Meteors number={20} />
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-lg text-gray-700 mb-12 text-center">
            Find answers to common questions about our services, application processes, and student support.
          </p>

          <div className="space-y-8">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 100 + faqIndex;
                    const isOpen = openIndex === globalIndex;

                    return (
                      <div
                        key={faqIndex}
                        className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-primary/30 transition-colors"
                      >
                        <button
                          onClick={() => toggleFAQ(globalIndex)}
                          className="w-full px-6 py-4 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-semibold text-secondary pr-4">
                            {faq.question}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            isOpen ? "max-h-96" : "max-h-0"
                          }`}
                        >
                          <div className="px-6 py-4 bg-gray-50 border-t-2 border-gray-200">
                            <p className="text-gray-700">{faq.answer}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 p-8 bg-secondary rounded-xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="mb-6 text-white/90">
              Can&apos;t find the answer you&apos;re looking for? Our team is here to help!
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
