const { ObjectId } = require('mongodb');
const sale = require('../../models/document')('sales');
const { createSaleSchema } = require('../../middlewares/joiSchemas');

module.exports = async (id, itensSold) => {
    if (!ObjectId.isValid(id)) {
        return { err: { message: 'Wrong product ID or invalid quantity', code: 'invalid_data' } };
    }
    const validProduct = createSaleSchema.validate(itensSold);
    if (validProduct.error) {
        return { err: { message: 'Wrong product ID or invalid quantity', code: 'invalid_data' } };
    }
    await sale.update({ id, itensSold });

    return { _id: id, itensSold };
};