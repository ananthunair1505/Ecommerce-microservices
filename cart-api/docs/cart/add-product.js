module.exports = {
    post: {
        tags: ['Cart CRUD Operations'],
        description: "Add a Product",
        operationId: 'addProduct',
        parameters: [],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/ProductInput'
                    }
                }
            }
        },

        responses: {
            '201': {
                description: "Product added to cart successfully"
            },
            '500': {
                description: "Server Error"
            }
        }
    }
}