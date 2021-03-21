"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("actors", [
      {
        firstName: "Karina",
        lastName: "Escobar",
        rating: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Belen",
        lastName: "Escobar",
        rating: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("actors", null, {});
  },
};
