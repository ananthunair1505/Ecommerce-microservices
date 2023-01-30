const express = require('express');
const router = express.Router();
const swaggerUI = require("swagger-ui-express");

const docs = require('../docs');

router.use('/', swaggerUI.serve);

router.get('/', swaggerUI.setup(docs));

module.exports = router;