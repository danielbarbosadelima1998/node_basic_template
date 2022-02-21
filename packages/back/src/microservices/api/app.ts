import http from 'http';
import express from './express';

const PORT = process.env.API_PORT;

const app = () => {
  // setup sequelize

  const httpServer = http.createServer(express);

  httpServer.listen(process.env.PORT,() => console.log(`Running on ${PORT}`))
};

export default app();
