"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const partners = [
  { name: "GBS", logo: "/images/homepage/gbs.png" },
  { name: "CECOS College London", logo: "/images/homepage/CECOS-College-London.webp" },
  { name: "UoB Manchester", logo: "/images/homepage/UoB-Manchester.webp" },
  { name: "UCLan University", logo: "/images/homepage/UCLan-University.webp" },
  { name: "ARU London", logo: "/images/homepage/ARU-London.webp" },
  { name: "Icon College", logo: "/images/homepage/Icon-College-3.jpg" },
  { name: "Icon College", logo: "/images/homepage/Icon-College-2.jpg" },
  { name: "Icon College", logo: "/images/homepage/Icon-College-1.jpg" },
  { name: "UKMC", logo: "/images/homepage/ukmc.png" },
];

export function Partners() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerView(2);
      else if (window.innerWidth < 1024) setItemsPerView(3);
      else setItemsPerView(4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partners.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const visiblePartners = [];
  for (let i = 0; i < itemsPerView; i++) {
    visiblePartners.push(partners[(currentIndex + i) % partners.length]);
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">
            Partners – Wexford Educare
          </h2>
          <p className="text-xl text-gray-600">
            Official partners with over 20 leading universities and colleges
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {visiblePartners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center border border-gray-100 hover:border-primary aspect-square"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {partners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to partner ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
