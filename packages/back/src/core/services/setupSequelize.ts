import models from '../databases/sequelize/models';
import sequelize from './sequelize';

let associated = false;

export const initAssociations = () => {
  if (!associated) {
    Object.values(models).forEach((model) => {
      if (model.associate) model.associate(models);
    });
    associated = true;
  }
  return models
};

export const destroy = async () => sequelize.close();

const start = async (): Promise<void> => {
  initAssociations();
  await sequelize
    .sync()
    .then(() => console.log('db is ready'))
    .catch((error) => console.error('error: ', error));
};

export default start;
