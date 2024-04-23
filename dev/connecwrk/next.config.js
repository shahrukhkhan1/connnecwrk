/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { 
    ignoreDuringBuilds: true, 
  }, 


  env:{
    appUrl:'https://phpstack-1254813-4504200.cloudwaysapps.com',
  },
  images: {
    domains: ['',''],

    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: '',
    //     port: '',
    //     pathname: '/upload/**',
    //   },
     
    // ],
  },

};

module.exports = nextConfig;
