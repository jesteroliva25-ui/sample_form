import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env'), override: true });

const ENV_URLS = {
  dev: "https://practice.expandtesting.com/login",
  staging: "https://practicetest.expandtestingstaging.com/login",
  prod: "https://practiceprod.expandtesting.com/login"
};

export const getEnv = () => process.env.TEST_ENV || 'dev';
export const getBaseUrl = () => ENV_URLS[getEnv()];



export class getCredentials {
  env = getEnv().toUpperCase();
  username = process.env[`${this.env}_USERNAME`];
  password = process.env[`${this.env}_PASSWORD`];
}