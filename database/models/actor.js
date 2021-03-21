module.exports = (sequelize, DataTypes) => {
  const alias = "Actor";

  const columns = {
    id: { primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    rating: DataTypes.DECIMAL,
    fullName: DataTypes.STRING,

    //created_at: DataTypes.DATE, //No hace falta esto si usamos el timestamps pero en la BD y migrations debe estar creado sin camelCase
    //updated_at: DataTypes.DATE,
  };

  const config = {
    //timestamps: true,
    tableName: "actors",
    paranoid: false,
    //underscore: true,
  };

  const actor = sequelize.define(alias, columns, config);

  // actor.assoaciate = (models) => {
  //   actor.belongsToMany(models.Movie, {
  //     as: "movies",
  //     through: "actor_movie",
  //   });
  // };

  return actor;
};
