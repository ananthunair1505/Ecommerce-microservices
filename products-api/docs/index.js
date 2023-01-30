const basicInfo = require("./basicInfo");
const components = require("./components");
const servers = require("./servers");
const tags = require("./tags");
const  products = require('./products');

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...tags,
    ...products
};