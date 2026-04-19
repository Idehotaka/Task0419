import Link from "next/link";

import { Container } from "@/components/layout/Container";

const footerLinks = [
  { href: "#concept", label: "Concept" },
  { href: "#services", label: "Services" },
  { href: "#mission", label: "Mission" },
  { href: "#name-color", label: "Palette demo" },
] as const;

export function FooterSection() {
  return (
    <footer className="border-t border-zinc-200 bg-white py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="text-sm font-semibold text-zinc-900">Northline</p>
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Northline Logistics Studio. Placeholder
            content for layout demonstration.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-medium text-zinc-600 transition hover:text-zinc-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
