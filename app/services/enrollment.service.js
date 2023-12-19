const db = require("../models.js");
const Enrollment = db.enrollment;
const Course = db.courses;
const { Op } = require('sequelize');

class EnrollmentService {
    create =async (req, res)=> {
        const course = await Course.findByPk(req.body.courseId);
        if(!course) return res.status(400).send({body: "Course is not found"});
        Enrollment.create(req.body)
        .then((enrollment) => {
          res.send(enrollment);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || constants.MESSAGE_ERROR,
          });
        });
    }
}

module.exports = new EnrollmentService();
