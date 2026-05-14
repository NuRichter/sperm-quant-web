"use client";

import { motion } from "framer-motion";
import {
  Microscope,
  Cpu,
  Shield,
  BookOpen,
  CheckCircle2,
  Activity,
  Users,
  Target,
  Beaker,
  GraduationCap,
  Building,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4 },
  }),
};

const who6Parameters = [
  { name: "Concentration", unit: "×10⁶/mL", method: "YOLO26-n object detection on grid-based counting" },
  { name: "Total Motility", unit: "%", method: "Frame-to-frame tracking with BoT-SORT tracker" },
  { name: "Progressive Motility (PR)", unit: "%", method: "Velocity classification per WHO-6 thresholds" },
  { name: "VCL (Curvilinear Velocity)", unit: "µm/s", method: "Spline-interpolated path length / time" },
  { name: "VSL (Straight-Line Velocity)", unit: "µm/s", method: "Euclidean distance first→last point / time" },
  { name: "VAP (Average Path Velocity)", unit: "µm/s", method: "Smoothed 5-point moving average path / time" },
  { name: "LIN (Linearity)", unit: "ratio", method: "VSL / VCL" },
  { name: "STR (Straightness)", unit: "ratio", method: "VSL / VAP" },
  { name: "WOB (Wobble)", unit: "ratio", method: "VAP / VCL" },
  { name: "ALH (Lateral Head Displacement)", unit: "µm", method: "Max deviation from smoothed path" },
  { name: "BCF (Beat Cross Frequency)", unit: "Hz", method: "Zero-crossing count of lateral displacement" },
  { name: "Morphology (Normal Forms)", unit: "%", method: "Medical-SAM3-distilled segmentation + classifier" },
];

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-brand-50 border-b border-brand-200">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <motion.p
            className="section-label mb-3"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Product Profile
          </motion.p>
          <motion.h1
            className="heading-xl mb-4"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Sperm Quant
          </motion.h1>
          <motion.p
            className="body-lg max-w-3xl"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            A compact, edge-AI-powered Computer-Assisted Sperm Analysis
            instrument designed to democratize andrology diagnostics —
            delivering professional-grade semen analysis at a fraction of the
            cost of established CASA systems.
          </motion.p>
          <motion.div
            className="mt-6 flex flex-wrap gap-3"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <span className="badge bg-white text-brand-600 border-brand-200">
              <Microscope size={12} />
              CASA Instrument
            </span>
            <span className="badge bg-white text-brand-600 border-brand-200">
              <Cpu size={12} />
              Edge AI (67 TOPS)
            </span>
            <span className="badge bg-white text-brand-600 border-brand-200">
              <Shield size={12} />
              WHO-6 Aligned
            </span>
            <span className="badge bg-white text-brand-600 border-brand-200">
              <Building size={12} />
              Made in Indonesia
            </span>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-3">Value Proposition</p>
          <h2 className="heading-lg mb-12">
            Why Sperm Quant exists
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "Affordable CASA",
                desc: "Target price point of Rp 90–95 juta positions Sperm Quant significantly below imported CASA systems that typically exceed Rp 300–500 juta, enabling smaller labs to adopt professional semen analysis.",
              },
              {
                icon: Users,
                title: "Lab Accessibility",
                desc: "Designed specifically for small-to-medium andrology labs and fertility clinics that currently rely on manual counting. The compact 410×300×214 mm form factor fits any bench.",
              },
              {
                icon: GraduationCap,
                title: "Indigenous Technology",
                desc: "Developed entirely at UPN Veteran Jawa Timur under the NuRichter Programme, combining Quant-Richter Algorithm (QRA) with locally-assembled hardware and internationally-sourced precision components.",
              },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                className="card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <v.icon size={24} className="text-accent-blue mb-4" />
                <h3 className="font-medium text-brand-900 mb-2">{v.title}</h3>
                <p className="text-sm text-brand-500 leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical summary */}
      <section className="py-20 bg-brand-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-3">Technical Summary</p>
          <h2 className="heading-lg mb-12">Platform specifications</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Compute", value: "NVIDIA Jetson Orin Nano Super", detail: "67 sparse-INT8 TOPS, 8 GB LPDDR5" },
              { label: "Camera", value: "ZWO ASI183MM-Pro ×2", detail: "Sony IMX183, 20MP, 14-bit, TEC cooled" },
              { label: "Objectives", value: "Motic Plan Achromat", detail: "10×/0.25 + 40×/0.65, dual-channel optical path" },
              { label: "Algorithm", value: "Quant-Richter Algorithm (QRA)", detail: "YOLO26-n + BoT-SORT + Conformal Prediction" },
              { label: "Display", value: "10.1\" IPS Touchscreen", detail: "1920×1200, 750 nit, DCI-P3 95%, IP54" },
              { label: "Storage", value: "NVMe SSD 1TB", detail: "PCIe Gen4 ×4, M.2 2280" },
              { label: "Connectivity", value: "Wi-Fi 6E + BT 5.2", detail: "Intel M.2 module, USB 3.0, USB-C" },
              { label: "Power", value: "GaN USB-C PD 65W", detail: "Li-ion 4S2P 148 Wh backup battery" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                className="bg-white rounded-xl border border-brand-200 p-4"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <p className="text-[10px] font-mono uppercase tracking-widest text-brand-400 mb-1">
                  {s.label}
                </p>
                <p className="text-sm font-medium text-brand-900 mb-0.5">
                  {s.value}
                </p>
                <p className="text-xs text-brand-500">{s.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO-6 2021 Alignment */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-start gap-3 mb-4">
            <BookOpen size={24} className="text-accent-teal mt-1" />
            <div>
              <p className="section-label mb-1">Standards Alignment</p>
              <h2 className="heading-lg">WHO 6th Edition (2021)</h2>
            </div>
          </div>

          <div className="max-w-3xl mb-12">
            <p className="text-brand-500 text-sm leading-relaxed mb-4">
              Sperm Quant is designed to support semen analysis workflow aligned
              with the WHO Laboratory Manual for the Examination and Processing
              of Human Semen, 6th Edition (2021). The kinematic parameters,
              morphological assessment criteria, and quantification methods
              implemented in the Quant-Richter Algorithm follow the definitions
              and reference ranges described in the WHO-6 manual.
            </p>
            <div className="card bg-amber-50/50 border-amber-200/50 text-xs text-amber-800">
              <p className="flex items-start gap-2">
                <Shield size={14} className="mt-0.5 flex-shrink-0" />
                <span>
                  This product is in the conceptual design and prototyping phase.
                  It has not undergone regulatory review or clinical validation.
                  Claims of WHO-6 alignment refer to the algorithmic design
                  intent and parameter definitions, not to certified compliance.
                  Clinical use requires independent validation and applicable
                  regulatory clearance.
                </span>
              </p>
            </div>
          </div>

          {/* WHO-6 parameter table */}
          <div className="card p-0 overflow-hidden">
            <div className="px-5 py-3 bg-brand-50 border-b border-brand-200">
              <p className="text-xs font-semibold text-brand-700">
                WHO-6 Kinematic & Morphometric Parameters — QRA Implementation
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-brand-100">
                    <th className="px-5 py-2.5 text-left font-medium text-brand-400">
                      Parameter
                    </th>
                    <th className="px-3 py-2.5 text-center font-medium text-brand-400 w-20">
                      Unit
                    </th>
                    <th className="px-5 py-2.5 text-left font-medium text-brand-400">
                      QRA Implementation Method
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {who6Parameters.map((p, i) => (
                    <tr
                      key={p.name}
                      className="border-b border-brand-100/60 hover:bg-brand-50/30"
                    >
                      <td className="px-5 py-2.5">
                        <div className="flex items-center gap-2">
                          <CheckCircle2
                            size={12}
                            className="text-accent-teal flex-shrink-0"
                          />
                          <span className="font-medium text-brand-900">
                            {p.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-3 py-2.5 text-center font-mono text-brand-500">
                        {p.unit}
                      </td>
                      <td className="px-5 py-2.5 text-brand-600">
                        {p.method}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Algorithm summary */}
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="card">
              <Activity size={20} className="text-accent-blue mb-3" />
              <h3 className="font-medium text-brand-900 text-sm mb-2">
                QRA-Core Algorithm
              </h3>
              <p className="text-xs text-brand-500 leading-relaxed">
                The Quant-Richter Algorithm core specification implements a
                unified tracking-by-detection pipeline with four key innovations:
                a four-term association cost with morphology-aware cosine
                distance, velocity-class-adaptive Kalman process covariance,
                length-weighted EMA morphology update, and Inductive Conformal
                Prediction with finite-sample coverage guarantee. Target latency
                is ≤95 ms per 1080p frame with O(1) asymptotic per-frame
                complexity.
              </p>
            </div>
            <div className="card">
              <Beaker size={20} className="text-accent-teal mb-3" />
              <h3 className="font-medium text-brand-900 text-sm mb-2">
                Research Foundation
              </h3>
              <p className="text-xs text-brand-500 leading-relaxed">
                The technical foundation builds on research by Diyasa et al.
                (2026) on WGAN-GP-based sperm image augmentation, published in
                Register: Jurnal Ilmiah Teknologi Sistem Informasi. The data
                augmentation pipeline generates synthetic training samples to
                improve model robustness in low-data clinical scenarios — a
                common challenge in andrology laboratories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programme */}
      <section className="py-20 bg-brand-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-3">Programme</p>
          <h2 className="heading-lg mb-8">NuRichter at UPN Veteran Jawa Timur</h2>
          <div className="max-w-3xl space-y-4 text-sm text-brand-600 leading-relaxed">
            <p>
              Sperm Quant is developed by Tim Pak Gede under the NuRichter
              Programme at Universitas Pembangunan Nasional &quot;Veteran&quot; Jawa
              Timur. The project is currently being positioned for the BRIN RIIM
              2026 Batch II funding scheme, with an active research proposal in
              preparation.
            </p>
            <p>
              The programme integrates hardware engineering (optical system,
              embedded compute, custom PCB), software development (QRA
              algorithm, WHO-6 quantification pipeline), and academic research
              (WGAN-GP augmentation, conformal prediction uncertainty
              quantification) into a unified instrument development effort.
            </p>
            <p>
              International collaboration with Okayama University supports the
              academic dimension of the project, connecting co-authors of the
              foundational research paper with the instrument development team.
            </p>
          </div>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {[
              { label: "Institution", value: "UPN \"Veteran\" Jawa Timur" },
              { label: "Funding Target", value: "BRIN RIIM 2026 Batch II" },
              { label: "Web", value: "nurichter.org" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-xl border border-brand-200 p-4"
              >
                <p className="text-[10px] font-mono uppercase tracking-widest text-brand-400 mb-1">
                  {item.label}
                </p>
                <p className="text-sm font-medium text-brand-900">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
