/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.googleusercontent.com", 
        port: "",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "books.google.com", 
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      }
    ],
  },
};

export default nextConfig;
