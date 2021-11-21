const { ObjectId } = require('mongodb');
const product = require('../../models/document')('products');

module.exports = async (id) => {
    if (!ObjectId.isValid(id)) {
        return { err: { message: 'Wrong id format', code: 'invalid_data' } };
    }

    const products = await product.find(new ObjectId(id));
    if (!products) {
        return { err: { message: 'Product not found', code: 'not_found' } };
    }
    return products;
};