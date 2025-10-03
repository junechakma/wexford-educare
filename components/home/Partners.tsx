"use client";

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
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-secondary">Partners – </span>
            <span className="text-primary">Wexford Educare</span>
          </h2>
          <p className="text-xl text-gray-600">
            Official partners with over 20 leading universities and colleges
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {partners.map((partner, index) => (
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
      </div>
    </section>
  );
}
