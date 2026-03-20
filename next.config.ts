import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/learning-os",
  assetPrefix: "/learning-os/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;