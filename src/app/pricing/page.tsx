"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronRight, Package, TrendingDown } from "lucide-react";
import { bomData, totalTaiwan, totalIndonesia, formatRupiah } from "@/lib/data";

const kategoriColors: Record<string, string> = {
  "Modul Lensa / Optik": "bg-amber-50 text-amber-800 border-amber-200",
  "Sensor Kamera": "bg-violet-50 text-violet-800 border-violet-200",
  "Board Edge AI": "bg-blue-50 text-blue-800 border-blue-200",
  "Layar Touchscreen": "bg-teal-50 text-teal-800 border-teal-200",
  "Sistem Pendingin / Thermal": "bg-cyan-50 text-cyan-800 border-cyan-200",
  "Sistem Mekanik / Casing": "bg-stone-100 text-stone-800 border-stone-200",
  "Power Supply / Baterai": "bg-red-50 text-red-800 border-red-200",
  "Komponen Elektronik Pendukung": "bg-indigo-50 text-indigo-800 border-indigo-200",
  "Aksesori Pendukung": "bg-emerald-50 text-emerald-800 border-emerald-200",
};

export default function PricingPage() {
  const [expandedKat, setExpandedKat] = useState<string | null>(null);
  const [scenario, setScenario] = useState<"taiwan" | "indonesia">("indonesia");

  return (
    <div className="min-h-screen bg-brand-50">
      {/* Header */}
      <div className="bg-white border-b border-brand-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <p className="section-label mb-2">Bill of Materials</p>
          <h1 className="heading-lg">Struktur Harga Komponen</h1>
          <p className="text-brand-500 mt-2 text-sm max-w-2xl">
            Rincian biaya komponen Sperm Quant berdasarkan BOM Skenario
            Kalibrasi. Data mencakup perbandingan harga procurement Taiwan/Shenzhen
            dan harga pasar Indonesia.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Summary cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <div className="card">
            <p className="text-xs text-brand-400 font-mono uppercase tracking-wider mb-1">
              Skenario Taiwan
            </p>
            <p className="text-2xl font-semibold text-brand-900">
              {formatRupiah(totalTaiwan)}
            </p>
            <p className="text-xs text-brand-500 mt-1">
              Procurement langsung dari Taiwan / Shenzhen
            </p>
          </div>
          <div className="card border-accent-blue/30">
            <p className="text-xs text-accent-blue font-mono uppercase tracking-wider mb-1">
              Skenario Indonesia
            </p>
            <p className="text-2xl font-semibold text-brand-900">
              {formatRupiah(totalIndonesia)}
            </p>
            <p className="text-xs text-brand-500 mt-1">
              Termasuk PPN 11% + margin distributor 25–35%
            </p>
          </div>
          <div className="card bg-emerald-50/50 border-emerald-200/60">
            <p className="text-xs text-emerald-700 font-mono uppercase tracking-wider mb-1">
              Target Range
            </p>
            <p className="text-2xl font-semibold text-emerald-800">
              Rp 90 – 95 Jt
            </p>
            <p className="text-xs text-emerald-600 mt-1 flex items-center gap-1">
              <TrendingDown size={12} />
              Status: Dalam range (terpenuhi)
            </p>
          </div>
        </div>

        {/* Scenario toggle */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-xs text-brand-500 font-medium">Tampilkan harga:</span>
          <div className="flex bg-white border border-brand-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setScenario("taiwan")}
              className={`px-4 py-1.5 text-xs font-medium transition-colors ${
                scenario === "taiwan"
                  ? "bg-brand-900 text-white"
                  : "text-brand-500 hover:bg-brand-50"
              }`}
            >
              Taiwan
            </button>
            <button
              onClick={() => setScenario("indonesia")}
              className={`px-4 py-1.5 text-xs font-medium transition-colors ${
                scenario === "indonesia"
                  ? "bg-brand-900 text-white"
                  : "text-brand-500 hover:bg-brand-50"
              }`}
            >
              Indonesia
            </button>
          </div>
        </div>

        {/* Category breakdown */}
        <div className="space-y-3">
          {bomData.map((kat, ki) => {
            const isExpanded = expandedKat === kat.kategori;
            const subtotal =
              scenario === "taiwan" ? kat.subtotalTaiwan : kat.subtotalIndonesia;
            const pct =
              (subtotal /
                (scenario === "taiwan" ? totalTaiwan : totalIndonesia)) *
              100;
            const colorClass =
              kategoriColors[kat.kategori] ||
              "bg-brand-50 text-brand-800 border-brand-200";

            return (
              <motion.div
                key={kat.kategori}
                className="card p-0 overflow-hidden"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ki * 0.04 }}
              >
                {/* Category header */}
                <button
                  onClick={() =>
                    setExpandedKat(isExpanded ? null : kat.kategori)
                  }
                  className="w-full flex items-center justify-between px-5 py-4 hover:bg-brand-50/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {isExpanded ? (
                      <ChevronDown size={16} className="text-brand-400" />
                    ) : (
                      <ChevronRight size={16} className="text-brand-400" />
                    )}
                    <span
                      className={`badge text-[10px] border ${colorClass}`}
                    >
                      <Package size={10} />
                      {kat.kategori}
                    </span>
                    <span className="text-xs text-brand-400 font-mono">
                      {kat.items.length} item{kat.items.length > 1 ? "s" : ""}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    {/* Bar */}
                    <div className="hidden sm:flex items-center gap-2 w-32">
                      <div className="flex-1 h-1.5 bg-brand-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-accent-blue/40 rounded-full"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <span className="text-[10px] text-brand-400 font-mono w-10 text-right">
                        {pct.toFixed(1)}%
                      </span>
                    </div>
                    <span className="font-mono text-sm font-medium text-brand-900 min-w-[120px] text-right">
                      {formatRupiah(subtotal)}
                    </span>
                  </div>
                </button>

                {/* Expanded items */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="border-t border-brand-100"
                  >
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs">
                        <thead>
                          <tr className="bg-brand-50/50">
                            <th className="px-5 py-2 text-left font-medium text-brand-400 w-10">
                              #
                            </th>
                            <th className="px-3 py-2 text-left font-medium text-brand-400">
                              Komponen
                            </th>
                            <th className="px-3 py-2 text-center font-medium text-brand-400 w-12">
                              Qty
                            </th>
                            <th className="px-3 py-2 text-right font-medium text-brand-400 w-32">
                              Harga / unit
                            </th>
                            <th className="px-5 py-2 text-left font-medium text-brand-400 w-48">
                              Catatan
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {kat.items.map((item) => (
                            <tr
                              key={item.no}
                              className="border-t border-brand-100/60 hover:bg-brand-50/30"
                            >
                              <td className="px-5 py-2.5 font-mono text-brand-400">
                                {item.no}
                              </td>
                              <td className="px-3 py-2.5 text-brand-800">
                                {item.komponen}
                              </td>
                              <td className="px-3 py-2.5 text-center text-brand-600 font-mono">
                                {item.qty}
                              </td>
                              <td className="px-3 py-2.5 text-right font-mono text-brand-900">
                                {formatRupiah(
                                  scenario === "taiwan"
                                    ? item.hargaTaiwan
                                    : item.hargaIndonesia
                                )}
                              </td>
                              <td className="px-5 py-2.5 text-brand-400 text-[11px]">
                                {item.catatan || "—"}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Total bar */}
        <div className="mt-6 card bg-brand-900 border-brand-900">
          <div className="flex items-center justify-between">
            <span className="text-white/70 font-medium text-sm">
              Total — Skenario {scenario === "taiwan" ? "Taiwan" : "Indonesia"}
            </span>
            <span className="text-white font-mono text-xl font-semibold">
              {formatRupiah(
                scenario === "taiwan" ? totalTaiwan : totalIndonesia
              )}
            </span>
          </div>
        </div>

        {/* Footnotes */}
        <div className="mt-8 text-xs text-brand-400 space-y-1 font-mono">
          <p>* Harga Luar (Taiwan): procurement langsung, belum termasuk ongkir + bea masuk</p>
          <p>* Harga Indonesia: termasuk PPN 11% + margin distributor ~25–35%</p>
          <p>* Total item komponen: 38 items</p>
          <p>* Sumber: OmniCASA BOM Skenario Kalibrasi Rev.01</p>
        </div>
      </div>
    </div>
  );
}
