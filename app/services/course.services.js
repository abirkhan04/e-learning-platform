const db = require("../models.js");
const Course = db.courses;
const { Op } = require('sequelize');

class CourseService {
    create = (req, res)=> {
        Course.create(req.body)
        .then((Course) => {
          res.send(Course);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || constants.MESSAGE_ERROR,
          });
        });
    }

    get = (req, res) => {
        Course.findAll()
        .then((Courses) => {
          res.send(Courses);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || constants.MESSAGE_ERROR,
          });
        });
    }

    getById = (req, res)=> {
        Course.findByPk(req.params.id).then((course) => {
            res.send(course);
          }).catch(err => {
            res.status(500).send({
              message: err.message || constants.MESSAGE_ERROR
            })
          });
    }

    filter = async (req, res)=> {
        const { instructor, price, duration } = req.body;

        // Build the filter conditions
        const filterConditions = {};
        if (instructor) {
          filterConditions.instructor = {
            [Op.like]: `%${instructor}%`,
          };
        }
        if (price) {
          filterConditions.price = {
            [Op.gte]: price, // You can adjust the operator as needed (e.g., [Op.eq], [Op.lte], etc.)
          };
        }
        if (duration) {
          filterConditions.duration = {
            [Op.gte]: duration,
          };
        }
      
        // Perform the query with the applied filters
        const filteredCourses = await Course.findAll({
          where: filterConditions,
        });
      
        res.send(filteredCourses);
    }
}

module.exports = new CourseService();
