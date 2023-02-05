const CartService = require('../services/cart-service');

exports.getAll = (req, res) => {
    CartService.getAll().then(result => {
        res.status(200).json({data: result, message: "Sucess, fetching cart"});
    }).catch(error => {
        res.status(500).json({data: [], message: "Error, fetching Cart"});
    });
}

exports.get = (req, res) => {
    const productId = parseInt(req.params.rid);
    CartService.get(productId).then(result => {
        if(!result){
            return res.sendStatus(404);
        }
        else{
            res.status(200).json({data: result, message: "Success, getting product from cart"});
        }
    }).catch(error => {
        res.status(500).json({data: [], message: "Error, getting product from cart"});
    });
}

exports.addProduct = (req, res) => {
    const {productId, name} = req.body;
    const product = {productId: parseInt(productId), name: name};

    CartService.addProduct(product).then(result => {
        res.status(201).json({data: result, message: "Success, adding product to cart"});
    }).catch(error => {
        res.status(500).json({data: null, message: "Error, could not add product to cart"});
    });
}

exports.removeProduct = async (req, res) => {
    const productId = parseInt(req.params.rid);

    const product = await   CartService.get(productId);

    if(!product){
        return res.sendStatus(404);
    }

    CartService.removeProduct(productId).then(_ => {
        res.status(204).json({data: null, message: "Success, removed product from cart"});
    }).catch(error => {
        res.status(500).json({data: null, message: "Error, could not remove product from cart"});
    });
}