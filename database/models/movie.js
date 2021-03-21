module.exports = (sequelize, DataTypes) => {
  const alias = "Movie";

  const columns = {
    id: { primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER },
    title: DataTypes.STRING,
    rating: DataTypes.DECIMAL,
    awards: DataTypes.NUMBER,
    releaseDate: DataTypes.DATE,
    length: DataTypes.NUMBER,
    genreId: DataTypes.INTEGER,
    // createdAt: DataTypes.DATE,
    // updatedAt: DataTypes.DATE,
  };

  const config = {
    timestamps: true,
    tableName: "movies",
    paranoid: false,
    //underscore: true,
  };

  const movie = sequelize.define(alias, columns, config);

  movie.associate = (models) => {
    movie.belongsTo(models.Genre, {
      as: "genres",
      foreignKey: "genreId",
    });

    movie.belongsToMany(models.Actor, {
      as: "actors",
      through: "actor_movie",
      foreignKey: "movie_id",
      otherKey: "actor_id",
      timestamps: false,
    });
  };

  return movie;
};
