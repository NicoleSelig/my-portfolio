import React from "react";
import type { Preview } from "@storybook/react";
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

const withThemeProvider = (Story: any, context: any) => {
  const isDark = context.globals.theme === "dark";

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <div
      className={addClasses(
        inter.variable,
        manrope.variable,
        "font-mr bg-light dark:bg-dark min-h-screen"
      )}
    >
      <Story />
    </div>
  );
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "fullscreen",
  },
  decorators: [withThemeProvider],
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "light", icon: "sun", title: "Light" },
          { value: "dark", icon: "moon", title: "Dark" },
        ],
        showName: true,
      },
    },
  },
};

export default preview;
