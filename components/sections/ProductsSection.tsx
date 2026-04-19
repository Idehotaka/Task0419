import { Section } from "@/components/layout/Section";
import { FadeInWhenVisible } from "@/components/ui/FadeInWhenVisible";
import { ProductCard } from "@/components/ui/ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

function RibbonMedia({ gradient }: { gradient: string }) {
  return (
    <div aria-hidden className={cn("relative h-full w-full", gradient)}>
      <div className="absolute -left-10 top-8 h-32 w-32 rounded-full bg-white/30 blur-2xl" />
      <div className="absolute bottom-6 right-10 h-40 w-40 rounded-full bg-black/15 blur-2xl" />
      <div className="absolute inset-10 rounded-3xl border border-white/30 bg-white/5 backdrop-blur-sm" />
    </div>
  );
}

const products = [
  {
    title: "Atlas route studio",
    description:
      "Scenario planning for constrained entries, including lift geometry and staffing curves.",
    media: (
      <RibbonMedia gradient="bg-gradient-to-br from-cyan-500 via-sky-500 to-indigo-700" />
    ),
  },
  {
    title: "Harbor compliance kit",
    description:
      "Templates for approvals, insurance packets, and customer-ready executive summaries.",
    media: (
      <RibbonMedia gradient="bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-800" />
    ),
  },
  {
    title: "Summit field console",
    description:
      "A single dashboard for day-of status, photos, and exception notes—optimized for mobile.",
    media: (
      <RibbonMedia gradient="bg-gradient-to-br from-violet-500 via-fuchsia-500 to-rose-700" />
    ),
  },
  {
    title: "Quartz review archive",
    description:
      "Searchable post-move reviews with tagged learnings for continuous playbook refinement.",
    media: (
      <RibbonMedia gradient="bg-gradient-to-br from-orange-400 via-rose-500 to-red-700" />
    ),
  },
] as const;

export function ProductsSection() {
  return (
    <Section id="products" aria-labelledby="products-heading" className="bg-zinc-50">
      <FadeInWhenVisible>
        <SectionHeading
          id="products-heading"
          eyebrow="Products"
          title="Tooling that supports judgment, not shortcuts"
          description="Abstract product tiles for layout demonstration—replace with your real offerings and photography."
        />
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.title}
              title={product.title}
              description={product.description}
              media={product.media}
            />
          ))}
        </div>
      </FadeInWhenVisible>
    </Section>
  );
}
