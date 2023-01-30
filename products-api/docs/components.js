module.exports = {
    components: {
        schemas: {
            _id: {
                type: 'string',
                description: "Record id of a product",
                example: "63d31b04838e0715315c5ebc"
            },

            id: {
                type: 'number',
                description: "Product identification Number",
                example: "123"
            },

            Product: {
                type: 'object',
                properties: {
                    _id: {
                        type: 'string',
                        description: "Record id of a Product",
                        example: "63d31b04838e0715315c5ebc"
                    },

                    id: {
                        type: 'number',
                        description: "Product identification Number",
                        example: "123"
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
                    id: {
                        type: 'number',
                        description: "Product identification Number",
                        example: "123"
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