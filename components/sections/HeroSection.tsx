"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Container } from "@/components/layout/Container";

export function HeroSection() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative isolate flex min-h-[100dvh] items-center overflow-hidden bg-zinc-950"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black" />
        <motion.div
          className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-cyan-500/25 blur-3xl"
          animate={{ x: [0, 36, 0], y: [0, 24, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"
          animate={{ x: [0, -28, 0], y: [0, -18, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_55%)]" />
      </div>

      <Container className="relative py-24 sm:py-28 lg:py-32">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <motion.p
            className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/90"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Nationwide operations partner
          </motion.p>
          <motion.h1
            className="text-balance text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            Precision logistics for high-value assets, delivered with calm clarity.
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            From planning through placement, we coordinate specialized handling so
            your teams can stay focused on what matters most.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
            >
              Plan a consultation
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
            >
              Explore capabilities
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
