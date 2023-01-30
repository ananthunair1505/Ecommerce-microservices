const Product = require('../models/product');

class ProductDAO {
    static async getAllProducts() {
        try {
            const allProducts = await Product.find();
            return allProducts;
        } catch (error) {
            console.log(`Could not fetch Products ${error}`);
        }
    }

    static async getProduct(productId) {
        try {
            const singleProduct = await Product.findOne({id: productId});
            return singleProduct;
        } catch (error) {
            console.log(`Could not fetch Product ${error}`);
        }
    }

    static async createProduct(product) {
        try {
            const response = await new Product(product).save();
            return response;
        } catch (error) {
            console.log(`Could not create product ${error}`);
        }
    }

    static async updateProduct(productId, product) {
        try {
            const updateResponse = await Product.findOneAndUpdate({ id: productId }, product);
            return updateResponse;
        } catch (error) {
            console.log(`Could not update product ${error}`);
        }
    }

    static async deleteProduct(productId) {
        try {
            const deletedResponse = await Product.findOneAndDelete({ id: productId });
            return deletedResponse;
        } catch (error) {
            console.log(`Could not delete product ${error}`);
        }
    }
}

module.exports = ProductDAO;