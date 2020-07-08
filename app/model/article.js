const Sequelize = require("sequelize-mock");

module.exports = (sequelize, Sequelize) => {
  const Article = sequelize.define("article", {
    uri: {
      type: Sequelize.STRING,
    },
    lastModifiedAt: {
      type: Sequelize.DATE,
    },
    published: {
      type: Sequelize.BOOLEAN,
    },
  });
  return Article;
};
