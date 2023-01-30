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

    static async getProduct(productIdDB) {
        try {
            const singleProduct = await Product.findById({_id: productIdDB});
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

    static async updateProduct(productIdDB, product) {
        try {
            const updateResponse = await Product.findOneAndUpdate({ _id: productIdDB }, product);
            return updateResponse;
        } catch (error) {
            console.log(`Could not update product ${error}`);
        }
    }

    static async deleteProduct(productIdDB) {
        try {
            const deletedResponse = await Product.findOneAndDelete({ _id: productIdDB });
            return deletedResponse;
        } catch (error) {
            console.log(`Could not delete product ${error}`);
        }
    }
}

module.exports = ProductDAO;