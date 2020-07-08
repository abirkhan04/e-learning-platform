const constants = require("../constants.js");
const db = require("../models");
const Op = db.Sequelize.Op;
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
  Article.update(req.body, { where: { id: req.body._id } })
    .then((article) => {
      if (!article) {
        res.status(404).send({
          message: constants.MESSAGE_NOT_FOUND,
        });
      }
      res.send(article);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

exports.delete = (req, res) => {
  Article.destroy(
    {
      where: {
        id: req.params.id,
      },
    }, (err, article) => {
      if (err) throw err;
      if (!article) {
        res.json({ success: false, message: constants.MESSAGE_NOT_FOUND });
      } else if (article) {
        article.delete();
        res.json(article);
      }
    }
  ).catch((err) => {
    res.status(404).send({
      message: err.message,
    });
  });
};

// exports.getByUri = (req, res) => {
//    Article.findOne({uri: req.params.uri}, (err, article) => {
//         if(err) throw err;
//         if(!article) {
//           res.json({success: false, message: constants.MESSAGE_NOT_FOUND});
//           } else if (article) {
//           res.send(article);
//         }
//      }).catch(err => {
//         res.status(404).send({
//         message: err.message
//     });
//   });
//}
