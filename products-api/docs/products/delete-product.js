module.exports = {
    delete: {
        tags: ['Product CRUD Operations'],
        description: "Deleting a Product",
        operationId: 'deleteProduct',
        parameters: [
            {
                name: "_id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/_id"
                },
                required: true,
                description: "Record Id of product to be deleted"
            }
        ],
        responses: {
            '200': {
                description: "Product deleted successfully"
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