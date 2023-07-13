/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "4000"],
    domains: ["localhost", "lh3.googleusercontent.com"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
