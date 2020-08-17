import express from 'express';
import cors from 'cors';
import bodyParder from 'body-parser';
import helmet from 'helmet';
import socket from 'socket.io';
import http from 'http';
import routes from './routes';
import './database';

class App {
  constructor() {
    this.app = express();
    this.server = http.Server(this.app);

    this.io = socket(this.server);

    this.connectedUsers = {};

    this.middlewares();
    this.socket();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.io.set('origins', '*:*');
    this.app.use(bodyParder.json());
    this.app.use(helmet());
  }

  socket() {
    this.io.on('connection', (socket) => {
      const { user } = socket.handshake.query;
      this.connectedUsers[user] = socket.id;
    });

    this.app.use((request, response, next) => {
      request.io = this.io;
      request.connectedUsers = this.connectedUsers;
      return next();
    });
  }

  routes() {
    routes(this.app);
  }
}

export default new App().server;
