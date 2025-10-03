"use client";

import { BookOpen, Clipboard, Users, Building2 } from "lucide-react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

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
    description:
      "We simplify your journey by conducting a thorough eligibility check, making sure your application meets the specific requirements of your chosen institution.",
  },
];

function Feature3DCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) {
  return (
    <CardContainer containerClassName="py-0">
      <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl hover:shadow-primary/[0.1] border-border rounded-xl p-6 border h-auto w-full">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-secondary mb-2"
        >
          {title}
        </CardItem>
        <CardItem
          translateZ="60"
          className="text-primary mb-4"
        >
          <Icon className="w-12 h-12" />
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-foreground/80 text-sm mt-2 max-w-sm"
        >
          {description}
        </CardItem>
        <CardItem
          translateZ="100"
          className="w-full mt-6"
        >
          <div className="h-1 w-full bg-gradient-to-r from-secondary via-primary to-secondary rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

export function AceternityWhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#1e3a8a] via-[#7c2d5e] to-[#dc2626]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left side - Text content */}
          <div className="text-white">
            <p className="text-sm font-medium mb-4 uppercase tracking-wider">
              WANT TO STUDY IN THE UK?
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Why Choose Us?
            </h2>
            <p className="text-base md:text-lg leading-relaxed opacity-90">
              Wexford Educare has been preferred as one of the top higher
              education consultants, when it comes to pursuing your higher degree
              in the UK
            </p>
          </div>

          {/* Right side - 2x2 grid of cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Feature3DCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
