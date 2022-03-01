import Sequelize, { Model, Optional } from "sequelize";
import sequelize from "../../../services/sequelize";

const { DataTypes } = Sequelize;

export type UserInstance = {
  id: string;
  name: string;
  email: string;
  username: string;
  password: string;
  account?: any;
};

type UserCreationAttributes = Optional<UserInstance, "id">;

const User = sequelize.define<Model<UserInstance, UserCreationAttributes>>(
  "User",
  {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,
  },
  {
    tableName: "users",
    paranoid: true,
  }
);

User.associate = (models) => {
  User.belongsTo(models.account, {
    as: "account",
    foreignKey: "accountId",
  });
};

export default User;
