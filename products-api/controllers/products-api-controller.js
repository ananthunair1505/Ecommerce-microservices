const ProductService = require('../services/product-service');

exports.getAll = (req, res) => {
    ProductService.getAllProducts().then(result => {
        res.status(200).json({data: result, message: "Success, getting Products" });
    }).catch(eMsg => {
        res.status(500).json({data: [], message: "Error, getting Products" });
    });
}

exports.get = (req, res) => {
    var id = req.params.rid;
    ProductService.getProduct(id).then(result => {
        if(!result){
            res.status(404).json({data: [], message: "Product cannot be found", internal_code: "Invalid Id"});
        }
        else{
            res.status(200).json({data: result, message: "Success, getting Product" });
        }
    }, eMsg => {
        res.status(500).json({data: [], message: "Error, getting Product" });
    });
}

exports.create = async (req, res) => {
    var { id, name } = req.body;
    var product = { id: parseInt(id), name: name };

    try {
        var result = await ProductService.createProduct(product)
        res.status(201).json({data: result, message: "Success, Creating Product" });
    } catch (eMsg) {
        res.status(500).json({data: null, message: "Error, Creating Product" });
    }
}

exports.edit = async (req, res) => {
    var productId = req.params.rid;
    var { id, name } = req.body;
    var product = { id: parseInt(id), name: name };

    // Check if Product is present or not
    const prod = await ProductService.getProduct(productId);

    if(!prod){
        return res.sendStatus(404);
    }

    ProductService.updateProduct(productId, product).then(result => {
        res.status(200).json({data: result, message: "Success, Updating Product" });
    }, eMsg => {
        res.status(500).json({data: null, message: "Error, Updating Product" });    
    });
}

exports.delete = async (req, res) => {
    var id = req.params.rid;

     // Check if Product is present or not
     const product = await ProductService.getProduct(id);

     if(!product){
         return res.sendStatus(404);
     }

    ProductService.deleteProduct(id).then(_ => {
        res.status(204).json({data: null, message: "Success, Deleting Product" });
    }, eMsg => {
        res.status(500).json({data: null, message: "Error, Deleting Product" });
    });
}