module.exports = {
    get: {
        tags: ['Cart CRUD Operations'],
        description: "Get All Products",
        operationId: 'getProducts',
        parameters: [],
        responses: {
            '200': {
                description: "Products are obtained",
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Product'
                        }
                    }
                }
            }
        }
    }
};