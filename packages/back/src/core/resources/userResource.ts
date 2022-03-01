import BaseResource from "./BaseResource";
import userRepository from "../databases/sequelize/repositories/userRepository";
import { UserInstance } from "../databases/sequelize/models/User";

class UserResource extends BaseResource<UserInstance> {
  constructor() {
    super(userRepository);
  }
}

export default new UserResource();
