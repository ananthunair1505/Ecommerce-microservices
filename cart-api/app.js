let MongooseLoader = require('./loaders/mongoose-loader');
let LoggerLoader = require('./loaders/logger-loader');
let ExpressLoader = require('./loaders/express-loader');

let express = require('express');

const app = express();

//Loaders
MongooseLoader.load();
LoggerLoader.load(app);
ExpressLoader.load(app);

module.exports = app;