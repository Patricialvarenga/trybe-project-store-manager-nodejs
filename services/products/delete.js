const { ObjectId } = require('mongodb');
const product = require('../../models/document')('products');

module.exports = async (id) => {
    if (!ObjectId.isValid(id)) {
        return { err: { message: 'Wrong id format', code: 'invalid_data' } };
    }

    const productCanBeDelete = await product.find(new ObjectId(id));
    if (!productCanBeDelete) {
        return { err: { message: 'Wrong id format', code: 'invalid_data' } };
    }

    await product.remove(id);
    return { ...productCanBeDelete };
};