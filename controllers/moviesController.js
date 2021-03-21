const DB = require("../database/models");
const Op = DB.sequelize.Op;

module.exports = {
  list: (req, res) => {
    //return res.json("hola");

    // DB.Movie.findAll().then((movies) => {
    //   return res.json(movies);
    // });
    //DB.Actor.findAll().then((actors) => {
    DB.Genre.findAll().then((genres) => {
      return res.json(genres);
    });
  },
};
