"use client";

import clsx from "clsx";
import { useId, useState } from "react";
import { twMerge } from "tailwind-merge";

type CTAFormProps = {
  variant?: "dark" | "light";
  align?: "start" | "center";
  submitLabel?: string;
};

type Status = "idle" | "loading" | "success" | "error";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function CTAForm({
  variant = "light",
  align = "start",
  submitLabel = "Join Waitlist",
}: CTAFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const id = useId();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = (formData.get("email") as string).trim();

    if (!emailRegex.test(email)) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    setTimeout(() => {
      setStatus("success");
      event.currentTarget.reset();
    }, 650);
  };

  const baseInput =
    "w-full sm:flex-1 sm:min-w-[240px] rounded-xl px-4 py-2 text-base transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  return (
    <form
      onSubmit={onSubmit}
      className={twMerge(
        "flex flex-wrap items-center gap-2 sm:gap-3",
        align === "center" && "justify-center"
      )}
      noValidate
    >
      <label className="sr-only" htmlFor={id}>
        Email
      </label>
      <input
        id={id}
        name="email"
        type="email"
        required
        aria-required
        placeholder="you@company.com"
        className={clsx(baseInput, {
          "bg-white/5 border border-white/25 text-white placeholder:text-white/50 focus-visible:outline-[#4da3ff]":
            variant === "dark",
          "bg-white border border-slate-200 text-slate-900 placeholder:text-slate-500 shadow-sm focus-visible:outline-[#0f172a]":
            variant === "light",
          "border-[#ff6b6b] ring-2 ring-[#ff6b6b]/30":
            status === "error" && variant === "light",
          "border-[#ffb4b4] ring-2 ring-[#ff6b6b]/30":
            status === "error" && variant === "dark",
        })}
      />
      <button
        type="submit"
        className={clsx(
          "min-w-[130px] rounded-lg px-4 py-2 text-sm font-semibold text-white shadow-md transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4da3ff]",
          "bg-gradient-to-br from-[#6f4bff] to-[#9d7dff] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(111,75,255,0.3)] active:translate-y-0"
        )}
        aria-live="polite"
      >
        {status === "loading" ? "Joining..." : submitLabel}
      </button>
      <p
        className={clsx(
          "text-sm whitespace-nowrap",
          variant === "dark" ? "text-white/75" : "text-slate-600"
        )}
        role="status"
        aria-live="polite"
      >
        {status === "success"
          ? "You're on the list."
          : status === "error"
            ? "Use a valid work email."
            : status === "loading"
              ? "Saving your spot..."
              : ""}
      </p>
    </form>
  );
}
