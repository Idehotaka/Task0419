import type { ReactNode } from "react";

import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";

type SectionProps = {
  id?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export function Section({
  id,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
  children,
  className,
  containerClassName,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      className={cn("py-16 sm:py-20 lg:py-24", className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
