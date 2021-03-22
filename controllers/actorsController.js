const { response } = require("express");
const DB = require("../database/models");
const { Op } = require("sequelize");

module.exports = {
  list: (req, res) => {
    //Genero mi primer ENDPOINT de la API
    DB.Actor.findAll().then((Actors) => {
      return res.status(200).json({
        total: Actors.length,
        data: Actors,
        status: 200,
      });
    });
  },

  show: (req, res) => {
    DB.Actor.findByPk(req.params.id).then((Actor) => {
      return res.status(200).json({
        data: Actor,
        status: 200,
      });
    });
  },

  store: (req, res) => {
    DB.Actor.create(req.body).then((Actor) => {
      return res.status(200).json({
        data: Actor,
        status: 200,
        created: "ok",
      });
    });
  },

  delete: (req, res) => {
    DB.Actor.destroy({
      where: {
        id: req.params.id,
      },
    }).then((response) => {
      return res.json(response);
    });
  },

  search: (req, res) => {
    DB.Actor.findAll({
      where: {
        firstName: { [Op.like]: "%" + req.query.keyword + "%" },
      },
    }).then((Actors) => {
      if (Actors.length > 0) {
        return res.status(200).json(Actors);
      }
      return res.status(200).json("No existen peliculas");
    });
  },
};
