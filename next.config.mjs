/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [{ source: "/review.html", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] }];
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
