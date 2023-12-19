var swaggerDocument = require('./sugger-document');
var fs = require('fs');
var https = require('https');

const express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./app/models');
const swaggerUi = require('swagger-ui-express');

const app = express();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
db.sequelize.sync({force: false}).then(()=> {
    console.log('Db synced.')
});

require('./app/routes/course.route.js')(app);
require('./app/routes/enrollment.route.js')(app);

app.get('/', (req, res) => {
    res.json({ "message": "Welcome to e learning platform" });
});

app.listen(8081, () => {
    console.log("Server is listening on port 8081");
});
module.exports = app;