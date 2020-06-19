const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
//const csp = require('content-security-policy');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.static(path.join(__dirname, 'dist')));

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, { useFindAndModify: false }).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

require('./app/routes/article.route.js')(app);

app.get('/', (req, res) => {
    res.json({ "message": "Welcome to JavaWorm Blog Server" });
});

app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});
