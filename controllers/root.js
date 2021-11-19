const express = require('express');

const root = express.Router({ mergeParams: true });

root.use('/products', require('./products/router'));

module.exports = root;
