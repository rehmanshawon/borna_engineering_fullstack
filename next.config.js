/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    dbConfig: {
      // host: "3.92.234.242",
      host: "127.0.0.1",
      port: 3306,
      user: "root",
      password: "ApsisINT@123", // @@@
      database: "kopotron_example_next",
    },
    secret:
      "THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING",
  },
  publicRuntimeConfig: {
    apiUrl:
      process.env.NODE_ENV === "development"
        ? "http://3.95.176.100:3000/api" // development api
        : "http://3.95.176.100:3000/api", // production api
  },
};

module.exports = nextConfig;
