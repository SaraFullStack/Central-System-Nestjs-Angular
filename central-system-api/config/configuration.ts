let ENV = '.env.development';

const configuration = (): string => {
  if (process.env['ENV'] === 'PRODUCTION') {
    ENV = '.env.production';
  } else if (process.env['ENV'] === 'STAGING') {
    ENV = '.env.staging';
  }
  console.log(ENV);
  return ENV;
};
export default configuration;
