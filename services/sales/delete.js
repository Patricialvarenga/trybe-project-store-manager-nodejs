const { ObjectId } = require('mongodb');
const sale = require('../../models/document')('sales');

module.exports = async (id) => {
    if (!ObjectId.isValid(id)) {
        return { err: { message: 'Wrong sale ID format', code: 'invalid_data' } };
    }

    const saleCanBeDelete = await sale.find(new ObjectId(id));
    if (!saleCanBeDelete) {
        return { err: { message: 'Wrong sale ID format', code: 'invalid_data' } };
    }

    await sale.remove(id);
    return { ...saleCanBeDelete };
};