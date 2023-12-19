module.exports = (sequelize, Sequelize) => {
  const Enrollment = sequelize.define("enrollment", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    enrollmentDate: {
      type: Sequelize.DATE,
    },
  });
  return Enrollment;
};
