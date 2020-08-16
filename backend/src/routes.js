import { Router } from 'express';
const routes = Router();

import UserController from './app/controllers/UserController';
import LikeController from './app/controllers/LikeController';
import DislikeController from './app/controllers/DislikeController';

routes.post('/users', UserController.user);
routes.get('/users/:id', UserController.index);

routes.post('/likes/:emmiter/:receive', LikeController.store);
routes.post('/dislikes/:emmiter/:receive', DislikeController.store);

export default (app) => app.use('/api', routes);
