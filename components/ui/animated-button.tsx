"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
  hoverBorderColor?: string;
  className?: string;
}

export const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  (
    {
      children,
      bgColor = "bg-primary",
      textColor = "text-white",
      hoverBgColor = "bg-secondary",
      hoverTextColor = "text-white",
      hoverBorderColor = "border-secondary",
      className,
      ...props
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <button
        ref={ref}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          "relative overflow-hidden px-6 py-3 rounded-lg font-semibold transition-all duration-300 ease-out",
          "flex items-center justify-center",
          "active:scale-95",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          isHovered
            ? `${hoverBgColor}/95 ${hoverTextColor} scale-105 shadow-xl border-2 ${hoverBorderColor} backdrop-blur supports-[backdrop-filter]:${hoverBgColor}/60`
            : `${bgColor} ${textColor} border-2 border-transparent`,
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center">{children}</span>
        {isHovered && (
          <span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"
            style={{
              animation: "shimmer 1.5s infinite",
            }}
          />
        )}
        <style jsx>{`
          @keyframes shimmer {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
        `}</style>
      </button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";
