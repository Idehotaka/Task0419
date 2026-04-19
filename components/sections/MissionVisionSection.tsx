import { Section } from "@/components/layout/Section";
import { FadeInWhenVisible } from "@/components/ui/FadeInWhenVisible";

export function MissionVisionSection() {
  return (
    <Section
      id="mission"
      aria-label="Mission and vision"
      className="border-y border-zinc-200 bg-white"
    >
      <FadeInWhenVisible>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">
              Mission
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Make specialized logistics feel straightforward for the people
              responsible for outcomes.
            </h2>
          </div>
          <div className="space-y-4 border-t border-zinc-200 pt-10 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">
              Vision
            </p>
            <p className="text-xl font-medium leading-relaxed text-zinc-800 sm:text-2xl">
              A standard where clarity, documentation, and respectful coordination
              are non-negotiable—no matter the scale of the move.
            </p>
          </div>
        </div>
      </FadeInWhenVisible>
    </Section>
  );
}
