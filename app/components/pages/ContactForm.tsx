"use client";

import { useState } from "react";
import { Slide } from "@/app/animation/Slide";

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function validate() {
    const tempErrors: FormErrors = {};
    let isValid = true;

    if (!name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        tempErrors.email = "Please enter a valid email address";
        isValid = false;
      }
    }

    if (!message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        setErrors({});
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission failed:", error);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <Slide delay={0.1}>
        <div className="max-w-2xl mt-12 p-6 rounded-lg dark:bg-primary-bg bg-zinc-50 border dark:border-zinc-800 border-zinc-200">
          <h2 className="text-2xl font-bold mb-4 font-incognito dark:text-white text-zinc-800">
            Thank you!
          </h2>
          <p className="dark:text-zinc-400 text-zinc-600 leading-relaxed mb-6">
            Your message has been sent successfully. I will get back to you as soon as possible.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="px-6 py-2 rounded-md font-incognito font-semibold text-center border border-transparent dark:bg-zinc-800 bg-zinc-200 dark:hover:border-zinc-700 hover:border-zinc-300 dark:text-white text-zinc-800 duration-200"
          >
            Send another message
          </button>
        </div>
      </Slide>
    );
  }

  return (
    <Slide delay={0.1}>
      <form onSubmit={handleSubmit} className="max-w-2xl mt-12" noValidate>
        {status === "error" && (
          <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm">
            Oops! Something went wrong while sending your message. Please try again.
          </div>
        )}

        <div className="flex flex-col gap-y-2 mb-6">
          <label
            htmlFor="name"
            className="text-sm font-semibold tracking-tight dark:text-zinc-300 text-zinc-700 font-incognito"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={status === "loading"}
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-md dark:bg-primary-bg bg-zinc-50 border dark:border-zinc-800 border-zinc-200 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 dark:text-white text-zinc-800 placeholder-zinc-400 dark:placeholder-zinc-500 duration-200"
          />
          {errors.name && (
            <p className="text-xs text-red-500 mt-1" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-y-2 mb-6">
          <label
            htmlFor="email"
            className="text-sm font-semibold tracking-tight dark:text-zinc-300 text-zinc-700 font-incognito"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading"}
            placeholder="johndoe@example.com"
            className="w-full px-4 py-3 rounded-md dark:bg-primary-bg bg-zinc-50 border dark:border-zinc-800 border-zinc-200 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 dark:text-white text-zinc-800 placeholder-zinc-400 dark:placeholder-zinc-500 duration-200"
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-y-2 mb-6">
          <label
            htmlFor="message"
            className="text-sm font-semibold tracking-tight dark:text-zinc-300 text-zinc-700 font-incognito"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={status === "loading"}
            placeholder="Write your message here..."
            className="w-full px-4 py-3 rounded-md dark:bg-primary-bg bg-zinc-50 border dark:border-zinc-800 border-zinc-200 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 dark:text-white text-zinc-800 placeholder-zinc-400 dark:placeholder-zinc-500 duration-200 resize-y"
          />
          {errors.message && (
            <p className="text-xs text-red-500 mt-1" role="alert">
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full sm:w-auto px-6 py-3 rounded-md font-incognito font-semibold text-center border border-transparent dark:bg-primary-bg bg-zinc-100 dark:hover:border-zinc-700 hover:border-zinc-200 dark:text-white text-zinc-800 duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </Slide>
  );
}
