"use client";

import { motion } from "framer-motion";
import {
  Globe,
  MapPin,
  Building2,
  FileText,
  Plane,
} from "lucide-react";
import { sourcingData } from "@/lib/data";

const categoryIcons: Record<string, string> = {
  "Modul Lensa / Optik": "🔬",
  "Sensor Kamera": "📷",
  "Board Edge AI": "🧠",
  "Layar Touchscreen": "📱",
  "Sistem Mekanik / Casing": "⚙️",
  "Power Supply / Baterai": "🔋",
  "Komponen Elektronik": "💻",
  "Aksesori Pendukung": "🧪",
};

export default function SourcingPage() {
  const grouped = sourcingData.reduce<
    Record<string, typeof sourcingData>
  >((acc, item) => {
    if (!acc[item.kategori]) acc[item.kategori] = [];
    acc[item.kategori].push(item);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-brand-50">
      {/* Header */}
      <div className="bg-white border-b border-brand-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <p className="section-label mb-2">Supply Chain</p>
          <h1 className="heading-lg">Channel Component Acquisition</h1>
          <p className="text-brand-500 mt-2 text-sm max-w-2xl">
            Pemetaan jalur akuisisi komponen berdasarkan kategori. Mencakup
            sumber lokal dan internasional, tipe supplier, serta catatan
            procurement untuk perencanaan vendor.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Key sourcing locations */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {[
            {
              icon: Plane,
              region: "Taiwan",
              cities: "Taipei",
              suppliers: "Aetina, Winmate, Advantech",
              focus: "Edge AI, Industrial displays",
            },
            {
              icon: Plane,
              region: "China",
              cities: "Shanghai, Shenzhen, Suzhou, Fuzhou",
              suppliers: "Shanghai Optics, ZWO, Tucsen, JLCPCB",
              focus: "Optics, CMOS sensors, PCB fabrication",
            },
            {
              icon: Plane,
              region: "Japan",
              cities: "Tokyo, Hamamatsu",
              suppliers: "Evident Corporation, Hamamatsu Photonics",
              focus: "Premium optical components",
            },
          ].map((loc, i) => (
            <motion.div
              key={loc.region}
              className="card"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <loc.icon size={16} className="text-accent-blue" />
                <span className="font-medium text-brand-900 text-sm">
                  {loc.region}
                </span>
              </div>
              <p className="text-xs text-brand-500 mb-1">
                <MapPin size={10} className="inline mr-1" />
                {loc.cities}
              </p>
              <p className="text-xs text-brand-600 mb-1">
                <Building2 size={10} className="inline mr-1" />
                {loc.suppliers}
              </p>
              <p className="text-[10px] text-brand-400 mt-2 italic">
                {loc.focus}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Component sourcing table by category */}
        {Object.entries(grouped).map(([kategori, items], ki) => (
          <motion.div
            key={kategori}
            className="mb-6"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ki * 0.05 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">
                {categoryIcons[kategori] || "📦"}
              </span>
              <h2 className="font-medium text-brand-900 text-sm">{kategori}</h2>
            </div>

            <div className="space-y-2">
              {items.map((item, i) => (
                <div key={i} className="card p-0 overflow-hidden">
                  <div className="px-5 py-4">
                    <p className="font-medium text-brand-900 text-sm mb-3">
                      {item.komponen}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Local */}
                      <div className="flex gap-2">
                        <MapPin
                          size={14}
                          className="text-emerald-500 mt-0.5 flex-shrink-0"
                        />
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-widest text-emerald-600 mb-0.5">
                            Sumber Lokal
                          </p>
                          <p className="text-xs text-brand-700">
                            {item.localSource || "Tidak tersedia"}
                          </p>
                        </div>
                      </div>

                      {/* International */}
                      <div className="flex gap-2">
                        <Globe
                          size={14}
                          className="text-accent-blue mt-0.5 flex-shrink-0"
                        />
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-widest text-accent-blue mb-0.5">
                            Sumber Internasional
                          </p>
                          <p className="text-xs text-brand-700">
                            {item.internationalSource}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 flex flex-wrap items-center gap-3">
                      <span className="badge bg-brand-50 text-brand-600 border-brand-200 text-[10px]">
                        <Building2 size={10} />
                        {item.supplierType}
                      </span>
                      {item.notes && (
                        <span className="flex items-start gap-1 text-[11px] text-brand-400">
                          <FileText
                            size={10}
                            className="mt-0.5 flex-shrink-0"
                          />
                          {item.notes}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Notes */}
        <div className="mt-10 card bg-brand-50/50 border-brand-200/50">
          <p className="section-label mb-2">Catatan Procurement</p>
          <div className="space-y-2 text-xs text-brand-500">
            <p>
              Penggunaan jalur OEM/sales resmi (bukan kontak individu)
              direkomendasikan untuk mengurangi risiko pergantian staf pada sisi
              supplier.
            </p>
            <p>
              Kunjungan B2B langsung ke Taiwan, China, dan Jepang telah dijustifikasi
              untuk verifikasi komponen kritis (optik, sensor, display) dan negosiasi
              harga volume.
            </p>
            <p>
              Prototipe awal menggunakan jalur procurement Indonesia untuk komponen
              standar; komponen precision-grade diimpor langsung.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
