const express = require('express');
const router = express.Router();

const productApiController = require('../controllers/products-api-controller');

router.get("/", productApiController.getAll);

router.get("/:rid", productApiController.get);

router.post("/", productApiController.create);

router.put("/:rid", productApiController.edit);

router.delete("/:rid", productApiController.delete);

module.exports = router;