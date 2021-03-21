const { response } = require("express");
const DB = require("../database/models");
const { Op } = require("sequelize");

module.exports = {
  list: (req, res) => {
    //Genero mi primer ENDPOINT de la API
    DB.Movie.findAll().then((movies) => {
      return res.status(200).json({
        total: movies.length,
        data: movies,
        status: 200,
      });
    });
  },

  show: (req, res) => {
    DB.Movie.findByPk(req.params.id).then((movie) => {
      return res.status(200).json({
        data: movie,
        status: 200,
      });
    });
  },

  store: (req, res) => {
    //return res.json(req.body);
    DB.Movie.create(req.body).then((movie) => {
      return res.status(200).json({
        data: movie,
        status: 200,
        created: "ok",
      });
    });
  },

  delete: (req, res) => {
    console.log(req.params.id);
    DB.Movie.destroy({
      where: {
        id: req.params.id,
      },
    }).then((response) => {
      return res.json(response);
    });
  },

  search: (req, res) => {
    console.log("REQ CONTIENE: ", req);
    DB.Movie.findAll({
      where: {
        title: { [Op.like]: "%" + req.query.keyword + "%" },
      },
    }).then((movies) => {
      if (movies.length > 0) {
        return res.status(200).json(movies);
      }
      return res.status(200).json("No existen peliculas");
    });
  },
};
