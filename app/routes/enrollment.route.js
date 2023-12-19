
module.exports = (app) => {
    const enrollmentController = require('../controllers/enrollment.controller.js');
    app.post('/enrollment', enrollmentController.post);
}
