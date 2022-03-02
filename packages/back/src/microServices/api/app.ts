import http from 'http';
import express from './express';
import setupSequelize from '../../core/services/setupSequelize'

const PORT = process.env.API_PORT;

const app = async() => {
  await setupSequelize()

  const httpServer = http.createServer(express);

  httpServer.listen(PORT,() => console.log(`Running on ${PORT}`))
};

export default app();
