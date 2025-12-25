// import type { NextConfig } from "next";
// // @type {import('next').NextConfig}
// const nextConfig: NextConfig = {
//   /* config options here */ 
// };

// export default nextConfig;
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: [
//       'thumbs.dreamstime.com',
//       'img.freepik.com',
//       'static.vecteezy.com' ,
//        "img.freepik.com",
//       "thumbs.dreamstime.com",
//       "www.shutterstock.com",
//     ],
//   },
// };

// module.exports = nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: false,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
