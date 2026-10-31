import type { NextConfig } from "next";
//import path from "path";

//const path = require("path")
const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  allowedDevOrigins: ["192.168.1.3", "192.168.1.10", "192.168.1.5","192.168.1.15"],
};

export default nextConfig;
