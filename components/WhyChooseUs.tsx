"use client";

import { useState } from "react";
import { BookOpen, Clipboard, Users, Building2 } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Career Courses",
    description:
      "From Bachelor's and Master's degrees to specialized HNC/HND programs, we help you find the trending course that will build your career.",
  },
  {
    icon: Clipboard,
    title: "Expert Guidance",
    description:
      "Schedule a free consultation with Wexford Educare. We provide dedicated support to help you choose and apply for your ideal course with confidence.",
  },
  {
    icon: Users,
    title: "Top Institutions",
    description:
      "As official partners with over 20 leading universities and colleges, we open doors to a world of educational opportunities for you.",
  },
  {
    icon: Building2,
    title: "Easy Admission",
    backTitle: "Trending Courses",
    description:
      "We simplify your journey by conducting a thorough eligibility check, making sure your application meets the specific requirements of your chosen institution.",
  },
];

function FlipCard({
  icon: Icon,
  title,
  backTitle,
  description,
}: {
  icon: any;
  title: string;
  backTitle?: string;
  description: string;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group perspective-1000 h-64"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden bg-[#1e293b] rounded-2xl p-8 flex flex-col items-center justify-center text-white shadow-xl">
          <Icon className="w-16 h-16 mb-4 text-[#d4af37]" />
          <h3 className="text-2xl font-bold text-center">{title}</h3>
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white border-2 border-[#d4af37] rounded-2xl p-6 flex flex-col items-center justify-center shadow-xl">
          <h3 className="text-xl font-bold text-[#1e293b] mb-4 text-center">
            {backTitle || title}
          </h3>
          <p className="text-gray-700 text-center">{description}</p>
        </div>
      </div>
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1e293b]">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wexford Educare has been preferred as one of the top higher
            education consultants, when it comes to pursuing your higher degree
            in the UK
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FlipCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              backTitle={feature.backTitle}
              description={feature.description}
            />
          ))}
        </div>
      </div>

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
