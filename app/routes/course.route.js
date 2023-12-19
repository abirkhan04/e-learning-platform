
module.exports = (app) => {
    const courseController = require('../controllers/course.controller.js');
    app.get('/courses', courseController.get);
    app.get('/course/:id', courseController.getById)
    app.post('/create-course', courseController.post);
    app.post('/filter-courses', courseController.filter);
}
