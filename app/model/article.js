module.exports = (sequelize, Sequelize) => {
  const Article = sequelize.define("article", {
    uri: {
      type: Sequelize.STRING,
    },
    title: {
      type: Sequelize.STRING,
    },
    author: {
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
