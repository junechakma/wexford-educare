"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";

export function WhatsAppButton() {
  const phoneNumber = "447437402307";
  const message = encodeURIComponent(
    "hello Blossom Educare, I need some help about admission. Would you mind to help me?"
  );

  return (
    <Link
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contact us on WhatsApp"
    >
      <div className="bg-[#25D366] text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 flex items-center gap-3 group-hover:pr-6">
        <MessageCircle className="w-8 h-8" />
        <span className="hidden group-hover:inline-block text-sm font-semibold whitespace-nowrap transition-all duration-300">
          Find us on Whatsapp
        </span>
      </div>
    </Link>
  );
}
