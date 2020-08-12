import { Router } from 'express';
const routes = Router();

import UserController from './app/controllers/UserController';

routes.post('/users', UserController.user);

export default (app) => app.use('/api', routes);
