const createProduct = require('./create-product');
const getProducts = require('./get-products');
const getProduct = require('./get-product');
const deleteProduct = require('./delete-product');
const updateProduct = require('./update-product');

module.exports = {
    paths: {
        '/products': {
            ...createProduct,
            ...getProducts
        },
        '/products/{id}': {
            ...getProduct,
            ...deleteProduct,
            ...updateProduct
        }
    }
};