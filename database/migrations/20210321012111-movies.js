"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("movies", {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      title: Sequelize.DataTypes.STRING,
      rating: Sequelize.DataTypes.DECIMAL,
      awards: Sequelize.DataTypes.INTEGER,
      releaseDate: Sequelize.DataTypes.DATE,
      length: Sequelize.DataTypes.INTEGER,
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE,

      genreId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: "genres",
          },
          key: "id",
        },
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("movies");
  },
};
