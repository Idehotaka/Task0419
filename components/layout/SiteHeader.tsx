import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";

const navItems = [
  { href: "#services", label: "Capabilities" },
  { href: "#strength", label: "Approach" },
  { href: "#products", label: "Solutions" },
  { href: "#contact", label: "Contact" },
] as const;

type SiteHeaderProps = {
  className?: string;
};

export function SiteHeader({ className }: SiteHeaderProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md",
        className,
      )}
    >
      <Container className="flex h-auto min-h-16 flex-wrap items-center gap-3 py-3 sm:flex-nowrap sm:py-0">
        <Link
          href="#top"
          className="text-sm font-semibold tracking-tight text-zinc-900"
          aria-label="Return to top of page"
        >
          Northline<span className="text-cyan-700">.</span>
        </Link>
        <nav
          aria-label="Primary"
          className="order-last flex w-full basis-full gap-4 overflow-x-auto pb-1 sm:order-none sm:ml-auto sm:w-auto sm:basis-auto sm:pb-0"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-xs font-medium text-zinc-600 transition-colors hover:text-zinc-900 sm:text-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#contact"
          className="ml-auto rounded-full bg-zinc-900 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-zinc-800 sm:ml-0 sm:text-sm"
        >
          Talk to us
        </Link>
      </Container>
    </header>
  );
}
