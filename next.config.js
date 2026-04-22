/** @type {import('next').NextConfig} */
const basePath = process.env.GITHUB_ACTIONS ? "/tiger-ledgers-website" : "";

const nextConfig = {
  basePath,
  assetPrefix: basePath,
  output: "export",
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
      },
    ],
  },
};

export default nextConfig;
