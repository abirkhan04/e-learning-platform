const Sequelize = require("sequelize");
const port = process.env.DATABASE_SOCKET;

const dbConfig = require('../config/database.config.js');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: port,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.courses = require("./model/course.js")(sequelize, Sequelize);
db.enrollment = require("./model/enrollment.js")(sequelize, Sequelize);
db.enrollment.belongsTo(db.courses);
module.exports = db;
