import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   async rewrites() {
    return [
      {
        source: "/api/:path*",   // フロントエンドでのパスl
        destination: "http://192.168.1.28:3000/api/:path*",  // バックエンドのローカルホストURL

      },
    ];
  },
};

export default nextConfig;
