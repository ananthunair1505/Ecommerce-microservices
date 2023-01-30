module.exports = {
    put: {
        tags: ['Product CRUD Operations'],
        description: "Update Product",
        operationId: 'updateProduct',
        parameters: [
            {
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/id"
                },
                required: true,
                description: "Record Id of product to be updated"
            }
        ],
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
            '200': {
                description: "Product updated successfully"
            },
            '404': {
                description: "Product not found"
            },
            '500': {
                description: "Server Error"
            }
        }
    }
};