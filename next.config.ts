import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/v0/b/mini-marketplace-a9780.firebasestorage.app/o/**",
      },
    ],
  },
};

export default nextConfig;
