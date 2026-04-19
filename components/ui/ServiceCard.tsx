"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export type ServiceCardProps = {
  title: string;
  body: string;
  icon: ReactNode;
  className?: string;
};

export function ServiceCard({
  title,
  body,
  icon,
  className,
}: ServiceCardProps) {
  return (
    <motion.article
      className={cn(
        "group flex h-full flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm",
        className,
      )}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-800 ring-1 ring-cyan-100">
        {icon}
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>
        <p className="text-sm leading-relaxed text-zinc-600">{body}</p>
      </div>
    </motion.article>
  );
}
