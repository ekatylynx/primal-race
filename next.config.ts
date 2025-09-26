import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    globalNotFound: true,
  },
  images: {
    deviceSizes: [
      360, // Very small mobile
      375, // iPhone SE, iPhone 12/13 mini
      390, // iPhone 12/13/14 Pro
      412, // Samsung Galaxy, Pixel
      414, // iPhone 11/XR/Plus
      430, // iPhone 14 Pro Max
      480, // Small tablets
      520, // Intermediate screens
      640, // Standard mobile screens
      768, // Vertical tablets
      800, // Small laptops
      834, // iPad Pro 10.5"
      884, // Intermediate screens
      960, // Tablets
      1024, // Horizontal tablets
      1080, // Full HD mobile
      1152, // Intermediate screens
      1200, // Small desktops
      1280, // HD laptops
      1366, // Standard laptops
      1440, // MacBook, QHD
    ],
  },
};

export default nextConfig;
