export interface BOMItem {
  no: number;
  kategori: string;
  komponen: string;
  qty: number;
  satuan: string;
  hargaTaiwan: number;
  hargaIndonesia: number;
  catatan?: string;
}

export interface KategoriSummary {
  kategori: string;
  subtotalTaiwan: number;
  subtotalIndonesia: number;
  items: BOMItem[];
}

export const bomData: KategoriSummary[] = [
  {
    kategori: "Modul Lensa / Optik",
    subtotalTaiwan: 22_650_000,
    subtotalIndonesia: 34_000_000,
    items: [
      { no: 1, kategori: "Modul Lensa / Optik", komponen: "Plan Apochromat 10× NA 0.45", qty: 1, satuan: "unit", hargaTaiwan: 3_250_000, hargaIndonesia: 5_000_000 },
      { no: 2, kategori: "Modul Lensa / Optik", komponen: "Plan Apochromat 40× NA 0.95 dry", qty: 1, satuan: "unit", hargaTaiwan: 5_200_000, hargaIndonesia: 8_000_000 },
      { no: 3, kategori: "Modul Lensa / Optik", komponen: "Plan Apochromat 100× NA 1.40 Oil", qty: 1, satuan: "unit", hargaTaiwan: 6_500_000, hargaIndonesia: 10_000_000 },
      { no: 4, kategori: "Modul Lensa / Optik", komponen: "Manual 4-Position Objective Turret", qty: 1, satuan: "unit", hargaTaiwan: 1_050_000, hargaIndonesia: 1_500_000 },
      { no: 5, kategori: "Modul Lensa / Optik", komponen: "APO Tube Lens f=200mm", qty: 1, satuan: "unit", hargaTaiwan: 1_750_000, hargaIndonesia: 2_500_000 },
      { no: 6, kategori: "Modul Lensa / Optik", komponen: "Abbe Condenser NA 1.25", qty: 1, satuan: "unit", hargaTaiwan: 1_260_000, hargaIndonesia: 1_800_000 },
      { no: 7, kategori: "Modul Lensa / Optik", komponen: "LED 3-Color Illuminator 460/530/625 nm", qty: 1, satuan: "unit", hargaTaiwan: 1_540_000, hargaIndonesia: 2_200_000, catatan: "3-channel cukup untuk analisis sperma" },
      { no: 8, kategori: "Modul Lensa / Optik", komponen: "Manual Aperture + Field Stop Assembly", qty: 1, satuan: "unit", hargaTaiwan: 210_000, hargaIndonesia: 300_000 },
      { no: 9, kategori: "Modul Lensa / Optik", komponen: "Filter Wheel 4-position", qty: 1, satuan: "unit", hargaTaiwan: 490_000, hargaIndonesia: 700_000 },
      { no: 10, kategori: "Modul Lensa / Optik", komponen: "Compact Optical Body Al 6061 CNC", qty: 1, satuan: "unit", hargaTaiwan: 1_400_000, hargaIndonesia: 2_000_000 },
    ],
  },
  {
    kategori: "Sensor Kamera",
    subtotalTaiwan: 11_250_000,
    subtotalIndonesia: 15_000_000,
    items: [
      { no: 11, kategori: "Sensor Kamera", komponen: "Scientific CMOS 20MP USB3.0 (Sony IMX183, TEC cooled)", qty: 1, satuan: "unit", hargaTaiwan: 11_250_000, hargaIndonesia: 15_000_000 },
    ],
  },
  {
    kategori: "Board Edge AI",
    subtotalTaiwan: 3_375_000,
    subtotalIndonesia: 4_500_000,
    items: [
      { no: 12, kategori: "Board Edge AI", komponen: "NVIDIA Jetson Orin Nano Super Dev Kit (67 TOPS)", qty: 1, satuan: "unit", hargaTaiwan: 3_375_000, hargaIndonesia: 4_500_000, catatan: "Dev Kit all-in-one, tidak perlu carrier board terpisah" },
    ],
  },
  {
    kategori: "Layar Touchscreen",
    subtotalTaiwan: 5_500_000,
    subtotalIndonesia: 7_200_000,
    items: [
      { no: 13, kategori: "Layar Touchscreen", komponen: "10.1\" IPS 1920×1080 Capacitive Touch (Medical Grade, IP52)", qty: 1, satuan: "unit", hargaTaiwan: 5_500_000, hargaIndonesia: 7_200_000, catatan: "Form factor kompak sesuai Lenshooke X12 PRO" },
    ],
  },
  {
    kategori: "Sistem Pendingin / Thermal",
    subtotalTaiwan: 420_000,
    subtotalIndonesia: 600_000,
    items: [
      { no: 14, kategori: "Sistem Pendingin / Thermal", komponen: "Heatsink + 40mm Blower Fan set", qty: 1, satuan: "unit", hargaTaiwan: 245_000, hargaIndonesia: 350_000 },
      { no: 15, kategori: "Sistem Pendingin / Thermal", komponen: "Thermal Monitoring PCB (4ch)", qty: 1, satuan: "unit", hargaTaiwan: 175_000, hargaIndonesia: 250_000 },
    ],
  },
  {
    kategori: "Sistem Mekanik / Casing",
    subtotalTaiwan: 14_760_000,
    subtotalIndonesia: 19_800_000,
    items: [
      { no: 16, kategori: "Sistem Mekanik / Casing", komponen: "Semi-Motorized X + Manual Y Coaxial Stage", qty: 1, satuan: "unit", hargaTaiwan: 3_500_000, hargaIndonesia: 5_000_000, catatan: "X-axis motor untuk auto-scan strip" },
      { no: 17, kategori: "Sistem Mekanik / Casing", komponen: "Motorized Z-Focus Stepper (100 nm res.)", qty: 1, satuan: "unit", hargaTaiwan: 2_450_000, hargaIndonesia: 3_500_000 },
      { no: 18, kategori: "Sistem Mekanik / Casing", komponen: "Single-Axis Stage + Z Controller PCB", qty: 1, satuan: "unit", hargaTaiwan: 840_000, hargaIndonesia: 1_200_000 },
      { no: 19, kategori: "Sistem Mekanik / Casing", komponen: "Al 6061 T6 Compact Chassis Hardcoat Anodized", qty: 1, satuan: "set", hargaTaiwan: 7_200_000, hargaIndonesia: 9_000_000, catatan: "Desain mirip Lenshooke X12 PRO" },
      { no: 20, kategori: "Sistem Mekanik / Casing", komponen: "IP52 Sealing + EMI Gasket Kit", qty: 1, satuan: "set", hargaTaiwan: 350_000, hargaIndonesia: 500_000 },
      { no: 21, kategori: "Sistem Mekanik / Casing", komponen: "Integrated Carrying Handle Al 6061", qty: 1, satuan: "unit", hargaTaiwan: 210_000, hargaIndonesia: 300_000 },
      { no: 22, kategori: "Sistem Mekanik / Casing", komponen: "Hardware SS316 M2/M3/M4 Full Set", qty: 1, satuan: "set", hargaTaiwan: 210_000, hargaIndonesia: 300_000 },
    ],
  },
  {
    kategori: "Power Supply / Baterai",
    subtotalTaiwan: 3_975_000,
    subtotalIndonesia: 5_300_000,
    items: [
      { no: 23, kategori: "Power Supply / Baterai", komponen: "Li-ion 21700 Pack 4S2P (14.8 V, 148 Wh)", qty: 1, satuan: "unit", hargaTaiwan: 2_625_000, hargaIndonesia: 3_500_000, catatan: "~3 jam operasional" },
      { no: 24, kategori: "Power Supply / Baterai", komponen: "BMS 4S 20A + Passive Cell Balancer", qty: 1, satuan: "unit", hargaTaiwan: 525_000, hargaIndonesia: 700_000 },
      { no: 25, kategori: "Power Supply / Baterai", komponen: "GaN USB-C PD 65W Charger Module", qty: 1, satuan: "unit", hargaTaiwan: 300_000, hargaIndonesia: 400_000 },
      { no: 26, kategori: "Power Supply / Baterai", komponen: "DC-DC 12V/5A + 5V/3A multi-rail regulator", qty: 2, satuan: "unit", hargaTaiwan: 262_500, hargaIndonesia: 350_000 },
    ],
  },
  {
    kategori: "Komponen Elektronik Pendukung",
    subtotalTaiwan: 5_312_500,
    subtotalIndonesia: 6_850_000,
    items: [
      { no: 27, kategori: "Komponen Elektronik Pendukung", komponen: "Custom System PCB v2", qty: 1, satuan: "unit", hargaTaiwan: 2_800_000, hargaIndonesia: 3_500_000, catatan: "Motor ctrl, LED ctrl, power mgmt, thermal" },
      { no: 28, kategori: "Komponen Elektronik Pendukung", komponen: "NVMe SSD M.2 2280 1TB PCIe Gen4 x4", qty: 1, satuan: "unit", hargaTaiwan: 1_125_000, hargaIndonesia: 1_500_000 },
      { no: 29, kategori: "Komponen Elektronik Pendukung", komponen: "Wi-Fi 6 + BT 5.2 M.2 module", qty: 1, satuan: "unit", hargaTaiwan: 375_000, hargaIndonesia: 500_000 },
      { no: 30, kategori: "Komponen Elektronik Pendukung", komponen: "USB3.0 PCIe Dedicated Card (M.2)", qty: 1, satuan: "unit", hargaTaiwan: 300_000, hargaIndonesia: 400_000 },
      { no: 31, kategori: "Komponen Elektronik Pendukung", komponen: "Industrial RTC Module (I2C)", qty: 1, satuan: "unit", hargaTaiwan: 187_500, hargaIndonesia: 250_000 },
      { no: 32, kategori: "Komponen Elektronik Pendukung", komponen: "Audio I2S Amp + Speaker", qty: 1, satuan: "unit", hargaTaiwan: 150_000, hargaIndonesia: 200_000 },
      { no: 33, kategori: "Komponen Elektronik Pendukung", komponen: "Cable Harness + Cable Management", qty: 1, satuan: "set", hargaTaiwan: 375_000, hargaIndonesia: 500_000 },
    ],
  },
  {
    kategori: "Aksesori Pendukung",
    subtotalTaiwan: 2_475_000,
    subtotalIndonesia: 3_300_000,
    items: [
      { no: 34, kategori: "Aksesori Pendukung", komponen: "Plan APO Immersion Oil Type F 10 ml", qty: 1, satuan: "set", hargaTaiwan: 375_000, hargaIndonesia: 500_000 },
      { no: 35, kategori: "Aksesori Pendukung", komponen: "WHO 2021 Morphology Reference Slide Set", qty: 1, satuan: "set", hargaTaiwan: 900_000, hargaIndonesia: 1_200_000 },
      { no: 36, kategori: "Aksesori Pendukung", komponen: "NIST Micrometer + Resolution Test Slide", qty: 1, satuan: "set", hargaTaiwan: 600_000, hargaIndonesia: 800_000 },
      { no: 37, kategori: "Aksesori Pendukung", komponen: "Lens Inspection + Cleaning Tool Set", qty: 1, satuan: "set", hargaTaiwan: 225_000, hargaIndonesia: 300_000 },
      { no: 38, kategori: "Aksesori Pendukung", komponen: "Premium Slides 500 pcs + Cover Slips 1000 pcs", qty: 1, satuan: "set", hargaTaiwan: 375_000, hargaIndonesia: 500_000 },
    ],
  },
];

