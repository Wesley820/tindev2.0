import express from 'express';
import cors from 'cors';
import bodyParder from 'body-parser';
import helmet from 'helmet';
import routes from './routes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(bodyParder.json());
    this.app.use(helmet());
  }

  routes() {
    routes(this.app);
  }
}

export default new App().app;
