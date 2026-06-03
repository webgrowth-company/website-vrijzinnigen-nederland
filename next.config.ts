import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Geen images.unoptimized: true — Next optimaliseert <Image> zelf.
  reactStrictMode: true,
};

export default nextConfig;
