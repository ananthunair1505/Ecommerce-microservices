const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = Schema({
    id: {
        type: Number,
        required: true
    },

    name: {
        type: String,
        required: true
    }
}); 

module.exports = Product = mongoose.model("Product", productSchema);