const user = {
    getUsers: {
        tags: ['Users'],
        description: "Returns all Users from the system that the user has access to",
        operationId: 'getUsers',
        responses: {
            200: {
                description: "A list of Users.",
                content: {
                    "application/json": {
                        schema: {
                            type: 'array',
                            items: {
                                $ref: '#components/schemas/user'
                            }
                        }
                    }
                }
            }
        }
    },
    postUser: {
        tags: ['Users'],
        operationId: 'postUser',
        requestBody: {
            description: "Save User",
            required: true,
            content: {
                'application/json': {
                    schema: {
                        $ref: '#components/schemas/user'
                    }
                }
            }
        },
        response: {
            200: {
                description: "User to be posted",
                content: {
                    "application/json": {
                        schema: {
                            $ref: '#components/schemas/user',
                        }
                    }
                }
            }
        },
    },
    putUser: {
        tags: ['Users'],
        operationId: 'putUser',
        requestBody: {
            description: "Update User",
            required: true,
            content: {
                'application/json': {
                    schema: {
                        $ref: '#components/schemas/user'
                    }
                }
            }
        },
        response: {
            200: {
                description: "User to be updated",
                content: {
                    "application/json": {
                        schema: {
                            $ref: '#components/schemas/user',
                        }
                    }
                }
            }
        },
    },
    deleteUser: {
        tags: ['Users'],
        description: 'Delete User by Id',
        operationId: 'deleteUser',
        parameters: [{
            name: 'id',
            in: 'path',
            description: 'User Id',
            required: true,
            schema: {
                type: 'integer',
                format: 'int64'
            }
        }],
        responses: {
            200: {
                description: "Deleted user",
                content: {
                    "application/json": {
                        schema: {
                            type: 'array',
                            items: {
                                $ref: '#components/schemas/user'
                            }
                        }
                    }
                }
            }
        }
    },
    register: {
        tags: ['User Authentication'],
        description: 'Register User',
        operationId: 'Register User',
        parameters: [
            {
                name: 'x-access-token',
                in: 'header',
                description: 'Access Token',
                required: true,
                schema: {
                  type: 'string',
                }
            }
        ],
        requestBody: {
            description: "Create User",
            required: true,
            content: {
                'application/json': {
                    schema: {
                        $ref: '#components/schemas/userBody' 
                    }
                }
            }
        },
        responses: {
            200: {
                description: "User Registration",
                content: {
                    "application/json": {
                        schema: {
                            type: 'ob',
                            items: {
                                $ref: '#components/schemas/authResponse'
                            }
                        }
                    }
                }
            }
        }
    },
    login: {
        tags: ['User Authentication'],
        description: 'User Login',
        operationId: 'User Login',
        requestBody: {
            description: "User Login",
            required: true,
            content: {
                'application/json': {
                    schema: {
                        $ref: '#components/schemas/userBody'
                    }
                }
            }
        },
        responses: {
            200: {
                description: "User Login",
                content: {
                    "application/json": {
                        schema: {
                            type: 'ob',
                            items: {
                                $ref: '#components/schemas/authResponse'
                            }
                        }
                    }
                }
            }
        }  
    }
}

module.exports = user;
