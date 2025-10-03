import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export', // Enable static HTML export for Hostinger
  images: {
    unoptimized: true, // Required for static export
  },
  // Ensure trailing slashes for compatibility
  trailingSlash: true,
};

export default nextConfig;
