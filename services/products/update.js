const { ObjectId } = require('mongodb');
const product = require('../../models/document')('products');
const { createProductSchema } = require('../../middlewares/joiSchemas');

module.exports = async (id, { name, quantity }) => {
    if (!ObjectId.isValid(id)) {
        return { err: { message: 'Wrong id format', code: 'invalid_data' } };
    }
    const validProduct = createProductSchema.validate({ name, quantity });
    if (validProduct.error) {
        return { err: { message: validProduct.error.message, code: 'invalid_data' } };
    }
    await product.update({ id, name, quantity });

    return { _id: id, name, quantity };
};