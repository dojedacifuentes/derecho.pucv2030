/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The report is a static, backend-free document — safe to export as a static site.
  // Keep ESLint from blocking production builds; this is a presentation artifact.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
