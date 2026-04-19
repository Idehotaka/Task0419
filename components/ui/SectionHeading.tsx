import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 max-w-2xl space-y-3 sm:mb-12",
        align === "center" && "mx-auto text-center",
      )}
    >
      <p
        className={cn(
          "text-xs font-semibold uppercase tracking-[0.2em]",
          tone === "dark" ? "text-cyan-200" : "text-cyan-700",
        )}
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        className={cn(
          "text-balance text-3xl font-semibold tracking-tight sm:text-4xl",
          tone === "dark" ? "text-white" : "text-zinc-900",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-pretty text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-zinc-300" : "text-zinc-600",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
