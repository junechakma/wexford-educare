"use client";

import Image from "next/image";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Meteors } from "@/components/ui/aceternity/meteors";

const features = [
  {
    illustration: "/images/illustrations/undraw_education_3vwh.svg",
    title: "Career Courses",
    description:
      "From Bachelor's and Master's degrees to specialized HNC/HND programs, we help you find the trending course that will build your career.",
  },
  {
    illustration: "/images/illustrations/undraw_teaching_58yg.svg",
    title: "Expert Guidance",
    description:
      "Schedule a free consultation with Wexford Educare. We provide dedicated support to help you choose and apply for your ideal course with confidence.",
  },
  {
    illustration: "/images/illustrations/undraw_graduation_u7uc.svg",
    title: "Top Institutions",
    description:
      "As official partners with over 20 leading universities and colleges, we open doors to a world of educational opportunities for you.",
  },
  {
    illustration: "/images/illustrations/undraw_online-learning_tgmv.svg",
    title: "Easy Admission",
    description:
      "We simplify your journey by conducting a thorough eligibility check, making sure your application meets the specific requirements of your chosen institution.",
  },
];

function Feature3DCard({
  illustration,
  title,
  description,
}: {
  illustration: string;
  title: string;
  description: string;
}) {
  return (
    <CardContainer containerClassName="py-0 !flex !items-stretch h-full">
      <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl hover:shadow-primary/[0.1] border-border rounded-xl p-6 border !h-full w-full flex flex-col !min-h-[340px]">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-secondary mb-2"
        >
          {title}
        </CardItem>
        <CardItem
          translateZ="60"
          className="mb-4 relative w-full h-32"
        >
          <Image
            src={illustration}
            alt={title}
            fill
            className="object-contain"
          />
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-foreground/80 text-sm mt-2 flex-1"
        >
          {description}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

export function AceternityWhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary to-primary relative overflow-hidden">
      <Meteors number={30} />
      <div className="container mx-auto px-4 relative z-10">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 auto-rows-fr">
            {features.map((feature, index) => (
              <Feature3DCard
                key={index}
                illustration={feature.illustration}
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
