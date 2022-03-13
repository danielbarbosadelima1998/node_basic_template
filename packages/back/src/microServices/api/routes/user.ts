import { Router } from 'express';
import userResource from '../../../core/resources/userResource';
import resourceController from '../../../core/utils/routing/resourceController';
import userTransformer from '../../../core/databases/sequelize/transformers/userTransformer';

const routes = Router();

const includeWhiteList = [];

const controller = {
  ...resourceController(userResource, userTransformer, includeWhiteList),
};

routes.get('/', controller.index);
routes.get('/:id', controller.show);
routes.post('/', controller.create);
routes.put('/', controller.update);
routes.delete('/:id', controller.destroy);

export default routes;
