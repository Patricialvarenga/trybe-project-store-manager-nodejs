const sale = require('../../models/document')('sales');

module.exports = async () => {
    const saleList = await sale.list();
    return saleList;
};