var getArticles  = require('./OpenApi/article.swagger');

const swaggerDocument = {
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        title: 'APIs Document',
        description: 'your description here',
        termsOfService: '',
        contact: {
            name: 'Abir Khan',
            email: 'son.hoang01@gmail.com',
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
          name: 'Article Crud'
        }
    ],
    paths: {
        "/articles": {
            tags: ['Article Crud'],
            "get": getArticles
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
