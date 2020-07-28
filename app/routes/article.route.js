var VerifyToken = require('../auth/verify.token');

module.exports = (app) => {
    const articleController = require('../controllers/article.controller.js');
    app.get('/articles', articleController.get);
    app.get('/article/:uri', articleController.getByUri)
    app.get('/published-article/:uri', articleController.getPublishedArticleByUrl)
    app.post('/article', VerifyToken, articleController.post);
    app.put('/article', VerifyToken, articleController.put);
    app.delete('/article/:id', VerifyToken, articleController.delete);
}
