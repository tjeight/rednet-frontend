import { default as pwaConfig } from "next-pwa";

const withPWA = pwaConfig({
  dest: "public",
  // disable: process.env.NODE_ENV === "development",
});

/** @type {import('next').NextConfig} */

export default withPWA({
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dlaiwpar81okkqcb.public.blob.vercel-storage.com",
        port: "",
        pathname: "/vgseven/**",
      },
    ],
  },
});
