import { Section } from "@/components/layout/Section";
import { AnimatedStat } from "@/components/ui/AnimatedStat";
import { FadeInWhenVisible } from "@/components/ui/FadeInWhenVisible";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function StatsSection() {
  return (
    <Section
      id="stats"
      aria-labelledby="stats-heading"
      className="bg-zinc-950 text-white"
    >
      <FadeInWhenVisible>
        <SectionHeading
          id="stats-heading"
          eyebrow="Impact"
          title="Signals of scale without losing the craft"
          description="Illustrative metrics for narrative purposes—swap with your verified figures when ready."
          align="center"
          tone="dark"
        />
        <div className="grid gap-10 sm:grid-cols-3">
          <AnimatedStat
            value={12.9}
            suffix="B+"
            label="Assets coordinated (cumulative)"
            className="text-center sm:text-left"
            tone="dark"
          />
          <AnimatedStat
            value={48}
            suffix=""
            label="Regions with recurring coverage"
            decimals={0}
            className="text-center sm:text-left"
            tone="dark"
          />
          <AnimatedStat
            value={99.2}
            suffix="%"
            label="On-time milestone completion (rolling)"
            className="text-center sm:text-left"
            tone="dark"
          />
        </div>
      </FadeInWhenVisible>
    </Section>
  );
}
