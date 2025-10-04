"use client";

import Link from "next/link";
import { AnimatedButton } from "@/components/ui/animated-button";

export function Banner() {
  return (
    <section className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Start Your <span className="text-primary">UK Education Journey?</span>
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Get <span className="text-primary font-semibold">expert guidance</span> from our experienced counselors and take the first step towards your <span className="text-primary font-semibold">dream university</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/apply-now">
              <AnimatedButton
                bgColor="bg-primary"
                textColor="text-secondary"
                hoverBgColor="bg-secondary"
                hoverTextColor="text-primary"
                hoverBorderColor="border-primary"
                className="px-8 py-4 rounded-full shadow-lg"
              >
                Apply Now
              </AnimatedButton>
            </Link>
            <Link href="/contact-us">
              <AnimatedButton
                bgColor="bg-transparent"
                textColor="text-primary"
                hoverBgColor="bg-primary"
                hoverTextColor="text-white"
                hoverBorderColor="border-secondary"
                className="px-8 py-4 rounded-full border-primary"
              >
                Contact Us
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
