const article = {
    getArticles: {
        tags: ['Articles'],
        description: "Returns all Articles from the system that the user has access to",
        operationId: 'getArticles',
        responses: {
            200: {
                description: "A list of Articles.",
                content: {
                    "application/json": {
                        schema: {
                            type: 'array',
                            items: {
                                $ref: '#components/schemas/article'
                            }
                        }
                    }
                }
            }
        }
    },
    postArticle: {
        tags: ['Articles'],
        operationId: 'postArticle',
        parameters: [{
            name: 'x-access-token',
            in: 'header',
            description: 'Access Token',
            required: true,
            schema: {
              type: 'string',
            }
        }],
        requestBody : {
            description: "Save Article",
            required: true,
            content: {
               'application/json': {
                schema: {
                   $ref: '#components/schemas/article'
                }
            }
         }
        },
        response: {
            200: {
                description: "Article to be posted",
                content: {
                    "application/json": {
                        schema: {
                            $ref: '#components/schemas/article',
                        }
                    }
                }
            }
        },
    },
    putArticle: {
        tags: ['Articles'],
        operationId: 'putArticle',
        parameters: [{
            name: 'x-access-token',
            in: 'header',
            description: 'Access Token',
            required: true,
            schema: {
              type: 'string',
            }
        }],
        requestBody : {
            description: "Update Article",
            required: true,
            content: {
               'application/json': {
                schema: {
                   $ref: '#components/schemas/article'
                }
            }
         }
        },
        response: {
            200: {
                description: "Article to be updated",
                content: {
                    "application/json": {
                        schema: {
                            $ref: '#components/schemas/article',
                        }
                    }
                }
            }
        },
    },
    deleteArticle: {
        tags: ['Articles'],
        description: 'Delete Article by Id',
        operationId: 'deleteArticle',
        parameters: [{
            name: 'x-access-token',
            in: 'header',
            description: 'Access Token',
            required: true,
            schema: {
              type: 'string',
            }
        },
        {
            name: 'id',
            in: 'path',
            description: 'Article Id',
            required: true,
            schema: {
              type: 'integer',
              format: 'int64'
            }
        }],
        responses: {
            200: {
                description: "Deleted article",
                content: {
                    "application/json": {
                        schema: {
                            type: 'array',
                            items: {
                                $ref: '#components/schemas/article'
                            }
                        }
                    }
                }
            }
        }
    }
}

module.exports = article;
