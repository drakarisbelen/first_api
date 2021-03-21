module.exports = (sequelize, DataTypes) => {
  const alias = "Genre";

  const columns = {
    id: { primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER },
    name: DataTypes.STRING,
    //created_at: DataTypes.DATE,
    //updated_at: DataTypes.DATE,
  };

  const config = {
    timestamps: true,
    tableName: "genres",
    paranoid: false,
    underscore: true,
  };

  const genre = sequelize.define(alias, columns, config);

  // genre.associate = (models) => {
  //   genre.hasMany(models.Movie, {
  //     as: "movies",
  //     foreingKey: "genre_id",
  //   });
  // };

  return genre;
};
