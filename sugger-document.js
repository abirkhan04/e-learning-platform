var article  = require('./open-api/article.swagger');
var user = require('./open-api/user.swagger');

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
          name: 'Articles',
        },
        {
          name: 'Users'
        },
        {
          name: 'User Authentication'
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
        },
        "/users": {
            get: user.getUsers
        },
        "/user": {
          post: user.postUser,
          put: user.putUser
        },
        '/user/{id}': {
          delete: user.deleteUser,
        },
        "/register" : {
          post: user.register,
        },
        "/login": {
          post: user.login
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
          },
          user: {
            type: 'object',
            properties : {
               username: {
                 type: 'string'
               },
               password: {
                 type: 'string'
               },
               active: {
                 type: 'boolean'
               }
            }
          },
          userBody : {
            type: 'object',
            properties: {
              username: {
                  type: 'string'
              },
              password: {
                  type: 'string'
              }
           }
          },
          authResponse: {
            type:  'object',
            properties: {
              success: {
                type: 'boolean'
              },
              token: {
                type: 'string'
              }
            }
          }
        }
    } 
}

module.exports = swaggerDocument;
