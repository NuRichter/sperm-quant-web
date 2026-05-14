"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { RotateCcw, Layers, Tag, Eye, Camera } from "lucide-react";

const ExplorerScene = dynamic(() => import("@/components/ExplorerScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-brand-50/50">
      <p className="text-brand-400 text-sm font-mono animate-pulse">
        Loading 3D viewer...
      </p>
    </div>
  ),
});

const presets: { name: string; position: [number, number, number] }[] = [
  { name: "Front", position: [0, 0.5, 7] },
  { name: "Top", position: [0, 8, 0.1] },
  { name: "Side", position: [7, 0.5, 0] },
  { name: "3/4 View", position: [5, 3, 5] },
  { name: "Rear", position: [0, 0.5, -7] },
];

const zones = [
  { id: "touchscreen", label: "Touchscreen", color: "#3d3d3a", desc: '10.1" IPS 1920×1200, IP54, 750 nit, DCI-P3 95%' },
  { id: "cartridge", label: "Cartridge Slot", color: "#BA7517", desc: "Dual-channel custom cartridge, 2 sample wells per cassette" },
  { id: "compute", label: "Computing Edge", color: "#185fa5", desc: "Jetson Orin Nano Super 67 TOPS + NVMe 1TB + 40mm fan" },
  { id: "wireless", label: "Wireless Module", color: "#3B6D11", desc: "Intel Wi-Fi 6E + Bluetooth 5.2, M.2 module" },
  { id: "optical", label: "Optical Microscope", color: "#854F0B", desc: "Motic 10x/40x objectives, ZWO ASI183MM-Pro cameras x2, Abbe condenser, 3-ch LED" },
  { id: "power", label: "Power Supply", color: "#A32D2D", desc: "GaN USB-C PD 65W, Li-ion 4S2P 148 Wh battery pack" },
  { id: "io", label: "Rear I/O Panel", color: "#3d3d3a", desc: "USB-C Data, USB-A 3.0, USB-C 65W PD power input" },
];

export default function ExplorerPage() {
  const [exploded, setExploded] = useState(false);
  const [showLabels, setShowLabels] = useState(true);
  const [showInternals, setShowInternals] = useState(false);
  const [activeZone, setActiveZone] = useState<string | null>(null);
  const [cameraPos, setCameraPos] = useState<[number, number, number]>([5, 3, 5]);

  const handlePreset = useCallback((pos: [number, number, number]) => {
    setCameraPos(pos);
  }, []);

  return (
    <div className="min-h-screen bg-brand-50">
      <div className="bg-white border-b border-brand-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <p className="section-label mb-2">Interactive</p>
          <h1 className="heading-lg">3D Design Explorer</h1>
          <p className="text-brand-500 mt-2 text-sm max-w-2xl">
            Explore the Sperm Quant instrument in full 3D. Rotate, zoom, and toggle exploded view to inspect internal zones.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-[1fr_320px] gap-6">
          <div className="bg-white rounded-2xl border border-brand-200 overflow-hidden relative">
            <div className="h-[500px] lg:h-[640px]">
              <ExplorerScene exploded={exploded} showLabels={showLabels} showInternals={showInternals} cameraPos={cameraPos} />
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
              <button onClick={() => setExploded(!exploded)} className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border transition-all ${exploded ? "bg-accent-blue text-white border-accent-blue" : "bg-white/90 backdrop-blur text-brand-700 border-brand-300 hover:bg-brand-50"}`}>
                <Layers size={14} /> Exploded
              </button>
              <button onClick={() => setShowLabels(!showLabels)} className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border transition-all ${showLabels ? "bg-accent-blue text-white border-accent-blue" : "bg-white/90 backdrop-blur text-brand-700 border-brand-300 hover:bg-brand-50"}`}>
                <Tag size={14} /> Labels
              </button>
              <button onClick={() => setShowInternals(!showInternals)} className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border transition-all ${showInternals ? "bg-accent-blue text-white border-accent-blue" : "bg-white/90 backdrop-blur text-brand-700 border-brand-300 hover:bg-brand-50"}`}>
                <Eye size={14} /> Internals
              </button>
              <button onClick={() => { setExploded(false); setShowInternals(false); setCameraPos([5, 3, 5]); }} className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium bg-white/90 backdrop-blur text-brand-500 border border-brand-300 hover:bg-brand-50 transition-all">
                <RotateCcw size={14} /> Reset
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="card">
              <p className="section-label mb-3">Camera Presets</p>
              <div className="grid grid-cols-2 gap-2">
                {presets.map((p) => (
                  <button key={p.name} onClick={() => handlePreset(p.position)} className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-brand-600 border border-brand-200 hover:bg-brand-50 hover:border-brand-300 transition-all">
                    <Camera size={12} className="text-brand-400" /> {p.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="card">
              <p className="section-label mb-3">Component Zones</p>
              <div className="space-y-1">
                {zones.map((z) => (
                  <button key={z.id} onClick={() => setActiveZone(activeZone === z.id ? null : z.id)} className={`w-full text-left px-3 py-2.5 rounded-lg transition-all ${activeZone === z.id ? "bg-brand-100" : "hover:bg-brand-50"}`}>
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: z.color }} />
                      <span className="text-xs font-medium text-brand-800">{z.label}</span>
                    </div>
                    {activeZone === z.id && (
                      <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="text-[11px] text-brand-500 mt-1.5 ml-[18px] leading-relaxed">
                        {z.desc}
                      </motion.p>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="card">
              <p className="section-label mb-3">Dimensions</p>
              <div className="space-y-2 font-mono text-xs text-brand-600">
                <div className="flex justify-between"><span>Length</span><span className="text-brand-900">410 mm</span></div>
                <div className="flex justify-between"><span>Width</span><span className="text-brand-900">300 mm</span></div>
                <div className="flex justify-between"><span>Height</span><span className="text-brand-900">214 mm</span></div>
                <div className="h-px bg-brand-200 my-1" />
                <div className="flex justify-between"><span>Material</span><span className="text-brand-900">Al 6061 T6</span></div>
                <div className="flex justify-between"><span>Finish</span><span className="text-brand-900">Hardcoat Anodized</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
