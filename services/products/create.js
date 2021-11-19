const { createProductSchema } = require('../../middlewares/joiSchemas');
const product = require('../../models/document')('products');

// O primeiro valida a requisição, o segundo chama o model
module.exports = async ({ name, quantity }) => {
    const valid = createProductSchema.validate({ name, quantity });
    if (valid.error) {
      return { err: { message: valid.error.message, code: 'invalid_data' } };
    }

    const find = await product.find({ name });
  if (find) {
    return { err: { message: 'Product already exists', code: 'invalid_data' } };
  }
  
    const insert = await product.create({ name, quantity });
    return insert.ops[0];
  };