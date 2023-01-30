module.exports = {
    components: {
        schemas: {
            _id: {
                type: 'string',
                description: "Record id of a cart Product",
                example: "63d31b04838e0715315c5ebc"
            },

            productId: {
                type: 'number',
                description: "Product Identification Number",
                example: "113"
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
                        type: 'number',
                        description: "Product Identification Number",
                        example: "113"
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
                        type: 'number',
                        description: "Product Identification Number",
                        example: "113"
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