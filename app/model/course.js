module.exports = (sequelize, Sequelize) => {
  const Course = sequelize.define("course", {
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    instructor: {
      type: Sequelize.STRING,
    },
    duration: {
      type: Sequelize.MEDIUMINT,
    },
    price: {
      type: Sequelize.FLOAT,
    },
  });
  return Course;
};
