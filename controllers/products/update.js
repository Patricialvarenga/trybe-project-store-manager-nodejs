const statusCodes = require('../statusCodes.json');
const service = require('../../services/products');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const { name, quantity } = req.body;

  const productUpdate = await service.update(id, { name, quantity });

  if (productUpdate.err) {
    return next({ err: {
      code: productUpdate.err.code,
      message: productUpdate.err.message,
    },
    status: statusCodes.unprocessableEntity });
  }
  res.status(statusCodes.ok).json(productUpdate);
};