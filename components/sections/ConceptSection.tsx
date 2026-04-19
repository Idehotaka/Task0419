import { Section } from "@/components/layout/Section";
import { FadeInWhenVisible } from "@/components/ui/FadeInWhenVisible";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ConceptSection() {
  return (
    <Section id="concept" aria-labelledby="concept-heading">
      <FadeInWhenVisible>
        <SectionHeading
          id="concept-heading"
          eyebrow="Concept"
          title="Operational discipline meets human-centered communication"
          description="We design each engagement around predictable milestones, transparent reporting, and a single accountable coordinator."
        />
        <div className="grid gap-8 lg:grid-cols-3">
          {[
            {
              title: "Orchestrated workflows",
              body: "Checklists, dry runs, and contingency paths are documented before anyone arrives on site.",
            },
            {
              title: "Measured risk",
              body: "We quantify constraints early—access, flooring, weather windows—so decisions are grounded in evidence.",
            },
            {
              title: "Quiet confidence",
              body: "Clients receive concise updates at agreed intervals, without noise or unnecessary escalations.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-zinc-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </FadeInWhenVisible>
    </Section>
  );
}
