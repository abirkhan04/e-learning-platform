const getArticles = {
    tags: ['Articles'],
    description: "Returns all Articles from the system that the user has access to",
    operationId: 'getArticles',
    responses: {
        200: {
            description: "A list of Articles.",
            content: {
                "application/json": {
                    schema: {
                        type : 'array',
                        items : {
                            $ref : '#components/schemas/article'
                        }
                    }
                }
            }
        }
    }
}

module.exports = getArticles;
