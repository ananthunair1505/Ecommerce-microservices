const addProduct = require('./add-product');
const getProducts = require('./get-products');
const getProduct = require('./get-product');
const removeProduct = require('./remove-product');

module.exports = {
    paths: {
        '/cart': {
            ...addProduct,
            ...getProducts
        },
        '/cart/{productId}': {
            ...getProduct,
            ...removeProduct
        }
    }
};