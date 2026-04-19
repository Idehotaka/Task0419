"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/cn";

type AnimatedStatProps = {
  value: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  label: string;
  className?: string;
  tone?: "light" | "dark";
};

export function AnimatedStat({
  value,
  decimals = 1,
  suffix = "",
  prefix = "",
  label,
  className,
  tone = "light",
}: AnimatedStatProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    const controls = animate(0, value, {
      duration: 1.35,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(latest),
    });

    return () => controls.stop();
  }, [isInView, value]);

  const formatted = `${prefix}${display.toFixed(decimals)}${suffix}`;

  return (
    <div ref={ref} className={cn("space-y-2", className)}>
      <p
        className={cn(
          "text-4xl font-semibold tracking-tight sm:text-5xl",
          tone === "dark" ? "text-white" : "text-zinc-900",
        )}
        aria-label={`${label} ${formatted}`}
      >
        {formatted}
      </p>
      <p
        className={cn(
          "text-sm font-medium",
          tone === "dark" ? "text-zinc-300" : "text-zinc-600",
        )}
      >
        {label}
      </p>
    </div>
  );
}
