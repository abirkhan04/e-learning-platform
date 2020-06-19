module.exports = (app) => {
    const articles = require('../controllers/article.controller.js');
    app.get('/articles', articles.get);
    app.post('/article', articles.post);
    app.put('/article', articles.put);
    app.delete('/article/:id', articles.delete);
}
