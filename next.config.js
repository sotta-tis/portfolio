/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: process.env.NODE_ENV === "production" ? "export" : undefined, // 開発時は静的エクスポートを無効化
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH,
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "/portfolio",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH ? "" : "/portfolio/",
};

module.exports = nextConfig;
