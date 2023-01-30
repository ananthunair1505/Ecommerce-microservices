const express = require('express');
const router = express.Router();

const cartApiController = require('../controllers/cart-api-controller');

router.get('/', cartApiController.getAll);

router.get('/:rid', cartApiController.get);

router.post('/', cartApiController.addProduct);

router.delete('/:rid', cartApiController.removeProduct);

module.exports = router;