"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Microscope, Cpu, Monitor, Zap } from "lucide-react";

const HeroScene = dynamic(() => import("@/components/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-brand-400 text-sm font-mono animate-pulse">
        Loading 3D view...
      </div>
    </div>
  ),
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" },
  }),
};

const specs = [
  {
    icon: Microscope,
    label: "Dual-Channel Optics",
    detail: "Plan Achromat 10× & 40× with ZWO ASI183MM-Pro cameras",
  },
  {
    icon: Cpu,
    label: "67 TOPS Edge AI",
    detail: "NVIDIA Jetson Orin Nano Super for real-time analysis",
  },
  {
    icon: Monitor,
    label: "10.1\" Medical Display",
    detail: "1920×1200 IPS, 750 nit, IP54 anti-bacterial touchscreen",
  },
  {
    icon: Zap,
    label: "Compact Design",
    detail: "410 × 300 × 214 mm aluminium chassis, under 6 kg",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/80 via-white to-white" />

        <div className="relative max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-8 items-center">
          {/* Left: text */}
          <div className="py-20 lg:py-0">
            <motion.p
              className="section-label mb-4"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              NuRichter Programme
            </motion.p>

            <motion.h1
              className="heading-xl mb-6"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              Sperm Quant
            </motion.h1>

            <motion.p
              className="body-lg max-w-lg mb-8"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              A compact, AI-powered CASA instrument designed to bring
              WHO-6-aligned semen analysis to every andrology lab — not just the
              elite ones.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              <Link
                href="/explorer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-900 text-white rounded-lg text-sm font-medium hover:bg-brand-800 transition-colors"
              >
                Explore in 3D
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/profile"
                className="inline-flex items-center gap-2 px-6 py-3 border border-brand-300 text-brand-700 rounded-lg text-sm font-medium hover:bg-brand-50 transition-colors"
              >
                Learn More
              </Link>
            </motion.div>

            <motion.div
              className="mt-8 flex items-center gap-4"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
            >
              <span className="font-mono text-xs text-brand-400">
                410mm × 300mm × 214mm
              </span>
              <span className="w-px h-4 bg-brand-300" />
              <span className="font-mono text-xs text-brand-400">
                67 TOPS INT8
              </span>
              <span className="w-px h-4 bg-brand-300" />
              <span className="font-mono text-xs text-brand-400">
                WHO-6 2021
              </span>
            </motion.div>
          </div>

          {/* Right: 3D */}
          <motion.div
            className="h-[400px] lg:h-[560px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            <HeroScene />
          </motion.div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.p
            className="section-label mb-3 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Key Specifications
          </motion.p>
          <motion.h2
            className="heading-lg text-center mb-16"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Engineered for precision
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specs.map((s, i) => (
              <motion.div
                key={s.label}
                className="card group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <s.icon
                  size={24}
                  className="text-accent-blue mb-4 group-hover:scale-110 transition-transform"
                />
                <h3 className="font-medium text-brand-900 mb-1 text-sm">
                  {s.label}
                </h3>
                <p className="text-xs text-brand-500 leading-relaxed">
                  {s.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="heading-md mb-4">
            Designed in Indonesia, built for the world
          </h2>
          <p className="text-brand-500 mb-8 max-w-xl mx-auto">
            From component sourcing in Taiwan to algorithm development at UPN
            Veteran Jawa Timur — Sperm Quant is a fully indigenous CASA
            instrument programme.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-900 text-white rounded-lg text-sm font-medium hover:bg-brand-800 transition-colors"
            >
              View Component Pricing
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/sourcing"
              className="inline-flex items-center gap-2 px-6 py-3 border border-brand-300 text-brand-700 rounded-lg text-sm font-medium hover:bg-white transition-colors"
            >
              Sourcing Channels
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
