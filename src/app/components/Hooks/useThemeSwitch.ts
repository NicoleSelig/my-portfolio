"use client";

import { useEffect, useState } from "react";

export function useThemeSwitch() {
  const preferDarkQuery = "(prefers-color-scheme:dark)";
  const storageKey = "theme";

  const toggleTheme = (theme: string) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    window.localStorage.setItem(storageKey, theme);
  };

  const getUserPreference = () => {
    if (typeof window === "undefined") return "light"; // Default for SSR
    
    const userPref = window.localStorage.getItem(storageKey);
    if (userPref) {
      return userPref;
    }
    return window.matchMedia(preferDarkQuery).matches ? "dark" : "light";
  };

  // Use a consistent default for server-side rendering to prevent hydration mismatch
  const [mode, setMode] = useState("light"); // Always start with "light" for SSR

  useEffect(() => {
    // We need to run this in useEffect to ensure it only runs on the client
    // Initialize theme based on user preference on component mount
    const initializeTheme = () => {
      const savedMode = getUserPreference();
      setMode(savedMode);
      toggleTheme(savedMode);
    };

    // Run on mount to set initial theme
    initializeTheme();

    // Listen for system preference changes
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      // Only update if user hasn't explicitly set a preference
      if (!window.localStorage.getItem(storageKey)) {
        const newMode = e.matches ? "dark" : "light";
        setMode(newMode);
        toggleTheme(newMode);
      }
    };

    // Modern API for event listener
    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  useEffect(() => {
    toggleTheme(mode);
  }, [mode]);

  return [mode, setMode] as const;
}
