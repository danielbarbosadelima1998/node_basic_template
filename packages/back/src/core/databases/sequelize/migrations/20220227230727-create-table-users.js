"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        type: Sequelize.UUIDV4,
        primaryKey: true,
      },
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      username: {
        type: Sequelize.STRING,
        unique: true,
      },
      password: Sequelize.STRING,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
