import { Router } from 'express';
const routes = Router();

import UserController from './app/controllers/UserController';

routes.post('/users', UserController.user);
routes.get('/users/:id', UserController.index);

export default (app) => app.use('/api', routes);
