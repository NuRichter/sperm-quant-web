import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f8f7f5",
          100: "#f1f0ee",
          200: "#e8e7e3",
          300: "#d3d1c7",
          400: "#b4b2a9",
          500: "#9c9a92",
          600: "#73726c",
          700: "#5f5e5a",
          800: "#3d3d3a",
          900: "#2c2c2a",
        },
        accent: {
          blue: "#185fa5",
          teal: "#0F6E56",
          amber: "#BA7517",
          coral: "#993C1D",
        },
        zone: {
          compute: "#E6F1FB",
          "compute-stroke": "#85B7EB",
          wifi: "#EAF3DE",
          "wifi-stroke": "#97C459",
          optic: "#FAEEDA",
          "optic-stroke": "#FAC775",
          psu: "#FCEBEB",
          "psu-stroke": "#F09595",
        },
      },
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
