import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // 告诉 Next.js 我们要导出静态网页
  images: {
    unoptimized: true, // 这一行也是必须的，否则图片会报错
  },
};

export default nextConfig;