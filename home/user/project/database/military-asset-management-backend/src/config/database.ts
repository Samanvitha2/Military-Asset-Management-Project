import { Sequelize, Dialect } from 'sequelize';

// Database configuration
const databaseConfig = {
  database: 'postgres',          // your actual database name
  username: 'postgres',          // your actual username
  password: 'Samu2002#',         // your actual password
  host: 'localhost',             // your DB host
  port: 5432,                    // your DB port
  dialect: 'postgres' as Dialect // <== THIS LINE is important
};

export const sequelize = new Sequelize(
  databaseConfig.database,
  databaseConfig.username,
  databaseConfig.password,
  {
    host: databaseConfig.host,
    port: databaseConfig.port,
    dialect: databaseConfig.dialect,
    logging: false
  }
);
