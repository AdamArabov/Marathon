/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Modify the webpack config here as needed
    
        // For example, to add a loader for MP4 files as mentioned earlier:
        config.module.rules.push({
          test: /\.mp4$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'videos/',
              },
            },
          ],
        });
    
        return config;
      },
}

module.exports = nextConfig
