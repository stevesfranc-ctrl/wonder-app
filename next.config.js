/** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
const repo = "wonder-app";
const nextConfig = {
  output: "export",
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  images: { unoptimized: true },
};
module.exports = nextConfig;
