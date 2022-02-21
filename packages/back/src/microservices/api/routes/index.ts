import { Router } from 'express';

const controller = {
  health: (req, res) => {
    res.send('ok');
  },
};

const routes = Router();

routes.get('/', controller.health);

export default routes;
