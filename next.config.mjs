/** @type {import('next').NextConfig} */
import nextra from "nextra";
const nextConfig = {};

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  defaultShowCopyCode: true
});

export default withNextra(nextConfig);

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
