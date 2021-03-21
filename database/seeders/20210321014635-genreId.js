"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("genres", [
      {
        name: "Terror",
        ranking: 1,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ciencia Ficcion",
        ranking: 1,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Aventura",
        ranking: 2,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("genres");
  },
};
