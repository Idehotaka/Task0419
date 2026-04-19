import { Section } from "@/components/layout/Section";
import { FadeInWhenVisible } from "@/components/ui/FadeInWhenVisible";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";

function RouteIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19h4l10-10a2.5 2.5 0 0 0-3.5-3.5L4 15.5V19Z" />
      <path d="m13 6 5 5" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3 5 6v6c0 5 3.5 8.5 7 9.5 3.5-1 7-4.5 7-9.5V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function WrenchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z" />
    </svg>
  );
}

const services = [
  {
    title: "Field logistics",
    body: "Routing, crew sizing, and equipment selection tailored to building conditions and schedule pressure.",
    icon: <RouteIcon />,
  },
  {
    title: "Protective handling",
    body: "Padding schemes, floor protection, and lift plans reviewed with facilities teams ahead of time.",
    icon: <ShieldIcon />,
  },
  {
    title: "Lifecycle support",
    body: "Inspection cadences, documentation updates, and renewal planning so assets stay compliant over time.",
    icon: <WrenchIcon />,
  },
] as const;

export function ServicesSection() {
  return (
    <Section
      id="services"
      aria-labelledby="services-heading"
      className="bg-zinc-50"
    >
      <FadeInWhenVisible>
        <SectionHeading
          id="services-heading"
          eyebrow="Services"
          title="Three pillars that keep complex moves predictable"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              body={service.body}
              icon={service.icon}
            />
          ))}
        </div>
      </FadeInWhenVisible>
    </Section>
  );
}
