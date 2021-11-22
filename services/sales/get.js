const { ObjectId } = require('mongodb');
const productSaleFound = require('../../models/document')('sales');

module.exports = async (id) => {
    if (!ObjectId.isValid(id)) {
        return { err: { message: 'Sale not found', code: 'not_found' } };
    }

    const productSale = await productSaleFound.find(new ObjectId(id));
    if (!productSale) {
        return { err: { message: 'Sale not found', code: 'not_found' } };
    }
    return productSale;
};