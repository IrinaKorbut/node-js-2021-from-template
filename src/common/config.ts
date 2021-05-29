import dotenv from 'dotenv';
import path from 'path';

const PORT = 'PORT';
const NODE_ENV = 'NODE_ENV';
const MONGO_CONNECTION_STRING = 'MONGO_CONNECTION_STRING';
const JWT_SECRET_KEY = 'JWT_SECRET_KEY';
const AUTH_MODE = 'AUTH_MODE';

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

export const config = {
  PORT: process.env[PORT],
  NODE_ENV: process.env[NODE_ENV],
  MONGO_CONNECTION_STRING: process.env[MONGO_CONNECTION_STRING],
  JWT_SECRET_KEY: process.env[JWT_SECRET_KEY],
  AUTH_MODE: process.env[AUTH_MODE] === 'true',
};
