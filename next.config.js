/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

(module.exports = nextConfig),
  {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "example.com",
          port: "",
          pathname: "/account123/**",
        },
      ],
    },
  },
  {
    // env: {
    //   PUBLIC_KEY: process.env.PUBLIC_KEY,
    //   PRIVATE: process.env.PRIVATE_KEY,
    //   TS: process.env.TS,
    // },
  };
