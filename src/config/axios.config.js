const env = process.env.NODE_ENV;
const devURL = 'http://gank.io/api/data/'; // 开发环境URL
const prodURL = 'http://gank.io/api/data/'; // 生产环境URL


export const isDev = env === 'development';
export const TimeOut = 3000;
export const BaseURL = isDev ? devURL : prodURL;