module.exports = {
    get: {
        tags: ['Product CRUD Operations'],
        description: "Get a Product",
        operationId: 'getProduct',
        parameters: [
            {
                name: "id",
                in: "path",
                schema: {
                    $ref: '#/components/schemas/id'
                },
                required: true,
                description: "A single Product record id"
            }
        ],
        responses: {
            '200': {
                description: "Product is obtained",
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Product'
                        }
                    }
                }
            },
            '404': {
                description: "Product is not found",
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Error',
                            example: {
                                message: "We can't find the Product item",
                                internal_code: "Invalid Id"
                            }
                        }
                    }
                }
            },
            '500': {
                description: "Server Error"
            }
        }
    }
};