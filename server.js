const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./app/models');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
db.sequelize.sync({force: false}).then(()=> {
    console.log('Db synced.')
});

require('./app/routes/article.route.js')(app);

app.get('/', (req, res) => {
    res.json({ "message": "Welcome to JavaWorm Blog Server" });
});

app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});
