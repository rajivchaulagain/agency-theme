/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  async redirects() {
    return [
      {
        source: '/',       
        destination: '/landing1', 
        permanent: true,  
      },
    ];
  },
};

module.exports = nextConfig;
