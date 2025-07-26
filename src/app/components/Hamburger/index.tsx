"use client";
import React, { useRef, useEffect } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import hamburgerAnimation from "../../../../public/hamburger-menu-lottie.json";

interface HamburgerProps {
  className?: string;
  onClick?: () => void;
  isOpen?: boolean;
}

export default function Hamburger({
  className = "",
  onClick,
  isOpen = false,
}: HamburgerProps) {
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);

  useEffect(() => {
    if (lottieRef.current) {
      if (isOpen) {
        // Animate from hamburger to X
        lottieRef.current.playSegments([0, 60], true);
      } else {
        // Animate from X to hamburger
        lottieRef.current.playSegments([60, 0], true);
      }
    }
  }, [isOpen]);

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center ${className}`}
      aria-label="Toggle menu"
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={hamburgerAnimation}
        loop={false}
        autoplay={false}
        initialSegment={isOpen ? [60, 60] : [0, 0]} // Show X when open, hamburger when closed
        style={{ width: 80, height: 80 }}
      />
    </button>
  );
}
