const product = require('../../models/document')('products');

module.exports = async () => {
    const products = await product.list();
    return { products };
};