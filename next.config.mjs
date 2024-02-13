// next.config.js

/** @type {import('next').NextConfig} */
import runtimeCaching from "next-pwa/cache.js";

import WithPWA from "next-pwa";
const withPWA = WithPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  disable:false
});

export default withPWA({
  // other configs
  reactStrictMode: false,
});
