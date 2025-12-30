/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Enable image optimization for dynamic deployment
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'thegolfindia.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  // Add empty turbopack config to silence Next.js 16 error when using webpack
  // This tells Next.js we explicitly want to use webpack, not Turbopack
  turbopack: {},
  // Compress output
  compress: true,
  // Optimize webpack config for performance
  webpack: (config, { isServer, dev }) => {
    // Use memory cache in dev mode to avoid PackFileCacheStrategy errors
    // This is faster and more reliable for development
    if (dev) {
      config.cache = {
        type: 'memory',
      };
    } else if (config.cache && config.cache.type === 'filesystem') {
      // In production, configure filesystem cache properly
      config.cache = {
        ...config.cache,
        buildDependencies: {
          config: [__filename],
        },
      };
    }
    
    // Only apply custom optimizations in production builds
    // Skip in dev to avoid caching issues
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // Vendor chunk for node_modules
            vendor: {
              name: 'vendor',
              chunks: 'all',
              test: /[\\/]node_modules[\\/]/,
              priority: 20,
            },
            // Common chunk for shared code
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'async',
              priority: 10,
              reuseExistingChunk: true,
              enforce: true,
            },
          },
        },
      };
    }
    
    return config;
  }
};

module.exports = nextConfig;