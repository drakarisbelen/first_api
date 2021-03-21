"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("movies", [
      {
        title: "Freddy",
        rating: 1,
        awards: 0,
        length: 100,
        releaseDate: new Date(),
        genreId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "El Sr de los anillos",
        rating: 1,
        awards: 0,
        length: 100,
        releaseDate: new Date(),
        genreId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("movies");
  },
};
