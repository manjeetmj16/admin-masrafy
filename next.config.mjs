/** @type {import('next').NextConfig} */


let AppUrlLocal = 'http://localhost:3100/';
  let ApiUrlLocal = 'http://localhost:3100/api/';

const env = {
    API_URL: ApiUrlLocal,
    APP_URL: AppUrlLocal,
    // mongodburl: 'mongodb+srv://shahbajmaster:pWbAfMDzWJboWsty@pixastock.njnvr0q.mongodb.net/vistas?retryWrites=true&w=majority',
    mongodburl :  "mongodb+srv://manjeetjmeena:ghozpAtpmbQvmmEI@cluster0.oborn.mongodb.net/",
    TZ: 'UTC',
  }


const nextConfig = {
    env: env,
};

export default nextConfig;
