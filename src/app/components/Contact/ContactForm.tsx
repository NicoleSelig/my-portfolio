"use client";
import React from "react";
import { useForm } from "react-hook-form";
import ContactError from "./ContactError";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    criteriaMode: "all",
  });

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col items-start space-y-6 mt-12 text-xl text-center font-medium leading-relaxed font-in text-dark dark:text-light"
    >
      <input
        type="text"
        placeholder="Name"
        className="w-2/5 rounded text-dark dark:text-light dark:bg-dark dark:border-light"
        {...register("entries", {
          required: "Name is required",
          maxLength: {
            value: 180,
            message: "Name must be a max of 100 characters",
          },
        })}
      />
      <ContactError errors={errors} name="name" />
      <input
        type="text"
        placeholder="Email"
        className="w-2/5 rounded text-dark dark:text-light dark:bg-dark dark:border-light"
        {...register("entries", {
          required: "Email is required",
          pattern: { value: /^\S+@\S+$/i, message: "Valid email required" },
        })}
      />
      <ContactError errors={errors} name="email" />
      <textarea
        placeholder="What would you like to chat about?"
        className="w-full rounded text-dark dark:text-light dark:bg-dark dark:border-light"
        {...register("entries", { required: "A message is required." })}
      />
      <ContactError errors={errors} name="message" />
      <input
        type="submit"
        className="mt-8 font-medium inline-block capitalize text-xl py-3 px-8 border-2 border-solid border-dark dark:border-light text-dark dark:text-light dark:bg-dark/80 hover:dark:bg-dark rounded cursor-pointer"
      />
    </form>
  );
}
