"use client";

import { useMemo, useState } from "react";

import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { FadeInWhenVisible } from "@/components/ui/FadeInWhenVisible";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextField } from "@/components/ui/TextField";
import { hexColorFromString } from "@/lib/colorFromString";

export function NameColorGeneratorSection() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState("");

  const hex = useMemo(() => {
    if (submitted.trim().length === 0) {
      return "#64748b";
    }
    return hexColorFromString(submitted);
  }, [submitted]);

  return (
    <Section
      id="name-color"
      aria-labelledby="name-color-heading"
      className="bg-zinc-50"
    >
      <FadeInWhenVisible>
        <SectionHeading
          id="name-color-heading"
          eyebrow="Interactive"
          title="Generate a signature palette from any label"
          description="Type a project codename, team name, or internal reference. The swatch updates deterministically—same input, same result."
        />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
          <form
            className="space-y-6 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(name.trim());
            }}
            aria-label="Name to color generator form"
          >
            <TextField
              id="generator-name"
              label="Reference label"
              placeholder="e.g. Project Atlas"
              value={name}
              onChange={(event) => setName(event.target.value)}
              autoComplete="off"
            />
            <Button type="submit" className="w-full sm:w-auto">
              Generate swatch
            </Button>
            <p className="text-xs text-zinc-500">
              This demo hashes your input locally in the browser. Nothing is sent
              to a server.
            </p>
          </form>

          <div className="flex flex-col items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-8 text-center shadow-sm">
            <p className="text-sm font-medium text-zinc-700">Preview</p>
            <div
              className="flex w-full max-w-xs flex-col items-center gap-4"
              aria-live="polite"
            >
              <div className="relative h-40 w-full overflow-hidden rounded-2xl ring-1 ring-zinc-200">
                <svg
                  className="h-full w-full"
                  viewBox="0 0 320 200"
                  role="img"
                  aria-label={`Color swatch ${hex}`}
                >
                  <rect width="320" height="200" fill={hex} />
                </svg>
              </div>
              <p className="font-mono text-sm text-zinc-800">{hex}</p>
              <p className="text-xs text-zinc-500">
                Submit a label to lock in a stable color token for mockups or
                storybook themes.
              </p>
            </div>
          </div>
        </div>
      </FadeInWhenVisible>
    </Section>
  );
}
