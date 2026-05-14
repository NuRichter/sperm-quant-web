# Sperm Quant — Product Website

A deploy-ready Next.js website for the Sperm Quant CASA instrument by the NuRichter Programme at UPN "Veteran" Jawa Timur.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React Three Fiber + Drei** (3D product viewer)
- **Framer Motion** (page transitions, animations)
- **Lucide React** (icons)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero section with 3D product teaser |
| `/explorer` | Interactive 3D Design Explorer with exploded view, labels, camera presets |
| `/pricing` | Struktur Harga Komponen — BOM breakdown with Taiwan/Indonesia pricing |
| `/sourcing` | Channel Component Acquisition — supplier mapping by category |
| `/profile` | Profil Sperm Quant + WHO-6 2021 standards alignment |

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push this repo to GitHub
2. Connect to [Vercel](https://vercel.com)
3. Deploy — zero configuration needed

## Design Language

- **Theme**: White, clean, minimalist, premium, life-science
- **Typography**: DM Sans (body) + JetBrains Mono (data/monospace)
- **Colors**: Soft neutrals from the device palette, blue accent (#185fa5)
- **Zone colors**: Blue (compute), Green (wireless), Amber (optical), Red (power)

## Data Sources

- **BOM pricing**: `OmniCASA_BOM_Fixed.xlsx` (Skenario Kalibrasi)
- **Technical specs**: Sperm Quant PPT + QRA-Core specification
- **Dimensions**: 410mm (L) × 300mm (W) × 214mm (H)

## Note

This is a conceptual design website. The product is in prototyping phase and has not undergone regulatory review or clinical validation. WHO-6 alignment refers to algorithmic design intent, not certified compliance.

---

© 2026 NuRichter · nurichter.org
