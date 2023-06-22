module.exports = {
    experimental: {
      appDir: true,
      fontLoaders: [
        { loader: '@next/font/google', options: { subsets: ['latin'] } },
      ],
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
          // port: '',
          // pathname: '/account123/**',
        },
      ],
    },
    reactStrictMode: true,
    webpack : ( config ) => {
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      })
  
      return config
    }
  }