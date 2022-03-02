require('dotenv').config();

if (process.env.NODE_ENV !== 'production') {
  require('@babel/register')({
    extensions: ['.js', '.ts'],
  });
}

module.exports = {
  development: {
    username: process.env.POSTGRES_DB_USERNAME,
    password: process.env.POSTGRES_DB_PASSWORD,
    database: process.env.POSTGRES_DB_DATABASE,
    host: process.env.POSTGRES_DB_HOST,
    port: Number(process.env.POSTGRES_DB_PORT),
    dialect: process.env.POSTGRES_DB_DIALECT,
    logging: false,
  }
}