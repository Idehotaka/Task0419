"use client";

import { motion, useInView } from "framer-motion";
import { type ReactNode, useRef } from "react";

import { cn } from "@/lib/cn";

type FadeInWhenVisibleProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function FadeInWhenVisible({
  children,
  className,
  delay = 0,
}: FadeInWhenVisibleProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
