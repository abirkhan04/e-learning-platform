const constants = require("../constants.js");
const db = require("../models.js");
const Course = db.courses;
const CourseService = require('../services/course.services.js');

exports.post = (req, res) => {
  CourseService.create(req, res);
};

exports.get = (req, res) => {
    CourseService.get(req, res);
};

exports.getById = (req, res) => {
    CourseService.getById(req, res);
}

exports.filter = async (req, res) => {
   CourseService.filter(req, res);
};
