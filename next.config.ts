import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: {
    // R3F JSX types use legacy JSX namespace not yet fully compatible with React 19
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
