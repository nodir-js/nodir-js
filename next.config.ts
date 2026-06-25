import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve images as-is, without Next.js on-demand optimization.
    unoptimized: true,
  },
};

export default nextConfig;
