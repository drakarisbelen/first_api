const { response } = require("express");
const DB = require("../database/models");
const { Op } = require("sequelize");

module.exports = {
  list: (req, res) => {
    //Genero mi primer ENDPOINT de la API
    DB.Genre.findAll().then((genres) => {
      return res.status(200).json({
        total: genres.length,
        data: genres,
        status: 200,
      });
    });
  },

  show: (req, res) => {
    DB.Genre.findByPk(req.params.id).then((Genre) => {
      return res.status(200).json({
        data: Genre,
        status: 200,
      });
    });
  },

  store: (req, res) => {
       DB.Genre.create(req.body).then((Genre) => {
      return res.status(200).json({
        data: Genre,
        status: 200,
        created: "ok",
      });
    });
  },

  delete: (req, res) => {
    DB.Genre.destroy({
      where: {
        id: req.params.id,
      },
    }).then((response) => {
      return res.json(response);
    });
  },

  search: (req, res) => {
    DB.Genre.findAll({
      where: {
        name: { [Op.like]: "%" + req.query.keyword + "%" },
      },
    }).then((genres) => {
      if (genres.length > 0) {
        return res.status(200).json(genres);
      }
      return res.status(200).json("No existen peliculas");
    });
  },
};
