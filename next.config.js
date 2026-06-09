import WithPWA from "next-pwa";

const withPWA = WithPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  scope: "/",
  sw: "service-worker.js",
});

/**
 * @type {import('next').NextConfig}
 */
// @ts-ignore
const config = withPWA({
  reactStrictMode: true,

  // ✅ REQUIRED for static export to GitHub Pages
  output: "export",

  // ✅ ADD THIS: Disable image optimization for static export
  images: {
    unoptimized: true,
  },
});

export default config;