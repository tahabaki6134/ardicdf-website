/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{ source: "/live", destination: "/fabrication", permanent: true }];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  }
};

export default nextConfig;
