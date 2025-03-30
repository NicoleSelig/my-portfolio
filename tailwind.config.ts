import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Catppuccin Macchiato colors
        dark: "#24273a", // base
        light: "#cad3f5", // text
        accent: "#c6a0f6", // purple
        accentDark: "#f5a97f", // peach
        gray: "#a5adcb", // subtext1
        surface: "#363a4f", // surface0
        surfaceHover: "#494d64", // surface1
        overlay: "#6e738d", // overlay0
        rose: "#f4dbd6", // rosewater
        lavender: "#b7bdf8", // lavender
        blue: "#8aadf4", // blue
        sapphire: "#7dc4e4", // sapphire
        sky: "#91d7e3", // sky
        teal: "#8bd5ca", // teal
        green: "#a6e3a1", // green
        yellow: "#eed49f", // yellow
        maroon: "#ee99a0", // maroon
        red: "#ed8796", // red
        mauve: "#c4a7e7", // mauve
        flamingo: "#f0c6c6", // flamingo
        pink: "#f5bde6", // pink
      },
      fontFamily: {
        mr: ["Segoe UI", "var(--font-mr)"],
        in: ["Segoe UI", "var(--font-in)"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
export default config;
