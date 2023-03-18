/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ['codeforces-readme-stats.vercel.app'],
  },
}

export default nextConfig
