import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // 关键：告诉 Next.js 导出静态页面
  images: {
    unoptimized: true, // 关键：关闭图片优化，否则 GitHub Pages 会报错
  },
  // 注意：如果你的仓库名是 learning-os，这里需要加上一行：
  basePath: '/learning-os',
};

export default nextConfig;