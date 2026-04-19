import { Section } from "@/components/layout/Section";
import { FadeInWhenVisible } from "@/components/ui/FadeInWhenVisible";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function StrengthSection() {
  return (
    <Section id="strength" aria-labelledby="strength-heading">
      <FadeInWhenVisible>
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            id="strength-heading"
            eyebrow="Strength"
            title="Why teams choose a partner that obsesses over the boring details"
            align="center"
          />
          <div className="space-y-6 text-base leading-relaxed text-zinc-700 sm:text-lg">
            <p>
              High-stakes relocations rarely fail because of dramatic surprises.
              They drift when assumptions go unwritten, when two vendors interpret
              the same drawing differently, or when a last-minute schedule change
              collides with an immovable constraint.
            </p>
            <p>
              Our strength is the unglamorous work upstream: measurements verified
              on site, photos attached to the plan, named owners for each
              checkpoint, and a communications rhythm that keeps stakeholders
              aligned without flooding inboxes.
            </p>
            <p>
              When the unexpected still appears—and it will—we respond with a
              documented decision trail, clear options, and timelines that respect
              both operational reality and executive visibility.
            </p>
          </div>
        </div>
      </FadeInWhenVisible>
    </Section>
  );
}
