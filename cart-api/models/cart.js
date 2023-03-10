const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = Schema({
    productId: {
        type: Number,
        required: true
    },

    name: {
        type: String,
        required: true
    }
});

module.exports = Cart = mongoose.model("Cart", cartSchema);