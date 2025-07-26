"use client";

import React from "react";
import { SunIcon, MoonIcon } from "./Icons";
import { useThemeSwitch } from "./Hooks/useThemeSwitch";

type ThemeSwitcherProps = {
  className?: string;
};

export default function ThemeSwitcher({ className = "" }: ThemeSwitcherProps) {
  const [mode, setMode] = useThemeSwitch() as [
    "light" | "dark",
    (mode: "light" | "dark") => void
  ];

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
