import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/resume',
  assetPrefix: '/resume/',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
