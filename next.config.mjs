/** @type {import('next').NextConfig} */

export default {
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
};
