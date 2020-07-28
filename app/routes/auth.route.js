var VerifyToken = require('../auth/verify.token');

module.exports = (app) => {
    const authController = require("../controllers/auth.controller");
    app.post('/register', VerifyToken, authController.register);
}
