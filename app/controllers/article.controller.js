const constants = require("../constants.js");
const db = require("../models");
const moment = require("moment");
const Article = db.articles;

exports.post = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: constants.MESSAGE_NOT_EMPTY,
    });
  }
  const article = {};
  if (!req.body.lastModifiedAt) {
    req.body.lastModifiedAt = moment().format(constants.DATE_FORMAT);
  }
  Object.assign(article, req.body);
  Article.create(article)
    .then((article) => {
      res.send(article);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || constants.MESSAGE_ERROR,
      });
    });
};

exports.get = (req, res) => {
  Article.findAll()
    .then((articles) => {
      res.send(articles);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || constants.MESSAGE_ERROR,
      });
    });
};

exports.put = (req, res) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400).send({
      message: constants.MESSAGE_NOT_EMPTY,
    });
  }
  if (!req.body.lastModifiedAt) {
    req.body.lastModifiedAt = moment().format(constants.DATE_FORMAT);
  }
  Article.update(req.body, { where: { id: req.body.id } })
    .then((number) => {
      if (number == 1) {
        res.send(req.body);
      } else {
        res.send({
          message: constants.MESSAGE_NOT_FOUND,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Article.findByPk(id).then((article) => {
    Article.destroy({
      where: {
        id: req.params.id,
      },
    }).then((number) => {
      if (number == 1) {
        res.send(article);
      }
      res.send({
        message: constants.MESSAGE_NOT_FOUND,
      });
    });
  });
};

exports.getByUri = (req, res) => {
   Article.findAll( {where : {uri: req.params.uri}}).then((articles)=>{
     res.send(articles[0]);
   }).catch(err=>{
     res.status(500).send({
       message: err.message || constants.MESSAGE_ERROR
     })
   });
}

