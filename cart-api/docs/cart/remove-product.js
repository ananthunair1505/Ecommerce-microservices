module.exports = {
    delete: {
        tags: ['Cart CRUD Operations'],
        description: "Removing a Product from cart",
        operationId: 'removeProduct',
        parameters: [
            {
                name: "productId",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/productId"
                },
                required: true,
                description: "Product Identification Number"
            }
        ],
        responses: {
            '200': {
                description: "Product removed from cart successfully"
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