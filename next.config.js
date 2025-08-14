/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export for dynamic deployment
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // Enable image optimization for dynamic deployment
    domains: ['localhost', 'thegolfindia.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  // Disable webpack file system cache to prevent ENOENT errors
  webpack: (config) => {
    config.cache = false;
    
    // Optimize bundle size
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    };
    
    return config;
  }
};

module.exports = nextConfig;