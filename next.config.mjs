/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // <--- ADICIONE ESTA LINHA AQUI
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
