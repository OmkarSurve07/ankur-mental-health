/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  devIndicators: false,
  // Optional: for external tools like ngrok during dev
  // allowedDevOrigins: ['https://your-ngrok-url.ngrok-free.app'],
}

export default nextConfig
