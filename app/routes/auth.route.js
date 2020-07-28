module.exports = (app) => {
    const authController = require("../controllers/auth.controller");
    app.post('/register', authController.register);
}