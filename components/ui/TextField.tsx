import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/cn";

type TextFieldProps = {
  id: string;
  label: string;
  hint?: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function TextField({
  id,
  label,
  hint,
  className,
  ...props
}: TextFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <label
        htmlFor={id}
        className="text-sm font-medium text-zinc-800"
      >
        {label}
      </label>
      <input
        id={id}
        className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm outline-none transition focus:border-cyan-600 focus:ring-2 focus:ring-cyan-500/30"
        {...props}
      />
      {hint ? <p className="text-xs text-zinc-500">{hint}</p> : null}
    </div>
  );
}
