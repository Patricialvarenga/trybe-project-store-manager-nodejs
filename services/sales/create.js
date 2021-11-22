const { createSaleSchema } = require('../../middlewares/joiSchemas');
const sale = require('../../models/document')('sales');

// O primeiro valida a requisição, o segundo chama o model
module.exports = async (products) => {
    const valid = createSaleSchema.validate(products);
    if (valid.error) {
      return { err: { message: 'Wrong product ID or invalid quantity', code: 'invalid_data' } };
    }
  
    const insert = await sale.create({ itensSold: products });
    return insert.ops[0];
  };