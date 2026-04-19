"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export type ProductCardProps = {
  title: string;
  description: string;
  media: ReactNode;
  className?: string;
};

export function ProductCard({
  title,
  description,
  media,
  className,
}: ProductCardProps) {
  return (
    <motion.article
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm",
        className,
      )}
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-zinc-100 via-white to-cyan-50">
        {media}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>
        <p className="text-sm leading-relaxed text-zinc-600">{description}</p>
      </div>
    </motion.article>
  );
}
