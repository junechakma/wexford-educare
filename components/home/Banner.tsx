"use client";

import Link from "next/link";

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
            <Link
              href="/apply-now"
              className="bg-primary text-secondary px-8 py-4 rounded-full font-semibold hover:bg-primary-light transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Apply Now
            </Link>
            <Link
              href="/contact-us"
              className="bg-transparent border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-secondary transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
