import Link from "next/link";

import { Section } from "@/components/layout/Section";
import { FadeInWhenVisible } from "@/components/ui/FadeInWhenVisible";
import { SectionHeading } from "@/components/ui/SectionHeading";

type ContactEntry = {
  label: string;
  value: string;
  href?: string;
};

const contactDetails: ContactEntry[] = [
  {
    label: "Studio address",
    value: "1200 Harbor Exchange, Suite 400, Example City, EC 00000",
  },
  {
    label: "Phone",
    value: "+1 (555) 010-2400",
    href: "tel:+15550102400",
  },
  {
    label: "Email",
    value: "hello@northline.example",
    href: "mailto:hello@northline.example",
  },
  {
    label: "Business hours",
    value: "Weekdays 08:00–18:00 local time (by appointment)",
  },
];

export function ContactSection() {
  return (
    <Section id="contact" aria-labelledby="contact-heading">
      <FadeInWhenVisible>
        <SectionHeading
          id="contact-heading"
          eyebrow="Contact"
          title="Tell us about the move on your horizon"
          description="Share the basics—locations, timing windows, and any constraints you already know. We respond with next steps, not a generic brochure."
        />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
          <dl className="space-y-6 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
            {contactDetails.map((row) => (
              <div key={row.label} className="space-y-2">
                <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  {row.label}
                </dt>
                <dd className="text-base text-zinc-900">
                  {row.href ? (
                    <Link
                      href={row.href}
                      className="font-medium text-cyan-800 underline-offset-4 hover:underline"
                    >
                      {row.value}
                    </Link>
                  ) : (
                    row.value
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <aside
            aria-label="What to include in your first message"
            className="rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-6 sm:p-8"
          >
            <h3 className="text-lg font-semibold text-zinc-900">
              Helpful context
            </h3>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed text-zinc-700">
              <li>Pickup and destination environments (stairs, docks, elevators).</li>
              <li>Approximate dimensions or weight class, if known.</li>
              <li>Any blackout dates or regulatory touchpoints.</li>
            </ul>
          </aside>
        </div>
      </FadeInWhenVisible>
    </Section>
  );
}
