"use client";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { GitHubIcon, LinkedInIcon, SunIcon, MoonIcon } from "../Icons";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";

export default function Header() {
  const [mode, setMode] = useThemeSwitch();
  return (
    <header className="w-full p-4 px-10 flex items-center justify-between">
      <Logo />
      <nav className="w-max py-10 px-10 border border-solid border-surfaceHover rounded-full font-medium capitalize flex items-center fixed top-6 right-1/2 translate-x-1/2 bg-surface/80 backdrop-blur-sm z-50">
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
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className="hover:text-accent transition-colors pl-5"
        >
          {mode === "light" ? <MoonIcon /> : <SunIcon />}
        </button>
      </nav>
      <div>
        <a
          href="http://www.linkedin.com/in/NicoleSelig"
          className="inline-block w-12 h-12 mr-2"
        >
          <LinkedInIcon className="hover:scale-125 transition-all ease duration-200 stroke-dark dark:stroke-[#9c9cf4] hover:stroke-[#9c9cf4] fill-dark dark:fill-[#9c9cf4] hover:fill-[#9c9cf4]" />
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
