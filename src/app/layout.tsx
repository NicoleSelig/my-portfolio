import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { addClasses } from "./utils";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { siteMetaData } from "./utils/siteMetaData";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
  fallback: ["Segoe UI", "system-ui", "sans-serif"],
});
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
  fallback: ["Segoe UI", "system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetaData.siteUrl),
  title: {
    template: `%s | ${siteMetaData.title}`,
    default: siteMetaData.description,
  },
  openGraph: {
    title: siteMetaData.title,
    description: siteMetaData.description,
    url: siteMetaData.siteUrl,
    siteName: siteMetaData.title,
    // images: [siteMetaData.socialBanner],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={addClasses(
          inter.variable,
          manrope.variable,
          "font-mr bg-light dark:bg-dark"
        )}
      >
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`
  // On the server-side, we'll always default to light mode for hydration consistency
  // This ensures our server and client rendering match during hydration
  if (typeof window !== 'undefined') {
    // This code only runs on the client
    const getThemePreference = () => {
      // Check localStorage first
      if (typeof localStorage !== 'undefined') {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
          return storedTheme;
        }
      }
      
      // Then check system preference
      if (window.matchMedia) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      
      // Default to light mode if neither is available
      return 'light';
    };
    
    // Get the initial theme
    const theme = getThemePreference();
    
    // Apply the theme immediately to avoid flicker
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Also set up a listener for system theme changes (when no user preference is saved)
    if (window.matchMedia && !localStorage.getItem('theme')) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        const newTheme = e.matches ? 'dark' : 'light';
        if (newTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      });
    }
  }
  `}
        </Script>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
