import React from "react";
import { Inter, Manrope } from "next/font/google";
import "../src/app/globals.css";
import { addClasses } from "../src/app/utils";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
});

export const withThemeProvider = (Story: any, context: any) => {
  // Get theme from story parameters
  const theme = context.parameters?.theme || context.globals.theme;
  const isDark = theme === "dark";

  // Set theme on mount and when it changes
  React.useEffect(() => {
    // Remove any existing theme classes
    document.documentElement.classList.remove("light", "dark");
    // Add the current theme class
    document.documentElement.classList.add(isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div
      className={addClasses(
        inter.variable,
        manrope.variable,
        "font-mr bg-light dark:bg-dark min-h-screen",
        isDark ? "dark" : "light"
      )}
    >
      <Story />
    </div>
  );
};