export const totalTaiwan = 69_717_500;
export const totalIndonesia = 96_550_000;

export interface SourcingItem {
  kategori: string;
  komponen: string;
  localSource: string;
  internationalSource: string;
  supplierType: string;
  notes: string;
}

export const sourcingData: SourcingItem[] = [
  { kategori: "Modul Lensa / Optik", komponen: "Plan Apochromat Objectives (10×/40×/100×)", localSource: "Distributor Motic Indonesia", internationalSource: "Motic (Xiamen, China) · Shanghai Optics · Evident Corp (Tokyo)", supplierType: "OEM / Distributor", notes: "Plan Apo objectives harus dari pabrikan optik Tier-1; lokal terbatas untuk grade ini" },
  { kategori: "Modul Lensa / Optik", komponen: "Tube Lens, Condenser, Illuminator", localSource: "Toko optik Jakarta (custom order)", internationalSource: "Tucsen Photonics (Fuzhou) · Shanghai Optics", supplierType: "OEM / Custom fabrication", notes: "LED illuminator bisa custom-order dari Tucsen; condenser off-shelf Motic compatible" },
  { kategori: "Modul Lensa / Optik", komponen: "Filter Wheel, Aperture Assembly", localSource: "—", internationalSource: "Thorlabs (US/China) · Edmund Optics (Asia)", supplierType: "Catalog parts", notes: "Komponen off-shelf dari katalog optik standar" },
  { kategori: "Sensor Kamera", komponen: "Scientific CMOS 20MP (Sony IMX183, TEC)", localSource: "—", internationalSource: "ZWO (Suzhou, China) · QHY (Beijing)", supplierType: "OEM Direct", notes: "Harus scientific-grade dengan TEC cooling; tidak tersedia lokal" },
  { kategori: "Board Edge AI", komponen: "NVIDIA Jetson Orin Nano Super Dev Kit", localSource: "Distributor NVIDIA Indonesia (Synnex)", internationalSource: "Aetina (Taipei, Taiwan) · Seeed Studio (Shenzhen)", supplierType: "Authorized distributor", notes: "Dev Kit tersedia lokal tapi harga premium; Taiwan/Shenzhen lebih murah ~25%" },
  { kategori: "Layar Touchscreen", komponen: "10.1\" Medical-Grade Capacitive Touch", localSource: "—", internationalSource: "Winmate (Taipei, Taiwan) · Advantech (Taiwan)", supplierType: "OEM / Industrial display", notes: "Medical-grade IP52 harus dari spesialis industrial display Taiwan" },
  { kategori: "Sistem Mekanik / Casing", komponen: "Al 6061 T6 Custom Chassis", localSource: "Workshop CNC Surabaya (Tandes / SIER)", internationalSource: "Protolabs (Shenzhen) · RapidDirect (Shenzhen)", supplierType: "CNC fabrication house", notes: "Prototipe bisa lokal Surabaya; mass production lebih efisien via Shenzhen" },
  { kategori: "Sistem Mekanik / Casing", komponen: "Motorized Stage + Z-Focus", localSource: "—", internationalSource: "Zaber (Canada) · Thorlabs · Prior Scientific (UK)", supplierType: "Precision instrument OEM", notes: "Komponen presisi; tidak ada fabrikasi lokal untuk resolusi µm-level" },
  { kategori: "Power Supply / Baterai", komponen: "Li-ion Pack + BMS + GaN Charger", localSource: "Battery assembler Jakarta/Surabaya", internationalSource: "EVE Energy (Shenzhen) · Samsung SDI (Korea)", supplierType: "Battery cell OEM + assembler", notes: "Cell import (Samsung 50S); pack assembly bisa lokal; GaN module import" },
  { kategori: "Komponen Elektronik", komponen: "Custom System PCB v2", localSource: "PCB house Batam (fabrikasi) + SMT Surabaya", internationalSource: "JLCPCB (Shenzhen) · PCBWay (Shenzhen)", supplierType: "PCB fabrication + SMT", notes: "Desain in-house; fabrikasi Shenzhen lebih murah untuk SMT kompleks" },
  { kategori: "Komponen Elektronik", komponen: "NVMe SSD, Wi-Fi Module, USB PCIe Card", localSource: "Tokopedia / distributor IT lokal", internationalSource: "Mouser (US) · DigiKey (US) · LCSC (Shenzhen)", supplierType: "Electronic distributor", notes: "Komponen standar; tersedia lokal maupun internasional" },
  { kategori: "Aksesori Pendukung", komponen: "WHO Reference Slides, Immersion Oil, Calibration Kit", localSource: "Distributor lab supply Indonesia", internationalSource: "Hamilton Thorne (US) · Olympus Life Science (Japan)", supplierType: "Lab supply distributor", notes: "WHO reference slides harus dari sumber tersertifikasi" },
];

export const formatRupiah = (n: number): string =>
  "Rp " + n.toLocaleString("id-ID");
