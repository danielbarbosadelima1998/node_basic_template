require('dotenv').config();

if (process.env.NODE_ENV !== 'production') {
  require('@babel/register')({
    extensions: ['.js', '.ts'],
  });
}

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: process.env.DB_DIALECT,
    logging: false,
  }
}