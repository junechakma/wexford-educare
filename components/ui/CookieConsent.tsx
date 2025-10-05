"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Cookie } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
    // Initialize analytics or other cookies here
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted",
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
    // Disable analytics or other cookies here
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
      });
    }
  };

  const handleClose = () => {
    // Treat close as accept (common practice)
    handleAccept();
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom duration-500">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white border-2 border-gray-200 rounded-2xl shadow-2xl p-6 md:p-8 relative">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close cookie banner"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Cookie className="w-6 h-6 text-primary" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-bold text-secondary mb-2">
                We Use Cookies
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                We use cookies to enhance your browsing experience, analyze our website traffic, and provide relevant information. By clicking &ldquo;Accept All&rdquo;, you consent to our use of cookies.{" "}
                <Link
                  href="/cookies-policy"
                  className="text-primary hover:underline font-semibold"
                >
                  Learn more
                </Link>
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <AnimatedButton
                onClick={handleDecline}
                bgColor="bg-white"
                textColor="text-gray-700"
                hoverBgColor="bg-white"
                hoverTextColor="text-primary"
                hoverBorderColor="border-primary"
                className="px-6 py-3 whitespace-nowrap"
              >
                Decline
              </AnimatedButton>
              <AnimatedButton
                onClick={handleAccept}
                bgColor="bg-primary"
                textColor="text-white"
                hoverBgColor="bg-white"
                hoverTextColor="text-primary"
                hoverBorderColor="border-primary"
                className="px-6 py-3 whitespace-nowrap"
              >
                Accept All
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
