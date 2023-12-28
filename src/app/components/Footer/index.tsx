"use client";
import { useForm } from "react-hook-form";
import {LinkedInIcon, GitHubIcon} from '../Icons'
import Link from 'next/link'

export default function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <footer className="mt-16 rounded-2xl bg-dark m-10 flex flex-col items-center text-light">
      <h3 className="mt-16 font-medium text-center captialize text-4xl px-4">
        Interesting Stories | Updates | Guides
      </h3>
      <p className="mt-5 px4 text-center w-3/5 front-light text-base">
        Subscribe to learn about new technology and updates. Join over 5000+
        members community to stay up to date with the latest news.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 min-w-[384px] flex items-stretch bg-light p-2 rounded mx-4"
      >
        <input
          type="email"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          className="w-full bg-transparent pl-0 text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1"
        />

        <input
          type="submit"
          className="bg-dark text-light cursor-pointer font-medium rounded px-5 py-1"
        />
      </form>
      <div className="flex items-center mt-8">
        <a
          href="http://www.linkedin.com/in/NicoleSelig"
          className="inline-block w-12 h-12 mr-2"
        >
          <LinkedInIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href="http://www.github.com/NicoleSelig"
          className="inline-block w-13 h-13 mr-2  fill-light"
        >
          <GitHubIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>

      <div className="w-full mt-24 relative fot-medium border-t border-solid border-light py-6 px-8 flex flex-row items-center justify-between">
        <span className="text-center">&copy;2023 Nicole Selig. All rights reserved.</span>
        <Link href="/sitemap.xml" className="text-center underline">sitemap.xml</Link>
      </div>
    </footer>
  );
}
