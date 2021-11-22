const express = require('express');

const root = express.Router({ mergeParams: true });

root.use('/products', require('./products/router'));
root.use('/sales', require('./sales/router'));

module.exports = root;
