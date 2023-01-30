const { response } = require('express');
const Cart = require('../models/cart');

class CartDAO {
    static async getAll() {
        try{
            const allProducts = await Cart.find();
            return allProducts;
        } catch (error) {
            console.log('Could not fetch the cart: ', error);
        }
    }

    static async get(productIdDB) {
        try {
            const product = await Cart.findOne({productId: productIdDB});
            return product;
        } catch (error) {
            console.log(`could not fetch product : ${error}`);
        }
    }

    static async addProduct(product) {
        try {
            const reponse = await new Cart(product).save();
            return response;
        } catch(error) {
            console.log(`Could not add product to cart: ${error}`);
        }
    }

    static async removeProduct(productIdDB) {
        try {
            const deleteResponse = await Cart.findOneAndDelete({productId: productIdDB});
            return deleteResponse;
        } catch (error) {
            console.log(`Could not remove product: ${error}`);
        }
    }
}

module.exports = CartDAO;