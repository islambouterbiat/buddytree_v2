/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [process.env.FILE_SERVER, process.env.FILE_SERVER_2],
  },
}
