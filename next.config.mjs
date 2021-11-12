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
    if (typeof config === 'function') {
      process.exit(1);
    }
    config.output.webassemblyModuleFilename = 'static/wasm/[modulehash].wasm';
    config.experiments = {
      ...(config.experiments ?? {}),
      asyncWebAssembly: true,
    };
    return config;
  },
  reactStrictMode: true,
};

export default nextConfig; // withBundleAnalyzer(withPreact(nextConfig));
