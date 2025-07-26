"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useThemeSwitch } from "./Hooks/useThemeSwitch";

// Dynamically import icons with no SSR
const SunIcon = dynamic(() => import("./Icons").then(mod => ({ default: mod.SunIcon })), { ssr: false });
const MoonIcon = dynamic(() => import("./Icons").then(mod => ({ default: mod.MoonIcon })), { ssr: false });

type ThemeSwitcherProps = {
  className?: string;
};

export default function ThemeSwitcher({ className = "" }: ThemeSwitcherProps) {
  const [mode, setMode] = useThemeSwitch() as [
    "light" | "dark",
    (mode: "light" | "dark") => void
  ];
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // For the initial server-side render, render a placeholder
  if (!isMounted) {
    return (
      <button
        className={`hover:scale-125 transition-all ease duration-200 ${className}`}
        aria-label="Theme switcher"
        title="Theme switcher"
      >
        <div className="w-8 h-8" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setMode(mode === "light" ? "dark" : "light")}
      className={`hover:scale-125 transition-all ease duration-200 ${className}`}
      aria-label={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
    >
      {mode === "light" ? (
        <MoonIcon className="transition-transform duration-300" />
      ) : (
        <SunIcon className="transition-transform duration-300" />
      )}
      <span className="sr-only">
        Switch to {mode === "light" ? "dark" : "light"} mode
      </span>
    </button>
  );
}
