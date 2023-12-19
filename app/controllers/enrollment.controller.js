const constants = require("../constants.js");
const db = require("../models.js");
const Course = db.courses;
const enrollmentService = require('../services/enrollment.service.js');

exports.post = (req, res) => {
  enrollmentService.create(req, res);
};
