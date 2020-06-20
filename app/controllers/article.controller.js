const constants  = require('../constants.js');
const Article = require('../model/article.js');

exports.post = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: constants.MESSAGE_NOT_EMPTY,
      });
    }
    const article = new Article();
    Object.assign(article, req.body);
    article.save().then(data => {
      res.send(article);
        }).catch(err => {
      res.status(500).send({
        message: err.message || constants.MESSAGE_ERROR,
      });
    });
}

exports.get = (req, res) => {
    Article.find().then( articles => {
       res.send(articles);
    }).catch(err=> {
       res.status(500).send({
        message: err.message  || constants.MESSAGE_ERROR
      });
    });
}

exports.put = ( req, res) => {
    if (Object.keys(req.body).length === 0) {
      res.status(400).send({
        message: constants.MESSAGE_NOT_EMPTY,
      });
    }
    Article.findByIdAndUpdate(req.body._id, req.body, { new: true })
      .then(article => {
        if (!article) {
          res.status(404).send({
            message: constants.MESSAGE_NOT_FOUND
          });
        }
        res.send(article);
      }).catch(err => {
        res.status(500).send({
          message: err.message
        });
      });
  }

exports.delete = (req, res) => {
    Article.findOne({
      _id: req.params.id
      }, (err, article) => {
      if (err) throw err;
      if (!article) {
        res.json({ success: false, message: constants.MESSAGE_NOT_FOUND });
      } else if (article) {
        article.delete();
        res.json(article);
      }
    }).catch(err => {
        res.status(404).send({
          message: err.message
    });
  });
}
