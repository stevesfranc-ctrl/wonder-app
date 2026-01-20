/** @type {import('next').NextConfig} */
const repo = "wonder-app";

const nextConfig = {
  output: "export",
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  images: { unoptimized: true },
};


module.exports = nextConfig;