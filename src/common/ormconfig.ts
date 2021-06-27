import { ConnectionOptions } from 'typeorm';

export const ormConfig = {
  type: 'postgres',
  synchronize: true,
  host: process.env['DB_HOST'],
  port: process.env['DB_PORT'],
  username: process.env['DB_USERNAME'],
  password: process.env['DB_PASSWORD'],
  database: process.env['DB_NAME'],
  autoReconnect: true,
  recconectionIterval: 1000,
  migrationsRun: true,
  entities: ['src/entities/**/*.ts']
} as ConnectionOptions;
