const basicInfo = require("./basicInfo");
const components = require("./components");
const servers = require("./servers");
const tags = require("./tags");
const  cart = require('./cart');

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...tags,
    ...cart
};