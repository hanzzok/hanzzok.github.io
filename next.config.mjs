/*
import withPreact from 'next-plugin-preact';
import createBundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});
*/

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.output.webassemblyModuleFilename = 'static/wasm/[modulehash].wasm';
    config.experiments = {
      ...(config.experiments ?? {}),
      asyncWebAssembly: true,
    };
    return config;
  },
  redirects() {
    return [
      {
        source: '/languages/:name',
        destination: '/api/languages/:name',
        permanent: true,
      },
      {
        source: '/themes/:name',
        destination: '/api/themes/:name',
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
};

export default nextConfig; // withBundleAnalyzer(withPreact(nextConfig));
