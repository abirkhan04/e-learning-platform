var article  = require('./OpenApi/article.swagger');

const swaggerDocument = {
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        title: 'APIs Document',
        description: 'Javaworm website crud apis',
        termsOfService: '',
        contact: {
            name: 'Abir Khan',
            email: 'khanabir8536@gmail.com',
            url: 'https://hoangtran.co'
        },
        license: {
            name: 'Apache 2.0',
            url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
        }
    },
    servers: [
        {
          url: 'http://localhost:8080/',
          description: 'Local server'
        }
    ],
    tags: [
        {
          name: 'Articles'
        }
    ],
    paths: {
        "/articles": {
            get: article.getArticles
        },
        "/article": {
            post: article.postArticle,
            put: article.putArticle
        },
        '/article/{id}': {
           delete: article.deleteArticle,
        }
    },
    components: {
        schemas: {
          article: {
            type: "object",
            properties: {
              title: {
                type: "string"
              },
              uri: {
                type: "string"
              },
              description: {
                  type: 'string'
              },
              author: {
                  type: 'string'
              },
              lastModifiedAt: {
                  type: 'string'
              },
              published: {
                  type: 'boolean'
              }
            }
          }
        }
    } 
}

module.exports = swaggerDocument;
