"use client";

import { motion } from "motion/react";
import { type PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type FadeInProps = PropsWithChildren<{
  className?: string;
  delay?: number;
}>;

export function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  return (
    <motion.div
      className={twMerge("opacity-0", className)}
      initial={{ opacity: 0, translateY: 22 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      viewport={{ once: true, margin: "-40px" }}
    >
      {children}
    </motion.div>
  );
}
