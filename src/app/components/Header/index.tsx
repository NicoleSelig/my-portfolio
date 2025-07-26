"use client";
import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { GitHubIcon, LinkedInIcon } from "../Icons";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import Hamburger from "../Hamburger";
import ThemeSwitcher from "../ThemeSwitcher";

export default function Header() {
  const [mode, setMode] = useThemeSwitch() as [
    "light" | "dark",
    (mode: "light" | "dark") => void
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header className="w-full p-4 px-4 lg:px-10 flex items-center justify-between">
      <Logo />
      <div className="lg:hidden">
        <Hamburger
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          isOpen={isMenuOpen}
          className="w-16 h-16"
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 bg-dark/90 backdrop-blur-md transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-light text-4xl"
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full">
          <Link
            href="/"
            className="my-4 text-3xl text-light hover:text-accent transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="my-4 text-3xl text-light hover:text-accent transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/categories/all"
            className="my-4 text-3xl text-light hover:text-accent transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <ThemeSwitcher className="my-4" />
          <div className="flex mt-8">
            <a href="http://www.linkedin.com/in/NicoleSelig" className="mx-4">
              <LinkedInIcon
                className="w-8 h-8 stroke-light hover:stroke-accent"
                theme={mode}
              />
            </a>
            <a
              href="https://github.com/nlselig"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4"
            >
              <GitHubIcon className="w-8 h-8 stroke-light hover:stroke-accent fill-light hover:fill-accent" />
            </a>
          </div>
        </nav>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex w-max py-4 px-10 border border-solid border-surfaceHover rounded-full font-bold capitalize items-center fixed top-6 right-1/2 translate-x-1/2 bg-surface/80 backdrop-blur-sm z-50">
        <Link
          href="/"
          className="mr-4 text-xl hover:text-accent transition-colors"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="mx-4 text-xl hover:text-accent transition-colors"
        >
          About
        </Link>
        <Link
          href="/categories/all"
          className="mx-4 text-xl hover:text-accent transition-colors"
        >
          Blog
        </Link>
        <ThemeSwitcher className="pl-5" />
      </nav>
      <div className="hidden lg:flex">
        <a
          href="http://www.linkedin.com/in/NicoleSelig"
          className="inline-block w-12 h-12 mr-2"
        >
          <LinkedInIcon
            className="hover:scale-125 transition-all ease duration-200  stroke-dark dark:stroke-[#7dc4e4] hover:stroke-[#7dc4e4]"
            theme={mode}
          />
        </a>
        <a
          href="https://github.com/nlselig"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-13 h-13 mr-2"
        >
          <GitHubIcon className="hover:scale-125 transition-all ease duration-200 stroke-dark dark:stroke-[#9c9cf4] hover:stroke-[#9c9cf4] fill-dark dark:fill-[#9c9cf4] hover:fill-[#9c9cf4]" />
        </a>
      </div>
    </header>
  );
}
