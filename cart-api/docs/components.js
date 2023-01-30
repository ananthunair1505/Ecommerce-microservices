module.exports = {
    components: {
        schemas: {
            _id: {
                type: 'string',
                description: "Record id of a cart Product",
                example: "63d31b04838e0715315c5ebc"
            },

            productId: {
                type: 'string',
                description: "Product Identification Number",
                example: "63d31b04838e0715315c5ebc"
            },

            Product: {
                type: 'object',
                properties: {
                    _id: {
                        type: 'string',
                        description: "Record id of a Product",
                        example: "63d31b04838e0715315c5ebc"
                    },

                    productId: {
                        type: 'string',
                        description: "Product identification Number",
                        example: "63d64dc70055fc6d0cbeb306"
                    },

                    name: {
                        type: 'string',
                        description: "Product's Name",
                        example: "Oneplus Nord 2"
                    }
                }
            },

            ProductInput: {
                type: 'object',
                properties: {
                    productId: {
                        type: 'string',
                        description: "Product identification Number",
                        example: "63d64dc70055fc6d0cbeb306"
                    },

                    name: {
                        type: 'string',
                        description: "Product's Name",
                        example: "Oneplus Nord 2"
                    }
                }
            },

            Error: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string'
                    },
                    internal_code: {
                        type: 'string'
                    }
                }
            }
        }
    }
};