import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sperm Quant — CASA Instrument",
  description:
    "Computer-Assisted Sperm Analysis instrument by NuRichter Programme. Designed for accessible andrology diagnostics aligned with WHO 6th Edition (2021).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
