const config = require("../config.js");
const constants = require("../constants.js");
const db = require("../models");
const bcrypt = require("bcryptjs");
const User = db.users;
const jwt = require("jsonwebtoken");

exports.register = (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 8);
  if (!req.body) {
    return res.status(400).send({
      message: constants.MESSAGE_NOT_EMPTY,
    });
  }

  User.findAll({ where: { username: req.body.username } }).then((users) => {
    if (users.length > 0) {
      res.status(405).send("User already Exist.");
    } else {
      User.create({
        username: req.body.username,
        password: hashedPassword,
        active: true,
      })
        .then((user) => {
          const token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 86400,
          });
          res.status(200).send({ auth: true, token: token });
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || constants.MESSAGE_ERROR,
          });
        });
    }
  });
};


exports.login =  (req, res)=> {

  if (!req.body) {
    return res.status(400).send({
      message: constants.MESSAGE_NOT_EMPTY,
    });
  }

  User.findOne({where: {username: req.body.username}}).then((user)=> {
      bcrypt.compare(req.body.password, user.password, (err, response)=> {
          if(err) res.status(401).send(constants.AUTH_FAILURE);
          if(response) {
            const token = jwt.sign({ id: user.id }, config.secret, {
              expiresIn: 86400,
            });
            res.send({success: true, token });
          }
      });
  });
}
